import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import zlib from 'zlib';

const readSrc = 'files/fileToCompress.txt';
const writeSrc = 'files/archive.gz';

const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const srcToRead = path.join(__dirname, readSrc);
    const srcToWrite = path.join(__dirname, writeSrc);

    const gzip = zlib.createGzip();

    const read = fs.createReadStream(srcToRead);
    const write = fs.createWriteStream(srcToWrite);
    read.pipe(gzip).pipe(write);
};

await compress();