# Funzioni

### Una funzione $f: {\rm A} \rightarrow {\rm B}$ si dice

- Sugettiva, se $\{f(a): a \in {\rm A}\} = {\rm B}$.
- Iniettiva, se $f(a) = f(b) \longrightarrow a = b$.
- Di periodo $a$, se $f(x + a) = f(x)$.
- Pari, se $f(- x) = f(x)$.
- Dispari, se $f(- x) = - f(x)$.

### Non si fa mai

- Dividere per $0$, fare il logaritmo in base $1$, fare $0^0$.
- Fare la radice pari di un numero negativo.
- Elevare ad un esponente denominatore pari un numero negativo.
- Elevare ad un esponente irrazionale un numero negativo.
- L'esponenziale con base negativa.
- Il logaritmo con base negativa.
- Il logaritmo con argomento negativo.

### Esercizi:

- Composizione di funzioni surgettive è surgettiva.
- Composizione di funzioni iniettive è iniettiva.
- Se $f \circ g$ è surgettiva, $f$ è sugettiva.
- Se $f \circ g$ è iniettiva, $g$ è iniettiva.
- Se $f \circ g$ è surgettiva ed $f$ è iniettiva, $g$ è surgettiva.
- Se $f \circ g$ è iniettiva e $g$ è surgettiva, $f$ è iniettiva.
- Composizione di funzioni pari è pari.
- Composizione di funzioni dispari è pari.
- Composizione di una funzione pari e di una dispari è dispari.
- Composizione di una funzione dispari e di una pari è dispari.
- Se $g$ è di periodo $a$, $f \circ g$ è di periodo $\rm T$.
- Se $f$ è di periodo $a$ e $b$, allora è di periodo $c \cdot \gcd(a, b)$.
- Una potenza con base positiva è positiva e monotona nella base e nell'esponente.
- Un logaritmo con base ed argomento positivi è monotono nella base e nell'argomento.
- Determina dominio ed immagine delle seguenti funzioni
$$\begin{split}
x + a \qquad a + x \qquad x - a \qquad a - x \qquad x \cdot a \qquad a \cdot x \qquad x / a\\
a / x \qquad x^a \qquad a^x \qquad \sqrt[a]{x} \qquad \sqrt[x]{a} \qquad \log_a(x) \qquad \log_x(a).
\end{split}$$
- Determina poi se sono pari, dispari, periodiche, monotone, iniettive, surgettive.

## Condizioni di esistenza

Data una espressione $f(x)$:
- è possibile determinare il dominio naturale di $f$ imponendo le condizioni di esistenza.
- è possibile risolvere $f(x) = y$ per alcuni $y$, tali valori sono detti immagine di $f$.
- si ottiene poi $x = g(y)$ se $f$ è iniettiva, in tal caso $g$ ha come dominio l'immagine di $f$ e viceversa.
- altrimenti si può ottenere $x \in \{g_0(y), \dots, g_k(y)\}$. In tal caso:
    - si restringe il dominio di $g_h$ all'insieme delle $y$ per cui $f (g_h (y)) = y$
    - l'unione dei domini di $g_0, \dots, g_k$ è l'immagine di $f$
    - l'immagine di $g_h$ è $x = g_h (f (x))$ per $x$ nel dominio di $f$
    - le immagini di $g_0, \dots, g_k$ sono una partizione del dominio di $f$
    - restringendo il dominio di $f$ all'immagine di $g_h$, $f$ risulta bigettiva sul dominio di $g_h$.

### Esempio:

$f(x) = \sqrt{(x - a_0)(x - a_1)}$ ha come dominio $(\infty, \min(a_0, a_1)] \cup [\max(a_0, a_1), \infty)$.

$$\begin{split}
x^2 - (a_0 + a_1) x + a_0 a_1 - y^2 = 0
\end{split}$$

ha come soluzioni

$$\begin{split}
g_0(y) = \frac{a_0 + a_1}{2} - \sqrt{\frac{(a_0 - a_1)^2}{4} + y^2}\\
g_1(y) = \frac{a_0 + a_1}{2} + \sqrt{\frac{(a_0 - a_1)^2}{4} + y^2.}
\end{split}$$

- Entrambe ammettono come dominio $\mathbb R$, ma ristretto a $\sqrt{y^2} = y$, cioé $[0, \infty)$.
- L'immagine di $g_0$ è $(\infty, \min(a_0, a_1)]$, mentre quella di $g_1$ è $[\max(a_0, a_1), \infty)$.

