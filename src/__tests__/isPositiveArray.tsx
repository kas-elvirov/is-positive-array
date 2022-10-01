import expect from 'expect';
import each from 'jest-each';

import isPositiveArray from '../index';

interface IData {
  arrays: {
    valid: Array<[unknown, ReturnType<typeof isPositiveArray>]>;
    invalid: Array<[unknown, ReturnType<typeof isPositiveArray>]>;
    positive: Array<[unknown, ReturnType<typeof isPositiveArray>]>;
    negative: Array<[unknown, ReturnType<typeof isPositiveArray>]>;
  };
  strings: {
    valid: Array<[unknown, ReturnType<typeof isPositiveArray>]>;
    invalid: Array<[unknown, ReturnType<typeof isPositiveArray>]>;
  };
}

const data: IData = {
  arrays: {
    valid: [
      [
        [],
        true,
      ],
      [
        [''],
        true,
      ],
      [
        [undefined],
        true,
      ],
      [
        [undefined, undefined, undefined],
        true,
      ],
      [
        [null],
        true,
      ],
      [
        [null, null, null],
        true,
      ],
      [
        [undefined, null, '', false, 0, NaN],
        true,
      ],
    ],
    invalid: [
      [
        undefined,
        false,
      ],
      [
        false,
        false,
      ],
      [
        1,
        false,
      ],
      [
        'John',
        false,
      ],
      [
        {},
        false,
      ],
      [
        ['str'].constructor = () => true,
        false,
      ],
    ],
    positive: [
      [new Array(10), true],
    ],
    negative: [
      [[], false],
    ],
  },

  strings: {
    valid: [
      ['', true],
      ['some strings', true],
    ],
    invalid: [
      [true, false],
      [undefined, false],
      [null, false],
      [() => true, false],
      [[], false],
      [{}, false],
      [Symbol('strings'), false],
    ],
  },
};

describe('isPositiveArray', () => {
  each(data.arrays.positive).test(
    'should pass %o and gives us %s',
    (input, expected) => {
      expect(isPositiveArray(input)).toEqual(expected);
    },
  );

  each(data.arrays.negative).test(
    'shouldnt pass %o and gives us %s',
    (input, expected) => {
      expect(isPositiveArray(input)).toEqual(expected);
    },
  );
});
