




// SwiperJs()
reveal_Item();

// loco()



lenis();






function lenis(){
   const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
}

// function loco(){
//    gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });



// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

// }


   





function reveal_Item(){
   document.querySelectorAll(".reveal").forEach(function(elem){

      var parent = document.createElement("span");
      var child = document.createElement("span");
   
      parent.classList.add("parent") ;// <span class="parent"></span>
      child.classList.add("child"); //<span class="child"></span>
   
   
      child.textContent = elem.textContent;
      parent.appendChild(child);
   
   
      elem.innerHTML = ""
      elem.appendChild(parent)
   
   })
}


// --------------------------------------------------


var tl = gsap.timeline();

tl.to(".parent .child",{
   
   y: "-15%",
   ease:Circ.easeInOut,
   duration:2,
   
},"a")
.to(".first",{
   duration:5,
   y:"-12vw",
   delay:1,
},"a")
.to(".second",{
   duration:5,

   y:"-255vh",
   delay:1,

},"a")
.to(".third",{
   duration:5,
   
   y:"-512vh",
   delay:1,

},"a")

.to(".darkGreen",{
   height:"100%",
   ease:Circ.easeInOut,
   top:0,
   delay:1,
   duration:1,

   // delay:-1,

})
.to(".first , .second , .third",{
   duration:"10ms",
   opacity:0,
   display:"none",
},"b")
.to(".parent .child",{
   opacity:0,
   display:"none",
   duration:"10ms",
   
},"b")
.to(".darkGreen",{
   height:0,
   ease:Circ.easeInOut,
   // duration:1,
   delay:.1
   // top:0,
})
.to(".loader",{
   height:0,
   duration:1,
   delay:-.6,
   
   ease:Circ.easeInOut,

})
// --------------------------------------------------

// page1 

// gsap.to(".video video",{
//    ease:Circ,
//    duration:1.2,
//    width:"100%",
//    height:"98%",
// });
// let t3 = gsap.timeline();
// t3.to("#page1",{
//    scrollTrigger:{
//       trigger:"#page1",
//       start:"50% 40%",
//       end:"50% 30%",
//       markers:true,
//       scrub:1,
//       // pin:true,
//    }
// })

// .to(".video",{
//    top:"100%",
//    duration:2,
//    opacity:1,
   

   
//  })
let t3 = gsap.timeline({
   // yes, we can add it to an entire timeline!
   scrollTrigger: {
     trigger: '.page1',
   //   scroller:".page",
     scrub:4,
     start: '-50% 50%', 
     end: '-50% 35%', 
     markers:true,
     pin:true,
   //   duration:5,
   }
 })
.to(".video",{
   
   top:"50%",
   height:"0%",
   // ease:"cubic-bezier(.01,.53,.87,-1.09)",
   
   duration:2,

})
.to(".about",{
   // delay:1,
   duration:6,
   
   // ease:"cubic-bezier(.01,.53,.87,-1.09)",
   // scrub:5,
   height:"100vh",
   top:0,
})
// gsap.to(".about",{
//    top:"-100%",
//    ease:Circ.easeInOut,
//    duration:1,
//    scrollTrigger:{
//       trigger:".about",
//       // pin:true,
//       scroller:"body",
//       start:"60% 40%",
//       end:"60% 30%",
//       markers:true,
//    }
// })
// let t3 = gsap.timeline({scrollTrigger:{
//    trigger:"",
//    start:"50% 40%",
//    end:"60% 30%",
//    markers:true,

// }})
// t3.to(".about",{
//    top:"-100%",
//    duration:8,
// })
// gsap.to(".about", {
//    scrollTrigger: {
//        trigger: "#page1",
//        start: "center 40%",
//        end: "center 30%",
//        scrub: true,
//        markers:true,
//    },
//    top: "-100%",
//    duration:2,
//    ease:Circ.easeInOut,

// });
// t2.to(".about",{
//    top:"-100%",
//    ease:Circ.easeInOut,
//    duration:1,
// })

   var swiper = new Swiper(".right .mySwiper", {
      slidesPerView: 1,
      
      loop: true,
      pagination: {
      el: ".swiper-pagination",
      clickable: true,
      }
   });
   
