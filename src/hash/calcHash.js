import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createHash } from 'node:crypto';

const fileSrc = 'files/fileToCalculateHashFor.txt';

const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const createSHA = (data) => createHash('sha256').update(data).digest('hex');

    const logSHA = (data) => {
        const result = createSHA(data);
        console.log(result);
    }

    try {
        const src = path.join(__dirname, fileSrc);
        const stream = fs.createReadStream(src);

        let data = '';

        stream.on('data', chunk => data += chunk);
        stream.on('end', () => logSHA(data));
    } catch {
        throw new Error('FS operation failed');
    }
};

await calculateHash();