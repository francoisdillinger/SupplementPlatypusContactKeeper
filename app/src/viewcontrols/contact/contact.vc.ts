import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import HomeViewControl from '../home/home.vc'
import MyContactsRepository from '../../repositories/mycontacts/mycontacts.repo';


export default class ContactViewControl extends BaseViewControl {
    templateString: string = require('./contact.vc.html');
    constructor(private contacts: MyContactsRepository){
        super();
    }
    // Setting context values
    context: any = {
        eachContact:''
    };
    
    // This pulls the route parameter and sends it to the repository to match it with an object in the array
    navigatedTo(params:any){
                 let theContact = params.person;
                 this.context.eachContact = this.contacts.getContactDetails(theContact);
    }
    // This simply returns to the Home view
    returnHome(){
        this.navigator.navigate(HomeViewControl);
    }
}

register.viewControl('contact-vc', ContactViewControl, [MyContactsRepository]);
