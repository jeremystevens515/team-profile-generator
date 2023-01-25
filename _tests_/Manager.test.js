const Classes = require('../lib/classes');

describe('Manager', () => {
    describe('Class constructor call', () => {

        const newManager = new Classes.Manager('empName', 'empID', 'empEmail', '1112223333');

        test('should be an instance of the Manager Subclass', () => {
            expect(new Classes.Manager()).toBeInstanceOf(Classes.Manager)
        });

        test('should take arguments passed in order of name, id, email, and OFFICE NUMBER and set them as the values of the corresponding properties', () => {
            // const newManager was created above
            expect(newManager.name).toBe('empName');
            expect(newManager.id).toBe('empID');
            expect(newManager.email).toBe('empEmail');
            expect(newManager.officeNumber).toBe('1112223333');
        });

        test('getName() should return the value of the property name', () => {
            expect(newManager.getName()).toBe('empName');
        });

        test('getId() should return the value of the property ID', () => {
            expect(newManager.getId()).toBe('empID');
        });

        test('getEmail() should return the value of the email property', () => {
            expect(newManager.getEmail()).toBe('empEmail');
        });

        test('getOfficeNum() should return the value of the officeNumber property', () => {
            expect(newManager.getOfficeNum()).toBe('1112223333');
        });

        test('getRole() is overridden in this subclass and should return the string value of "Manager"', () => {
            expect(newManager.getRole()).toBe('Manager');
        });
    });
});