const som = document.querySelector("#som")
const usd = document.querySelector("#usd")
const eur = document.querySelector("#eur")


const convert = (elem, elem2, elem3) => {  
     
     
    elem.addEventListener("input", () => { 
        fetch('data.json').then((resp)=>{ 
                return resp.json() 
         
        }).then((resp)=>{ 
            console.log(resp); 
            switch (elem){ 
                case som: 
                    elem2.value = (elem.value/resp.usd).toFixed(2) 
                    elem3.value = (elem.value/resp.eur).toFixed(2) 
                    break; 
                case usd: 
                    elem2.value = (elem.value*resp.usd).toFixed(2) 
                    elem3.value = ((elem.value*resp.usd)/resp.eur).toFixed(2) 
                    break; 
                case eur: 
                    elem2.value = (elem.value*resp.eur).toFixed(2) 
                    elem3.value = ((elem.value * resp.eur)/resp.usd).toFixed(2) 
                    break; 
                } 
                if(elem.value ===""){ 
                    elem2.value = "" 
                    elem3.value = "" 
                }     
        }).catch(()=>{ 
            console.log('error'); 
        })
}) 
} 
 
convert(som,usd,eur) 
convert(usd,som,eur) 
convert(eur,som,usd)
