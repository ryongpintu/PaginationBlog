import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { Routes, RouterModule } from '@angular/router'
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { HttpClientModule } from  '@angular/common/http'


const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'blogs', component: BlogListComponent, canActivateChild: [AuthGuard], children: [
    { path: 'post',  component: BlogItemComponent},
    { path: 'edit/:id', component: BlogItemComponent }
  ] }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogListComponent,
    BlogItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
