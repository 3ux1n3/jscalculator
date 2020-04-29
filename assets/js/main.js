let display = document.getElementById("display");
let buttons = document.getElementsByClassName("btn");
let operation ="";
for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener("click", function () {
        if (button.classList.contains("action")) {
                callAction(button);
        }
         else {
                concatOperator(button);
        }
    });
}

function concatOperator(button) {
    if(button.classList.contains("operator")){
        if(!operation) {
            return;
        }
    }
    operation+= button.dataset.value;
    display.innerHTML = operation;
}

function callAction(button) {
    switch (button.dataset.value) {
        case "calculate":
            display.innerText = eval(operation);
            operation = eval(operation).toString();
            break;
        case "backspace":
            operation = operation.slice(0,-1)
            display.innerText = operation;
            break;
        case "clear":
            operation = ""
            display.innerText = "";
            break;

    }


}

