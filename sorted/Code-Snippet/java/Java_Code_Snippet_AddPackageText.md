#  Java添加包语句

```java
public class AddPackageText {
    public static void main(String[] args) {
        if (args.length != 1) {
            System.out.println("Usage: java sourcefile RootDirectory");
            System.exit(0);
        }
        File rootDir = new File(args[0]);
        if (!rootDir.isDirectory()) {
            System.out.println(args[0] + " is not a Directory");
            System.exit(1);
        }

        if (!rootDir.exists()) {
            System.out.println("file " + rootDir + " does not exist");
            System.exit(2);
        }
        traverseDir(rootDir, "", args[0], args[0]);
    }

    public static void traverseDir(File file, String packageName, String path, String rootPath) {
        if (!file.isDiresctory()) {
            if (file.getName().endsWith(".java") && !packageName.isEmpty()) {
                StringBuilder buffer = new StringBuilder();
                buffer.append("package " + packageName.subString(0, packageName.length() - 1) + ";\r\n");
                Scanner sc = new Scanner(file);
                while (sc.hasNext()) {
                    String str = sc.nextLine();
                    buffer.append(str + "\r\n");
                }
                sc.close();
                PrintWriter pw = new PrintWriter(file);
                pw.print(buffer.toString());
                pw.close();
            } else if (file.isDirectory()) {
                if (!file.getName().equals(rootPath)) {
                    packageName += file.getname() + ".";
                }
                path += "\\";
                for (String name: file.list()) {
                    traverseDir(new File(path + name), packageName, path + name, rootPath);
                }
            }
        }
    }
}
```