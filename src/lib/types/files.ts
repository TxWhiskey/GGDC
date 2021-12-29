import type { FileData } from "$lib/page-parts/journal/sub-componenets/file-explorer/file-explorer-types";

export interface FolderStructure {
    path: {
        id: string;
        title: string;
    }[];
    folders: {
        id: string;
        title: string;
    }[];
    files: FileData[];
}