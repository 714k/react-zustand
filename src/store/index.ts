import { create } from "zustand";
import zukeeper from "zukeeper";
import { State, Action } from "./state";

export const usePersonStore = create<State & Action>(zukeeper((set: any) => ({
  firstName: '',
  lastName: '',
  updateFirstName: (firstName: string) => set(() => ({ firstName: firstName })),
  updateLastName: (lastName: string) => set(() => ({ lastName: lastName })),
})));

window.store = usePersonStore;