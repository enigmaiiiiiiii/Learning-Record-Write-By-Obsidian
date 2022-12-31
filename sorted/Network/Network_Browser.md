# Browser

## Subresource Integrity

[Subresource Integrity]()

- 使浏览器能够验证他们获取的资源的完整性, 是否存在被篡改的可能性
- 原理允许浏览器提供一个要获取的资源的cryptographic hash值, 获取资源的cryptographic hash值必须匹配

how helps

- 使用[CDN](/sorted/FrontEnd/CDN.md)时, 避免CDN获取的资源被攻击者篡改