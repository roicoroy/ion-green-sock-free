import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

// declare var ScrollMagic: any;
// declare var $: any;
// declare var gsap: any;
// declare var IScroll: any;
// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { SectionComponent } from '../section/section.component';
// import IScroll from 'src/assets/ScrollMagic/assets/js/lib/iscroll-probe';

@Component({
  selector: 'app-gsap-component',
  templateUrl: './gsap-component.component.html',
  styleUrls: ['./gsap-component.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SectionComponent
  ]
})
export class GsapComponentComponent implements AfterViewInit, OnInit {

  @ViewChild('slideLeft') slideLeft!: ElementRef;

  @ViewChild('pContent') pContent!: ElementRef;

  @ViewChild('pImage') pImage!: ElementRef;

  scroll!: any;

  controller!: any;

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {

    // this.controller = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: "onEnter", duration: "200%" } });

    // // build scenes
    // new ScrollMagic.Scene({ triggerElement: "#parallax1" })
    //   .setTween("#parallax1 > div", { y: "80%", ease: Linear.easeNone })
    //   .addIndicators()
    //   .addTo(this.controller);

    // new ScrollMagic.Scene({ triggerElement: "#parallax2" })
    //   .setTween("#parallax2 > div", { y: "80%", ease: Linear.easeNone })
    //   .addIndicators()
    //   .addTo(this.controller);

    // new ScrollMagic.Scene({ triggerElement: "#parallax3" })
    //   .setTween("#parallax3 > div", { y: "80%", ease: Linear.easeNone })
    //   .addIndicators()
    //   .addTo(this.controller);

    // $(function () { // wait for document ready					
    //   // init controller
    //   // const controllerM = new ScrollMagic.Controller({ container: "#example-wrapper" });

    //   // // init tween
    //   // var tween = TweenMax.to("#mobileadvanced", 1, { backgroundColor: "black", scale: 0.4, borderRadius: 75 });

    //   // // init scene
    //   // var scene = new ScrollMagic.Scene({ triggerElement: "#trigger", duration: 500, offset: 75 })
    //   //   .setTween(tween)
    //   //   .setPin("#mobileadvanced")
    //   //   .addTo(controllerM);
    // });



    // gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // let getRatio = (el: any) => window.innerHeight / (window.innerHeight + el.offsetHeight);

    // gsap.utils.toArray("section").forEach((section: any, i: any) => {
    //   section.bg = section.querySelector(".bg");

    //   // Give the backgrounds some random images
    //   if(section.bg){
    //     section.bg.style.backgroundImage = `url(https://picsum.photos/1600/800?random=${i})`;
    //   }
      

    //   // the first image (i === 0) should be handled differently because it should start at the very top.
    //   // use function-based values in order to keep things responsive
    //   gsap.fromTo(section.bg, {
    //     backgroundPosition: () => i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px"
    //   }, {
    //     backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: section,
    //       start: () => i ? "top bottom" : "top top",
    //       end: "bottom top",
    //       scrub: true,
    //       invalidateOnRefresh: true // to make it responsive
    //     }
    //   });

    // });
  }

}
