const createBtn=document.querySelector('.btn')
const notesContainer=document.querySelector('.notes-container')
let notes=document.querySelector('.input-box')


function showNotes(){
    notesContainer.innerHTML=localStorage.getItem('notes')
}
showNotes()

function updateStorage(){
    localStorage.setItem('notes',notesContainer.innerHTML)
}

createBtn.addEventListener('click',createNotes)


function createNotes(){
    let inputBox=document.createElement('p')
    let img=document.createElement('img')
    inputBox.setAttribute('contenteditable',"true")
    inputBox.className='input-box'
    img.src='./img/delete.png'
    notesContainer.appendChild(inputBox).appendChild(img)
   
}

notesContainer.addEventListener('click',deleteNotes)

function deleteNotes(e){

    console.log(notes)
    if(e.target.tagName==='IMG'){
        e.target.parentElement.remove()
        updateStorage()
      
    }else if(e.target.tagName==='P'){
        notes=document.querySelectorAll('.input-box')
        notes.forEach(note=>{
            note.onkeyup=function (){
                updateStorage()
            }
        })
    }
}
document.addEventListener('keydown',event=>{
    if(event.key==='Enter'){
        document.execCommand('insertLineBreak')
        event.preventDefault()
    }
})