export class Task {
    public id: number;
    public name: string;
    public createdOn: Date;
    public isCompleted: boolean;

    constructor(args: any) {
        this.id = args.id;
        this.name = args.name;
        this.createdOn = args.createdOn || new Date();
        this.isCompleted = args.isCompleted || false;
    }
}