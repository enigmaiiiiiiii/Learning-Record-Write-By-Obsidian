# 堆

- 可以看作一种完全树
- 大顶堆: 每个节点的值都**大于或等于**其左右子节点
- 小顶堆: 每个节点的值都**小于或等于**其左右子节点

## 堆的算法

- 两个重要基础方法
    - `swim()`自下而上使堆有序化

    ```c++
    /// 以大顶堆为例
    std::vector<int> nums;
    void swim(std::vector<int> nums, int i) {
      while (i > 1 && (i << 1) + 1 < nums.size()) {
        if (nums[i] > nums[i/2]) {
          std::swap(nums[i], nums[i/2]);
        }
      }
    }
    ```
    
    - `sink()` 在某节点自下而上移动时，上层节点被替换至下层
    
  ```c++
  void sink(std::vector<int> &nums, int i) {
    int j = 2 * i + 1;  // i为非叶子结点
    if (j < nums.size() - 1 && nums[j] < nums[j + 1]) j++;
    if (a[i] < a[j]) {
      std::swap(nums[i], nums[j]);
      i = j;
    }
    sink(nums, i);
  }
  ```
- 由基础方法构成的API应用    
    - 插入元素：新元素加到数组末尾, 即最后一个叶子结点, 逐渐`swim()`到合适位置
    - 删除最大元素：数组首元素与尾元素互换位置，新顶点逐渐`sink()`到合适位置
    -  数组排序：重复调用`sink()`的过程


## 二叉堆

- 二叉堆是完全[树](Data_Structure-树.md)
- 在数组中按层序存储时,  表示堆的数组是无序的
  参考[[层序输出二叉树]]
- 对于$k$结点，父结点为$k/2$取整 , 子结点为$2k, 2k+1$ 
- 对于大顶堆, 数组中的元素满足`nums[k/2] >= nums[k] >= nums[2k] & nums[2k + 1]`
- 所有非叶子结点的坐标范围是$1,2,.......[n/2]$
- 叶子节点坐标$[n/2] + 1, [n/2]  + 2.......,n$

[[堆排序]]

