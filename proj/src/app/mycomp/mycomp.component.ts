import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mycomp',
  imports: [CommonModule,FormsModule],
  templateUrl: './mycomp.component.html',
  styleUrl: './mycomp.component.css'
})
export class MycompComponent {
username: string = ' ';
password:string = ' ';


// message: string ='Hello Angular One Way Binding';
// updateMessage()
// {
//  this.message = 'This Message is Updated!'
// }

// isButtonDisable: boolean = false;

// abc ="my text toolip";
// messages: string = 'Click the button two change this message';




login()
{
  if(this.username == "admin" && this.password == "aptech")
    {
      alert("Succesfully login")
    }
    else
    {
      console.log(this.username , this.password)
    }
}

// }

}
