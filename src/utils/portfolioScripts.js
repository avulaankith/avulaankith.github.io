export function adjustSvgViewBox() {
    const svg = document.getElementsByTagName("svg")[0];
    if (svg) {
        const bbox = svg.getBBox();
        const viewBox = [bbox.x, bbox.y, bbox.width, bbox.height].join(" ");
        svg.setAttribute("viewBox", viewBox);
    }
}

