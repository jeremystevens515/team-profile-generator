const Classes = require('../lib/classes');

describe('Intern', () => {
    describe('Class constructor call', () => {

        const newIntern = new Classes.Intern('empName', 'empID', 'empEmail', 'empSchool');
        
        test('should be an instance of the Intern Subclass', () => {
            expect(new Classes.Intern()).toBeInstanceOf(Classes.Intern)
        });

        test('should take arguments passed in order of name, id, email, and SCHOOL and set them as the values of the corresponding properties', () => {
            // const newIntern was created above
            expect(newIntern.name).toBe('empName');
            expect(newIntern.id).toBe('empID');
            expect(newIntern.email).toBe('empEmail');
            expect(newIntern.school).toBe('empSchool');
        });

        test('getName() should return the value of the property name', () => {
            expect(newIntern.getName()).toBe('empName');
        });

        test('getId() should return the value of the property ID', () => {
            expect(newIntern.getId()).toBe('empID');
        });

        test('getEmail() should return the value of email', () => {
            expect(newIntern.getEmail()).toBe('empEmail');
        });

        test('getGitHub() should return with the value of the property gitHub', () => {
            expect(newIntern.getSchool()).toBe('empSchool');
        });

        test('getRole() is overridden in this subclass and should return the string value of "Manager"', () => {
            expect(newIntern.getRole()).toBe('Intern');
        });
    });
});