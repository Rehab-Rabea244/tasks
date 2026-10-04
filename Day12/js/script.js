 var person = {
    fullName: 'Rehab Rabea',
    age: 20,
    gender: 'Female',
    job: 'Front-End Developer',
    salary: 18000,
    city: 'Cairo',
    isStudent: true,

    sister: {
        fullName: '*',
        age: 25,
        gender: 'Female',
        husband: {
            fullName: '*',
            age: 28,
            gender: 'Male'
        }
    }

    eat: function(meal) {
        console.log(Eating: ${meal});
    }
};

console.log(person);

console.log(person.sister.husband.fullName);

person.eat('Pizza');

Object.entries(person).forEach(([key, value]) => {
    console.log(Key: ${key}, Value: ${value});
});