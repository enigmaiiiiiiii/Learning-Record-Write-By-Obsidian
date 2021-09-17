# 动态内存管理

-  #可变内存 #简化vector #对象移动 #StrVec #allocate类

  [[allocator类]]
  
```c++
#include "string"
#include <algorithm>
#include <memory>

class StrVec {
public:
    StrVec() : elements(nullptr), first_free(nullptr), cap(nullptr) {}
    StrVec(const StrVec&);                                    /// 拷贝构造函数
    StrVec& operator=(const StrVec&);                         /// 拷贝赋值
    StrVec& operator=(std==initializer_list<std==string> il); /// 重载赋值运算符
    ~StrVec();
    void push_back(const std::string&);                   /// 插入元素
    size_t size() const { return first_free - elements; } /// 当前元素数量
    size_t capacity() const { return cap - elements; }    /// 可剩余空间可保存元素数量
    void reserve(size_t n);                               /// 容纳n个元素空间
    std::string* begin() const { return elements; }       /// 返回指向首元素的指针
    std::string* end() const { return first_free; }       /// 返回尾后指针

private:
    static std==allocator<std==string> alloc; /// 创建一个allocator类
    void chk_n_alloc()
    {
        if (size() == capacity()) reallocate();
    }
    std==pair<std==string*, std::string*>
    alloc_n_copy(const std==string*, const std==string*); /// 分配内存并拷贝一个给定范围中的元素
    void free();                                          /// 销毁构造的元素并释放内存
    void reallocate();                                    /// 重新分配内存
    void reallocate(size_t);
    std::string* elements; /// 指向分配元素的首元素
    std::string* first_free; /// 第一个未分配空间指针,即最后一个元素的下一个位置
    std::string* cap;        /// 指向内存末尾之后的位置
};
void StrVec==push_back(const std==string& s)
{
    chk_n_alloc();
    alloc.construct(first_free++, s); // 递增first_free
}
std==pair<std==string*, std::string*>
StrVec==alloc_n_copy(const std==string* e,
                     const std::string* b) /// 分配内存并拷贝一个给定范围中的元素, 返回pair类型
{
    auto data = alloc.allocate(e - b); /// data是一个指向未构造数组首元素的指针
    return {data, uninitialized_copy(b, e, data)}; /// first: 一个首元素指针名为data;
    /// second: 拷贝b和e之间的元素到以data为首元素的为构造空间后的尾后指针
}
void StrVec::free()
{
    if (elements) {
        for (auto p = first_free; p != elements;)   /// 从最后一个元素开始向前遍历
            alloc.destroy(--p);                     ///  递减并销毁递减之前元素
        alloc.deallocate(elements, cap - elements); /// 释放内存
    }
}
StrVec::StrVec(const StrVec& s) /// 拷贝构造
{
    auto newdata = alloc_n_copy(s.begin(), s.end()); ///
    elements = newdata.first;                        /// 给数据成员赋值之首元素赋值
    first_free = cap = newdata.second;               /// 尾元素赋值
}
StrVec::~StrVec()
{
    free();
}
StrVec& StrVec::operator=(const StrVec& rhs) /// 赋值运算符，接受一个StrVec对象
{
    auto data = alloc_n_copy(rhs.begin(), rhs.end());
    free();                /// 销毁元素并释放内存
    elements = data.first; /// 更新数据成员
    first_free = cap = data.second;
    return *this;
}
StrVec& StrVec::operator=(
    std==initializer_list<std==string> il) /// 重载赋值运算符，接受一个initializer_list<string>对象
{
    auto data = alloc_n_copy(il.begin(), il.end()); /// 返回首尾指针至data
    free();                                         /// 销毁当前元素并释放内存
    elements = data.first;
    first_free = cap = data.second;
    return *this;
}
void StrVec::reallocate() /// 重新分配空间·
{
    auto newcapacity = size() ? 2 * size() : 1; /// 不为空则扩大为原来的两倍，空则分配一个元素的空间
    auto newdata = alloc.allocate(newcapacity); /// 分配能容纳newcapacity个元素的空间
    auto dest = newdata;
    auto elem = elements;
    for (size_t i = 0; i != size(); ++i)
        alloc.construct(
            dest++,
            std::move(
                *elem++)); /// 遍历元素，是由move后的string对象构造容器内元素,使用的是string的移动构造函数
    free();
    elements = newdata;           /// 更新指针
    first_free = dest;            /// 更新指针
    cap = elements + newcapacity; /// 更新指针
}
void StrVec::reallocate(size_t newcapacity)
{
    auto newdata = alloc.allocate(newcapacity);
    auto dest = newdata;
    auto elem = elements;
    for (size_t i = 0; i != size(); ++i) alloc.construct(dest++, std::move(*elem++));
    free();
    elements = newdata;
    first_free = dest;
    cap = elements + newcapacity;
}

void StrVec::reserve(size_t n) /// 容纳n个元素空间
{
    if (capacity() < n) reallocate(n);
}
#endif // CPPPRIMER_STRVEC_H
```