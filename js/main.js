let burguer = document.getElementsByTagName('span')[0]
let menu = document.getElementsByTagName('menu')[0]

function tamanho(){
    console.log('ola')
    if(window.innerWidth<704){
       menu.style.display='none'


    }else if(window.innerWidth >704){
        menu.style.display='block'
    }
    

}

burguer.addEventListener('click',()=>{
    if(menu.style.display=='block'){
        menu.style.display='none'
    }else{
        menu.style.display='block'
        

        
    }
})
