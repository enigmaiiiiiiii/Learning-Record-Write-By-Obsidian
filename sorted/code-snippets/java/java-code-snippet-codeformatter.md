# java源代码格式化Demo

```java
public class CodeFormatter {
    public static void main(String[] args) throws Exception {
        if (args.length != 1) {
            System.out.println("Compile Line Usage: java sourcefile FilePath");
            System.exit(1);
        }

        File targetFile = new File(args[0]);
        if (!targetFile.exists()) {
            System.out.println("Target File " + args[0] + " does not exist");
            System.exit(0);
        }

        Scanner sc = new Scanner(targetFile);
        StringBuilder buffer = new 
        while (sc.hasNext()) {
            String line = sc.nextline();
            String tmpStr = line.trim();
            if (!tmpStr.isEmpty() && tmpStr[0] == '{') {
                buffer.append('{');
                if (tmpStr.length() > 1) {  
                    // 第一个非空白字符为'{', 且之后还有内容
                    buffer.append("\r\n" + line.replace('{', ''));
                }
            } else {
                buffer.append(line);
            }
        }

        sc.close();
        PrintWriter pw = new PrintWriter(targetFile);
        pw.print(buffer);
        pw.close();
    }
} 
```