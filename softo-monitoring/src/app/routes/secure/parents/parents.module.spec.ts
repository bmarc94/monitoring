import { ParentsModule } from './parents.module';

describe('ParentsModule', () => {
  let parentsModule: ParentsModule;

  beforeEach(() => {
    parentsModule = new ParentsModule();
  });

  it('should create an instance', () => {
    expect(parentsModule).toBeTruthy();
  });
});
