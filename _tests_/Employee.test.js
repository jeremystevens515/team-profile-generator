const Classes = require('../lib/classes');

describe('Employee', () => {
    describe('Class constructor call', () => {
        test('should be an instance of the Employee superClass', () => {
            expect(new Classes.Employee()).toBeInstanceOf(Classes.Employee)
        })
    });

});
