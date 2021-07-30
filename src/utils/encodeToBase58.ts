import {encode} from 'bs58';
export const encodeToBase58 = (algumBufferOuArray: Buffer | Uint8Array) => {
  return encode(algumBufferOuArray);
}