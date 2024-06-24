const fotosPerPage = 6;
let currentPage = 1;

const fotos = [
    "TANGLED-1.jpg",
    "THE-PRINCESS-AND-THE-FROG.jpg",
    "MOANA.jpg",
    "BEAUTY-AND-THE-BEAST.jpg",
    "RIO.jpg",
    "ALLADIN.jpg",
    "LADY-AND-THE-TRAMP.jpg",
    "FROZEN-1.jpg",
    "TARZAN.jpg",
    "BRAVE.jpg"
];

function showPage(page) {
    const start = (page - 1) * fotosPerPage;
    const end = start + fotosPerPage;
    const fotosToShow = fotos.slice(start, end);

    const gifContainer = document.getElementById('gif-container');
    gifContainer.innerHTML = '';
    fotosToShow.forEach(gif => {
        const img = document.createElement('img');
        img.src = gif;
        gifContainer.appendChild(img);
    });

    document.getElementById('page-info').innerText = `Page ${page}`;
    document.getElementById('prev').disabled = page === 1;
    document.getElementById('next').disabled = end >= fotos.length;
}

document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (currentPage * fotosPerPage < fotos.length) {
        currentPage++;
        showPage(currentPage);
    }
});

showPage(currentPage);