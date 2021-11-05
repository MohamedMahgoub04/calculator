function bluetheme() {
  document.querySelectorAll('button').forEach(x => {
    x.style.backgroundColor = '#90e0ef'
    x.style.color = "#14213d"
    x.style.border = '1px solid #14213d'
    x.onmouseover = () => {
      x.style.backgroundColor = '#1DBBEC'
    }
    x.onmouseout = () => {
      x.style.backgroundColor = '#90e0ef'
    }
  })
  document.querySelector('main').style.backgroundColor = '#14213d'
  document.querySelector('#display').style.backgroundColor = '#90e0ef'
  document.querySelector('h5').style.color = '#14213d'
  document.querySelector('h3').style.color = '#14213d'
}
function redtheme() {
  document.querySelectorAll('button').forEach(x => {
    x.style.backgroundColor = '#EF7598'
    x.style.color = "#641220"
    x.style.border = '1px solid #641220'
    x.onmouseover = () => {
      x.style.backgroundColor = '#da1e37'
    }
    x.onmouseout = () => {
      x.style.backgroundColor = '#EF7598'
    }
  })
  document.querySelector('main').style.backgroundColor = '#641220'
  document.querySelector('#display').style.backgroundColor = '#EF7598'
  document.querySelector('h5').style.color = '#641220'
  document.querySelector('h3').style.color = '#641220'
}
function greentheme() {
  document.querySelectorAll('button').forEach(x => {
    x.style.backgroundColor = '#83FFBD'
    x.style.color = "#004b23"
    x.style.border = '1px solid #004b23'
    x.onmouseover = () => {
      x.style.backgroundColor = '#00CF61'
    }
    x.onmouseout = () => {
      x.style.backgroundColor = '#83FFBD'
    }
  })
  document.querySelector('main').style.backgroundColor = '#004b23'
  document.querySelector('#display').style.backgroundColor = '#83FFBD'
  document.querySelector('h5').style.color = '#004b23'
  document.querySelector('h3').style.color = '#004b23'
}

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
  if (slt.value == 'red'){
    redtheme()
  } else if (slt.value == 'blue') {
    bluetheme()
  } else if (slt.value == 'green') {
    greentheme()
  }

  // switch (slt.value) {
  //   case 'blue':
  //     console.log('bluu')
  //     bluetheme()
  //   case 'red':
  //     redtheme()

  // }

 }
})
