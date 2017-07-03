import { TestCspPage } from './app.po';

describe('test-csp App', () => {
  let page: TestCspPage;

  beforeEach(() => {
    page = new TestCspPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
