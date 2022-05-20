const solution = (s) =>
    s
        .toLowerCase()
        .split(' ')
        .map((el) => (el[0] === undefined ? el : el[0].toUpperCase() + el.slice(1)))
        .join(' ');
