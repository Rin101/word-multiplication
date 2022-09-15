const firstWordDOM = document.getElementById('first-word')
const secondWordDOM = document.getElementById('second-word')
const button = document.getElementById('generate-button')

button.addEventListener('click', () => {

    fetch('words.txt')
      .then(response => response.text())
      .then(text => {
        const words = text.split('\n')
        const shuffled = [...words].sort(() => 0.5 - Math.random());
        firstWordDOM.innerText = shuffled[0].trim()
        secondWordDOM.innerText = shuffled[1].trim()
      })
})
