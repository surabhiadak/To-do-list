function todoList()
{
    const list = document.querySelector('.list');
    const input = document.querySelector('input');
    const newTask = document.createElement('li');
    const span = document.createElement('span');

    span.innerHTML = '<i class="fas fa-trash"></i>';

    if(input.value !== ''){
        newTask.textContent = input.value;
        input.value = '';   
        list.appendChild(newTask); 
        newTask.appendChild(span);       
    }

    span.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
    });

    newTask.addEventListener('click', ()=>{
        newTask.classList.toggle('completed');
    });
}