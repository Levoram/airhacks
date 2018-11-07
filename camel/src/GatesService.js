export default class GatesService{
    
    async loadFromServer(callback) {
        const response = await fetch('gates.json');
        const json = await response.json();
        callback(json);
    }
}