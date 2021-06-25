//
// DAL
//
// function getImages (pageNumber) {
//   const promise = $.ajax(
//     `https://repetitora.net/api/JS/Images?page=${pageNumber}&count=2`
//   )
//   return promise
// }
function getImages (pageNumber) {
  const promise = axios.get(
    `https://repetitora.net/api/JS/Images?page=${pageNumber}&count=2`
  )
  return promise
}

function getTasks () {
  const promise = axios.get(
    `https://repetitora.net/api/JS/Tasks?widgetId=128&count=50`
  )
  return promise.then(response => {
    return response.data
  })
}

function createTask (title) {
  const promise = axios.post(`https://repetitora.net/api/JS/Tasks`, {
    widgetId: 128,
    title: title
  })
  return promise.then(response => {
    return response.data
  })
}

function updateTask (title, taskId) {
  const promise = axios.put(`https://repetitora.net/api/JS/Tasks`, {
    widgetId: 128,
    title: title,
    taskId: taskId,
    done: true
  })
  return promise.then(response => {
    return response.data
  })
}

function deleteTask (id) {
  const promise = axios.delete(
    `https://repetitora.net/api/JS/Tasks?widgetId=128&taskId=${id}`
  )
  return promise.then(response => {
    return response.data
  })
}

//
//
//
// createTask('Learn Delete')
updateTask('New title', '4348ea01-2aed-4525-9b4b-21b5519f04b2')
