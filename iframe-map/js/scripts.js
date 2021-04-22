function setView() {
    var map = document.getElementById("iframeid").contentWindow.map;
    console.log(map);
    map.setView([-34.92166, -57.95444], 13);
}
