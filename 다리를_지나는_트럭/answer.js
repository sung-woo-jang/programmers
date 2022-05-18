// 대기트럭 -> 다리를 건너는 트럭 (다리길이 * 1초)
// 다리를 건너는 트럭 -> 다리를 지난 트럭 (다리길이 * 1초)
// 한 트럭이 다리를 건너는데 (다리 길이 * 2)초가 걸림
// bridge_length: 경과 시간

function solution(bridge_length, weight, truck_weights) {
    var answer = 1;
    const bridge = [[truck_weights.shift(), answer, bridge_length + 1]]; // [들어간 트럭 무게, 들어간 시간, 나올 시간]
    let currentBridgeWeight;

    while (true) {
        currentBridgeWeight = 0;
        answer++;

        // 현재 다리위 트럭들 무게 최신화
        if (bridge.length) bridge.forEach((el) => (currentBridgeWeight += el[0]));

        // 다리위에 트럭이 있으면서 나올 시간이 다 되었으면 삭제
        if (bridge.length && bridge[0][2] === answer)
            currentBridgeWeight -= bridge.shift()[0];

        // 트럭이 더 들어갈 수 있는지 확인
        // 1. 현재 다리위 무게에 새로 들어갈 트럭 무게를 더했을 때 견딜 수 있으면 집어넣기
        if (truck_weights[0] + currentBridgeWeight <= weight)
            // [들어간 트럭 무게, 들어간 시간, 나올 시간]
            bridge.push([truck_weights.shift(), answer, answer + bridge_length]);

        // 다리위에 트럭이 없으면 끝내기
        if (!bridge.length) break;
    }
    return answer;
}
console.log(solution(2, 10, [7, 4, 5, 6])); // 8
console.log(solution(100, 100, [10, 10])); // 101
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); // 110
// 다리에 트럭이 진입하려면 (다리위에 트럭들 무게) <= 최대무게 이어야 함
// ---- 위 조건이 만족한다면 대기트럭 빼고 트럭을 하나 집어넣고 1초 증가
// 특정 시간이 지나면 맨 앞 트럭 빼고 트럭의 무게만큼 (다리위 트럭 무게) 최신화
