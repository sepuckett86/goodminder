# Steps for using git in shared project with GitHub using command line

## Sources: 
http://product.hubspot.com/blog/git-and-github-tutorial-for-beginners

http://dont-be-afraid-to-commit.readthedocs.io/en/latest/git/commandlinegit.html


## Tell git who you are
```
$ git config --global user.email "you@example.com"
$ git config --global user.name "Your Name"
```

## Check status
```
$ git status
```

## Set-up

Navigate to location for cloned git repository

```
$ cd <chosen directory>
```
Clone repository

```
$ git clone https://github.com/sepuckett86/goodminder.git
```

-Note: this makes a new folder with the repository name inside the current directory

-Note: in order to create a new directory and clone the repository into that directory in one command, do git clone https://somerepositoryurl.com/repo.git nameOfNewFolder
## Make a new branch or navigate to existing branch

Make a branch to work on your new code

```
$ git checkout -b <branch name>
```

Change current branch

```
$ git checkout <branch name>
```


## Upload a new code file
Save it in the repository folder on your local computer

Navigate to repository folder

Change to correct branch

Add file to staging environment

```
$ git add <file name>
```

Or, add all file of certain type to staging environment 

```
$ git add “*.<type of file>”
```

```
$ git add -A
```

Create a commit

```
$ git commit -m “<This is text about what I change in this commit>”
```

Push it to GitHub

```
$ git push origin <branch name>
```

## Change an existing code file

Same as add new file
