$(function () {

    //variable holding the setTimeout
    var timer;

    document.getElementById('copyBtn').style.cursor = "pointer";

    //Generation of short url and displaying it
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

    //Defining and assigning click listener to copy button
    $('#copyBtn').click(function () {
        //Copying the url
        var temp = $('<input>');
        temp.val($('#box').text());
        console.log(temp.val());
        $('body').append(temp);
        temp.select();
        let copied = document.execCommand('copy');
        console.log(copied);
        temp.remove();

        //Displaying copy status to user
        var msg = $('#msg');
        if(copied){
            msg.text('copied');
            msg.css('color', 'green');
        }
        else{
            msg.text('error');
            msg.css('color', 'red');
        }
        msg.css('display', 'inline');
        //clearing any previous timer
        clearTimeout(timer);
        //setting a timer to hide the 'copied' message after a second
        timer = setTimeout(function () {
            msg.css('display', 'none')
        }, 1000);
    });

});

