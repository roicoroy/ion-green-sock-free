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

  scroll: any;

  scrollProxy: any;

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);

    this.scrollProxy = document.getElementsByTagName('ion-content').item(0)
    const self = this;

    ScrollTrigger.scrollerProxy(this.scrollProxy, {
      scrollTop(value) {
        return self.getScroll().scrollTop;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      }
    });


    let getRatio = (el: any) => window.innerHeight / (window.innerHeight + el.offsetHeight);

    gsap.utils.toArray("section").forEach((section: any, i: any) => {
      section.bg = section.querySelector(".bg");

      // Give the backgrounds some random images
      section.bg.style.backgroundImage = `url(https://picsum.photos/1600/800?random=${i})`;

      // the first image (i === 0) should be handled differently because it should start at the very top.
      // use function-based values in order to keep things responsive
      gsap.fromTo(section.bg, {
        backgroundPosition: () => i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px"
      }, {
        backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          scroller: 'ion-content',
          // start: () => i ? "top bottom" : "bototm bottom",
          start: () => "bototm bottom",
          end: "bottom top",
          scrub: true,
          // pin: '.pin1',
          invalidateOnRefresh: true // to make it responsive
        }
      });

    });


    gsap.to(".parallax", {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: ".parallax",
        scroller: 'ion-content',
        scrub: true
      },
    });

    gsap.to(".card", {
      // yPercent: -50,
      ease: "none",
      x: -100,
      duration: 1,
      rotate: 360,
      scrollTrigger: {
        trigger: ".card",
        toggleActions: "play pause resume reverse",
        start: "top center",
        scroller: 'ion-content',
        scrub: true
      },
    });

    gsap.to(".green", {
      scrollTrigger: {
        trigger: ".green",
        toggleActions: "play none none reverse",
        scroller: 'ion-content',
        scrub: true
      },
      rotation: 360, x: 100,
      duration: 1
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
