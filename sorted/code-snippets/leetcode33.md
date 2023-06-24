# code

```c++ if (nums.empty()) {return -1;}
class Solution {  
 public:  
  int search(std::vector<int> &nums, int target) {  
    if (nums.empty()) {return -1;}  
    if (nums.size() == 1 ) {  
      return nums[0] == target ? 0 : -1;
    }  
    int k = 0;  
    for (int i = 1; i < nums.size(); i++) {  
      if (nums[i] < nums[i - 1]) {  
        k = nums.size() - i;  
        break; 
        }  
    }  
    int l = 0, r = nums.size() - 1;  
    while (l <= r) {  
      int mid_idx = (l + r) / 2;  
      int mid_val = originidx(nums, k, mid_idx);  
      if (mid_val == target) return (mid_idx >= k) ? (mid_idx - k) : (mid_idx + nums.size() - k);  
      else if (mid_val < target) l = mid_idx + 1;  
      else r = mid_idx - 1;  
    }  
    return -1;  
  }  
  
  int originidx(std::vector<int> &nums, int offset, int i) {  
    int length = nums.size();  
    if (i >= offset) return nums[i - offset];  
    else return nums[length  - offset + i];  
  }  
};

```