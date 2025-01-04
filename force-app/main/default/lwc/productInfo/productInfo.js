import { api, LightningElement } from 'lwc';
import LogoGreenByte from "@salesforce/resourceUrl/LogoGreenByte";

export default class ProductInfo extends LightningElement {

    @api id;
    @api name;
    exemplo = LogoGreenByte;

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