


export class DbLoggerModel {

    public method: string;
    public route: string;
    public body: string;

    constructor(method: string, route: string, body: string) {
       this.method = method;
       this.route = route;
       this.body = body;
    }


}