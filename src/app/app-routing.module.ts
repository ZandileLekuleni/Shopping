import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  // { path: 'add-item', loadChildren: './add-item/add-item.module#additemPageModule' },
  { path: 'edit', loadChildren: './page/edit/edit.module#EditPageModule' },
  { path: 'add', loadChildren: './page/add/add.module#AddPageModule' },
 
  { path: 'edit', loadChildren: './page/edit/edit.module#EditPageModule' },
  { path: 'delete', loadChildren: './page/delete/delete.module#DeletePageModule' },
  { path: 'item', loadChildren: './page/item/item.module#ItemPageModule' },
  { path: 'register', loadChildren: './page/register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './page/login/login.module#LoginPageModule' },
  { path: 'phone', loadChildren: './page/phone/phone.module#PhonePageModule' },
  { path: 'phone', loadChildren: './page/phone/phone.module#PhonePageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
