type SafePost = {
    id: string;
    userId: string | null;
    content: string;
    createdAt: Date | null;
    name: string | null;
    email: string | null;
    userImage: string | null;
}