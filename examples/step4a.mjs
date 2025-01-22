import { setColor, fillRect, clear, sleep } from '../led.mjs'

// 青色を指定するよ
setColor(0, 0, 255)

// 変数「x」を0から9まで、1ずつ増やしながら10回繰り返すよ
for (let x = 0; x <= 9; x = x + 1) {
  // 画面を一度消すよ
  clear()
  // 変数「x」を使って四角形を描いているよ。何が起こるかわかるかな？
  fillRect(x, 0, 10, 10)
  // 0.1秒待つよ
  await sleep(0.1)
}

// for を使うと、同じことを何回も書かなくても済むよ！
