

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
  
function firstpageanim(){
    var tl=gsap.timeline();
    tl.from("#ugwu",{
        y: '-10',
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut
       
    })
    .to(".boundingelem",{
        y: 0,
       ease:Expo.easeInOut,
        duration:2,
        delay:-1,
        stagger:0.2
    })
    .from("#pagefooter",{
        y: -10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut
    })
    
}

firstpageanim();
function mousefollow(xscale,yscale){
    window.addEventListener('mousemove',function(dets){
        document.querySelector("#minicircle").style.transform=`translate(${dets.x}px,${dets.y}px) scale(${xscale},${yscale})`;
    })
}
mousefollow();
var timeout;
function circlechaptekaro(){
   
    var xscale=1;
    var yscale=1;
    var Xprev=0;
    var Yprev=0;

   window.addEventListener('mousemove',function(dets){
        clearTimeout(timeout);
        var x=dets.x;
        var y=dets.y;
        var Xdiff=x-Xprev;
        var Ydiff=y-Yprev;
        Xprev=x;
        Yprev=y;
        
        xscale=gsap.utils.clamp(.8,1.2,Xdiff);
        yscale=gsap.utils.clamp(.8,1.2,Ydiff);

        mousefollow(xscale,yscale);
        timeout=setTimeout(function(){
            document.querySelector("#minicircle").style.transform=`translate(${dets.x}px,${dets.y}px) scale(${1},${1})`;

        },100);
        
    }
);
}
 circlechaptekaro();

 //mouse hone par image show hona
 document.querySelectorAll(".elem").forEach(function(elem){
    var rotate=0;
    var differ = 0;
    elem.addEventListener("mouseleave",function(dets){
        
        gsap.to(elem.querySelector("img"),{
            opacity: 0,
            ease: Power3,
            
        }); 
       });
    elem.addEventListener("mousemove",function(dets){
        var diff =dets.clientY - elem.getBoundingClientRect().top;
        differ= dets.clientX-rotate;
        rotate=dets.clientX;
        var img=elem.querySelector("img");
        // calculate the image's cente position
        var imgWidth = img.offsetWidth;
        var imgHeight = img.offsetHeight;
        gsap.to(elem.querySelector("img"),{
            opacity: 1,
            ease: Power3,
            top:diff-imgHeight/2,
            left:dets.clientX-imgWidth/2,
            rotate: gsap.utils.clamp(-40,40,differ)
       
    });
});
 });

 
 