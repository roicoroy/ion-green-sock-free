import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'green-sock',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'green-sock',
    loadComponent: () => import('./green-sock/green-sock.page').then( m => m.GreenSockPage)
  },
  {
    path: 'parallax-header',
    loadComponent: () => import('./parallax-header/parallax-header.page').then( m => m.ParallaxHeaderPage)
  },
  {
    path: 'sliding-scroll',
    loadComponent: () => import('./sliding-scroll/sliding-scroll.page').then( m => m.SlidingScrollPage)
  },
  {
    path: 'reveal-navigation',
    loadComponent: () => import('./reveal-navigation/reveal-navigation.page').then( m => m.RevealNavigationPage)
  },
  {
    path: 'snaping-navigation',
    loadComponent: () => import('./snaping-navigation/snaping-navigation.page').then( m => m.SnapingNavigationPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'creative-animation',
    loadComponent: () => import('./creative-animation/creative-animation.page').then( m => m.CreativeAnimationPage)
  },
];
