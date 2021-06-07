$( document ).ready(function() {
    let mtoken =  "bEdoZZXsDIlm";

    $("h1").click(function() {
        $.ajax({
            type: "GET",
            url: "http://18.197.21.42:8080/channels/",
            headers:{
                "X-Group-Token": mtoken
            },
            contentType: "applicatoin/json",
            success: function(content, status) {alert(JSON.stringify(content));},
            error: function() {
                alert("error yay")
            }
        });
    });
});