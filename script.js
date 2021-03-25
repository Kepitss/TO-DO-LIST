
const form = document.querySelector('form');

form.addEventListener('submit', ()=>{

    const input = document.querySelector('input');
    let inputVal = input.value;
    const inputValue = document.getElementById('inputValue');

    newElement();
    inputClear();
    
    /* Create new li element function who adds all needed elements */
    function newElement() {
        let newEl = document.createElement('li');
        let newNode = document.createTextNode(inputVal);

        

        let remBtn = document.createElement('button');
        let X = document.createTextNode('-');


    
        newEl.appendChild(newNode);
        remBtn.appendChild(X);
        newEl.appendChild(remBtn);
        inputValue.appendChild(newEl);

        /* Remove single btn function */
        remBtn.addEventListener('click', ()=>{
            inputValue.removeChild(newEl);
        });
    }

    function inputClear() {
        input.value = "";
    }
});

