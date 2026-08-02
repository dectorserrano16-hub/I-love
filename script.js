const text = "I LOVE ";
let heart = "";

for (let y = 1.5; y > -1.5; y -= 0.08) {
    for (let x = -1.5; x < 1.5; x += 0.04) {

        let a = x * x + y * y - 1;

        if (a * a * a - x * x * y * y * y <= 0) {
            heart += text[heart.length % text.length];
        } else {
            heart += " ";
        }
    }
    heart += "\n";
}

document.getElementById("heart").textContent = heart;
