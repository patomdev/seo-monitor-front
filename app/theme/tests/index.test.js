import theme from '../index';

describe('theme', () => {
  it('should return theme', () => {
    expect(theme.fontFamily).toBe('Roboto, sans-serif');
  });
});
