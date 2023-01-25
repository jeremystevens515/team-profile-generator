const Classes = require('../lib/classes');

describe('Employee', () => {
    describe('Class constructor call', () => {

        const newEmployee = new Classes.Employee('empName', 'empID', 'empEmail');

        test('should be an instance of the Employee superClass', () => {
            expect(new Classes.Employee()).toBeInstanceOf(Classes.Employee)
        });

        test('should take arguments passed in order of name, id, and email, and set them as the values of the corresponding properties', () => {
            // const newEmployee was created above
            expect(newEmployee.name).toBe('empName');
            expect(newEmployee.id).toBe('empID');
            expect(newEmployee.email).toBe('empEmail');
        });

        test('getName() should return the value of the property name', () => {
            expect(newEmployee.getName()).toBe('empName');
        });

        test('getId() should return the value of the property ID', () => {
            expect(newEmployee.getId()).toBe('empID');
        });

        test('getEmail() should return the value of email', () => {
            expect(newEmployee.getEmail()).toBe('empEmail');
        });

        test('getRole() should return the string value of "Employee"', () => {
            expect(newEmployee.getRole()).toBe('Employee');
        }); 
    });
});
