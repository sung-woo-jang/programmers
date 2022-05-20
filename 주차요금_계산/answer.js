function solution(fees, records) {
    var answer = [];
    const obj = {};
    records.forEach((el, i) => {
        el = el.split(' ');

        if (obj[el[1]] === undefined) obj[el[1]] = [];
        obj[el[1]].push({ [el[2]]: el[0] });

        records[i] = el;
    });
    records.sort((a, b) => {
        // 차량을 번호, 시각 순으로 정렬
        if (a[1] === b[1]) {
            return a[0] - b[0];
        }
        return a[1] - b[1];
    });
    for (const key in obj) {
        let rate = 0;
        for (let i = 0; i < obj[key].length; i += 2) {
            const [startTime, finTime] = [
                new Date(`0 ${obj[key][i].IN}`),
                obj[key][i + 1]
                    ? new Date(`0 ${obj[key][i + 1].OUT}`)
                    : new Date(`0 23:59`),
            ];

            rate +=
                (finTime.getHours() - startTime.getHours()) * 60 +
                (finTime.getMinutes() - startTime.getMinutes());
        }
        rate < fees[0]
            ? obj[key].push({ rate: fees[1] })
            : obj[key].push({
                  rate: Math.ceil((rate - fees[0]) / fees[2]) * fees[3] + fees[1],
              });
    }
    // 차량 번호가 작은 자동차부터 주차요금 계산
    for (let i = records.length - 1; i >= 0; i--) {
        const carNumber = records[i][1];
        const rate = obj[carNumber].pop().rate;
        if (typeof rate === 'number') answer.unshift(rate);
    }
    return answer;
}
solution(
    [180, 5000, 10, 600],
    [
        '05:34 5961 IN',
        '06:00 0000 IN',
        '06:34 0000 OUT',
        '07:59 5961 OUT',
        '07:59 0148 IN',
        '18:59 0000 IN',
        '19:09 0148 OUT',
        '22:59 5961 IN',
        '23:00 5961 OUT',
    ]
); // [14600, 34400, 5000]
solution(
    [120, 0, 60, 591],
    [
        '16:00 3961 IN',
        '16:00 0202 IN',
        '18:00 3961 OUT',
        '18:00 0202 OUT',
        '23:58 3961 IN',
    ]
); // [0, 591]
solution([1, 461, 1, 10], ['00:00 1234 IN']); // [14841]
