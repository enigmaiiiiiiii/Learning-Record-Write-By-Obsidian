# code

[[堆排序]]

## 堆排序

```c++
// 下沉节点, 直观代码
void maxNode(std::vector<int> &nums, int i, int len) {  
  int left_idx = (i << 1) + 1;  
  int right_idx = (i << 1) + 2;  
  int largest;  
  if (nums[i] < nums[left_idx]) largest = left_idx;  
  else largest = i;  
  if (right_idx <= len && nums[right_idx] > nums[largest]) largest = right_idx;  
  if (largest != i) {
  std::swap(nums[i], nums[largest]);  
  i = largest;
  maxNode(nums, i, len);
  }  
}
// 精简代码
void sink(std::vector<int> &nums, int i) {
 int j = (i << 1) + 1;  
 int max_idx = nums.size() - 1;
 if (j < max_idx && nums[j] < nums[j + 1]) j++;  
 if (j <= max_idx && nums[i] < nums[j]) {  
   std::swap(nums[i], nums[j]);  
   i = j; //  
   sink(nums, i); 
 }  
}
void build(std::vector<int> &nums, int l, int r) {
  for (int j = (r - 1) / 2 + 1; j >= 0, j--) {
    sink(nums, j);
  }
}
// 用sink()方法排序数组
void sortarray(std::vector<int> &nums) {
  for (int j = nums.size() - 1; j >= 0; j--) {
    std::swap(nums[0], nums[j]);
    build(nums, 0, j - 1);
  }
}
```

[[位运算符]]

## 快速排序

[[快速排序]]

## 归并排序

[[归并排序]]


```c++
class Solution{
 public:
  void split_and_merge(std::vector<int> &nums, int l, int r) {  
    if (l == r) return;  
    int mid = (l + r) >> 1;  
    split_and_merge(nums, l, mid);  
    split_and_merge(nums, mid + 1, r);  
    int i = l, j = mid + 1;  
    int cur = 0;  
    while (i <= mid && j <= r) {  
      if (nums[i] <= nums[j]) {  
        tmp[cur++] = nums[i++];  
      } else {  
        tmp[cur++] = nums[j++];  
      }  
    }  
    while (i <= mid) {  
      tmp[cur++] = nums[i++];  
    }  
    while (j <= r) {  
      tmp[cur++] = nums[j++];  
    }  
    for (int i = l; i <= r; i++) {  
      nums[i] = tmp[i - l];  
    }  
  }  
      
  std::vector<int> sortArray(std::vector<int> &nums) {  
    tmp.resize(nums.size(), 0);  
    split_and_merge(nums, 0, nums.size() - 1);  
    return nums;  
  }
};
```