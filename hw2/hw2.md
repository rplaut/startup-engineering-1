## hw2
---

#### setup

```shell
  # Download and make executable
  wget https://spark-public.s3.amazonaws.com/startup/code/market-research.js
  wget https://spark-public.s3.amazonaws.com/startup/code/market-research-wrapper.js

  # Install npm dependencies. This will create a node_modules directory in
  # the current working directory. Don't cd into other directories right
  # now; later we'll show how to install modules globally.
  npm install restler csv accounting

  # As a script
  node market-research.js 
  node market-research.js FB ORCL

  # As an executable
  chmod 777 market-research.js 
  ./market-research.js 
  ./market-research.js GOOG CRM

  # As a module, through another program invoked as a script
  node market-research-wrapper.js

  # As a module, through another program being invoked as an executable
  chmod 777 market-research-wrapper.js
  ./market-research-wrapper.js

  # Also as a module - but with the external code being input at the command line
  # via the -e flag
  node -e "require('./market-research.js')"
  node -e "var mr = require('./market-research.js'); mr.marketResearch();"
  node -e "var mr = require('./market-research.js'); mr.marketResearch([\"FB\",\"ORCL\"]);"

```

#### source code of market-search.js

#### HW2 questions

##### Question 1

Which of the following statements is true about our use of npm and chmod before executing ./market-research.js?

 - Neither is essential, but doing this a useful practice.
 - Installing the libraries via npm is essential to invoking the script at the command line, but changing executability via chmod (or a similar command) is not.
 - Using chmod to change executability is essential to invoking the script at the command line, but using npm to install the libraries is not.
 - **We need to both install necessary libraries and make the file executable before executing it.**


##### Question 2

After looking at the source of market-research.js, what variable holds the arguments sent to the script when invoked at the command line?

- columns
- console.log
- require.main
- **process.argv**

##### Question 3

What do the lines like symbols = symbols || SYMBOLS_DEFAULT; do?

- This is a JS idiom for checking that arguments are within a valid range.
- This is a JS idiom for overriding user inputted arguments.
- **This is a JS idiom for setting default arguments.**
- This is a JS idiom for setting symbols to undefined.

##### Question 4

Which of the following are standard node modules, included with the default install?

- csv
- restler
- **fs**
- **util**
- accounting

##### Question 5

What is the most likely bug in the marketCapFloat function?

- parseFloat should not be used here.
- No bug in this function.
- **The function currently assumes dollar values in the billions.**
- It incorrectly assumes that the return value of the function should be a floating point.

##### Question 6

What does csv2console do?

- Reads in data from csvfile and prints it out unchanged to STDOUT.
- Reads in data from csvfile, asserts that it is within range, and prints to STDOUT.
- Reads in data from the Yahoo Finance API directly.
- **Reads in data from csvfile, computes and formats derived quantities, and prints these out to STDOUT.**

##### Question 7

What does buildfn do? (Hint: read this and this if you've never heard of closures.)

- **Creates and returns a function named response2console, which is parametrized with the values of csvfile and headers from the enclosing scope.**
- Creates and returns a function named response2console, which is parametrized with the values of result and response from the enclosing scope.
- Prints out an error message if the HTTP response returns an error.
- Writes data from the Yahoo Finance API to csvfile.

##### Question 8

What does the marketResearch function do?

- Resolves errors when invoked at the command line
- Constructs a Yahoo Finance API call and exits
- **Constructs a Yahoo Finance API call, and invokes code that first writes the results of that API call to disk and then reads/prints/processes said file**
- Sets several default values and then exits.

##### Question 9

What does the if(require.main == module) conditional do? Check all that apply. 

- Confirm that the code is only being invoked as a command line app and shut down with an error otherwise.
- Confirm that the code is only being invoked as a library and shut down with an error otherwise.
- **Triggers two different blocks of code, one that executes when market-research is invoked from the command line and one that executes when invoked as a module via require.**
- **Parse the stock symbols input at the command line, starting with the process.argv variable and producing the symbols variable.**

##### Question 10
Why do we use console.error in addition to console.log (Hint: see here)?

- console.error is more robust.
- **console.error prints to STDERR, while console.log prints to STDOUT. This allows us to print both metadata/error messages and actual output at the same time.**
- console.error will force the program to exit.
- console.error is the same as console.log, we just do it for the sake of variety.