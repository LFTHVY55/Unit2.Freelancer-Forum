const freelancerList = document.querySelector('.freelancer-list');
const averagePriceElement = document.querySelector('.average-price');

let averagePrice = 0;
let freelancers = [];

// Names and occupations arrays for generating random freelancers
const names = ['Alice', 'Bob', 'Charlie', 'David', 'Emily', 'Frank', 'Grace', 'Harry', 'Isabella', 'Jack'];
const occupations = ['Writer', 'Teacher', 'Programmer', 'Designer', 'Marketer', 'Developer', 'Analyst', 'Consultant', 'Engineer', 'Manager'];

// Function to add a freelancer to the list
function addFreelancer(name, occupation, startingPrice) {
  const freelancer = { name, occupation, startingPrice };
  freelancers.push(freelancer);

  const freelancerListing = document.createElement('li');
  freelancerListing.textContent = `${name} (${occupation}): Starting price: ${startingPrice}`;
  freelancerList.appendChild(freelancerListing);

  updateAveragePrice();
}

// Function to update the average starting price
function updateAveragePrice() {
  let totalStartingPrice = 0;
  for (const freelancer of freelancers) {
    totalStartingPrice += freelancer.startingPrice;
  }

  averagePrice = totalStartingPrice / freelancers.length;
  averagePriceElement.textContent = `Average starting price: $${averagePrice}`;
}

// Add initial freelancers
addFreelancer('Alice', 'Writer', 30);
addFreelancer('Bob', 'Teacher', 50);

// Simulate new freelancers appearing every few seconds
setInterval(() => {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
  const randomStartingPrice = Math.floor(Math.random() * 100) + 1;

  addFreelancer(randomName, randomOccupation, randomStartingPrice);
}, 3000);