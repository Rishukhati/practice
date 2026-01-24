    let ctr = 1;

function deleteTodo(index) {
        const element = document.getElementById(index);
        element.parentNode.removeChild(element);
    }

function todoadd() {
        const value = document.querySelector("input").value;

        const newTodoEl = document.createElement("div");
        newTodoEl.setAttribute('id', ctr)
        newTodoEl.innerHTML = "<div>" + value + "</div><button onclick = 'deleteTodo(" + ctr+ " )'> delete</button>";
        ctr = ctr + 1;
        document.querySelector("body").appendChild(newTodoEl);
    }
