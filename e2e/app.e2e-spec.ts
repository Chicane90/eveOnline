import { Angular2EveonlinePage } from './app.po';

describe('angular2-eveonline App', function() {
  let page: Angular2EveonlinePage;

  beforeEach(() => {
    page = new Angular2EveonlinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
