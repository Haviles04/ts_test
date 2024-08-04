export interface Model<value> { 
    find(): Promise<value[]>;
    findOne(id: number): Promise<value>;
    create(obj: value): ReturnValue<value> & Promise<value>;
}

interface ReturnValue<value> {
    fetch(): Promise<value>;
}

