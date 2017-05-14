$(function () {

    document.getElementById('open').style.cursor = "pointer";
    console.log("test");
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;

    $.post("http://cb.lk/api/v1/shorten", {
            url: url,
            code: "",
            secret: ""

        }, function (data) {
            console.log(data);
            $('#box').html("http://cb.lk/" + data.shortcode);

            var temp = $('<input>');
            temp.val($('#box').text());
            console.log(temp.val());
            $('body').append(temp);
            temp.select();
            console.log(document.execCommand('copy'));
            temp.remove();
            $('#box').html("The Shortened Link has been copied to clipboard");            
            
        });
     });
    
    });