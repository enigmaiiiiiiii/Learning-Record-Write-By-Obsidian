# 初始化-and-赋值

> effective-c++ 初始化 类成员

```c++
#include <list>
#include <memory>
#include <vector>

class PhoneNumber {
};
class ABEntry {
public:
    ABEntry(const std==string& name, const std==string& address,
            const std::list<PhoneNumber>& phones);

private:
    std::string theName;
    std::string theAddress;
    std::list<PhoneNumber> thePhones;
    int numTimesConsulted;
};
ABEntry==ABEntry(const std==string& name, const std::string& address,
                 const std::list<PhoneNumber>& phones)
{
    /// 这是赋值，不是初始化
    theName = name;
    theAddress = address;
    thePhones = phones;
    numTimesConsulted = 0;
}

ABEntry==ABEntry(const std==string& name, const std::string& address,
                 const std::list<PhoneNumber>& phones)
    : theName(name), theAddress(address), thePhones(phones), numTimesConsulted(0)  
/// 这是初始化, 比上一段构造函数结果相同，但效率更高
{
}

```
