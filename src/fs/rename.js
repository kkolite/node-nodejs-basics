import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const fileWrongUrl = 'files/wrongFilename.txt';
const fileUrl = 'files/properFilename.md';

const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const src = path.join(__dirname, fileUrl);
    const srcWrong = path.join(__dirname, fileWrongUrl);

    fs.readFile(src, (err, data) => {
        if (!err && data) throw new Error('FS operation failed');
    })

    fs.readFile(srcWrong, (err) => {
        if (err) throw new Error('FS operation failed');
    })

    fs.rename(srcWrong, src, function (err) {
        if (err) throw new Error('FS operation failed');
        console.log('File Renamed!');
    });
};

await rename();