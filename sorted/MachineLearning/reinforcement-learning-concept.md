# Reinforcement Learning Concept

-  符号:

> 状态: $s_t$
> 动作: $a$
> 奖励：$R,r$
> 衰减：$\gamma, \gamma \in [0,1]$
> 策略：$\pi$
> 动作空间: A

## 函数

## 动作价值 $Q^\pi(s,a)$

## 策略函数 $\pi(a|s)$ :

- 函数值$\in[0,1]$

## 状态价值 $V^\pi(s)$

- 贝尔曼方程： $V^\pi=\max\limits_{a}E[R_{s,a}+\gamma*V^\pi(s')]$
  - a可以有多个

## 状态转移函数： 

- $P(s'|s,a)=\sum \limits_{r \in R} P(s',r|s,a)$
- 由交互环境决定

## 总奖励

- 考虑到未来奖励存在折扣，总奖励是**当前奖励**和**打折扣的未来奖励**之和
- $G_t=R_{t+1}+\gamma R_{t+2}+\gamma^2R_{t+3}+...$

> $R_{t}$  : 即时奖励

## 状态转移, 价值函数, 策略函数

- 状态价值和动作价值均与状态转移函数有关

## algorithm

[Q-learning]

[Sarsa]

[策略梯度]

[Actor-Critic]