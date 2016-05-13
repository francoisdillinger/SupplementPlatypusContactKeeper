import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import ContactViewControl from '../contact/contact.vc';
import MyContactsRepository from '../../repositories/mycontacts/mycontacts.repo'

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');
    constructor(private contacts: MyContactsRepository){
        super();
    }
    // Setting contexts
    context: any = {
        name: '',
        num: '',
        email: '',
        eachContact: this.contacts.contactList
    };
    // Simple form validation. I was using an actual form but ran into issues with it and
    // the Platypus framework submitting it multiple times when any button inside the 'Plat-Submit'
    // area of the HTML was clicked. 
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
    // This is for getting the details of an individual contact. Similar to the issue I had 
    // above with the form element and platypus, unlike my angular lab I couldnt use a 
    // link to submit and transfer views, clicking a link seemed to actually navigate to another
    // page instead of simply switching views, since it was actually navigating to another page 
    // it seemed to act as if I refreshed the page and the array inside my repository would be 
    // reset to empty. So I used a plat-tap inside a h3 element, so it mimics the effect I had 
    // in my angular lab.
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