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
];
