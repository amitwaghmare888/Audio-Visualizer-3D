const fileInput = document.getElementById('fileupload');
const canvas = document.getElementById('canvas1');
const audio = document.getElementById('audio');
const ctx = canvas.getContext('2d');
const body = document.body;

let audioContext;
let analyser;
let source;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

fileInput.addEventListener('change', function() {
    const files = this.files;
    const audioFile = files[0];
    
    audio.src = URL.createObjectURL(audioFile);
    audio.load();
    audio.play();
    
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        source = audioContext.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(audioContext.destination);
        analyser.fftSize = 256; 
    }

    body.classList.add('active');
    animate();
});

function animate() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    
    analyser.getByteFrequencyData(dataArray);

    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < bufferLength; i++) {
        let barHeight = dataArray[i] * 1.5;
        
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(i * (Math.PI * 2 / bufferLength)); 
        
        const hue = i * 2 + (barHeight / 2);
        ctx.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
        
        ctx.beginPath();
        ctx.fillRect(0, 50, 4, barHeight); 
        
        ctx.fillStyle = 'hsl(' + hue + ', 100%, 70%)'; 
        ctx.fillRect(0, 50 + barHeight + 5, 4, 5); 
        
        ctx.restore();
    }
    
    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});