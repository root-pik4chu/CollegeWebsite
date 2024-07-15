function lenis(){
   const lenis = new Lenis()

   // lenis.on('scroll', (e) => {
   // console.log(e)
   // })

   lenis.on('scroll', ScrollTrigger.update)

   gsap.ticker.add((time)=>{
   lenis.raf(time * 1000)
   })

   gsap.ticker.lagSmoothing(0)
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

function magnet(){
   const button = document.querySelector(".button1");
   const text = document.querySelector(".text");
        if (button) {
            button.addEventListener("mousemove", (e) => {
                const boundingRect = button.getBoundingClientRect();
                const mousePosX = e.clientX - boundingRect.left;
                const mousePosY = e.clientY - boundingRect.top;

                gsap.to(button, {
                    x: (mousePosX - boundingRect.width / 2) * 0.6,
                    y: (mousePosY - boundingRect.height / 2) * 0.6,
                    duration: 0.3,
                    ease: "power3.out",
                });
                gsap.to(".text",{
                  x:clamp(2,4),
                  y:clamp(2,4),
                })
            });

            button.addEventListener("mouseleave", () => {
                gsap.to(button, {
                    x: 0,
                    y: 0,
                    duration: 0.8,
                    ease: 'elastic.out(2, 0.3)',
                });
            });
        }
}




function mouseFollower(){
   const cursorFollower = document.querySelector(".cursor-follower");

        document.addEventListener("mousemove", (e) => {
            gsap.to(cursorFollower, {
                x: (e.clientX - cursorFollower.clientWidth / 2)  +50 +"px",
                y: (e.clientY - cursorFollower.clientHeight / 2) + 50 + "px",
                duration: 1,
                ease: "elastic.out(1, 0.3)"
            });
        });
}


//  var path = "M 10 80 Q 95 10 180 80" ;

// var path ="M 10 80 Q 95 80 1500 80";
// M 10 80 Q 500 80 900 80
// document.querySelector(".svg-Line").addEventListener("mousemove",function(dets){
//    var path2 =`M 10 80 Q 500 ${dets.y} 900 80`;
   
//    console.log(dets.clientY);
//    gsap.to("svg path",{
//       attr :{d:path2}

//    })
// })
// document.querySelector(".svg-Line").addEventListener("mouseleave",function(dets){
//    var path2 =`M 10 80 Q 500 80 900 80`;
   
//    console.log(dets.clientY);
//    gsap.to(".svg-Line svg path",{
//       attr :{d:path2}

//    })
// })
// M 10 80 Q 860 80 1720 80
// --------------------------------------------------------------------
function elastic(){

   const svgLine = document.querySelector(".svg-Line");
const svgPath = document.querySelector("#path");

svgLine.addEventListener("mousemove", function(dets) {
    const rect = svgLine.getBoundingClientRect();
    const mouseY = dets.clientY - rect.top; // Get the mouse position relative to the .svg-Line div
    const mouseX = dets.clientX - rect.left; // Get the mouse horizontal position relative to the .svg-Line div
    const halfHeight = rect.height / 2;
    const halfWidth = rect.width / 2;
    const controlY = mouseY < halfHeight ? 80 - (halfHeight - mouseY) : 80 + (mouseY - halfHeight);
    const controlX = mouseX < halfWidth ? 860 - (halfWidth - mouseX) : 860 + (mouseX - halfWidth);

    const path2 = `M 10 80 Q ${controlX} ${controlY} 1720 80`;

    gsap.to(svgPath, {
        attr: { d: path2 }
    });
});

svgLine.addEventListener("mouseleave", function() {
    const path2 = `M 10 80 Q 860 80 1720 80`;

    gsap.to(svgPath, {
        attr: { d: path2 },
        duration: .8,
         ease: "elastic.out(2, 0.3)"

    });
});
}

// --------------------------------------------------------------------






// const button = document.querySelector(".button1");
// let boundingRect = button.getBoundingClientRect();

// window.addEventListener('resize' , ()=>{
//    boundingRect = button.getBoundingClientRect();
// })

// button.addEventListener("mousemove",(e)=>{
//    const mousePosX = e.clientX - boundingRect.left;
//    const mousePosY = e.clientX - boundingRect.top;


//    gsap.to(button,{
//       x:(mousePosX - boundingRect.width /2) * 0.2 ,
//       y:(mousePosY - boundingRect.height /2)* 0.2,
//       duration:.8,
//       ease:"power3.out",
//    })
// })
// // button.addEventListener("mousemove", (e) => {
// //    const mousePosX = e.clientX - boundingRect.left;
// //    const mousePosY = e.clientY - boundingRect.top;

// //    gsap.to(button, {
// //      x: (mousePosX - boundingRect.width / 2) * 0.6,
// //      y: (mousePosY - boundingRect.height / 2) * 0.6,
// //      duration: 0.8,
// //      ease: "power3.out",
// //    });
// //  });
// button.addEventListener("mouseleave",(e)=>{

//    gsap.to(button,{
//       x:0 ,
//       y:0,
//       duration:.8,
//       ease:'elastic.out(1,0.3)',
//    })
// })






reveal_Item()


function loader(){
   var tl = gsap.timeline();

tl.to('.parent .child',{
   
   y: "-10%",
   ease:Circ.easeInOut,
   duration:2,
   
})
tl.to('.parent .child',{
   y: "-100%",
   ease:Circ.easeInOut,
   duration:2,
   
},"a")

.to("#loader",{
   height:0,
   duration:1,
   ease:Circ.easeInOut,

})
.to("#greenScreen",{
   top:0,
   height:"100vh",
   duration:1,
   delay:"-.8",
   ease:Circ.easeInOut,

})
.to("#greenScreen",{
   height:"0vh",
   delay:"-.2",

   duration:1,
   ease:Circ.easeInOut,

})
.to("#page1",{
   duration:1,
   opacity:1,
})

}

let t4 = gsap
.timeline({
   scrollTrigger: {
         trigger: ".footer-second ",
         scrub:1,
         start:"520% 88%",
         end:"520% 55%",
         // end: () => "+=" + document.querySelector(".containerThird").offsetWidth,
         // markers:true,
         // pin:true,
         
   },
})

// var t4 = gsap.timeline();
t4.to(".footer-third h1",{
   top:"3vw",
   stagger:.1,
})





elastic()
horizontalDiv()
loader();
lenis();
magnet();
mouseFollower();
// let t3 = gsap.timeline({
//    scrollTrigger:{
//       trigger:(".containerThird",{
//          scrub:1,
//          start:"0% 0%",
//          end:"100% 100%",
//          markers:true,
//          pin:true,

//       })
// });
function horizontalDiv(){
   let container = document.querySelector(".containerThird");
   let t3 = gsap
   .timeline({
      scrollTrigger: {
            trigger: "#page4",
            scrub:1,
            start:"25% 25%",
            end:"25% -160%",
            // end: () => "+=" + document.querySelector(".containerThird").offsetWidth,
            // markers:true,
            pin:true,
      },
   })
   .to(container,{
      
      x: "-68%", //()=>-(container.scrollWidth - document.documentElement.clientWidth - 100)+"px",
      ease: "none",
   })


}


var swiper = new Swiper(".right .mySwiper", {
   slidesPerView: 1,
   
   loop: true,
   pagination: {
   el: ".swiper-pagination",
   clickable: true,
   },
   autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }
});


var swiper = new Swiper(".mySwiper1", {
   slidesPerView: 1.5,
   spaceBetween: 30,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
 });