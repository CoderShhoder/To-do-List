var toDo=document.getElementById("task");
var btn=document.getElementById("task-btn");
var list=document.getElementById("todo");
var inputValue='';

//-------------Events-------------------//

toDo.addEventListener('input',adddInput);
btn.addEventListener('click',addTask);
list.addEventListener('click',deleteTask);

//-----------------function------------//

function adddInput(e){
    inputValue=e.target.value;
}

function addTask(){
    if(inputValue!==undefined && inputValue!==null && inputValue!==''){
        //---------Creating Div-----//
        var newItem=document.createElement("div");
        newItem.id="todo-container";
        //---------Creating li-----//
        var newList=document.createElement("li");
        newList.appendChild(document.createTextNode(inputValue));
        newList.id=("text"+(list.childElementCount+1));
        newItem.appendChild(newList);
        //---------Creating button-----//
        var checkButton=document.createElement("button");
        checkButton.innerHTML='<i class="fa fa-check-circle"></i>';
        checkButton.classList.add("checked");
        checkButton.id="task-complete";
        newItem.appendChild(checkButton);
        //---------delete button-----//
        var deleteButton=document.createElement("button");
        deleteButton.innerHTML='<i class="fa fa-trash-o"></i>';
        deleteButton.classList.add("trashed");
        deleteButton.id="delete-task";
        newItem.appendChild(deleteButton);
        //----------Adding the Div-------//
        list.appendChild(newItem);
        toDo.value=" ";
    }
    else{
        alert("Please enter a Valid Task");
    } 
}

function deleteTask(e){
    const item=e.target;
    if(item.classList[0]==="trashed"){
        const todoTask=item.parentElement;
        todoTask.classList.add("fall");
        todoTask.addEventListener('transitionend',function(){
            todoTask.remove();
        });
        
    }
    if(item.classList[0]==="checked"){
        const todoTask=item.parentElement;
        todoTask.classList.toggle("done");
    }
    toDo.value=" ";
}