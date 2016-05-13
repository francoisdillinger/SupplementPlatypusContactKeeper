import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';

export default class MyContactsRepository extends BaseRepository {
             contactList: any = [];
             
             createNewContact(person:any, phone:any, mail:any){
                 let newContact = {name: person, num: phone, email: mail}
                 let payload = this.contactList;
                 payload.push(newContact);
                 console.log(payload);
             }
             getContactDetails(person:any){
                 let theContact = person;
                 for(let i = 0; i < this.contactList.length; i++){
                     let singleContact = this.contactList[i];
                     if(singleContact.name = theContact){
                         console.log(singleContact[i])
                         return singleContact[i];
                     }
                 }
                 
             }
}

register.injectable('mycontacts-repo', MyContactsRepository);
