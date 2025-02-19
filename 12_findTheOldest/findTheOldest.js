const findTheOldest = function(people) {
    const currentDate = new Date();
    const currentYear =  currentDate.getFullYear();

    let mappedPeople = people
    .map(person => {
        if ('yearOfDeath' in person) {
            person.age = person.yearOfDeath - person.yearOfBirth;
        } else {
            person.age = currentYear - person.yearOfBirth;
        }

        return person;
    });

    let oldestPerson = people[0];

    let oldest = mappedPeople.reduce((oldestPerson, person) => {
        if (person.age > oldestPerson.age) return oldestPerson = person;

        return oldestPerson;
    });

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
