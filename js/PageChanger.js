
export class PageChanger {
    constructor(currentPage) {
        this.setCurrentPage(currentPage);
    }

    currentPage = '';

    getCurrentPage() {
        return this.currentPage;
    }

    setCurrentPage(value) {
        this.currentPage = value
    }

    showPage(route) {
        const pageElem = document.querySelector("#" + route);

        this.setCurrentPage(route);

        pageElem.removeAttribute('hidden');
    }

    changePage(nextPage) {
        // console.log(nextPage, " ", this.currentPage)

        const nextPageElem = document.querySelector("#" + nextPage);
        const currentPageElem = document.querySelector("#" + this.getCurrentPage());

        currentPageElem.setAttribute('hidden', true);
        nextPageElem.removeAttribute('hidden');

        this.setCurrentPage(nextPage);
    }
}