// Theme function
function theme(colorList) {
  document.querySelectorAll('button').forEach(x => {
    x.style.backgroundColor = colorList[1]
    x.style.color = colorList[0]
    x.style.border = `1px solid ${colorList[0]}`
    x.onmouseover = () => {
      x.style.backgroundColor = colorList[2]
    }
    x.onmouseout = () => {
      x.style.backgroundColor = colorList[1]
    }
  })
  document.querySelector('main').style.backgroundColor = colorList[0]
  document.querySelector('#display').style.backgroundColor = colorList[1]
  document.querySelector('h5').style.color = colorList[0]
  document.querySelector('h3').style.color = colorList[0]
}

// Themes [main, background, hover]
const defaulttheme = ['#212529', '#ced4da', '#adb5bd']
const navy = ['#012a4a', '#89c2d9', '#41B0FE']
const rose = ['#641220', '#EF7598', '#da1e37']
const olive = ['#2C5F2D', '#97BC62FF', '#00CF61']
const coffee = ['#583101', '#d4a276', '#bc8a5f']
const lavender = ['#6247aa', '#b185db', '#a06cd5']
const orange = ['#14213d', '#fca311', '#FDCE81']
const lemon = ['#101820FF', '#f3ca20', '#FBECB0']
const cherry = ['#990011FF', '#FCF6F5FF', '#FF7181']

document.addEventListener('DOMContentLoaded', () => {

 //  Declaring variables and constants
 const h3 = document.querySelector('h3')
 const h5 = document.querySelector('h5')
 const slt = document.querySelector('select')
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

 // Operators
 document.querySelectorAll('.operators').forEach(x => {
  x.onclick = () => {
   expression += x.getAttribute('data-op')
   h5.append(x.innerHTML)
  }
 }
 )

 // Decimal point
 document.querySelector('#corner3').onclick = () => {
   expression += '.'
   h5.append('.')
 }

 // Equal 
 document.querySelector('#equal').onclick = () => {
  console.log(expression)
  let answer = eval(expression)
  console.log(answer)
  document.querySelector('h3').innerHTML = answer
  h5.append('=')
 }

 // Theme
 slt.onchange = () => {
  if (slt.value == 'rose'){
    theme(rose)
  } else if (slt.value == 'navy') {
    theme(navy)
  } else if (slt.value == 'olive') {
    theme(olive)
  } else if (slt.value == 'coffee') {
    theme(coffee)
  } else if (slt.value == 'lavender') {
    theme(lavender)
  } else if (slt.value == 'orange') {
    theme(orange)
  } else if (slt.value == 'default') {
    theme(defaulttheme)
  } else if (slt.value == 'lemon') {
    theme(lemon)
  } else if (slt.value == 'cherry') {
    theme(cherry)
  } 

 }
})
