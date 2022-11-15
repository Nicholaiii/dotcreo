const accordion = document.getElementsByClassName('contentBx');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })
}

const sect4Cards = document.getElementsByClassName('sect4-card');

for (let i = 0; i < sect4Cards.length; i++) {
    sect4Cards[i].addEventListener('mouseover', function() {
        for (let i = 0; i < sect4Cards.length; i++) {
            sect4Cards[i].classList.remove('active');
        }
        this.classList.toggle('active');
    })
}