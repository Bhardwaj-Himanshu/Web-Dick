/*var element= document.createElement('button');
element.textContent='Click me!';
document.body.appendChild(element);

element.addEventListener('click',function(){
    alert('button clicked');
});*/

//write an empty array--push to it--write a function that takes argument as values from array
/*var element= document.createElement('button');
element.textContent='Delete me!';
document.body.appendChild(element);

element.addEventListener('clicked',function(){
    alert('button clicked');
});*/

empty_array = [];
//Now I need to Extract text from searchbox, and add it to array.
//First take text from textbox

var something_added = document.getElementById("something_added");
var something_deleted = document.getElementById("something_deleted");

something_added.addEventListener("click", function () {
  var textbox_value = document.getElementById("textbox-value").value;
  empty_array.push(textbox_value);
  console.log(empty_array);
});

something_deleted.addEventListener("click", function () {
  var textbox_value = document.getElementById("textbox-value").value;
  if (empty_array.includes(textbox_value)) {
    empty_array.pop(textbox_value);
    console.log(empty_array);
  } else {
    console.log("Enter a valid element.");
  }
});

function something_else() {
  if (empty_array.length > 0) {
    render();
  } else {
    console.log("The empty_array is empty.");
  }

  function render() {
    empty_array.forEach((element) => {
      let thing = document.createElement("div");
      document.body.appendChild(thing);
    });
  }
}
