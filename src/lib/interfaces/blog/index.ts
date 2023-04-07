export interface BlogPost {
    metadata: {
        title: string;
        author: 'Ross Keenan'
        createdAt: string;
        updatedAt?: string;
        description: string;
        tags: string[];
        hide?: boolean;
    }
}
