const input = document.getElementById('texto');
const button = document.getElementById('btn-añadir');
const listaUL = document.getElementById('lista-todos');

button.addEventListener('click', async () => {
    const tareaTexto = input.value.trim();

    if (tareaTexto !== "") {
        try {
            const response = await fetch('/api/todos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ tarea: tareaTexto })
            });

            if (!response.ok) throw new Error('Error al crear en la DB');

            const todoCreado = await response.json();

            const li = document.createElement('li');
            li.dataset.id = todoCreado.id;
              
            const colorRandom = '#' + Math.floor(Math.random()*16777215).toString(16);
             li.style.backgroundColor = colorRandom;
     
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'check-todo';
            checkbox.checked = todoCreado.completado;

            const spanTexto = document.createElement('span');
            spanTexto.textContent = todoCreado.tarea;

            checkbox.addEventListener('change', async () => {
                try {
                    const resUpdate = await fetch(`/api/todos/${todoCreado.id}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ completado: checkbox.checked })
                    });

                    if (resUpdate.ok) {
                        li.classList.toggle('completado');
                    } else {
                        checkbox.checked = !checkbox.checked;
                        alert("Error al actualizar en DB");
                    }
                } catch (err) {
                    console.error('Error de red:', err);
                    checkbox.checked = !checkbox.checked;
                }
            });

            li.appendChild(checkbox);
            li.appendChild(spanTexto);
            listaUL.appendChild(li);

            input.value = '';
            input.focus();

        } catch (error) {
            console.error('Error al conectar con el backend:', error);
        }
    }
});