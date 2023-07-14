export class ClientError extends Error {
    statusCode = 400
    constructor (message:string, status:number) {
        super(message)
        this.statusCode = status
    }
}