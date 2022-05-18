function solution(k, dungeons) {
    const length = dungeons.length;
    const visited = Array.from({ length }, () => false);
    let maxClearCount = 0;

    const DFS = (K, count) => {
        maxClearCount = Math.max(count, maxClearCount);

        for (let i = 0; i < length; i++) {
            const [minK, useK] = dungeons[i];
            // 최소피로도를 만족하면서 방문한 적이 없어야 함
            if (minK <= K && !visited[i]) {
                visited[i] = true; // 방문 여부 체크
                DFS(K - useK, count + 1);
                visited[i] = false; // 돌아왔으니 방금 들어간 곳은 일단 미방문으로 초기화
            }
            // 위와같은 방법으로 모든 곳을 돌아다님
        }
    };
    DFS(k, maxClearCount);
    return maxClearCount;
}
console.log(
    solution(80, [
        [80, 20],
        [50, 40],
        [30, 10],
    ])
);
