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
function yellowtheme() {
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
  } else if (slt.value == 'yellow') {
    yellowtheme()
  } else if (slt.value == 'default') {
    defaulttheme()
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
