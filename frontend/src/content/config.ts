// Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// Define your collection(s)
const testCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		tags: z.array(z.string()),
		image: z.string().optional(),
	}),
});
// Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
	testfolder: testCollection,
};
