const Page = document.getElementById("mainpage");
const showPage = document.getElementById("loader");

showPage.addEventListener("click", ()=>{
  setTimeout(() => {
    showPage.style.opacity="0";
    setTimeout(() => {
        showPage.style.display="none"; 
        Page.style.display="block";
        Page.offsetWidth; 
        Page.style.opacity="1";
    }, 1000);

  }, 2000);

})



function myplaylist() {
  const tl = gsap.timeline();
  tl.to(".myplaylist", {
    x: 0,
    duration: 1,
  });

  tl.to(".cross1", {
    rotate: 45,
    duration: 0.5,
    opacity:1
  });
}

function closeDefaultPlaylist() {
  const tl = gsap.timeline();

  tl.to(".cross1", {
    rotate: 0,
    duration: 0.1,
    opacity:0
  });

  tl.to(".myplaylist", {
    x: -400,
    duration: 1,
  });
}



const tline = gsap.timeline();
tline.to(".loaderleft", {
  // x:770,
  x: 200,
  duration: 1,
  ease: "power2.out"
}, "start")
tline.from(".loaderright", {
  // x:800, 
  x: 200,
  opacity:0,
  duration: 1,
  ease: "power2.out"
}, "start");

tline.from(".loaderleft",{
  opacity:0,
  duration:1
}, "start")

tline.from(".loaderbottom",{
  y:100, 
  duration:1
}, "start")


tline.from(".project",{
  opacity:0,
  duration: 0.5, 
})
tline.from(".project p",{
  opacity:0, 
  duration: 1, 
  stagger: 0.5
})



tline.from(".loaderbottom pre",{
  opacity:0
})
tline.from(".loaderbottom a",{
  opacity:0
})
tline.from(".loadertext2",{
  opacity:0
})
