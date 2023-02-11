export interface BlogPost {
    metadata: {
        title: string;
        author: 'Ross Keenan' | 'Tyrone Dunn'
        createdAt: string;
        updatedAt?: string;
        description: string;
        tags: string[];
    }
}
