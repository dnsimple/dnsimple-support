const subject = require('../../content/search/results.js');

describe('Results', () => {
  describe('.parseQueryParams', () => {
    test('can be parsed', () => {
      const param = subject.parseQueryParams('?q=dns&another=param');

      expect(param).toEqual('dns');
    });

    test('is empty without valid param', () => {
      const param = subject.parseQueryParams('?hello=world');

      expect(param).toEqual('');
    });
  });

  describe('.search', () => {
    const $input = {};

    beforeEach(() => {
      window.DNSimpleSupport = {};
      window.DNSimpleSupport.search = jest.fn();
    });

    test('updates input value', () => {
      subject.search($input, 'dns');

      expect($input.value).toContain('dns');
    });

    test('calls the search agent', () => {
      subject.search($input, 'dns');

      expect(window.DNSimpleSupport.search).toBeCalledWith('dns');
    });
  });

  describe('.showResults', () => {
    test('builds results', () => {
      window.DNSimpleSupport = {};
      window.DNSimpleSupport.search = jest.fn(() => {
        return [{ title: 'DNS' }];
      });

      const $main = document.createElement('div');
      const $input = document.createElement('input');
      const $results = subject.showResults($main, $input, 'close');

      expect($results.innerHTML).toContain('DNS');
    });
  });
});
