import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'green-sock', url: '/green-sock', icon: 'mail' },
    // { title: 'parallax-header', url: '/parallax-header', icon: 'paper-plane' },
    // { title: 'parallax-ballons', url: '/parallax-ballons', icon: 'heart' },
    { title: 'sliding-scroll', url: '/sliding-scroll', icon: 'archive' },
    // { title: 'reveal-navigation', url: '/reveal-navigation', icon: 'trash' },
    // { title: 'gsap-timeline', url: '/gsap-timeline', icon: 'warning' },
    // { title: 'snaping-navigation', url: '/snaping-navigation', icon: 'warning' },
    { title: 'creative-animation', url: '/creative-animation', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {
    addIcons({ mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }
}
