# Bellman Equation

- Bellman Equation prerequirement, the learning object must be [Markov Decision Process](markov-process.md) [^Markov]

## Symbol

- State: $s_t$
- Action: $a$
- Reward：$R,r$
- Reduction：$\gamma, \gamma \in [0,1]$
- Strategy: $\pi$
- Action Space: A

## Bellman Most Optimal Equation

most optimal State value

$$
V^*(s)=\max \limits_{a} \sum \limits_{s',r} p(s',r|s,a)[r+\gamma V^*(s')]
$$

- state value equals to the most optimal action value

> $V^*(s)=\max\limits_{a}q^*(s,a)$

most optimal Action value

$$
q^*(s,a)=\sum\limits_{s',r} p(s',a|s,a)[r+r\max \limits_{a'} q^*(s',a')]
$$


## Bellman Expectation Equation

State Expectation

$$
V^\pi(s)=\sum\limits_{a\in A}\pi(a|s)\sum \limits_{s',r} P(s',r|s,a)[r+\gamma V^\pi(s')]
$$

Action Expectation

$$
q^\pi(s,a)=\sum\limits_{s',r} P(s',r|s,a)[r+r\sum\limits_{a'}\pi(a'|s')q^\pi(s',a')]
$$


