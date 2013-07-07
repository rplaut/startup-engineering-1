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
cp ~/downloads/skey.pem ~/.ssh/
chmod 400 ~/.ssh/skey.pem
chmod 700 ~/.ssh
nano ~/.ssh/config # edit the file as shown below
cat ~/.ssh/config
Host awshost1
HostName ec2-54-218-35-71.us-west-2.compute.amazonaws.com
 User ubuntu
 IdentityFile "~/.ssh/skey.pe
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
```
echo $PATH
alias ll='ls -alrth'
sudo apt-get install -y git-core
which git
```

##### copy files between remote machines
```
scp -i keypair.pem hello.txt amazonserver:~/
scp hello.txt awshost1:~/
scp hello.txt awshost1:~/foo.txt
```

##### install node and npm

``` shell 
$ sudo apt-get update
# Install a special package
$ sudo apt-get install -y python-software-properties python g++ make
# Add a new repository for apt-get to search
$ sudo add-apt-repository ppa:chris-lea/node.js
# Update apt-get’s knowledge of which packages are where
$ sudo apt-get update
# Now install nodejs and npm
$ sudo apt-get install -y nodejs
```

##### Hello world
```
#!/usr/bin/env node
console.log("Hello World");
```

##### Hello world 2
```
#!/usr/bin/env node
var fs = require(’fs’);
var outfile = "hello.txt";
var out = "Modify this script to write out something different.\n";
fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
```

##### Fibonacci

```
#!/usr/bin/env node
// Fibonacci
// http://en.wikipedia.org/wiki/Fibonacci_number
var fibonacci = function(n) {
if(n < 1) { return 0;}
else if(n == 1 || n == 2) { return 1;}
else if(n > 2) { return fibonacci(n - 1) + fibonacci(n - 2);}
};

 // Fibonacci: closed form expression
 // http://en.wikipedia.org/wiki/Golden_ratio#Relationship_to_Fibonacci_sequence
 var fibonacci2 = function(n) {
 var phi = (1 + Math.sqrt(5))/2;
 return Math.round((Math.pow(phi, n) - Math.pow(1-phi, n))/Math.sqrt(5));
 };
 // Find first K Fibonacci numbers via basic for loop
var firstkfib = function(k) {
var i = 1;
var arr = [];
for(i = 1; i < k+1; i++) {
arr.push(fibonacci(i));
}
return arr;
};
 // Print to console
 var fmt = function(arr) {
 return arr.join(" ");
 };
 var k = 20;
 console.log("firstkfib(" + k + ")");
 console.log(fmt(firstkfib(k)));
 
```
