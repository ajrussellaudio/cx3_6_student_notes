# Searching

For a sorted array:

```
[1, 3, 7, 8, 9, 21, 23, 45]
```

Pseudocode for O(log n) solution:

```
find element at halfway index
if element < search item, item must be in lower half
if element > search item, item must be in upper half
if element == search item, yer done!
repeat with appropriate half
```

This is a **binary search** algorithm. It relies on the fact that the array is sorted.