export interface Model<value>  { 
    find(): Promise<value[]>;
    findOne(id: number): Promise<value>;
    create(obj: value) : ReturnValue<value>;
}

interface ReturnValue<value>{
    value: Promise<value>;
    fetch(): Promise<value>;
}




