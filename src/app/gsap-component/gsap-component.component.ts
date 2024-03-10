import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SectionComponent } from '../section/section.component';

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

  // @ViewChild('slideLeft') slideLeft!: ElementRef;

  // @ViewChild('pContent') pContent!: ElementRef;

  @ViewChild('layer1') layer1!: ElementRef;
  @ViewChild('layer2') layer2!: ElementRef;
  @ViewChild('layer3') layer3!: ElementRef;
  @ViewChild('layer4') layer4!: ElementRef;
  @ViewChild('layer5') layer5!: ElementRef;
  @ViewChild('layer6') layer6!: ElementRef;

  scroll!: any;

  controller!: any;

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    // console.log(this.layer1.nativeElement.attributes);
    this.layer1.nativeElement.attributes[1]['data-depth'] = '0.10';
    this.layer2.nativeElement.attributes[1]['data-depth'] = '0.20';
    this.layer3.nativeElement.attributes[1]['data-depth'] = '0.50';
    this.layer4.nativeElement.attributes[1]['data-depth'] = '0.80';
    this.layer5.nativeElement.attributes[1]['data-depth'] = '0.85';
    this.layer6.nativeElement.attributes[1]['data-depth'] = '1.00';
    // console.log(this.layer1);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
        scroller: '.gs-body'
      }
    });

    gsap.utils.toArray(".parallax").forEach((layer: any) => {
      // console.log(layer)
      // console.log(tl)
      const depth = layer.dataset.depth;
      const movement = -(layer.offsetHeight * depth)
      tl.to(layer, { y: movement, ease: "none" }, 0)
    });
  }

}
