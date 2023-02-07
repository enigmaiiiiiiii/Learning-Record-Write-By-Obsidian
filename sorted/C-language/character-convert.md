# 字符转换

## _UNICODE变量定义

- 字符，字符指针

<table>
    <tr>
        <td></td>
        <td>原始代码</td>
        <td>unicode</td>
    </tr>
    <tr>
        <td></td>
        <td>char cFileName[255];</td>
        <td>TCHAR cFileName[255];</td>
    </tr>
    <tr>
        <td></td>
        <td>LPSTR strFilePath = NULL</td>
        <td>LPTSTR strFilepath = NULL</td>
    </tr>
    <tr>
        <td></td>
        <td>char EditChar(const char* cpar)</td>
        <td>TCHAR EditChar(LPCTSTR cPar);</td>
    </tr>
</table>

## 字符，字符常量定义

## 字符，字符串操作函数

## 字符转换函数

### win32提供了两个转换函数, 在头文件stringapiset.h中

- `MultiByteToWideChar()`, **多字节字符串**转换成等价的**宽字符串**(UTF-8/16)

UTF-16 转换位其他格式字符

```c
int WideCharToMultiByte(
  [in]            UINT                               CodePage,
  [in]            DWORD                              dwFlags,
  [in]            _In_NLS_string_(cchWideChar)LPCWCH lpWideCharStr,
  [in]            int                                cchWideChar,
  [out, optional] LPSTR                              lpMultiByteStr,
  [in]            int                                cbMultiByte,
  [in, optional]  LPCCH                              lpDefaultChar,
  [out, optional] LPBOOL                             lpUsedDefaultChar
);
```

参数:
lpWideCharStr,要转换字符指针

- `WideCharToMultiByte()`, **宽字符串**(UTF-8/16)转换成等价的**多字节字符串**

### CRT转换函数

- mbstowcs：把多字节字符串转换为宽字符串
- mbtowc：把多字节字符转换为宽字符
- wcstombs：把宽字符串转换为多字节字符串
- wctomb：把宽字符转换为多字节字符。

### ATL转换宏

- 内部使用`MultiByteToWideChar`和`WideCharToMultiByte`进行转换
- ATL宏的命名方式，<字符模式>2<字符模式>, 字符模式命名方式:
  - T：  表示指向Win32 TCHAR字符类型的指针，如：LPTSTR;
  - W：  表示指向Unicode wchar_t字符类型的指针, 如：LPWSTR;
  - A：  表示指向MBCS/ANSI char字符类型的指针，如：LPSTR;
  - OLE：表示指向COM OLECHAR字符类型的指针，如：LPOLESTR;
  - C：  表示C/C++中的const修饰符。

### 其他类型转换

- BSTR 转 char*
  - 使用_bstr_t类, 该类重载了赋值运算符重载 `_bstr_t b = bstrtext; char* text = b;`
  - ConvertBSTRToString
- char* 转 BSTR
  - 构造_bstr_t类对象, `BSTR bstrtext = _bstr_t("This is a test")`
  - _variant_t
  - SysAllocString
  - CComBSTR
  - ConvertStringToBSTR