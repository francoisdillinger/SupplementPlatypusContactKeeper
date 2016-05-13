import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';

export default class MyContactsRepository extends BaseRepository {
            // Setting initial values here
            contactList: any = [];
            newContact: any = {};
            
            //  This function creates a new contact and pushes it to the contactList array.
            //  I have it console logging for debugging purposes.
             createNewContact(person:any, phone:any, mail:any){
                 this.newContact = {name: person, num: phone, email: mail}
                 this.contactList.push(this.newContact);
                 console.log(this.contactList);
             }
             
            //  This function loops through the contactList array and finds the corresponding 
            //  object, then sends the entire object to the contact view so the details can be 
            //  displayed.
             getContactDetails(person:any){
                 let theContact = person;
                 for(let i = 0; i < this.contactList.length; i++){
                     let singleContact = this.contactList[i];
                     if(singleContact.name === theContact){
                         console.log(singleContact)
                         return singleContact;
                     }
                 }   
             }
}

register.injectable('mycontacts-repo', MyContactsRepository);
