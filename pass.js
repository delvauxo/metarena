// Selectors.
const inputPw = document.querySelector('#form-pw input')
const video = document.querySelector('section video')
const code = 'metaforlife'

inputPw.addEventListener('keyup', function (e) {
    // If enter is hit.
    if (e.keyCode === 13) {
        // Cancel the default action, if needed.
        e.preventDefault()
        if (inputPw.value === code) {
            console.log(inputPw.value)
            console.log(code)
            console.log('Vous pouvez entrer !')
            video.setAttribute('src', './img/home-video-pw-2.webm')
            inputPw.style.display = 'none'
        } else {
            console.log(inputPw.value)
            console.log(code)
            console.log('Vous ne pouvez pas entrer !')
        }
        
    }
})
