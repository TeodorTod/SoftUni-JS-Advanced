function solve(data, criteria) {
    let dataArr = JSON.parse(data);
    let [crireiaKey, criteriaValue] = criteria.split('-');
    let counter = 0;
    for (let empoyee of dataArr) {
        if (empoyee[crireiaKey] === criteriaValue) {
            console.log(`${counter}. ${empoyee['first_name']} ${empoyee['last_name']} - ${empoyee['email']}`);
            counter++;
        }
    }
}
solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
);