
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    onDeviceReady: function() {
        alert("PhoneGap is working, event onDeviceReady");
        var buttonElement = document.getElementById("addContact");
        buttonElement.addEventListener('click', app.onAddContact);
    },
    
    onAddContact: function() {
        console.log("button clicked");
        var fname = document.getElementById("fname");
        var lname = document.getElementById("lname");
        var number = document.getElementById("number");
        var str_fname = fname.value;
        var str_lname = lname.value;
        var int_number = number.value;
        fname.value = "";
        lname.value = "";
        number.value = "";
        var ContactList = document.getElementById("ContactList");
        var node = document.createElement("LI");
        var div1 = document.createElement('div');
        var div2 = document.createElement('div');
        var textnode1 = document.createTextNode("Contact: " + str_fname + " " + str_lname);
        div1.appendChild(textnode1);
        var textnode2 = document.createTextNode("Number: " + int_number);
        div2.appendChild(textnode2);
        node.appendChild(div1);
        node.appendChild(div2);
        ContactList.appendChild(node);
    }
};

app.initialize();