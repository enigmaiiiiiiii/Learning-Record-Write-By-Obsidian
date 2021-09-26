# LeetCode 912

- 快速排序version 1.0

```c++
class Solution {  
 public:  
  std::vector<int> sortArray(std::vector<int> &nums) {  
    fx(nums, 0, (int)nums.size() - 1);  
    return nums;  
  }  
  void fx(std::vector<int> &nums, int l, int r) {  
    if (l >= r) return;
    std::srand(std::time(nullptr));  
    int p_idx = rand() % (r - l) + l;  
    int i = l, j = r - 1;
    int p_val = nums[p_idx];
    std::swap(nums[p_idx], nums[r]);   /// 以基准值换至右端为例
    while (true) {   /// true,而不是i > j  
      while (nums[i] <= p_val && i < r) i++;  
      while (nums[j] >= p_val && j > l) j--;  
      if (i >= j) break;
      std::swap(nums[i], nums[j]);  
    }  
    std::swap(nums[r], nums[i]); /// 索引i的左边小于基准值，右边大于基准值  
    fx(nums, l, i - 1);  
    fx(nums, i + 1, r);  
  }  
};
```

