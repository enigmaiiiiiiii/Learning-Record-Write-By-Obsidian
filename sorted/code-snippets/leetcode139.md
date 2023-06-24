# code

#动态规划  #字符串

```c++
class Solution {
 public:
  bool wordBreak(std::string s. std::vector<std::string> wordDict) {
    std::unordered_set<string> wordDictset(wordDict.begin(), wordDict.end());
    std::vector<bool> dp(s.size() + 1);
    dp[0] = true;
    for (int i = 1; i < s.size(); i++) {
      for (int j = 0; j < i; j++) {
        if (dp[j] && wordDictset.find(s.substr(j, i - j)) != wordDictset.end()) {
          dp[i] = true;
          break
        }
      }
    }
    return dp[s.size()];
  }
 
  
}
```

- 要点dp数组的size
- 外层循环的范围