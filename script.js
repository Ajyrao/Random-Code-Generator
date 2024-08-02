const passwordbox = document.getElementById('password')
const len=12;
let uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase="abcdefghijklmnopqrstuvwxyz";
let specialcase="!@#$%^&*(){}[]|";
let number = "0123456789 "; 
const allchar = uppercase+lowercase+specialcase+number;
function createrandom(){
let password="";
password += uppercase[Math.floor(Math.random()*uppercase.length)];
password += lowercase[Math.floor(Math.random()*lowercase.length)];
password += specialcase[Math.floor(Math.random()*specialcase.length)];
password += number[Math.floor(Math.random()*number.length)];

while(len> password.length){
 password += allchar[Math.floor(Math.random()*allchar.length)];
}
passwordbox.value = password
}
function copy(){
    passwordbox.select();
    document.execCommand("copy");
}
document.querySelector('#generator').addEventListener('click',createrandom)
document.querySelector('#copy').addEventListener('click',copy)