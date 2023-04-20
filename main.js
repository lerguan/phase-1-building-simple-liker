// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.getElementById('modal').setAttribute('class', 'hidden')
document.addEventListener('click', (e) => {
  e.preventDefault()
  mimicServerCall()
  .then(() =>{
    if (e.target.innerText === EMPTY_HEART) {
      e.target.innerText = FULL_HEART
      e.target.setAttribute('class', 'activated-heart')
    }
    else {
      e.target.innerText = EMPTY_HEART
      e.target.removeAttribute('class', 'activate-heart')
    }
  })
  .catch((error) => {
    document.getElementById('modal').removeAttribute('class', 'hidden')
    setTimeout(() => {
      document.getElementById('modal').setAttribute('class', 'hidden')
    })
  })
})

console.log(mimicServerCall())
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
