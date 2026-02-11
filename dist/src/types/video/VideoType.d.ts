declare const AvailableResolutions: string[];
type VideoType = {
    id?: number;
    title?: string;
    author: string;
    canBeDownloaded: boolean;
    minAgeRestriction: null | number;
    createdAt: string;
    publicationDate: string;
    availableResolutions: typeof AvailableResolutions;
};
