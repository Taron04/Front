
function valid() {
    var y = document.getElementById("in").value;
    if (y == "" || y == null) {
        alert("Invalid argument!");
      return false;
    }
    document.getElementById("Text").innerHTML = "Valid";
}