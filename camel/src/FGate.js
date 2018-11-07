import { html, render } from './lit-html/lit-html.js';

export default class FGate extends HTMLElement { 

    constructor() { 
        super();
        this.root = this.attachShadow({ 'mode': 'open' });
        //setInterval(_=>this.hugo(),500);
        this.renderTemplate();
    }

    renderTemplate() { 
        
        const customMessage = "Select an image"
        const template = html`  
        
        <style>
        
        h2{
            font-size: 1em;
            padding: 8px 16px;
            margin:0;
        }

        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;            
        }

        li a {
            display: block;
            color: #000;
            padding: 8px 16px;
            text-decoration: none;
        }
        
        /* Change the link color on hover */
        li a:hover {
            background-color:var(--fmg-gray, #555);
            color: var(--fmg-white,white);
        }        
        
        .container {
            margin:0;
            padding:0;
            width:33%;
        }

        .sectionTitle {
            color: var( --fmg-white, black);
            background-color: var(--fmg-darkgray,#ccc);
        }
        </style>
        <section class="container">
            <h2 class="sectionTitle"> ${customMessage}</h2>
            <ul>
                <li> <a href="#"> Image 1</a></li>
                <li><a href="#"> Image 2</a></li>
                <li><a href="#"> Image 3</a></li>
            </ul>
        </section>
            `;
        render(template, this.root);
    }

}

customElements.define("f-gate",FGate);