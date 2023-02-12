export interface BlogPost {
    metadata: {
        title: string;
        author: 'Ross Keenan' | 'Tyrone B. Dunn'
        createdAt: string;
        updatedAt?: string;
        description: string;
        tags: string[];
        hide?: boolean;
    }
}
