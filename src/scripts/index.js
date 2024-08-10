let lastScroll = 0;
const navbar = document.getElementById("navbar");
const containerPagination = document.getElementById("numberPagination");
let currentPage = 1;
let scrollTimeout;

function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function loadFromLocalStorage(key, defaultValue) {
    return localStorage.getItem(key) || defaultValue;
}


function saveCurrentPage(page) {
    saveToLocalStorage("currentPage", page);
}


window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    navbar.style.opacity = 0.7;
    if (scrollTop > lastScroll) {
        navbar.style.top = "-100px";
    } else {
        navbar.style.top = "0";
    }
    lastScroll = scrollTop;
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }

    scrollTimeout = setTimeout(() => {
        navbar.style.opacity = 1;
    }, 200);
});


async function fetchData(page, pageJumlah, publish) {
    try {
        const response = await fetch(`https://suitmedia-backend.suitdev.com/api/ideas?page[number]=${page}&page[size]=${pageJumlah}&append[]=small_image&append[]=medium_image&sort=${publish}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}


async function card() {
    const sortPage = document.getElementById("sortPage");
    const sortPublish = document.getElementById("sortDate");
    const show = document.getElementById("show");

    
    sortPage.value = loadFromLocalStorage("sortPage", "10");
    sortPublish.value = loadFromLocalStorage("sortPublish", "new");
    currentPage = loadFromLocalStorage("currentPage", 1);
    async function updateCard() {
        const page = currentPage;
        const pageJumlah = sortPage.value;
        const publish = sortPublish.value;
        show.innerText = pageJumlah;
        let resultPublish = publish === "new" ? "-published_at" : "published_at";

        
        saveToLocalStorage("sortPage", pageJumlah);
        saveToLocalStorage("sortPublish", publish);
        saveCurrentPage(page); 

        const data = await fetchData(page, pageJumlah, resultPublish);
        const listCard = document.getElementById("list-card");

        listCard.innerHTML = data.data.map((item) => {
            console.log(item.medium_image[0].url);
            return `
            <div class="aspect-[9/11] bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="${item.medium_image[0].url}" alt="${item.title}" class="w-full aspect-video" loading="lazy">
                <p class="text-base text-slate-400 mt-5 px-5">${item.published_at}</p>
                <p class="text-lg line-clamp-3 my-5 px-5">${item.title}</p>
            </div>
            `;
        }).join('');

        renderPagination(data.meta.links);
    }

    sortPage.addEventListener("change", async () => {
        currentPage = 1; 
        saveCurrentPage(currentPage); 
        await updateCard();
    });

    sortPublish.addEventListener("change", async () => {
        currentPage = 1; 
        saveCurrentPage(currentPage); 
        await updateCard();
    });

    updateCard();
}


function renderPagination(links) {
    containerPagination.innerHTML = links.map((item) => {
        return `
        <button class="mr-1 p-4 ${item.active ? 'bg-orange-400 text-white rounded-lg' : 'bg-white text-black'}"
                data-url="${item.url}"
                ${item.active ? 'disabled' : ''}>
            ${item.label}
        </button>
        `;
    }).join('');

    const buttons = containerPagination.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const url = button.getAttribute('data-url');
            if (url) {
                currentPage = new URLSearchParams(url).get('page[number]');
                saveCurrentPage(currentPage); 
                card(); 
            }
        });
    });
}

card(); 
