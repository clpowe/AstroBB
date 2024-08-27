import { Link, db } from 'astro:db'

export default async function seed() {
	await db.insert(Link).values([
		{
			title: 'Title',
			url: 'https://google.com',
			isRead: true,
			upvoteNum: 3
		}
	])
}
