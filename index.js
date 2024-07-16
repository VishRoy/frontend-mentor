const ratingRef = document.querySelector('.stars-rating');
const ratingBoxes = document.querySelectorAll('.dot')
const submitBtnRef = document.querySelector('.submit-btn');
const ratingSection = document.querySelector('.rating');
const thankyouSection = document.querySelector('.thank-you');
const ratingVal = document.querySelector('.rating-val');
let currentRatingIndex = 0;

ratingRef.addEventListener('click', function(ev){
    
    if(ev.target.classList.contains('dot')){
        ratingBoxes.forEach((box) => {
            box.classList.remove('selected');
        })
        ev.target.classList.add('selected')
    }
    
    currentRatingIndex = ev.target.getAttribute('data-id');
})


submitBtnRef.addEventListener('click', function(ev){
    ratingSection.style.display = 'none';
    thankyouSection.style.display = 'block';
    ratingVal.innerText = currentRatingIndex;
})