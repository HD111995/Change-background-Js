let getColor, colorValue
getColor = document.getElementById('in-co');
console.log(getColor)

console.log(colorValue);
function change() {
    console.log(getColor.value);
    document.getElementById('back').style.backgroundColor = getColor.value;

}