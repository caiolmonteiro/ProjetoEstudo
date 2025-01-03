import { api, LightningElement } from 'lwc';
import UserInformation from '@salesforce/apex/UserInformation.getCurrentUserInfo';

export default class MotherOrderScreen extends LightningElement {

    @api userId;
    @api userName;
    @api returnName;

    async connectedCallback(){
        UserInformation().then(result => {
            this.userId = result.Id;
            this.userName = result.Name;
        });
    }

    handleEventoExemplo(event){
        this.returnName = event.detail.exemplo;
    }

}