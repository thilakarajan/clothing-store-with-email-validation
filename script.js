$(document).ready(function () {
  $('button').click(function () {
    var email = $('#exampleInputEmail1').val()
    var match =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    var res = email.match(match)
    console.log(res)
    var label = document.getElementById('reset')
    if (res) {
      label.style.color = 'green'
      label.textContent = 'Email is valid'
      label.style.borderBlockColor = 'rgba(10, 242, 10, 0.623)'
      label.style.borderBlockEndColor = 'rgba(10, 242, 10, 0.623)'
      label.style.borderBlockStyle = 'solid'
      label.style.backgroundColor = 'rgba(10, 242, 10, 0.623)'
    } else {
      label.style.color = 'red'
      label.textContent = 'Email is not valid'
      label.style.borderBlockColor = 'rgba(255, 0, 0, 0.596)'
      label.style.borderBlockEndColor = 'rgba(255, 0, 0, 0.596)'
      label.style.borderBlockStyle = 'solid'
      label.style.backgroundColor = 'rgba(255, 0, 0, 0.596)'
    }
  })
  $('form').on('submit', (e) => {
    e.preventDefault()
  })
})
