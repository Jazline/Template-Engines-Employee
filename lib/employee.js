class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getRole() {
       return 'employee' 
    }
}
//method to get employee name, employee id and title
getName() {
    console.log(`${this.name}`);
}

module.exports = Employee;