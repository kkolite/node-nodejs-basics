const regex = /--.+/g

const parseArgs = () => {
    const arr = process.argv;

    arr.forEach((el, i) => {
        if (!el.match(regex)) return;

        console.log(`${el.slice(2)} is ${arr[i+1]}`);
    })
};

parseArgs();