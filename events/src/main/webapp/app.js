class FMGListener { 

    constructor() { 
        this.output = document.querySelector("output");
        this.socket = new WebSocket('ws://localhost:8080/events/time');
        this.socket.onmessage = e => this.onNewMessage(e);
    }

    onNewMessage( {data}) {
        this.output.innerText = data;
        console.log(data);
    }

}

new FMGListener();