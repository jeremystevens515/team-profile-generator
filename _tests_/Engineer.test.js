const Classes = require('../lib/classes');

describe('Engineer', () => {
    describe('Class constructor call', () => {
        test('should be an instance of the Engineer Subclass', () => {
            expect(new Classes.Engineer()).toBeInstanceOf(Classes.Engineer)
        })
    });

});