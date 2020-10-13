const answers = ["how old are you?"]

window.onload = function () {
    var unSanitised = getParameterByName('parsed');
    unSanitised = unSanitised.replace("+", " ")

    var difference = spitOutDifference(unSanitised, answers[0]);
    document.getElementById("answer").innerHTML = ("Here is what you missed <mark>" + difference + "</mark>.From your response <mark>" + unSanitised + "</mark>");


}

function spitOutDifference(stringA, stringB) {
    var stringA =stringA,
        stringB = stringB,
        firstOccurrence = stringB.indexOf(stringA);

    if (firstOccurrence === -1) {
        alert('Search string Not found');
    }
    else {
        var stringALength = stringA.length;
        var newString;

        if (firstOccurrence === 0) {
            newString = stringB.substring(stringALength);
        }
        else {
            newString = stringB.substring(0, firstOccurrence);
            newString += stringB.substring(firstOccurrence + stringALength);
        }

        return(newString);
    }
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}