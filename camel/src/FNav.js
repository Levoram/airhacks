export default class FNav extends HTMLElement{ 


    connectedCallback(){ 
        this.innerHTML = `
            <h3>hey joe</h3>
        `;
    }
}

customElements.define("f-nav", FNav);