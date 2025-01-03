import { api, LightningElement } from 'lwc';

export default class ProductInfo extends LightningElement {

    @api id;
    @api name;

    connectedCallback(){

        this.name = 'NELSOOON';

        let eventParams = {
            exemplo : 'testeeee'
        };

        let eventoExemplo = new CustomEvent('eventoexemplo', {
            detail : eventParams
        });

        this.dispatchEvent(eventoExemplo);
    }
}