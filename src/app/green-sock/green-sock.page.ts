import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ScrollDetail } from '@ionic/angular';
//
import { GsapComponentComponent } from '../gsap-component/gsap-component.component';
//
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import SplitText from 'gsap/SplitText';
// @ts-ignore
// import * as SplitText from '../../assets/SplitText3.min.js';
declare var SplitText: any;

@Component({
  selector: 'app-green-sock',
  templateUrl: './green-sock.page.html',
  styleUrls: ['./green-sock.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    GsapComponentComponent
  ]
})
export class GreenSockPage implements OnInit {

  @ViewChild('slideLeft') slideLeft!: ElementRef;

  scroll!: any;

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger, SplitText);
  }

  ionViewDidEnter() {

    const scrollProxy = document.getElementsByTagName('ion-content').item(0)
    const self = this;

    ScrollTrigger.scrollerProxy(scrollProxy, {
      scrollTop(value) {
        return self.getScroll().scrollTop;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      }
    });

    const sections = gsap.utils.toArray(".fullscreen");

    sections.forEach((section: any, index: any) => {
      const heading = section.querySelector("h1");
      let split = SplitText.create(heading, { type: "chars" });
      //create an animation for each heading
      let animation = gsap.from(split.chars, { y: 100, opacity: 0, stagger: 0.1 });
      ScrollTrigger.create({
        trigger: section,
        scroller: scrollProxy,
        start: "top 40%",
        toggleActions: "play none none reverse",
        animation: animation,
        markers: false
      });

    });

    gsap.to(".pContent", {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
        scroller: scrollProxy,
        trigger: ".pSection",
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: true
      },
    });

    gsap.to(".pImage", {
      yPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: ".pSection",
        scroller: scrollProxy,
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: true
      },
    });


    // @ts-ignore
    gsap.config({ trialWarn: false });
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
