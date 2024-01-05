# Code

```c++
class Solution {  
 public:  
  int lengthOfLongestSubstring(std::string s) {  
    if (s.empty()) return 0;  
    int maxCount = INT_MIN;  
    for (int i = 0; i < s.size(); i++) {  
      std::set<char> sc;  
      sc.insert(s[i]);  
      int j = i + 1;  
      while (j < s.size() && sc.find(s[j]) == sc.end()) {  
        sc.insert(s[j]);  
        j++;  
      }  
      maxCount = std::max(maxCount, j - i);  
    }  
    return maxCount;  
  }  
};
```
