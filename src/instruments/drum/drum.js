import { playTone } from "../../js/audio.js";

export const id = "drum";

export function play() {
  playTone(233.08, "rectangle", 0.3, 0.25);
  playTone(220, "rectangle", 0.3, 0.25, 0.3);
  playTone(207.65, "rectangle", 0.3, 0.25, 0.6);
  playTone(196, "rectangle", 1, 0.3, 0.9, -30);
}
