/** 最长回文子串 */

export const longestStr = (s: string) => {
  if (!s.length) return s;

  let len = s.length, left = 0, right = 0;

  const db: boolean[][] = [[]];

  for (let j = 0; j < len; j++) {
    for (let i = 0; i <= j; i++) {
      db[i][j] = (s.charAt(i) === s.charAt(j)) && (j - i < 2 || db[i + 1][j - 1]);

      if (db[i][j] && j - i > right - left) {
        left = i;
        right = j;
      }
    }
  }

  return s.substring(left, right + 1);
}