let user_score = 0;

let com_score = 0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userspara = document.querySelector("#you");
const comspara = document.querySelector("#com");

const com_gen_choice = () => {

    const ops = ["rock", "pap", "sci"];

    const ran_id = Math.floor(Math.random() * 3);

    return ops[ran_id];

}
const draw_game = () => {
    // console.log("game is draw");
    msg.innerText = "Draw";
    msg.style.backgroundColor = "black";
}
const show_win = (user_win) => {
    if (user_win) {
        msg.innerText = "You Win";
        msg.style.backgroundColor = "green";
        user_score++;
        userspara.innerText = user_score;
    }
    else {
        msg.innerText = "Computer Win";
        msg.style.backgroundColor = "red";
        com_score++;
        comspara.innerText = com_score;
    }
}
const play_game = (user_choice) => {
    const com_choice = com_gen_choice();
    if (com_choice === user_choice) {
        draw_game();
    } else {
        let user_win = true;
        if (user_choice == "rock") {
            user_win = com_choice === "pap" ? false : true;
        }
        else if (user_choice == "pap") {
            user_win = com_choice === "sci" ? false : true;
        }
        else {
            user_win = com_choice === "rock" ? false : true;
        }
        show_win(user_win);
        setTimeout(()=>{
        msg.style.backgroundColor = "";
        },1000);
    }
}

choice.forEach((choice) => {

    choice.addEventListener("click", () => {

        const user_choice = choice.getAttribute("id")

        // console.log(user_choice, com_gen_choice());
        play_game(user_choice);

    })

})