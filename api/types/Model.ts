export type Model<value> = { 
    find(): Promise<value[]>;
    findOne(id: number): Promise<value>;
    create(obj: value): ReturnValue<value> ;
}

type ReturnValue<value> = Promise<value> &  {
    fetch(): Promise<value>;
}

