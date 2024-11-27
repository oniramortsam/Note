# Geometria

### Trasformazioni conformi

- Dati due punti ${\rm A}, {\rm B}$, esiste un solo vettore $u$ tale che ${\rm A} + u = {\rm B}$.
- Dati due vettori $u, v$ paralleli, esiste un solo $x$ per cui $v = x \cdot u$.
- Dati due vettori $u, v$ di stesso modulo, esiste un solo $\alpha$ per cui $v = r_\theta \cdot u$.
- Dati due vettori $u, v$, esistono unici $a, b$ tali che $v = a \cdot u + b \cdot (r_\frac{\pi}{2} \cdot u)$.

### Proprietà

- $({\rm A} + u) + v = {\rm A} + (u + v) $
- $r_\alpha \cdot (r_\beta \cdot u) = r_{\alpha + \beta} \cdot u$
- $x \cdot (y \cdot u) = (y \cdot x) \cdot u$
- $r_\alpha \cdot (x \cdot u) = x \cdot (r_\alpha \cdot u)$
- $r_\alpha \cdot (u + v) = r_\alpha \cdot u + r_\alpha \cdot v$
- $x \cdot (u + v) = x \cdot u + x \cdot v$
- $(x + y) \cdot u = x \cdot u + y \cdot u$
- $|x \cdot u| = |x| \cdot |u|$
- $r_\pi \cdot u = (- 1) \cdot u$

### Mostra che:

- Una traslazione composta una rotazione è una rotazione composta una traslazione.
- Una traslazione composta una dilatazione è una dilatazione composta una traslazione.
- Le traslazioni mandano rette in rette parallele.
- Le traslazioni conservano le distanze.
- Le rotazioni conservano gli angoli.
- Le rotazioni conservano le distanze.
- Le dilatazioni mandano rette in rette parallele.
- Le dilatazioni moltiplicano le distanze per una costante.
- Dati due segmenti orientati esiste una unica trasformazione conforme che manda l'uno nell'altro.

# Prodotto scalare e vettoriale

Siano $v = a \cdot u + b \cdot r_\frac{\pi}{2} \cdot u$

- Si dice prodotto scalare $u \cdot v = a \cdot |u|^2$.
- Si dice prodotto vettoriale $u \times v = b \cdot |u|^2$.

### Mostra che:

$$\begin{split}
u \cdot u = |u|^2 &\qquad u \times u = 0\\
u \cdot v = v \cdot u &\qquad u \times v + v \times u = 0\\
u \cdot (r_\frac{\pi}{2} \cdot u) = 0 &\qquad u \times (r_\frac{\pi}{2} \cdot u) = |u|^2\\
(r_\alpha \cdot u) \cdot (r_\alpha \cdot v) = u \cdot v &\qquad (r_\alpha \cdot u) \times (r_\alpha \cdot v) = u \times v\\
u \cdot (x \cdot v + w) = x \cdot (u \cdot v) + (u \cdot w) &\qquad u \times (x \cdot v + w) = x \cdot (u \times v) + (u \times w).
\end{split}$$

### Mostra che:

$$\begin{split}
u \times v &= (r_\frac{\pi}{2} \cdot u) \cdot v\\
|u \cdot v|^2 + |u \times v|^2 &= |u|^2 \cdot |v|^2.    
\end{split}$$

## Seno e Coseno

### Siano $r_\alpha \cdot u = a \cdot u + b \cdot (r_\frac{\pi}{2} \cdot u)$

- Si dice coseno di $\alpha$ il valore $a = \cos(\alpha)$.
- Si dice seno di $\alpha$ il valore $b = \sin(\alpha)$.

### Mostra che:

$$\begin{split}
\cos(\alpha + \beta) &= \cos(\alpha) \cdot \cos(\beta) - \sin(\alpha) \cdot \sin(\beta)\\
\sin(\alpha + \beta) &= \sin(\alpha) \cdot \cos(\beta) + \cos(\alpha) \cdot \sin(\beta).
\end{split}$$

### Mostra che:

$$\begin{split}
\cos(\alpha) \cdot \cos(\beta) &= \frac{\cos(\alpha + \beta) + \cos(\alpha - \beta)}{2}\\
\sin(\alpha) \cdot \cos(\beta) &= \frac{\sin(\alpha + \beta) + \sin(\alpha - \beta)}{2}\\
\sin(\alpha) \cdot \sin(\beta) &= \frac{\cos(\alpha - \beta) - \cos(\alpha - \beta)}{2.}
\end{split}$$

### Mostra che:

$$\begin{split}
\cos(\alpha) + \cos(\beta) &= 2 \cdot \left(\cos\left(\frac{\alpha + \beta}{2}\right) \cdot \cos\left(\frac{\alpha - \beta}{2}\right)\right)\\
\cos(\alpha) - \cos(\beta) &= 2 \cdot \left(\sin\left(\frac{\alpha + \beta}{2}\right) \cdot \sin\left(\frac{\alpha - \beta}{2}\right)\right)\\
\sin(\alpha) + \sin(\beta) &= 2 \cdot \left(\sin\left(\frac{\alpha + \beta}{2}\right) \cdot \cos\left(\frac{\alpha - \beta}{2}\right)\right).
\end{split}$$

# Coniche

L'equazione di una parabola di fuoco $(\alpha, \beta)$ e direttrice $\{y = m x + q\}$ è:

$$\begin{split}
\frac{(x + m y)^2}{m^2 + 1} - 2 \left(\alpha + \frac{m q}{m^2 + 1}\right) x - 2 \left(\beta - \frac{q}{m^2 + 1}\right) y + \left(\alpha^2 + \beta^2 - \frac{q^2}{m^2 + 1}\right) = 0.
\end{split}$$

