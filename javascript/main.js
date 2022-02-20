// SLL & SRL logic
var sllInput = document.getElementById("sll-nb").value;
var srlInput = document.getElementById("srl-nb").value;
var leftArrow = document.getElementById("leftArrow");
var rightArrow = document.getElementById("rightArrow");
var bits1 = document.getElementById("bits1seq");

leftArrow.onclick = function() {
    alert("Shifting " + sllInput + " bits to the left.");
}
rightArrow.onclick = function() {
    alert("Shifting " + srlInput + " bits to the right.");
}