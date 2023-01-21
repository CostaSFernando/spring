import { Component, OnInit } from '@angular/core';

const contacts = require('../../../assets/data/contact.json');
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit {

  listContacts = contacts.contacts

  constructor() { }

  ngOnInit(): void {
  }

}
