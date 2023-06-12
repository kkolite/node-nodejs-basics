import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const text = 'I am fresh and young';
const fileUrl = 'files/fresh.txt';

const create = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const src = path.join(__dirname, fileUrl);

    fs.readFile(src, (err, data) => {
        if (!err && data) throw new Error('FS operation failed');
    })

    fs.appendFile(src, text, function (err) {
        if (err) throw new Error('FS operation failed');
        console.log('Saved!');
    });
};

await create();