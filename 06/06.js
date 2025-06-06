window.onload = function () {
    var child = window.open('', '', 'width=300,height=200');
    child.moveTo(0, 0);
    setInterval(function () {
        child.moveBy(10, 10);
    }, 1000);
};