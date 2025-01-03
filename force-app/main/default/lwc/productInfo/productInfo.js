import { api, LightningElement } from 'lwc';

export default class ProductInfo extends LightningElement {

    @api userId;
    @api userName;

    connectedCallback(){
        let eventParams = {
            exemplo : 'testeeee'
        };

        let eventoExemplo = new CustomEvent('eventoexemplo', {
            detail : eventParams
        });

        this.dispatchEvent(eventoExemplo);
    }
}