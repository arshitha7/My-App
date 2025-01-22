import { create } from "zustand";

const HardwareDetails = create((set) => ({
  hardwareProductsDetails: {},
  setHardwareProductsDetails: (data) => set({ hardwareProductsDetails: data }),
}));

export default HardwareDetails;
