document.addEventListener("DOMContentLoaded", () => {
  const newTaskInput = document.getElementById("new-task");
  const pendingList = document.getElementById("pending-list");
  const completedList = document.getElementById("completed-list");
  const link1 = "https://jsonplaceholder.typicode.com/todos/";

  let pendingTasks = [];
  let completedTasks = [];

  const getTodos = async (link) => {
    try {
      const response = await fetch(link);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (err) {
      console.error("Fetch error:", err);
      throw err;
    }
  };

  newTaskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && newTaskInput.value.trim() !== "") {
      const task = newTaskInput.value.trim();
      pendingTasks.push(task);
      updateLists();
      newTaskInput.value = "";
    }
  });

  function updateLists() {
    pendingList.innerHTML = "";
    completedList.innerHTML = "";

    pendingTasks.forEach((task, index) => {
      const taskItem = createTaskItem(task, index, false);
      pendingList.appendChild(taskItem);
    });

    completedTasks.forEach((task, index) => {
      const taskItem = createTaskItem(task, index, true);
      completedList.appendChild(taskItem);
    });
  }

  function createTaskItem(task, index, isCompleted) {
    const taskItem = document.createElement("li");
    taskItem.className =
      "list-group-item d-flex justify-content-between align-items-center";
    if (isCompleted) {
      taskItem.classList.add("completed-task");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = isCompleted;
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        completeTask(index);
      } else {
        uncompleteTask(index);
      }
    });

    const taskText = document.createElement("span");
    taskText.textContent = task;

    const editButton = document.createElement("button");
    editButton.className = "edit-btn";
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
      editTask(index, taskItem, taskText);
    });

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteTask(index, isCompleted);
    });

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskText);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);

    return taskItem;
  }

  function completeTask(index) {
    const task = pendingTasks.splice(index, 1)[0];
    completedTasks.push(task);
    updateLists();
  }

  function uncompleteTask(index) {
    const task = completedTasks.splice(index, 1)[0];
    pendingTasks.push(task);
    updateLists();
  }

  function editTask(index, taskItem, taskText) {
    const input = document.createElement("input");
    input.type = "text";
    input.value = pendingTasks[index];
    input.className = "form-control";

    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter" && input.value.trim() !== "") {
        pendingTasks[index] = input.value.trim();
        updateLists();
      }
    });

    taskItem.replaceChild(input, taskText);
    input.focus();
  }

  function deleteTask(index, isCompleted) {
    if (isCompleted) {
      completedTasks.splice(index, 1);
    } else {
      pendingTasks.splice(index, 1);
    }
    updateLists();
  }

  // Populate the list
  getTodos(link1)
    .then((data) => {
      data.forEach((task) => {
        const taskData = { title: task.title, completed: task.completed };
        if (task.completed) {
          completedTasks.push(taskData.title);
        } else {
          pendingTasks.push(taskData.title);
        }
      });
      updateLists();
    })
    .catch((err) => console.log("Could not fetch data", err.message));
});
