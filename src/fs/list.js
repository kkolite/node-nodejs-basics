import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const directoryUrl = '/files';

const list = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const src = path.join(__dirname, directoryUrl);

    fs.readdir(src, (err, files) => {
        if (err) throw new Error('FS operation failed');
        files.forEach(file => {
            console.log(file);
        });
    });
};

await list();