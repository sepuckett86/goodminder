## Running the local server
To test the website (that is composed of php, not html files), it is necessary to run a local server on your computer.
To do this, Vagrant comes in handy. 

Get Vagrant and VirtualBox installed as described in this website: 
https://www.taniarascia.com/what-are-vagrant-and-virtualbox-and-how-do-i-use-them/

## Clone your git repository
On GitHub, go to the project you want to work on. Find the "Clone or download" button to copy the URL of your project. 

You should have a directory with www and Vagrantfile

Navigate to www/html
```
git clone <projectURL>
```

## Commands for running the server
Navigate to the directory which contains www and Vagrantfile

Then type:
```
$ vagrant up
```
Now your site will be accessible by the following URL: 
```
http://192.168.33.10/html/
```
Or directly into your project:
```
http://192.168.33.10/html/<directory>
```

To shut down the server, type:
```
$ vagrant halt
```

To enter the server with command line:
```
$ vagrant ssh
```

To exit server in command line:
```
~$ exit
```
