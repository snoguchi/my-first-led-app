import { drawImage, clear, sleep } from '../led.mjs'

for (let x = 0; x <= 128; x = x + 1) {
  clear()
  drawImage('train.png', x, 1)
  await sleep(0.1)
}
