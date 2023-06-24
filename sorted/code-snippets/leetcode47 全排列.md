# code

#回溯  #深度优先


```c++
class Solution {
 public:  
  std::vector<std::vector<int>> permuteUnique(std::vector<int> &nums) {  
    std::sort(nums.begin(), nums.end());  
    std::vector<int> vis(nums.size(), 0);  
    fx(nums, vis);  
    return ans;  
  }  
  
  std::vector<int> ret;  
  std::vector<std::vector<int>> ans;  
  void fx(std::vector<int> &nums, std::vector<int> vis) {  
    if (ret.size() == nums.size()) {  
      ans.emplace_back(ret);  
      return; 
    }  
  
    for (int j = 0; j < nums.size(); j++) {  
      if (!vis[j]) {  
        if (j > 0 && nums[j] == nums[j - 1] && !vis[j - 1]) {  
          continue;  
        }  
        // 选择nums[j]填入ret, 已填过数字的索引记录在vis中,对应元素变为1  
        // 对于重复元素，要保证当前元素的前一个相同元素已经安排好位置  
        vis[j] = 1;  
        ret.push_back(nums[j]);  
        fx(nums, vis);  
        // 回溯部分  
        vis[j] = 0;  
        ret.pop_back();  
      }  
    }  
  }  
};
```

- 变量说明
  - `std::vector<int> ret`: 排列元素的数组
  - `std::vector<std::vector<int>> ans` : 由ret组成的待返回答案
  -  `std::vector<int> vis`: 用来记录已添加元素
- 每层递归， 遍历nums数组， 每次选择一个元素, 填入带返回数组ret
-  每递进一层递归，向添加一个元素
- 返回条件，所有元素都已填入待返回数组
- 特殊情况：处理重复元素
  - 数组排序， 将重复元素集中在一起
  - 保证重复元素的前一个相同元素已添加，才能防止重复
  - 若前一个相同元素未添加，说明该元素再当前位置的所有排列已列举完