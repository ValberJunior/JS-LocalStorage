      
let tasks = [ ];                   //Meu array para receber as tarefas

//-------------------------------------------------------------------  id para identificar uma tarefa>

function createId( ){
return Math.floor(Math.random( )*1000); //id do objeto                     //<***** OBS1
}

//Função para criar minha tarefa

function createTask(){
let taskName = document.getElementById("inputTask").value ;        //task.name irá receber o meu input

let task = { id: createId( ),              //task será o nome do meu objeto, que receberá uma propriedade e um método.
             name: taskName};
 
let valor = " ";

    if (taskName == valor){
        return alert('Favor insira uma tarefa');
    }else{         
    tasks.push(task);                     // aqui eu usarei a função padrão .push para adicionar ao array TASKS o meu obj task
    localStorage.setItem("tasks",JSON.stringify(tasks))             //Aqui eu chamo a função para adicionar o array na memória.
    updateList();}
   
}

//Evento keydown                                                 Função para que o meu enter adicione a tarefa

let input = document.getElementById('inputTask');
input.addEventListener('keydown', function(event){
    if (event.key == "Enter") {
        createTask();
    };
});



//Criar a list e atualizar ela; <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function updateList( ){

    let list ="<ul>";

   for (task of tasks){

    list += "<li id="+task.id+" onmouseover='mOn(this)' onmouseout='mOut(this)'><h3 id='titleTask'>"+ task.name+ "<button onmouseover='cursorOn(this)' onmouseout='cursorOut(this)' onclick='deleteTask(this)' class='deleteThis' id="+task.id+"></button></h3></li>";
    list +="</ul>";
   }

    let update = document.getElementById("tasksList");
     update.innerHTML = list;

    document.getElementById("inputTask").value = " ";

}





//----------------------------------------------------------------------------------------------------------------
//Para deletar uma tarefa

function deleteTask(element){
    let confirmation = window.confirm('Deseja apagar essa tarefa?');

    if(confirmation){
    tasks = tasks.filter(task=>task.id!=element.getAttribute('id'));                   //<< **** OBS2
    };
    localStorage.setItem("tasks",JSON.stringify(tasks));
    updateList();
}


// Para apagar tudo

     function cleanAll ( ){

    
        let confirmation = window.confirm("Deseja apagar todas as suas tarefas?") ;

        if(confirmation){
            tasks = [ ];
            alert("Tarefas apagadas!")                         //<< **** OBS3
        }
     
    localStorage.setItem("tasks",JSON.stringify(tasks))             //Aqui eu chamo a função para adicionar o array na memória.
    updateList();
}
    

//-------------------------------------------------------------------------------------------------------------------
// Abaixo agrupei alguns eventos 

function mouseOn(elemento){                                                //<<      Eventos do Botão de Adicionar tarefas 
    elemento.style.backgroundColor = "#CCE4FF";
    elemento.style.backgroundImage = 'url("./Image/Add2.png")'
    elemento.style.padding = "7%";
}

function mouseOut(elemento){
    elemento.style.backgroundColor = "#1f7fb3";
    elemento.style.backgroundImage = 'url("./Image/Add1.png")'
    elemento.style.padding = "5%";
}

function cursorOn(elemento){                                                //<<      Eventos do botão de apagar tarefas
    elemento.style.backgroundImage = 'url("./Image/reset2.png")';
}

function cursorOut(elemento){
    elemento.style.backgroundImage = 'url("./Image/reset1.png")';
}

function mouseIn(elemento){                                                    // << Eventos do botão apagar tudo
  elemento.style.color = "#1f7fb3"
  elemento.style.backgroundColor = "#CCE4FF"
}

function mouseOt(elemento){
    elemento.style.color = "#CCE4FF"
    elemento.style.backgroundColor = "#1f7fb3"

}

function mOn (elemento){                                                 //<< Eventos da < LISTA >
    elemento.style.backgroundColor = "#ffffff5e";
    elemento.style.color = "#156DBF";
}

function mOut (elemento){
    elemento.style.backgroundColor = "#117eb9";
    elemento.style.color = "#FFFFFF";
}
                                                                           
function titleOn(elemento){                                              //<<Eventos do Título
    elemento.style.fontSize = "4.7vw";
    elemento.style.color = "#E5B912";
}
function titleOut(elemento){
    elemento.style.fontSize = "4.5vw";
    elemento.style.color = "#eefa0ed8";
}


//Função para armazenar os dados

function loadAll(){

        let elementsTasks = localStorage.getItem("tasks");
    
    if (elementsTasks){
      tasks = JSON.parse(elementsTasks);                                   //<<<<<<----------- **
      updateList();

    }
        
}

loadAll( );