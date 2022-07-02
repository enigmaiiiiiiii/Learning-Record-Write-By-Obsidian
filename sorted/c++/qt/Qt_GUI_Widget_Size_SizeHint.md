# sizeHint()

- 返回QSize
- 是虚函数
- 保存小部件的建议大小
- 通过重新实现来设置建议大小

将建议大小设置为width = 700, heigth = 600

```c++
class A : public QWidget
{
    QSize sizeHint() const 
    {
        return Qsize(700, 600);
    }
};
```

- 若此属性的值无效，则不建议
- 若小部件没有布局，sizeHint()的默认实现将返回无效的大小
- 若有布局, 将返回布局的首选大小

minimumSizeHint()

- minimumSizeHint()设置建议的最小大小
- QLayout不会将小部件的大小调整为小于minmumIszeHint()的大小
- minimumSizeHint()被忽略的情况
  - 如果设置了minimumSize()
  - 大小策略设置为QSizePolicy::Ignore
  
## sizePolicy

- 保存小部件的默认布局行为
- 如果有QLayout管理此小部件的子项，则使用该布局指定的大小策略
- 如果没有QLayout，则使用此函数的返回值
- setSizePolicy(QPolicy::Policy)

QSizePolicy::Policy枚举值

- QSizePolicy::Fixed
- QSizePolicy::Minimum
  - sizeHint()是最小的
  - 小部件可以扩展，但它变大没有任何好处（例如，按钮的水平方向）
  - 不能小于sizeHint()提供的大小。
- QSizePolicy::Maximum
  - sizeHint()是最大值
  - 如果其他小部件需要空间(例如分隔线），可以以任何值缩小小部件，而不会造成损害
  - 它不能大于sizeHint()提供的大小。
- QSizePolicy::Preferred: 
    - sizeHint()首选的
    - 小部件可以缩小
    - 可以扩展，但不建议比sizeHint()大
- QSizePolicy::Expanding
  - sizeHint()是一个合理的大小，但小部件缩小，仍然有用
  - 小部件可以利用额外的空间，因此它应该获得尽可能多的空间(例如，水平滑块的水平方向)
- QSizePolicy::MinimumExpanding
- QSizePolicy::Ignored