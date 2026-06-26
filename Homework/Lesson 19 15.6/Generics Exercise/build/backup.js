export class Backup {
    subject;
    value;
    constructor(subject, value) {
        this.subject = subject;
        this.value = value;
    }
    isObject() {
        return typeof this.value === "object" && !(this.value instanceof Date) ?
            true :
            false;
    }
    displayObject() {
        document.body.innerHTML += `${this.subject}:  `;
        for (const item in this.value) {
            document.body.innerHTML += `${this.value[item]} ,`;
        }
        document.body.innerHTML += `<br>`;
    }
    display() {
        if (this.isObject()) {
            this.displayObject();
        }
        else {
            document.body.innerHTML += `${this.subject}: ${this.value}<br>`;
        }
    }
}
