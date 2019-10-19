window.addEventListener("load", function() {
    let rocket = document.getElementById("rocket");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let width = shuttleBackground.clientWidth;
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let height = parseInt(shuttleHeight.innerHTML);
    let response = false;
    let upButton = document.getElementById("upButton");
    let downButton = document.getElementById("downButton");
    let leftButton = document.getElementById("leftButton");
    let rightButton = document.getElementById("rightButton");
    let directionButtons = [upButton, downButton, leftButton, rightButton];
    
    function buttonOff(bool) {
        for (let i=0; i<directionButtons.length; i++) {
            directionButtons[i].disabled = bool;
        }
    }

    buttonOff(true); 
    let xPos = 0;
    let yPos = 252;
    let takeOffButton = document.getElementById("takeoff");

    takeOffButton.addEventListener("click", function() {
        response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            buttonOff(false); 
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.background = "blue";
            height += 10000;
            shuttleHeight.innerHTML = height;
            rocket.style.top =  yPos - 10 + "px";
        }
    });

    let landingButton = document.getElementById("landing");

    landingButton.addEventListener("click", function() {
        buttonOff(true); 
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.background = "green";
        shuttleHeight.innerHTML = "0";
        rocket.style.top = "252px";
        rocket.style.left = "0px";
        xPos = 0;
        yPos = 252;
        height = 0;
    });

    let abortButton = document.getElementById("missionAbort");

    abortButton.addEventListener("click", function() {
        response = window.confirm("Confirm that you want to abort the mission.");
        if (response) {
            buttonOff(true);
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.background = "green";
            shuttleHeight.innerHTML = "0";
            rocket.style.top = "252px";
            rocket.style.left = "0px";
            xPos = 0;
            yPos = 252;
            height = 0;
            }
    });

    upButton.addEventListener("click", function() {
        if (yPos >= 0) { 
            yPos -= 10;
            rocket.style.top =  yPos + "px";
            height += 10000;
            shuttleHeight.innerHTML = height;
        }
    });

    downButton.addEventListener("click", function() {
        if (yPos <= 248) { 
            yPos += 10;
            rocket.style.top =  yPos + "px";
            height -= 10000;
            shuttleHeight.innerHTML = height;
        }
    });

    leftButton.addEventListener("click", function() {
        if (xPos > 20 - width / 2 ) { 
            xPos -= 10;
            rocket.style.left =  xPos + "px";
        }
    });

    rightButton.addEventListener("click", function() {
        if (xPos < width / 2 - 20) {
            xPos += 10;
            rocket.style.left =  xPos + "px";
        }
    });
})