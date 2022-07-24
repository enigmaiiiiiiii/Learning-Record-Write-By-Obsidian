# Java统计文件中的字符数，单词数，行数

```java
public class TextCounter {
    public static void main(String[] args) throws Exception {
        if (args.length != 1) {
            System.out.println("Compile Usage: java sourcefile filename")
            System.exit(0);
        }
        File targerFile = new File(args[0]);
        if (!targetFile.exists()) {
            System.out.println("targetFile" + args[0] + " not exist");
            System.exit(1);
        }

        Scanner sc = new Scanner(File);
        int wordCount = 0, lineCount = 0;
        while (sc.hasNext()) {
            String line = sc.nextLine(); 
            lineCount++;
            wordCount = line.split("[ \\t\\n\\r,]").length;
        }
        System.out.println(targetFile.length() + "Characters");
        System.out.println(wordCount + " words");
        System.out.println(lineCount + " lines");
    }
}
```