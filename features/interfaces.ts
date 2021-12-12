interface Reportable {
  summary(): string | number
}
const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return this.name
  },
}

const brownDrink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): number {
    return this.sugar
  },
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary())
}

printSummary(oldCivic)
printSummary(brownDrink)
