const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
   createTags(e.target.value)
   if (e.key === 'Enter') {
      setTimeout(() => {
         e.target.value = ''
      }, 10)
      randomSelect()
   }
})

function createTags(input) {
   const tags = input
      .split(',') // Create an object with values devided by comma ','
      .filter((tag) => tag.trim() !== '') // remove spaces from values devided by coma and if it is not equal to an empty string then return it
      .map((tag) => tag.trim()) //trim any whitespace

   tagsEl.innerHTML = ''

   tags.forEach((tag) => {
      const tagEl = document.createElement('span')
      tagEl.classList.add('tag')
      tagEl.innerText = tag
      tagsEl.appendChild(tagEl)
   })
}

function randomSelect() {
   const times = 30

   const interval = setInterval(() => {
      const randomTag = pickRandomTag()

      highlightTag(randomTag)
      setTimeout(() => {
         unHighlightTag(randomTag)
      }, 100)
   }, 100)

   setTimeout(() => {
      clearInterval(interval)

      setTimeout(() => {
         const randomTag = pickRandomTag()
         highlightTag(randomTag)
      }, 100)
   }, times * 100)
}

function pickRandomTag() {
   const tags = document.querySelectorAll('.tag')
   return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
   tag.classList.add('highlight')
}

function unHighlightTag(tag) {
   tag.classList.remove('highlight')
}
