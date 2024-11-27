# Numeri Naturali

## Divisione Euclidea

$$\begin{split}
a = (a // b) \cdot b + a \% b\\
a \% b < b\\
(x < b \land a = x \cdot b + y) \rightarrow (x = a // b) \land (y = a \% b) 
\end{split}$$

### Esercizi:
- Mostra che:
$$\begin{split}
((b \% a) + (c \% a)) \% a &= (b + c) \% a\\
((b \% a) \cdot (c \% a)) \% a &= (b \cdot c) \% a
\end{split}$$
- Mostra che se $a \% b = 0$
$$\begin{split}
(c \% a) \% b &= c \% b\\
c // b &= (c // a) \cdot (a // b) + ((c \% a) // b)\\
(y < a // b \land z < b \land c = x \cdot a + y \cdot b + z) &\rightarrow x, y, z = c // a, (c \% a) // b, c \% b
\end{split}$$

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
- La fattorizzazione unica si riduce alla seguente proprietà: se per qualunque primo $p$ vale
$$\begin{split}
\max_{a \% p^d = 0}(d) = \max_{b \% p^d = 0}(d)
\end{split}$$
allora $a = b$.

### Esercizi
- Mostra che per $p$ primo
$$\begin{split}
\max_{(a \cdot b) \% p^d = 0}(d) &= \max_{a \% p^d = 0}(d) + \max_{b \% p^d = 0}(d)
\end{split}$$
- Mostra che per $p$ primo
$$\begin{split}
\max_{{\rm lcm}(a, b) \% p^d = 0}(d) &= \max\left(\max_{a \% p^d = 0}(d), \max_{b \% p^d = 0}(d)\right)\\
\max_{{\rm gcd}(a, b) \% p^d = 0}(d) &= \min\left(\max_{a \% p^d = 0}(d), \max_{b \% p^d = 0}(d)\right).
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
