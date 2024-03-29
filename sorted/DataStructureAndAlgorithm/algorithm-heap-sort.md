# Sort Algorithm - Heap Sort

[堆](data-structure-heap.md)

- 优先队列的一种应用
- 时间复杂度$O(nlogn)$
- 适用空间紧张时 , 如嵌入式系统或低成本的移动设备
- 无法利用缓存

## 算法分析

- 变量定义
  - nums: 带排序的堆，用数组表示, 对于最小堆: nums.size() = 3
  - i: 父结点索引
  - right_idx: 右子结点索引, int
  - left_idx：左子结点索引, int
  - largest： 最大结点索引, int
- 构建堆
  1. 自下而上遍历非叶子节点调用sink方法的过程
  3. 通过父节点, 左子结点, 右子节点互相交换，将4个结点中的最大值作为新的父节点
  4. 在`i, right_idx, left_idx`中找到最大值索引, 最大值赋予`largest`
  5. 确定左右结点是否存在`left_idx, right_idx < len`
  6. 比较元素大小
  7. 若最大结点不是父结点，将最大节点与父结点交换
  
    ```c++
    /// step4, 5的整体code
    if (left_idx < len && nums[i] < nums[left_idx]) largest = left_idx;
    else largest = i;  // 父结点大于左节点，则最大值索引等于父结点
    if (right_idx < len && nums[i] < nums[largest]) largest = right_idx;
   ``` 
   
- 排序 
  - 将首元素放在数组尾部`std::swap(nums[0], nums[j])`
  - 除首元素的剩余元素重新建堆
   
## code

[[leetcode912_数组排序]]

## 总结

- step1: 自下而上遍历非叶子节点，调用sink()构建堆
- step2: 将顶元素和尾元素交换
- step3: 数组size - 1，重复step1, step2
