import { NavTabsModule } from './nav-tabs.module';


describe('NavTabsModule', () => {
  let navTabsModule: NavTabsModule;

  beforeEach(() => {
    navTabsModule = new NavTabsModule();
  });

  it('should create an instance', () => {
    expect(navTabsModule).toBeTruthy();
  });
});
