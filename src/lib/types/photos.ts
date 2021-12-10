export interface Photo {
    id: string;
    url: string;
    title: string;
}

export interface PhotoFolder {
    id: string;
    name: string;
    folders: PhotoFolder[];
    photos: Photo[]
}

export interface Path {
    id: string;
    title?: string;
    child: Path;
}