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