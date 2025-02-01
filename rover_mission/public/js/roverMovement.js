var direction = "S";
var newPos = [1,1];
var actualPos = [1,1];

function moveRover(newPos, actualPos){
    actualPos = document.getElementById(actualPos.join(','));
    newPos = document.getElementById(newPos.join(','));
    
    let rover = actualPos.innerHTML;
    
    actualPos.innerHTML = "";
    
    newPos.innerHTML = rover;
    
    rotateRover();
    return newPos.id.split(',');
}

function rotateRover(){
    rover.setAttribute('class', '')
    switch (direction){
        case "N":
            rover.classList.add("rotate-180");
        break
        case "W":
            rover.classList.add("rotate-90");
        break
        case "E":
            rover.classList.add("-rotate-90");
        break

    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('send').addEventListener('click', function(e) {
        e.preventDefault();
        let rover = document.getElementById('rover');
        var indications = document.getElementById('indications').value.trim();
        indications = indications.split(""); // Convert string into array of directions

        var actualPos = document.getElementById('rover').parentElement.id.split(',');
        
        console.log(actualPos);
        
        // Process each indication (N = North, S = South, E = East, W = West)
        indications.forEach((indication) => {
            console.log(indication);
            switch (indication) {
                case 'F': // Move Front
                    switch (direction) {
                        case "N":
                            newPos[0] = parseInt(actualPos[0])-1;
                            newPos[1] = parseInt(actualPos[1]);
                        break
                        case "S":
                            newPos[0] = parseInt(actualPos[0])+1;
                            newPos[1] = parseInt(actualPos[1]);
                        break
                        case "E":
                            newPos[0] = parseInt(actualPos[0]);
                            newPos[1] = parseInt(actualPos[1])+1;
                        break 
                        case "W":
                            newPos[0] = parseInt(actualPos[0]);
                            newPos[1] = parseInt(actualPos[1])-1;
                        break
                    }
                    break;
                case 'L': // Move Left
                    switch (direction) {
                        case "N":
                            newPos[0] = parseInt(actualPos[0]);
                            newPos[1] = parseInt(actualPos[1])-1;
                            direction = "W";
                        break
                        case "S":
                            newPos[0] = parseInt(actualPos[0]);
                            newPos[1] = parseInt(actualPos[1])+1;
                            direction = "E";
                        break
                        case "E":
                            newPos[0] = parseInt(actualPos[0])-1;
                            newPos[1] = parseInt(actualPos[1]);
                            direction = "N";
                        break 
                        case "W":
                            newPos[0] = parseInt(actualPos[0])+1;
                            newPos[1] = parseInt(actualPos[1]);
                            direction = "S";
                        break
                    }
                    break;
                case 'R': // Move Right
                    switch (direction) {
                        case "N":
                            newPos[0] = parseInt(actualPos[0]);
                            newPos[1] = parseInt(actualPos[1])+1;
                            direction = "E";
                        break
                        case "S":
                            newPos[0] = parseInt(actualPos[0]);
                            newPos[1] = parseInt(actualPos[1])-1;
                            direction = "W";
                        break
                        case "E":
                            newPos[0] = parseInt(actualPos[0])+1;
                            newPos[1] = parseInt(actualPos[1]);
                            direction = "S";
                        break 
                        case "W":
                            newPos[0] = parseInt(actualPos[0])-1;
                            newPos[1] = parseInt(actualPos[1]);
                            direction = "N";
                        break
                    }
                    break;
            }
            
            actualPos = moveRover(newPos, actualPos);            
        });

        // Update the hidden input field to reflect the latest position        
        document.getElementById('indications').value="";
    });
});
