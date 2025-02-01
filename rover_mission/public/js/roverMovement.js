var direction = "S";
var newPos = [1,1];

function changePos(newPos, actualPos){
    actualPos = document.getElementById(actualPos.join(','));
    newPos = document.getElementById(newPos.join(','));
    
    rover = actualPos.innerHTML;
    
    actualPos.innerHTML = "";
    newPos.innerHTML = rover;
    
    return newPos.id.split(',');
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('send').addEventListener('click', function(e) {
        e.preventDefault();
        var indications = document.getElementById('indications').value.trim();
        indications = indications.split(""); // Convert string into array of directions

        var actualPos = document.getElementById('actualPos').value.split(",");
        
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
            actualPos = changePos(newPos, actualPos);
        });

        // Update the hidden input field to reflect the latest position
        document.getElementById('actualPos').value = newPos.join(',');
        
        document.getElementById('indications').value="";
        console.log(newPos, actualPos, direction);
    });
});
