# Insiemi e logica

## Tavole di verità

$$\begin{split}
\lnot 0 = 1\\
\lnot 1 = 0\\
1 \land 1 = 1 \lor 1 = 1\\
0 \land 0 = 0 \lor 0 = 0\\
0 \land 1 = 1 \land 0 = 0\\
0 \lor 1 = 1 \lor 0 = 1.
\end{split}$$

### Dimostra ciascuna delle seguenti utilizzando le altre

$$\begin{split}
a &= \lnot (\lnot a)\\
a &= a \land a\\
a &= a \lor a\\
\lnot (a \land b) &= (\lnot a) \lor (\lnot b)\\
\lnot (a \lor b) &= (\lnot a) \land (\lnot b)\\
a \land (b \lor c) &= (a \land b) \lor (a \land c)\\
a \lor (b \land c) &= (a \lor b) \land (a \lor c).
\end{split}$$

## Insiemi

$$\begin{split}
{\rm A} \setminus {\rm B} &= \{a: a \in {\rm A} \land a \notin {\rm B}\}\\
{\rm A} \cap {\rm B} &= \{a: a \in {\rm A} \land a \in {\rm B}\}\\
{\rm A} \cup {\rm B} &= \{a: a \in {\rm A} \lor a \in {\rm B}\}.
\end{split}$$

### Mostra che: valgono le seguenti

$$\begin{split}
(a \setminus b) \setminus c &= (a \setminus b) \cap (a \setminus c)\\
a \setminus (b \cup c) &= (a \setminus b) \cap (a \setminus c)\\
a \cap (b \setminus c) &= (a \cap b) \setminus (a \cap c)\\
(a \cap b) \setminus c &= (a \cap b) \setminus (a \cap c)\\
a \setminus (b \setminus c) &= (a \cap c) \cup (a \setminus b)\\
a \setminus (b \cap c) &= (a \setminus b) \cup (a \setminus b)\\
(a \cup b) \setminus c &= (a \setminus c) \cup (a \setminus c)\\
a \cup (b \setminus c) &= (a \cup b) \setminus (c \setminus a).
\end{split}$$

## Massimi e Minimi

$$\begin{split}
c \subseteq (a \cap b) &\longleftrightarrow (c \subseteq a) \land (c \subseteq b)\\
(a \cup b) \subseteq c &\longleftrightarrow (a \subseteq c) \land (b \subseteq c)\\
c \le \min(a, b) &\longleftrightarrow (c \le a) \land (c \le b)\\
\max(a, b) \le c &\longleftrightarrow (a \le c) \land (b \le c)\\
c \le \max(a, b) &\longleftrightarrow (c \le a) \lor (c \le b)\\
\min(a, b) \le c&\longleftrightarrow (a \le c) \lor (b \le c)
\end{split}$$

### Esercizi:
- Mostra che:
$$\begin{split}
a \subseteq b &\longrightarrow \min(a) > \min(b)\\
a \subseteq b &\longrightarrow \max(a) < \max(b)
\end{split}$$
- Mostra che:
$$\begin{split}
\max(a, b) + \min(a, b) = a + b
\end{split}$$
