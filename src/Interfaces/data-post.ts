export interface DataPost {
    title: string;
    date: string;
    paragraphs: Array<{
        text: string,
        subtitle: boolean
    }>;
}