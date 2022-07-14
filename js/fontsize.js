const title = document.querySelectorAll('.terms-title');
const subtitle = document.querySelectorAll('.terms-subtitle');
const paragraph = document.querySelectorAll('.terms-paragraph');

function changeFontSize(button) {
	if (button == 'plus') {
        title.forEach(element => {
            element.style.fontSize = (parseFloat(window.getComputedStyle(element).getPropertyValue('font-size')) + 1) + 'px';
        })
        subtitle.forEach(element => {
            element.style.fontSize = (parseFloat(window.getComputedStyle(element).getPropertyValue('font-size')) + 1) + 'px';
        })
        paragraph.forEach(element => {
            element.style.fontSize = (parseFloat(window.getComputedStyle(element).getPropertyValue('font-size')) + 1) + 'px';
        })
	}
    if (button == 'minus') {
        title.forEach(element => {
            element.style.fontSize = (parseFloat(window.getComputedStyle(element).getPropertyValue('font-size')) - 1) + 'px';
        })
        subtitle.forEach(element => {
            element.style.fontSize = (parseFloat(window.getComputedStyle(element).getPropertyValue('font-size')) - 1) + 'px';
        })
        paragraph.forEach(element => {
            element.style.fontSize = (parseFloat(window.getComputedStyle(element).getPropertyValue('font-size')) - 1) + 'px';
        })
    }
}