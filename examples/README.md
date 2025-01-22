<style type="text/css" rel="stylesheet">
details {
    border: 1px solid #aaa;
    border-radius: 4px;
    padding: 0.5em 0.5em 0;
    margin-bottom: 1em;
    transition: padding 0.3s ease;
}

summary {
    cursor: pointer;
    font-weight: bold;
    font-size: 1.5em;
    margin: -0.5em -0.5em 0;
    padding: 0.5em;
    transition: background-color 0.3s ease;
}

details[open] {
    padding: 0.5em;
}

details[open] summary {
    border-bottom: 1px solid #aaa;
    margin-bottom: 0.5em;
}

details > :not(summary, h3) {
    margin-left: 2em;
}
</style>

# LEDマトリックスでプログラミングを学ぼう！

ここではLEDマトリックスディスプレイを使って、プログラミングの基礎を楽しく学ぶことができるよ。

ステップ1から順にやってみよう！

<details open>
<summary>ステップ1: 最初の一歩 - LEDを光らせてみよう！</summary>

### 🚀まずは動かしてみよう！

まずはお父さんの準備したプログラムを動かしてLEDを光らせてみよう。

下のコマンドを実行してみてね（やり方はお父さんに聞こう）。

```shell
./run step1.mjs
```

画面に青い点が表示されたら成功だよ。

### 📖プログラムを見てみよう！

うまくいったら実行したプログラム([step1.mjs](step1.mjs))を開いて、中身を確認してみよう。

何をしているかわかるかな？

### 🔰プログラムの解説

プログラムの中で `setColor(0, 0, 255)` や `drawPixel(32, 16)` と書くと、コンピューターに命令を出すことができるよ。

`setColor` や `drawPixel` のことを **関数(かんすう)** というよ。プログラムでよく出てくる言葉だから覚えておこう。

### 💪チャレンジ！

どうして点が表示されるかわかったら、自分でプログラムを修正して動かしてみよう！

点の色や場所を変えられるかな？

複数の点を表示できるかな？
</details>

<details>
<summary>ステップ2: いろんな図形を描こう！</summary>

### 🚀まずは動かしてみよう！

下のコマンドを実行してみよう！いろんな図形が表示されるよ。
```shell
./run step2.mjs
```

### 📖プログラムを見てみよう！

プログラム([step2.mjs](step2.mjs))を開いて、中身を確認してみよう。

図形を描く方法がわかるかな？

### 💪チャレンジ！

いろんな図形を組み合わせて、好きな絵を描いてみよう
</details>

<details>
<summary>ステップ3: 文字を表示してみよう！</summary>

### 🚀まずは動かしてみよう！
下のコマンドを実行すると、LEDマトリックスに文字が表示されるよ。
```shell
./run step3.mjs
```

### 📖プログラムを見てみよう！
プログラム([step3.mjs](step3.mjs))を開いて、中身を確認してみよう。
文字の表示の仕方がわかるかな？

### 💪チャレンジ！
- 違う文字を表示してみよう
- 文字の色を変えてみよう
- 文字の位置を変えてみよう

</details>

<details>
<summary>ステップ4: 図形を動かしてみよう！</summary>

### 🚀まずは動かしてみよう！
下のコマンドを実行すると、画面の小さな四角形が動き出すよ。
```shell
./run step4.mjs
```

### 📖プログラムを見てみよう！
どうやって動かしているんだろう？プログラム([step4.mjs](step4.mjs))を開いて、中身を確認してみよう。

### 💪チャレンジ！

四角形をもっと遠くまで動かせるかな？

四角形を別の方向に動かせるかな？

### 🤔もっと簡単な方法はないのかな？
四角形を動かすプログラムを書いてみて、どう感じたかな？

もっと楽に書ける方法を知りたかったら、このプログラム([step4a.mjs](step4a.mjs))も見てみよう。

</details>

<details>
<summary>ステップ5: 画像を表示してみよう</summary>

### 🚀まずは動かしてみよう！
下のコマンドを実行すると、LEDマトリックスに画像が表示されるよ。
```shell
./run step5.mjs
```

### 📖プログラムを見てみよう！
プログラム([step5.mjs](step5.mjs))を開いて、中身を確認してみよう。
画像の表示の仕方がわかるかな？

### 💪チャレンジ！
- 自分の好きな画像を表示してみよう
- ステップ3で学んだことを使って、画像を動かしてみよう

</details>


<details>
<summary>使える関数一覧</summary>

### setColor - 色を指定する
```js
setColor(r, g, b)
```
- r: 赤の明るさ (0から255までの数字、大きいほど明るい)
- g: 緑の明るさ (0から255までの数字、大きいほど明るい)
- b: 青の明るさ (0から255までの数字、大きいほど明るい)

### setPixel - 点を打つ
```js
setPixel(x, y)
```
- x: X座標（0から127までの数字で、左から何番目か）
- y: Y座標（0から63までの数字で、上から何番目か）

### drawLine - 線を引く
```js
drawLine(x1, y1, x2, y2)
```
- x1: 始点のX座標 (0から127までの数字で、左から何番目か)
- y1: 始点のY座標 (0から31までの数字で、上から何番目か)
- x2: 終点のX座標 (0から127までの数字で、左から何番目か)
- y2: 終点のY座標 (0から31までの数字で、上から何番目か)

### drawCircle - 円を描く
```js
drawCircle(x, y, r)
```
- x: 中心のX座標 (0から127までの数字で、左から何番目か)
- y: 中心のY座標 (0から31までの数字で、上から何番目か)
- r: 半径

### drawRect - 枠だけの長方形を描く
```js
drawRect(x, y, w, h)
```
- x: 左上のX座標 (0から127までの数字で、左から何番目か)
- y: 左上のY座標 (0から31までの数字で、上から何番目か)
- w: 横幅
- h: 高さ

### fillRect - 塗りつぶされた長方形を描く
```js
fillRect(x, y, w, h)
```
- x: 左上のX座標 (0から127までの数字で、左から何番目か)
- y: 左上のY座標 (0から31までの数字で、上から何番目か)
- w: 横幅
- h: 高さ

### drawText - 文字を表示
```js
drawText(text, x, y, size)
```
- text: 表示する文字
- x: X座標 (0から127までの数字で、左から何番目か)
- y: Y座標 (0から31までの数字で、上から何番目か)
- size: 文字の大きさ (16, 24, 32 のどれか)

### loadImage - 画像を読み込む
```js
const image = await loadImage(path)
```
 * @param {string} path 画像ファイルの場所

### drawImage - 画像を表示
```js
drawImage(image, x, y)
```
- image: 読み込んだ画像
- x: X座標 (0から127までの数字で、左から何番目か)
- y: Y座標 (0から31までの数字で、上から何番目か)

### sleep - 待つ
```js
await sleep(sec)
```
- sec: 待つ秒数

</details>
