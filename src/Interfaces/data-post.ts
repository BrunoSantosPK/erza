export interface DataPost {
    title: string;
    date: string;
    id: number;
    paragraphs: Array<{
        text: string,
        subtitle: boolean
    }>;
}