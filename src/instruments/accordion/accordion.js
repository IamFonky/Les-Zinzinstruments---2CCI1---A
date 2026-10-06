import { playTone } from "../../js/audio.js";

export const id = "unknown";

export function play() {
  playTone(220, "square", 1.1, 0.1, 0, 5)

}
