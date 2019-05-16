const input = document.getElementById('input');
const textarea = document.getElementById('textarea');

input.addEventListener('keyup', (event)=>{ // J'écoute un événement et je crée une fonction fléchée.
    const result = input.value;
        if(result.length = 0) {
            textarea.innerHTML = "Oups";
        } else {
            textarea.innerHTML = result;
    }
});














// input.addEventListener('keyup', (event)=>{
//     // console.log('keypress');
//     // console.log('keyup');
//     const tape = input.value;
//     console.log('tape');
// });



// console.log('ready');

// const input = document.getElementById('input'); // On récuperer l'élémet avec la valeur input.

// const resultat = document.getElementById('result'); // On récupere la valeur de la constante input.

// const loader = document.getElementById('loader');

// input.addEventListener('keyup', (event)=>{ // J'écoute un événement et je crée une fonction fléchée.
//     // console.log('keypress');
//     const result = input.value;
//     // console.log(result);

//     if(result.length = 0) {
//         resultat.innerHTML = "Oups";
//     } else {
//         resultat.innerText = result;
//     }
// });


// input.addEventListener('focus', ()=>{
//     loader.style.display = 'block';
// }); 
// input.addEventListener('blur', ()=>{
//     loader.style.display = "none";
// })