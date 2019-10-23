# Quick Sorting

### What is it?

Quick sort is a method of sorting that moves one piece at a time. It compares each value to every other, moving each value either in front of or behind the current value, thus finding the final placement for that value. Given an array of numbers like this:

[123,65,32,75,12,400,2,5,100,7]

First thing you'll want to do is compare 123 to every other value, one at a time, sending all those larger than 123 to the right, and smaller than 123 to the left. For this example, the finalized values will be bolded.

[65,32,75,12,2,5,100,***123***,400] 

Then inserting the 123 at the middle of the 2 sides, that value has found it's final spot, and won't need moved again. There will always be exactly 1 value to its right, and 7 values to its left, so the index for 123 will stay constant now. Then we move to 65.

[32,12,2,5,***65***,75,100,***123***,400]

Inserting 65 in the middle again, that's now in it's final spot, not needing moved again either. Then we move to 32.

[12,2,5,***32***,***65***,75,100,***123***,400]

We follow that by moving 12.

[2,5,***12***,***32***,***65***,75,100,***123***,400]

Then, checking each number, nothing else would end up moving. Each would stay in it's spot, as they're happily sorted in the right order.