function solution(N, road, K) {
    var answer = 0;
    const distance = {};
    const adjacencyList = {};

    for (let i = 1; i <= N; i++) {
        adjacencyList[i] = [];
        if (i === 1) distance[i] = 0;
        else distance[i] = Infinity;
    }

    for (let [a, b, c] of road) {
        adjacencyList[a].push({ node: b, weight: c });
        adjacencyList[b].push({ node: a, weight: c });
    }

    let check = [{ node: 1, weight: 0 }];

    while (check.length) {
        const node = check.pop().node;

        adjacencyList[node].forEach((next) => {
            if (distance[next.node] > distance[node] + next.weight) {
                distance[next.node] = distance[node] + next.weight;
                check.push(next);
            }
        });
    }

    for (const i in distance) if (distance[i] <= K) answer++;

    return answer;
}
console.log(
    solution(
        5,
        [
            [1, 2, 1],
            [2, 3, 3],
            [5, 2, 2],
            [1, 4, 2],
            [5, 3, 1],
            [5, 4, 2],
        ],
        3
    )
);
