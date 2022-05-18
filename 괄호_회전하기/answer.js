function solution(s) {
    var answer = 0;
    const len = s.length;
    const arr = s.split('');
    const regExp = /\{\}|\[\]|\(\)/;

    if (!len % 2) return 0;

    for (let i = 0; i < len; i++) {
        let str = arr.join('');

        for (let j = 0; j < len / 2; j++)
            if (str.match(regExp)) str = str.replace(str.match(regExp)[0], '');

        if (str.length === 0) answer++;
        arr.push(arr.shift());
    }
    return answer;
}
