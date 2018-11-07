import { html, render } from './lit-html/lit-html.js';

export default class FGate extends HTMLElement { 

    constructor() { 
        super();
        this.root = this.attachShadow({ 'mode': 'open' });
        setInterval(_=>this.hugo(),500);
    }

    hugo() { 
        const age = `<img src="not exist" onerror="console.log('hey joe')"/>`;
        //const age = 21;
        const template = html`  
        
        <style>
        h2{
            font-size: 2em;
        }

        </style>
        
        <h2> what a nice gate ${age}</h2 >
            `;
        render(template, this.root);
    }

}

customElements.define("f-gate",FGate);