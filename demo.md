# Practical activity 4.1  Introducing the Shell



---



### Introduction

The purpose of this activity is to introduce the Linux shell and to explore some simple commands. You will also look at the Linux ‘man’ (manual) pages, which provide essential help when using commands in the Linux shell environment.

The Linux shell environment is regarded by many Linux professionals as the powerhouse of the operating system, but those new to Linux often see it as rather daunting. As you progress further through the module, you will have the opportunity to develop the confidence and understanding of the potential power and versatility of the command-line environment.


---



---



### Estimated time

2 hours.


---



---



### What you need

Your Ubuntu system and maybe a small notepad to make notes of the commands and the results they produce.


---



## Step 1


Start your Ubuntu system, log in and wait until the desktop has finished loading. There are several methods that can be used to access the shell; the easiest is to click on the `Dash Home` and type in `terminal`.

Note: for pressing multiple keys on the keyboard at the same time, we will use the convention of the + sign: for example, `Ctrl+Alt+T` indicates pressing the `Ctrl`, `Alt` and `T` keys simultaneously.


## Step 2


Open a Linux terminal. Some useful keyboard shortcuts for using the terminal include the following.

* Press the `F11` key: this will maximise the shell window.

* Press the `Ctrl+Shift+N` keys (these must be the left `Ctrl` and `Shift` keys): this will open a new shell.

* Press the `Ctrl+Shift+T` keys (again, these must be the left `Ctrl` and `Shift` keys): this will open a new tab in your shell window.

* Press the `Ctrl+Shift+Q` keys (again, these must be the left `Ctrl` and `Shift` keys): this will close your shell window. Pressing `Alt+F4` will also close the window (but be careful: this key combination will close most application windows).

* To save you typing the command out again, try pressing the `up` arrow on your keyboard: you should see the last command you entered appear in the shell window.

You can look at these shortcuts in the taskbar of the terminal window. For example, by selecting `File` you can see the shortcuts for opening and closing new tabs and windows.

For students using `Ubuntu 18.04 LTS (Bionic Beaver)`, not all of these shortcuts are supported. Use the taskbar to look at what shortcuts are supported.



When entering commands in the Linux shell, the key points to remember are:

* Linux commands are almost always lower case.

* Linux commands are almost always a single word.

* Linux commands are followed by a space, and then either ‘command options’ or a ‘target’, or both.

Figure 1 demonstrates the golden rules for entering Linux commands. The screenshot illustrates a single Linux command that has been used in three slightly different ways.


![figure ../tm129-20B-images/tm129_lin_w4_pa04_p01_f01.small.png](../tm129-20B-images/tm129_lin_w4_pa04_p01_f01.small.png)


__Figure 1__ The command `ls` used in three different ways

Screenshot showing the command ‘ls’ entered in the shell using different options.
Try the commands displayed in Figure 1: `ls`, `ls -lt` and `ls -lt /var`. What you see on your computer is likely to be different, but the principle remains the same.

1. First, the command `ls` has been entered on its own. This command lists the contents of the directory in which you are currently located (in a newly opened shell window, this defaults to the home directory of the user you are logged in as).

2. Next, the `ls` command is entered again but this time it is followed by the very important space and then `-lt`; these two letters are examples of ‘command options’ and they modify the function of the command. In this case the `l` option gives a detailed listing, and the `t` option sorts the output into date and time order.

3. The final example demonstrates `ls -lt` (command and options) followed by a ‘target’ of `/var`. This instructs the `ls` command to produce a detailed time-ordered list of the contents of the `/var` directory instead of the directory you are currently in.

When you have tried these three examples of the use of `ls`, type `clear` and press `Enter`. Then type `exit` and press `Enter` to close the shell.


## Step 3


Next, you should launch a new shell and try a few more commands in order to become more comfortable with the shell.

Many Linux commands have names that seem quite sensible. For example, open the shell and try the following four commands in order:


```python

date

cal

whoami

history

```


When we ran these four commands, we got the output shown in Figure 2.

The `date`, `cal` and `whoami` commands are self-explanatory; they show the date and a calendar and who the current user is.

The `history` command is particularly useful, as it produces a list of the commands entered in the shell on a user-specific basis.


![figure ../tm129-20B-images/tm129_lin_w4_pa04_p01_f02.small.png](../tm129-20B-images/tm129_lin_w4_pa04_p01_f02.small.png)


__Figure 2__ Four useful commands: `date`, `cal`, `whoami` and `history`

