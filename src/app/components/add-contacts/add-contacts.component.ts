import { Component, OnInit,ApplicationRef } from '@angular/core';
declare var navigator; 

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.scss']
})
export class AddContactsComponent implements OnInit {

  addContactTgl = false;
  contacts = [1,2,3]
  constructor(private app:ApplicationRef) { }

  ngOnInit() {
       navigator.contactsPhoneNumbers.list((contacts) =>{
        //TODO... requisicao com numeros de contataos...retorno ser

        //contacts: array de retorno da busca por telefone...
        contacts.forEach(element => {
          element['added'] = false;
          
        }); 
        
        this.contacts = contacts;
        this.app.tick();
      }) 
  }

  addContact(contact){
    contact.added = !contact.added;
    this.app.tick();

    //TODO... serviço para adicionar indivisualmente o contato
  }

}
