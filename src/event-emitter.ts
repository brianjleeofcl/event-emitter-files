import { EventEmitter } from 'events';

export const customEE = new EventEmitter();
// customEE.on('ping', (num: number) => console.log('ping:', num));

let count: number = 0;
setInterval(() => {
  customEE.emit('ping', count);
  count++;
  if (count > 10) process.exit(0)
}, 2500)



// import { createReadStream } from 'fs';
// import { join } from 'path'

// createReadStream(join(__dirname, 'fib-gen.js'), 'utf-8').emit('readstream')

