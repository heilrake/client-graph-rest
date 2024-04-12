/// <reference types="vite/client" />
declare global {
  interface Window {
    store: typeof useAuthState;
  }
}

window.store = useAuthState;

export default useAuthState;
