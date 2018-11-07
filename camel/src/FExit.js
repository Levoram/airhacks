export default class FExit extends HTMLElement { 

    connectedCallback() { 
        this.innerText = "what a nice exit";
    }

}

customElements.define("f-exit",FExit);