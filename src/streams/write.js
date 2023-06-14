import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const { stdin, stdout } = process;

const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    try {
        const src = path.join(__dirname, "files/fileToWrite.txt");

        fs.writeFile(src,'', err => {if (err) throw err});
        const output = fs.createWriteStream(src);

        stdin.on('data', data => {
            const text = data.toString();
            if (data.toString().match('exit')) {process.exit()}
            output.write(data)
        });

        process.on('exit', () => stdout.write('Good luck!'));
        process.on('SIGINT', () => process.exit());
    } catch(e) {
        throw new Error(`FS operation failed - ${e}`);
    }
};

await write();