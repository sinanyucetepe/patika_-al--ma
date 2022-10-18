//document.body.style.backgroundColor ="aqua"
//console.log(document.URL)
//console.log(document.baseURI)
function myFunction() {
    var w = window.open();
    w.document.open();
    w.document.write("<h1>Hello World!</h1>");
    w.document.close();
}