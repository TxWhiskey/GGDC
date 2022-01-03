export interface JournalPost {
    id: string;
    title: string;
    published: boolean;
    publishedDate: Date;
    createdDate: Date;
    pdfUrl: string;
    content?: Row[];
}

export interface Section {
    id: string;
    rows: Row[];
}

export interface Row {
    id: string;
    columns: Column[];
}

export interface Column {
    id: string;
    items: Item[];
}

export interface Item {
    id: string;
    type: string;
    payload: any;
}

export interface TextItem extends Item {
    text: string;
}

export interface TextItemParagraph {
    id: string;
    text: string;
}

export interface ImageItemPayload {
    imageUrl: string;
    imageTitle: string;
    maxWidth: number;
    maxHeight: number;
}