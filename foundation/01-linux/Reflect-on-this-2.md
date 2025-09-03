1-The x lets you enter the folder.
Even if you can see the files with r, you can’t actually open them without x.
2-If a file has 777, anyone can change it.
On a web server, that means a hacker could upload code, run it, and take over your whole site.
3-Because it’s safer and easier.
chmod g+x just adds one thing: execute for group.
With octal, you have to do math and might mess up other permissions by accident.
4-Which means: delete everything on your system.
sudo gives full power — so one small typo can wipe your whole machine.
