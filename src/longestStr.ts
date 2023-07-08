/** 最长回文子串 */

export const longestStr = (s: string): string => {
  if (!s || s.length < 2) return s;

  const strLen = s.length;
  let maxStart = 0;  //最长回文串的起点
  let maxEnd = 0;    //最长回文串的终点
  let maxLen = 1;  //最长回文串的长度

  // let dp = new Array<boolean[]>(...new Array(5).fill("").map(() => new Array(5)));
  let dp = Array.from(new Array<boolean>(strLen), () => new Array<boolean>(strLen))

  for (let r = 1; r < strLen; r++) {
    for (let l = 0; l < r; l++) {
      //r - l <= 2 表示两者之间只有一个字符
      if (s.charAt(l) === s.charAt(r) && (r - l <= 2 || dp[l + 1][r - 1])) {
        dp[l][r] = true;
        if (r - l + 1 > maxLen) {
          //更新最大值
          maxLen = r - l + 1;
          maxStart = l;
          maxEnd = r;
        }
      }
    }
  }
  return s.substring(maxStart, maxEnd + 1);
}