# Abstract Of Maze Task

![maze task](maze-task.excalidraw.md)

- 以迷宫任务为例

动作: $a = 0,1,2,3$,  对应上, 右, 下,左
状态: $s=0,1,2,...,8$, 对应9个位置
奖励: 状态S8，奖励为1，其他状态均为0

## 策略函数: $\pi(a|s)$

- 参数$\theta$, 用来生成$\pi$

```python
[[nan  1.  1. nan]
 [nan  1. nan  1.]
 [nan nan  1.  1.]
 [ 1.  1.  1. nan]
 [nan nan  1.  1.]
 [ 1. nan nan nan]
 [ 1. nan nan nan]
 [ 1.  1. nan nan]]
```

- 在s状态选择动作a的概率
- 初始策略由参数$\theta$经过softmax得到

```python
#      上           右          下          左
array([[0.        , 0.5       , 0.5       , 0.        ],   # S0 
       [0.        , 0.5       , 0.        , 0.5       ],   # S1 
       [0.        , 0.        , 0.5       , 0.5       ],   # S2  
       [0.33333333, 0.33333333, 0.33333333, 0.        ],   # S3 
       [0.        , 0.        , 0.5       , 0.5       ],   # S4 
       [1.        , 0.        , 0.        , 0.        ],   # S5 
       [1.        , 0.        , 0.        , 0.        ],   # S6 
       [0.5       , 0.5       , 0.        , 0.        ]])  # S7 
```

## 状态转移函数: $P(s',r|s,a)$

$P(s'=8,r=1|s=7,a=1)=1$

## 动作价值: $Q^\pi(s,a)=R$

在状态$s=7$，选择动作向右$a=1$,
到达目标状态S8, 奖励r=1, 因此动作价值为:

$Q^\pi(s=7,a=1)=R_{t+1}=1$

在状态$s=7$，选择动作向上$a=0$，
经过$S7\rightarrow S4 \rightarrow S7\rightarrow S8$, 动作价值为:

$Q^\pi(s=7,a=0)=0+\gamma*0+\gamma^2 * 1$

## 状态价值: $V^\pi(s)$

对于迷宫任务状态S4的最优动作只有一个就是向下, 得到状态S7, 此状态的价值为:

$V^\pi(s=4)=R_{t+1}+\gamma*V^\pi(s=7)$

复杂环境最优动作可能有多个

## 价值算法

- 初始化动作价值$Q$, a行，b列的矩阵，a为状态个数，b为动作个数

```python
[a, b] = theta_0.shape
Q = np.random.rand(a, b) * theta_0
```