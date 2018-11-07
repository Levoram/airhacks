export default class FGate extends HTMLElement { 

    connectedCallback() { 
        this.innerText = "what a nice gate";
    }

}

customElements.define("f-gate",FGate);