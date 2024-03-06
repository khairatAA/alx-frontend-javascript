/* eslint-disable prefer-const */
/* eslint-disable import/no-mutable-exports */
export const taskFirst = () => {
  const task = 'I prefer const when I can.';
  return task;
};

export function getLast() {
  return ' is okay';
}

let taskNext = () => {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
};
export { taskNext };
