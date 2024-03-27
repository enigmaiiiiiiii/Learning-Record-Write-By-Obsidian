# Reinforcement Learning - Strategy Gradient

param $\theta$ update formula:

$$
\theta_{s_i,a_j} = \theta_{s_i,a_j}+\eta \cdot \Delta\theta_{s_i,a_j}
$$
$$
\Delta\theta_{s,a_j} = \{N(s_i,a_j)-P(s_i,a_j)N(s_i,a)\} /T
$$

- $P(s_i, a_j)$: probability of apply action $a_j$ at state $s_i$
- $N(s_i,a_j)$: number of times action $a_j$ is applied at state $s_i$
- $N(s_i,a)$: number of times state $s_i$ is visited
- $T$: total number of steps

if strategy is correct, then:

- $N(s_i,a_j)=P(s_i,a_j)N(s_i,a)$

