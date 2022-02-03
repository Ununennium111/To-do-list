const taskInput = document.querySelector("#task-input");
const submitButton = document.querySelector('#submit-button');
const taskUl = document.querySelector('#tasks-ul');

tasksArray = [];

submitButton.addEventListener('click', () => {
    addTask(taskInput.value);
});

function addTask(task){
    if(task){
        taskUl.innerHTML += `<li>${task}</li>`;
        taskInput.value = '';
    }
}