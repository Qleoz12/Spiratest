export class Productos {
    private _nombre?: string;
    
    private _marca?: string;
    
    private _contenido?: string;
    
    private _precio?: string;
    private _cantidad?: number=1;
    
    
    constructor(nombre:string,marca:string,contenido:string,precio:string)
    {
        this.nombre=nombre;
        this.marca=marca;
        this.contenido=contenido;
        this.precio=precio;
    }

    
    


    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    public get marca(): string {
        return this._marca;
    }
    public set marca(value: string) {
        this._marca = value;
    }

    public get contenido(): string {
        return this._contenido;
    }
    public set contenido(value: string) {
        this._contenido = value;
    }

    public get precio(): string {
        return this._precio;
    }
    public set precio(value: string) {
        this._precio = value;
    }

    public get cantidad(): number {
        return this._cantidad;
    }
    public set cantidad(value: number) {
        this._cantidad = value;
    }
}
