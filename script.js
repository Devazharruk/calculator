const btns = document.querySelectorAll(".btn");
const resultScreen = document.querySelector(".result-screen");
let str = "";

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        try {
            if (e.target.textContent === "=") {
                str = String(eval(str));
            } else if (e.target.textContent === "C") {
                str = "";
            } else if (e.target.textContent === "X") {
                str = str.slice(0, -1);
            }
            else {
                str += e.target.textContent;
            }
            resultScreen.value = str;
        } catch (error) {
            alert("Bad Expression");
            str = "";
            resultScreen.value = "";
        }
        
    });
});