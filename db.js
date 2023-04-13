let name = ''

export function getMyName() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(name)
        }, 500)
    })
}

export function addName(text) {
    name = text
}

// export function deleteTask(id) {
//     taskList.splice(id, 1)
// }
