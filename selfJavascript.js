



var t1=gsap.timeline()

t1.from(".loader h3 span",{
    x:60,
    opacity:0,
    duration:0.5,
    stagger:0.3
})

t1.to(".loader h3 span",{
    opacity:0,
    x:-60,
    stagger:0.3,
    duration:0.5
})


t1.from(".logo-img, .logo-text, .menu h3,.nav-other h3,.nav-other button ",{
    y:-100,
    duration:1,
    delay:0.2,
    opacity:0,
    stagger:0.3
})

// t1.from(".img1",{
//     scale:0,
//     opacity:0,
//     stagger:0.3
// })


// heading animation template
t1.from(".line1 h1 span",{
    y:-100,
    opacity:0,
    duration:1,
    stagger:0.1
})

// t1.from(".img2",{
//     scale:0,
//     opacity:0,
//     stagger:0.3
// })

t1.from(".line2-part1 h1 span",{
    x:-100,
    opacity:0,
    duration:1,
    stagger:0.1
})
t1.from(".brown",{
    opacity:0,
})

t1.from(".line2-part3 h1 span",{
    x:100,
    opacity:0,
    duration:1,
    stagger:0.1
})


// t1.from(".img3",{
//     scale:0,
//     opacity:0,
//     stagger:0.3
// })




t1.from(".line3 h1 span",{
    y:100,
    opacity:0,
    duration:1,
    stagger:0.1
})

// t1.from(".img4",{
//     scale:0,
//     opacity:0,
//     stagger:0.3
// })



t1.from(".hero-part2",{
    opacity:0,
    scale:0,
    duration:1
})



// for images animation
// t1.from("",{
//     scale:0,
//     opacity:0,
//     stagger:0.3
// })

t1.from(".foot-left",{
    scale:0,
    opacity:0,
})



t1.from(".foot-middle h4",{
    scale:0,
    opacity:0,
})

t1.to(".foot-middle h4",{
    y:20,
    delay:1,
    duration:0.7,
    repeat:-1,
    yoyo:true
})


t1.to(".img5",{
    scale:0.6,
    duration:0.7,
    repeat:-1,
    yoyo:true
})
t1.to(".img6",{
    scale:0.6,
    duration:0.7,
    repeat:-1,
    yoyo:true
})
t1.to(".img7",{
    scale:0.6,
    duration:0.7,
    repeat:-1,
    yoyo:true
})
t1.to(".brown",{
    scale:0.8,
    delay:1,
    duration:0.7,
    repeat:-1,
    yoyo:true
})


Shery.imageEffect(".second-section .img1",{
    style:4,
    config: {"uColor":{"value":false},"uSpeed":{"value":0.52,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.45,"range":[0,5]},"uFrequency":{"value":1.98,"range":[0,10]},"geoVertex":{"range":[1,64],"value":8.69},"zindex":{"value":"0","range":[-9999999,9999999]},"aspect":{"value":0.7333333333333333},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.37,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    // debug:false
})

Shery.imageEffect(".second-section .img2",{
    style:2,
    config: {"resolutionXY":{"value":100},"distortion":{"value":true},"mode":{"value":-3},"mousemove":{"value":0},"modeA":{"value":1},"modeN":{"value":0},"speed":{"value":1.22,"range":[-500,500],"rangep":[-10,10]},"frequency":{"value":50,"range":[-800,800],"rangep":[-50,50]},"angle":{"value":0.5,"range":[0,3.141592653589793]},"waveFactor":{"value":1.4,"range":[-3,3]},"color":{"value":10212607},"pixelStrength":{"value":3,"range":[-20,100],"rangep":[-20,20]},"quality":{"value":5,"range":[0,10]},"contrast":{"value":1,"range":[-25,25]},"brightness":{"value":1,"range":[-1,25]},"colorExposer":{"value":0.18,"range":[-5,5]},"strength":{"value":0.2,"range":[-40,40],"rangep":[-5,5]},"exposer":{"value":8,"range":[-100,100]},"zindex":{"value":"0","range":[-9999999,9999999]},"aspect":{"value":1.7857142857142858},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.34,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}} ,
    debug:false
})

Shery.imageEffect(".second-section .img3",{
    style:1,
    config: {"a":{"value":0.69,"range":[0,30]},"b":{"value":-0.89,"range":[-1,1]},"zindex":{"value":"0","range":[-9999999,9999999]},"aspect":{"value":1.8333333333333333},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.27,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}} ,
    debug:false
})


Shery.imageEffect(".second-section .img4",{
    style:6,
    config: {"noiseDetail":{"value":7.63,"range":[0,100]},"distortionAmount":{"value":2.14,"range":[0,10]},"scale":{"value":93.13,"range":[0,100]},"speed":{"value":0.34,"range":[0,1]},"zindex":{"value":"0","range":[-9999999,9999999]},"aspect":{"value":0.7058823529411765},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.21,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}} ,
    debug:false
})