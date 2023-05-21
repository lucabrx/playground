import {z, TypeOf} from "zod";

export const NewPostSchema = z.object({
    content: z.string().min(4).max(100)
})
export type NewPostType = TypeOf<typeof NewPostSchema>
