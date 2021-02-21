document.addEventListener('DOMContentLoaded', () => {

    const newItemForm = document.querySelector("#new-item-form");
    newItemForm.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick)

})

const handleNewItemFormSubmit = function (evt) {
    evt.preventDefault();

    const gamesListItem = createGamesListItem(evt.target);
    const gamesList = document.querySelector('#my-video-games');
    gamesList.appendChild(gamesListItem);

    evt.target.reset();
}

const createGamesListItem = function (form) {
    const gamesListItem = document.createElement('li');
    gamesListItem.classList.add('my-video-games');

    const title = document.createElement('h2');
    title.textContent = form.title.value;
    gamesListItem.appendChild(title);

    const genre = document.createElement('h3');
    genre.textContent = form.genre.value;
    gamesListItem.appendChild(genre);

    const creator = document.createElement('h3');
    creator.textContent = form.creator.value;
    gamesListItem.appendChild(creator);

    const rating = document.createElement('h3');
    rating.textContent = form.rating.value;
    gamesListItem.appendChild(rating);

    const completion = document.createElement('h3');
    completion.textContent = form.completion.value;
    gamesListItem.appendChild(completion);

    

    return gamesListItem;

}


const handleDeleteAllClick = function (event) {
    const gamesList = document.querySelector('#my-video-games');
    gamesList.textContent = '';
} 