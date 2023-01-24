const Classes = require('../lib/classes');

describe('Intern', () => {
    describe('Class constructor call', () => {
        test('should be an instance of the Intern Subclass', () => {
            expect(new Classes.Intern()).toBeInstanceOf(Classes.Intern)
        })
    });

});