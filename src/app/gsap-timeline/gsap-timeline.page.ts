import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ScrollDetail } from '@ionic/angular';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: 'app-gsap-timeline',
  templateUrl: './gsap-timeline.page.html',
  styleUrls: ['./gsap-timeline.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class GsapTimelinePage implements OnInit {

  scrollProxy: any;

  scroll: any;

  constructor() { }

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
    this.scrollProxy = document.getElementsByTagName('ion-content').item(0)
    const self = this;
    ScrollTrigger.scrollerProxy(this.scrollProxy, {
      scrollTop(value) {
        return self.getScroll().scrollTop;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      }
    });
  }


  ionViewDidEnter() {

    gsap.defaults({ ease: "none" });

    const pulses = gsap.timeline({
      defaults: {
        duration: 0.05,
        autoAlpha: 1,
        scale: 2,
        transformOrigin: 'center',
        ease: "elastic(2.5, 1)"
      }
    })
      .to(".ball02, .text01", {}, 0.2)
      .to(".ball03, .text02", {}, 0.33)
      .to(".ball04, .text03", {}, 0.46)

    const main = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: "#svg",
        scroller: 'ion-content',
        scrub: true,
        start: "top center",
        end: "bottom center"
      }
    })
      .to(".ball01", { duration: 0.01, autoAlpha: 1 })
      .from(".theLine", { drawSVG: 0 }, 0)
      .to(".ball01", {
        motionPath: {
          path: ".theLine",
          align: ".theLine",
          alignOrigin: [0.5, 0.5],
        }
      }, 0)
      .add(pulses, 0);


    // @ts-ignore
    gsap.config({ trialWarn: true });
  }

  handleScroll(ev: CustomEvent<ScrollDetail>) {
    this.scroll = ev.detail;
  }

  getScroll() {
    if (!this.scroll) {
      return { scrollTop: 0 }
    }
    return this.scroll
  }

}
