# 快捷键

## 按键序列QKeySequence

- 创建按键序列

以Crtl P为例

```c++
QKeySequence(QKeySequence::Print);
QKeySequence(tr("Ctrl + P"));  // 大写P
QKeySequence(tr("Ctrl + p"));  // 小写p
QKeySequence(Qt::CTRL + Qt::Key_P);
```

## QShortcut

```c++
// 创建快捷键
QShortcut *ps = new QShortcut(QKeySequence("Ctrl + E"), pw);

// 设置快捷键上下文(作用范围)
ps->setContext(Qt::ApplicationShortcut);

// 绑定快捷键
QObject::connect(ps, &QShortcut::activated, obj, &QObject::Method);

```

## 通过在首选字符前加&来指定

```c++
QRadioButton *button = new QRadioButton("Search from the &cursor", this);
```

快捷键为Alt + c