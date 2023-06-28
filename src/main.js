const ratingState = document.querySelector('.rating');
const thankYouState = document.querySelector('.thank-you');
const ratingListBtn = document.querySelectorAll('.rating__list-btn');
const rateValue = document.getElementById('rate-value');
const submitBtn = document.querySelector('.rating__btn');
const backBtn = document.querySelector('.thank-you__btn');

let selectedRateValue = null;

ratingListBtn.forEach(rate => {
    rate.addEventListener('click', () => {
        selectedRateValue = Number(rate.textContent); 
    });
});


submitBtn.addEventListener('click', () => {
    if(selectedRateValue == null){
        alert("Please Select a Rating");
    }else{
        thankYouState.style.display = 'flex';
        ratingState.style.display = 'none';
    
        rateValue.innerHTML = selectedRateValue;
    }; 
});


backBtn.addEventListener('click', () => {
    selectedRateValue = null;
    thankYouState.style.display = 'none';
    ratingState.style.display = 'flex';
});