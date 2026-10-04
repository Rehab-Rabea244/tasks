// let postDiv = document.querySelector(`.posts`);

// function displayContent(postsArray){
//     for (const post of postsArray){
//         let { id, title , body} = post;
//         contentContainer += `
        
//         <div class="card mb-2">
//         <div class="card-body">
//            <h4 class="card-title">${title}</h4>
//            <p class="card-text">${body} </p>   
        
//         </div>
//         <span>post ID:${id}</span>
//         </div>
        
//         `
//     }
//         postDiv.innerHTML = contentContainer;
// }



// async function getPosts(){
//     try{
//         let response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {method: `Get`});
//         let responseData = await response.json();
//         displayContent(responseData);
//     }catch(error){
//         console.error(`An Error: ${error}`);
        
//     }
    
//  };
//  getPosts();

// ================= CART =================





let searchInput = document.querySelector(`#searchInput`);
let userSelect = document.querySelector(`#userSelect`);

(function () {
    const recipeList = [
        "carrot", "broccoli", "asparagus", "cauliflower", "corn", "cucumber",
        "green pepper", "lettuce", "mushrooms", "onion", "potato", "pumpkin",
        "red pepper", "tomato", "beetroot", "brussel sprouts", "peas",
        "zucchini", "radish", "sweet potato", "artichoke", "leek", "cabbage",
        "celery", "chili", "garlic", "basil", "coriander", "parsley", "dill",
        "rosemary", "oregano", "cinnamon", "saffron", "green bean", "bean",
        "chickpea", "lentil", "apple", "apricot", "avocado", "banana",
        "blackberry", "blackcurrant", "blueberry", "boysenberry", "cherry",
        "coconut", "fig", "grape", "grapefruit", "kiwifruit", "lemon", "lime",
        "lychee", "mandarin", "mango", "melon", "nectarine", "orange", "papaya",
        "passion fruit", "peach", "pear", "pineapple", "plum", "pomegranate",
        "quince", "raspberry", "strawberry", "watermelon", "salad", "pizza",
        "pasta", "popcorn", "lobster", "steak", "bbq", "pudding", "hamburger",
        "pie", "cake", "sausage", "tacos", "kebab", "poutine", "seafood",
        "chips", "fries", "masala", "paella", "som tam", "chicken", "toast",
        "marzipan", "tofu", "ketchup", "hummus", "chili", "maple syrup",
        "parma ham", "fajitas", "champ", "lasagna", "poke", "chocolate",
        "croissant", "arepas", "bunny chow", "pierogi", "donuts", "rendang",
        "sushi", "ice cream", "duck", "curry", "beef", "goat", "lamb", "turkey",
        "pork", "fish", "crab", "bacon", "ham", "pepperoni", "salami", "ribs"
    ];

    let selectOptions = ``;

    for (const option of recipeList) {
        selectOptions += `
            <option value="${option}">${option}</option>
        `;
    }

    userSelect.innerHTML = selectOptions;
})();


async function getRecipes(searchTerm = `Pizza`) {
    try {
        let response = await fetch(
            `https://forkify-api.jonas.io/api/v2/recipes?search=${searchTerm}`
        );

        let responseData = await response.json();
        console.log(responseData);

        displayContent(responseData.data.recipes);

    } catch (error) {
        console.log(`An Error: ${error}`);
    }
}

getRecipes();


function displayContent(recipes) {

    let contentContainer = ``;

    for (const recipe of recipes) {

        let { title, image_url, publisher } = recipe;

        contentContainer += `
            <div class="col-md-3 mb-4">

                <div class="card h-100 shadow-sm">

                    <img 
                        class="card-img-top"
                        src="${image_url}"
                        alt="${title}"
                    >

                    <div class="card-body">

                        <h5 class="card-title">
                            ${title}
                        </h5>

                        <p class="card-text text-muted">
                            ${publisher}
                        </p>

                    </div>

                </div>

            </div>
        `;
    }

    let dataRow = document.querySelector(`#dataRow`);

console.log(dataRow);

dataRow.innerHTML = contentContainer;
}


searchInput.addEventListener(`input`, function (e) {
    getRecipes(e.target.value.toLowerCase());
});


searchInput.addEventListener(`blur`, function (e) {

    if (e.target.value === ``) {
        getRecipes(`Pizza`);
    }

});


userSelect.addEventListener(`change`, function (e) {
    getRecipes(e.target.value.toLowerCase());
});
// console.log(document.querySelector(`#dataRow`));
