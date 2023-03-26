// Select the change color button and add a click event listener
const changeColorButton = document.getElementById('change-color-button');
changeColorButton.addEventListener('click', () => {
  // Generate a random color using Math.floor(Math.random()*?) hint : use a colors array
  function generateRandomColor(){
    var letters='0123456789ABCDEF'
    var color= '#'
    for (var i=0 ; i<6;i++){
      color+=letters[Math.floor(Math.random()*16)]
    }
  }
});

// Select the add item button and add a click event listener 
const addItemButton = document.getElementById('add-item-button');

addItemButton.addEventListener('click', () => {
//hint: use a counter to add items with the correct number eg: item4

});


