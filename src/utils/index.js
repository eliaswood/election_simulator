import { Repeat, Range } from 'immutable';

export function listOf(fn, length) {
  return (
    Repeat(null, length)
      .toList()
      .map((value, i) => fn(i))
  )
}

export function randomFloat(min, max) {
  return (Math.random() * (max - min)) + min
}

export function weightedMovingAverage(getValue, n = 10) {
  const range = Range(1, n + 1);
  const sum = range.reduce((acc, val) => acc + val);

  return (
    range
      .reverse()
      .map(raw => raw/sum)
      .map((weight, i) => weight * getValue(i))
      .reduce((acc, val) => acc + val)
  );
}

export function capitalizeFirstLetter(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function formatPercent(num) {
  const shifted = ((num/1) * 100).toFixed(0);
  return `${shifted}%`;
}

export function multiples(start, stop, step) {
  return Range(start, stop + step, step).toJS()
}
