$(document).ready(function(){
    $.ajax({
        url:"http://localhost/zf2-tutorial/public/album-rest",
        method:"get",
        success: function(data){
            console.log(data);
            $.each(data, function(key, value){
                console.log(value);
                $.each(value, function(n, v){
					//$('#card').append("<p>" + v.title + " : " + v.artist + "</p>");
					$('#card').append("<td>" + v.title + "</td>");
					$('#card2').append("<td>" + v.artist + "</td>");
					//$(".id").text(v.artist);
                });

            })
        }
    })
});
