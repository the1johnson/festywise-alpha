declare module '*.svg' {
    const content: any;
    export default content;
}

export type GigsDataType = {
    id: number;
    name: string;
    payment: string;
    genre: string;
    description: string;
    start_date: string;
    end_date: string;
}