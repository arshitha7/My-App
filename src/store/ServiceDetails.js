import { create } from "zustand";

const ServiceDetails = create((set) => ({
  serviceDetails: {},
  setServiceDetails: (details) => set({ serviceDetails: details }),
}));

export default ServiceDetails;
