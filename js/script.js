
//business logic
function Contact(first, last){
    this.firstName = first;
    this.lastName = last
}

Contact.prototype.fullName = function(){
    return this.firstName + " " + this.lastName;
}

//create a jQuery callback to collect user input and assign it to variables
// use the user input to create new Contact objects
// append the new objects to the list

//user interface logic
$(document).ready(function(){
    $('form#new-contact').submit(function(event){
        event.preventDefault();

        let inputtedFirstName = $('input#new-first-name').val()
        let inputtedLastName = $('input#new-last-name').val()

        let newContact = new Contact(inputtedFirstName,inputtedLastName)

        $('ul#contacts').append("<li><span class= 'contact'>" + newContact.fullName() + "</span></li>")
    });
   
    //show the contact information when the contact is clicked

    $('.contact').last().click(function(){
        $('#show-contact').show()
        $('#show contact h2').text(newContact.firstName);
        $('.first-name').text(newContact.firstName)
        $('.last-name').text(newContact.lastName)
    })
})