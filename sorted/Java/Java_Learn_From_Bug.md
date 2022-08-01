# bug

## No.1

Can load library: libawt_xawt.so

## NO.2 
- Exception in thread "AWT-EventQueue-0" java.awt.HeadlessException

## No.3 

- 加载主类...时出现LinkageError

`java.lang.UnsupportedClassVersionError: Preview features are not enabled for sample/Sample (class file version 62.65535). Try running with '--enable-preview'`

可能的原因

- 编译所用JDk版本与运行所用JDK版本不匹配

## No.4 

 `module java.base does not "opens java.util" to unnamed module @5305068a`

- 不要通过反射来提高访问权限
- 当你必须使用反射时，确保<font color="red">直接调用者(方法)</font>与恶意代码隔离
  - 通过声明调用为private或final

## No.5

`The import javax.servlet cannot be resolved`

- 要使用servlet, 需要先下载tomcat

方案一:

- 使用javac -cp指定servlet-api.jar类文件搜索路径, 连接源文件完成编译

```shell
javac -cp /usr/share/tomcat/lib/servlet-api.jar sample.java
```

## No.6

只读取一行的原因

- BufferedReader中有buffer数组, readLine()方法, 会将

```java
public class Sample {
    public static void main(String[] args) {
        FileInputStream fin = new FileInputStream("demo.txt");
        InputStreamReader byteToChar = new InputStreamReader(fin);
        BufferedReader br = new BufferedReader(byteToChar);

        while (fin.read() != -1) {
            System.out.println(br.readLine());
        }
    }
}
```