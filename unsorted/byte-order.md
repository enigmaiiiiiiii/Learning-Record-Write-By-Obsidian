# Byte Order

- 对于跨越多个字节的程序对象在存储器中的存储顺序
- 对于一个十六进制值0x01234567

little endian
  <table>
    <tr>
        <td>...</td>
        <td>地址范围</td>
        <td>0x100</td>
        <td>0x101</td>
        <td>0x102</td>
        <td>0x103</td>
        <td>...</td>
    </tr>
    <tr>
        <td>...</td>
        <td></td>
        <td>01</td>
        <td>23</td>
        <td>45</td>
        <td>67</td>
        <td>...</td>
    </tr>
  </table>
big endian 
  <table>
    <tr>
        <td>...</td>
        <td>地址范围</td>
        <td>0x100</td>
        <td>0x101</td>
        <td>0x102</td>
        <td>0x103</td>
        <td>...</td>
    </tr>
    <tr>
        <td>...</td>
        <td></td>
        <td>67</td>
        <td>45</td>
        <td>23</td>
        <td>01</td>
        <td>...</td>
    </tr>
  </table>
  
- [RFC](network-rfc.md) 1700规定, [TCP/IP 协议](tcp-ip-protocol-system.md)使用big endian作为网络字节序
