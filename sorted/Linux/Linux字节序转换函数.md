# Linux字节序转换

```c++
#include <netinet/in.h>
unsigned long int htonl(unsigned long int hostlong);
unsigned short int htons(unsigned short int hostshort );
unsigned long int ntohl(unsigned long int netlong);
unsigned short int ntohs(unsigned short int netshort );
// host to network long 长整型主机字节序转化网络字节序
```