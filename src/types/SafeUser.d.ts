type SafeUser = {
    id: string;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    image: string | null; 
    role: string;
    createdAt: Date | null;
    updatedAt: Date| null
}