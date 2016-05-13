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
    ifInputIsValid(){
        let person = this.context.name;
        let phone = this.context.num;
        let mail = this.context.email;
        if(person,phone,mail == undefined || person,phone,mail == ''){
            alert('You need to enter in all contact information!');
        }
        else{
            this.contacts.createNewContact(person,phone,mail);
        }
    }
    getDeets(person:any){
        this.navigator.navigate(ContactViewControl,{
                // Here I am passing the input value as a parameter
                parameters:{
                    person: person,
                }
        });
    }
}

register.viewControl('home-vc', HomeViewControl, [MyContactsRepository]);