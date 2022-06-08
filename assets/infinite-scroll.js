class InfiniteScroll extends HTMLElement {

constructor() {
	super();
	this.productsContainerSelector = this.getAttribute('data-products-container');
	this.paginationSelector = this.getAttribute('data-pagination-selector');
	this.nextPageSelector = this.getAttribute('data-next-page-selector');
	this.productsContainerEl = this.querySelector(this.productsContainerSelector);
	this.paginationEl = this.querySelector(this.paginationSelector);
	this.loadingIndicator = this.querySelector('.loading-overlay-wrapper');

	if (!this.productsContainerEl || !this.paginationEl) {
		console.error('Wrong configuration for infinite scroll');
		return;
	}

	try {
		this.observer = this.registerObserver(this.loadNextPage.bind(this));
		this.observer.observe(this.paginationEl);
		this.paginationEl.style.visibility = 'hidden';
	} catch (error) {}

}

registerObserver(callback) {
	let callbackIsRunning = false
	return new IntersectionObserver(function (entries) {
		if (entries[0].isIntersecting && !callbackIsRunning) {
		callbackIsRunning = true;
		callback()
			.then(_ => callbackIsRunning = false)
			.catch(_ => callbackIsRunning = false);
		}
	})
}

loadNextPage() {
	const nextPageEl = this.paginationEl.querySelector(this.nextPageSelector);
	if (!nextPageEl) {
		this.observer.disconnect();
		return Promise.resolve();
	}
	const nextPageUrl = nextPageEl.getAttribute('href');
	this.loadingIndicator.classList.remove('hidden');
	return fetch(nextPageUrl)
		.then(result => {
		this.loadingIndicator.classList.add('hidden')
		if (!result.ok) {
			throw(result.statusText);
		}
		return result.text()
		})
		.then(this.handleNextPage.bind(this))
}

handleNextPage(nextPageContent) {
	const nextPageHtml = new DOMParser().parseFromString(nextPageContent, 'text/html')
	const nextPageProducts = nextPageHtml.querySelector(this.productsContainerSelector)
	if (!nextPageProducts) {
		console.warn('Infinite scroll: Could not find any products in next page', nextPageHtml);
		return;
	}
	this.productsContainerEl.insertAdjacentHTML('beforeend', nextPageProducts.innerHTML);
	const nextPagePagination = nextPageHtml.querySelector(this.paginationSelector);
	if (!nextPagePagination) {
		console.warn('Infinite scroll: Could not find any pagination in next page');
		return;
	}
	this.paginationEl.innerHTML = nextPagePagination.innerHTML;
}
}

customElements.define('infinite-scroll', InfiniteScroll);