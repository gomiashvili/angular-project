import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { MenuComponent } from './components/menu/menu.component';
import { AccountComponent } from './components/account/account.component';
import { HomeComponent } from './components/home/home.component';
import { IntroComponent } from './components/intro/intro.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { FeaturesComponent } from './components/features/features.component';
import { PlanComponent } from './components/plan/plan.component';
import { GlobalNetworksComponent } from './components/global-networks/global-networks.component';
import { SponsoredComponent } from './components/sponsored/sponsored.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { FooterMenuComponent } from './components/footer-menu/footer-menu.component';
import { SocialIconsComponent } from './components/social-icons/social-icons.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    MenuComponent,
    AccountComponent,
    HomeComponent,
    IntroComponent,
    StatisticsComponent,
    FeaturesComponent,
    PlanComponent,
    GlobalNetworksComponent,
    SponsoredComponent,
    TestimonialsComponent,
    SubscribeComponent,
    FooterMenuComponent,
    SocialIconsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
