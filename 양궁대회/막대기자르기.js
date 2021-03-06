// 길이(i):  0 1 2 3 4 5  6  7  8  9  10
// 가격(Pi): 0 1 5 8 9 10 17 17 20 24 30
/* 
Rn(길이가 n인 막대기의 최대 가격): max(Pi + Rn - i)
ex R4 = max(P1 + R3, P2 + R2, P3 + R1, P4 + R0)
*/
function cutRod(p, n) {
    var r = [0]; // 이전에 계산한 값들 저장소
    let q = -Infinity; // 이전 최대값 일시적 저장용
    for (var j = 1; j <= n; j++) {
        for (var i = 1; i <= j; i++) q = Math.max(q, p[i] + r[j - i]);
        r[j] = q;
    }
    console.log(r[n]);
}
cutRod([0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30], 2); // 5
cutRod([0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30], 3); // 8
cutRod([0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30], 4); // 10
cutRod([0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30], 7); // 18
