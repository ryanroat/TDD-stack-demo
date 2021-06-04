/* eslint-disable */

class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }
}

describe('No Array Stack', () => {
  it('is created empty', ()=>{
    const stack = new Stack();

    expect(stack.top).toBe(-1);
  });

  it.todo('can push to the top');

  it.todo('can pop off');
});
