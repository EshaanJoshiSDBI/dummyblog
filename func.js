function search(){
    let input = document.getElementById('search_bar').value.toLowerCase();
    let x = document.getElementsByClassName('art');
    let y = document.getElementsByClassName('head');
    for(var i = 0; i < x.length; i++){
        let z = y[i].getElementsByTagName('a')[0]
        if(z.textContent.toLowerCase().indexOf(input) > -1){
            x[i].style.display ='';
        }
        else{
            x[i].style.display = 'none';
        }
    }
}