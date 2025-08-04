import { z } from "zod";

export const WaitlistSchema = z.object({
      fullname: z.string({message:"Fullname is required"}).min(2, {message:"Fullname is required"}),
      email:z.email({message:"Enter a valid email address"})
    })

  export type WaitlistSchema = z.infer<typeof WaitlistSchema>;