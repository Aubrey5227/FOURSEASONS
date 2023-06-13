


// drinksdetil.html imgSlider

type = "text/javascript"

function imgSlider(anything) {
    document.querySelector('.fourseasonstea').src = anything;
}

function changeCircleColor(color) {
    const background = document.querySelector('.drinkbackground');
    background.style.background = color;
}

// drinksdetil.html toggleMenu

function toggleMenu() {
    // alert('123');
    let menuToggle = document.querySelector('.toggle'); 
    let navigation = document.querySelector('.navigation'); 
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}
