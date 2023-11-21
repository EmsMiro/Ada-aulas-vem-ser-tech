// criando array para armazenar as tarefas
let tasks = [];

// Função para criar a tarefa 
function addTask () {
    // capturando os valores dos inputs
    const title = document.querySelector('#input-title').value;
    const description = document.querySelector('#input-description').value;

    // criando objeto com id único para cada tarefa
    const task = {
        id: new Date().getTime(),
        titulo: title,
        descricao: description
    }

    // adicionando a tarefa criada ao array tasks
    tasks.push(task);

    // limpando os campos de input
    document.querySelector('#input-title').value = "";
    document.querySelector('#input-description').value = "";

    //exibe o array de tarefas
    console.log(tasks)

    // chamando a função que cria a div e mostra na tela para o user
    showTask(task)

}

// Adicionando um escutador de eventos ao botão criar e chamando a função addTask
const buttonCreateTask = document.querySelector('#create-task-button');
buttonCreateTask.addEventListener('click', addTask);

// Array de cores aleatórias para o background da div de cada tarefa
const colorsPreset = ['#53c2c5','#fec347','#f26e56','#b8e28a','#8e65a5','#dc6378', '#bf9692', '#8ac7de'];

// Função para escolher uma cor aleatória para o background da div de cada tarefa
function setRandomColor () {
    const randomColor = Math.floor(Math.random() * colorsPreset.length);
    return colorsPreset[randomColor]
}

// Função para criar dinâmicamente os elementos da div e mostrar na tela
function showTask (task) {
    //selecionado a section(HTML) das tasks
    const taskListDiv = document.querySelector("#task-list");

    //criando a div dinâmicamente para cada tarefa
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task-container';
    taskDiv.innerHTML = `<div class="text-content">
    <h3>${task.titulo}</h3>
    <p>${task.descricao}</p>
    </div>
    <div class='icons'>
    <span class='icon-done'><img width="40" height="40" src="https://img.icons8.com/fluency-systems-regular/96/ok--v1.png" alt="ok--v1"/></span>
    <span class='icon-edit'><img width="40" height="40" src="https://img.icons8.com/fluency-systems-regular/48/edit--v1.png" alt="edit--v1" /></span>
    <span class='icon-delete'><img width="40" height="40" src="https://img.icons8.com/fluency-systems-regular/48/trash--v1.png" alt="trash--v1" /></span>
  </div>`

  // adicionando a div da tarefa ao elemento pai (section)
  taskListDiv.appendChild(taskDiv)

  // escolhendo a cor aleatória para o background da div apartir das pré-setadas no array colorsPreset
  const chosenColor = setRandomColor();
  taskDiv.style.backgroundColor = chosenColor;
}