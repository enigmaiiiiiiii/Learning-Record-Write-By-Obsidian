# NAT

- 全称Netword address translation
- 有装有NAT软件的路由器实现, 这样得路由器称为NAT路由器
- 在外界看来NAT路由器像一个具有单一[[IP地址]]得单一设备
  - 所有离开路由器流向因特网的报文都拥有一个相同ip 
  - 所有进入主机的报文都拥有一个相同的ip
- NAT路由器的地址通过[[因特网服务提供商]]ISP的[[DHCP]]服务得到地址

## 转换表

- NAT转换表
<table>
    <tr align="center">
        <td>WAN端</td>
        <td>LAN端</td>
    </tr>
    <tr>
        <td>138.76.29.7(路由器在广域网中的ip), 端口号:5001</td>
        <td>10.0.0.1(子网ip), 端口号: 3345</td>
    </tr>
    <tr align="center">
        <td colspan=2>每当收到新来源数据报时，在WAN端生成一个新端口号...</td>
    </tr>
</table>