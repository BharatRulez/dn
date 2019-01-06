import { Injectable } from '@angular/core';
import { Restangular } from "ngx-restangular";
import { calcBindingFlags } from '@angular/core/src/view/util';
import { constants } from "./constants.service";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private restangular : Restangular) { }


  getAllHomePageData(cb){
    let homePageData = this.restangular.one(constants.APIS.GET_HOME_USER);
    console.log(homePageData)
    homePageData.post('',{
      "id":"00007503-4b20-41b3-b2b4-ea5bde45e455",
      "androidVersion":8
    },'',{
      'deviceType': 'Android',
			'version': '7'
    }
    ).toPromise().then(res => {
      res = res.plain()
      //console.log(res,"23")
      if(cb){
        cb(null,res)
      }
    },err => {
           if(err)
           cb(err,null)
      }
    )
    }

    getNewArrivalsData(cb){
      let newArrivals = this.restangular.one(constants.APIS.GET_HOME_NEW_ARRIVALS);
      newArrivals.post('',{
        "userId" : "00007503-4b20-41b3-b2b4-ea5bde45e455",
        },'',{
          'deviceType' : 'Android',
            'version' : '7'
          }
      ).toPromise().then(res => {
        res = res.plain()
        if(cb)
        cb(null,res)
      },err => {
        if(err)
        cb(err,null)
      })
    }
}
