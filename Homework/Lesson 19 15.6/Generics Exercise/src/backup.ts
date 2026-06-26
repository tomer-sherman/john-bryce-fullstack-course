export class Backup<T> {

    public subject: string;
    public value: T;

    public constructor(subject: string, value: T) {
        this.subject = subject;
        this.value = value;
    }


    isObject(): boolean {
        return typeof this.value === "object" && !(this.value instanceof Date);
    }

    displayObject(): void {
        document.body.innerHTML += `${this.subject}:  `
        for (const item in this.value) {
            document.body.innerHTML += `${this.value[item]} ,`
        }
        document.body.innerHTML += `<br>`
    }

    display(): void {
        if (this.isObject()) {
            this.displayObject();
        }
        else {
            document.body.innerHTML += `${this.subject}: ${this.value}<br>`;
        }
    }




}