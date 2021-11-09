
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
// let defaulttheme = ['#212529', '#ced4da', '#adb5bd']
// const navy = ['#012a4a', '#89c2d9', '#41B0FE']
// const rose = ['#641220', '#EF7598', '#da1e37']
// const olive = ['#2C5F2D', '#97BC62FF', '#00CF61']
// const coffee = ['#583101', '#d4a276', '#bc8a5f']
// const lavender = ['#6247aa', '#b185db', '#a06cd5']
// const orange = ['#14213d', '#fca311', '#FDCE81']
// const lemon = ['#101820FF', '#f3ca20', '#FBECB0']
// const cherry = ['#990011FF', '#FCF6F5FF', '#FF7181']

let themes = {
  defaulttheme: ['#212529', '#ced4da', '#adb5bd'],
  navy: ['#012a4a', '#89c2d9', '#41B0FE'],
  rose: ['#641220', '#EF7598', '#da1e37'],
  olive: ['#2C5F2D', '#97BC62FF', '#00CF61'],
  coffee: ['#583101', '#d4a276', '#bc8a5f'],
  lavender: ['#6247aa', '#C9BFE4', '#AB9BD5'],
  orange: ['#14213d', '#fca311', '#FDCE81'],
  lemon: ['#101820FF', '#f3ca20', '#FBECB0'],
  cherry: ['#990011FF', '#FCF6F5FF', '#FF7181']
}

// Dark theme
function darkMode(bool) {
  const textColor = 'white'
  if (bool) {
    // document.querySelector('body').style.background = "#212121"
    // random-grey-variations
    // stardust
    // tasky
    // xv
    
    document.querySelector('body').style.background = "url('https://www.transparenttextures.com/patterns/tasky.png')"
    document.querySelector('body').style.backgroundColor = '#212121'
    document.querySelector('label').style.color = textColor
    document.querySelector('p').style.color = textColor
    document.querySelector('#crescent').src = 'darkmode_on.gif'
    document.querySelector('#github').src = 'github_dark.gif'
  } else {
    document.querySelector('body').style.background = "url(https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png)"
    document.querySelector('label').style.color = '#212121'
    document.querySelector('p').style.color = '#212121'
    document.querySelector('#crescent').src = 'darkmode_off.gif'
    document.querySelector('#github').src = 'github.png' 
  }
}

document.addEventListener('DOMContentLoaded', () => {

 // Keyboard
 addEventListener('keydown', (event) => {
  let key = 'k' + event.key
  document.querySelector(`[data-val=${key}]`).click()
 })

 //  Declaring variables and constants
 const darkToggle = document.querySelector('#crescent')
 let darkClicked = true
 const slt = document.querySelector('select')
 const h3 = document.querySelector('h3')
 const h5 = document.querySelector('h5')
 let addDecimal = true
 
 let expression = ''

 // Dark mode
 darkToggle.onclick = () => {
  if (darkClicked) {
    darkMode(true)
    darkClicked = false
    themes.defaulttheme = ['#626262', '#f7f7f7', '#dedede']
    theme(themes.defaulttheme)
    themes.orange = ['#D78703', '#FEE2B4', '#FDCE81']
    themes.lemon = ['#D5AD0B', '#FBEFBA', '#F8E48A']
  } else {
    darkMode(false)
    darkClicked = true
    themes.defaulttheme = ['#212529', '#ced4da', '#adb5bd']
    theme(themes.defaulttheme)
    themes.orange = ['#14213d', '#fca311', '#FDCE81']
    themes.lemon = ['#101820FF', '#f3ca20', '#FBECB0']
 }}

 // Clear button
 document.querySelector('button').onclick = () => {
  h3.innerHTML = ''
  h5.innerHTML = ''
  expression = ''
  addDecimal = true
 }

 // Delete button
 document.querySelector('#delete').onclick = () => {
  h5.innerHTML = h5.innerHTML.slice(0, -1) 
  expression = expression.slice(0, -1)
  if (h5.innerHTML.includes('.')) return
  addDecimal = true
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
   addDecimal = true
  }
 }
 )

 // Decimal point
 document.querySelector('#corner3').onclick = () => {
   if (!addDecimal) return
   expression += '.'
   h5.append('.')
   addDecimal = false
 }

 // Equal 
 document.querySelector('#equal').onclick = () => {
  console.log(expression)
  let answer = eval(expression.toString())
  answer = Math.round((answer + Number.EPSILON) * 100) / 100
  console.log(answer)
  document.querySelector('h3').innerHTML = answer
  h5.append('=')
 }

 // Themes
 slt.onchange = () => {
  switch (slt.value) {
    case 'default':
     theme(themes.defaulttheme)
     break
    case 'rose':
     theme(themes.rose)
     break
    case 'navy':
     theme(themes.navy)
     break
    case 'olive':
     theme(themes.olive)
     break
    case 'coffee':
     theme(themes.coffee)
     break
    case 'lavender':
     theme(themes.lavender)
     break
    case 'orange':
     theme(themes.orange)
     break
    case 'lemon':
     theme(themes.lemon)
     break
    case 'cherry':
      theme(themes.cherry)
      break
  }
 }

})
