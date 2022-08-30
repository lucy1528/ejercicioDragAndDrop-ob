const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
const papelera = document.querySelector(".papelera")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", () =>{
        console.log("Estoy arrastrando el parrafo: " + parrafo.innerText);
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })

    parrafo.addEventListener("dragend", () =>{
        // console.log("He terminado de arrastrar el parrafo: " + parrafo.innerText);
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy" //copy por defecto
        // console.log("Drag Over");
    })

    seccion.addEventListener("drop", event => {
        console.log("Drop");        
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })

})

papelera.addEventListener("dragover", event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "copy"
})

papelera.addEventListener("drop", e =>{
    const id_parrafo = e.dataTransfer.getData("id")
    const parrafo = document.getElementById(id_parrafo)
    parrafo.remove()        
})



