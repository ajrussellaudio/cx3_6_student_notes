# JavaScript Types

## Number

Can be integer or float.

```JavaScript
> var a = 1;
undefined
> var b = 2;
undefined
> var c = 2.5;
undefined
```

Usual arithmetic operators

```JavaScript
> a + b
3
> a - b
-1
> c * b
5
> c / b
1.25
> c % b
0.5
```

## String

```JavaScript
> var myString = "A lovely new string."
> var singleQuotes = 'Alan\'s new string.'
```

String concatenation:

```JavaScript
> "Alan" + "Russell"
'AlanRussell'
```

## String Methods

```JavaScript
> "Alan Russell".toUpperCase()
'ALAN RUSSELL'
> "Alan Russell".length
12
```

## Null

A completely empty value. Must be declared.

```JavaScript
> var myVariable = null;
> myVariable;
null
```

## Undefined

When a variable has no value declared.

```JavaScript
> var anotherVariable;
> anotherVariable
undefined
```

## Boolean

```JavaScript
> true
true
> false
false
```

```JavaScript
> 1 > 2
false
> 3 < 4
true
> 2 == 2
true
> 5 != 5
false
```

But JavaScript is a dick:

```JavaScript
> 2 == "2";
true
> 2 === "2";
false
```

JavaScript tries to help by matching a number 2 to a string "2". Recommended that we always use triple equals. Also:

```JavaScript
> 2 != "2";
false
> 2 !== "2";
true
```

By the way:

```JavaScript
> undefined == null
true
> undefined === null
false
```

Speaking of comparisons...

```JavaScript
> (2 === 2) && (2 === 4)
false
> ("Rick" === "Rick") || ("Jay" === "Rick")
true
```

JavaScript has a few 'falsey' values:

```
> Boolean( true )
true
> Boolean( false )
false
> Boolean( 2 )
true
> Boolean( 0 )
false
> Boolean( "Alan" )
true
> Boolean( "" )
false
> Boolean( [] )
true
> Boolean( null )
false
> Boolean( undefined )
false
> Boolean( NaN )
false
```

## Assignment

```
> var myNum;
> myNum;
undefined
> myNum = 78;
> myNum;
78
> myNum = "This lovely string."
> myNum;
'This lovely string.'
```

```
> typeof( 1 )
'number'
> typeof( 'some text' )
'string'
> typeof( myNum )
'string'
> typeof( null )
'object'
> typeof( undefined )
'undefined'
> typeof( NaN )
'number'
```