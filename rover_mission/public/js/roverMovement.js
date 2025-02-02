document.addEventListener('DOMContentLoaded', function () {
    var direction = document.getElementById("direction").value;
    var currentPos = document.getElementById("currentPos");
    var rovertPos = document.getElementById("rover").parentElement.id;
    currentPos.innerHTML = rovertPos;
    rotateRover();
    var newPos = document.getElementById('startPos').value.split(',');

    function moveRover(newPos, actualPos) {
        try {
            actualPos = document.getElementById(actualPos.join(','));
            destination = newPos;
            newPos = document.getElementById(newPos.join(','));
            let rover = actualPos.innerHTML;
                    
            if (!newPos.classList.contains("obstacle")) {
                actualPos.innerHTML = "";
                newPos.innerHTML = rover;
                rotateRover();
                return newPos.id.split(',');
            } else {
                alert("Secuencia abortada: ¡obstáculo en frente!");
            }
        } catch (error) {
            console.error(error.message);
            alert("Secuencia abortada. ¡Borde del planeta!");
        }
    }
    

    function rotateRover(){
        document.getElementById('rover').setAttribute('class', '');
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

    document.getElementById('send').addEventListener('click', function(e) {
        var validIndications = true;
        e.preventDefault();
        var indications = document.getElementById('indications').value.trim();
        indications = indications.toUpperCase();
        indications = indications.split("");

        var actualPos = document.getElementById('rover').parentElement.id.split(',');
        
        
        // Process each indication (F = Front, L = Left, R = Right)
        indications.forEach((indication) => {
            switch (indication) {
                case 'F': // Move Front
                    switch (direction) {
                        case "N":
                            newPos[0] = parseInt(actualPos[0])-1;
                            newPos[1] = parseInt(actualPos[1]);
                            actualPos = moveRover(newPos, actualPos);      
                        break
                        case "S":
                            newPos[0] = parseInt(actualPos[0])+1;
                            newPos[1] = parseInt(actualPos[1]);
                            actualPos = moveRover(newPos, actualPos);  
                        break
                        case "E":
                            newPos[0] = parseInt(actualPos[0]);
                            newPos[1] = parseInt(actualPos[1])+1;
                            actualPos = moveRover(newPos, actualPos);  
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
                default:
                    validIndications = false;
                    alert("Indicacion "+indication+" no valida.");
                    return;
            }
            //Each indication is relative to the direction the rover is looking at the moment
            currentPos.innerHTML = actualPos;      
        });
        document.getElementById('indications').value="";
    });
});
