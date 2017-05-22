import { EventEmitter } from 'events';

export const customEE = new EventEmitter();

let count: number = 0;
setInterval(() => {
  customEE.emit('ping', count);
  count++;
  if (count > 10) process.exit(0)
}, 2500)