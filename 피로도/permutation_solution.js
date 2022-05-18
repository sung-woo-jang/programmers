function getPermutations(arr, num) {
    let result = [];
    if (num == 1) return arr.map((e) => [e]);

    arr.forEach((e, i, array) => {
        let rest = [...array.slice(0, i), ...array.slice(i + 1)];
        let getPermutationss = getPermutations(rest, num - 1);
        let combiArr = getPermutationss.map((x) => [e, ...x]);
        result.push(...combiArr);
    });
    return result;
}

function solution(k, dungeons) {
    const stack = getPermutations(
        Array.from({ length: dungeons.length }, (_, i) => i),
        dungeons.length
    );

    const constK = k;
    let maxCount = 0;
    let count;

    while (stack.length) {
        const raid = stack.pop();
        count = 0;

        for (let i = 0; i < raid.length; i++) {
            if (k >= dungeons[raid[i]][0]) {
                k -= dungeons[raid[i]][1];
                count++;
            }
        }
        k = constK;
        maxCount = Math.max(count, maxCount);
        count = 0;
    }
    return maxCount;
}
console.log(
    solution(80, [
        [80, 20],
        [50, 40],
        [30, 10],
    ])
);
