export const twoSum = (nums: number[], target: number) => {
  const map = new Map<number, number>();

  for(let i = 0; i < nums.length; i++) {
    const value = nums[i], b = target - value;

    if(map.has(value)) return [i, map.get(value)];
    map.set(value, i);
  }
  return [];
}