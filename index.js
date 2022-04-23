$.support.cors = true;

$(document).ready(
    function () {
        $('#cont').load("lista.html");
    }
)

$('#pg1').click(

    function () {
        $('#cont').load("lista.html");
        alert("redirecionando");
        console.log("log do console");
    }
)
$('#pg2').click(

    function () {
        alert("redirecionando");
        console.log("log do console");
    }
)