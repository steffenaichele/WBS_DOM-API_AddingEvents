const addButton = document.getElementById("add-item-btn");
const alertButton = document.getElementById("alert-btn");
const consoleButton = document.getElementById("console-btn");

const taskList = document.getElementById("item-list");
// Array of 10 random tasks as strings
const tasks = [
	"Complete the project",
	"Attend the meeting",
	"Write a report",
	"Review the code",
	"Fix the bugs",
	"Update the documentation",
	"Plan the next sprint",
	"Conduct user testing",
	"Optimize the performance",
	"Design",
];

const addTask = () => {
	const randomIndex = Math.floor(Math.random() * tasks.length);
	const newTask = tasks[randomIndex];
	const listItem = document.createElement("li");
	listItem.textContent = newTask;
	taskList.appendChild(listItem);
	taskList.scrollTop = taskList.scrollHeight;
};

addButton.addEventListener("click", addTask);
alertButton.addEventListener("click", () => {
	alert("ALAAAAAARM!");
});

let logTracker = 0;
consoleButton.addEventListener("click", () => {
    logTracker += 1;
	console.log(`${logTracker}x gelogged!`);
});
