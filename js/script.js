const billTotalInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeople = document.getElementById('numberOfPeople');
const perPersonTotal = document.getElementById('perPersonTotal');

let people = Number(numberOfPeople.innerText);

const calculateBill = () => {
  const bill = Number(billTotalInput.value);
  const tip = Number(tipInput.value);
  const tipPercentage = (bill * tip) / 100;
  const calBill = (bill + tipPercentage) / people;
  perPersonTotal.innerText = `$${calBill.toFixed(2)}`;
};

const increasePeople = () => {
  people += 1;
  numberOfPeople.innerText = people;

  calculateBill();
};
increasePeople();

const decreasePeople = () => {
  if (people > 1) {
    people -= 1;
    numberOfPeople.innerText = people;
  }
  calculateBill();
};
decreasePeople();