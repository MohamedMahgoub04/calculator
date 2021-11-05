

function add(a, b) {
 result = a + b
 console.log(result)
 return result
}

function subtract(a, b) {
 result = a - b
 console.log(result)
 return result
}
function multiply(a, b) {
 result = a * b
 console.log(result)
 return result
}
function divide(a, b) {
 result = a / b
 console.log(result)
 return result
}


document.addEventListener('DOMContentLoaded', () => {
 let h3 = document.querySelector('h3')
 let h5 = document.querySelector('h5')
 let operators = ['+', '-', '*', '/']

 // Clear button
 document.querySelector('button').onclick = () => {
  h3.innerHTML = ''
  h5.innerHTML = ''
 }

 // Delete button
 document.querySelector('#delete').onclick = () => {
  h5.innerHTML = h5.innerHTML.slice(0, -1) 
 }

 
 // Numbers
 document.querySelectorAll('.numbers').forEach(x => {
  x.onclick = () => {
   h5.append(x.innerHTML)
   let a = parseInt(x.innerHTML)
   // console.log(parseInt(x.innerHTML))

   let li = [] 
   for (let i = 0; i < h5.innerHTML.length; i++) {
    li.push(h5.innerHTML[i])
   }   
   console.log(li)
   for (let i of ['+','-','*','/']) {
    console.log(i)
    if (i in li) {
     
     console.log(li.indexOf(i))
    }
   }
   

  }
 })

 // Operands
 document.querySelectorAll('.operands').forEach(x => {
  x.onclick = () => {

   let li = [] 
   for (let i = 0; i < h5.innerHTML.length; i++) {
    li.push(h5.innerHTML[i])
   }   
   console.log(li)
   
   h5.append(x.getAttribute('data-op'))
   // console.log(x.innerhtml)

   }

   // switch (x.getAttribute('data-op')) {
   //  case '+':
   //   add(a, )
   // }


   }
  

 )

})