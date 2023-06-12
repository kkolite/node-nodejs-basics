import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path'

const remove = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const src = path.join(__dirname, "files/fileToRead.txt");

    fs.unlink(src, function (err) {
        if (err) throw new Error('FS operation failed');
        console.log('File deleted!');
    });
};

await remove();