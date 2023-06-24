# LeetCode 215

```c++
class Solution {
 public:
  int quick_Select(int left, int right, std::vector<int> &nums) {
    int i = left, j = right - 1;
    int pivot = nums[right];
    while (true) {
      while (j > left && nums[j] >= pivot) j--;
      while (i < right && nums[i] <= pivot) i++;
      if (i >= j) break; // i end at the first value greater than target from left to right, j end at the first value less than target from right to left
      std::swap(nums[i], nums[j]);
    }
    std::swap(nums[i], nums[right]);
    return i;
  }
  int findKthLargest(std::vector<int> &nums, int k) {
    int left = 0, right = nums.size() - 1;
    int target = nums.size() - k;
    while (left < right) {
      int p = quick_Select(left, right, nums);
      if (p == target) return nums[p];
      else if (p < target) left = p + 1;
      else right = p - 1;
    }
    return nums[right];
  }
};
```