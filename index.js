// document.addEventListener('DOMContentLoaded', () => {})

fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => displayCategories(data.categories))
            .catch(error => console.log(error));

        function displayCategories(categories) {
            let categoriesElement = document.getElementById('categories');

            categories.forEach(category => {
                let categoryElement = document.createElement('div');
                categoryElement.innerHTML = `
                    <img class="pic" src="${category.strCategoryThumb}" alt="${category.strCategory}">
                    <p id="cat">${category.strCategory}</p>
                `;
                categoriesElement.appendChild(categoryElement);
            });
        }