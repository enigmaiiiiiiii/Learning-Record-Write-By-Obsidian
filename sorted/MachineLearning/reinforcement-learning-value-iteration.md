# Reinforcement Learning - Value Iteration

## Sarsa

- the name comes from: $s \rightarrow a \rightarrow r \rightarrow s \rightarrow a$
- Getting sample and predict error from [bellman formula](bellman-formula.md)

Action Value Update Formula:

$$
Q(s_t,a_t)=
Q(s_t,a_t)+\eta \cdot (
\underbrace {
  R_{t+1}+\gamma 
  \overbrace { Q(s_{t+1}, a_{t+1})
  }^\text{
    where sarsa and Q learning differ
  }
  -Q(s_t,a_t)
}_\text{
bellman function
})
$$
$\eta$： [learning rate]()
$\gamma$:  [discount factor]()

## Q-Learning

Features

- Q-learning update does not depend on the next action

$$
Q(s_t,a_t)=
Q(s_t,a_t)+\eta \cdot (
\underbrace {
  R_{t+1}+\gamma 
  \overbrace {
  Q(s_{t+1}, a)
  }^\text{
    where sarsa and Q learning differ
  }
  -Q(s_t,a_t)
}_\text{
bellman function
})
$$

