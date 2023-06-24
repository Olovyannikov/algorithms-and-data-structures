const fizzBuzz = num =>
    [...Array(num + 1).keys()]
        .reduce((result, _, i) => {
            if (i === 0) return result.concat(0);
            if (i % 3 === 0 && i % 5 === 0) return result.concat('fizzbuzz');
            if (i % 3 === 0) return result.concat('fizz');
            if (i % 5 === 0) return result.concat('buzz');
            return result.concat(i);
        }, []);

const fizzbuzz = (n) => {
    let result = [];

    for (let i = 0; i <= n; i++) {
        if (i !== 0){
            if (i % 3 === 0 && i % 5 === 0) {
                result.push('fizzbuzz');
            } else if (i % 3 === 0) {
                result.push('fizz');
            } else if (i % 5 === 0) {
                result.push('buzz');
            }
        } else {
            result.push(i);
        }
    }

    return result;
}