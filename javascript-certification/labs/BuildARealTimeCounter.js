const textInput = document.getElementById('text-input');
const charCountParagraph = document.getElementById('char-count');

const handleCharsCount = (value) => {
    if (value.length < 50) {
        charCountParagraph.style.color = 'black';
        charCountParagraph.textContent = `Character Count: ${value.length}/50`;
    } else if (value.length === 50) {
        charCountParagraph.style.color = 'red';
        charCountParagraph.textContent = `Character Count: ${value.length}/50`;
    } else {
        const trimmed = value.slice(0, 50);
        textInput.value = trimmed;
    }
}

textInput.addEventListener('input', event => handleCharsCount(event.target.value))