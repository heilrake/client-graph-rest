import { useCallback, useState } from 'react';
import { authService } from '../service';

type UseCheckAuth = {
  loadingCheckAuth: boolean;
  onCheckAuth: () => void;
};

export const useCheckAuth = (): UseCheckAuth => {
  const [loading, setLoading] = useState(false);
  const onCheckAuth = useCallback(() => {
    void (async () => {
      try {
        setLoading(true);
        const response = await authService.refresh();

        localStorage.setItem('token', response.data.accessToken);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return { onCheckAuth, loadingCheckAuth: loading };
};
