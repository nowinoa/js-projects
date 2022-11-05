// classList -showa/gets all classes
// contains - checks classList for specific class
// add - add class
// remove -remove class
// togle - toggle class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector('.links');

navToggle.addEventListener('click', function() {
    // console.log(links.classList);
    // console.log(links.classList.contains("links")); //if is there we'll get a true.
    // if(links.classList.contains('show-links')) {
    //     links.classList.remove('show-links');
    // } else {
    //     links.classList.add('show-links');
    // }
    links.classList.toggle('show-links'); // all the last code in one line thanks to the toggle method.
})