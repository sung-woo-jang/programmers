/* 
저널에 등재한 전체 논문중 많이 인용된 순으로 정렬한 후, 
피인용수가 논문수와 같아지거나 피인용수가 논문수보다 작아지기 시작하는 숫자가 바로 나의 h가 됩니다. 
*/

function solution(citations) {
    var answer = 0;
    citations.sort((a, b) => b - a);
    while (answer + 1 <= citations[answer]) answer++;
    return answer;
}
console.log(solution([3, 0, 6, 1, 5])); // 3
