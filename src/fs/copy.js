import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const srcCopy = path.join(__dirname, 'files-copy');
    const srcOrigin = path.join(__dirname, 'files');

    fs.readdir(srcCopy, (err) => {
        if (!err) throw new Error('FS operation failed');
    })

    fs.readdir(srcOrigin, (err, files) => {
        if (err) throw new Error('FS operation failed');

        fs.mkdir(srcCopy, (err) => {
            if (err) return console.error(err);
        });

        files.forEach(file => {
            fs.copyFile(path.join(srcOrigin, file), path.join(srcCopy, file), (err) => {
                if (err) console.log(err);
                console.log(`${file} was copied`);
            })
        })
    });
};

await copy();
