// access my page elements 
let pause = document.getElementById("pause");
let divCounter= document.getElementById("counter")
let minus = document.getElementById("minus");
let plus= document.getElementById("plus")
let heart= document.getElementById("heart")
let btnSubmit = document.getElementById("submit")
let likes= document.querySelector('.likes')
let form= document.querySelector('form')
let comments=document.querySelector('.comments')



// on document load  start incrementing counter by 1
document.addEventListener("DOMContentLoaded", () => {
    let myId = getInterval();

     // manually increment or decrement counters
    minus.addEventListener("click", (e)=>{
        manualIncrementDecrement(e.target.id);
        console.log(e.target.id);
    })

    plus.addEventListener("click", (e)=>{
        manualIncrementDecrement(e.target.id);
        console.log(e.target.id);
    })

    //  add likes 
    heart.addEventListener("click", ()=>{
        let mynumber=parseInt(divCounter.innerHTML);
        console.log(mynumber);
        let myNumberOflikes=getLikes(mynumber);
        console.log(myNumberOflikes)
    })

    // add a pause listener to pause my counter or resume my counter
    pause.addEventListener("click", (e) => {
        if (e.target.innerHTML === " pause ") {
            endInterval(myId)
            e.target.innerHTML = "resume";
            minus.setAttribute('disabled', true);
            heart.setAttribute('disabled', true);
            plus.setAttribute('disabled', true);
            btnSubmit.setAttribute('disabled', true);
        }else if(e.target.innerHTML === "resume"){
            e.target.innerHTML=" pause ";
            minus.removeAttribute('disabled');
            plus.removeAttribute('disabled');
            heart.removeAttribute('disabled');
            btnSubmit.removeAttribute('disabled');

            // change my interval id to the resume interval id
            myId = getInterval();
        }
    })

    // add comment
    form.addEventListener("submit", (e)=>{
        e.preventDefault()
        let input =e.target.querySelector("#comment-input").value;
        let p=document.createElement('p');
        p.innerHTML=`${input}`;
        comments.appendChild(p);
        form.reset();
    })
})



// function to increment counter
const getInterval = () => {
    let intervalId = setInterval(() => {
        // change my string value to an int
        let number= parseInt(divCounter.innerHTML);

        // increment it and pass it back to the browser
        number= number + 1;
        divCounter.innerHTML = `${number}`;

        // get likes

    }, 1000);
    return intervalId;
}


// function to clear interval
const endInterval = (id) => {
    clearInterval(id);
}


// function to get likes 
let currentListId=""
let currentNumber=0
let newlike= 0
const getLikes=(number)=>{
    if (number == currentNumber){
        newlike += 1
        document.getElementById(`number${currentNumber}`).innerHTML= `${currentNumber} has been liked ${newlike} times`
    }else{
        currentNumber = number
        newlike = 0
        newlike +=  1
        let list=document.createElement("li");
        list.setAttribute('id', `number${currentNumber}`);
        currentListId=`number${currentNumber}`
        list.innerHTML=`${currentNumber} has been liked ${newlike} time`
        likes.appendChild(list);
    }

    return "added"
}



// function to manually decrement or increment counter
function manualIncrementDecrement(id){
     // change my string value to an int
     let number= parseInt(divCounter.innerHTML);
    if(id === "plus"){
          // increment it and pass it back to the browser
          number= number + 1;
          divCounter.innerHTML = `${number}`;
    }else if(id === "minus"){
          // increment it and pass it back to the browser
          number= number - 1;
          divCounter.innerHTML = `${number}`;
    }
} 