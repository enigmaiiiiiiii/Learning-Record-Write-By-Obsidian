# leetcode322

#动态规划

硬币组合
给定几种硬币面值, 用其组成要求的值, 所用硬币最少的组合方式的个数

```c++
class Solution {  
 public:  
  int coinChange(std::vector<int> &coins, int amount) {  
   // 初始化dp数组  
    std::vector<int> dp(amount+1, -1);  
    dp[0] = 0;  
    for (int i=1; i <= amount;i++) {  
      // 生成dp数组  
      for (int j=0;j < coins.size(); j++) {  
        if (coins[j] <= i && dp[i-coins[j]] != -1) {  // 小于i的面值, dp数组中存在元素与硬币面值coin[j]之和为i  
          if (dp[i] == -1 || dp[i] > dp[i- coins[j]] + 1) {  
              // dp[i]没有被找到或,i-当前硬币面值的索引dp数组中元素  
            dp[i] = dp[i-coins[j]] + 1;  
          }  
        }  
      }  
    }  
    return dp[amount];  
 } 
};
```


- dp数组的含义

索引含义:  要求用硬币组合的值
元素含义：得到总金额所需硬币最少组合的个数

- 初始化dp数组

组合

组成金额0不需要硬币，因此`dp[0] = 0;`

```c++
std::vector<int> dp(amount+1, -1);  // 索引从0开始
dp[0] = 0;  
```

- 生成dp数组

```c++
for(int i = 1; i <= mount; i++)
```

- dp数组递推过程

比较 索引为`总金额 - 每种硬币面值` 硬币组合个数最小值

```c++
if (dp[i] == -1 || dp[i] > dp[i-coin[j]]) {
  // 更新dp[i]的值
}
```