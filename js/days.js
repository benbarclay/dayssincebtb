function displayTime() {
    var left = new Date(2013, 02, 15, 17);
    var now = new Date();
    var difference = now.getTime() - left.getTime();

    var days = difference / (1000 * 60 * 60 * 24);
    var hours = (difference / (1000 * 60 * 60)) % 24;
    var minutes = (difference / (1000 * 60)) % 60;
    var seconds = (difference / 1000) % 60;

    document.getElementById('days').innerText = Math.round(days);
    document.getElementById('hours').innerText = Math.round(hours);
    document.getElementById('minutes').innerText = Math.round(minutes);
    document.getElementById('seconds').innerText = Math.round(seconds);
}

function epitaph() {
    var options = ["PHP deity",
        "conversationalist",
        "skateboarder",
        "surfer",
        '"experimenter"'];
    document.getElementById('epitaph').innerText =
        "Since our beloved " +
        options[Math.floor(Math.random() * options.length)] +
        " left us";
}

function story() {
    var days = Math.floor((new Date().getTime() - new Date(2013, 02, 15, 17).getTime()) / (1000 * 60 * 60 * 24));
    var options1 = [
        "alcohol rehabilitation program students",
        "kibble park dealers",
        "intruders in the car park",
        "door to door salesmen",
        '"Centrelink appreciators"'];
    var options2 = [
        "were forced to admit they were wrong",
        "walked into the office",
        "started a band next door",
        "cut the phone cables for Gosford",
        "flooded the car park",
        "set the curtains on fire",
        "lost a laptop with all the server passwords on it"
        ];
    document.getElementById('story').innerText = "Day " +
        days +
        " in a post BTB society: Today the " +
        options1[Math.floor(Math.random() * options1.length)] + ' ' +
        options2[Math.floor(Math.random() * options2.length)];
}

document.addEventListener('DOMContentLoaded', function() {
    timer = window.setInterval(displayTime, 1000);
    epitaph();
    story();
});