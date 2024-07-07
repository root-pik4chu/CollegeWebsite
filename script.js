





reveal_Item();

loco()












function loco(){
   gsap.registerPlugin(ScrollTrigger);

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

}

 



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




var tl = gsap.timeline();

tl.to(".parent .child",{
   
   y: "-15%",
   ease:Circ.easeInOut,
   duration:2,
   
},"a")
.to(".first",{
   duration:3,
   y:"-12vw"
},"a")
.to(".second",{
   duration:3,

   y:"-255vh"
},"a")
.to(".third",{
   duration:3,
   
   y:"-512vh"
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





