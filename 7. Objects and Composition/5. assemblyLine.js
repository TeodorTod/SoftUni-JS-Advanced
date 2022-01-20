function createAssemblyLine() {
    return {
        hasClima(myCar) {
            myCar.temp = 21;
            myCar.tempSettings = 21;
            myCar.adjustTemp = () => {
                if (this.temp < this.tempSettings) {
                    this.temp += 1;
                } else if (this.temp > this.tempSettings) {
                    this.temp -= 1;
                }
            }
        },
        hasAudio(myCar) {
            myCar.currentTrack = {
                'name': null,
                'artist': null,
            }
            myCar.nowPlaying = function () {
                console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
            }
        },
        hasParktronic(myCar) {
            myCar.checkDistance = (distance) => {
                if (distance < 0.1) {
                    console.log("Beep! Beep! Beep!");
                } else if (0.1 <= distance && distance < 0.25) {
                    console.log("Beep! Beep!");
                } else if (0.25 <= distance && distance < 0.5) {
                    console.log("Beep!");
                } else {
                    console.log('');
                }
            }
        }
    }
}
