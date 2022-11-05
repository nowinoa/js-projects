// using selectors inside the element
const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {

    const btn = question.querySelector('.question-btn');

    btn.addEventListener('click', function(){

        // when pressing + icon from another question, the one its open will close itself
        questions.forEach(function(item) {
            // it the item doesn't match with the question. If we interact with other thing, then remove the class.
            if(item !== question) {
                item.classList.remove('show-text');
            }
        })


        question.classList.toggle('show-text');
    })
});



// travesing the DOM

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function (btn){
//     btn.addEventListener('click', function(e) {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     });
// })
