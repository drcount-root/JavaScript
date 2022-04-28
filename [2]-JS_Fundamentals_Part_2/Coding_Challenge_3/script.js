const John = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 78,
    height: 1.69,

    caclBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
};

const Mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 92,
    height: 1.95,

    caclBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
};


// (John.caclBMI() > Mark.caclBMI()) ? console.log(`${John.firstName + " " + John.lastName}'s BMI (${John.caclBMI()}) is higher than ${Mark.firstName + " " + Mark.lastName}'s BMI (${Mark.caclBMI()})`) : console.log(`${Mark.firstName + " " + Mark.lastName}'s BMI (${Mark.caclBMI()}) is higher than ${John.firstName + " " + John.lastName}'s BMI (${John.caclBMI()})`);


// (John.caclBMI() > Mark.caclBMI()) ? console.log(`${John.firstName + " " + John.lastName}'s BMI (${John.BMI}) is higher than ${Mark.firstName + " " + Mark.lastName}'s BMI (${Mark.BMI})`) : console.log(`${Mark.firstName + " " + Mark.lastName}'s BMI (${Mark.BMI}) is higher than ${John.firstName + " " + John.lastName}'s BMI (${John.BMI})`);         // we can access BMI from the both objects coz calcBMI() method evaluates the value during comparison


John.caclBMI();
Mark.caclBMI();    // both generates BMI for their respective objects

(John.BMI > Mark.BMI) ? console.log(`${John.firstName + " " + John.lastName}'s BMI (${John.BMI}) is higher than ${Mark.firstName + " " + Mark.lastName}'s BMI (${Mark.BMI})`) : console.log(`${Mark.firstName + " " + Mark.lastName}'s BMI (${Mark.BMI}) is higher than ${John.firstName + " " + John.lastName}'s BMI (${John.BMI})`);