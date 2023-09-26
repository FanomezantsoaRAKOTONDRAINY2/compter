//initialisation
var compter = 0;
//selection les élément html
var spn = document.getElementById('spn');
var parent_btn = document.querySelectorAll('.btn');

parent_btn.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains('btn1')) {           
            compter--;
        }
        else if (styles.contains('btn3')) {
            compter ++;
        } else {
            compter = 0;
        }
        spn.textContent = compter;
        if (compter >0) {
            spn.style.color = 'green'
        }
        else if (compter<0) {
            spn.style.color = 'red';
        }else{
            spn.style.color = 'rgb(136, 175, 162)'
        }

    })
})
