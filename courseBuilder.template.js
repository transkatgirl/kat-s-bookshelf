toc
	.filter((item) => item.subitems && )
	.map(
		(item) =>
			"[[books.chapters]]\nroot = " +
			JSON.stringify(item.identifier) +
			"\n\n[[books.chapters.groups]]\nsections = " +
			JSON.stringify(
				item.subitems.filter((item) => ).map((item) => item.identifier)
			) +
			"\n\n[[books.chapters.groups]]\nsections = " +
			JSON.stringify(
				item.subitems.filter((item) => ).map((item) => item.identifier)
			)
	)
	.join("\n\n");
