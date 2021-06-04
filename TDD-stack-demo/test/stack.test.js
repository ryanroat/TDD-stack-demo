/* eslint-disable */

class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  push(item) {
    this.top += 1;
    this.items[this.top] = item;
  }

  get peek() {
    return this.items[this.top];
  }

  get pop() {
    this.top -= 1;
    return this.items[this.top + 1];
  }
}

describe('No Array Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('is created empty', () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it('can push to the top', () => {
    stack.push('an item');
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('an item');
  });

  it('can pop off', () => {
    stack.push('an item');
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('an item');
    popped = stack.pop;
    expect(stack.top).toBe(-1);
    expect(popped).toBe('an item');
  });
});
