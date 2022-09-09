let textArea =document.getElementById('textInput');
let totalSpan = document.getElementById('totalSpan');
let remainSpan = document.getElementById('remainSpan');
updateContent()
window.addEventListener('input', function(){
    updateContent()
})
 
function updateContent(){
    let inputNum = textArea.value.length;
    
    totalSpan.textContent= inputNum;
    remainSpan.textContent= 50-inputNum;
}