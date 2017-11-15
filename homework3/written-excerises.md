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
*Type f* is a double floating point type. But it can take its in variables in
different addresses because of the ellipses used in the double. The ellipses can
take in _ANY_ type of function without throwing out an error. So even though type
F is the pointer for the address, the address is interrupted by the ellipses as
its data is stored in a list first and then to get access to those points it must
call to `va_arg()`. `va_arg()` takes in two parameters the list (or the functions
given to run, which is the ellipses) and the *type f* we try to access.

*Type f* is a function pointer that accepts two parameters and then
returns another function pointer (double) that takes in another two parameters
that then returns another function. 

It is a point to something and it is a function that is pointing its stuff to something
What kind of place holder is this?
What is “…” in C++?
what goes into a ..
Var ags and what C++ does that?

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
What is static scoping and what is dynamic scoping?
There is a domain, a g and f function
then a global space
What variables are defined in the global space? x, f, g and main
What about the f space? No
G has a local x in it
main define nothing either
refer to the local variable main to x, what happens to x? Did you define it? You use the global X to use it in main
always search outward to find it. - this is static scope
if you refer to the x in G it is the main one called
What about dynamic scoping?
whenever the use of a variable is found not by searching statically but by the call chain
the x within f is not the f you would find from calling out globally
look on the course notes

## problem 6
A. void scrambleString(const char* array[]);

B. void scrambleString(std::array);
