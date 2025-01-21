// const locoScroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true,
//   }); 
// gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

gsap.to(".nav-part1 img",{
    transform:"translateY(-100%)",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",

        start:"top 0",
        end:"top -5%",
        scrub:true
    }
})

gsap.to(".nav-part2 a",{
    transform:"translateY(-100%)",
    opacity:0,
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",

        start:"top 0",
        end:"top -5%",
        scrub:true
    }
})


function vedioanimation(){
    var video = document.querySelector("#container1");
var playbtn = document.querySelector("#play")
video.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        scale:1,
        opacity:0.8
    })
})

video.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    })
})

video.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x-50,
        top:dets.y-60
    })
})

}
vedioanimation()

function animationtext(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.8,
        stagger:0.3
     })

    gsap.from("#page1 #container1",{
        scale:0.6,
        opacity:0,
        delay:1.3,
        duration:0.7,
        stagger:0.3
    })

    gsap.from("#page2 #elem1",{
        scale:0.6,
        opacity:0,
        delay:2,
        duration:1,
        // stagger:0.3
    })

    gsap.from("#page2 #elem2",{
        scale:0.6,
        opacity:0,
        delay:2.4,
        duration:0.5,
        // stagger:0.3
    })
    gsap.from("#page2 #elem3",{
        scale:0.6,
        opacity:0,
        delay:2.8,
        duration:0.5,
        // stagger:0.3
    })

    gsap.from("#page3 img",{
        scale:0.6,
        opacity:0,
        delay:3.5,
        duration:0.5,
        stagger:0.5
    })

    gsap.from("#page3 h2ill",{
        scale:0.6,
        opacity:0,
        delay:3.5,
        duration:0.5,
        stagger:0.5
    })
} 

animationtext()

document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y
    })
})

document.querySelector("#child1").addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
      transform: "translate(-50%,-50%) scale(1)"
    })
}) 

document.querySelector("#child1").addEventListener("mouseleave",function(){
    gsap.to("#cursor",{
      transform: "translate(-50%,-50%) scale(0)"
    })
}) 

document.querySelector("#child2").addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
      transform: "translate(-50%,-50%) scale(1)"
    })
}) 

document.querySelector("#child2").addEventListener("mouseleave",function(){
    gsap.to("#cursor",{
      transform: "translate(-50%,-50%) scale(0)"
    })
}) 

document.querySelector("#child3").addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
      transform: "translate(-50%,-50%) scale(1)"
    })
}) 

document.querySelector("#child3").addEventListener("mouseleave",function(){
    gsap.to("#cursor",{
      transform: "translate(-50%,-50%) scale(0)"
    })
}) 

document.querySelector("#child4").addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
      transform: "translate(-50%,-50%) scale(1)"
    })
}) 

document.querySelector("#child4").addEventListener("mouseleave",function(){
    gsap.to("#cursor",{
      transform: "translate(-50%,-50%) scale(0)"
    })
}) 


var rect = document.querySelector(".container");

rect.addEventListener("mousemove",function(details){
    var rectanglelocation = rect.getBoundingClientRect();
    var insiderectval = details.clientX - rectanglelocation.left;

    if (insiderectval < rectanglelocation.width / 2){
        var redcolor = gsap.utils.mapRange(
            0,rectanglelocation.width / 2,255,0,insiderectval
        );
        gsap.to(rect,{
            backgroundColor: `rgb(220, 233, 245)`,
            ease : Power4,
            duration:2 
        })
    }
    else{

            var bluecolor = gsap.utils.mapRange(
                rectanglelocation.width / 2,rectanglelocation.width,0,255,insiderectval
            );
            gsap.to(rect,{
                backgroundColor: `#8b8b8b`,
                ease : Power4,
                duration:2
            })
    }
})





window.addEventListener('load', function () {

    setTimeout(function () {
     
        const preLoader = document.querySelector('.loading');
        preLoader.style.animation = 'none';
        preLoader.style.opacity = '0'; 
        
    
        const content = document.querySelector('.content');
        content.style.animation = 'none'; 
        content.style.opacity = '1'; 
  
  
        setTimeout(function () {
            preLoader.style.display = 'none';
            content.style.display = 'block';
        }, 400); 
    }, 6000); 
  });


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});


  const word = document.querySelectorAll('.word');
  word.forEach((al) => observer.observe(al));

  const para = document.querySelectorAll('.para');
  para.forEach((el) => observer.observe(el));