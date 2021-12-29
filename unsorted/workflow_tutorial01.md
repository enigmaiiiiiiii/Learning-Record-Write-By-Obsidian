# tutorial

```c++
#include <stdio.h>  
#include "workflow/WFHttpServer.h"  
  
int main()  
{  
    WFHttpServer server([](WFHttpTask *task) {  
        task->get_resp()->append_output_body("<html>hello world!</html>");  
 });  
  
 if (server.start(8888) == 0) { // start server on port 8888  
 getchar(); // press "Enter" to end.  
 server.stop();  
 }  
  
    return 0;  
}
```

## WFHttpserver : 
- 是wfserver的模板的实例的别名
- 由protocol::Httprequest, protocol::HttpResponse实例化

```c++
using WFHttpserver = WFServer<protocol::HttpRequest, protocol::HttpResponse>;
```

- WFHttptask
  - get_resp()
- server
  - start()
  - stop()