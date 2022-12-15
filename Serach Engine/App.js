var info = document.getElementById('info');
var value_print = document.getElementById('value_print');


var Student1 = {
    name : 'zubair',
    id : 'sm-251',
    sec : 'A',
    cnic : 4240106523371
}
var Student2 = {
    name : 'hamza',
    id : 'sm-252',
    sec : 'B',
    cnic : 4240106523372
}
var Student3 = {
    name : 'sameer',
    id : 'sm-253',
    sec : 'C',
    cnic : 4240106523373
}
var Student4 = {
    name : 'ameer',
    id : 'sm-254',
    sec : 'D',
    cnic : 4240106523374
}
var Student5 = {
    name : 'samad',
    id : 'sm-255',
    sec : 'E',
    cnic : 4240106523375
}

var arr = [Student1 ,Student2,Student3,Student4,Student5];
// console.log(arr[0]);

function searchId(){
    if(info.value == arr[0].id){
        value_print.innerHTML = JSON.stringify(arr[0]);
    }else if(info.value == arr[1].id){
        value_print.innerHTML = JSON.stringify(arr[1]);
    }else if(info.value == arr[2].id){
        value_print.innerHTML = JSON.stringify(arr[2]);
    }else if(info.value == arr[3].id){
        value_print.innerHTML = JSON.stringify(arr[3]);
    }else if(info.value == arr[4].id){
        value_print.innerHTML = JSON.stringify(arr[4]);
    }else{
        value_print.innerHTML = "";
        alert("Not Match")
        
    }
}

