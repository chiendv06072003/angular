import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './componment/product/product.component';
import { ProductAddComponent } from './componment/product-add/product-add.component';
import { ProductEditComponent } from './componment/product-edit/product-edit.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductFormComponent } from './componment/product-form/product-form.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { HeaderComponent } from './componment/header/header.component';
import { FooterComponent } from './componment/footer/footer.component';
import { NavComponent } from './componment/nav/nav.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SignupComponent } from './pages/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    ProductComponent,
    ProductAddComponent,
    ProductEditComponent,
    AboutComponent,
    ContactComponent,
    BaseLayoutComponent,
    AdminLayoutComponent,
    HomePageComponent,
    ProductFormComponent,
    ProductPageComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    DashboardComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
