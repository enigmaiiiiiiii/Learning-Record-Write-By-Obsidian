# code

```c++
class Solution {  
 public:  
  std::vector<int> searchRange(std::vector<int> &nums, int target) {  
    if (nums.empty()) return {-1, -1};  
  
    int l = 0, r = nums.size() - 1;  
    while (l < r) {  
      int mid = (l + r) / 2;  
      if (nums[mid] >= target) r = mid; 
        /// 为了找到最左边(索引最小)的目标值, 右边界应尽可能收缩, 因此再nums[mid] == target时，仍要更新右边界  
      else  l = mid + 1;
    }  
    if (nums[r] != target) return {-1, -1};  
    int left = r;  
     
    l = 0, r = nums.size() - 1;  
    while (l < r) {  
      int mid = (l + r + 1) / 2;  
      if (nums[mid] <= target) l = mid;  
      else r = mid - 1;  
    }  
    return {left, l};  
  }  
};
```