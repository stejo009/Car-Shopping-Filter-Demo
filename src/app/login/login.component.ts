import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
rname="";
rmob="";
rusername="";
rpass="";

  name = "";
  uname = "";
  pass = "";
  upass = "";
  username = "";
  password = "";
  status = "";
  state = false;
  car="";
user ="";
pswd = "";
wait = false;

  constructor(private http: HttpClient){

  }
  OnInit(){
    

  }
  
  onuserdata(){

    this.wait = true;
    setTimeout(() => {
      this.wait = false;
    }, 500);
    
    this.http.get('http://localhost:3000/login').subscribe((data) => {
      let json:any = data;
      console.log(json.username);
      this.username = json.username;
      this.password = json.password;

      this.uname = this.name;
      this.upass = this.pass;
      
     
      

      if(this.uname==json.username && this.upass==json.password){
        this.status = "login successfully";
        this.state = true;
      }
      else{
        this.status = "Login failed";
      }      
    });
    
  }

  onRegister(){
   
   
    const req = this.http.post('http://localhost:3000/userdata', {
      
      name:this.rname,
      ussername: this.rusername,
      password: this.rpass,
      mobno: this.rmob
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
    
    
    console.log("submit button clicked");
   
  }
  
}
