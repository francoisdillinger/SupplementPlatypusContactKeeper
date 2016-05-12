import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import ContactViewControl from '../contact/contact.vc'

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {
        name: '',
        num: '',
        email: ''
    };
    
    addThisContact(){
        let person = this.context.name;
        let phone = this.context.num;
        let mail = this.context.email;
        
        if(person == undefined || person == ''){
            alert('Type a name');
        }
        else{
            console.log(person, phone, mail);
            // console.log(person);
            // console.log(person);
            // this.navigator.navigate(ContactViewControl,{
            //     // Here I am passing the input value as a parameter
            //     parameters:{
            //         theinput: this.context.name,
            //     }
            // });
        }
    }
}

register.viewControl('home-vc', HomeViewControl);
