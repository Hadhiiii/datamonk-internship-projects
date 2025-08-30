COMMAND-LINE-NAVIGATION
1-rm -r deletes everything inside a folder, including subfolders, without asking for confirmation. One mistake and you can delete important stuff.

To be safe, use rm -ri. It asks for confirmation before deleting each file. Always double-check the folder contents with ls before running it.


2-Use less. It lets you scroll through the file and search easily. cat will dump everything at once and make it hard to navigate.

3-Wildcards like * (anything) and ? (one character) let you work with groups of files instead of typing them all out.

eg:

*.txt grabs all .txt files.

file* grabs files starting with “file”.

They save time when you need to move, copy, or delete multiple files at once.

4-Absolute path: Full address from the root, like /home/user/project. It’s always clear where it is.

Relative path: Starts from your current location. For example, ../project goes up one level and then into the project folder.

Use absolute paths for certainty, and relative paths for quick navigation when you’re working within the same folder structure.
PROCESS MANAGEMENT AND ENVIRONMENT


1-First, use pkill with the application name
If pkill doesn’t work, you can try kill with the PID:
2-/tmp is a common directory for temporary files and is often world-writable. If an attacker or malicious script places an executable with the same name as a common command in /tmp, it could get executed when you try to run the command, leading to potential system compromise.

Modifying your $PATH carelessly (e.g., adding directories that are writable by non-privileged users) could allow attackers to inject malicious scripts into the directories already on your $PATH, potentially executing harmful code with your privileges

3-Alias to update the system (for Ubuntu/Debian-based distros):
alias update='sudo apt update && sudo apt upgrade'
This will let you run update instead of typing the full sudo apt update && sudo apt upgrade every time.

eg:
alias proj='cd ~/Projects'
Once you add these to your .bashrc, run source ~/.bashrc to apply the changes.

4-du -sh: Shows the disk usage of a specific directory and its contents.

-s means “summarize” (don't list each file), and -h means “human-readable” (shows sizes like 1K, 2M, etc.).

Use this when you want to see how much space a directory or set of files is taking up.

df -h: Shows the disk space available on all mounted filesystems. It gives you a general overview of your disk's total capacity and how much space is free or used.

-h stands for “human-readable.”

Use this to check overall disk usage and see if a partition is full.

When to use each:

Use du -sh when you're trying to find which specific directory or file is taking up the most space (e.g., a specific project folder).

Use df -h when you’re troubleshooting a “disk full” error to check the overall disk usage across all partitions. If you’re running out of space, df -h can help you identify which partition is full.




project

Directories: These are standard in many web applications for organizing code, assets, logs, and temporary data.

Files: Each file has a specific purpose related to configuration, dependencies, or documentation.

Extensions: Files that serve a specific technical or platform purpose (e.g., .json, .js) use extensions, while project-specific files (e.g., Gemfile, Rakefile) don't need them.



reflect on them 

man provides full documentation on a command, explaining all its options and usage. Use it when you need a detailed guide. For example, man ls.

--help gives a quick summary of a command’s options. It's ideal for a fast reminder. For example, ls --help.

help is for built-in shell commands like cd or echo. Use it when you need help with commands inside the shell, not external ones. For example, help cd.

Use help for shell commands, and man or --help for other commands depending on whether you need details or just a quick look.


The key difference between ls | grep ".txt" and find . -name "*.txt" is that ls | grep only searches the current directory and filters results for files containing .txt, while find searches recursively through the current directory and all subdirectories for .txt files. ls | grep is useful for a quick search in the current directory, while find is more powerful when you need to search through subdirectories or need more control over the search criteria.

You can use history | grep "your-search-term" to filter through your command history and find specific commands, such as history | grep "git" to find all git-related commands you ran.

You might choose to send a .tar.gz archive instead of a .zip file because .tar.gz is more commonly used in Linux environments, handles file permissions better, and supports compression without losing file metadata. However, before extracting an archive from an unknown source, you should be aware of the risk of malicious code being included, as it could automatically execute scripts or alter files during extraction, so always verify the contents firs















