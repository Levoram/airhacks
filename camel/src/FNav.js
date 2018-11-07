import FGate from "./FGate.js";
import FExit from "./FExit.js";

export default class FNav extends HTMLElement {

    constructor() { 
        super();
    }

    connectedCallback() {
        const links = this.querySelectorAll("a");
        links.forEach(l => l.onclick = e => this.navigate(e));
        links.forEach(l => console.log(l.hash));
        this.findOutputSlot();
        window.onhashchange = e => this.locationChanged(e);
    }


    locationChanged(e) { 
        console.log('location bar changed',e);
    }

    findOutputSlot() { 
        this.slotElement = document.querySelector("#slot");
    }

    clean() {
        while (this.slotElement.firstChild) { 
            this.slotElement.removeChild(this.slotElement.firstChild);
        }
    }


    navigate(e) { 
        const { hash } = e.target;
        const command = hash.substring(1);
        let view;
        switch (command) {
            case 'gate':
                this.clean();
                view = new FGate();
                this.slotElement.appendChild(view);
                break;
            case 'exit':
                this.clean();

                view = new FExit();
                this.slotElement.appendChild(view);
                break;
        }
    }



}

customElements.define("f-nav", FNav);