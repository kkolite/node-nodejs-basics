const regex = /RSS_.+/g

const parseEnv = () => {
    const arr = Object.entries(process.env);

    arr.forEach((el) => {
        if (!el[0].match(regex)) return;

        console.log(`${el[0]}=${el[1]}`);
    })
};

parseEnv();