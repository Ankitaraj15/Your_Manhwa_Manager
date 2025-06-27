// _tests_/manhwaModel.test.js
const Manhwa = require('../models/manhwaModel');

describe('Manhwa Model', () => {
  it('should create a new Manhwa object', () => {
    const testManhwa = new Manhwa({
      title: 'Solo Leveling',
      author: 'Chugong',
      status: 'Completed',
    });

    expect(testManhwa.title).toBe('Solo Leveling');
  });
});