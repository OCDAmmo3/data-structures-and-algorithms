# Insertion Sorting

### What is it?

Insertion sorting is a method that sorts a list one piece at a time. If a number is bigger than the one next to it, move past it. If it's not, move the one ahead of it. Repeat until the second number is always larger.

For instance, in a list like this:

    [123,25,74,13456,3]

We'd want it to sort into this:

    [3,25,74,123,13456]

An insertion sort checks the front number, 123, to see if it's larger than the next number, 25. If it is, it moves it to the next spot. Then compares to the next number, 74, and moves it again. Then compares to 13456, and stays where it's at. Compares to 3, the final number, and moves beyond to the end.

    [25,74,13456,3,123]

The same is then done for 25. It will end up in the second from final position, after 3, but before 123.

    [74,13456,3,25,123]

The same is then done for 74, putting it after 25, before 123.

    [13456,3,25,74,123]

Finally, for 13456, putting it all the way at the end after finding that it's the largest.

    [3,25,74,123,13456]

That done, this isn't the most efficient way to accomplish a sort at all, but it is one of the simplest and easiest to understand.