function solution(word) {
    var answer = 0;
    const moum = ['A', 'E', 'I', 'O', 'U'];
    let count = 0;
    const DFS = (index, temp) => {
        if (temp !== word) count++;
        if (temp.length === 5 || temp === word) {
            if (temp === word) answer = count;
            return;
        }
        DFS(index, temp + moum[index]);
        DFS(index, temp + moum[index + 1]);
        DFS(index, temp + moum[index + 2]);
        DFS(index, temp + moum[index + 3]);
        DFS(index, temp + moum[index + 4]);
    };
    DFS(0, '');

    return answer;
}
solution('AAAE'); // 10
