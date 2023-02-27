# 树与二叉树

## 树

- 树
  - 根节点没有前驱元素
  - n个数据元素被分为m个互不相交的集合，集合本身又是一个树
- 相关概念
  - 结点的度：结点的分支数
  - 终端结点(叶子节点)：度为0的结点
  - 非终端结点: 度不为0的结点
  - 树的度：树中所有结点度的最大值
  - 树的深度：树中所有结点层次的最大值
  - 有序树、无序树：如果树中每棵子树从左向右的排列拥有一定的顺序，则成为有序树，否则称为无序树
  - 森林:m棵互不相交的树的集合

## 二叉树概念

- **满二叉树**：如果一个深度为K的二叉树拥有$2^K-1$个结点，则称为满二叉树
  - 一个单独结点是一个满二叉树
- **完全二叉树**：有一颗深度为$h$，具有$n$个结点的二叉树，  
若将一颗与它同深度的满二叉树中的所有结点按**从上到下**、**从左到右**的顺序分别进行编号,  
且该二叉树中的每个节点分别于满二叉树中编号为1~n的结点位置一一对应，则称这棵二叉树为完全二叉树
- **平衡二叉树**：左右两个子树的高度差绝对值不超过1，并且左右两个子树都是一颗平衡二叉树 ^avltree
  - c++中map,set,multimap,multiset的底层实现都是平衡二叉树
- **二叉搜索树**: 有数值，有序的树  
  - 左子树小  
    > 若左子树不空，则左子树上所有结点的值均**小于**它的根节点的值
  - 右子树大  
    > 若右子树不空, 则右子树上所有结点的值军**大于**它的根节点的值
  - 左右子树也分别为二叉搜索树

### 二叉树的性质

- 性质1：二叉树的第i层上最多有$2i-1$个结点
- 性质2：深度为K的二叉树最多有$2_K-1$个结点
- 性质3:对于任意一颗二叉树BT,如果度为0的结点个数为$n_0$,度为2的结点个数为$n_2$,则$n_0 = n_2+ 1$
- 性质4: 具有n个结点的完全二叉树的深度为$(log_2n)+1$,其中$log_2n$的结果是不大于$log_2n$的最大**整数**
- 性质5: 对于有$n$个结点的完全二叉树中的所有结点按从上到下、从左到右的顺序进行编号，则对任意一个结点$i$,都有
  - 如果$i = 1$,则结点$i$是这棵完全二叉树的根，没有双亲；否则，其双亲结点的编号为$i/2$
  - 如果$2i>n$,则结点没有左子嗣，否则左子结点的编号为$2i$
  - 如果$2i+1>n$,则结点没有右子嗣，否则，其右子结点的编号为$2i+1$
  - 应用：对于顺序存储结构，如结点在数组中的下标为i，  
    其左子结点的元素下标为$2i$(如果存在)，  
    右子节点的下标为$2i+1$,  
    父节点为$i/2$

性质3推导:
$$
\left\{
\begin{aligned}
& n = n_0 + n_1 + n_2 \\
& B = n_1 + 2n_2 \\
& n = B + 1 \\
\end{aligned}
\qquad \right. \Rightarrow n_0 = n_2 + 1  \\

B: 二叉树的分支总数 \\
n_0:0度结点个数  \\
n_1:1度结点个数  \\
n_2:2度结点个数  \\
$$

### 二叉树的存储

- 顺序存储结构
  - 用一组连续存储单元按照完全二叉树的每个结点编号的顺序存放结点内容
  - 可以体现结点间的关系
  - 不适合非完全二叉树
- 链式存储结构
  - Leftchild $\longleftarrow$ data $\longrightarrow$ Rightchild

### 遍历二叉树

- 遍历是一个**递归**过程
- 通常从左往右遍历
- TLR(中左右): 先序遍历
  [[二叉树前序遍历(迭代法)]]
- LTR(左中右): 中序遍历
  [[二叉树中序遍历(迭代法）]]
- LRT(左右中): 后序遍历
  [[二叉树后序遍历(迭代法）]]

  ```c++
  // 递归法遍历二叉树
  if (root == nullptr) return;
  std==cout<< root->val << std==endl;  // 前序遍历
  recusion(root->left);
  std==cout<< root->val << std==endl;  // 中序遍历
  recusion(root->right);
  std==cout<< root->val << std==endl;  // 后序遍历

  ```
  
- 层序遍历
  [[层序遍历形成二叉树]] [[层序输出二叉树]]
  
## 字典树(Trie)

- 也叫前缀树
- 起始点不表示任何字符
- 每个结点有26个子结点, 分别表示26个英文字母


```c++
class Trie {

  std::vector<Trie*> next;  // 用来表示当前结点的子节点构成的数组
  bool isEnd;  // 标记结点是否为终止结点
  
  Trie() : next(26), isEnd(false) {};  // 构造函数
  void insert(std::string word) {
  
    auto node = this;
    for (auto ch : word) {
      ch -= 'a';
      if (node->next[ch] == nullptr) {
        node->next[ch] = new Trie(); 
      }
      node = node->next[ch];
    }
  }
  
  bool startWith(std::string &word) {
    Trie* node = this;
    for (auto ch : word) {
      ch -= 'a';
      if (node->next[ch] == nullptr) {
        reuturn false;
      }
      node = node->next[ch];
    }
    return true;
  }
  
  bool search(std::string prefix) {
    Trie* node = this;
    for (auto ch : prefix) {
      ch -= 'a';
      if (node->next[ch] == nullptr) {
        return false;
      }
    }
    return true && node->isEnd;
  }
};
```

## 红黑树

- 不严格[[Data_Structure_Tree#^avltree|平衡二叉搜索树]]
- 特征
  - 根节点是黑色节点, 叶节点是不存储数据的黑色空结点  
  - 任何相邻的两个节点不能同时为红色
  - 任意节点到其可到达的叶节点件包含相同数量的黑色节点
- 特点: 查找效率不如平衡二叉树，插入, 删除效率好于二叉树