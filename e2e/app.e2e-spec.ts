import { Angular2RedditBasePage } from './app.po';

describe('angular2-reddit-base App', function() {
  let page: Angular2RedditBasePage;

  beforeEach(() => {
    page = new Angular2RedditBasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
