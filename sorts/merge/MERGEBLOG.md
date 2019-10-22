# Merge Sorting

### What is it?

Merge sorting is a method that sorts a list chunks at a time. Given a list, like this one.

    [15,25,7,1,34,26,432,65,100,50,23,74,12,13,61,57]

Taking a pair of numbers at a time, it puts the smaller number on the left, or towards the beginning of the list.

    15, 25

Then takes the 3rd and 4th numbers, compares, and does the same thing.

    1, 7

Then combines the first pair and the second pair, sorting in a similar manner, just checking first values and putting the lower first.

    1(lower than 15), 7(lower than 15), 15(nothing in other set anymore), 25

The sort then goes through this until it eventually compares 2 halves of the entire list, only ever comparing the first value of both halves. The full change, step by step, would go like this.

    [[15,25],[1,7],[26,34],[65,432],[50,100],[23,74],[12,13],[57,61]] -- Every pair getting sorted
    [[1,7,15,25],[26,34,65,432],[23,50,74,100],[12,13,57,61]] -- Every pair getting combined with another pair
    [[1,7,15,25,26,34,65,432],[12,13,23,50,57,61,74,100]] -- Every set of 4 combined with another set of 4
    [1,7,12,13,15,23,25,26,34,50,57,61,65,74,100,432] -- Every set of 8 combined with another set of 8, giving us our complete list in this instance.


#### Resources I Used

https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice  