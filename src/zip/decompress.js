import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import zlib from 'zlib';

const readSrc = 'files/archive.gz';
const writeSrc = 'files/fileToCompress.txt';

const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const srcToRead = path.join(__dirname, readSrc);
    const srcToWrite = path.join(__dirname, writeSrc);

    const unzip = zlib.createUnzip();

    const read = fs.createReadStream(srcToRead);
    const write = fs.createWriteStream(srcToWrite);
    read.pipe(unzip).pipe(write);
};

await decompress();