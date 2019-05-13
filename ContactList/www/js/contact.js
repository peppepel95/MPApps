var contact = {
    // Application Constructor
    initialize: function() {
        var body = document.getElementById("contact_here");
        var dirPath = window.location.href;
        var key_value_arr = dirPath.split("?")[1].split(";");
        key_value_arr.forEach(function(element) {
            var div = document.createElement('div');
            var textnode = document.createTextNode(element);
            div.appendChild(textnode);
            body.appendChild(div);
        });
    }
};

contact.initialize();