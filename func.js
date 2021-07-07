function search(){
    let input = document.getElementById('search_bar').value.toLowerCase();
    let x = document.getElementsByClassName('art');
    let y = document.getElementsByClassName('head');
    for(var i = 0; i < 1000; i++){
        let z = y[i].getElementsByTagName('a')[0];
        let a = x[i].getElementsByTagName('p')[0];
        // let b = x[i].getElementsByClassName('ul');
        // let c = b[i].getElementsByTagName('li');
        if((z.textContent.toLowerCase().indexOf(input) > -1) || a.textContent.toLowerCase().indexOf(input) > -1 /*|| (c[i].textContent.toLowerCase().indexOf(input) > -1)*/){
            x[i].style.display ='';
        }
        else{
            x[i].style.display = 'none';
        }
    }
//img.ondblclick =  function lcf(){
}