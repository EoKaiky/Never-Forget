const button = document.querySelector('.adicionar')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let minhaListaItens = []

function adicionaTarefa(){
    
    minhaListaItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    mostrarTarefa()
}

function mostrarTarefa(){
    
    let novaLi = ''

    minhaListaItens.forEach((item, index) => {

        novaLi = novaLi + `<li class="task ${item.concluida && "done"} " > 
                     <img class="verificar_eliminar" src="./img/verificado.png" alt="" onclick="concluirItem(${index})">  
                     <p>${item.tarefa}</p>
                     <img class="verificar_eliminar" src="./img/cancelar.png" alt=""  onclick="deletarItem(${index})">
                  </li>`

    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaItens))

}

function concluirItem(index){
    minhaListaItens [index].concluida = !minhaListaItens [index].concluida
    
    mostrarTarefa()
}

function deletarItem(index){
    minhaListaItens.splice(index, 1)

    mostrarTarefa()
}

function rechargeItens(){
    const tarefasLocalStorage = localStorage.getItem('lista')

    if(tarefasLocalStorage){
        minhaListaItens = JSON.parse(tarefasLocalStorage)
    }



    mostrarTarefa()
}

rechargeItens()
button.addEventListener('click', adicionaTarefa)