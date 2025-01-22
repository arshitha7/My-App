import { create } from 'zustand';

const useBlogStore = create((set) => ({
  blogDetails: {}, 
  setBlogDetails: (details) => set({ blogDetails: details }), 
}));

export default useBlogStore;
