import { ModelNoteFilterInput, Note, Rel } from "@/API";
import { atom } from "jotai";

export const allnotesAtom = atom<Note[]>([

])
export const allrelAtom = atom<Rel[]>([])

export const noteFilterInputAtom = atom<ModelNoteFilterInput>({
})
export const noteFilterResultAtom = atom<Note[]>([])