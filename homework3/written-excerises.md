## By Cherrell Finister and Hayato Hari
## problem 1
  The values for `A[0][0] and A[3][7]` are so far apart from one another
  because they are 296 bytes away from one another for 37 elements. Meaning that
  for every element, it takes up 8 bytes. `int` takes up 4 bytes while `char` takes
  up 1 byte leaving 3 bytes left for *padding*. That padding allows it to be in
  8 bytes per row which will allow the program to run faster in a trade of taking
  more memory.

## problem 2
The C++ declaration of the first line is that “a” is an array of pointers of n doubles
The C++ declaration of the second line is that “b” is a pointer to an array of n doubles
The C++ declaration of the third line is a pointer to an array of pointers of n doubles which are functions
The C++ declaration of the fourth line is a pointer to a function “d” that points to an array of n doubles

## problem 3
*Type f* is a function pointer that takes in a function with two parameters,
which are the double and double and then that function takes in two more
parameters that are the double and double array that then take in at least
two parameters with one being a double, and the other being whatever variable
amount wanted. This then returns a double.

## problem 4
The representation of a Derived object contains Base as a sub object. They are
direct Base classes, meaning that the object contains two b fields. Both are
accessible under circumstances that std:: is used as well as being derived.
To tell the story of how things are, int a is included in class Base. "std" is
a namespace and the "::" operator is the "scope" operator. It tells the compiler
which class/namespace to look in for an identifier. Therefore, since a String is
defined by the standard library, this needed to be used in order to use it within
that scope. When class Base was Derived, it became a sub object - somewhat
 similar to a subclass - in Java which incorporated the initial int a and
 string from class Base.

## problem 5
With *Dynamic* scoping the answer for the function is *5,5,2* because the g() function
can call to its own local 'x' without having to use the global 'x' provided. But
with *Static* scoping the answer is *2,5,2* because the caller function in
g() can only take in the global 'x' and not the local 'x' assigned to it in
its function. The answer provided in _Dynamic_ scoping is one that would be
called upon from the call chain the x is in. 

## problem 6
A. void scrambleString(const char* array[]);

B. void scrambleString(std::array);
