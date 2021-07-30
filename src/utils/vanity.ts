export const verifyIfBeautyExists = (base58EncodedRandomNumber: string): boolean => {
  const beauty = RegExp("[lL][Ee3][4aA][nN][dD][rR][oO0]","g");
  if(beauty.exec(base58EncodedRandomNumber)!==null){
    return true;
  }
  return false;
}