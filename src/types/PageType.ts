export interface PageType {
    id: number;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    acf: {
        flexible_content: {
            heading: string,
            content: string,
            [key: string]: any
        }[];
        hero_group: {
            hero_slides: {
                subtitle: string,
                [key: string]: any
            }[];
            [key: string]: any
        }
    }
    [key: string]: any; // allows access to any additional field
}
