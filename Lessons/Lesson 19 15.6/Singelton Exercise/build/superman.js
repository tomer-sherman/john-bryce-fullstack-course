export class Superman {
    power = "Can fly";
    birthDate = "Jan 1st 1980";
    display() {
        document.body.innerHTML += ` Power: ${this.power}<br>`;
        document.body.innerHTML += ` Birth day: ${this.birthDate}<br>`;
    }
}
