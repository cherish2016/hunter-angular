import { HunterAngularPage } from './app.po';

describe('hunter-angular App', function() {
  let page: HunterAngularPage;

  beforeEach(() => {
    page = new HunterAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
