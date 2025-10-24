var mazeCanvas = document.getElementById("mazeCanvas");
var ctx = mazeCanvas.getContext("2d");
var sprite;
var finishSprite;
var maze, draw, player;
var cellSize;
var difficulty;


window.onload = function () {
    let viewWidth = $("#view").width();
    let viewHeight = $("#view").height();
    if (viewHeight < viewWidth) {
        ctx.canvas.width = viewHeight - (viewHeight / 100);
        ctx.canvas.height = viewHeight - (viewHeight / 100);
    } else {
        ctx.canvas.width = viewWidth - (viewWidth / 100);
        ctx.canvas.height = viewWidth - (viewWidth / 100);
    }

    //Load and edit sprites
    sprite = new Image();
    sprite.src = "../../assets/img/gato-laberinto/sprite.png";
    sprite.onload = function () { /* evitar getImageData para no taint CORS */ };
    finishSprite = new Image();
    finishSprite.src = "../../assets/img/gato-laberinto/finishSprite.png";
    finishSprite.onload = function () { /* evitar getImageData para no taint CORS */ };

    const idleOverlay = document.getElementById('idle-overlay');
    const idleOk = document.getElementById('idle-ok');
    function showIdleOverlay() { if (idleOverlay) idleOverlay.style.display = 'block'; }
    function hideIdleOverlay() { if (idleOverlay) idleOverlay.style.display = 'none'; }
    showIdleOverlay();
    if (idleOk) idleOk.addEventListener('click', function () { hideIdleOverlay(); });

};

window.onresize = function () {
    let viewWidth = $("#view").width();
    let viewHeight = $("#view").height();
    if (viewHeight < viewWidth) {
        ctx.canvas.width = viewHeight - (viewHeight / 100);
        ctx.canvas.height = viewHeight - (viewHeight / 100);
    } else {
        ctx.canvas.width = viewWidth - (viewWidth / 100);
        ctx.canvas.height = viewWidth - (viewWidth / 100);
    }
    if (difficulty) {
        cellSize = mazeCanvas.width / difficulty;
        if (player != null) {
            draw.redrawMaze(cellSize);
            player.redrawPlayer(cellSize);
        }
    }
};

function setupTouchControls() {
    const controls = document.getElementById('touch-controls');
    function updateVisibility() {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        if (vh > vw) {
            controls.style.display = 'block';
        } else {
            controls.style.display = 'none';
        }
    }
    updateVisibility();
    window.addEventListener('resize', updateVisibility);

    controls.addEventListener('click', function (e) {
        const btn = e.target.closest('.tc-btn');
        if (!btn) return;
        const key = parseInt(btn.getAttribute('data-key'), 10);
        if (window.player && typeof window.player.check === 'function') {
            window.player.check({ keyCode: key });
        } else {
            try {
                const evt = new KeyboardEvent('keydown', { bubbles: true });
                Object.defineProperty(evt, 'keyCode', { get: function () { return key; } });
                window.dispatchEvent(evt);
            } catch (err) {
               
            }
        }
    });
}


document.addEventListener('DOMContentLoaded', function () {
    setupTouchControls();
});


function makeMaze() {

    if (player != undefined) {
        player.unbindKeyDown();
        player = null;
    }
    var e = document.getElementById("diffSelect");
    difficulty = e.options[e.selectedIndex].value;
    cellSize = mazeCanvas.width / difficulty;
    maze = new Maze(difficulty, difficulty);
    draw = new DrawMaze(maze, ctx, cellSize, finishSprite);
    player = new Player(maze, mazeCanvas, cellSize, displayVictoryMess, sprite);
    window.player = player;
    document.getElementById("mazeContainer").style.opacity = "1";
    // Al iniciar, ocultar overlay
    const idleOverlay = document.getElementById('idle-overlay');
    if (idleOverlay) idleOverlay.style.display = 'none';
}
