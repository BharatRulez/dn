import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiService  } from "./services/api.service";
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { AppRoutingModule } from './/app-routing.module';
import { LandingModule } from './landing/landing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RestangularModule } from "ngx-restangular";
import { HttpClient } from "@angular/common/http";
import { environment } from '../environments/environment';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function RestangularConfigFactory(RestangularProvider) {
 
  RestangularProvider.setBaseUrl(environment.DOMAIN.URL);
  RestangularProvider.addRequestInterceptor(function (elem, operation, url) {
    console.log(elem, operation, url)
    // if (exclude.indexOf(url) == -1) {
    //   DashboardComponent.requests.next(true)
    // }

    return elem
  })
  RestangularProvider.addResponseInterceptor(function (data, operation, what, url, response) {
    // if (exclude.indexOf(url) == -1) {
    //   DashboardComponent.requests.next(false)
    // }
     return data
  })
  RestangularProvider.addErrorInterceptor(function (data) {
    //DashboardComponent.requests.next(false)
   // let snack = new snackBarService()
   // snack.showSnackBar("Error occured, please try again.", true)
    return data
  })
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RestangularModule.forRoot(RestangularConfigFactory),
    BrowserModule,
    UiModule,
    AppRoutingModule,
    LandingModule,
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
