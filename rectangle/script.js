var rect = document.querySelector("#center");

rect.addEventListener("mousemove",function (details){
    var location = rect.getBoundingClientRect();
    var insideval = details.clientX - location.left;

    if(insideval<location.width/2-1){
        var redcolor = gsap.utils.mapRange(0,location.width/2,255,0,insideval);
        gsap.to(rect,{
            backgroundColor:`rgb(${redcolor},0,0)`,
            ease:Power4
        })
    }
    else if(insideval > location.width / 2+1){
        var bluecolor = gsap.utils.mapRange(location.width/2,location.width,0,255,insideval);
        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${bluecolor})`,
            ease:Power4
        })
    }
})
rect.addEventListener("mouseleave",()=>{
    gsap.to(rect,{
        backgroundColor:"white"
    })
})