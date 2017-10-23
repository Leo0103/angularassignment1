import { Component } from '@angular/core';

@Component({
    selector: 'app-userInput',
    templateUrl: './userInput.component.html',
    styleUrls: ['./userInput.component.css']
})

export class UserComponent {
    userName = "";
    allowNewUser = false;


    
    // checkForUsername(){
    //     if (this.userName.length > 0) {
    //         this.allowNewUser = true;
    //     }else{
    //         this.allowNewUser = false;
    //     }
    // }

    onCreateUser() {
        this.userName = '';
        
    }



}

