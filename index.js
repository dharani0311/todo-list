
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");


window.onload = () => {
    const tasks = JSON.parse(localStorage.getItem("todo")) || [];
    tasks.forEach(t => addTaskToUI(t.text, t.completed));
};


addBtn.onclick = () => addTask();


input.onkeypress = (e) => {
    if (e.key === "Enter") addTask();
};


function addTask() {
    let text = input.value.trim();
    if (!text) return alert("Please enter a task!");

    addTaskToUI(text);
    saveTask(text, false);
    input.value = "";
}


function addTaskToUI(text, completed = false) {
    const li = document.createElement("li");
    li.textContent = text;

    if (completed) li.classList.add("completed");

    
    li.onclick = () => {
        li.classList.toggle("completed");
        updateStorage();
    };

    
    const del = document.createElement("button");
    del.textContent = "X";
    del.className = "delete-btn";

    del.onclick = (e) => {
        e.stopPropagation();
        li.remove();
        updateStorage();
    };

    li.appendChild(del);
    taskList.appendChild(li);
}

function saveTask(text, completed) {
    const tasks = JSON.parse(localStorage.getItem("todo")) || [];
    tasks.push({ text, completed });
    localStorage.setItem("todo", JSON.stringify(tasks));
}


function updateStorage() {
    const tasks = [];
    document.querySelectorAll("li").forEach(li => {
        tasks.push({
            text: li.firstChild.nodeValue,
            completed: li.classList.contains("completed")
        });
    });
    localStorage.setItem("todo", JSON.stringify(tasks));
}
