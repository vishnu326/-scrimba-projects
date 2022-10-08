let count1 = 0
let count2 = 0
 let Display = document.getElementById("score-home")
 let DIsplay = document.getElementById("score-guest")
  function increase1(){
      count1 += 1
      Display.textContent = count1
  }
   function increase2(){
       count1 +=2
       Display.textContent = count1
   } 
    function increase3(){
        count1 += 3
        Display.textContent = count1
    }
    function increment1(){
      count2 += 1
      DIsplay.textContent = count2
  }
   function increment2(){
       count2 +=2
       DIsplay.textContent = count2
   } 
    function increment3(){
        count2 += 3
        DIsplay.textContent = count2
    }

function reset(){
    Display.innerText = 0
    DIsplay.innerText = 0
    count1 = 0
    count2 = 0
}