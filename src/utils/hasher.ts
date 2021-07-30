// import {hash} from 'bcrypt';
import {createHash} from 'crypto';
import hash from 'object-hash';
export const hasher = (algumNumero: string) => {
  const hash = createHash('sha256');
  hash.update(algumNumero);
  return hash.digest('hex');
}