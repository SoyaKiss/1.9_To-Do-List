function newItem(){
    let list = $('#list');
    // This creates a variable and selects the <ol> which has an ID name 'list'
    let li = $('<li></li>');
    // Here we are creating another variable to store the <li> elements
    list.append(li);
    // Here we are appending the <li>


    // We can get the value of the input field (from HTML) by storing it in a variable
    let inputValue = $('#input').val();
    // Then we can append this value into the <li> item
    li.append(inputValue);


    // This is how we can cross out list items without them going away
    // So we first create a CSS class called strike
    // li.addClass("strike");

    // To hide a list item
    // li.addClass("delete");

    // Crossing out the list item with event handling --> but this does not remove the strike when clicking again
    // li.on('click', function() {
    //     li.addClass('strike');
    // });

    // Here we can toggle the item list to be crossed off, and on another click - to remove the strike class!
    li.on('click', function() {
        li.addClass('strike').toggleClass('no-strike');
    });


    let deleteButton = $('<button>');
    deleteButton.addClass('crossOutButton');
    li.append(deleteButton);
    deleteButton.append(document.createTextNode('X'));

    // Here we have to put a click function when the X is clicked, it will get the class --> .delete
    deleteButton.on('click', function() {
        li.addClass('delete');
    });

    // This can allow for list items to be moved one above or below the other
    $('#list').sortable()
   
}
    
     