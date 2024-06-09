import { create } from 'zustand'

const useEmailStore = create((set) => ({
    email: "user@gmail.com",
    name: "user",
    id: "",
    setEmail:   (email) => set((state) => ({ ...state, email: email})),
    setName:    (name)  => set((state) => ({ ...state, name: name})),
    setId:      (id)    => set((state) => ({ ...state, id: id})),
    resetState: () => set({ email: "user@gmail.com", name: "user" }) 
}))

export default useEmailStore