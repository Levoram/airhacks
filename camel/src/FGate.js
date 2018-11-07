const basics = (first, second) => { 
    console.log(first, second);
    return "heute nicht";
}
export default class FGate extends HTMLElement { 

    constructor() { 
        super();
        this.root = this.attachShadow({'mode':'open'});
    }

    connectedCallback() { 
        const age = `<img src="not exist" onerror="console.log('hey joe')"/>`;
        this.root.innerHTML = `  
        <style>
        h2{
            font-size: 2em;
        }

        </style>
        
        <h2> what a nice gate ${age}</h2 >
            `;
    }

}

customElements.define("f-gate",FGate);