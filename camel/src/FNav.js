export default class FNav extends HTMLElement {


    connectedCallback() {
        this.loadFromServer();
    }

    display(serverobject) { 
        const { message } = serverobject;
        this.innerHTML = `
            <h3>${message}</h3>
        `;
    }


    loadFromServer() { 
        fetch('gates.json').
            then(r => r.json()).
            then(json => this.display(json));
    }
}

customElements.define("f-nav", FNav);