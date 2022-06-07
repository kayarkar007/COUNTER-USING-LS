let counter=localStorage.getItem("numberCount");

    if(counter==null){
        counter=0;
    }
    else{
        counter=localStorage.getItem("numberCount");
    }

document.querySelector("h1").innerText=counter;

let inc=document.querySelector("#increment");
inc.addEventListener("click",increment) 
function increment(){
    counter++;
    document.querySelector("h1").innerText=counter;
    localStorage.setItem("numberCount",counter)
}

let dec=document.querySelector("#decrement");
dec.addEventListener("click",decrement) 
function decrement(){
    counter--;
    document.querySelector("h1").innerText=counter;
    localStorage.setItem("numberCount",counter)
}