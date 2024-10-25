
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

const removeElementOnce = function () {
    hero.lastElementChild.remove();
    document.removeEventListener('click', removeElementOnce);
}

document.addEventListener('click', removeElementOnce);

