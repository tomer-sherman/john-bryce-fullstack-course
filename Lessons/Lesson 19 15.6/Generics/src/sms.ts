// This is a generic class
         // Can add here a bunch of types.
export class Sms<TMessage> {
    public phone: string;
    public message: TMessage;

    public constructor(phone: string, message: TMessage) {
        this.phone = phone;
        this.message = message;
    }

    public send():void{
        document.body.innerHTML+= `Sending ${this.message} to phone: ${this.phone}<br>`
    }


}