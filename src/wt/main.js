import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';
import os from 'os';

const start = 10;

const performCalculations = async () => {
    const arr = [];

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const src = path.join(__dirname, 'worker.js');
    const cpus = os.cpus().length;

    for (let i = 0; i < cpus; i++) {
       const worker = new Worker(src, { workerData: { valueRequired: start + i } });

       worker.on('message', (result) => {
        arr.push({ status: 'resolved', data: result });
       });
       worker.on('error', () => {
        arr.push({ status: 'error', data: null });
       });
       worker.on("exit", () => {
          if (cpus === arr.length) {
             console.log(arr);
             process.exit();
          }
       });
    }
};

await performCalculations();