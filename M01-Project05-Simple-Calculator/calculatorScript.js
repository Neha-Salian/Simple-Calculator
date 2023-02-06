function clearScreen() {
    document.getElementById("result").value = "";
   }

function back(){
    var backk = document.getElementById("result").value.slice(0, -1);
    if(backk== "") {
     document.getElementById("result").value = 0;
 }
 else {
     document.getElementById("result").value = backk;
 }
}

function display(value) {
    document.getElementById("result").value += value;
}
function greater(value){
    if(value.toString().length>9){
        return "Error"
    }
    return value

}



function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
   }