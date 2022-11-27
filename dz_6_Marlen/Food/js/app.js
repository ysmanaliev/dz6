const tabItems = document.querySelectorAll(".tabheader__item")
const tabContent = document.querySelectorAll(".tabcontent")
const tabMain = document.querySelector(".tabheader__items")

      const hideContent  =()=>{
        tabContent.forEach((item)=>{
            item.style.display= "none"
        })
        tabItems.forEach((item)=>{
            item.classList.remove("tabheader__item_active")
        })
    }

      const showContent = (i=0)=>{
        tabContent[i].style.display = "block"
        tabItems[i].classList.add("tabheader__item_active")
      }

    hideContent()
    showContent()
//     let SlindeIndex = 0
// const changeIndex=()=>{
//     if(SlindeIndex<3){
//         SlindeIndex+=1
//         console.log(SlindeIndex)
//         hideContent()
//         showContent(SlindeIndex)
//     }else{
//         SlindeIndex=0
//         console.log(SlindeIndex)
//         hideContent()
//         showContent(SlindeIndex)
//     }
// }
// const SetSlide =setInterval(changeIndex,1000)
    
   

tabMain.addEventListener("click",(event) => {
    const target = event.target
    if(!target.classList.contains('tabheader__item_active')){
        tabItems.forEach((tab , idx)=>{
            if(target === tab){
                hideContent()
                showContent(idx)
                // clearInterval(SetSlide)
            }
        }
        )
    }
})


// hw 1
const  btnOpen = document.querySelector('.btn_white')
const modal = document.querySelector('.modal')
const closeModal= document.querySelector('.modal__close')


const  openModal=()=>{
    modal.classList.add('show')
    document.body.style.overflow ='hidden'
}
const closinModal=()=>{
    modal.classList.remove('show')
    document.body.style.overflow ='auto'
}


btnOpen.addEventListener('click',openModal)

window.addEventListener('click',(e)=>{
    if(e.target===modal){
       closinModal()
    }else if(e.target===closeModal){
        closinModal()
    }
})




///  POST REq
// const modalNew = document.createElement('div')
// document.body.append(modalNew)
// const modalContent = document.createElement('div')
// modalNew.append(modalContent)

// const form = document.querySelectorAll('form')





// form.forEach((form)  => {
//     postData(form)
// })


// function postData (form){
//     form.addEventListener('submit',(event) => {
//         event.preventDefault()
       
    
        
//         const formData = new FormData(form)

//         const obj = {}

//         // obj['age'] = 20
//         formData.forEach((item,id) => {
//             obj[id] = item
//         })
//         const data = JSON.stringify(obj)
//         closinModal()
//         MakeModal()
//         modalContent.innerHTML ='loading...'
//         fetch('server.php',{
//             method: 'POST',
//             headers: {'Content-type':'application/json'},
//             body: data
//         }).then((req)=>{
//             if(req.status>=200 && req.status<400){
               
//                 modalContent.innerHTML ='success'
//             }else{
//                 throw('error')
//             }
//         }).catch(()=>{
//             modalContent.innerHTML ='fail'
//         }).finally(()=>{
//             setTimeout(()=>{
//                 modalNew.style.display ='none'
//             },5000)
//         })
       

   



// })}

// const wrapper = document.querySelector('.wrapper')

// const req = new Promise((resolve, reject) => {
//     const req = new XMLHttpRequest()
//     req.open('GET',"https://jsonplaceholder.typicode.com/users")
//     req.setRequestHeader('Content-Type', 'application/json')
//     req.send()
//     req.addEventListener('load', () => {
//         const data = JSON.parse(req.response)
//         resolve(data)
//         reject()
//     })
// })

// req.then((data) => {
//     MakeModal()
    
// }).catch(() => {
//     console.log('failed')
// }).finally(() => {
//     setTimeout(() => {
//         console.clear()
//     }, 3000)
// })



// function MakeModal(){
//     modalNew.style.position = 'fixed'
//     modalNew.style.top = '0'
//     modalNew.style.left = '0'
//     modalNew.style.zIndex = '1050'
//     modalNew.style.width ='100%'
//     modalNew.style.height ='100%'
//     modalNew.style.overflow = 'hidden'
//     modalNew.style.background ='rgba(0, 0, 0, 0.2)'
//     modalNew.style.display = 'block'
// //modalContent

// modalContent.style.width = '500px'
// modalContent.style.paddingTop ='100px'
// modalContent.style.paddingBottom ='100px'
// modalContent.style.margin = '50vh auto'
// modalContent.style.background = 'white'
// modalContent.style.textAlign = 'center'
// }


//------------------------------------------------------------
const modalForm = document.querySelector('#modalForm')
console.log(modalForm);


modalForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    sendForm()
})

const modalNew= document.createElement('div')
document.body.append(modalNew)
const modalInner= document.createElement('div')
modalNew.append(modalInner)

function MakeNewModal(){
    
modalNew.style.position = 'fixed'
modalNew.style.top='0'
modalNew.style.left='0'
modalNew.style.zIndex = '1055'
modalNew.style.display = 'block'
modalNew.style.width = '100vw'
modalNew.style.height = '100vh'
modalNew.style.overflow= 'hidden'
modalNew.style.background = 'blue'

//modalInner
modalInner.style.margin ='20vh auto'
modalInner.style.width = '400px'
modalInner.style.height = '400px'
modalInner.style.borderRadius = '50%'
modalInner.style.background = 'white'
modalInner.style.fontSize = '50px'
modalInner.style.fontWeight ='600'
modalInner.style.display = 'flex'
modalInner.style.justifyContent = 'center'
modalInner.style.alignItems ='center'
}


function sendForm(){
    
    const formData = new FormData(modalForm)
    const obj = {}
    formData.forEach((item,id)=>{
        obj[id]=item
    })
    MakeNewModal()
    modalInner.innerText = 'loading...'
    fetch('server.php',{
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(obj)
    }).then((req)=>{
        if(req.status >=200 && req.status<400){
            modalInner.innerText = 'success'
            
        }else{
            throw('error')
        }

    }).catch(()=>{
        modalInner.innerText = 'fail'
    })
    .finally(()=>{
        setTimeout(()=>{
            closinModal()
            modalNew.style.display = 'none'
        },2000)
    })
}












