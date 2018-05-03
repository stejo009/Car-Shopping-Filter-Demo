import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  max = 10000;
  min = 0;
  step = 1;
  value = 0;
  vertical = false;

par="";
name="";
cars = [];
model = [];
allCars=[];
carcolordata = [];
dashboardrendering = true;
carbtn = [
  { name:'BMW',path:'https://buyersguide.caranddriver.com/media/assets/submodel/280_8086.jpg'},
  { name: 'Buick', path:'http://st.motortrend.com/uploads/sites/10/2016/05/2016-buick-cascada-premium-convertible-angular-front.png'},
  {name:  'Mazda', path:'https://www.cstatic-images.com/car-pictures/xl/USC70MAC141C021001.png' },
  { name:'Chevrolet',path:'https://images0.cardekho.com/images/car-images/320x224/Chevrolet/Chevrolet-Cruze/047.jpg' },
  { name:   'Wolks wagon', path:'https://auto.ndtvimg.com/car-images/big/volkswagen/jetta/volkswagen-jetta.jpg?v=7'},
  { name: 'Jaguar', path:'https://www.bookyourcar.co.in/uploads/models/186/jaguar-f-pace.jpg'},
  { name: 'Fox Wagon', path:'http://ppsmotors.in/wp-content/uploads/2016/10/New-Vento.png'},
  { name: 'Ford', path:'http://blog.ecardlr.com/model/logo/1_New-Endeavour-2016.jpg'},
  { name: 'Hammer', path:'http://www.crazeforcars.com/wp-content/uploads/2011/06/hummer.gif'},
  { name: 'Rang Royal ', path:'https://img0.gaadicdn.com/images/car-images/large/RollsRoyce/rolls_royce_phantom/Midnight-Blue.jpg'} , 
  { name: 'Sedan ', path:'https://www.bmw.in/content/dam/bmw/common/all-models/5-series/sedan/2016/Model%20Card/bmw-modelfinder-g30-posi-stage2-890x501.png'},
  { name: 'Fortuner', path:'http://www.shtcindia.com/images/car/13.jpg'}   
];
carcolorbtn = [
  {color : 'red', isActive: false},
  {color : 'green', isActive: false} ,
  {color : 'black', isActive: false},
  {color : 'yellow', isActive: false},
  {color : 'blue', isActive: false},
];
cardetialsort = true;

isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;



  constructor(private http: HttpClient, private _formBuilder: FormBuilder){
    this.http.get('http://localhost:3000/cars').subscribe((data) => {
      let json:any = data;
      this.allCars = json;
      });
  }

  ngOnInit():void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

  }


  public gerFilteredCars(filter:string, filter2:string,filter3:string) {
    this.cardetialsort = true;
    this.cars=[];
    this.carcolordata = [];
    this.dashboardrendering = false;
      for(let i = 0; i < Object.keys(this.allCars).length; i++) {
        let aCar = this.allCars[i];
        console.log(aCar);  

        if(aCar.name == filter || filter2 || filter3) {
          this.cars.push(aCar);
         
        }
      }
  }

  public getFilteredCars(carColor:any) {
    this.cardetialsort = false;
    console.log('getFilteredCars clicked : carColor : ' + carColor);
    if(carColor.isActive) {
      carColor.isActive = false;
      this.removeCars(carColor.color);
      return;
    }
    carColor.isActive=true;
    this.addCars(carColor.color);
      
  }

  public addCars(carColor) {
    for(let i = 0; i < Object.keys(this.cars).length; i++) {
      let aCar = this.cars[i]; 
      

      if(aCar.color == carColor) {
        this.carcolordata.push(aCar);
        console.log("testing" + aCar);
      }
    }
  }
 
  public removeCars(carColor) {
    for(let i = 0; i < Object.keys(this.cars).length; i++) {
      let aCar = this.cars[i]; 

      if(aCar.color == carColor) {
        var index = this.carcolordata.indexOf(aCar);
        if (index !== -1) this.carcolordata.splice(index, 1);
        console.log("testing" + aCar);
      }

    }
  }

}