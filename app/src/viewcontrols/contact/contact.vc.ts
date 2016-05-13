import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import HomeViewControl from '../home/home.vc'
import MyContactsRepository from '../../repositories/mycontacts/mycontacts.repo';


export default class ContactViewControl extends BaseViewControl {
    templateString: string = require('./contact.vc.html');
    constructor(private contacts: MyContactsRepository){
        super();
    }
    context: any = {
        eachContact:''
    };
    
    
    navigatedTo(params:any){
                 let theContact = params.person;
                 this.context.eachContact = this.contacts.getContactDetails(theContact);
    }
    returnHome(){
        this.navigator.navigate(HomeViewControl);
    }
}

register.viewControl('contact-vc', ContactViewControl, [MyContactsRepository]);
