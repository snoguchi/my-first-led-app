import { setColor, fillRect, clear, sleep } from '../led.mjs'

// 青色を指定するよ
setColor(0, 0, 255)

// 左上に小さな四角形を描くよ
fillRect(0, 0, 10, 10)
// 1秒待つよ
await sleep(1)

// 画面を一度消すよ
clear()
// 四角形を1つ右に動かすよ
fillRect(1, 0, 10, 10)
// 1秒待つよ
await sleep(1)

// 画面を一度消すよ
clear()
// 四角形を1つ右に動かすよ
fillRect(2, 0, 10, 10)
// 1秒待つよ
await sleep(1)

// まだまだ続けたい場合は、同じように書いていくよ
// でも、同じことを何回も書くのは大変だね...
