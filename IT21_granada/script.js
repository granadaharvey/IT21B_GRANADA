
class Person {
    #name;
    #age;
    #occupation;

    constructor(name, age, occupation) {
        this.#name = name;
        this.#age = age;
        this.#occupation = occupation;
    }

    getName() {
        return this.#name;
    }

    getAge() {
        return this.#age;
    }

    getOccupation() {
        return this.#occupation;
    }
}

class Student extends Person {
    #major;

    constructor(name, age, occupation, major) {
        super(name, age, occupation);
        this.#major = major;
    }

    getMajor() {
        return this.#major;
    }

    getStudentInfo() {
        return `
            Name: ${this.getName()}<br>
            Age: ${this.getAge()}<br>
            Occupation: ${this.getOccupation()}<br>
            Major: ${this.getMajor()}
        `;
    }
}

const student = new Student('Harvey', 19, 'Student', 'Bachelor of Science Information Technology');
const info = student.getStudentInfo();


document.getElementById('student-info').innerHTML = info;

console.log(' Name:', student.getName());
console.log(' Age:', student.getAge()); 
console.log(' Occupation:', student.getOccupation()); 
console.log(' Major:', student.getMajor()); 
