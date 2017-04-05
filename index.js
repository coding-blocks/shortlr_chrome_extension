$(function () {

    //booleans to control clicks
    var b=false,a = true;
    
    document.getElementById('open').style.cursor = "pointer";

    $('#box').click(function(){
        if(!b){

        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var url = tabs[0].url;
        console.log(url);

        $.post("http://cb.lk/api/v1/shorten", {
            url: url,
            code: "",
            secret: ""

        }, function (data) {
            console.log(data);

            $('#box').html("http://cb.lk/" + data.shortcode);
            b = true;
        });


    });
    }



    })

    

    $('#open').click(function () {
        if(b&&a){var temp = $('<input>');
        temp.val($('#box').text());
        console.log(temp.val());
        $('body').append(temp);
        temp.select();
        console.log(document.execCommand('copy'));
        temp.remove();
        $('#box').html("The Link has been copied to clipboard");
    a = false;
    }
    });


});

