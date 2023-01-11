# Dijkstra算法

起始位置

 `visit[]`: 已访问节点, 
 
- 访问过为1， 为访问为0
 
`dist[]`: 起始节点到其它节点的当前最短距离

`middle`: 中间节点

`path[]`: 

1. 初始化`dist[]`
2. 选择`middle`, 满足`visit[middle] == 0`且`dist[middle]`中最小
3. 标记`vist[middle] = 1;` 
4. 更新`dist[]`

