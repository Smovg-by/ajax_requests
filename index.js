//
// UI
//

const resultBlock = document.querySelector('#result')
const pageNumberEl = document.querySelector('#page-number')
const clickMeButton = document.querySelector('#click-me')
const getTasksButton = document.querySelector('#get-tasks')
// event listeners
clickMeButton.addEventListener('click', () => {
  const promise = getImages(pageNumberEl.value)
  promise.then(onImagesReceived)
})

getTasksButton.addEventListener('click', () => {
  const promise = getTasks()
  promise.then(onTasksReceived)
})

//promise handlers
function onImagesReceived (data) {
  data.data.forEach(element => {
    const img = document.createElement('img')
    img.src = element.thumbnail
    document.querySelector('#img_container').appendChild(img)
  })
}

function onTasksReceived (data) {
  const result = document.querySelector('#tasks-result')
  result.innerHTML = ''
  data.forEach(element => {
    console.log(data.length)
    const li = document.createElement('li')
    li.innerHTML = `${element.title} ${element.id} ${element.done}`
    result.appendChild(li)
  })
}
