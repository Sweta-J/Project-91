player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

actual_answer = "";

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Amswer Turn - " + player2_name;

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    operation_fake = document.getElementById("operation").value;
    operation = operation_fake.toLowerCase();
    console.log(operation);
    if ((operation == "+") || (operation == "plus") || (operation == "addition")) {
        actual_answer = parseInt(number1) + parseInt(number2);
        console.log(operation);
        question = "<h4>" + number1 + " + " + number2 + "</h>";
    } else if ((operation == "-") || (operation == "plus") || (operation == "subtraction")) {
        actual_answer = parseInt(number1) - parseInt(number2);
        console.log(operation);
        question = "<h4>" + number1 + " - " + number2 + "</h>";
    } else if ((operation == "*") || (operation == "multiply") || (operation == "multiplication")) {
        actual_answer = parseInt(number1) * parseInt(number2);
        console.log(operation);
        question = "<h4>" + number1 + " X " + number2 + "</h>";
    } else if ((operation == "/") || (operation == "divide") || (operation == "division")) {
        actual_answer = parseInt(number1) / parseInt(number2);
        console.log(operation);
        question = "<h4>" + number1 + " / " + number2 + "</h>";
    } else {
        document.getElementById("operation").innerHTML = "Enter a valid input";
        console.log("Invalid input");
    }

    input_box = "<br> Answer : <input type = 'text' id = 'input_check_box'></input>";
    check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'>Check</button>";
    row = question + input_box + check_button;
    
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.getElementById("operation").value = "";
}