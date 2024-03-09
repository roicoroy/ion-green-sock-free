import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ScrollDetail } from '@ionic/angular';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: 'app-reveal-navigation',
  templateUrl: './reveal-navigation.page.html',
  styleUrls: ['./reveal-navigation.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RevealNavigationPage implements OnInit {

  scroll: any;

  scrollProxy: any;

  constructor() { }

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger, SplitText);
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

    gsap.to(".yoyo ion-img", {
      scrollTrigger: ".yoyo", 
      scale: 2, 
      repeat: -1, 
      yoyo: true, 
      ease: "power2"
    });

    function animateFrom(elem: any, direction?: any) {
      direction = direction || 1;
      var x = 0, y = direction * 100;
      if (elem.classList.contains("gs_reveal_fromLeft")) {
        x = -100;
        y = 0;
      } else if (elem.classList.contains("gs_reveal_fromRight")) {
        x = 100;
        y = 0;
      }
      elem.style.transform = "translate(" + x + "px, " + y + "px)";
      elem.style.opacity = "0";
      gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto"
      });
    }

    function hide(elem: any) {
      gsap.set(elem, { autoAlpha: 0 });
    }

    gsap.utils.toArray(".gs_reveal").forEach(function (elem: any) {
      hide(elem);
      ScrollTrigger.create({
        trigger: elem,
        markers: false,
        scroller: "ion-content",
        scrub: true,
        onEnter: function () { animateFrom(elem) },
        onEnterBack: function () { animateFrom(elem, -1) },
        onLeave: function () { hide(elem) } // assure that the element is hidden when scrolled into view
      });
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
