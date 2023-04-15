export interface File {
    id: string;
    name: string;
    link: string;
    bytes: number;
    icon: string;
    thumbnailLink: string;
    isDir: boolean;
}

export interface Options {
    success: SuccessFunc;
    cancel?: () => void;
    linkType?: LinkType;
    multiselect?: boolean;
    folderselect?: boolean;
    sizeLimit?: number;
    extensions?: string[];
}

export type LinkType = 'preview' | 'direct';
export type SuccessFunc = (files: File[]) => void;
