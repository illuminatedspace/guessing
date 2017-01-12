describe('Bubble Sort', function(){
    var arr = [];
    var isSorted = function(arr) {
        arr.forEach(function(ele, idx){
            if(ele > arr[idx]){
                return false;
            } else {
                return true;
            }
        });
    };
    
    beforeEach(function(){
        arr = [4, 7, 3, 9, 1, 6];
    });

    describe('Performs tasks on arrays', function(){
        it('handles an empty array', function(){
            expect( bubbleSort([]) ).toEqual( [] );
        });

        it('Sorts the array', function(){
            expect(isSorted(arr)).toEqual(true);
        });

    });
    





  describe('calls compare and swap', function(){


    describe('swap check', function(){
        
        beforeEach(function(){
            spyOn(window, 'swap').and.callThrough();
            bubbleSort([4, 7, 3, 9, 1, 6]);
        });

        it('called swap', function(){
            expect(window.swap).toHaveBeenCalled();
        });

      
      xit("calls swap a # of times", function(){
         expect(swap).toHaveBeenCalledTimes(0);
      });
    })



    describe('compare check', function(){

        
        beforeEach(function(){
            spyOn(window, 'compare').and.callThrough();
            bubbleSort([4, 7, 3, 9, 1, 6]);
        });

        it("calls compare a # of times", function(){
          expect(window.compare).toHaveBeenCalledTimes(0);
        });

        it("called compare", function(){
            expect(compare).toHaveBeenCalled();
        });
    })


  });

});



describe('compare', function(){
    beforeEach(function(){
        var compare = new Function();
    });

    it("is its own func", function(){
        expect(typeof compare).toEqual('function');
    });

});



describe('swap', function(){
    it("is its own func", function(){
        expect(typeof swap).toEqual('function');
      });
})

// check to see if sorted

// keep track of how many comparisons and swaps are done
// "spies" keep track of # of swaps and # of comparisons = two spies

// checks to make sure that swapping logic is its own function in your js file

// checks to make sure compare is its own function