
import { zufallNum } from '../services/Zeit'
import { defaultOrt } from '../services/Orts'
import { Place } from "../model/Wetter";


export function getZufall(quantity: number) {
  const stadt = [] as Place[];

  while (stadt.length < quantity) {
    const place = defaultOrt[zufallNum(0, defaultOrt.length - 1)];

    if (!stadt.includes(place)) {
      stadt.push(place);
    }
  }

  return stadt;
}