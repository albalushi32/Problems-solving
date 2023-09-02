
function meeting(start, end) {
    const intervals = [
      [start[0], end[0]],
      [start[1], end[1]],
      [start[2], end[2]],
      [start[3], end[3]],
      [start[4], end[4]],
      [start[5], end[5]],
    ];
    intervals.sort((a, b) => a[0] - b[0]);
  
    const stack = [];
  
    for (let i = 0; i < intervals.length; i++) {
      if (intervals[i][0] > intervals[stack[stack.length - 1]][1]) {
        stack.push(i);
      }
    }
  
    return stack.length;
  }
  const start = [1, 3, 0, 5, 8, 5];
  const end = [2, 4, 6, 7, 9, 9];
  const maxmet = meeting(start, end);
  console.log(maxmet);