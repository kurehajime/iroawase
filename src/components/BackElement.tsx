
import "./BackElement.css"
export default function BackElement() {
    const message = `
    Let's slide the panel to align the four colors.
    パネルをスライドして4つの色を揃えよう。
    Deslicemos el panel para alinear los cuatro colores.
    让我们滑动面板以对齐四种颜色。
    Faisons glisser le panneau pour aligner les quatre couleurs.
    دعونا نقوم بسحب اللوحة لمحاذاة الألوان الأربعة.
    Lassen Sie uns das Panel schieben, um die vier Farben auszurichten.
    패널을 슬라이드하여 네 가지 색을 맞추자.
    Facciamo scorrere il pannello per allineare i quattro colori.
    讓我們滑動面板以對齊四種顏色。
    Vamos deslizar o painel para alinhar as quatro cores.
    Давайте переместим панель, чтобы выровнять четыре цвета.
    चारों रंगों को संरेखित करने के लिए पैनल को स्लाइड करते हैं।`

    return (
        <div className="back">
            {
                // ほんとは100くらいにしたいけどSafariが激重になる
                message.repeat(20)
            }
        </div>
    )
}