
console.log("Resolved both A and B changes");

function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();
    if (task) {
        const li = document.createElement("li");
        li.innerHTML = `${task} <button onclick="this.parentElement.remove()">🗑️</button>`;
        document.getElementById("taskList").appendChild(li);
        input.value = "";
    }
}
