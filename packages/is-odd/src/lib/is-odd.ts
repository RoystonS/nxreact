import { isEven } from '@shufflies/is-even';

export function isOdd(n: number): boolean {
  return !isEven(n);
}
