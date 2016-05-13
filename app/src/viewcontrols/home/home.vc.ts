import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import ContactViewControl from '../contact/contact.vc';
import MyContactsRepository from '../../repositories/mycontacts/mycontacts.repo'

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');
    constructor(private contacts: MyContactsRepository){
        super();
    }

    context: any = {
        name: '',
        num: '',
        email: '',
        eachContact: this.contacts.contactList
    };
    
    addThisContact(){
        let person = this.context.name;
        let phone = this.context.num;
        let mail = this.context.email;
        
        this.contacts.createNewContact(person,phone,mail);
        
        
        
        
        // if(person == undefined || person == ''){
        //     alert('Type a name');
        // }
        // else{
        //     console.log(person, phone, mail);
        //     this.navigator.navigate(ContactViewControl,{
        //         // Here I am passing the input value as a parameter
        //         parameters:{
        //             person: person,
        //         }
        //     });
        // }
    }
    getDeets(person:any){
        this.contacts.getContactDetails(person);
    }
}

register.viewControl('home-vc', HomeViewControl, [MyContactsRepository]);
