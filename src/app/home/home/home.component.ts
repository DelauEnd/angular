import { Component, OnInit } from '@angular/core';
import { UserForAuthenticationDto } from 'src/app/shared/interfaces/requestInterfaces/otherInterfaces';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  testAuth(){
    let authInfo: UserForAuthenticationDto = {
      password: "username",
      userName: "username"
    }

    this.auth.login(authInfo).subscribe(    
      (auth) => {
        console.log("auth ok", auth)
      },
      (error) => console.error("auth error", error)
    );
  }
}
