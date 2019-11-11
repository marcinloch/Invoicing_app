import { Component } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent  {

  email: string;
  tel: string;
  textMessage: string;

  send() {
    let msg: SendMessage = ({
      Email: this.email,
      Phone: this.tel,
      Message: this.textMessage
    })

    this.email = '';
    this.tel = '';
    this.textMessage = '';

    console.log(msg);
  }
}
interface SendMessage{
  Email: string;
  Phone?: string;
  Message: string;
}

