import { create } from "zustand";

const SoftwareDetails = create((set) => ({
    SoftwareProductsDetails: {},
  setSoftwareProductsDetails: (data) => set({ SoftwareProductsDetails: data }),
}));

export default SoftwareDetails;
