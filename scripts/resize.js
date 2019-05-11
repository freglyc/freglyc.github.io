/**
 * Resizes the information based on a scale factor.
 */
function resize() {
    var scale = 1; // Change this to modify the information sizing.
    
    const htmlElement = document.querySelector("html");
    htmlElement.style.fontSize = (scale*18) + "px";

    const name = document.querySelector(".name");
    name.style.fontSize = (scale*36) + "px";

    const title = document.querySelector(".title");
    title.style.fontSize = (scale*18) + "px";
    title.style.letterSpacing = (scale*.9) + "px";
    title.style.marginTop = (scale*0) + "px";
    title.style.marginBottom = (scale*20) + "px";
    title.style.marginRight = (scale*0) + "px";
    title.style.marginLeft = (scale*0) + "px";

    const biz = document.querySelector(".biz");
    biz.style.fontSize = (scale*18) + "px";
    biz.style.borderWidth = (scale*3) + "px";
    biz.style.borderRadius = (scale*7) + "px";
    biz.style.paddingBottom = (scale*5) + "px";
    biz.style.paddingTop = (scale*5) + "px";
    biz.style.paddingRight = (scale*7) + "px";
    biz.style.paddingLeft = (scale*7) + "px";
    
    const img_links = document.querySelectorAll('.img_links');
    img_links.forEach(link => {
        link.style.height = (scale*30) + "px";
        link.style.width = (scale*30) + "px";
        link.style.marginRight = (scale*.3) + "px";
        link.style.marginLeft = (scale*.3) + "px";
    });    
}
