# CSRF

- CSRF: cross site request forgery 跨站请求伪造
- 欺骗用户的浏览器去访问一个曾经[认证过](SpringSecurity_Authentication.md)的网站, 并执行一些操作; 由于认证过, 网站会认为这个请求是用户自己操作
- 与xss不同, [xss](Web_Cross_Site_Scripting.md)是利用用户对网站的信任, 而csrf是利用网站对用户的信任