let rootNode = document.getElementById('root');

let box = document.getElementById('plus_box');
let ActionAdder = document.getElementById('forma');
let Icon = document.getElementById('plus_box');

let Container = document.getElementById('list');
let message = document.getElementsByClassName('notification')[0];

let counter = 1;
const max = 5;

document.getElementById('forma').addEventListener('input', function () {
    if(this.value === ''){
        box.classList.add('disabled');
    } else {
        box.classList.remove('disabled');
    }
});


let dragObj1 = null;


Container.addEventListener('dragstart', function (e) {
    dragObj1 = e.target;
}, false);

Container.addEventListener('dragover', function (e) {
    e.preventDefault();
});

Container.addEventListener('drop', function (e) {
    // alert('droped');
    
    let dragObj = e.target;
    if (dragObj.hasAttribute('draggable')) {
        let tmp = dragObj1.innerHTML;
        dragObj1.innerHTML = dragObj.innerHTML;
        dragObj.innerHTML = tmp;
    }
    
});


Icon.addEventListener('click', function () {
    if(ActionAdder.value === ''){
        box.setAttribute('disabled', true);
    }else {
        if (counter <= max) {
            let row = document.createElement('div');
            row.className = 'RowAdd';

            let textdiv = document.createElement('div');
            textdiv.className = 'textdiv';
            textdiv.setAttribute('draggable', true);

            let text = document.createElement('p');
            text.className = 'DOText'
            text.innerText = ActionAdder.value;
            

            let i1 = document.createElement('i');
            i1.className = 'material-icons check_box_outline_blank';
            i1.innerHTML = 'check_box_outline_blank';

            let i2 = document.createElement('i');
            i2.className = 'material-icons edit';
            i2.innerHTML = 'edit';

            let i3 = document.createElement('i');
            i3.className = 'material-icons delete-row';
            i3.innerText = 'delete';

            
            textdiv.appendChild(i1);
            textdiv.appendChild(text);
            textdiv.appendChild(i2);
            textdiv.appendChild(i3);
            counter++;

            row.appendChild(textdiv);
            Container.appendChild(row);
            i3.addEventListener('click', function (e) {
                e.target.parentNode.remove();
                counter--;
                if (counter <= max) {
                    ActionAdder.classList.remove('disabled');
                    box.classList.remove('disabled');
                    message.style.display = 'none';

                }
            });

            i1.addEventListener('click', function () {
                i1.innerText = 'check_box';
            });

            i2.addEventListener('click', function () {
                if (i2.innerText === 'save') {
                    i2.innerText = 'edit';
                    text.contentEditable = 'false';
                    i1.style.display = 'block';
                    i3.style.display = 'block';

                } else {
                    i2.innerText = 'save';
                    text.contentEditable = 'true';
                    i1.style.display = 'none';
                    i3.style.display = 'none';
                }

            });

            } else {
            message.style.display = 'block';
            ActionAdder.classList.add('disabled');
            box.classList.add('disabled'); 
        }    
    }
});



