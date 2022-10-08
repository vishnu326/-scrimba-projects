let count = 0
 let Display = document.getElementById("score-home")
 let DIsplay = document.getElementById("score-guest")
  function increase1(){
      count += 1
      Display.textContent = count
  }
   function increase2(){
       count +=2
       Display.textContent = count
   } 
    function increase3(){
        count += 3
        Display.textContent = count
    }
    function increment1(){
      count += 1
      DIsplay.textContent = count
  }
   function increment2(){
       count +=2
       DIsplay.textContent = count
   } 
    function increment3(){
        count += 3
        DIsplay.textContent = count
    }

function reset(){
    Display.innerText = 0
    DIsplay.innerText = 0
    count = 0
}