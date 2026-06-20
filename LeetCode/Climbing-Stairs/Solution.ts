1function climbStairs(n: number): number {
2    if (n <= 2) return n;
3
4    let first = 1;
5    let second = 2;
6
7    for (let i = 3; i <= n; i++) {
8        const current = first + second;
9        first = second;
10        second = current;
11    }
12
13    return second;
14
15};