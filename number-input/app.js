function meanify() {
    numArray = document.getElementById('integers').value.split(' ');

    function results(numArray) {
        var sum = 0;
        for (var i = 0; i < numArray.length; i++) {
            sum += Number(numArray[i]);
        }
        return sum / numArray.length;
    }
    document.getElementById('answer').innerHTML = 'And the mean is: ' + results(numArray);
}
