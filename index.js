const accordionsRef = document.getElementsByClassName('accordion')

for(let i=0;i<accordionsRef.length;i++){
    accordionsRef[i].addEventListener('click', function(e){
        e.target.classList.toggle("active");
        console.log(e.target)
        let panel = e.target.nextElementSibling
        if(panel.style.display === 'block'){
            panel.style.display = "none"
        }else {
            panel.style.display = 'block'
        }
    })
}