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
                        <p class="cat">${category.strCategory}</p>
                    `;
                    categoriesElement.appendChild(categoryElement);

                    categoryElement.addEventListener('click', () => categoryData(category));
                });
            }


            function categoryData(category) {
                fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`)
                    .then(res => res.json())
                    .then(data => {
                        let mealElement = document.getElementById('category-meals');
                        mealElement.innerHTML = '';

                        data.meals.forEach(meal => {
                            let mealItem = document.createElement('div');
                            mealItem.innerHTML = `
                                <img id="meal-img" src="${meal.strMealThumb}" alt="${meal.strMeal}">
                                <p id="meal-name">${meal.strMeal}</p>
                            `;
                            mealElement.appendChild(mealItem);
                        });
                    });
            }
