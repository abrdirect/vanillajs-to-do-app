const form = document.querySelector('#form');
const input = document.querySelector('#input');
const taskList = document.querySelector('#taskList');
const template = document.querySelector('#template').content
const fragment = document.createDocumentFragment();

let tasks = {};

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // console.log(event.target[0].value);
    // console.log(event.target.querySelector('input').value);
    // console.log(input.value);

    setTask(event);
})

const setTask = (event) => {
    if (input.value === '') {
        console.log('input is empty');
        return;
    }

    const task = {
        id: Date.now(),
        text: input.value,
        status: false
    }

    tasks[task.id] = task;

    // console.log(tasks);

    form.reset();
    input.focus();

    displayTasks();
}

const displayTasks = () => {
    taskList.innerHTML = '';
    Object.values(tasks).forEach((item) => {
        // console.log(item);
        const clone = template.cloneNode(true);
        clone.querySelector('span').textContent = item.text;
        fragment.appendChild(clone)
    })
    taskList.appendChild(fragment)
}