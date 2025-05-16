const currentYear = 2025;

const getAge = function(person) {
    let deathYear = currentYear;
    if ("yearOfDeath" in person) {
        deathYear = person.yearOfDeath
    }
    return deathYear - person.yearOfBirth;
}

const findTheOldest = function(people) {
    let oldestAge = 0;
    let oldestIndex = 0;
    for (let i = 0; i < people.length; i ++) {
        let age = getAge(people[i])
        if (age > oldestAge) {
            oldestAge = age;
            oldestIndex = i;
        }
    }
    return people[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
