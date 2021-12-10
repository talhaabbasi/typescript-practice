const carMakers: string[] = ["suzuki", "toyota", "honda"]
const dates = [new Date(), new Date()]

const carsByMake: string[][] = [["cultus"], ["corolla"], ["civic"]]

const car = carMakers[0]

carMakers.map((car: string): string => {
  return car.toUpperCase()
})

// Flexible type
const importantDates = [new Date(), "2021-10-12"]
