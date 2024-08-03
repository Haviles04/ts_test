export interface Model<value>  { 
    find(): Promise<value[]>;
    findOne(id: number): Promise<value>;
    create(obj: value) : ReturnValue<value>;
}

export interface ReturnValue<value>{
    value: Promise<value>;
    fetch(): Promise<value>;
}




