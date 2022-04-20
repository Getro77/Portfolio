
  
  
  
  // Anim Texte Accueil


var controller = new ScrollMagic.Controller();

$("body").each(function(){

        var Bigtext = $(this).find(".bigText");
        var Scrolldown = $(this).find(".scroll");
        var Scrolltext = $(this).find("#scrollText");
        var navLinks = $(this).find(".nav-links");
    
var animateBigText = new TimelineMax();
    
animateBigText
.from(Bigtext, 1.4, {x:-1000,opacity:0, ease:Power4.easeInOut}, "-=0.8")
.from(navLinks, 1, {y:-40,opacity:0, ease: Power4.easeInOut}, "-=0.6")
.from(Scrolldown, 1, {y:40,opacity:0,ease: Power4.easeInOut}, "-=0.8")
.from(Scrolltext, 1, {y:20,opacity:0,ease: Power4.easeInOut}, "-=0.6")



// Make a scrollMagic Scene

var scene = new ScrollMagic.Scene({
    triggerElement: this,
})

// .addIndicators()
.setTween(animateBigText).addTo(controller);

});





// Anim Projets

var controller1 = new ScrollMagic.Controller();

$(".project").each(function(){

        var picOverlay = $(this).find(".overlay");
        var projectInfo = $(this).find(".project-info");
        var smallTitle = $(this).find(".small-title");
        var projectLink = $(this).find(".project-link");
        var title = $(this).find("h4");
    
var animateProject = new TimelineMax();
    
animateProject
// .fromTo(picOverlay, 1, {skewX:30, scale:2}, {skewX:0, xPercent:100,transformOrigin: "0% 100%", ease:Power4.easeInOut})
.fromTo(picOverlay, 1.2, {X:30, scale:2}, {X:0, xPercent:100,transformOrigin: "0% 100%", ease:Power4.easeInOut})
.from(projectInfo, 1,{scaleY:0, transformOrigin: "bottom left"},"-=1")
.from(smallTitle, 0.8,{autoAlpha: 0, y:30, ease:Power4.easeInOut},"-=0.3")
.from(title, 0.8, {autoAlpha:0, y:30, ease:Power4.easeInOut}, "-=0.3")
.from(projectLink, 0.8, {autoAlpha:0, y:30, ease:Power4.easeInOut}, "-=0.3")

// Make a scrollMagic Scene

var scene = new ScrollMagic.Scene({
    triggerElement: this,
    offset: -180
})

// .addIndicators()
.setTween(animateProject).addTo(controller1);

});



// Page About


// About Section

var controller1 = new ScrollMagic.Controller();

$(".about-page").each(function(){

    var aboutTitle = $(this).find(".about-section>.title");
    var aboutText = $(this).find(".about-section>.text");

var animateAbout = new TimelineMax();

animateAbout

.fromTo(aboutTitle, 3.5,{y:500,opacity:0}, {y:0,opacity:1, duration: 0.5, ease:Power4.easeInOut})
.fromTo(aboutText, 1.4,{y:200,opacity:0}, {y:0,opacity:1, duration: 1, ease:Power4.easeInOut}, "-=1")


// Make a scrollMagic Scene

var scene = new ScrollMagic.Scene({
triggerElement: this,
triggerHook: "OnStart",
})

// .addIndicators()
.setTween(animateAbout).addTo(controller1);

});

// Skills Section

$(".about-page").each(function(){

        var skills = $(this).find(".skills-section");
        var skillsTitle = $(this).find(".skills-section>.title");
        var skillsText = $(this).find(".skills-section>.text");

var animateSkills = new TimelineMax();
    
animateSkills

.from(skills, 1, {x:-3000})
.fromTo(skillsTitle, 1.6,{x:-600,opacity:0}, {x:0,opacity:1,duration: 1, ease:Power4.easeInOut}, "-=0.8")
.fromTo(skillsText, 1.6,{x:-700,opacity:0}, {x:0,opacity:1,duration: 1, ease:Power4.easeInOut}, "-=1")


// Make a scrollMagic Scene

var scene = new ScrollMagic.Scene({
    triggerElement: this,
    offset: 600
})

// .addIndicators()
.setTween(animateSkills).addTo(controller1);

});

//Contact Section

$(".about-page").each(function(){

    var contactTitle = $(this).find(".contact-section>h2");
    var inputText = $(this).find(".contact-form>.form>.form-control");
    var inputSendMessage = $(this).find(".contact-form>.form>input");
    var contactImg1 = $(this).find(".social-links>#links-1");
    var contactImg2 = $(this).find(".social-links>#links-2");
    var contactImg3 = $(this).find(".social-links>#links-3");

var animateContact = new TimelineMax();

animateContact

.fromTo(contactTitle, 1,{y:100,opacity:0}, {y:0,opacity:1,duration: 0.5, ease:Power4.easeInOut}, "-=1")
.fromTo(inputText, 1,{y:100,opacity:0}, {y:0,opacity:1,duration: 0.5, ease:Power4.easeInOut}, "-=0.5")
.fromTo(inputSendMessage, 1,{y:100,opacity:0}, {y:0,opacity:1,duration: 0.5, ease:Power4.easeInOut}, "-=0.5")
.fromTo(contactImg1, 1,{y:20,opacity:0}, {y:0,opacity:1,duration: 0.5, ease:Power4.easeInOut}, "-=1")
.fromTo(contactImg2, 1,{y:20,opacity:0}, {y:0,opacity:1,duration: 0.5, ease:Power4.easeInOut}, "-=0.8")
.fromTo(contactImg3, 1,{y:20,opacity:0}, {y:0,opacity:1,duration: 0.5, ease:Power4.easeInOut}, "-=0.6")


// Make a scrollMagic Scene

var scene = new ScrollMagic.Scene({
triggerElement: this,
offset: 1100
})

// .addIndicators()
.setTween(animateContact).addTo(controller1);

});




// Intro Inter-Pages

const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });


tl.from('.intro', { y:'100%', duration: 0 }, "-=1");
tl.to('.text', { y: "0%", duration: 0.8, stagger: 0.25 });
tl.to('.slider', { y: "-100%", duration: 1 },Power4.easeInOut, "-=0");
tl.to('.intro', { y: "-100%", duration: 1 });








