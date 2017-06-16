var text;
var favForm = prompt("What's your favorite form?");
console.log(favForm);
switch(favDrink) {
    case "Circle":
        text = "Excellent choice! Circle is good for your soul.";
        break;
    case "Rectangle":
        text = "Rectangle is my favorite too!";
        break;
    case "Cilinder":
        text = "Really? Are you sure the Cilinder is your favorite?";
        break;
    default:
        text = "I have never heard of that one..";
        break;
}

console.log(text);