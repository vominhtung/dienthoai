let Mobile = function (battery, inboxMemory, composeMemory,sentMemory,status) {
    this.battery = battery;
    this.inboxMemory = inboxMemory;
    this.composeMemory=composeMemory;
    this.sentMemory = sentMemory;
    this.status = status;

    this.isOn = function () {
        return this.status ? true : false;
    }
    this.turnOn = function () {
        if (!this.isOn()) {
            if (this.battery > 0 && this.battery <= 100) {
                this.battery--;
                this.status = true;
            }
        }
    }
    this.turnOff = function () {
        if (this.isOn()) {
            if (this.battery > 0 && this.battery <= 100) {
                this.battery--;
                this.status = false;
            }

        }

    }
    this.changBattery = function () {
        if (this.battery < 100)
            this.battery++;
    }
    this.composeMessage = function (message) {
        if (this.isOn()) {
            this.composeMemory = message;
            this.battery--;
        }
    }
    this.sendMessage =function (toMobile){
        if (this.isOn()) {
            this.battery--;
            this.sentMemory = this.composeMemory;
            toMobile.inboxMemory = this.composeMemory;
        }
    }
    this.receiveMessage = function ( ){
        if (this.isOn()){
            this.battery--;
            return "you're have a new message!";
        }
    }
    this.readMessage = function (){
        if (this.isOn()) {
            return this.inboxMemory;
        }
    }
}



function main () {
    let nokia = new Mobile(80, '','','', true);
    let iphone= new Mobile(90, '','','', true);
    let  composingMessage = prompt( "Enter your message:");
    nokia.composeMessage(composingMessage);
    nokia.sendMessage(iphone);
    let isCheck = iphone.receiveMessage();
    if (isCheck !=""){
        alert("Message is: " + iphone.readMessage());
    }
}
main();
