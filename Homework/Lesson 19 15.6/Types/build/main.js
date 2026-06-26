function printer(message, options) {
    const totalTimes = options.times === undefined ? 1 : options.times;
    const run = () => options.alert ? alert(message) : document.body.innerHTML += message + "<br>";
    for (let i = 0; i < totalTimes; i++)
        run();
}
printer("Hello mama", { times: 3 });
export {};
