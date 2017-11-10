import { PlantoPage } from './app.po';

describe('planto App', () => {
  let page: PlantoPage;

  beforeEach(() => {
    page = new PlantoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
