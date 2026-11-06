document.getElementById("nextBtn").onclick = function () {
  if (userAnswers[currentQuestion] === null) {
    alert("Please select an answer first.");
    return;
  }
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    showResult();
  }
};

document.getElementById("prevBtn").onclick = function () {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
};

loadQuestion();
