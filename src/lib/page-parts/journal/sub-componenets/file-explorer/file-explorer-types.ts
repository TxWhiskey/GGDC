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

export interface FileExplorerView extends FolderStructure {
    viewLoaded: boolean,
    showCreateNewFolder: boolean,
    renamingFolder: boolean,
    folderLoading: boolean,
    selectedFileId: string,
}