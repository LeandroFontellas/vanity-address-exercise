import { convertHashedToBuffer } from "./utils/convertHashedToBuffer";
import { encodeToBase58 } from "./utils/encodeToBase58";
import { genRandomNum } from "./utils/genRandomNum"
import { hasher } from "./utils/hasher";
import { verifyIfBeautyExists } from "./utils/vanity";

(async function main(){
  let randomNumber = genRandomNum();
  let hashedNumber = hasher(randomNumber);
  let convertedNumber = convertHashedToBuffer(hashedNumber);
  let encodedNumber = encodeToBase58(convertedNumber);
  
  
  while(!verifyIfBeautyExists(encodedNumber)){
    randomNumber = genRandomNum();
    hashedNumber = hasher(randomNumber);
    convertedNumber = convertHashedToBuffer(hashedNumber);
    encodedNumber = encodeToBase58(convertedNumber);
  }
  console.log(`Hash: ${hashedNumber}`);
  console.log(`Vanity: ${encodedNumber}`);
})()