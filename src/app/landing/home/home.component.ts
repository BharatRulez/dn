import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from "../../services/api.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [NgbCarouselConfig] 
})
export class HomeComponent implements OnInit {
    constructor(config: NgbCarouselConfig,
              private api: ApiService,) {
        config.interval = 10000;
        config.wrap = false;
        config.keyboard = false;
        config.pauseOnHover = false;
    }
    images;
    flashSale;
    newArrivals;
    productCategory;

    ngOnInit() {
        this.api.getAllHomePageData((err,res) =>{
             if(err)
             return
             else{
             this.images = res.data.banner
             this.flashSale = res.data.flashProductList
             this.productCategory = res.data.productCategory;
             }   
             console.log(this.images)
             console.log(res)
        })
        this.api.getNewArrivalsData((err,res) => {
            if(err)
            return
            else
            this.newArrivals = res.newArrivals;
        })
    }
  
  
}
