
//Change theme
document.addEventListener('DOMContentLoaded', () => {
    const themeIcon = document.querySelector('.theme');
  
    if (themeIcon) {
      themeIcon.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        if (document.body.classList.contains('dark')) {
          themeIcon.src = 'images/icon-sun.svg';
        } else {
          themeIcon.src = 'images/icon-moon.svg';
        }
      });
    }
  });

  

  
 //Count Items left

 //Count Items left
const itemCount = document.querySelector('.count span');
const mobCount = document.querySelector('.mob-count span');

function updateItemCount() {
  const uncheckedItems = document.querySelectorAll('.list:not(.checked)');
  itemCount.innerText = uncheckedItems.length;
  mobCount.innerText = uncheckedItems.length;
}

// update count when page loads
updateItemCount();

// update count when a checkbox is checked or unchecked
document.querySelectorAll('.list input[type="checkbox"]').forEach((checkbox) => {
  checkbox.addEventListener('change', updateItemCount);
});

/*const itemCount = document.querySelector('.count span');
const mobCount = document.querySelector('.mob-count span');

itemCount.innerText = document.querySelectorAll('.list').length;
mobCount.innerText = document.querySelectorAll('.list').length;

/*Adding items */
const addButton = document.querySelector('.todo-input button');
const itemInput = document.getElementById('todo-input');
const todo = document.querySelector('.todos ul');
const itemID = document.querySelector('.filters input[type="radio"]:checked');

itemInput.addEventListener("focus", () => {
  itemInput.placeholder = "Currently typing";
});
itemInput.addEventListener("blur", () => {
  itemInput.placeholder = "Create a new todo...";
});

addButton.addEventListener('click',()=>{
  if(itemInput.value.length > 0){
      addItems(itemInput.value);
      itemInput.value = '';
  }
})


itemInput.addEventListener('keyup',(event)=>{
  if((event.code==='Enter'|| event.code==='Go' || event.key==='Enter' || event.key==='Go') && itemInput.value.length > 0){
      addItems(itemInput.value);
      itemInput.value = '';
  }
})

function addItems(text){
  const item = document.createElement('li');
  item.innerHTML = 
  `
  <label class="list">
  <input class="checkbox" type="checkbox"> 
  <span class="text">${text}</span>
  </label>
  <span class="remove"></span>
  `;
  if(itemID.id === 'completed'){
      item.classList.add('hidden');
  }
  todo.append(item);
  updateCount(1);
}

function updateCount(num) {
  itemCount.innerText = +itemCount.innerText + num;
}

/*remove items */
function removeItems(item){
  item.remove();
  updateCount(-1);
}

todo.addEventListener('click',(event)=>{
  if(event.target.classList.contains('remove')){
      removeItems(event.target.parentElement);
  }
})

todo.addEventListener('touchstart',(event)=>{
  if(event.target.classList.contains('remove')){
      removeItems(event.target.parentElement);
  }
})

/*Filters */
document.querySelectorAll('.filters input').forEach(radio =>{
  radio.addEventListener('change',(event)=>{
      filterTodo(event.target.id);
  })
})

function filterTodo(id){
  const allItems = document.querySelectorAll('li');


  switch(id){
      case 'all':
          allItems.forEach(item =>{
              item.classList.remove('hidden');
      })    
      break;
      case 'active':
          allItems.forEach(item =>{
              if(item.querySelector('input').checked){
                  item.classList.add('hidden')
              }else{
                  item.classList.remove('hidden')
              }
      })
      break;
      default:
          allItems.forEach(item =>{
              if(item.querySelector('input').checked){
                  item.classList.remove('hidden')
              }else{
                  item.classList.add('hidden')
              }
          })
          break;
  }
}

/*clear items */
const clear = document.querySelector('.clear');
const mobClear = document.querySelector('.mob-clear');

clear.addEventListener('click',()=>{
  const itemChecked = document.querySelectorAll('.list input[type="checkbox"]:checked');
  itemChecked.forEach(item=>{
      removeItems(item.closest('li'));
  })
})
mobClear.addEventListener('click',()=>{
  const itemChecked = document.querySelectorAll('.list input[type="checkbox"]:checked');
  itemChecked.forEach(item=>{
      removeItems(item.closest('li'));
  })
})

/*reorder list */
Sortable.create(todoList);