const billUserChoice= document.getElementById('priceChoose')
const tipUserChoice = document.getElementById('tipChoose')
const numberPeopleUserChoice = document.getElementById('buttonNumber')
const calculateTotalPrice = document.getElementById('totalPrice')

let getNumberPeople = Number(numberPeopleUserChoice.innerText)

const setBillUserChoice = () => {
  const bill = Number(billUserChoice.value)
  const tipPercent = Number(tipUserChoice.value) / 100
  const tipAmount = bill * tipPercent
  const total = tipAmount + bill
  const perPersonTotal = total / getNumberPeople
  calculateTotalPrice.innerText = `$${perPersonTotal.toFixed(2)}`
}

const growUpPeople = () => {
  getNumberPeople += 1
  numberPeopleUserChoice.innerText = getNumberPeople
  setBillUserChoice()
}

const removePeople = () => {
  if (getNumberPeople <= 1) {
    return
  }
  getNumberPeople -= 1
  numberPeopleUserChoice.innerText = getNumberPeople
  setBillUserChoice()
}