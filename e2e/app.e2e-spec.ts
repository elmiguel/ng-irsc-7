import { NgIrsc7Page } from './app.po';

describe('ng-irsc-7 App', function() {
  let page: NgIrsc7Page;

  beforeEach(() => {
    page = new NgIrsc7Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
