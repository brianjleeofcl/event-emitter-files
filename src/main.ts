import { customEE } from './event-emitter';

const callback = function (num: number) {
  console.log(`From the imported module, ping #${num}`)
}

customEE.once('ping', () => console.log('Pinging started!')).on('ping', callback).on('ping', (num: number) => {
  if (num > 5) {
    customEE.removeListener('ping', callback);
  }
})