### Esempio:

$f(x) = \sqrt{- (x - a_0)(x - a_1)}$ ha come dominio $[\min(a_0, a_1), \max(a_0, a_1)]$.

$$\begin{split}
x^2 - (a_0 + a_1) x + a_0 a_1 + y^2 = 0
\end{split}$$

ha come soluzioni

$$\begin{split}
g_0(y) = \frac{a_0 + a_1}{2} - \sqrt{\frac{(a_0 - a_1)^2}{4} - y^2}\\
g_1(y) = \frac{a_0 + a_1}{2} + \sqrt{\frac{(a_0 - a_1)^2}{4} - y^2.}
\end{split}$$

- Entrambe ammettono come dominio $\left[0, \frac{|a_0 - a_1|}{2}\right]$.
- L'immagine di $g_0$ è $\left[\min(a_0, a_1), \frac{a_0 + a_1}{2}\right]$, mentre quella di $g_1$ è $\left[\frac{a_0 + a_1}{2}, \max(a_0, a_1)\right]$.

### Esempio:

$f(x) = \sqrt{(x - a)^2 + b^2}$ ha come dominio $\mathbb R$.

$$\begin{split}
g_0(y) = a - \sqrt{y^2 - b^2}\\
g_1(y) = a + \sqrt{y^2 - b^2.}
\end{split}$$

- Entrambe ammettono come dominio $(\infty, |b|] \cup [|b|, \infty)$, ma ristretto a $\sqrt{y^2} = y$, cioé $[|b|, \infty)$.
- L'immagine di $g_0$ è $(\infty, a]$, mentre quella di $g_1$ è $[a, \infty)$.

## Limiti e continuità

Si dice che $\lim_{n \to \infty} a_n = x$ se

$$\begin{split}
\forall \varepsilon > 0, \quad \exists n \in \mathbb N, \quad \forall m > n, \quad |a_n - x| < \varepsilon.
\end{split}$$

Si dice che $\lim_{y \rightarrow x} f(y) = z$ se

$$\begin{split}
\forall \lim_{n \rightarrow \infty} a_n = x, \quad \lim_{n \rightarrow \infty} f(a_n) = z.
\end{split}$$

- La chiusura di un insieme consiste dei limiti di successioni a valori in quell'insieme.
- Un insieme si dice aperto se ogni successione che non lo interseca non ci converge.
- Si dice che una funzione $f$ è continua in $x$ se $\lim_{y \rightarrow x} f(y) = f(x).$
- Una funzione continua manda intervalli in intervalli.
- Una funzione continua manda chiusi limitati in chiusi limitati.

### Esercizi:
- Sia $a_n$ una successione crescente, mostra che $\lim_{n \to \infty} a_n = \sup_{n \in {\mathbb N}} a_n$.
- Sia $a_n$ una successione decrescente, mostra che $\lim_{n \to \infty} a_n = \inf_{n \in {\mathbb N}} a_n$.
- Sia $a_n$ una successione, mostra che sono monotone $\left(\sup_{m > n} a_m\right)_{n \in {\mathbb N}}$ e $\left(\inf_{m > n} a_m\right)_{n \in {\mathbb N}.}$
- Mostra che $a_n$ è una successione convergente se e solo se
$$\inf_{n \in {\mathbb N}}\left(\sup_{m > n} a_m\right) = \lim_{n \to \infty} a_n = \sup_{n \in {\mathbb N}}\left(\inf_{m > n} a_m\right).$$
- Mostra che $\lim_{y \rightarrow x} f(y) = z$ se e solo se
$$\begin{split}
\forall \varepsilon > 0, \quad \exists \delta > 0, \quad \forall |y - x| < \delta, \quad |f(y) - z| < \varepsilon.
\end{split}$$
- Mostra che $f$ è una funzione continua in $x$ se e solo se
$$\begin{split}
\lim_{n \to \infty} a_n = x \longrightarrow \lim_{n \to \infty} f(a_n) = f(x).
\end{split}$$
- Mostra che una funzione è continua se e solo se la chiusura di una sua immagine contiene l'immagine della chusura.
- Mostra che una funzione è continua se e solo se la controimmagine di un aperto è aperta.

## Derivate

Si dice che una funzione $f$ è derivabile in $x$ se esiste il limite del rapporto incrementale

$$\begin{split}
\frac{\partial f(y)}{\partial y}(x) = \lim_{y \rightarrow x} \frac{f(y) - f(x)}{y - x.}
\end{split}$$

