// 寻找两个正序数组的中位数
// 比较直观的做法，将两个数组合并，排序，然后分别取得 total / 2 和 (total - 1) / 2 两个位置的数，取两者平均值。
export const twoArrayMiddleNums = (num1: number[], num2: number[]): number => {
  const mergeArr = [...new Set([...num1, ...num2])];
  mergeArr.sort((prev, curr) => prev - curr);

  const arrLength = mergeArr.length;
  // Event number
  if(arrLength % 2 === 0) {
    return (arrLength / 2 + arrLength / 2 + 1) / 2;
  }
  // Odd number
  return Math.floor(arrLength / 2) + 1;
}