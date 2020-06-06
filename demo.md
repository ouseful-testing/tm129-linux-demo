---
jupyter:
  jupytext:
    text_representation:
      extension: .md
      format_name: markdown
      format_version: '1.2'
      jupytext_version: 1.4.2
  kernelspec:
    display_name: Python 3
    language: python
    name: python3
---

<!-- #region graffitiCellId="id_bztcedk" -->
# Practical activity 4.1  Introducing the Shell

<!-- #endregion -->

<!-- #region graffitiCellId="id_8zgyjzm" -->
<div class='alert-danger'>If you see an <em>Activate Graffiti</em> button in the notebook toolbar above, click it.<br/><br/>
On activating Graffit, your browser may become unresponsive for a few seconds as the Graffiti machinery is installed into the page.
<br/><br/>
If the toolbar button already displays <em>Show Graffiti Editor</em>, everything should already be good to go.</div>
<!-- #endregion -->

<!-- #region graffitiCellId="id_tegr4vp" -->
### Introduction

The purpose of this activity is to introduce the Linux shell and to explore some simple commands. You will also look at the Linux ‘man’ (manual) pages, which provide essential help when using commands in the Linux shell environment.

The Linux shell environment is regarded by many Linux professionals as the powerhouse of the operating system, but those new to Linux often see it as rather daunting. As you progress further through the module, you will have the opportunity to develop the confidence and understanding of the potential power and versatility of the command-line environment.
<!-- #endregion -->

<!-- #region graffitiCellId="id_1auza0t" -->
---

<!-- #endregion -->

<!-- #region graffitiCellId="id_bp68y7j" -->
---

<!-- #endregion -->

<!-- #region graffitiCellId="id_9qcur1o" -->
### Estimated time

2 hours.
<!-- #endregion -->

<!-- #region graffitiCellId="id_hw4q0z2" -->
---

<!-- #endregion -->

<!-- #region graffitiCellId="id_g1vpymb" -->
---

<!-- #endregion -->

<!-- #region graffitiCellId="id_3e0lrsa" -->
### What you need

