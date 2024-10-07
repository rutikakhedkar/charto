import { create } from 'zustand';

const useCountStore = create((set) => ({
    count: 0, // Initial state
    name: 'newstant', // Initial state
  
    // Function to set 'count'
    setCount: (newCount) => set(() => ({ count: newCount })),
  
    // Function to set 'name'
    setName: (newName) => set(() => ({ name: newName })),

    resetAll : ()=>set((state)=> ({count: 0, name : 'newstant' }))
}));

export default useCountStore;
