# Numeri Naturali

## Divisione Euclidea

- Definiamo 
$$\begin{split}
a // b := \max_{d \cdot b < a}(d)
a \% b := a - (a // b) \cdot b.
\end{split}$$
- Allora
$$\begin{split}
a = (a // b) \cdot b + a \% b\\
0 \le a \% b < b.
\end{split}$$
- Inoltre
$$\begin{split}
(x < b \land a = x \cdot b + y) \longrightarrow (x = a // b) \land (y = a \% b).
\end{split}$$

### Esercizi:
- Mostra che:
$$\begin{split}
((b \% a) + (c \% a)) \% a &= (b + c) \% a\\
((b \% a) \cdot (c \% a)) \% a &= (b \cdot c) \% a.
\end{split}$$
- Mostra che se $a \% b = 0$, allora:
$$\begin{split}
(c \% a) \% b &= c \% b\\
c // b &= (c // a) \cdot (a // b) + ((c \% a) // b)\\
(y < a // b \land z < b \land c = x \cdot a + y \cdot b + z) &\rightarrow x, y, z = c // a, (c \% a) // b, c \% b
\end{split}$$
- Questa proprietà si estende per ricorrenza alla scrittura in una base.

## Fattorizzazione unica

- Un numero si dice irriducibile se
$$\begin{split}
p = a \cdot b \longrightarrow (a^2 - 1) \cdot (b^2 - 1) = 0.
\end{split}$$
- Un numero si dice primo se
$$\begin{split}
(a \cdot b) \% p = 0 \longrightarrow (a \% p) \cdot (b \% p) = 0.
\end{split}$$
- Per il massimo comun divisore e minimo comune multiplo
$$\begin{split}
{\rm gcd}(a, b) \% c = 0 &\longleftrightarrow (a \% c = 0) \land (b \% c = 0)\\
c \% {\rm lcm}(a, b) = 0 &\longleftrightarrow (c \% a = 0) \land (c \% b = 0).
\end{split}$$
- Definiamo 
$$\begin{split}
a || b := \max_{a \% b^d = 0}(d)
\end{split}$$
- Fattorizzazione unica: se per qualunque primo $p$ vale $a || p = b || p$, allora $a = b$.

### Esercizi
- Mostra che per $p$ primo:
$$\begin{split}
(a \cdot b) || p &= (a || p) + (b || p)\\
{\rm lcm}(a, b) || p &= \max(a || p, b || p)\\
{\rm gcd}(a, b) || p &= \min(a || p, b || p).
\end{split}$$
- Mostra che:
$$\begin{split}
{\rm lcm}(a, b) \cdot {\rm gcd}(a, b) = a \cdot b.
\end{split}$$

## Fattoriale

$$\begin{split}
(n + 1)! = (n + 1) \cdot n!
\end{split}$$

### Esercizi:
- Mostra che:
$$\begin{split}
\frac{(a + b - 1)!}{(a - 1)! \cdot b!} + \frac{(a + b - 1)!}{a! \cdot (b - 1)!} = \frac{(a + b)!}{a! \cdot b!}
\end{split}$$
