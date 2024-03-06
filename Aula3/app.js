const btn1 = document.querySelector('button')
const listaFilmes = document.querySelector('#listaFilmes')

btn1.addEventListener('click', function clicar(){
    const campoUsuario = document.querySelector('#filmeInput').value
    const itemlista = document.createElement('li')
    listaFilmes.append(itemlista)
    itemlista.innerHTML = `${campoUsuario}`
})