Screenshot of shell showing four useful commands entered: ‘date’, ‘cal’, ‘whoami’ and ‘history’.
If you wish to run the third command in your history list, type `!3`. This is very handy if you have a long, complex command that you wish to repeat.

If you press the `up` arrow on the keyboard, you should notice that you can cycle through your previously entered commands. The `down` arrow on the keyboard moves through these commands in the opposite way. Use the `up` arrow to recall the command `cal` and then append a different year to the end of the command; for example `cal 2017`. Many users find this method quicker than using the mouse to access the calendar on the task bar.

If you wish to clear the history list, just type `history -c` (`history` is the command, and the `c` option means ‘clear’).


## Step 4


Of course, the obvious questions arise: how do you remember what these commands do and what the many different options do?

The Linux shell has the answer: it has inbuilt help known as Linux ‘man’ pages, which are user manuals for the commands. The majority of shell commands have a man page associated with them. The man page can be accessed by typing `man` in front of the command. For example, if you wish to access the man page for the `ls` command, you only need to enter:


```python

man ls

```


The result of entering the above command is shown in Figure 3. You can move up and down the man page by using the `Page Up` and `Page Down` keys. To quit the man page, just press the `Q` key on the keyboard. If this is your first time reading a man page, some of the content will seem unintelligible: as your experience develops this will become clearer.


![figure ../tm129-20B-images/tm129_lin_w4_pa04_p01_f03.small.png](../tm129-20B-images/tm129_lin_w4_pa04_p01_f03.small.png)


__Figure 3__ The man (manual) page for the command `ls`

Screenshot of shell showing the man (manual) page for the command ‘ls’.
Another useful trick you can use at the shell is to type the first letter of a command (`w`, for example), and then press the `Tab` key (quickly) twice; if you pressed the `Tab` key quickly enough then you should see every command that begins with the letter `w` displayed on the screen.

Try this with other letters and see what other commands are available.


## Step 5


If you look at the shell prompt shown at the top of Figure 4 (below) you will notice that it has four parts:


```python

martin@martin-VirtualBox:~$
```


For the example shown, these four parts are:

1. `martin`, the name of the user

2. `martin-VirtualBox`, the hostname of the computer

3. `~`, the tilde (it indicates that the user is located in their home directory; note that you can easily confirm where you are located in the file system by typing `pwd` (‘print working directory’) as shown in the example)

4. `$`, the dollar sign, which indicates that the user has normal privileges in the Bash shell.

These four components of the shell prompt give you a lot of useful information in a very compact form. The prompt tells you the computer’s name, your location in the file system, and if you have normal or superuser (sudo) privileges (this is particularly useful if you are remotely accessing a computer via a remote command-line utility such as telnet or SSH (as in Study week 8) because it is very easy to become confused about who you are, which computer you are typing into, and which directory your commands will affect.


![figure ../tm129-20B-images/tm129_lin_w4_pa04_p01_f04.small.png](../tm129-20B-images/tm129_lin_w4_pa04_p01_f04.small.png)


__Figure 4__ The shell prompt

Screenshot of the shell showing user ‘martin’ using the ‘su’ command.
In Figure 4, the command `sudo su` has been entered. This may cause the system to request the password for the user you created during the Ubuntu installation. On the system displayed in Figure 4, this user is named ‘martin’. After entering the correct password, the user martin will ‘switch user’ to the root user (this is similar to the ‘administrator’ on a Microsoft Windows system).

On most Linux distributions you would enter `su` followed by the password you created for the root user during the installation, but Ubuntu doesn’t require you to create the root user and set the root password during the installation. For this reason, the `sudo su` command is used to become the root user. Notice the root user has `#` at the end of the shell prompt (the `#` indicates the superuser ‘root’).
<div xmlns:str="http://exslt.org/strings" style="background:lightgreen">
Great care should be taken when running commands as the root user because this user has the highest privileges. There is the potential to inadvertently damage your operating system.
</div>
As an example, in the lower part of Figure 4 an additional user named ‘fred’ has been created on the system (you will learn how to create users from the shell in Practical activity 4.4).

If you wish to ‘switch user’ from martin to fred, type `su fred` and enter fred’s password (nothing is displayed as you enter the password; this is a security feature).

Notice that the user has changed from martin to fred, but fred is still located in martin’s home directory, `/home/martin`. This is fixed by typing `cd` (change directory); when the command `cd` is entered without a directory location following it, the result is to change directories to the user’s home directory. Typing `exit` will revert the user back to martin.

You have reached the end of this practical activity and can move on to Practical activity 4.2.

