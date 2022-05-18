const compare = () => (a, b) =>
    a['playtime'] !== b['playtime']
        ? b['playtime'] - a['playtime']
        : a['index'] - b['index'];

function solution(m, musicinfos) {
    var answer = [];

    musicinfos = musicinfos.map((el) => el.split(','));

    let memory = m
        .match(/[A-Z]#?/g)
        .map((el) => {
            if (el.indexOf('#') === -1) return el;
            else return el.toLowerCase();
        })
        .join('');

    for (let index = 0; index < musicinfos.length; index++) {
        let [startTime, finTime] = [
            new Date(`0 ${musicinfos[index][0]}`),
            new Date(`0 ${musicinfos[index][1]}`),
        ];
        const hour = finTime.getHours() - startTime.getHours();
        const minutes = Math.abs(finTime.getMinutes() - startTime.getMinutes());
        let playtime;
        hour >= 0
            ? (playtime = hour * 60 + minutes)
            : (playtime = (hour + 23) * 60 + 60 - minutes);

        if (
            musicinfos[index][3]
                .match(/[A-Z]#?/g)
                .map((el) => {
                    if (el.indexOf('#') === -1) return el;
                    else return el.toLowerCase();
                })
                .join('')
                .repeat(playtime)
                .indexOf(memory) !== -1
        )
            answer.push({ playtime, index });
    }
    return !answer.length ? '(None)' : musicinfos[answer.sort(compare())[0].index][2];
}
