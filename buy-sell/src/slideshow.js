var index = 0;
slideshow();
function slideshow() {
    var i;
    var x = document.getElementsByClassName("slide");
    // console.log(x);
    for (i = 0; i < x.length; i++) {
        
        x[i].style.display = "none";  
        // console.log("inside for loop slideshow");
     }
    index++;
     if (index > x.length) 
     {
        index = 1;
     }    
    x[index-1].style.display = "block";  
    setTimeout(slideshow, 4000); 
}

export default slideshow;