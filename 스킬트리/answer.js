function solution(skill, skill_trees) {
    var answer = [];

    skill = skill.split('');
    length = skill.length;

    let count = 0;

    skill_trees.forEach((el, idx) => {
        let arr = [];
        for (let i = 0; i < length; i++) {
            const findIndex = el.indexOf(skill[i]);
            if (findIndex !== -1) arr.push({ findIndex, char: skill[i], i });
        }

        arr.sort((a, b) => a['findIndex'] - b['findIndex']);

        let compare = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].i === compare) compare++;
            else {
                arr = false;
                break;
            }
        }
        answer.push(arr);
    });
    answer.forEach((el) => el && ++count);
    return count;
}

/* 큰 힌트
var regex = new RegExp(`[^${skill}]`, 'g');

 skill_trees.map((x) => x.replace(regex, ''));
*/
