# Data Structures

We have been using:

* Arrays
* Linked Lists
* Hashes

## Array

Some sequential elements stored together in memory.

* Time complexity of access is 1. `a[2]` = O(1)
* Time complexity of length is 1. `a.length` = O(1)
* Inserting not possible with standard array, they are static. Whole array must be copied with new addition. Complexity of a dynamic array therefore O(n)

## Linked List

A dynamic collection. Not necessarily stored in a single memory location. Each location is a value and a pointer to the next location. New items are added to the start of the list, and point to the previous start. Like a conga line.

* Access time O(n)
* Length O(n)
* Inserting at start O(1)
* Inserting in middle O(1)

## Hash

Or HashMap, HashTable...

Isn't ordered like lists or arrays. Keys point to values in 'buckets' in memory, via a wee function.

