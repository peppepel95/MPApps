
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    onDeviceReady: function() {
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
        var textnode = document.createTextNode(str_fname + " " + str_lname);
        var a_node = document.createElement("a");
        a_node.href = "#";
        a_node.appendChild(textnode);
        node.appendChild(a_node);
        node.addEventListener('click', function() {app.onOpenContact( str_fname, str_lname, int_number);});
        ContactList.appendChild(node);
    },
    
    onOpenContact: function(str_fname, str_lname, number) {
        //var dirPath = app.dirname(location.href);
        window.location = "html/contact.html?" + "fname=" + str_fname + ";lname=" + str_lname + ";number=" + number;
    },
    
    dirname: function(path) {
        return path.replace(/\\/g,'/').replace(/\/[^\/]*$/, '');
    }
};

app.initialize();