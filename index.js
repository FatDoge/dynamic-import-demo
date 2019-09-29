const app = document.querySelector('#app')
const log = async () => {
    const { log } = await import('./util.js')
    log()
} 
app.addEventListener('click', log)
