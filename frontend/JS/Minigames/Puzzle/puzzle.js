
var rows = 3;
var columns = 3;

var currTile;
var otherTile; 
var touchStartX;
var touchStartY;
var touchEndX;
var touchEndY;

var turns = 0;
var imgOrder = ["4", "7", "9", "2", "5", "3", "8", "1", "6"];


window.onload = function() {
    for (let r=0; r < rows; r++) {
        for (let c=0; c < columns; c++) {

            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            
            tile.draggable = true;
           
            let imgName = imgOrder.shift() + ".jpg";
            tile.src = "../../assets/img/Puzzle-img/" + imgName;
            tile.alt = "pieza " + imgName;

            // Eventos táctiles para móviles
            tile.addEventListener("touchstart", handleTouchStart, false);
            tile.addEventListener("touchmove", handleTouchMove, false);
            tile.addEventListener("touchend", handleTouchEnd, false);

            // Eventos de arrastre para PC GAMER
            tile.addEventListener("dragstart", dragStart); 
            tile.addEventListener("dragover", dragOver);    
            tile.addEventListener("dragenter", dragEnter);  
            tile.addEventListener("dragleave", dragLeave);  
            tile.addEventListener("drop", dragDrop);       
            tile.addEventListener("dragend", dragEnd);     

            document.getElementById("board").append(tile);

        }
    }
}

function handleTouchStart(e) {
    e.preventDefault();
    currTile = this;
    let touch = e.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
}

function handleTouchMove(e) {
    e.preventDefault();
}

function handleTouchEnd(e) {
    e.preventDefault();
    let touch = e.changedTouches[0];
    touchEndX = touch.clientX;
    touchEndY = touch.clientY;

    // Encontrar la pieza más cerca
    let deltaX = touchEndX - touchStartX;
    let deltaY = touchEndY - touchStartY;

    let currCoords = currTile.id.split("-");
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    
    let newRow = r;
    let newCol = c;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      
        if (deltaX > 0 && c < columns - 1) newCol++;
        else if (deltaX < 0 && c > 0) newCol--;
    } else {
      
        if (deltaY > 0 && r < rows - 1) newRow++;
        else if (deltaY < 0 && r > 0) newRow--;
    }

   
    let newTileId = newRow.toString() + "-" + newCol.toString();
    otherTile = document.getElementById(newTileId);

    if (otherTile && otherTile.src.includes("3.jpg")) {
        let currImg = currTile.src;
        let otherImg = otherTile.src;

        currTile.src = otherImg;
        otherTile.src = currImg;

        turns += 1;
        document.getElementById("turns").innerText = turns;
    }
}

function dragStart() {
    currTile = this;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this; 
}

function dragEnd() {
    if (!otherTile.src.includes("3.jpg")) {
        return;
    }

    let currCoords = currTile.id.split("-"); //ex) "0-0" -> ["0", "0"]
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    let moveLeft = r == r2 && c2 == c-1;
    let moveRight = r == r2 && c2 == c+1;

    let moveUp = c == c2 && r2 == r-1;
    let moveDown = c == c2 && r2 == r+1;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

    if (isAdjacent) {
        let currImg = currTile.src;
        let otherImg = otherTile.src;

        currTile.src = otherImg;
        otherTile.src = currImg;

        turns += 1;
        document.getElementById("turns").innerText = turns;
    }


}