const primaryButton = document.querySelector('.primary')
const secondaryButton = document.querySelector('.secondary')


primaryButton.addEventListener('click', loading)
secondaryButton.addEventListener('click', disable)

function loading(event) {
    const button = event.currentTarget
    const text = button.textContent
    button.classList.add('loading')
    button.innerHTML = `
    <i class="ph-circle-notch"></i>
    ${text}
    `
    primaryButton.removeEventListener('click', loading)
    assignStopLoading()
}

function assignStopLoading() {
    primaryButton.addEventListener('click', stopLoading)
}

function stopLoading(event) {
    const button = event.currentTarget
    const text = button.textContent
    button.classList.remove('loading')
    button.innerHTML = `
    ${text}
    `
    primaryButton.removeEventListener('click', stopLoading)
    reassignLoading()
}    

function reassignLoading() {
    primaryButton.addEventListener('click', loading)
}

function disable(event) {
    const button = event.currentTarget
    button.setAttribute('disabled', true)
}