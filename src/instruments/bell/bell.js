import { playTone } from "../../js/audio.js";

export const id = "bell";

export function play() {
  playTone(880, "sine", 2, 0.35);
  playTone(1760, "sine", 1,5, 0.15);
  playTone(2637, "sine", 1, 0.08;
}
