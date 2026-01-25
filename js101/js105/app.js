/*    let ctr = 1;

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
    }*/

/////another way of doing this

function todoadd() {
  const value = document.querySelector("input").value;
  const spanEL = document.createElement("span");
  const buttonEL = document.createElement("button");
  spanEL.innerHTML = value;
  buttonEL.innerHTML = "delete";

  const divEl = document.createElement("div");
  divEl.appendChild(spanEL);
  divEl.appendChild(buttonEL);

  document.querySelector("body").appendChild(divEl);
}

// //much better way to do use state and component
