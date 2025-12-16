import { memoize } from 'lodash-es';

let nbs = (new Array(1_000_000)).fill(0).map(() => Math.random());

function findLowerCount(arrayNbs, val) {
  return arrayNbs.filter((el) => el < val).length;
}

const memoizedFindLowerCount = memoize(findLowerCount);

// Avec memoisation
console.time('findLowerCount');
console.log(memoizedFindLowerCount(nbs, 0.5)); // 498630
console.timeEnd('findLowerCount'); // 71.366ms

console.time('findLowerCount');
console.log(memoizedFindLowerCount(nbs, 0.5)); // 498630
console.timeEnd('findLowerCount'); // 60.217ms

// Changement Muable :
console.time('push');
// nbs.push(0.1, 0.2, 0.3);
console.timeEnd('push');

// Changement Immutable :
console.time('Immutable update');
nbs = [...nbs, 0.1, 0.2, 0.3];
console.timeEnd('Immutable update');

console.time('findLowerCount');
console.log(memoizedFindLowerCount(nbs, 0.5)); // 498630
console.timeEnd('findLowerCount'); // 43.323ms

console.time('findLowerCount');
console.log(memoizedFindLowerCount(nbs, 0.5)); // 498630
console.timeEnd('findLowerCount'); // 43.323ms

console.time('findLowerCount');
console.log(memoizedFindLowerCount(nbs, 0.5)); // 498630
console.timeEnd('findLowerCount'); // 43.323ms

console.time('findLowerCount');
console.log(memoizedFindLowerCount(nbs, 0.5)); // 498630
console.timeEnd('findLowerCount'); // 43.323ms

console.time('findLowerCount');
console.log(memoizedFindLowerCount(nbs, 0.5)); // 498630
console.timeEnd('findLowerCount'); // 43.323ms

console.time('findLowerCount');
console.log(memoizedFindLowerCount(nbs, 0.5)); // 498630
console.timeEnd('findLowerCount'); // 43.323ms

console.time('findLowerCount');
console.log(memoizedFindLowerCount(nbs, 0.5)); // 498630
console.timeEnd('findLowerCount'); // 43.323ms

console.time('findLowerCount');
console.log(memoizedFindLowerCount(nbs, 0.5)); // 498630
console.timeEnd('findLowerCount'); // 43.323ms