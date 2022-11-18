# run命令

```bash
docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
```

- IMAGE: 用于创建容器实例的镜像模板
- OPTIONS: 选项参数
- COMMAND: 容器启动后执行的命令


```bash
docker run -d -p 80:5000 training/webapp python app.py
```

- training/webapp: 镜像名称
- python app.py: 用于启动容器内的应用程序, 相当于在命令行输入`$ python app.py`
- `-d`: 后台运行
- `-p`: 端口映射
  - `80`: 宿主机端口
  - `5000`: 容器端口

## options

- 通过options参数可以覆盖镜像中的默认配置

> 几乎可以覆盖镜像中的所有配置, 所以run比其它命令有更多选项参数
