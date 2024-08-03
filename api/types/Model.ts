export interface Model<value>  { 
    find(id: number): Promise<value>;
    create(obj: value) : ReturnType<value>;
}

export interface ReturnType<value>{
    value: Promise<value>;
    fetch(): Promise<value>;
}




