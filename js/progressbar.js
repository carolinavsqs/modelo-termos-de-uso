const textWrap = document.querySelector("#main-content")

let bar = document.createElement("div")

let toolbar = document.querySelector(".toolbar")

bar.style.height = "6px"
bar.style.width = "0"
bar.style.maxWidth = "100%"
bar.style.background = "-moz-linear-gradient(left, var(--primary-accent) 0%, var(--secondary-accent) 100%)"
bar.style.background = "-webkit-linear-gradient(left, var(--primary-accent) 0%, var(--secondary-accent) 100%)"
bar.style.background = "linear-gradient(to right, var(--primary-accent) 0%, var(--secondary-accent) 100%)"
bar.style.position = "fixed"
bar.style.bottom = window.getComputedStyle(toolbar).getPropertyValue('height')
bar.style.left = "0"
bar.style.zIndex = "9999"
bar.style.transition = "0.5s"

document.body.append(bar)

function updateBar() {
    const textHeight = document.body.scrollHeight - screen.height
    const pagePositionY = window.scrollY
    const updatedBar = pagePositionY * 100 / textHeight
    bar.style.width = updatedBar + "%"
}

window.addEventListener("load", () => {
    document.addEventListener("scroll", updateBar)
})