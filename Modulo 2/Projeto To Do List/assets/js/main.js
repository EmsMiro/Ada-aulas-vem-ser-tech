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

  // definindo o id da tarefa como atributo de dados na div da tarefa
  taskDiv.dataset.taskId = task.id;

  // adicionando um escutador de eventos no icone 'icon-done' na taskDiv
  // alterando a propriedade 'concluida:true' do objeto da tarefa quando o ícone é clicado pela primeira vez
  // e alterando novamente o valor da propriedade 'concluida:false' se o icone foir clicado novamente
  // adicionando animaçao que deixa o texto riscado
  taskDiv.querySelector('.icon-done').addEventListener('click', function(event) {
    
    event.stopPropagation();

    task.concluida = !task.concluida;

    const textContent = taskDiv.querySelector('.text-content');

    if(task.concluida) {
        textContent.style.textDecoration = 'line-through';
    } else {
        textContent.style.textDecoration = 'none';
    }
  });
}

//escutador de eventos de clique geral (página inteira)
document.addEventListener('click', function(event) {
    // limitando o escutador de eventos para o target (alvo)
    const target = event.target;

    // verificando se o target tem a classe 'icon-done'
    if(target.classList.contains('icon-done')) {
        // buscando o elemento pai mais próximo do target clicado
        const taskDiv = target.closest('.task-container');
        // obtendo o id da tarefa e parseando para um número inteiro
        const taskId = parseInt(taskDiv.dataset.taskId);
        // Encontrando o índice da tarefa no array 'tasks' com base no id
        const taskIndex = tasks.findIndex(task => task.id === taskId);

        // verifica se a tarefa foi encontrada no array
        if (taskIndex !== -1) {
            tasks[taskIndex].concluida = !tasks[taskIndex].concluida;
            const textContent = taskDiv.querySelector('.text-content');

            // implementando condicional para adicionar animação e estilo css ao conteúdo de texto da div task
            if (tasks[taskIndex].concluida) {
                textContent.style.textDecoration = 'line-through';
            } else {
                textContent.style.textDecoration = 'none';
            }

            // alterando o estilo da classe css 'completed' de acordo com o valor booleano da propriedade 'concluida' do objeto.
            taskDiv.classList.toggle('completed', tasks[taskIndex].concluida);
        }
    }
});

const dropdownItems = document.querySelectorAll('.dropdown-item');

dropdownItems.forEach(item => {
    item.addEventListener('click', function () {
        const filterType = this.textContent.trim().toLowerCase();

        // atualizando a exibição com base no filtro do menu
        updateTaskDisplay(filterType);
    });
});

// função para atualizar a exibição de tarefas com base no tipo de filtro do menu dropdown
function updateTaskDisplay(filterType) {
    const taskList = document.querySelector('#task-list');
    const taskContainers = document.querySelectorAll('.task-container');

    // iterando sobre todas as tarefas e ajustando a visibilidade
    taskContainers.forEach(container => {
        const taskId = parseInt(container.dataset.taskId);
        const taskIndex = tasks.findIndex(task => task.id === taskId);

        if (taskIndex !== -1) {
            const task = tasks[taskIndex];

            if (filterType === 'todas as tarefas' || (filterType === 'tarefas concluídas' && task.concluida) || (filterType === 'tarefas não concluídas' && !task.concluida)) {
                container.style.display = 'block';
            } else {
                container.style.display = 'none';
            }
        }
    });
}