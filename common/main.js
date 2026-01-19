import { presentations } from './presentations.js';

const grid = document.getElementById('presentations-grid');

function renderPresentations(items) {
    grid.innerHTML = '';
    items.forEach(presentation => {
        if (!presentation.active) {
            return;
        }

        const card = document.createElement('div');
        card.className = 'bg-white dark:bg-gray-800 shadow rounded overflow-hidden';
        card.innerHTML = `
            <div class="p-4">
                <img src="${presentation.image}" alt="" class="mb-4">
                <h3 class="text-lg font-semibold mb-2">${presentation.title}</h3>
                <div class="flex flex-wrap gap-2">
                    <a href="${presentation.links.ver}" class="text-sm px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700" target="_blank">
                        <i class="fa-solid fa-magnifying-glass"></i> Ver
                    </a>
                    <a href="${presentation.links.pdf}" class="text-sm px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700" target="_blank">
                        <i class="fa-solid fa-download"></i> PDF
                    </a>
                    <a href="${presentation.links.md}" class="text-sm px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700" target="_blank">
                        <i class="fa-solid fa-file-lines"></i> MD
                    </a>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Initial render
renderPresentations(presentations.sort((a, b) => a.id - b.id));

const searchBar = document.getElementById('search-bar');

searchBar.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredPresentations = presentations.filter(presentation => presentation.title.toLowerCase().includes(searchTerm));
    renderPresentations(filteredPresentations);
});