// test it
// expect toBe
// expect tpEqual
// test.only
// 提示是否通过/报错
// beforeAll beforeEach afterEach afterAll
// describe
// 自动执行所有的测试脚本 *.spec.js/ *.test.js

let beforeAlls = [];
let beforeEachs = [];
let afterAlls = [];
let afterEachs = [];
let onlys = [];
let tests = [];
export function test(desc, callback) {
  tests.push({ desc, callback });
}

test.only = function (desc, callback) {
  onlys.push({ desc, callback });
};

export const it = test;

export function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`fail: actual:${actual} expected:${expected}`);
      }
    },
    toEqual(expected) {
      const actualString = JSON.stringify(actual);
      const expectedString = JSON.stringify(expected);
      if (actualString !== expectedString) {
        throw new Error(
          `fail: actual:${actualString} expected:${expectedString}`
        );
      }
    },
  };
}

export function beforeAll(callback) {
  beforeAlls.push(callback);
}

export function afterAll(callback) {
  afterAlls.push(callback);
}

export function beforeEach(callback) {
  beforeEachs.push(callback);
}
export function afterEach(callback) {
  afterEachs.push(callback);
}

export function describe(desc, callback) {
  callback();
}

export function run() {
  for (let beforeAll of beforeAlls) {
    const afterAll = beforeAll();
    afterAll && afterAlls.push(afterAll);
  }

  const list = onlys.length ? onlys : tests;
  for (let test of list) {
    for (let beforeEach of beforeEachs) {
      beforeEach();
    }

    try {
      test.callback();
      console.log(`pass: ${test.desc}`);
    } catch (error) {
      console.log(`fail: ${error}`);
    }

    for (let afterEach of afterEachs) {
      afterEach();
    }
  }

  for (let afterAll of afterAlls) {
    afterAll();
  }
}
