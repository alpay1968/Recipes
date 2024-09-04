

// suggestions search box


document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const suggestionsContainer = document.getElementById('suggestions');

    const recipes = [
        { name: ' Izgara Somon', url: 'tarif3.html' },
        { name: 'Tavuklu Salata', url: 'tarif2.html' },
        { name: 'Spagetti', url: 'tarif1.html' },
        { name: 'Mercimek Çorbası', url: 'tarif4.html' },
        { name: 'Bana Tıklama 2' },
        { name: 'Bana Tıklama 3' },
        { name: 'Bana Tıklama 4' },
        { name: 'Bana Tıklama 5' },
        { name: 'Bana Tıklama 6' },
        { name: 'Bana Tıklama 7' },
        { name: 'Bana Tıklama 8' },
        { name: 'Bana Tıklama 9' },
        { name: 'Bana Tıklama 10' },
        { name: 'Bana Tıklama 11' },
        { name: 'Bana Tıklama 12' }

    ];

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        suggestionsContainer.innerHTML = '';

        if (query) {
            const filteredRecipes = recipes.filter(recipe => 
                recipe.name.toLowerCase().includes(query)
            );

            if (filteredRecipes.length > 0) {
                suggestionsContainer.style.display = 'block';
                filteredRecipes.forEach(recipe => {
                    const suggestion = document.createElement('div');
                    suggestion.textContent = recipe.name;
                    suggestion.dataset.url = recipe.url;
                    suggestionsContainer.appendChild(suggestion);
                });
            } else {
                suggestionsContainer.style.display = 'none';
            }
        } else {
            suggestionsContainer.style.display = 'none';
        }
    });

    suggestionsContainer.addEventListener('click', function(event) {
        const url = event.target.dataset.url;
        if (url) {
            window.location.href = url;
        }
    });

    document.addEventListener('click', function(event) {
        if (!searchInput.contains(event.target) && !suggestionsContainer.contains(event.target)) {
            suggestionsContainer.style.display = 'none';
        }
    });
});
/* LİKED BUTTONS*/
document.addEventListener("DOMContentLoaded", function() {
    const likeButtons = document.querySelectorAll(".like-button");

    likeButtons.forEach(button => {
        const recipeId = button.getAttribute("data-id");

        // LocalStorage'dan beğenme durumunu kontrol et
        if (localStorage.getItem(recipeId) === "liked") {
            button.classList.add("liked");
            button.innerHTML = "&#9829;"; // Dolu kalp ikonu
        }

        button.addEventListener("click", function() {
            if (localStorage.getItem(recipeId) === "liked") {
                localStorage.removeItem(recipeId);
                button.classList.remove("liked");
                button.innerHTML = "&#9825;"; // Boş kalp ikonu
            } else {
                localStorage.setItem(recipeId, "liked");
                button.classList.add("liked");
                button.innerHTML = "&#9829;"; // Dolu kalp ikonu
            }
        });
    });
});
