function comparator(a, b){
  if (a.age < b.age) return -1; // returning `-1` means "a goes before b"
  if (a.age > b.age) return 1;  // returning  `1` means "b goes before a"
  return 0; // returning 0 means "a and b are equivalent"
};

describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles a single value array', function(){
    expect( bubbleSort([1]) ).toEqual( [1] );
  });
  it('handles an single pass array', function(){
    expect( bubbleSort([1, 3, 2, 5]) ).toEqual( [1, 2, 3, 5] );
  });
  it('handles an array of multiple passes', function(){
    expect( bubbleSort([6, 4, 1, 3, 2, 5]) ).toEqual( [1, 2, 3, 4, 5, 6] );
  });
  it('accepts a function', function(){
    expect( bubbleSort([{ age: 4 }, { age: 8 }, { age: 2 }, { age: 9 }], comparator) ).toEqual([{ age: 2 }, { age: 4 }, { age: 8 }, { age: 9 }] );
  });
});
