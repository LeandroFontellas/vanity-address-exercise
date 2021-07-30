declare module 'biguint-format'{
  export default function biformat(someBuffer:Buffer,type: string):BigInt;
  export default function format(array:Array,type:string):string;
}