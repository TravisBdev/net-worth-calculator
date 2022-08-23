const main = document.querySelector("#main");
const addUserBtn = document.querySelector("#add-user");
const doubleBtn = document.querySelector("#double");
const showMillionairesBtn = document.querySelector("#show-millionaires");
const sortBtn = document.querySelector("#sort");
const calculateWealthBtn = document.querySelector("#calculate-wealth");
const url = "https://randomuser.me/api/";

let data = [];

// Fetches random user and adds wealth
const getRandomUser = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 2000000),
  };
  addData(newUser);
};

// Function to double the wealth on click
const doubleMoney = () => {
  data = data.map((user) => {
    return { ...user, money: user.money * 2 };
  });

  updateDOM();
};

// Sort users by level of wealth
const sortByWealth = () => {
  data.sort((a, b) => {
    return b.money - a.money;
  });

  updateDOM();
};

// Filters only the users who's wealth is over $1million
const showMillionaires = () => {
  data = data.filter((user) => {
    return user.money >= 1000000;
  });

  updateDOM();
};

// Add object to data array
const addData = (obj) => {
  data.push(obj);

  updateDOM();
};

// Update DOM
const updateDOM = (providedData = data) => {
  main.innerHTML = "<h2><strong>Person</strong>Wealth</h2>";

  providedData.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong> $${formatMoney(
      item.money
    )}`;
    main.append(element);
  });
};

// Regex the numbers to resemble currency
const formatMoney = (number) => {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

// Event handlers
addUserBtn.addEventListener("click", getRandomUser);

doubleBtn.addEventListener("click", doubleMoney);

sortBtn.addEventListener("click", sortByWealth);

showMillionairesBtn.addEventListener("click", showMillionaires);
