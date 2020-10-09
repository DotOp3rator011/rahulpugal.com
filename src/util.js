export const pageScroll = (id) => {
    const page = document.getElementById(id);
    if (page) {
        page.scrollIntoView({behavior: "smooth"})
    }
};
