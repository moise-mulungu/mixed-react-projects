
```bash

# view the contents of a directory, including if each item is a file or a directory
ls -al

mkdir new-directory-name

# view the contents of a file
more filename  
cat filename

# edit a file on any version of linux/unix
vi filename # 
# usually you can edit more easily using VS Code, in any directory:
code . # to edit a file
# vi used to be very useful when I was new to development, but I think nowadays not so much. vi requires several keyboard shortcuts that take a lot of practice

cat /etc/shells # Mac - shells available (bash, etc.)

# recursively copy a directory (if the target directory is already there, only changes will be sync'ed)
rsync -n -av --progress photon/client/ photon_first/client --exclude node_modules
# -n for a "dry run", to see what will be included
# can copy computer-to-computer if .ssh is set up in the ~/.ssh of both

echo "$SHELL" # find out which shell is currently in use

# list directories recursively
ls -R
find .

# find files sorted by date
find . -printf "%T+ %p\n" | sort
# in current directory only, add: -maxdepth 1

# find files sorted by size
find . -type f  -exec du -h {} + | sort -r -h | more

# case-insensitive find
find . -iname 'capsin*' # capsInFilename.txt

tar -tf filename.tar # view contents of the .tar file
tar -xvf filename.tar # extract


```