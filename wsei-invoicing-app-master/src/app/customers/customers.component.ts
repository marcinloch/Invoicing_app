import { Component } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {

  name: string;
  nip: string;
  regon: string;
  locality: string;
  street: string;
  houseNumber: string;
  postcode: string;
  additional: string;

  con: Consumer;

  consumers: Array<Consumer> = [];

  addConsumer() {
    this.con = ({
      name: this.name,
      nip: this.nip,
      regon: this.regon,
      locality: this.locality,
      street: this.street,
      houseNumber: this.houseNumber,
      postcode: this.postcode,
      additional: this.additional,
    })

      this.consumers.push(this.con);

    this.name = '';
    this.nip = '';
    this.regon = '';
    this.locality = '';
    this.street = '';
    this.houseNumber = '';
    this.postcode = '';
    this.additional = '';

    console.log(this.consumers);

  }

  removePosition(con: Consumer){
    this.consumers = this.consumers.filter(e => e !== con);
  }

}
export interface Consumer {
  name: string;
  nip: string;
  regon: string;
  locality: string;
  street: string;
  houseNumber: string;
  postcode: string;
  additional?: string;
}

