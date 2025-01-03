import { api, track, LightningElement } from 'lwc';
import getCurrentUserInfo from '@salesforce/apex/UserInformation.getCurrentUserInfo';

export default class MotherOrderScreen extends LightningElement {

    @api userId;
    @api userName;
    showMother = true;
    showSon = false;
    returnName;

    connectedCallback(){
        getCurrentUserInfo().then(result => {
            this.userId = result.Id;
            this.userName = result.Name;
        });
    }

    handleEventoExemplo(event){
        this.returnName = event.detail.exemplo;
    }

    showProductInfo(){
        this.showSon = !this.showSon;
        this.showMother = !this.showMother;
    }

}