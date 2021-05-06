export interface Project {
    _id?: string;
    es_name: string;
    en_name: string;
    es_description: string;
    en_description: string;
    tecnologies: any;
    imgUrls: string;
    createdAt?: string | Date;
    updatedAt?: string | Date;
}