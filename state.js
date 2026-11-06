const questions = [
  { question: "What is the capital of India?", options: ["Mumbai", "Delhi", "Pune", "Nagpur"], answer: "Delhi" },
  { question: "Which language runs in browser?", options: ["Java", "Python", "JavaScript", "C"], answer: "JavaScript" },
  { question: "2 + 5 = ?", options: ["5", "6", "7", "8"], answer: "7" },
  { question: "HTML stands for?", options: ["Hyper Text Markup Language", "High Text Machine Language", "Home Tool Markup Language", "Hyper Transfer Markup Language"], answer: "Hyper Text Markup Language" }
];

let currentQuestion = 0;
let userAnswers = new Array(questions.length).fill(null);
