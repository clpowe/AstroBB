import { NOW, defineDb, column, defineTable } from 'astro:db'

const Link = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		title: column.text(),
		url: column.text(),
		date: column.date({ default: NOW }),
		isRead: column.boolean(),
		upvoteNum: column.number(),
		isCool: column.boolean({ default: true })
	}
})

export default defineDb({
	tables: {
		Link
	}
})
