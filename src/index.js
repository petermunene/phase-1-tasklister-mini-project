

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const taskInput = document.getElementById("new-task-description");
        const taskText = taskInput.value; 

        if (taskText !== "") {
            const li = document.createElement("li");
            li.textContent = taskText;
            taskList.appendChild(li);
            taskInput.value = ""; 
        }
    });
});
