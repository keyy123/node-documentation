What does fs module do? Allows us to use our pc's filesystem based on POSIX functions

How do callback work for fs modules that are not promises?

It will take a completion callback which uses the error first pattern which holds the error/exception but if the operation in the cb works then the first argument is null or undefined.

Which version of node's fs modules should we use if we want maximum performance? Why?   

CBs b/c it gives us more memory and finishes in less execution time

 
What is the FileHandle class?

a class that is an object for a file id/descriptor which we make copies of using fsPromises.open method 

stuff