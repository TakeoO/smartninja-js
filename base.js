(() => {
    var interval = null;
    var i = hours = minutes = seconds = 0;
    var storage = new TimerStorage();
    var loops = storage.get('loops') || [];
    /**
     *  Start button for timer
     */
    document.getElementById("start-button").addEventListener("click", function (event) {
        interval = setInterval(function () {
            i += 10;
            calculateTimeFromMiliseconds();
            writeTimerNumbers();
            preventStartClick();
        }, 10);
    });

    /**
     * Reset button for timer
     */
    document.getElementById("reset-button").addEventListener("click", function (event) {
        i = seconds = minutes = hours = 0;
        writeTimerNumbers();
        enableStartClick();
        clearLoops();
        clearInterval(interval);
    });

    /**
     * Pause button for the timer
     */
    document.getElementById("pause-button").addEventListener("click", function (event) {
        writeTimerNumbers();
        enableStartClick();
        clearInterval(interval);
    });

    /**
     * Pushes loop data into loop array and shows new line of loop
     */
    document.getElementById("loop-button").addEventListener("click", function (event) {


        loops.push({
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
            'miliseconds': i,
        });

        storage.set('loops', loops);
        loopsAppendText(
            loops.slice(-1)
        )
    });

    /**
     * Adds "pointer-events-none" class to start button
     */
    function preventStartClick() {
        document.getElementById("start-button").classList.add('pointer-events-none');
    }

    /**
    * Removes "pointer-events-none" class to start button
    */
    function enableStartClick() {
        document.getElementById("start-button").classList.remove('pointer-events-none');
    }
    /**
     * Calcluates time from miliseconds 
     * 
     * @param {int} i 
     */
    function calculateTimeFromMiliseconds() {

        if (i >= 1000) {
            i = 0;
            seconds += 1;
        }

        if (seconds == 60) {
            seconds = i = 0;
            minutes += 1;
        }

        if (minutes == 60) {
            minutes = seconds = i = 0;
            hours += 1;
        }
    }

    /**
     * Append timer data to loop list
     * @param {object} loop 
     */
    function loopsAppendText(loop) {
        loop = loop[0];
        let loopList = document.getElementById('loops');
        let currentContent = loopList.innerHTML;

        if (loops.length > 0) {
            document.getElementById
        }

        loopList.innerHTML = currentContent
            + "<li class='flex list-decimal ml-5'>"
            + formatTime(
                loop['hours'],
                loop['minutes'],
                loop['seconds'],
                loop['miliseconds'],
            )
            + "</li>"
    }

    function clearLoops() {
        loops = [];
        document.getElementById('loops').innerHTML = '';
    }
    /**
     * Writes timer in human-readable from time to document
     * 
     * @param {int} hours 
     * @param {int} minutes 
     * @param {int} seconds 
     * @param {int} miliseconds 
     */
    function writeTimerNumbers() {
        document.getElementsByClassName("text")[0].innerHTML = formatTime(hours, minutes, seconds, i);
    }

    /**
     *  f
     * @param {int} localHours 
     * @param {int} localMinutes 
     * @param {int} localSeconds 
     * @param {int} localMiliseconds 
     */
    function formatTime(localHours, localMinutes, localSeconds, localMiliseconds) {
        let textHours = (localHours < 10) ? "0" + localHours : localHours;
        let textMinutes = (localMinutes < 10) ? "0" + localMinutes : localMinutes;
        let textSeconds = (localSeconds < 10) ? "0" + localSeconds : localSeconds;
        let textMiliseconds = (localMiliseconds < 10) ? "0" + localMiliseconds : localMiliseconds;

        return textHours +
            ":" + textMinutes +
            ":" + textSeconds +
            ":" + textMiliseconds;
    }
})()