function loadQuestion() {
  document.getElementById("progress").innerText = `Question ${currentQuestion + 1} of ${questions.length}`;
  document.getElementById("question").innerText = questions[currentQuestion].question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  questions[currentQuestion].options.forEach(option => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerText = option;

    if (userAnswers[currentQuestion] !== null) {
      if (option === questions[currentQuestion].answer) div.classList.add("correct");
      if (option === userAnswers[currentQuestion] && option !== questions[currentQuestion].answer) div.classList.add("wrong");
    }

    div.onclick = function () {
      if (userAnswers[currentQuestion] !== null) return;
      userAnswers[currentQuestion] = option;
      document.querySelectorAll(".option").forEach(item => {
        if (item.innerText === questions[currentQuestion].answer) item.classList.add("correct");
        if (item.innerText === option && option !== questions[currentQuestion].answer) item.classList.add("wrong");
      });
    };

    optionsDiv.appendChild(div);
  });

  document.getElementById("prevBtn").disabled = currentQuestion === 0;
  document.getElementById("nextBtn").innerText = currentQuestion === questions.length - 1 ? "Submit" : "Next";
}

function showResult() {
  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    if (userAnswers[i] === questions[i].answer) score++;
  }
  const percentage = ((score / questions.length) * 100).toFixed(2);

  document.getElementById("quiz-box").style.display = "none";
  document.getElementById("progress").style.display = "none";

  document.getElementById("result").innerHTML = `
    <div style="background:linear-gradient(135deg,#667eea,#764ba2);color:white;padding:30px;border-radius:15px;">
      <h1>🎉 Quiz Completed 🎉</h1><br>
      <h2>Score : ${score} / ${questions.length}</h2><br>
      <h2>Percentage : ${percentage}%</h2><br>
      <button onclick="location.reload()">Restart Quiz</button>
    </div>`;
}
