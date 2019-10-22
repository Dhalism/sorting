
describe('array split Sort', function(){
  it('splices a simple array', function(){
    expect( split([1,2]) ).toEqual( [[1],[2]] );
  });
  it('splices an uneven simple array', function(){
    expect( split([1,2,3]) ).toEqual( [[1, 2],[3]] );
  });
  it('merges an uneven array', function(){
    expect( merge([1,3],[2]) ).toEqual( [1,2,3] );
  });
  it('merges an even array', function(){
    expect( merge([1,3],[0, 2]) ).toEqual( [0, 1,2,3] );
  });
  it('merges an odd array', function(){
    expect( merge([4, 5, 6, 7],[1, 2, 3]) ).toEqual( [1, 2,3,4,5, 6, 7] );
  });
  it('mergeSort', function(){
    expect( mergeSort([1,3, 5, 9, 222, 55515,15, 1151515155,55,5,5,5,5,5,55,5,55,5,55,5,5, 0, 2]) ).toEqual( [0, 1,2,3] );
  });
});
