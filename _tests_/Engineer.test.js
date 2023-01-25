const Classes = require('../lib/classes');

describe('Engineer', () => {
    describe('Class constructor call', () => {

        const newEngineer = new Classes.Engineer('empName', 'empID', 'empEmail', 'empGitHub');

        test('should be an instance of the Engineer Subclass', () => {
            expect(new Classes.Engineer()).toBeInstanceOf(Classes.Engineer)
        });

        test('should take arguments passed in order of name, id, email, and GITHUB and set them as the values of the corresponding properties', () => {
            // const newEngineer was created above
            expect(newEngineer.name).toBe('empName');
            expect(newEngineer.id).toBe('empID');
            expect(newEngineer.email).toBe('empEmail');
            expect(newEngineer.gitHub).toBe('empGitHub');
        });

        test('getName() should return the value of the property name', () => {
            expect(newEngineer.getName()).toBe('empName');
        });

        test('getId() should return the value of the property ID', () => {
            expect(newEngineer.getId()).toBe('empID');
        });

        test('getEmail() should return the value of email', () => {
            expect(newEngineer.getEmail()).toBe('empEmail');
        });

        test('getGitHub() should return with the value of the property gitHub', () => {
            expect(newEngineer.getGitHub()).toBe('empGitHub');
        });

        test('getRole() is overridden in this subclass and should return the string value of "Manager"', () => {
            expect(newEngineer.getRole()).toBe('Engineer');
        });
    });
});