function solve(speed, area) {
    let motorwayZone = 130;
    let interstateZone = 90;
    let cityZone = 50;
    let residentialZone = 20;
    let status;

    if (area === "motorway") {
        if (speed > motorwayZone + 40) {
            status = "reckless driving";
        } else if (speed > motorwayZone + 20) {
            status = "excessive speeding";
        } else if (speed > motorwayZone) {
            status = "speeding";
        }
    } else if (area === "interstate") {
        if (speed > interstateZone + 40) {
            status = "reckless driving";
        } else if (speed > interstateZone + 20) {
            status = "excessive speeding";
        } else if (speed > interstateZone) {
            status = "speeding";
        }
    } else if (area === "city") {
        if (speed > cityZone + 40) {
            status = "reckless driving";
        } else if (speed > cityZone + 20) {
            status = "excessive speeding";
        } else if (speed > cityZone) {
            status = "speeding";
        }
    } else if (area === "residential") {
        if (speed > residentialZone + 40) {
            status = "reckless driving";
        } else if (speed > residentialZone + 20) {
            status = "excessive speeding";
        } else if (speed > residentialZone) {
            status = "speeding";
        }
    }

    if (area === "motorway" && speed <= motorwayZone) {
        console.log(`Driving ${speed} km/h in a ${motorwayZone} zone`);
    } else if (area === "motorway" && speed > motorwayZone) {
        console.log(`The speed is ${speed - motorwayZone} km/h faster than the allowed speed of ${motorwayZone} - ${status}`);
    }

    if (area === "interstate" && speed <= interstateZone) {
        console.log(`Driving ${speed} km/h in a ${interstateZone} zone`);
    } else if (area === "interstate" && speed > interstateZone) {
        console.log(`The speed is ${speed - interstateZone} km/h faster than the allowed speed of ${interstateZone} - ${status}`);
    }

    if (area === "city" && speed <= cityZone) {
        console.log(`Driving ${speed} km/h in a ${cityZone} zone`);
    } else if (area === "city" && speed > cityZone){
        console.log(`The speed is ${speed - cityZone} km/h faster than the allowed speed of ${cityZone} - ${status}`);
    }

    if (area === "residential" && speed <= residentialZone) {
        console.log(`Driving ${speed} km/h in a ${residentialZone} zone`);
    } else if (area === "residential" && speed > residentialZone){
        console.log(`The speed is ${speed - residentialZone} km/h faster than the allowed speed of ${residentialZone} - ${status}`);
    }

}
solve(120, 'interstate');