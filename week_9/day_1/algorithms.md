# Algorithms

## Guess Who?

Two ways of playing:

* *1* Guessing by name
* *2* Guessing by characteristic

### For 16 people/cards:

#### Best case
*1* - 1 step
*2* - 4 steps

(we rarely care about the best case)

#### Average case
*1* - 8
*2* - 4

#### Worst case
*1* - 16
*2* - 4 (halfs each time)

### For n people:

#### Best case
*1* - 1 step
*2* - log(n)

#### Average case
*1* - n/2
*2* - log(n)

#### Worst case
*1* - n
*2* - log(n)

## Big-O Notation

#### xn + y = O(n)
Get rid of any multiple of n and any offset

#### x log n = O(log n)

#### xn^2 = O(n^2)

O(log n) and O(n^2) reflect each other across O(n)

#### 3n^2 + 2n - 1 = O(n^2) 

