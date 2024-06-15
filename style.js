const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const radomCode = "#" + randomNumber.toString(16);
    console.log(randomNumber, radomCode);
    document.body.style.background = radomCode;
    document.getElementById("color-code").innerText = radomCode;
}

const button = document.querySelector("#btn");
button.addEventListener("click", event => {
    console.log(getColor());
})