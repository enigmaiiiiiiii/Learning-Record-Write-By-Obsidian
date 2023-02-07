# Javassist Get Start

## Modify a Class File Byte Code

向编译后的`.class`文件中添加一个字段

- point.java

```java
public class Point{

    private int x;
    private int y;

    public Point(int x, int y){
        this.x = x;
        this.y = y;
    }
}
```

- App.java

```java
public class App{
    public static void main(String[] args) {
        try (
                BufferedInputStream fin = new BufferedInputStream(
                        new FileInputStream("Point.class"));) {
            ClassFile cf = new ClassFile(new DataInputStream(fin));
            FieldInfo f = new FieldInfo(cf.getConstPool(), "id", "I");
            f.setAccessFlags(AccessFlag.PUBLIC);
            cf.addField(f);
            cf.write(new DataOutputStream(new FileOutputStream("Point.class")));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

after running that, the `Point.class` file will be modified.

```java
Field[] fields = Point.class.getDeclaredFields();
for (Field field : fields) {
    System.out.println(field.getName());
}
```

```bash
x
y
id
```


## Get A [CtClass]()

```java
ClassPool pool = ClassPool.getDefault();
CtClass cc = pool.get("Point");
```

## Defining a new class

```java
ClassPool pool = ClassPool.getDefault();
CtClass cc = pool.makeClass("Point");
```
