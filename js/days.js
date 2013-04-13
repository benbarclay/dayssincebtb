function CounterCtrl($scope) {
    var left = new Date(2013, 02, 15, 17);

    timer = window.setInterval(function() {
        var now = new Date();
        var difference = now.getTime() - left.getTime();

        var days = difference / (1000 * 60 * 60 * 24);
        var hours = (difference / (1000 * 60 * 60)) % 24;
        var minutes = (difference / (1000 * 60)) % 60;
        var seconds = (difference / 1000) % 60;

        $scope.days = Math.round(days);
        $scope.hours = Math.round(hours);
        $scope.minutes = Math.round(minutes);
        $scope.seconds = Math.round(seconds);

        $scope.$apply();
    }, 1000);
}

function EpitaphCtrl($scope) {
    var options = ["PHP deity",
        "conversationalist",
        "skateboarder",
        "surfer",
        '"experimenter"'];

    $scope.noun = options[Math.floor(Math.random() * options.length)];
}

function StoryCtrl($scope) {
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

    $scope.days = Math.floor((new Date().getTime() - new Date(2013, 02, 15, 17).getTime()) / (1000 * 60 * 60 * 24));
    $scope.subject = options1[Math.floor(Math.random() * options1.length)];
    $scope.action = options2[Math.floor(Math.random() * options2.length)];
}
