(function(){
    "use strict"
 

    TweenMax.to(".overlay h1",2,{
        delay:6,
        opacity:0,
        y:-60,
        ease:Power4.easeInOut
    })
    // TweenMax.to(".overlay span",2,{
    //     delay:.6,
    //     opacity:0,
    //     y:-60,
    //     ease:Power4.easeInOut
    // })
    TweenMax.to(".overlay ",2,{
        delay:2,
        top: "-150%",
        ease:Power4.easeInOut
    })
    TweenMax.from(".logo",2,{
        delay:2.7,
        opacity:0,
        x: "-40",
        ease:Power4.easeInOut
    })
    TweenMax.staggerFrom(".animatedlistitems ul li ", 2, {
        delay:3.2,
        stagger:.2,
        opacity:0,
        x: "-70",
        ease:Power4.easeInOut
    },0.4);
    TweenMax.from(".hamburger", 2, {
        delay:3.2,
        // stagger:.5,
        opacity:0,
        x: "-70",
        ease:Power4.easeInOut
    },0.4);

}())