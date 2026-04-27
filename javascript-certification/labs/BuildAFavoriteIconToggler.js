const buttons = document.querySelectorAll('.item-list li button');

const handleButtonClick = (btn) => {
    if (btn.classList.contains("filled")) {
        btn.innerHTML = "&#9825;";
    } else {
        btn.innerHTML = "&#10084;";
    }

    btn.classList.toggle("filled");
}

buttons.forEach(button => button.addEventListener("click", () => handleButtonClick(button)))