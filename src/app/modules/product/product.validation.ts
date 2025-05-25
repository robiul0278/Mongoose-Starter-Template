import { z } from 'zod';

export const productValidationSchema = z.object({
    body: z.object({
        title: z.string().min(1),
        description: z.string().min(6),
        price: z.string(),
        createdAt: z.date().optional()
    })
});
