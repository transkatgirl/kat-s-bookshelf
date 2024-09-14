[].concat.apply(
	[],
	$1.toc.filter((item) => item.subitems).map((item) => item.subitems)
)
