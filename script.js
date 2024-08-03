const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.innerText;
        if (buttonText === 'C') {
            screen.innerText = '0';
        } else if (buttonText === '⌫') {
            screen.innerText = screen.innerText.slice(0, -1) || '0';
        } else if (buttonText === '=') {
            try {
                screen.innerText = eval(screen.innerText.replace('÷', '/').replace('×', '*'));
            } catch {
                screen.innerText = 'Error';
            }
        } else {
            if (screen.innerText === '0') {
                screen.innerText = buttonText;
            } else {
                screen.innerText += buttonText;
            }
        }
    });
});
