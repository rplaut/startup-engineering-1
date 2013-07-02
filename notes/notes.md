## notes
---

##### ssh to amazon server

```
chmod 400 mykepair.pem
ssh -i mykeypair.com ec2-54....compute.amazonaws.com
```
- fast way

```
mkdir -p ~/.ssh
3 $ cp ~/downloads/skey.pem ~/.ssh/
4 $ chmod 400 ~/.ssh/skey.pem
5 $ chmod 700 ~/.ssh
6 $ nano ~/.ssh/config # edit the file as shown below
7 $ cat ~/.ssh/config
8 Host awshost1
9 HostName ec2-54-218-35-71.us-west-2.compute.amazonaws.com
10 User ubuntu
11 IdentityFile "~/.ssh/skey.pe
```
- connect

```
ssh awshost1
ssh awshost1 uptime
```

##### list all environmental variables
```
env
```

##### common commands
echo $PATH
alias ll='ls -alrth'
sudo apt-get install -y git-core
which git

##### copy files between remote machines
```
scp -i keypair.pem hello.txt amazonserver:~/
scp hello.txt awshost1:~/
scp hello.txt awshost1:~/foo.txt
```

##### install node and npm

```
$ sudo apt-get update
2 # Install a special package
3 $ sudo apt-get install -y python-software-properties python g++ make
4 # Add a new repository for apt-get to search
5 $ sudo add-apt-repository ppa:chris-lea/node.js
6 # Update apt-get’s knowledge of which packages are where
7 $ sudo apt-get update
8 # Now install nodejs and npm
9 $ sudo apt-get install -y nodejs
```

##### Hello world
```
#!/usr/bin/env node
console.log("Hello World");
```

##### Hello world 2
```
#!/usr/bin/env node
2 var fs = require(’fs’);
3 var outfile = "hello.txt";
4 var out = "Modify this script to write out something different.\n";
5 fs.writeFileSync(outfile, out);
6 console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
```

##### Fibonacci
```
#!/usr/bin/env node
2
3 // Fibonacci
4 // http://en.wikipedia.org/wiki/Fibonacci_number
5 var fibonacci = function(n) {
6 if(n < 1) { return 0;}
7 else if(n == 1 || n == 2) { return 1;}
8 else if(n > 2) { return fibonacci(n - 1) + fibonacci(n - 2);}
9 };
10
11 // Fibonacci: closed form expression
12 // http://en.wikipedia.org/wiki/Golden_ratio#Relationship_to_Fibonacci_sequence
13 var fibonacci2 = function(n) {
14 var phi = (1 + Math.sqrt(5))/2;
15 return Math.round((Math.pow(phi, n) - Math.pow(1-phi, n))/Math.sqrt(5));
16 };
17
18 // Find first K Fibonacci numbers via basic for loop
10
var firstkfib = function(k) {
20 var i = 1;
21 var arr = [];
22 for(i = 1; i < k+1; i++) {
23 arr.push(fibonacci(i));
24 }
25 return arr;
26 };
27
28 // Print to console
29 var fmt = function(arr) {
30 return arr.join(" ");
31 };
32
33 var k = 20;
34 console.log("firstkfib(" + k + ")");
35 console.log(fmt(firstkfib(k)));
```