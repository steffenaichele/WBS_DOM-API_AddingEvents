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

addButton.addEventListener("click", () => {
	const listItem = document.createElement("li");
	listItem.textContent = tasks[Math.floor(Math.random() * tasks.length)];
	taskList.appendChild(listItem);
	taskList.scrollTop = taskList.scrollHeight;
});

alertButton.addEventListener("click", () => alert("ALAAAAAARM!"));

let logTracker = 0;
consoleButton.addEventListener("click", () => {
    logTracker += 1;
	console.log(`${logTracker}x gelogged!`);
});
