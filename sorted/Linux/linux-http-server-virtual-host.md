# Linux - Http Server Virtual Host

* [On RHEL](#on-rhel)
* [On Ubuntu](#on-ubuntu)

## On RHEL

**Step 1**: mkdir: add extra dicrectories

```sh
mkdir -p /etc/httpd/sites-available /etc/httpd/sites-enabled
```

**Step 2**: edit `/etc/httpd/conf/httpd.conf`

```sh
vim /etc/httpd/conf/httpd.conf
```

add following line at the end of the file

```sh
Include /etc/httpd/sites-enabled
```

**Step 3**: add Configuration file

- add to `/etc/httpd/sites-available`

```sh
vim /etc/httpd/sites-available/host.name
```

add following content

```sh
<VirtualHost *:80>
        ServerName host.name
        ServerAdmin username@rockylinux.org
        DocumentRoot /var/www/sub-domains/host.name/html
        DirectoryIndex index.php index.htm index.html
        Alias /icons/ /var/www/icons/
        # ScriptAlias /cgi-bin/ /var/www/sub-domains/your-server-hostname/cgi-bin/

    CustomLog "/var/log/httpd/host.name-access_log" combined
    ErrorLog  "/var/log/httpd/host.name-error_log"

        <Directory /var/www/sub-domains/host.name/html>
                Options -ExecCGI -Indexes
                AllowOverride None

                Order deny,allow
                Deny from all
                Allow from all

                Satisfy all
        </Directory>
</VirtualHost>
```

**step 4**: add host default page

```sh
vim /var/www/sub-domains/host.name/html/index.html
```

**step 5**: map virtual host to localhost in `/etc/hosts`

- `/etc/hosts`: local DNS

```sh
vim /etc/hosts
```

add following line

```sh
127.0.0.1    host.name
```

**step 6**: restart httpd

**Check Resutl**

```sh
curl host.name
```

if access the virtual host from another computer

- ...

## On Ubuntu

**Step 1**. mkdir: store the data serve to visitor

```sh
sudo mkdir -p /var/www/foo.com/public_html
sudo mkdir -p /var/www/bar.com/public_html
```

- `foo.com`, `bar.com`: [domain name](computer-network-domain-name.md)

**Step 2**. chown: change the owner of the directory

- directory created above is owned by root
- following let current user to make changes to the directory

```sh
sudo chown -R $USER:$USER /var/www/foo.com/public_html
sudo chown -R $USER:$USER /var/www/bar.com/public_html
```

- `$USER`: current user
- `$USER:$USER`: user and group

```sh
sudo chmod -R 755 /var/www
```

- set `/var/www` read and execute permission for all user

**Step 3**. create default pages for Each Virtual Host

- edit file `/var/www/<domainName>/public_html/index.html`

**Step 4**. Configure through Virtual Host Files