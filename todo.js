
        document.addEventListener('DOMContentLoaded', function () {
            const form = document.getElementById('todo-form');
            const input = document.getElementById('todo-input');
            const todoList = document.getElementById('todo-list');

            form.addEventListener('submit', function (event) {
                event.preventDefault();

                const taskText = input.value.trim();
                if (taskText === '') return;

                const listItem = document.createElement('li');
                listItem.className = 'list-group-item';
                listItem.innerHTML = `
                    ${taskText} <button class="btn-remove">Remove</button>
                `;

                const removeButton = listItem.querySelector('.btn-remove');
                removeButton.addEventListener('click', function () {
                    todoList.removeChild(listItem);
                });

                todoList.appendChild(listItem);
                input.value = '';
                input.focus();
            });
        });
    