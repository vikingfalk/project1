const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
const navbar = document.querySelector('.navbar');
const searchButton = document.querySelectorAll('.search-button');
const navbarSearch = document.querySelector('.mobile-nav-search');
const navAccount = document.querySelector('.nav-account');
const loginMenu = document.querySelector('.login-menu');
const cancelButton = document.querySelector('.cancel-button');
const catBtn = document.querySelector('#categories-button');
const brands = document.querySelectorAll('.brand');
const mainContent = document.querySelector('#content');

//ajax
function loadContent(file) {
    fetch('https://vikingfalk.github.io/project1/html/' + file + '.html')
        .then((res) => res.text())
        .then((data) => {
            mainContent.innerHTML = data;
        });
}

//recept
function loadRecipe(dish) {
    fetch('https://vikingfalk.github.io/project1/json/recipes.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '';
            data.forEach((recipe) => {
                if (dish === recipe.name) {
                    output += `
                    <div class="container recipe-container">
                        <div class="recipe-card">
                            <img src="${recipe.image}" alt="Dish image" />
                            <section class="recipe-about">
                                <h3>${recipe.name}</h3>
                                <p>${recipe.description}</p>
                            </section>
                            <section class="recipe-ingredients">
                                <h3>Ingredienser</h3>
                                <ul>`;

                    recipe.ingredients.forEach((ingredient) => { output += `<li>${ingredient}</li>` });

                    output += `
                                </ul>
                            </section>
                            <section class="recipe-instructions">
                                <h3>Instruktioner</h3>
                                <ol>`;

                    recipe.instructions.forEach((step) => { output += `<li>${step}</li>` });

                    output += `
                                </ol>
                            </section>
                        </div>
                    </div>
                    `;

                    mainContent.innerHTML = output;
                }
            });
        });
}

//box links
function createBoxLink(dish, container) {
    fetch('https://vikingfalk.github.io/project1/json/recipes.json')
        .then((res) => res.json())
        .then((data) => {
            data.forEach((recipe) => {
                if (dish === recipe.name) {
                    container.innerHTML += `
                    <a href="#" id="${recipe.name}" class="box-link">
                        <div class="image" style="background: url('https://vikingfalk.github.io/project1/${recipe.image}');
                        background-size: cover;
                        background-position: center center;"></div>
                        <span>${recipe.name}</span>
                    </a>`;
                }
            });
        });
}

//landing page
function loadLanding() {
    fetch('https://vikingfalk.github.io/project1/html/landing.html')
        .then((res) => res.text())
        .then((data) => {
            mainContent.innerHTML = data;
        })
        .then(() => {
            const summer = document.querySelector('#summer');
            const dessert = document.querySelector('#dessert');

            createBoxLink("Sashimi", summer);
            createBoxLink("Biff", summer);
            createBoxLink("Kycklinggryta", summer);
            createBoxLink("Sallad", summer);
            createBoxLink("Brownie", dessert);
            createBoxLink("Cheesecake", dessert);
            createBoxLink("Pannkakor", dessert);
            createBoxLink("Jordgubbsglass", dessert);
        })
        .then(() => {
            let links = document.querySelector('.box-link');

            const i = setInterval(() => {
                links = document.querySelectorAll('.box-link');
                if (links.length == 8) {
                    clearInterval(i);
                    links.forEach((link) => {
                        link.addEventListener('click', () => {
                            loadRecipe(link.id)
                        })
                    })
                }
            }, 100)
        });
}

loadLanding();

catBtn.addEventListener('click', () => {
    loadContent('categories');

    navbarLinks.classList.remove('active');
});

brands.forEach((brand) => {
    brand.addEventListener('click', () => {
        loadLanding();

        navbarLinks.classList.remove('active');
    });
});


//kontoknapp
navAccount.addEventListener('click', () => {
    loginMenu.classList.add('active');

    navbarLinks.classList.remove('active');
});

cancelButton.addEventListener('click', () => {
    loginMenu.classList.remove('active')
});


//mobilmenyknappen
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');

    navbarSearch.classList.remove('active');
    navbarSearch.classList.remove('transition');
});

document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target)) {
        navbarLinks.classList.remove('active')
    }
});


//nav söken
searchButton.forEach((btn) => {
    btn.addEventListener('click', () => {
        navbarSearch.classList.toggle('active');
        document.querySelector('.mobile-nav-search input').focus();
    });
});

searchButton.forEach((btn) => {
    btn.addEventListener('click', () => {
        navbarSearch.classList.toggle('transition');

        navbarLinks.classList.remove('active');
    });
});

document.addEventListener('click', (event) => {
    if (!navbarSearch.contains(event.target)) {
        let temp = false;
        searchButton.forEach((btn) => {
            if (btn.contains(event.target)) {
                temp = true;
            }
        });
        if (temp === false) {
            navbarSearch.classList.remove('active');
            navbarSearch.classList.remove('transition');
        }
    }
});

//sök
document.addEventListener('search', (event) => {
    if (event.target.value != '') {
        let results = 0;
        fetch('https://vikingfalk.github.io/project1/html/categories.html')
            .then((res) => res.text())
            .then((data) => {
                mainContent.innerHTML = data;
                document.querySelector('.categories').innerHTML = '';
            })
            .then(() => {
                const container = document.querySelector('.categories');
                const header = document.querySelector('#category-header');
                console.log(event.target.value)
                fetch('https://vikingfalk.github.io/project1/json/recipes.json')
                    .then((res) => res.json())
                    .then((data) => {
                        data.forEach((recipe) => {
                            if (recipe.name.toLowerCase().search(event.target.value.toLowerCase()) != -1) {
                                createBoxLink(recipe.name, container);
                                results += 1;
                            }
                        })
                        header.innerHTML = `Din sökning på '${event.target.value.toLowerCase()}'
                        gav ${results} träff(ar)`;
                    })
                    .then(() => {
                        let links = document.querySelector('.box-link');

                        const i = setInterval(() => {
                            links = document.querySelectorAll('.box-link');
                            if (links.length == results) {
                                clearInterval(i);
                                links.forEach((link) => {
                                    link.addEventListener('click', () => {
                                        loadRecipe(link.id)
                                    })
                                })
                            }
                        }, 100)
                    });
            });
    }
});