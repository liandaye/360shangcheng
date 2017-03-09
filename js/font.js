var dw=750;
function resize() {
    var clientWidth=document.documentElement.clientWidth;
    var fontSize=clientWidth/dw*100;
    document.documentElement.style.fontSize=fontSize+'px';
}
resize()
window.onresize=resize;







