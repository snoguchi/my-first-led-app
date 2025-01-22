import { LedMatrix } from 'rpi-led-matrix'

export class EasyLedMatrix {
  constructor(...args) {
    this.matrix = new LedMatrix(...args)
    this.autoSyncId = null
  }

  autoSync() {
    if (this.autoSyncId === null) {
      this.autoSyncId = setImmediate(() => {
        this.matrix.sync()
        this.autoSyncId = null
      })
    }
  }

  fgColor(color) {
    this.matrix.fgColor(color)
    return this
  }

  font(font) {
    this.matrix.font(font)
    return this
  }

  setPixel(...args) {
    this.matrix.setPixel(...args)
    this.autoSync()
    return this
  }

  drawLine(...args) {
    this.matrix.drawLine(...args)
    this.autoSync()
    return this
  }

  drawCircle(...args) {
    this.matrix.drawCircle(...args)
    this.autoSync()
    return this
  }

  drawRect(x0, y0, width, height) {
    this.matrix.drawRect(x0, y0, width - 1, height - 1)
    this.autoSync()
    return this
  }

  fill(x0, y0, width, height) {
    this.matrix.fill(x0, y0, x0 + width - 1, y0 + height - 1)
    this.autoSync()
    return this
  }

  drawText(...args) {
    this.matrix.drawText(...args)
    this.autoSync()
    return this
  }

  async drawImage(sharpObject, screenX, screenY) {
    const { width, height, hasAlpha } = await sharpObject.metadata()
    const buffer = await sharpObject.raw().toBuffer()

    const screenWidth = this.matrix.width()
    const screenHeight = this.matrix.height()
    const startX = Math.max(0, -screenX)
    const startY = Math.max(0, -screenY)
    const endX = Math.min(width, screenWidth - screenX)
    const endY = Math.min(height, screenHeight - screenY)
    const bytesPerPixel = hasAlpha ? 4 : 3

    if (startX < endX && startY < endY) {
      for (let y = startY; y < endY; y++) {
        const rowOffset = y * width * bytesPerPixel
        for (let x = startX; x < endX; x++) {
          const pos = rowOffset + x * bytesPerPixel
          if (!hasAlpha || buffer[pos + 3] !== 0) {
            const r = buffer[pos]
            const g = buffer[pos + 1]
            const b = buffer[pos + 2]
            this.matrix.fgColor({ r, g, b })
            this.matrix.setPixel(screenX + x, screenY + y)
          }
        }
      }
      this.autoSync()
    }
  }

  clear() {
    this.matrix.clear()
    this.autoSync()
    return this
  }
}
