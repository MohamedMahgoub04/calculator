function defaulttheme() {
  document.querySelectorAll('button').forEach(x => {
    x.style.backgroundColor = '#ced4da'
    x.style.color = "#212529"
    x.style.border = '1px solid #212529'
    x.onmouseover = () => {
      x.style.backgroundColor = '#adb5bd'
    }
    x.onmouseout = () => {
      x.style.backgroundColor = '#ced4da'
    }
  })
  document.querySelector('main').style.backgroundColor = '#212529'
  document.querySelector('#display').style.backgroundColor = '#ced4da'
  document.querySelector('h5').style.color = '#212529'
  document.querySelector('h3').style.color = '#212529'
}
function bluetheme() {
  document.querySelectorAll('button').forEach(x => {
    x.style.backgroundColor = '#89c2d9'
    x.style.color = "#012a4a"
    x.style.border = '1px solid #012a4a'
    x.onmouseover = () => {
      x.style.backgroundColor = '#41B0FE'
    }
    x.onmouseout = () => {
      x.style.backgroundColor = '#89c2d9'
    }
  })
  document.querySelector('main').style.backgroundColor = '#012a4a'
  document.querySelector('#display').style.backgroundColor = '#89c2d9'
  document.querySelector('h5').style.color = '#012a4a'
  document.querySelector('h3').style.color = '#012a4a'
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
    x.style.backgroundColor = '#97BC62FF'
    x.style.color = "#2C5F2D"
    x.style.border = '1px solid #2C5F2D'
    x.onmouseover = () => {
      x.style.backgroundColor = '#00CF61'
    }
    x.onmouseout = () => {
      x.style.backgroundColor = '#97BC62FF'
    }
  })
  document.querySelector('main').style.backgroundColor = '#2C5F2D'
  document.querySelector('#display').style.backgroundColor = '#97BC62FF'
  document.querySelector('h5').style.color = '#2C5F2D'
  document.querySelector('h3').style.color = '#2C5F2D'
}
function browntheme() {
  document.querySelectorAll('button').forEach(x => {
    x.style.backgroundColor = '#d4a276'
    x.style.color = "#583101"
    x.style.border = '1px solid #583101'
    x.onmouseover = () => {
      x.style.backgroundColor = '#bc8a5f'
    }
    x.onmouseout = () => {
      x.style.backgroundColor = '#d4a276'
    }
  })
  document.querySelector('main').style.backgroundColor = '#583101'
  document.querySelector('#display').style.backgroundColor = '#d4a276'
  document.querySelector('h5').style.color = '#583101'
  document.querySelector('h3').style.color = '#583101'
}
function purpletheme() {
  document.querySelectorAll('button').forEach(x => {
    x.style.backgroundColor = '#b185db'
    x.style.color = "#6247aa"
    x.style.border = '1px solid #6247aa'
    x.onmouseover = () => {
      x.style.backgroundColor = '#a06cd5'
    }
    x.onmouseout = () => {
      x.style.backgroundColor = '#b185db'
    }
  })
  document.querySelector('main').style.backgroundColor = '#6247aa'
  document.querySelector('#display').style.backgroundColor = '#b185db'
  document.querySelector('h5').style.color = '#6247aa'
  document.querySelector('h3').style.color = '#6247aa'
}
function orangetheme() {
  document.querySelectorAll('button').forEach(x => {
    x.style.backgroundColor = '#fca311'
    x.style.color = "#14213d"
    x.style.border = '1px solid #14213d'
    x.onmouseover = () => {
      x.style.backgroundColor = '#FDCE81'
    }
    x.onmouseout = () => {
      x.style.backgroundColor = '#fca311'
    }
  })
  document.querySelector('main').style.backgroundColor = '#14213d'
  document.querySelector('#display').style.backgroundColor = '#fca311'
  document.querySelector('h5').style.color = '#14213d'
  document.querySelector('h3').style.color = '#14213d'
}
function yellowtheme() {
  document.querySelectorAll('button').forEach(x => {
    x.style.backgroundColor = '#f3ca20'
    x.style.color = "#101820FF"
    x.style.border = '1px solid #101820FF'
    x.onmouseover = () => {
      x.style.backgroundColor = '#FBECB0'
    }
    x.onmouseout = () => {
      x.style.backgroundColor = '#f3ca20'
    }
  })
  document.querySelector('main').style.backgroundColor = '#101820FF'
  document.querySelector('#display').style.backgroundColor = '#f3ca20'
  document.querySelector('h5').style.color = '#101820FF'
  document.querySelector('h3').style.color = '#101820FF'
}
function cherrytheme() {
  document.querySelectorAll('button').forEach(x => {
    x.style.backgroundColor = '#FCF6F5FF'
    x.style.color = "#990011FF"
    x.style.border = '1px solid #990011FF'
    x.onmouseover = () => {
      x.style.backgroundColor = '#FF7181'
    }
    x.onmouseout = () => {
      x.style.backgroundColor = '#FCF6F5FF'
    }
  })
  document.querySelector('main').style.backgroundColor = '#990011FF'
  document.querySelector('#display').style.backgroundColor = '#FCF6F5FF'
  document.querySelector('h5').style.color = '#990011FF'
  document.querySelector('h3').style.color = '#990011FF'
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

 // Period
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
  if (slt.value == 'red'){
    redtheme()
  } else if (slt.value == 'blue') {
    bluetheme()
  } else if (slt.value == 'green') {
    greentheme()
  } else if (slt.value == 'brown') {
    browntheme()
  } else if (slt.value == 'purple') {
    purpletheme()
  } else if (slt.value == 'orange') {
    orangetheme()
  } else if (slt.value == 'default') {
    defaulttheme()
  } else if (slt.value == 'yellow') {
    yellowtheme()
  } else if (slt.value == 'cherry') {
    cherrytheme()
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
