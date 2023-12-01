# Git - Get Stuck

## kex_exchange_identification

error message:

```
kex_exchange_identification: Connection closed by remote host
Connection closed by 20.205.243.166 port 22
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

solution

- add this to `~/.ssh/config`

```
Host github.com
    Hostname ssh.github.com
    Port 443
    User git
```

## Error when git clone

key error infomation:

- `error: invalid path 'csr/public/pokemon/type:-null.jpg'`

condition

- happenned in windows

solution:

```sh
git config --global core.ignorecase false
```

## WARNING: REMOTE IDENTIFIATION HAS CHANGED!

The Error Message

- when clone repository from github, this warning occured

```
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@ WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED! @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the RSA key sent by the remote host is
SHA256:uNiVztksCsDhcc0u9e8BujQXVUpKZIDTMczCvj3tD2s.
Please contact your system administrator.
Add correct host key in ~/.ssh/known_hosts to get rid of this message.
Host key for github.com has changed and you have requested strict checking.
Host key verification failed.
```

Caused By

- caused by https://github.blog/2023-03-23-we-updated-our-rsa-ssh-host-key/

## fatal: Unable to create '...../index.lock':

```
fatal: Unable to create '/Users/dopamine/Documents/notelab/.git/index.lock':
File exists.
Another git process seems to be running in this repository, e.g.
an editor opened by 'git commit'. Please make sure all processes
are terminated then try again. If it still fails, a git process 
may have crashed in this repository earlier:                    
remove the file manually to continue.
```
