let count = 1;
document.getElementById("radio1").checked = true;
setInterval(function(){
 nedtImage();
},5000)

function nedtImage(){
    count++;
    if(count>4){
        count=1;
    }
    document.getElementById("radio"+count).checked = true;
}