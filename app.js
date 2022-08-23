const main = document.querySelector("#main");
const addUserBtn = document.querySelector("#add-user");
const dooubleBtn = document.querySelector("#double");
const showMillionairesBtn = document.querySelector("#show-millionaires");
const sortBtn = document.querySelector("#sort");
const calculateWealthBtn = document.querySelector("#calculate-wealth");
const url = "https://randomuser.me/api/";

let data = [];

// fetches random user and adds wealth

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

getRandomUser();
