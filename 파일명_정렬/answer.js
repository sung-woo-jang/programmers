function solution(files) {
    var answer = [];

    files.forEach((str) => {
        const HEAD = str[i].match(/\D+/)[0];
        const NUMBER = str[i].match(/\d+/)[0];
        const TAIL = str[i].substr(HEAD.length + NUMBER.length);
        answer.push({
            HEAD,
            NUMBER,
            TAIL,
        });
    });

    return answer
        .sort((a, b) => Number(a.NUMBER) - Number(b.NUMBER))
        .sort((a, b) => (a.HEAD.toLowerCase() < b.HEAD.toLowerCase() ? -1 : 1))
        .map((el) => el.HEAD + el.NUMBER + el.TAIL);
}
console.log(
    solution([
        'F-5 Freedom Fighter',
        'B-50 Superfortress',
        'A-10 Thunderbolt II',
        'F-14 Tomcat',
    ])
);
console.log(
    solution(['img12.png', 'img10.png', 'img02.png', 'img1.png', 'IMG01.GIF', 'img2.JPG'])
);
