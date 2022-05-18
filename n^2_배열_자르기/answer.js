function solution(n, left, right) {
    var answer = [];

    const arr = [
        [Math.floor(left / n), left % n],
        [Math.floor(right / n), right % n],
    ];

    for (let i = arr[0][1]; i < n; i++) answer.push(Math.max(arr[0][0], i) + 1);

    for (let i = arr[0][0] + 1; i < arr[1][0]; i++)
        for (let j = 0; j < n; j++) answer.push(Math.max(i, j) + 1);

    for (let i = 0; i <= arr[1][1]; i++) answer.push(Math.max(arr[1][0], i) + 1);

    return answer;
}
solution(4, 7, 14);

/* function solution1(n, left, right) {
  var answer = [];

  for (let i = left; i <= right; i++)
      answer.push(Math.max(Math.floor(i / n), Math.floor(i % n)) + 1);

  return answer;
} */
// solution1(4, 7, 14);
