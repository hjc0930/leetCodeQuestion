/** 两数之和(简单) */

export const twoSum = (nums: number[], target: number) : number[]=> {
  const map = new Map<number, number>();

  for(let i = 0; i < nums.length; i++) {
    const value = nums[i], b = target - value;

    if(map.has(b)) return [map.get(b)!, i];
    map.set(value, i);
  }
  return [];
}