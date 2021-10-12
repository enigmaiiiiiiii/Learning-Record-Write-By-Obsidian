# code

## My code

```c++
class Solution {  
 public:  
  std::vector<std::vector<int>> merge(std::vector<std::vector<int>> &intervals) {  
   std::multimap<int, int> edge;  
   std::vector<std::vector<int>> ans;  
   for (auto a : intervals) {  
       edge.insert({a[0], a[1]});  
   }  
   std::vector<std::vector<int>> sorted;  
   for (auto k: edge) {  
       sorted.push_back({k.first, k.second});  
   }  
    
   int i = 0, j = 1;  
   while (i < sorted.size()) {  
     int left = sorted[i][0];  
     int right = sorted[i][1];  
     while (j  < sorted.size()) {  
       if (right >= sorted[j][0]) {  
         if (right <= sorted[j][1]) right = sorted[j][1];  
         j++;  
       } else {  
         break;  
       }  
     }  
     ans.push_back({left,right});  
     i = j;  
   }  
     return ans;  
 } 
};
```

## Official code

```c++
class Solution {
 public:
  std::vector<std::vector<int>> mergeOfficial(std::vector<std::vector<int>> &intervals) {  
    if (intervals.size() == 0) {  
      return {};  
    }  
    std::sort(intervals.begin(),intervals.end());  
    std::vector<std::vector<int>> merged;  
    for (int i = 0; i < intervals.size(); i++) {  
      int L = intervals[i][0], R = intervals[i][1];  
      if (!merged.size() || merged.back()[1] < L) {  
        merged.push_back({L, R});  
      } else {  
        merged.back()[1] = std::max(merged.back()[1], R);  
      }  
    }  
    return merged;  
  }
};
```