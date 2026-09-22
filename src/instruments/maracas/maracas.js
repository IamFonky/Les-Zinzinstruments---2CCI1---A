import { playTone } from "../../js/audio.js";

export const id = "maracas";

export function play() {
  playTone(80, "rect", 2, 0.25) ;
  playTone(13, "rect", 3, 0.25) ;
}
