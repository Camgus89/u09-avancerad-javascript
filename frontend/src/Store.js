import create from 'zustand';

const useAuthStore = create((set) => ({
  name: '',
  email: '',
  password: '',
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
}));

export default useAuthStore;


