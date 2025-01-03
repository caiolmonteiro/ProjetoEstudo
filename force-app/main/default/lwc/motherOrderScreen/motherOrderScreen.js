import { api, track, LightningElement } from 'lwc';
import getCurrentUserInfo from '@salesforce/apex/UserInformation.getCurrentUserInfo';

export default class MotherOrderScreen extends LightningElement {

    @api userId;
    @api userName;
    showSon = false;
    returnName;

    connectedCallback(){
        getCurrentUserInfo().then(result => {
            this.userId = result.Id;
            this.userName = result.Name;
            this.showSon = true;
        });
    }

    handleEventoExemplo(event){
        this.returnName = event.detail.exemplo;
    }

}