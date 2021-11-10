const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $forward = document.querySelector('#forward')
const $backward = document.querySelector('#backward')
const $progress = document.querySelector('#progress')


$play.addEventListener('click', handlePlay)

function handlePlay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('le diste click a Play')
}

$pause.addEventListener('click', handlePause)

function handlePause() {
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
    console.log('le diste click a Pausa')
}

$backward.addEventListener('click', handleBackward)

function handleBackward() {
    $video.currentTime -= 10
    console.log('10 seg para atras', $video.currentTime)
}

$forward.addEventListener('click', handleForward)

function handleForward() {
    $video.currentTime += 10
    console.log('10 seg para adelante',$video.currentTime)
}

$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimpeUpdate)

function handleLoaded(){
    $progress.max = $video.duration
    console.log('ha cargado el video', $video.duration)
}

function handleTimpeUpdate(){
    $progress.value = $video.currentTime
    // console.log('tiempo actual', $video.currentTime)
}

$progress.addEventListener('input', handleInput)

function handleInput(){
    $video.currentTime = progress.value
    console.log($progress.value)
}