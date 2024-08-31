var tl=gsap.timeline()
tl.from("header img",{
    y: 10,
    opacity: 0,
    duration: 1,
    delay:1,
    scale: 1.5,
})
tl.from("nav a",{
    x: 10,
    opacity: 0,
    duration: 1,
    stagger:0.5
})
tl.from(".text-overlay h1",{
y:-50,
duration:1,
opacity:0,
stagger:0.3
})
tl.from(".text-overlay i,.text-overlay p",{
y:50,
duration:1,
opacity:0,
stagger:0.3
})