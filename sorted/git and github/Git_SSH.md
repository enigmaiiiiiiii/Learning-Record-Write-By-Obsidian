# SSH

## 生成SSH Public key

1. Open Git Bash
2. Enter `ssh-keygen -t ed25519 -C "your_email@example.com"`
    > 第二步, 用邮箱作为**标注**创建一个新的SSH key
    - 生成 public/private 算法 钥匙对
    - `-t`: 指定钥匙类型(算法类型)
    - `-C`: 提供一个个comment
3. 系统提示`Enter a file in which to save the key(/c/Users/you/.ssh/id_algorithm): [Press Enter]`  
    - 设置key文件存放位置, 按Enter表示接受默认

4. 提示输入安全短语

## 检查已存在的SSH keys

1. Open Git Bash
2. Enter `ls -al ~/.ssh`
3. 如果已存在public SSH key, 则可能的文件为:  
    - id_rsa.pub
    - id_ecdsa.pub
    - id_de25519.pub

## ssh-agent

- 用于保存私钥的程序, 用于私钥的公钥认证
- 通常在X-session或登陆会话开始时启动
- 所有其他程序或窗口作为ssh-agent的客户端启动
