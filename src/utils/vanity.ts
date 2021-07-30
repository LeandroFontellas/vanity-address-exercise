export const verifyIfBeautyExists = (base58EncodedRandomNumber: string): boolean => {
  const beauty = RegExp("L[Ee3][4aA][nN][dD][rR]o","g");
  if(beauty.exec(base58EncodedRandomNumber)!==null){
    return true;
  }
  return false;
}