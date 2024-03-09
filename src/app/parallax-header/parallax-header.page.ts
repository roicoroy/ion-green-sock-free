// https://codepen.io/GreenSock/pen/OJyPmgX
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ScrollDetail } from '@ionic/angular';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-parallax-header',
  templateUrl: './parallax-header.page.html',
  styleUrls: ['./parallax-header.page.scss'],
  standalone: true,
  imports: [
    IonicModule, 
    CommonModule,
     FormsModule,
     RouterLink
    ]
})
export class ParallaxHeaderPage implements OnInit {
  scroll: any;

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    const scrollProxy = document.getElementsByTagName('ion-content').item(0)
    const self = this;

    ScrollTrigger.scrollerProxy(scrollProxy, {
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
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
        scroller: 'ion-content'
      }
    });

    gsap.utils.toArray(".parallax").forEach((layer: any) => {
      const depth = layer.dataset.depth;
      const movement = -(layer.offsetHeight * depth)
      tl.to(layer, { y: movement, ease: "none" }, 0)
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
