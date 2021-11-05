

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
 let expression = ''

 // Clear button
 document.querySelector('button').onclick = () => {
  h3.innerHTML = ''
  h5.innerHTML = ''
  expression = ''
 }

 // Delete button
 document.querySelector('#delete').onclick = () => {
  h5.innerHTML = h5.innerHTML.slice(0, -1) 
  expression = expression.slice(0, -1)
 }

 
 // Numbers
 document.querySelectorAll('.numbers').forEach(x => {
  x.onclick = () => {
   expression += x.innerHTML
   h5.append(x.innerHTML)
  }
 })

 // Operands
 document.querySelectorAll('.operands').forEach(x => {
  x.onclick = () => {
   expression += x.getAttribute('data-op')
   h5.append(x.innerHTML)
  }
 }
 )

 document.querySelector('#equal').onclick = () => {
  console.log(expression)
  let answer = eval(expression)
  console.log(answer)
  document.querySelector('h3').innerHTML = answer
 }

})