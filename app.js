
let input = document.querySelector("#input1")
let btn1 = document.querySelector("#btn1")
let h2 = document.querySelector(".h2")
btn1.addEventListener('click' , play)

function refreshPage() {
    location.reload();
}

function play(){
let score = Number.parseInt(input.value);
console.log(score) 
   let randomNumber = Math.floor(Math.random()*100 + 1);
    let chance = -1;
while (score > 0 && chance != randomNumber){
chance = parseInt(prompt("enter a guesses random number : ") , 10);
if(chance > 100 || chance < 0 ){
console.log( `enter a valid number` );
}
else{
score -= 1;
}
if(chance == randomNumber){
    console.log("congratulation!")
    h2.textContent = `congratulation! Actual Number is ${randomNumber}.
     You guess the actual in Number in ${input.value - score} attempts`
}
else if(score === 0  &&  chance != randomNumber){
console.log(`you lose you cannnot guess the actual number in ${input.value}`)
h2.textContent = `you lose you cannnot guess the actual number in ${input.value} .
The actual number was ${randomNumber}.`

}
else if (chance > randomNumber ){
   console.log(`your number is bigger`)
   h2.textContent = `your number is bigger`
}
else if (chance < randomNumber){
    console.log( `your number is smaller`)
    h2.textContent = `your number is smaller`

}
 }

}     


