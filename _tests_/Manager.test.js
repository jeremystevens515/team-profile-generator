const Classes = require('../lib/classes');

describe('Manager', () => {
    describe('Class constructor call', () => {
        test('should be an instance of the Manager Subclass', () => {
            expect(new Classes.Manager()).toBeInstanceOf(Classes.Manager)
        })
    });

});