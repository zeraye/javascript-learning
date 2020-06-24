// function myScript() {
//     var a = document.getElementById("a").value
//     console.log("a =", a)
//     var b = document.getElementById("b").value
//     console.log("b =", b)
//     var c = document.getElementById("c").value
//     console.log("c =", c)
//
//     var p = -b/(2*a)
//     console.log("p =", p)
//
//     var delta = b**2 - 4*a*c
//     console.log("delta =", delta)
//
//     var q = -delta/(4*a)
//     console.log("q =", q)
//
//     if (delta<0) {
//         document.getElementById("delta").innerHTML = "aba"
//     }
// }

$(document).ready(function () {
    $("#btn").click(function () {
        var a = $("#a").val();
        // console.log("a =", a);
        var b = $("#b").val();
        // console.log("b =", b);
        var c = $("#c").val();
        // console.log("c =", c);

        var p = -b/(2*a);
        // console.log("p =", p);
        $("#p").text("p = " + p);

        var delta = b**2 - 4*a*c;
        // console.log("delta =", delta);
        $("#delta").text("delta = " + delta);

        var q = -delta/(4*a);
        // console.log("q =", q);
        $("#q").text("q = " + q);

        if (delta<0) {
            $("#x0").text("no roots");
        } else if (delta===0) {
            $("#x0").text("x1 = x2 = " + p);
        } else {
            var x1 = (-b-delta**0.5)/(2*a);
            var x2 = (-b+delta**0.5)/(2*a);
            $("#x0").text("x1 = " + x1 + " | x2 = " + x2);
        }
        var addSign = "x + "
        if (parseFloat(a)===1) { a = ""}
        if (parseFloat(b)===1) { b = ""}
        if (parseFloat(c)===0) {
            c = ""
            var addSign = "x"
        }
        $("#formula").text(a + "x^2 + " + b + addSign + c + " = 0");

        });
});