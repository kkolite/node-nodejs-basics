import stream from 'stream';

const { Transform } = stream;
const { stdin, stdout } = process;

function transform() {
    const reverseStream = new Transform({
        transform (data, encoding, callback) {
            const reversedData = data.toString().split("").reverse().join("");
            this.push(reversedData);
            callback();
        }
    });

    stdin.pipe(reverseStream).pipe(stdout);
}

await transform();