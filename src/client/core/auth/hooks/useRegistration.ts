import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import { authService } from "../service";

type OnRegistrateCbType = (values: { email: string; password: string }) => void;

type UseRegistrate = {
  loadingRegistrate: boolean;
  onRegistrate: OnRegistrateCbType;
};

export const useRegistration = (): UseRegistrate => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onRegistrate = useCallback<OnRegistrateCbType>((payload) => {
    void (async () => {
      const { email, password } = payload;
      try {
        setLoading(true);
        const response = await authService.registration(email, password);

        localStorage.setItem("token", response.data.accessToken);
        setLoading(false);
        navigate("/profile");
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    })();
  }, []);

  return { onRegistrate, loadingRegistrate: loading };
};
