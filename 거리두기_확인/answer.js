// 상, 하, 좌, 우
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
// 방 사이즈는 5X5라고 못박아 둠
const SIZE = 5;

const BFS = (start, room, checked) => {
    const queue = [start];
    while (queue.length) {
        const [x, y, n] = queue.shift();

        if (n !== 0 && room[x][y] === 'P') return false;

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (
                // 움직일 거리 제한(맨해튼 거리)
                n < 2 &&
                // 유효범위 체크
                nx >= 0 &&
                ny >= 0 &&
                nx < SIZE &&
                ny < SIZE &&
                // 방문여부 체크
                checked[nx][ny] === 0 &&
                // 파티션은 패스
                room[nx][ny] !== 'X'
            ) {
                checked[nx][ny] = 1;
                // [다음 방문지, 움직인 거리]
                queue.push([nx, ny, n + 1]);
            }
        }
    }
    return true;
};

// 현재 보고있는 방에 지원자들이 말을 잘 들었나 확인 후
// 한 놈이라도 말 안 듣는 놈이 있으면 바로 0 반환
const checkedRoom = (room) => {
    const checked = Array.from(Array(SIZE), () => Array(SIZE).fill(0));
    for (let i = 0; i < SIZE; i++)
        for (let j = 0; j < SIZE; j++) {
            if (room[i][j] === 'P') {
                checked[i][j] = 1;
                // 지원자 기준으로 2칸 범위내에만 확인해보기
                if (!BFS([i, j, 0], room, checked)) return 0;
            }
        }
    return 1;
};
/* 
1. 같은 넓이의 방을 만듦
2. 칸 하나하나 돌아다님
3. 특정 칸이 사람인지 판별함
3-1. 사람이 아니면 패스
3-2 사람이면은 만들어 둔 방에 방문여부 표시하고 주변을 둘러봄

bfs 주변을 둘러보기로 한 지점을 기준으로 시작
1. 방문하지 않은 위치에 사람이 있으면 false 반환
2. 좌, 우, 상, 하 둘러보기
2-1. 유효범위이면서 파티션이 아니어야 함
2-2. (2-1)의 조건이 충족되면 맨해튼 거리가 2이하의 범위만 탐색
3. 위 조건들을 모두 충족했는데 이상이 없으면 방문 여부 체크 && 다음 경로와 현재 노드와의 거리를 queue에 입력

 */

const solution = (places) => places.map(checkedRoom);

console.log(
    solution([
        ['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'],
        ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
        ['PXOPX', 'OXOXP', 'OXPOX', 'OXXOP', 'PXPOX'],
        ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
        ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP'],
    ])
);
