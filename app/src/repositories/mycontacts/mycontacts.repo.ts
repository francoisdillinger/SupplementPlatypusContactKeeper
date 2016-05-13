import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';

export default class MyContactsRepository extends BaseRepository {
            //  contactList: any = [];
            contactList: any = [];
            newContact: any = {};
             
             createNewContact(person:any, phone:any, mail:any){
                 this.newContact = {name: person, num: phone, email: mail}
                 this.contactList.push(this.newContact);
                 console.log(this.contactList);
             }
             getContactDetails(person:any){
                 let theContact = person;
                 for(let i = 0; i < this.contactList.length; i++){
                     let singleContact = this.contactList[i];
                     if(singleContact.name === theContact){
                         console.log(singleContact)
                         return singleContact;
                     }
                    // console.log(singleContact);
                 }
                 
             }
}

register.injectable('mycontacts-repo', MyContactsRepository);

// for(var i = 0; i < contactArray.length; i++){
//         var singleContact = contactArray[i];
//         if(singleContact.name === theName){
//             person = singleContact;
//             break;
//         }
//     }