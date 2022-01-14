function solve(steps, footprintL, kmPerH) {
    // let distance = steps * footprintL;
    // let metersInSec = kmPerH * 1000 / 3600;
    // let addTime = Math.floor(distance / 500) * 60;
    // let minutes = distance / metersInSec + addTime;
    // console.log(minutes / 60);

    const restDuration = 60;
    let metersTotal = steps * footprintLength;
    let restsCount = Math.floor(metersTotal / 500);
    let kilometersTotal = metersTotal / 1000;
    let timeInSeconds = (kilometersTotal / speed * 3600) + (restsCount * restDuration);
    let timeInHours = Math.floor(timeInSeconds / 3600);
    timeInSeconds %= 3600;
    let timeInMinutes = Math.floor(timeInSeconds / 60);
    timeInSeconds = Math.round(timeInSeconds % 60);
    let result = '';
    result += timeInHours < 10 ? '0' + timeInHours : timeInHours;
    result += ':';
    result += timeInMinutes < 10 ? '0' + timeInMinutes : timeInMinutes;
    result += ':';
    result += timeInSeconds < 10 ? '0' + timeInSeconds : timeInSeconds;
    return result;
}
solve(4000, 0.60, 5);