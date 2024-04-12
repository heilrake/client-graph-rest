import { create } from 'zustand';
import { authService } from '../service';
import zukeeper from 'zukeeper';

interface IAuthStore {
  loading: boolean;
  error: boolean;
  payload: null | any;
  user: null | any;
  IsAuth: boolean;
  login: (data: any) => void;
}

const initialState = {
  loading: false,
  error: false,
  user: null,
  payload: null,
  IsAuth: false,
};

export const useAuthState = create<IAuthStore>(
  zukeeper(
    (
      set: (arg0: {
        loading?: boolean;
        error?: boolean;
        user?: any;
        payload?: null;
        IsAuth?: boolean;
      }) => void,
    ) => ({
      ...initialState,

      login: async (payload: { email: string; password: string }) => {
        const { email, password } = payload;
        try {
          const response = await authService.login(email, password);

          localStorage.setItem('token', response.data.accessToken);

          set({ user: response.data.user, IsAuth: true, loading: false });
        } catch (error) {
          console.log(error);
          set({ loading: false });
        }
      },

      logout: async () => {
        await authService.logout();

        localStorage.removeItem('token');

        set({ user: null, IsAuth: false });
      },

      checkAuth: async () => {
        set({ ...initialState, loading: true });
        try {
          const response = await authService.refresh();
          localStorage.setItem('token', response.data.accessToken);
          set({ user: response.data.user, IsAuth: true, loading: false });
        } catch (error: any) {
          throw new Error(error);
        }
      },
    }),
  ),
);

window.store = useAuthState;
