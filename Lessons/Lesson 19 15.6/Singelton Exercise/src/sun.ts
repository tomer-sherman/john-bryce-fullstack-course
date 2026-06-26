class Sun{

    public diameter = 1392700 //KM

    public display():void{
        document.body.innerHTML+= ` Diameter: ${ this.diameter}<br>`
    }


}

export const sun = new Sun();