Si dice che una funzione $f$ è crescente se

$$\begin{split}
\forall x < y, \quad f(x) < f(y).
\end{split}$$

Si dice che una funzione $f$ è convessa se

$$\begin{split}
\forall x < y < z, \quad f(y) < \left(\frac{z - y}{z - x}\right) \cdot f(x) + \left(\frac{y - x}{z - x}\right) \cdot f(z).
\end{split}$$

### Esercizi:
- Mostra che una funzione $f$ crescente se e solo se
$$\begin{split}
\forall x < y, \quad \frac{f(y) - f(x)}{y - x} > 0.
\end{split}$$
- Mostra che una funzione è crescente se e solo se il suo rapporto incrementale è positivo.
- Mostra che una funzione è crescente se e solo se la sua derivata è positiva.
- Mostra che una funzione $f$ è convessa se e solo se
$$\begin{split}
\forall x < y < z, \quad \frac{f(y) - f(x)}{y - x} < \frac{f(z) - f(y)}{z - y.}
\end{split}$$
- Mostra che una funzione è convessa se e solo se la sua derivata è crescente.
- Mostra che una funzione è convessa se e solo se il suo rapporto incrementale è monotono.
- Mostra che:
$$\begin{split}
\partial (f \cdot g) &= (\partial f) \cdot g + f \cdot (\partial g)\\
\partial (f \circ g) &= ((\partial f) \circ g) \cdot \partial g\\
\partial (f^{- 1}) &= 1 / ((\partial f) \circ (f^{- 1})).
\end{split}$$

## Limiti notevoli

Si riesce a calcolare che

$$\begin{split}
\lim_{x \rightarrow 0}\frac{\sin(x)}{x} &= 1\\
\lim_{x \rightarrow 0}\frac{\cos(x) - 1}{x^2} &= \frac{1}{2}\\
\lim_{x \rightarrow 0}\frac{\exp(x) - 1}{x} &= 1\\
\lim_{x \rightarrow 0}\frac{\log(x + 1)}{x} &= 1
\end{split}$$

Si riesce a calcolare che

$$\begin{split}
\frac{\partial \sin(y)}{\partial y}(x) &= \cos(x)\\
\frac{\partial \cos(y)}{\partial y}(x) &= - \sin(x)\\
\frac{\partial \exp(y)}{\partial y}(x) &= \exp(x)\\
\frac{\partial \log(y)}{\partial y}(x) &= \frac{1}{x}\\
\frac{\partial y^a}{\partial y}(x) &= a \cdot x^{a - 1}.
\end{split}$$

Si definiscono

$$\begin{split}
\tan(x) &= \frac{\sin(x)}{\cos(x)}\\
\cot(x) &= \frac{\cos(x)}{\sin(x).}
\end{split}$$

## Esercizi:
- Mostra che: sono bigettive
$$\begin{split}
\cos:& [0, \pi] \rightarrow [- 1, 1]\\
\sin:& \left[- \frac{\pi}{2}, \frac{\pi}{2}\right] \rightarrow [- 1, 1]\\
\tan:& \left(- \frac{\pi}{2}, \frac{\pi}{2}\right) \rightarrow {\mathbb R}\\
\cot:& (0, \pi) \rightarrow {\mathbb R}
\end{split}$$
- Determina poi se sono pari, dispari, periodiche, monotone.
- Determina poi se le loro inverse sono pari, dispari, periodiche, monotone.

## Funzioni iperboliche

Si definiscono

$$\begin{split}
\cosh(x) &= \frac{\exp(x) + \exp(- x)}{2}\\
\sinh(x) &= \frac{\exp(x) - \exp(- x)}{2.}
\end{split}$$

Si definiscono

$$\begin{split}
\tanh(x) &= \frac{\sinh(x)}{\cosh(x)}\\
\coth(x) &= \frac{\cosh(x)}{\sinh(x).}
\end{split}$$

### Esercizi:
- Mostra che sono bigettive
$$\begin{split}
\cosh:& {\mathbb R} \rightarrow {\mathbb R}_+\\
\sinh:& {\mathbb R} \rightarrow {\mathbb R}\\
\tanh:& {\mathbb R} \rightarrow [- 1, 1]\\
\coth:& {\mathbb R} \setminus \{0\} \rightarrow {\mathbb R} \setminus [-1, 1].
\end{split}$$
- Determina poi se sono pari, dispari, periodiche, monotone.
- Calcola le loro inverse e determina se sono pari, dispari, periodiche, monotone.