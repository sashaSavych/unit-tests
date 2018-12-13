import { PipePipe } from './pipe.pipe';

describe('PipePipe', () => {
  let pipe: PipePipe;

  beforeEach(() => {
    pipe = new PipePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform string', () => {
    expect(pipe.transform('0')).toEqual('0123');
  });

  it('should throw an error', () => {
    expect(() => {
      pipe.transform(0);
    }).toThrowError('The value has to be a string!');
  });
});
