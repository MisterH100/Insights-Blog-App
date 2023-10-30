export interface IBlog{ 
    _id?: number
    name: string;
    title: string;
    description?: string,
    blog: string;
    publisher: string;
    likes: number;
    createdAt: Date;
}