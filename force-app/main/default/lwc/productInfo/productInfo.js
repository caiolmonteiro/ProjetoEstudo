import { api, LightningElement } from 'lwc';

export default class ProductInfo extends LightningElement {

    @api id;
    @api name;

    connectedCallback(){

        console.log(this.name)

        this.name = 'NELSOOON';

        let eventParams = {
            exemplo : 'testeeee',
            parametro2 : 'teste'
        };

        let eventoExemplo = new CustomEvent('eventoexemplo', {
            detail : eventParams
        });

        this.dispatchEvent(eventoExemplo);
    }
}