import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userDataAtom = atom({
  key: "userDataAtom",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
export const navShowAtom = atom({
  key: "navShowAtom",
  default: false,
});
