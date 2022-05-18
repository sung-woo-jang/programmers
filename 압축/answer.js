function solution(msg) {
    var answer = [];
    const obj = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 6,
        G: 7,
        H: 8,
        I: 9,
        J: 10,
        K: 11,
        L: 12,
        M: 13,
        N: 14,
        O: 15,
        P: 16,
        Q: 17,
        R: 18,
        S: 19,
        T: 20,
        U: 21,
        V: 22,
        W: 23,
        X: 24,
        Y: 25,
        Z: 26,
    };
    let count = 27;
    for (let i = 0; i < msg.length; i++) {
        let dict = msg[i];
        let char = 1;
        let temp = dict;
        while (msg[i + char] !== undefined) {
            temp += msg[i + char];
            if (!obj[temp]) {
                // 없으면 사전에 등록해주고
                obj[temp] = count;
                break;
            }
            dict += msg[i + char];
            char++;
        }
        i += char - 1;
        answer.push(obj[dict]);
        count++;
    }
    return answer;
}
solution('KAKAO'); // [11, 1, 27, 15]
solution('TOBEORNOTTOBEORTOBEORNOT'); // [20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34]
solution('ABABABABABABABAB'); // [1, 2, 27, 29, 28, 31, 30]
