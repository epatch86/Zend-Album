$(document).ready(function(){
    $.ajax({
        url:"http://localhost/zf2-tutorial/public/album-rest",
        method:"get",
        success: function(data){
            console.log(data);
            $.each(data, function(key, value){
                console.log(value);
                $.each(value, function(n, v){

                });

            })
        }
    })
});