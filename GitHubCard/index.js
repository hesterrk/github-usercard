/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/


// /* Step 3: Create a function that accepts a single object as its only argument,
//           Using DOM methods and properties, create a component that will return the following DOM element:

// {/* <div class="card">
//   <img src={image url of user} />
//   <div class="card-info">
//     <h3 class="name">{users name}</h3>
//     <p class="username">{users user name}</p>
//     <p>Location: {users location}</p>
//     <p>Profile:  
//       <a href={address to users github page}>{address to users github page}</a>
//     </p>
//     <p>Followers: {users followers count}</p>
//     <p>Following: {users following count}</p>
//     <p>Bio: {users bio}</p>
//   </div>
// </div>

// */ */}

function createCard(obj) {

  

  let card = document.createElement('div');
  let image = document.createElement('img');
  let cardinfo = document.createElement('div');
  let header = document.createElement('h3');
  let p1 = document.createElement('p');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');
  let a = document.createElement('a');
  let p4 = document.createElement('p');
  let p5 = document.createElement('p');
  let p6 = document.createElement('p');

  
  card.appendChild(image);
  card.appendChild(cardinfo);
  cardinfo.appendChild(header);
  cardinfo.appendChild(p1);
  cardinfo.appendChild(p2);
  cardinfo.appendChild(p3);
  cardinfo.appendChild(p4);
  cardinfo.appendChild(p5);
  cardinfo.appendChild(p6);
  p3.appendChild(a);


  card.classList.add('card');
  cardinfo.classList.add('card-info');
  header.classList.add('name');
  p1.classList.add('username');



  image.src =  `${obj.avatar_url}`
  header.textContent = `${obj.name}`;
  p1.textContent = `${obj.login}`;
  p2.textContent = `${obj.location}`;
  p3.textContent = `Profile: `;
  a.textContent = `${obj.html_url}`
  p4.textContent = (`Followers: ${obj.followers}`);
  p5.textContent = (` Following: ${obj.following}`);
  p6.textContent = (`Bio: ${obj.bio}`);

  return card
  
}


//selecting parent 
let cards = document.querySelector('.cards');

//axios request

 axios.get('https://api.github.com/users/hesterrk')

.then(response => {

  const thedata = response.data
    cards.appendChild(createCard(thedata));
  

})
.catch(error => {
console.log(error);

});



//axios request


axios.get('https://api.github.com/users/hesterrk/followers')

.then(response => {
response.data.forEach(user => {
const cardFriends = new createCard(user);
cards.appendChild(cardFriends);
});


})
.catch(error => {
console.log(error);

});

