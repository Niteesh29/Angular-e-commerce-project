import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { Signup } from '../data-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit {
  showLogin = false
  authError = ''
  constructor(
    private seller: SellerService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.seller.reloadSeller()
  }

  Signup(data:Signup):void
  {
    
    this.seller.userSignUp(data)
   
  } 
  login(data:Signup):void
  {
    this.authError = ""
    this.seller.userLogin(data)
    this.seller.isLoginError.subscribe(isError=> 
    {
      if(isError)
       this.authError = 'Email or password is not Correct'
    }
    )
   
  } 

  openLogin()
  {
     this.showLogin = true
  }

  openSignUp()
  {
    this.showLogin = false
  }
  

}
