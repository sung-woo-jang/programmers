class Operator {
    static '+'(a, b) {
        return Number(a) + Number(b);
    }

    static '-'(a, b) {
        return a - b;
    }
    static '*'(a, b) {
        return a * b;
    }
}

function solution(expression) {
    const prior = [
        ['-', '*', '+'],
        ['-', '+', '*'],
        ['*', '-', '+'],
        ['*', '+', '-'],
        ['+', '-', '*'],
        ['+', '*', '-'],
    ];
    // 계산한 값들 저장용
    let cand = [];
    for (const opCand of prior) {
        // 숫자와 연산자들을 다 따로 분리하기 위함
        const temp = expression.split(/(\D)/);
        // 내가 정한 연산자 우선순위대로 계산하기 위함
        for (const exp of opCand)
            while (temp.includes(exp)) {
                const idx = temp.indexOf(exp);
                temp.splice(idx - 1, 3, Operator[exp](temp[idx - 1], temp[idx + 1]));
            }

        cand.push(Math.abs(temp));
    }
    return Math.max(...cand);
}

solution('100-200*300-500+20');
solution('50*6-3*2');
