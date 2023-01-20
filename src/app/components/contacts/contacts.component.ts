import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit {

  private contacts = require('../../../assets/data/contact.json');

  constructor() { }

  ngOnInit(): void {
  }

}
