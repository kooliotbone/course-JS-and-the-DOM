
// //Below is used when I want to change what happens when I click h1
// document.addEventListener('click', function() {
//     const mainHeading = document.querySelector('h1');
//     mainHeading.style.backgroundColor = 'red';
// })

/*
    Let's add an event listener that changes the text of the h1 element to 
    "Build an AR App" when a user's mouse is over the h1 element -- and 
    changes it back to the original content when the mouse moves away from the element.
*/
const mainHeading = document.querySelector('h1');

mainHeading.addEventListener('mouseover', () => {mainHeading.innerText = `Build an AR App`}); //changes text when mouse hover over h1
mainHeading.addEventListener('mouseout', () => {mainHeading.innerText = `Learn ARKit`}); //changes text when mouse moves away from h1


/*
    We're going to create an event listener that removes the last of the featured programs in the section of the page with the hero_module class, 
    and then removes itself so it can't be used again.

    This is also a good opportunity to get familiar with the Event Listeners tab in Dev Tools. After you have written your event listener, go into
    the Event Listeners tab and explore the listener you created:

    Find the function code
    Manually remove the listener using the Remove button.
*/

const hero = document.querySelector('.hero__module');

//function that removes the last element from hero and then removes the eventlistener 
const removeElementOnce = function () {
    hero.lastElementChild.remove();
    document.removeEventListener('click', removeElementOnce);
}

//adds an even listener to the index.html document
document.addEventListener('click', removeElementOnce);


/* 
    The below codes shows us how to stop the default action of a click
    In the example below it prevents the click of the button with the Id below
    from going to the hyperlink (which is the default action when clicked).
*/

const link = document.querySelector('#ga-99cff7');

link.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("Hurray! We didn't navigate to a new page!");
});

/*
    Your tasks will involve:

    Creating and styling the buttons.
    Selecting the right place to add a button to each Nanodegree card.
    Adding the event listener to the correct part of the page. For efficiency, we only want to add one event listener to one element on the page.
    Writing a function to toggle the text on the button between Add to Favorites and Remove from Favorites when the button is clicked
    Adding/removing a favorite status indicator, e.g. ⭐ ⭐ ⭐ , to show when a program has been chosen as a favorite.

    Preventing the default action of navigating to the Nanodegree program page when the button is clicked while allowing 
    the default action to proceed when any other part of the button is clicked.
*/

//This is the Node that holds the h4 header for the nanodegree cards. Append the buttons after h4.
const cardNanoTitle = document.querySelectorAll('.card--nanodegree__title');


//Function to create a button, add styles to the button, add text to the Button and add class to the button
cardNanoTitle.forEach(function (nano) {
    const addRemoveFavButton = document.createElement('button'); // Creating the Button Element
    //Adding Styling, Class, and Text to the Buttom Element
    addRemoveFavButton.textContent = "ADD TO FAVORITES";
    addRemoveFavButton.classList = 'button button--primary';
    //Appending the Button Element to cardNanoTitle after h4
    nano.appendChild(addRemoveFavButton);
});

//function to toggle favorite nano degree title
function toggleFavorite(event) {
    //create a helper variable to hold the target
    const target = event.target;
    
    //check if the target is a button
    if (target.nodeName === 'BUTTON') {
        event.preventDefault();

        //Check if the nanodegree is already a favorite
        if (target.textContent.startsWith('ADD')) {
            event.target.textContent = 'Remove from Favorites'; //change the text to "Remove"

            const fav = document.createElement('p'); //create an element to hold the stars
            fav.textContent = '⭐ ⭐ ⭐'; //add the star text to fav
            target.parentElement.appendChild(fav); //append fav element to the title
        } else {
            event.target.textContent = 'Add to Favorites'; // change the text back to "Add"
            target.nextSibling.remove(); //remove the favorite status indicator (stars)
        }
    }
}

const ndsContainer = document.querySelector('.list-nanodegrees');
ndsContainer.addEventListener('click', toggleFavorite);