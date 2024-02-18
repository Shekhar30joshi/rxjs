import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  productPurchased: string = ''

  constructor() { }


  ngOnInit(): void {
    this.getData()
    this.createPromise()
  }

  buyAsusLaptop() {
    return true
  }

  buyDellLaptop() {
    return false
  }

  //promise is used when data is about to come or not (uncertain)
  createPromise() {
    let createdPromise: any = new Promise((resolve, reject) => {

      if (this.buyAsusLaptop()) {
        setTimeout(() => {
          resolve('Asus purchased');
        }, 1000);
      } else if (this.buyDellLaptop()) {
        setTimeout(() => {
          resolve('Dell purchased');
        }, 1000);
      } else {
        reject('Laptop is not available');
      }
    })

    createdPromise.then((res: any) => {
      this.productPurchased = res
      console.log(res)
    }
    ).catch((err: any) => {
      this.productPurchased = err
      console.log(err)
    })
  }

  //async await is also used to asynchronous calls and with async keyword a function always return promise
  async getData() {
    let promise = new Promise((resolve,reject)=>{
          setTimeout(() => {
            resolve('data received')
          }, 2000);
        })
        
   let data = await promise
   console.log(data)
  }
}
