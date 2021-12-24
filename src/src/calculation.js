const rebar = 12;
let count = 0;

export function calculateMinimumRebarNeeded(
  length1,
  quantity1,
  length2,
  quantity2
) {
  while (quantity2 !== 0 || quantity1 !== 0) {
    if (quantity1 !== 0) {
      if (Math.floor(rebar / length1) >= quantity1) {
        quantity1 = 0;
        count++;
      } else {
        quantity1 -= Math.floor(rebar / length1);
        count++;
      }
    } else if (quantity2 !== 0) {
      if (Math.floor(rebar / length2) >= quantity2) {
        quantity2 = 0;
        count++;
      } else {
        quantity2 -= Math.floor(rebar / length2);
        count++;
      }
    }
  }
  console.log(count);
  return count;
}
