export interface JournalPost {
    id: string;
    title: string;
    published: boolean;
    publishedDate: string;
    createdDate: Date;
    pdfUrl: string;
    content?: Item[];
}

export interface Item {
    id: string;
    type: string;
    payload: any;
}
