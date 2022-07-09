// With ES Modules we have the ability to import types and interfaces.
import { StringOrNull, otherFunc } from './otherFile';

console.log('otherFunc() ==>', otherFunc())

const myFunc = (myString: string): number => myString.length;