A Jupyter notebook server with the [`jupytergraffiti`](https://github.com/willkessler/jupytergraffiti/) extension installed. (If this is the `jupytext-md` doc rather than an `.ipynb` doc, you will also need [`jupytext`](https://github.com/mwouts/jupytext) installed.
<!-- #endregion -->

<!-- #region graffitiCellId="id_4dw83a8" -->
---

<!-- #endregion -->

<!-- #region graffitiCellId="id_wdr7ztj" -->
## Step 1
<!-- #endregion -->

<!-- #region graffitiCellId="id_sf6gnfb" -->
If you are running this notebook on MyBinder or the provided OU TM129 LinuxLab container, you will already have access to an Ubuntu Linux enviroment.

There are several methods that can be used to access the shell.

Firstly, via terminal:

- from the [notebook server home page](../), click on the New -> Terminal menu option; alternatively, click on [this link](../terminals/1) to launch the terminal window directly;
- embedded in a notebook using JupyterGraffiti: click the *Show Graffiti Editor* button in the notebook toolbar, and from the pop-up toolbar click on the insert terminal button. *(A standalone [`jupyterterminal`](https://github.com/willkessler/jupyterterminals) package is under development that will provide a direct toolbar button to insert a terminal in a notebook.)*
- in the [JupyterLab UI](../lab), click on the `Terminal` button in the default JupyterLab *Launcher* view.

Secondly, via a notebook code cell:

- prefix a single shell command with a `!` character to identify it as a shell command;
- use the `%%bash` cell block magic in the first line of the code cell to indicate that the rest of the commands in the cell are shell commands.
<!-- #endregion -->

<!-- #region graffitiCellId="id_pdbcxru" -->
## Step 2

When entering commands in the Linux shell, the key points to remember are:

* Linux commands are almost always lower case.

* Linux commands are almost always a single word.

* Linux commands are followed by a space, and then either ‘command options’ or a ‘target’, or both.

The following code cells demonstrate how the `ls` command can be entered in the shell using different options.

1. First, the command `ls` has been entered on its own. This command lists the contents of the directory in which you are currently located (in a newly opened shell window, this defaults to the home directory of the user you are logged in as).

The leading `!` character is a special character that tells the notebook code cell to run the code directly in the shell. *(We could alternatively use a [bash kernel](https://github.com/takluyver/bash_kernel) where the code cells do run code directly in the shell.)*

*Click in the following cell then press the `Run` button in the notebook toolbar to execute it, or use the appropriate keyboard shortcut (see list of keyboard shortcuts in the notebook toolbar `Help` menu.*
<!-- #endregion -->

```python graffitiCellId="id_3lg6k5i"
! ls
```

<!-- #region graffitiCellId="id_pdbcxru" -->
2. Next, the `ls` command is entered again but this time it is followed by the very important space and then `-lt`; these two letters are examples of ‘command options’ and they modify the function of the command. In this case the `l` option gives a detailed listing, and the `t` option sorts the output into date and time order.
<!-- #endregion -->

```python graffitiCellId="id_dt2hx47"
! ls -lt
```

<!-- #region graffitiCellId="id_pdbcxru" -->
3. The final example demonstrates `ls -lt` (command and options) followed by a ‘target’ of `/var`. This instructs the `ls` command to produce a detailed time-ordered list of the contents of the `/var` directory instead of the directory you are currently in.
<!-- #endregion -->

```python graffitiCellId="id_jtx3gq9"
! ls -lt /var
```

<!-- #region graffitiCellId="id_5rlk05p" -->
The narrative document structure of Jupyter notebooks provides us with a way of scripting a series of shell commands in an "intereactive textbook"style environment, as well as running our commands interactively.

However, you are far more likely to encounter the Linux shell interactively using a `terminal` or `console` client, such as the one below.
<!-- #endregion -->

<!-- #region graffitiCellId="id_qd7z2vo" -->
<div class='alert-danger'>If you don't see a terminal embedded below, click the <em>Activate Graffiti</em> button in the notebook toolbar above.</div>
<!-- #endregion -->

<!-- #region graffitiCellId="id_nz297zq" -->
Click in the terminal below and enter:

- `ls` followed by `Enter`;
- `ls -lt` followed by `Enter`;
- `ls -lt /var` followed by `Enter`.
<!-- #endregion -->

<!-- #region graffitiCellId="id_5s8v7zh" graffitiConfig={"type": "terminal", "startingDirectory": "demo.md", "terminalId": "id_5s8v7zh", "rows": 20} -->
<i>Loading terminal (id_5s8v7zh), please wait...</i>
<!-- #endregion -->

<!-- #region graffitiCellId="id_pdbcxru" -->
When you have tried these three examples of the use of `ls`, type `clear` and press `Enter` to clear the terminal desiplay.

You can also kill the terminal session by typing `exit` followed by `Enter`, which wil prevent you form using that particular terminal until you reload the notebook.
<!-- #endregion -->

<!-- #region graffitiCellId="id_rc66jfj" -->
## Step 3
<!-- #endregion -->

<!-- #region graffitiCellId="id_7b06kxr" -->
Next, you should launch a new shell and try a few more commands in order to become more comfortable with the shell.

Many Linux commands have names that seem quite sensible. For example, open the shell and try the following four commands in order:


```
date

cal

whoami

history
```
<!-- #endregion -->

<!-- #region graffitiCellId="id_fmtt03y" graffitiConfig={"type": "terminal", "startingDirectory": "demo.md", "terminalId": "id_fmtt03y", "rows": 20} -->
<i>Loading terminal (id_fmtt03y), please wait...</i>
<!-- #endregion -->

<!-- #region graffitiCellId="id_8r8r3le" -->
The `date`, `cal` and `whoami` commands are self-explanatory; they show the date and a calendar and who the current user is.

The `history` command is particularly useful, as it produces a list of the commands entered in the shell on a user-specific basis.
<!-- #endregion -->

<!-- #region graffitiCellId="id_pwcmu7f" -->
If you press the `up` arrow on the keyboard, you should notice that you can cycle through your previously entered commands. The `down` arrow on the keyboard moves through these commands in the opposite way. Use the `up` arrow to recall the command `cal` and then append a different year to the end of the command; for example `cal 2017`. Many users find this method quicker than using the mouse to access the calendar on the task bar.

If you wish to clear the history list, just type `history -c` (`history` is the command, and the `c` option means ‘clear’).
<!-- #endregion -->

<!-- #region graffitiCellId="id_5g8bm24" -->
## Step 4
<!-- #endregion -->

<!-- #region graffitiCellId="id_nxx2by2" -->
Of course, the obvious questions arise: how do you remember what these commands do and what the many different options do?

The Linux shell has the answer: it has inbuilt help known as Linux ‘man’ pages, which are user manuals for the commands. The majority of shell commands have a man page associated with them. The man page can be accessed by typing `man` in front of the command. For example, if you wish to access the man page for the `ls` command, you only need to enter: `man ls`
<!-- #endregion -->

<!-- #region graffitiCellId="id_5s9v6xt" graffitiConfig={"type": "terminal", "startingDirectory": "demo.md", "terminalId": "id_5s9v6xt", "rows": 20} -->
<i>Loading terminal (id_5s9v6xt), please wait...</i>
<!-- #endregion -->

<!-- #region graffitiCellId="id_damozdx" -->
You can move up and down the man page by using the `Page Up` and `Page Down` keys. To quit the man page, just press the `Q` key on the keyboard. If this is your first time reading a man page, some of the content will seem unintelligible: as your experience develops this will become clearer.

Another useful trick you can use at the shell is to type the first letter of a command (`w`, for example), and then press the `Tab` key (quickly) twice; if you pressed the `Tab` key quickly enough then you should see every command that begins with the letter `w` displayed on the screen.

Try this with other letters and see what other commands are available.
<!-- #endregion -->

<!-- #region graffitiCellId="id_65bfhiq" -->
## Step 5
<!-- #endregion -->

<!-- #region graffitiCellId="id_g09mdkv" -->
If you look at the shell prompt shown at the top of Figure 4 (below) you will notice that it has four parts:


`martin@martin-VirtualBox:~$`
    
or something of the form:
    
`jovyan@jupyter-ouseful-2dtesting-2dtm129-2dlinux-2ddemo-2duweytw:~$`
<!-- #endregion -->

<!-- #region graffitiCellId="id_4a9uv06" -->
For the example shown, these four parts are:

1. `martin`, the name of the user

2. `martin-VirtualBox`, the hostname of the computer

3. `~`, the tilde (it indicates that the user is located in their home directory; note that you can easily confirm where you are located in the file system by typing `pwd` (‘print working directory’) as shown in the example)

4. `$`, the dollar sign, which indicates that the user has normal privileges in the Bash shell.

These four components of the shell prompt give you a lot of useful information in a very compact form. The prompt tells you the computer’s name, your location in the file system, and if you have normal or superuser (sudo) privileges (this is particularly useful if you are remotely accessing a computer via a remote command-line utility such as telnet or SSH (as in Study week 8) because it is very easy to become confused about who you are, which computer you are typing into, and which directory your commands will affect.
<!-- #endregion -->

<!-- #region graffitiCellId="id_o4vh2dy" graffitiConfig={"type": "terminal", "startingDirectory": "demo.md", "terminalId": "id_o4vh2dy", "rows": 20} -->
<i>Loading terminal (id_o4vh2dy), please wait...</i>
<!-- #endregion -->

<!-- #region graffitiCellId="id_2dgrwey" -->

*The following won't work in MyBinder. Permissions arenlt set up for it...*

The command `sudo su` has been entered. This may cause the system to request the password for the user you created during the Ubuntu installation. On the system displayed in Figure 4, this user is named ‘martin’. After entering the correct password, the user martin will ‘switch user’ to the root user (this is similar to the ‘administrator’ on a Microsoft Windows system).

On most Linux distributions you would enter `su` followed by the password you created for the root user during the installation, but Ubuntu doesn’t require you to create the root user and set the root password during the installation. For this reason, the `sudo su` command is used to become the root user. Notice the root user has `#` at the end of the shell prompt (the `#` indicates the superuser ‘root’).
<div xmlns:str="http://exslt.org/strings" style="background:lightgreen">
Great care should be taken when running commands as the root user because this user has the highest privileges. There is the potential to inadvertently damage your operating system.
</div>
As an example, in the lower part of Figure 4 an additional user named ‘fred’ has been created on the system (you will learn how to create users from the shell in Practical activity 4.4).

If you wish to ‘switch user’ from martin to fred, type `su fred` and enter fred’s password (nothing is displayed as you enter the password; this is a security feature).

Notice that the user has changed from martin to fred, but fred is still located in martin’s home directory, `/home/martin`. This is fixed by typing `cd` (change directory); when the command `cd` is entered without a directory location following it, the result is to change directories to the user’s home directory. Typing `exit` will revert the user back to martin.

You have reached the end of this practical activity and can move on to Practical activity 4.2.

<!-- #endregion -->

```python graffitiCellId="id_fxfnpii"

```
