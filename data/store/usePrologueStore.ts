import { create } from "zustand";
import { PROLOGUE_TYPE } from "../model/prologue/enum";
import { PrologueModel } from "../model/prologue/types";

interface PrologueState {
  prologues: PrologueModel[];
}

const defaultPrologueState: PrologueModel[] = [
  {
    type: PROLOGUE_TYPE.INTRODUCTION,
  },
  {
    type: PROLOGUE_TYPE.TABLE_VIEW,
  },
  {
    type: PROLOGUE_TYPE.HOW_TO_COME,
  },
];

export const usePrologueStore = create<PrologueState>((set) => ({
  prologues: defaultPrologueState,
}));
