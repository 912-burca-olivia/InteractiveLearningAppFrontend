import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileBrowserComponent } from './file-browser/file-browser.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'browser', component: FileBrowserComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
