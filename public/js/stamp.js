const stamps=document.querySelectorAll('.stamp');
const model=document.querySelector('.stamp-exp-wrap');
const closeBtn=document.getElementById('modelClose');

stamps.forEach(stamp => {
    stamp.addEventListener('click',()=>{
        model.classList.add('modelUp');
    })

    closeBtn.addEventListener('click',()=>{
        model.classList.remove('modelUp');
    })
});


const qrModel=document.getElementById('qrInput');
document.getElementById('stampGet').addEventListener('click',()=>{
    model.classList.remove('modelUp');
    qrModel.classList.add('modelUp');
    const video = document.getElementById("video");
    navigator.mediaDevices.getUserMedia({
        video: { width: 320, height: 320 },
        audio: false,
    }).then(stream => {
        video.srcObject = stream;
        video.play()
    }).catch(e => {
        console.log(e)}
    );
})
document.getElementById('qrClose').addEventListener('click',()=>{
    qrModel.classList.remove('modelUp');
    stream.getTracks().forEach(track => track.stop())
})

document.getElementById('backBtn').addEventListener('click',()=>{
    window.location.href = "index.html";
})

console.log(stamps);
