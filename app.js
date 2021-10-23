const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

// ADD NEW TODO
const generateNewItem = todo  => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;

  list.innerHTML += html;

};

addForm.addEventListener('submit', (e) => {

  e.preventDefault();

  const todo = addForm.add.value.trim();

  if(todo.length){
    generateNewItem(todo);
    addForm.reset();
  }
});

// delete todos
list.addEventListener('click', e => {
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }
});

// search // TODO:

const filterTodo = value => {
  Array.from(list.children)
  .filter(todo => todo.textContent.toLowerCase().includes(value))
  .forEach(todo => todo.classList.remove('filtered'));


  Array.from(list.children)
  .filter(todo => !todo.textContent.toLowerCase().includes(value))
  .forEach(todo => todo.classList.add('filtered'));

};

search.addEventListener('keyup', () => {
  const value = search.value.trim().toLowerCase();
  filterTodo(value);
});
