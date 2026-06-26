// This is a generic class
// Can add here a bunch of types.
export class Sms {
    phone;
    message;
    constructor(phone, message) {
        this.phone = phone;
        this.message = message;
    }
    send() {
        document.body.innerHTML += `Sending ${this.message} to phone: ${this.phone}<br>`;
    }
}
