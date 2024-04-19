# Linux/macOS Payload: Autolycus

### Source Code

* https://github.com/Nekrosis-ISS-Capstone/Linux-Payload

### Description

This is an example of a payload that can be used against a Linux based target in conjunction with the Nekrosis application. If Nekrosis is being used to demonstrate how an adversary could achieve persistence, this payload can be used to demonstrate the kind of code an adversary may deploy with their unauthorized access. This payload will call back to the C2 server to receive an instruction directive and will then proceed to recurse over the file system, copying all readable non-executable files to the C2 server over FTP.

Note the client supports Linux and macOS, but the server only supports Linux.

### Compilation

In the source code you must change all instances of "ADDRESS:PORT" with the appropriate information.

```shell [Command Line]
sudo apt install libcurl4-openssl-dev
gcc main.c -o main -s -lcurl
```

### Configuring the C2 Server

The following setup was successfully tested in Kali Linux. Both the web server and the VSFTPD server must be accessible by the target.

1. Setting up the VSFTPD server:

Installing VSFTPD:
```shell [Command Line]
sudo apt update && sudo apt install vsftpd
```
Creating the dedicated user:
```shell [Command Line]
sudo useradd test && sudo passwd test
```
Creating their home directory (that will be used as the local_root directory for FTP):
```shell [Command Line]
sudo mkdir /home/test && sudo chown test:test /home/test
```
The /etc/vsftpd.conf file needs to be edited to contain the following lines:
```shell [Command Line]
write_enable=YES
listen_port=[PORT]
userlist_deny=NO
userlist_enable=YES
userlist_file=/etc/vsftpd.userlist
pasv_min_port=[PORT]
pasv_max_port=[PORT]
local_root=/home/test/
```
The userlist should contain the dedicated user:
```shell [Command Line]
sudo touch /etc/vsftpd.userlist && sudo echo "test" >> /etc/vsftpd.userlist
```
Reload the service for the changes to take effect:
```shell [Command Line]
sudo systemctl restart vsftpd
```
Lastly, if this server will be running on a machine that is publicly accessible via SSH it is recommended to add the following line to /etc/ssh/sshd_config:
```shell [Command Line]
DenyUsers test
```

2. Setting up the web server:

Adding the dedicated user's credentials and the instruction directive:
```shell [Command Line]
echo -n "username" >> username.txt
```
```shell [Command Line]
echo -n "password" >> password.txt
```
```shell [Command Line]
echo -n "COPY" >> instruction.txt
```
Serving the files for the payload to see:
```shell [Command Line]
python -m http.server 8080
```

With these servers properly configured and accessible by the target the payload will have what it needs to execute the COPY directive. It is highly encouraged not to deploy this payload over the public internet particularly if there may be sensitive information on the victim.
