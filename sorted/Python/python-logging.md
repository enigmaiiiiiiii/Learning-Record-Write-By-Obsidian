# Python - Logging

## Take A Look

```py
import logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logging.info('log message')
```

## log method

parameters

- msg
- *args
- exc_info
- stack_info
- stacklevel
- extra
  - value type is dict
  - provide additional context to the log message

```py
logging.basicConfig(format='%(levelname)s $(some_key)s')
logging.info("log message...", extra={some_key: some_value})
```

## log level

- CRITICAL = 50
- ERROR = 40
- WARN = 30
- INFO = 20
- DEBUG = 10


