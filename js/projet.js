// // const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });


// // // tl.to('.text', { y: "0%", duration: 1, stagger: 0.25 });
// // // tl.to('.slider', { y: "-100%", duration: 1.5, delay: 0.5 });
// // // tl.to('.intro', { y: "-100%", duration: 1 }, "-=1");



// // /*Animation Page d'accueil*/


// // var tl1 = new TimelineMax({ onUpdate: updatePercentage });
// // const controller1 = new ScrollMagic.Controller();

// // // tl1.from("#AnimA", .5, {y:100, opacity:0},Power4.easeInOut);
// // // tl1.from("#AnimB", .5, {y:200, opacity:0},Power4.easeInOut);
// // tl1.from(".nav-links", 1.5, {y: -30}, Power4.easeInOut);
// // tl1.from("#fleche img", 1.5, {y: -50, opacity:0}, Power4.easeInOut);
// // tl1.from(".about-projet h1", 1.5, {y: -30, opacity:0}, Power4.easeInOut);
// // tl1.from(".fleche", 1.5, {x: -200, opacity:0}, Power4.easeInOut);
// // tl1.from(".about-prjet h2", 1.5, {y: 30, opacity:0}, Power4.easeInOut);
// // tl1.from("p", 1.5, {y: 60, opacity:0}, Power4.easeInOut);
// // tl1.from("#line-projet", 1.5, {width: 100, opacity:0}, Power4.easeInOut),"-=1";


// // const scene1 = new ScrollMagic.Scene({
// //     triggerElement: ".about-projet",
// //     triggerHook: "onLeave",
// //     offset: -100
// // })

// //     // .addIndicators({
// //     //     colorTrigger: "red",
// //     //     colorStart: "blue",
// //     //     colorEnd: "red",
// //     //     indent: 10
// //     // })
// //     .setTween(tl1)
// //     .addTo(controller1);

// // function updatePercentage() {
// //     tl1.progress();
// //     console.log(tl1.progress());
// // };

// // var tl2 = new TimelineMax({ onUpdate: updatePercentage });
// // const controller2 = new ScrollMagic.Controller();

// // // tl2.from("#AnimA", .5, {y:100, opacity:0},Power4.easeInOut);
// // // tl2.from("#AnimB", .5, {y:200, opacity:0},Power4.easeInOut);
// // tl2.from("#item-projet", 1.5, {y: 100, opacity:0}, Power4.easeInOut);

// // const scene2 = new ScrollMagic.Scene({
// //     triggerElement: ".img-projet",
// //     triggerHook: "onLeave",
// //     offset: -400
// // })

// //     // .addIndicators({
// //     //     colorTrigger: "red",
// //     //     colorStart: "blue",
// //     //     colorEnd: "red",
// //     //     indent: 10
// //     // })
// //     .setTween(tl2)
// //     .addTo(controller2);

// // function updatePercentage() {
// //     tl2.progress();
// //     console.log(tl2.progress());
// // };


// // var tl3 = new TimelineMax({ onUpdate: updatePercentage });
// // const controller3 = new ScrollMagic.Controller();

// // // tl3.from("#AnimA", .5, {y:100, opacity:0},Power4.easeInOut);
// // // tl3.from("#AnimB", .5, {y:200, opacity:0},Power4.easeInOut);
// // tl3.from(".item-mars", 1.5, {y: 100, opacity:0}, Power4.easeInOut);

// // const scene3 = new ScrollMagic.Scene({
// //     triggerElement: ".img-projet",
// //     triggerHook: "onLeave",
// //     offset: -400
// // })

// //     // .addIndicators({
// //     //     colorTrigger: "red",
// //     //     colorStart: "blue",
// //     //     colorEnd: "red",
// //     //     indent: 10
// //     // })
// //     .setTween(tl3)
// //     .addTo(controller3);

// // function updatePercentage() {
// //     tl3.progress();
// //     console.log(tl3.progress());
// // };

// // var tl5 = new TimelineMax({ onUpdate: updatePercentage });
// // const controller4 = new ScrollMagic.Controller();


// // // tl2.from("#formulaire", .5, {y:50,opacity:0},Power4.easeInOut);
// // tl5.from("footer", 1, {opacity:0},Power4.easeInOut),"-=1";
// // tl5.from(".bloc", 1, {y:50, opacity:0},Power4.easeInOut),"-=1";
// // tl5.from("#credit", 1.5, {y:100, opacity:0},Power4.easeInOut);



// // const scene4 = new ScrollMagic.Scene({
// //     triggerElement: ".footer-content",
// //     triggerHook: "OnLeave",
// //     duration: 0,
// //     offset: -200
// // })
// //     // .addIndicators({
// //     //     colorTrigger: "red",
// //     //     colorStart: "blue",
// //     //     colorEnd: "red",
// //     //     indent: 10
// //     //   })       
// //     .setTween(tl5)
// //     .addTo(controller4);

// // function updatePercentage() {
// //     tl5.progress();
// //     console.log(tl5.progress());
// // }

// //Anim Page Projets

// var controller3 = new ScrollMagic.Controller();

// $(".about-projet,.title-projet,.imgProjet").each(function(){

//         var aboutProjet = $(this).find("#color-info");
//         var titleProjet = $(this).find("h1");
//         var flecheBack = $(this).find("a");
//         var fontInfo = $(this).find("#font-info");
//         var imgProjet = $(this).find(".item");
    
// var animateProjets = new TimelineMax();


    
// animateProjets
// .from(flecheBack, 1, {y:30, opacity:0, ease: Power4.easeInOut}, "-=0.6")
// .from(titleProjet, 1, {y:30, opacity:0, ease: Power4.easeInOut}, "-=0.6")
// .from(aboutProjet, 1, {y:30, opacity:0, ease: Power4.easeInOut}, "-=0.6")
// .from(fontInfo, 1, {y:30, opacity:0, ease: Power4.easeInOut}, "-=1")
// .from(imgProjet, 0.6, {y:30, opacity:0, ease: Power4.easeInOut}, "-=1")



// // Make a scrollMagic Scene

// var scene = new ScrollMagic.Scene({
//     triggerElement: this,
//     offset:-150,
// })

// // .addIndicators()
// .setTween(animateProjets).addTo(controller3);

// });