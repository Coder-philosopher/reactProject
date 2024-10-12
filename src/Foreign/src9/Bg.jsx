function BgChanger() {
    let colorText = document.createElement('div');
    colorText.id = 'colorCode';
    colorText.className = 'text';
    document.body.appendChild(colorText);

    SetClr(colorText);}

function SetClr(colorText) {
    setInterval(() => {
        let Clr = Code();
        document.body.style.backgroundColor = Clr;

        colorText.innerText = `Background Color: ${Clr}`;
        
    }, 100);
}

function Code() {
    let hex = "#";
    const code = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
        hex += code[Math.floor(Math.random() * 16)];
    }
    return hex;
}

export default BgChanger
