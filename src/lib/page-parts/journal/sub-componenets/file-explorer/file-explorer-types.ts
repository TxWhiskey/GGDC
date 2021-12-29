export interface FolderStructure {
    path: {
        id: string;
        title: string;
    }[];
    folders: {
        id: string;
        title: string;
    }[];
    files: {
        id: string;
        title: string;
        type: string;
    }[];
}

export interface FileData {
    folderPath: string[],
    id: string,
    title: string,
    type: string,
    url: string
}