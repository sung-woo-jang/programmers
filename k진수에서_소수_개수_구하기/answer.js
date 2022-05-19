const solution = (n, k) =>
    n
        .toString(k)
        .split('0')
        .filter((el) => {
            el = Number(el);
            if (el <= 1) return false;
            for (let i = 2; i <= Math.floor(Math.sqrt(el)); i++)
                if (el % i === 0) return false;

            return true;
        }).length;
