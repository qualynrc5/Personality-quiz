// Track answers
const buttons = document.querySelectorAll('.answer-btn');
let answers = {};

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const question = btn.closest('.question-block');
    const allBtns = question.querySelectorAll('.answer-btn');

    // Remove highlight from others in this question
    allBtns.forEach(b => b.classList.remove('selected'));

    // Highlight clicked button
    btn.classList.add('selected');

    // Store the answer
    const qId = question.id;
    answers[qId] = btn.dataset.answer;
  });
});

// Calculate and show result
document.getElementById("show-result").addEventListener("click", () => {
  let counts = { A: 0, B: 0, C: 0, D: 0, E: 0 };
  Object.values(answers).forEach(ans => counts[ans]++);

  const max = Math.max(...Object.values(counts));
  const topAnswer = Object.keys(counts).find(key => counts[key] === max);

  let result = "";
  switch (topAnswer) {
    case "A":
      result = "🕷️ You’re Spider-Man! Brave, loyal, and full of heart.";
      break;
    case "B":
      result = "🤖 You’re Iron Man! Brilliant, inventive, and confident.";
      break;
    case "C":
      result = "💫 You’re Wonder Woman! Compassionate, fearless, and just.";
      break;
    case "D":
      result = "🔮 You’re Doctor Strange! Wise, mysterious, and powerful.";
      break;
    case "E":
      result = "⚡ You’re The Flash! Energetic, fast-paced, and always ready for action!";
      break;
    default:
      result = "🦸‍♂️ You’re Superman or Captain America! Noble, loyal, and a true leader.";
  }

  const resultContainer = document.getElementById("result-container");
  document.getElementById("result-text").textContent = result;
  resultContainer.style.display = "block";
});
