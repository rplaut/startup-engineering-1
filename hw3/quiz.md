## startup engineering hw3 quiz
---

##### Question 1
What tool is most appropriate for changing all instances of foo to bar in a file?

- **sed**
- paste
- lsof
- tail
- cut

##### Question 2
What is the result of running:
```
  yes | nl | head | tail -n +10 | awk '{print $1}'
```
result is
> 10


##### Question 3
Which of the following tools is most appropriate for debugging a linking issue? (Note: for this question, you should Google each of these commands and figure out which one applies; the rest of the questions will only cover commands from the lecture, but Googling commands is a very frequent exercise.)

- **ldd**
- lzcat
- lpr
- ln
- lsof

##### Question 4
Which of the following command/flag combinations enable the use of multiple processors?

- less -R
- ls -t
- top -o
- grep -a
- **xargs -P**

##### Question 5
Which of the following commands will list all python files containing the string asdf under the current directory?

- ls -alrth 'asdf.*py'
- head *py | grep asdf
- python -c 'import os, re; print [xx for xx in os.listdir(".") if re.search("py$",xx)]'
- **find -type f -name '*py' -print0 | xargs -0 grep -l -i 'asdf'**
- locate 'py' | grep 'py$' | grep -a asdf

##### Question 6
You have a five million row table in tab-delimited text format named foo.txt. Which of the following commands would be useful for finding the sum of the values in the fifth column, taken over all rows which have the phrase transcription factor as the entry in their third column?

- asr
- arch
- sed
- agrep
- **awk**

##### Question 7
The next few questions refer to the genomic data set NC_007779.ptt.
You can retrieve it via wget https://spark-public.s3.amazonaws.com/startup/data/NC_007779.ptt 

What does the following command do?

```
curl -s https://spark-public.s3.amazonaws.com/startup/data/NC_007779.ptt | wc -l
```

- Prints out the contents of the ptt file.
- Compiles the ptt file into an executable
- **Counts the number of lines in the ptt file**
- synchronizes the remote ptt file with the local copy
- Sends the ptt file to the remote server

##### Question 8
Which of the following commands counts the number of rows in NC_007779.ptt that have the word 'protein' in them?

- **grep protein NC_007779.ptt | wc -l**
- grep protein NC_007779.ptt | wc -L
- grep -v protein NC_007779.ptt | wc -l
- **cat NC_007779.ptt | grep protein | wc -l**
- find protein NC_007779.ptt | wc -L

##### Question 9
Which of the following commands prints the 123rd line of NC_007779.ptt?

- **cat NC_007779.ptt | head -123 | tail -1**
- grep -n 123 NC_007779.ptt
- **awk 'NR==123' NC_007779.ptt**
- **sed -n '123p' NC_007779.ptt**

##### Question 10
Which of the following prints the number of bytes in NC_007779.ptt?

- ** echo `wc -c NC_007779.ptt` **
- wc NC_007779.ptt &
- wc -w NC_007779.ptt
- None of the above

##### Question 11
Which command would you use to create a symbolic link to a file?

- **ln -s**
- du
- rsync
- sl
- touch

##### Question 12
Which git command syncs the remote repository with all the changes you've made in your local git repository?

- git init
- git commit
- git remote
- **git push**

##### Question 13
For your new startup, you plan to commit your git repository to two different locations. (eg. github and heroku)
Say you have already pushed your local repository to github and would now like to push it heroku as well.
Which of the following git commands would you use to accomplish this?

- **git remote add**
- git pull
- git reset
- git clone

##### Question 14
What is the SHA-1 hash of the first commit of the git repository https://github.com/startup-class/setup.git?
> 50ff86b66254abeb42b2aa5eabe915e18c359ac0


##### Question 15
Why is it good practice to have a setup.git and dotfiles.git?

- It makes sense to stored copies of important files in multiple git repositories in case they get lost.
- setup.git and dotfiles.git work as branches of your code so you and your team mate can work on different things concurrently.
- **It makes it easy to rebuild a remote environment just like the one you've been using, and eases deployment.**
- You can have at most one setup.sh in one git repository and so we use setup.git and dotfiles.git to store the other setup configuration files.
