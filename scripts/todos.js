// IIFE
// Immediately Invoked Function Expression
(function main() {
  const apiUrl = 'http://localhost:3005/todos';
  const fetchHeaders = {
    'Content-type': 'application/json',
  };

  function handleFetchResponse(res) {
    if (res.ok === false) {
      // this would be the place you interact with the DOM
      console.warn(
        'Display an error on the page for your users, something like "An error occured please try again later".'
      );
      throw new Error('An error ocurred with the fetch call.');
    }
    return res.json();
  }

  function getTodos() {
    return fetch(`${apiUrl}?userId=1`).then(handleFetchResponse);
  }

  async function displayTodoList() {
    const todos = await getTodos();

    const fragment = document.createDocumentFragment();
    for (const todo of todos) {
      const todoItem = buildTodoHtml(todo);
      fragment.append(todoItem);
    }

    document.body.append(fragment);
  }

  function buildTodoHtml(todo) {
    const elem = document.createElement('p');
    const label = document.createElement('label');
    const check = document.createElement('input');
    const del = document.createElement('button');

    check.type = 'checkbox';
    check.checked = todo.completed;
    check.dataset.todoCheck = todo.id;

    label.append(check);
    label.append(document.createTextNode(todo.content));
    del.innerHTML = '&times;';
    del.dataset.todoDelete = todo.id;

    elem.append(label);
    elem.append(del);
    return elem;
  }

  const addTodoForm = document.querySelector('[data-create-form]');
  addTodoForm.addEventListener('submit', handleAddTodo);

  async function handleAddTodo(e) {
    e.preventDefault();

    const content = e.target.content.value;

    const todo = await fetch(`${apiUrl}`, {
      method: 'POST',
      headers: fetchHeaders,
      body: JSON.stringify({
        userId: 1,
        content,
        completed: false,
      }),
    }).then(handleFetchResponse);

    const todoItem = buildTodoHtml(todo);
    document.body.append(todoItem);
  }

  document.body.addEventListener('change', handleTodoStateChange);

  async function handleTodoStateChange(e) {
    const todoId = e.target.dataset.todoCheck;

    if (!todoId) {
      return;
    }
    //update the databse
    await fetch(`${apiUrl}/${todoId}`, {
      method: 'PATCH',
      headers: fetchHeaders,
      body: JSON.stringify({ completed: Boolean(e.target.checked) }),
    }).then(handleFetchResponse);
  }

  document.body.addEventListener('click', handleDeleteTodo);
  async function handleDeleteTodo(e) {
    const todoId = e.target.dataset.todoDelete;
    if (!todoId) {
      return;
    }

    const isConfirmed = confirm(
      'Are you sure you want to delete this todo item?'
    );

    if (isConfirmed) {
      try {
        await fetch(`${apiUrl}/${todoId}`, {
          method: 'DELETE',
        }).then(handleFetchResponse);
      } catch (e) {
        console.warn(e);
        throw e;
      }

      e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    }
  }

  displayTodoList();
})();
