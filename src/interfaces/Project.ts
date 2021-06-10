export interface Project {
    _id?: string;
    es_name: string;
    en_name: string;
    es_description: string;
    en_description: string;
    tecnologies: any;
    imgUrls: Array<String>;
    createdAt?: string | Date;
    updatedAt?: string | Date;
}