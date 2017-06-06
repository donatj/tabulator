document.addEventListener('DOMContentLoaded', async () => {
	const [tabs, currentWindow] = await Promise.all([getAllTabs(), getCurrentWindow()]);

	const tabHeader = document.getElementById('tab-header') as HTMLHeadingElement;
	const tabList = document.getElementById('tab-list') as HTMLUListElement;
	const btnMergeAll = document.getElementById('btn-merge-all') as HTMLLIElement;
	const btnRemoveDupes = document.getElementById('btn-remove-dupes') as HTMLLIElement;

	const searchInput = document.getElementById('search-input') as HTMLInputElement;

	btnMergeAll.addEventListener('click', async () => {
		await mergeAllWindows(currentWindow, tabs);
		window.close();
	});

	btnRemoveDupes.addEventListener('click', () => {
		removeDupes(tabs);
		window.close();
	});

	const lC = new ListController(tabList);

	new DomainListController(
		tabs, lC, searchInput, tabHeader,
	);
});