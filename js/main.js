// get elements
const itemForm = document.getElementById('itemForm');
const itemInput = document.getElementById('itemInput');
const itemList = document.querySelector('.item-list');
const clearBtn = document.getElementById('clear-list');
const feedback = document.querySelector('.feedback');

let itemData = [];

// form submission

itemForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const textValue = itemInput.value;

    if (textValue === '') {
        showFeedback('Please enter valid value', 'danger');
    }
});