import { useSanityClient, groq } from 'astro-sanity';

export async function getSiteSettings() {
	const query = groq`*[_type == 'siteSettings' && _id == 'siteSettings'][0]`;
	const siteSettings = await useSanityClient().fetch(query);
	return siteSettings;
}

export async function getAllPosts() {
	const client = useSanityClient()
	const query = groq`*[_type == 'post']{"categoryData": categories[]->{slug, title}, "authorData": author-> {name}, ...} | order(publishedAt desc)`;
	const params = {}
	const posts = await client.fetch(query, params)
	return posts
}

export async function getAllCategoriesWithPosts() {
	const query = groq`*[_type == 'category']{"posts": *[_type == "post" && references(^._id)] | order(publishedAt desc), ... }`;
	const data = await useSanityClient().fetch(query);
	return data;
  }