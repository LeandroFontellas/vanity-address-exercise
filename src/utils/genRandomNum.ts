import crypto from 'crypto';
import biformat from 'biguint-format';
import format from 'biguint-format';

export const genRandomNum = () => {
  return format(biformat(crypto.randomBytes(8),'dec'),'dec');
}