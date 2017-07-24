import { Mybootstrapproject01Page } from './app.po';

describe('mybootstrapproject01 App', () => {
  let page: Mybootstrapproject01Page;

  beforeEach(() => {
    page = new Mybootstrapproject01Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
