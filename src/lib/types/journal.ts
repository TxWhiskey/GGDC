export interface JournalPost {
    id: string;
    title: string;
    published: boolean;
    sections: Section[];
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
    content: any;
}

export interface TextSection {
    id: string;
    paragraphs: TextSectionParagraph[];
}

export interface TextSectionParagraph {
    id: string;
    text: string;
}