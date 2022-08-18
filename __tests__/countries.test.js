
const countriesAllData = [
  {name: "Argentina", capital: "Buenos Aires"},
  {name: "Belize", capital: "Belmopan"},
  {name: "Bolivia", capital: "Sucre"}
]

const countryExtractor = (countriesObject) => {
  const countriesArray = []
  for (const country in countriesObject) {
      countriesArray.push(countriesObject[country].name)
  }
  return countriesArray
}


const countryNames = countryExtractor(countriesAllData)
console.log(countryNames);

test("convert array of country data objects to array of countries", () => {

  const inputObject = [
    {name: "Argentina", capital: "Buenos Aires"},
    {name: "Belize", capital: "Belmopan"},
    {name: "Bolivia", capital: "Sucre"}
    ]
  const expectedValue = ["Argentina","Belize","Bolivia"]
  
  //act
  const actualValue = countryExtractor(inputObject)
  
  //assertions
  expect(actualValue).toEqual(expectedValue)

})

//test unit with jest