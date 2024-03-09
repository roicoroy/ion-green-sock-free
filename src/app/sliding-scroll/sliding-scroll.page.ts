import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ScrollDetail } from '@ionic/angular';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: 'app-sliding-scroll',
  templateUrl: './sliding-scroll.page.html',
  styleUrls: ['./sliding-scroll.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SlidingScrollPage implements OnInit {

  scrollProxy: any;

  scroll: any;

  constructor() { }

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);
    this.scrollProxy = document.getElementsByTagName('ion-content').item(0)
    const self = this;

    // console.log(scrollProxy);
    // console.log(this.contentEl);

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

    gsap.utils.toArray(".comparisonSection").forEach((section: any) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          scroller: 'ion-content',
          start: "center center",
          // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
          end: () => "+=" + section.offsetWidth,
          scrub: true,
          pin: true,
          anticipatePin: 1
        },
        defaults: { ease: "none" }
      });
      // animate the container one way...
      tl.fromTo(section.querySelector(".afterImage"), { xPercent: 100, x: 0 }, { xPercent: 0 })
        // ...and the image the opposite way (at the same time)
        .fromTo(section.querySelector(".afterImage img"), { xPercent: -100, x: 0 }, { xPercent: 0 }, 0);
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
