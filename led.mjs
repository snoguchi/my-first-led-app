import { relative, resolve, join } from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Font } from 'rpi-led-matrix'
import { EasyLedMatrix } from './lib/EasyLedMatrix.mjs'
import { matrixOptions, runtimeOptions } from './led.config.mjs'

const led = new EasyLedMatrix(matrixOptions, runtimeOptions)
const imageCache = new Map()
const fontDir = relative(process.cwd(), resolve(fileURLToPath(import.meta.url), '../fonts'))
const fonts = {
  16: new Font('font16', join(fontDir, 'font16.bdf')),
  24: new Font('font24', join(fontDir, 'font24.bdf')),
  32: new Font('font32', join(fontDir, 'font32.bdf')),
}

setImmediate(() => {
  console.log('終了するには Ctrl+C を押してね')
  setInterval(() => {}, 999999)
})

/**
 * 画面をクリアする
 */
export function clear() {
  led.clear()
}

/**
 * 色を指定する
 * @param {number} r 赤の明るさ (0から255までの数字、大きいほど明るい)
 * @param {number} g 緑の明るさ (0から255までの数字、大きいほど明るい)
 * @param {number} b 青の明るさ (0から255までの数字、大きいほど明るい)
 */
export function setColor(r, g, b) {
  led.fgColor({ r, g, b })
}

/**
 * 点を打つ
 * @param {number} x X座標 (0から127までの数字で、左から何番目か)
 * @param {number} y Y座標 (0から31までの数字で、上から何番目か)
 */
export function drawPixel(x, y) {
  led.setPixel(x, y)
}

/**
 * 線を引く
 * @param {number} x1 始点のX座標 (0から127までの数字で、左から何番目か)
 * @param {number} y1 始点のY座標 (0から31までの数字で、上から何番目か)
 * @param {number} x2 終点のX座標 (0から127までの数字で、左から何番目か)
 * @param {number} y2 終点のY座標 (0から31までの数字で、上から何番目か)
 */
export function drawLine(x1, y1, x2, y2) {
  led.drawLine(x1, y1, x2, y2)
}

/**
 * 円を描く
 * @param {number} x 中心のX座標 (0から127までの数字で、左から何番目か)
 * @param {number} y 中心のY座標 (0から31までの数字で、上から何番目か)
 * @param {number} r 半径
 */
export function drawCircle(x, y, r) {
  led.drawCircle(x, y, r)
}

/**
 * 枠だけの長方形を描く
 * @param {number} x 左上のX座標 (0から127までの数字で、左から何番目か)
 * @param {number} y 左上のY座標 (0から31までの数字で、上から何番目か)
 * @param {number} w 横幅
 * @param {number} h 高さ
 */
export function drawRect(x, y, w, h) {
  led.drawRect(x, y, w, h)
}

/**
 * 中が塗りつぶされた長方形を描く
 * @param {number} x 左上のX座標 (0から127までの数字で、左から何番目か)
 * @param {number} y 左上のY座標 (0から31までの数字で、上から何番目か)
 * @param {number} w 横幅
 * @param {number} h 高さ
 */
export function fillRect(x, y, w, h) {
  led.fill(x, y, x + w - 1, y + h - 1)
}

/**
 * 文字を表示する
 * @param {string} text 表示する文字
 * @param {number} x X座標 (0から127までの数字で、左から何番目か)
 * @param {number} y Y座標 (0から31までの数字で、上から何番目か)
 * @param {number} size 文字の大きさ (16, 24, 32 のどれか)
 */
export function drawText(text, x, y, size) {
  led.font(fonts[size])
  led.drawText(text, x, y)
}

/**
 * 画像を表示する
 * @param {string} path 表示する画像ファイル
 * @param {number} x X座標 (0から127までの数字で、左から何番目か)
 * @param {number} y Y座標 (0から31までの数字で、上から何番目か)
 */
export async function drawImage(path, x, y) {
  const image = imageCache.get(path) ?? sharp(path)
  imageCache.set(path, image)
  led.drawImage(image, x, y)
}

/**
 * 指定した秒数だけ待つ
 * @param {number} sec 待つ秒数
 */
export function sleep(sec) {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000))
}
