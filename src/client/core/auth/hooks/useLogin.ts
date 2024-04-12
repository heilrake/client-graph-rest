import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../service';

type OnLogingCbType = (values: { email: string; password: string }) => void;

type UseLogin = {
  loadingLogin: boolean;
  onLogin: OnLogingCbType;
};

export const useLogin = (): UseLogin => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onLogin = useCallback<OnLogingCbType>((payload) => {
    void (async () => {
      const { email, password } = payload;
      try {
        setLoading(true);
        const response = await authService.login(email, password);

        localStorage.setItem('token', response.data.accessToken);

        setLoading(false);
        navigate('/profile');
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return { onLogin, loadingLogin: loading };
};