Per ogni punto della parabola passa una sola retta tangente.

- Per i punti esterni vale $>$ e passano $2$ rette tangenti.
- Per i punti interni vale $<$ e non passano rette tangenti.

L'equazione di una conica di fuoco $(\alpha, \beta)$, direttrice $\{y = m x + q\}$, ed eccentricità $\varepsilon$ è:

$$\begin{split}
x^2 + y^2 - \frac{\varepsilon (m x - y)^2}{m^2 + 1} - 2 \left(\alpha + \frac{\varepsilon m q}{m^2 + 1}\right) x - 2 \left(\beta - \frac{\varepsilon q}{m^2 + 1}\right) y + \left(\alpha^2 + \beta^2 - \frac{\varepsilon q^2}{m^2 + 1}\right) = 0.
\end{split}$$

Per ogni punto della conica passa una sola retta tangente.

- Per i punti esterni vale $>$ e passano $2$ rette tangenti.
- Per i punti interni vale $<$ e non passano rette tangenti.

Dati due punti $(\alpha_0, \beta_0), (\alpha_1, \beta_1)$ diciamo

$$\begin{split}
4 c^2 = (\alpha_0 - \alpha_1)^2 + (\beta_0 - \beta_1)^2
\end{split}$$

L'equazione di un'ellisse di asse $a > c$ o di un'iperbole di asse $a < c$ è

$$\begin{split}
4 a^2 \left((x - \alpha)^2 + (y - \beta)^2 + c^2 - a^2\right) = ((x - \alpha) (\alpha_1 - \alpha_0) + (y - \beta) (\beta_1 - \beta_0))^2.
\end{split}$$

- Per i punti esterni vale $>$ e passano $2$ rette tangenti.
- Per i punti interni vale $<$ e non passano rette tangenti.

Nel caso $a = c$ l'equazione si riduce a quella di una retta passante per i due fuochi.

- Se $\beta_1, \beta_0, \alpha = 0$ abbiamo $\frac{x^2}{a^2} + \frac{y^2}{a^2 - c^2} = 1$
- Se $\alpha_1, \alpha_0, \beta = 0$ abbiamo $\frac{x^2}{a^2 - c^2} + \frac{y^2}{a^2} = 1$.

## Circonferenze

L'equazione di una circonferenza di centro $(\alpha, \beta)$ e raggio $\rho$ è:

- Per i punti esterni vale $x^2 + y^2 - 2 \alpha x - 2 \beta y + (\alpha^2 + \beta^2 - \rho^2) > 0$ e passano $2$ rette tangenti.
- Per i punti appartenenti $x^2 + y^2 - 2 \alpha x - 2 \beta y + (\alpha^2 + \beta^2 - \rho^2) = 0$ e passa una sola retta tangente.
- Per i punti interni vale $x^2 + y^2 - 2 \alpha x - 2 \beta y + (\alpha^2 + \beta^2 - \rho^2) < 0$ e non passano rette tangenti.

Due circonferenze di raggi $\rho_1, \rho_0$ e centri distanti $\delta$ possono essere:

- Esterne se $\delta > \rho_1 + \rho_0$ (intersezione vuota).
- Tangenti esternamente se $\delta = \rho_1 + \rho_0$ (un punto di intersezione).
- Secanti se $|\rho_1 - \rho_0| < \delta < \rho_1 + \rho_0$ (due punti di intersezione).
- Tangenti internamente se $\delta = |\rho_1 - \rho_0|$ (un punto di intersezione).
- Interne se $\delta < |\rho_1 - \rho_0|$ (intersezione vuota).

I punti di intersezione si trovano intersecando una delle due circonferenze con la retta di equazione

$$\begin{split}
2 (\alpha_1 - \alpha_0) x + 2 (\beta_1 - \beta_0) y = (\alpha_1^2 + \beta_1^2 - \rho_1^2) - (\alpha_0^2 + \beta_0^2 - \rho_0^2)
\end{split}$$

Data una retta generica $r = \{y = m x + q\}$:
- $r$ è secante ad una circonferenza se $(m \alpha + q - \beta)^2 < \rho^2 (m^2 + 1)$
- $r$ è tangente ad una circonferenza se $(m \alpha + q - \beta)^2 = \rho^2 (m^2 + 1)$
- $r$ è disgiunta da una circonferenza se $(m \alpha + q - \beta)^2 > \rho^2 (m^2 + 1)$.

### Esercizi:

Data l'equazione di una circonferenza $\cal C$

- Determina il centro $(\alpha, \beta)$ ed il raggio $\rho$ di $\cal C$.
- Dato un punto ${\rm P}$, determina se $\rm P$ appartiene a $\cal C$, se è interno o esterno. Se $\rm P$ è esterno:
    - determina le tangenti a $\cal C$ passanti per $\rm P$
    - queste intersecano $\cal C$ in in punto ciascuna, determina le loro coordinate
    - determina l'equazione della retta passante per i due punti trovati.
- Data una retta $r$, determina se $r$ è disgiunta, secante o tangente a $\cal C$. Se $r$ è secante:
    - determina i punti di intersezione di $r$ con $\cal C$
    - per ciascuno di questi punti passa una retta tangente a $\cal C$, determina le loro equazioni
    - determina le coordinate del punto di intersezione delle rette trovate.
- Dati $a, b$, per quali $c$ la circonferenza $\{x^2 + y^2 + a x + b y + c = 0\}$ e $\cal C$ sono interne, esterne o secanti.
