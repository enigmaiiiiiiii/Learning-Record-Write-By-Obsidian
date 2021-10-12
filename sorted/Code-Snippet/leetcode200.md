# code

#广度优先搜索


```c++
class Solution {  
 public:  
  int numsIslands(std::vector<std::vector<char>> &grid) {  
    std::queue<std::vector<int>> island; // 路径队列  
    std::queue<std::vector<int>> water;  
    std::set<std::vector<int>> pass; // 已经过的点  
    int islandNum = 0;  
    unsigned int x_max = grid.size() - 1, y_max = grid[0].size() - 1;  
    for (int i = 0; i <= x_max; i++) {  
      for (int j = 0; j <= y_max; j++) {  
         int x = i, y = j;  
         if (pass.find({x, y}) == pass.end()) {  
           if (grid[i][j] == '1') {  
             islandNum += 1;  
             island.push({i, j});  
         } else water.push({i, j});  
         while (!island.empty()) {  
           std::vector<int> cur = island.front();  
           island.pop();  
           x = cur[0], y = cur[1];  
           pass.insert({x, y});  
           if (y < y_max && y >= 0 && pass.find(right(x, y)) == pass.end()) {  
             if (grid[x][y + 1] == '1') {  
               island.push(right(x, y)); // 在范围内且未经过的点加入队列  
               pass.insert(right(x, y));  
           }  
               }  
                   if (y > 0 && y <= y_max && pass.find(left(x, y)) == pass.end()) {  
                     if (grid[x][y - 1] == '1') {  
                      island.push(left(x, y)); // 在范围内且未经过的点加入队列  
           pass.insert(left(x, y));  
           }  
                   }  
                   if (x <= x_max && x > 0 && pass.find(up(x, y)) == pass.end()) {  
                     if (grid[x - 1][y] == '1') {  
                      island.push(up(x, y)); // 在范围内且未经过的点加入队列  
           pass.insert(up(x, y));  
           }  
                   }  
                   if (x < x_max && x >= 0 && pass.find(down(x, y)) == pass.end()) {  
                     if (grid[x + 1][y] == '1') {  
                      island.push(down(x, y)); // 在范围内且未经过的点加入队列  
           pass.insert(down(x, y));  
           }  
                   }  
                  }  
                  while (!water.empty()) {  
                   std::vector<int> cur = water.front();  
           water.pop();  
           x = cur[0], y = cur[1];  
           pass.insert({x, y});  
           if (y < y_max && y >= 0 && pass.find(right(x, y)) == pass.end()) {  
                     if (grid[x][y + 1] == '0') {  
                      water.push(right(x, y)); // 在范围内且未经过的点加入队列  
           pass.insert(right(x, y));  
           }  
                   }  
                   if (y > 0 && y <= y_max && pass.find(left(x, y)) == pass.end()) {  
                     if (grid[x][y - 1] == '0') {  
                      water.push(left(x, y)); // 在范围内且未经过的点加入队列  
           pass.insert(left(x, y));  
           }  
                   }  
                   if (x <= x_max && x > 0 && pass.find(up(x, y)) == pass.end()) {  
                     if (grid[x - 1][y] == '0') {  
                      water.push(up(x, y)); // 在范围内且未经过的点加入队列  
           pass.insert(up(x, y));  
           }  
                   }  
                   if (x < x_max && x >= 0 && pass.find(down(x, y)) == pass.end()) {  
                     if (grid[x + 1][y] == '0') {  
                      water.push(down(x, y)); // 在范围内且未经过的点加入队列  
           pass.insert(down(x, y));  
           }  
            }  
           }  
         }  
        }  
      }  
      return islandNum;  
 }  
  std::vector<int> left(int x, int y) {  
   return {x, y - 1};  
 }  
  std::vector<int> right(int x, int y) {  
   return {x, y + 1};  
 }  
  std::vector<int> up(int x, int y) {  
   return {x - 1, y};  
 }  
  std::vector<int> down(int x, int y) {  
   return {x + 1, y};  
 }  
};
```