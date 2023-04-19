const main = document.querySelector('.main-body');
const thankYou = document.querySelector('.thank-you');
const submit = document.querySelector('.submit');
const rating = document.querySelectorAll('.number')
const value = document.getElementById('rating')

submit.addEventListener('click', () => {
    thankYou.classList.remove('hidden');
    main.style.display = 'none'
});

rating.forEach((score) => {
    score.addEventListener('click', () => {
        value.innerHTML = score.innerHTML
    });
})

