$(document).ready(function(){
  const submit = () => {
    $.post('chat_text', {text: $('input').val()}, data => {
      $('#content').html(data)
      $('input').val('')
    })
  }

  // refresh every second
  setInterval(function(){
    $.post('chat_text', data => $("#content").html(data))
  }, 1000)

  $('button[type=submit]').click(e => {
    e.preventDefault()
    submit()
  })

  // press enter to submit
  $(document).keydown(function(e){
    if (13 === e.keyCode) submit()
  })
})
// vi:et:sw=2:ts=2
