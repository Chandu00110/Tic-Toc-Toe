let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset-btn");
let new_btn = document.querySelector("#new-btn");

let turn0 = true;

let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0){
            box.innerHTML = "O";
            box.style.color = "#b0413e";
            turn0 = false;
        }
        else{
            box.innerHTML = "X";
            box.style.color = "#3d1f8f";
            turn0  = true;
        }

        box.disabled = true;
        checkWinner();
    })
});

let checkWinner = () => {
    let winner = null;
    winPatterns.forEach((pattern) => {
        let val1 = boxes[pattern[0]].innerHTML;
        let val2 = boxes[pattern[1]].innerHTML;
        let val3 = boxes[pattern[2]].innerHTML;

        if(val1 === val2 && val2 === val3 && val1 !== ""){
            winner = val1;
            console.log(winner);
            document.querySelector(".winner").classList.remove("hide");
            document.querySelector("#msg").innerText = winner + " is the winner";
            reset_btn.disabled = true;
            reset_btn.style.display = "none";
            disabledBtn();
        }
    });
};


let disabledBtn = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

let enabledBtn = () => {
    boxes.forEach((box) => {
        box.disabled = false;
    });
};

reset_btn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerHTML = "";
    });

    enabledBtn();
    turn0 = true;
});

new_btn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerHTML = "";
    });
    document.querySelector(".winner").classList.add("hide");
    enabledBtn();
    turn0 = true;
});