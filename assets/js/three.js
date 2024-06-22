document.getElementById('playPauseButton').addEventListener('click', function() {
    var playIcon = this.querySelector('.fa-play');
    var pauseIcon = this.querySelector('.fa-pause');
    
    if (playIcon.style.display === 'none') {
        playIcon.style.display = 'inline-block';
        pauseIcon.style.display = 'none';
    } else {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline-block';
    }
});


const bgBody = ["#2b2b2b","#393939", "#8c5920", "#afa999", "#384d8c", "#2d241d", "#797e77", "#803a32","#abb0b3","#C1876B","#5860a1","#ad9372","#a67c90","#6a5b9e","#78caa6","#92837e","#8c8c8c","#6c2b23","#826e92","#272729","#596573","#5f6a60","#7e4a9c","#6a7a4a","#21201c","#444a40","#616161","#012d2e","#545253","#ffcfcf","#4f665e","#444b44"];

function changeColors() {
    const randomColor = bgBody[Math.floor(Math.random() * bgBody.length)];
    document.body.style.backgroundColor = randomColor;

    const icons = document.querySelectorAll('.player__button i');
    icons.forEach(icon => {
        icon.style.color = randomColor;
    });
}

document.querySelector('.next').addEventListener('click', changeColors);
document.querySelector('.back').addEventListener('click', changeColors);
document.getElementById('playPauseButton').addEventListener('click', changeColors);