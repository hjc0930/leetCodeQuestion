const runTask = (...task: Function[]) => {
  let isPedding = false;
  let i = 0;
  const result: unknown[] = [];

  return {
    run: async () => new Promise<unknown[]>(async (resolve, reject) => {
      try {
        isPedding = false;
        while (i < task.length) {
          result.push(await task[i++]());
          if (isPedding) {
            return;
          }
        }
        resolve(result);
      } catch (error) {
        reject(error)
      }
    }),
    pause: () => {
      isPedding = true;
    }
  }
}

export default runTask;