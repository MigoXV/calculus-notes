## （1）直接用：当 $L$ 是封闭曲线时，应用格林公式简化曲线积分

注意：还应满足用格林公式的条件
例1 利用格林公式计算曲线积分 $\oint_{L}(2 x-y+4) d x+(3 x+5 y-6) d y$其中 $L$ 为三顶点分别为 $O(0,0), A(3,0)$ 和 $B(3,2)$ 的三角形正向边界。

例2。求 $\oint_{C} \cos (\vec{l}, \vec{n}) d s$ ，其中 $\vec{l}$ 为任一给定方向，$\vec{n}$ 为闭合曲线 $C$ 的切向量

## （简化曲线积分）

例1 利用格林公式计算曲线积分 $\oint_{L}(2 x-y+4) d x+(3 x+5 y-6) d y$其中 $L$ 为三顶点分别为 $O(0,0), A(3,0)$ 和 $B(3,2)$ 的三角形正向边界。

解：$P(x, y)=2 x-y+4, \quad Q(x, y)=3 x+5 y-6$

$$
\frac{\partial P}{\partial y}=-1, \frac{\partial Q}{\partial x}=3
$$

利用格林公式，有

$$
\begin{aligned}
& \oint_{L}(2 x-y+4) d x+(3 x+5 y-6) d y \\
& =\iint_{D}\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right) d x d y=\iint_{D} 4 d x d y=12
\end{aligned}
$$

例2．求 $\oint_{C} \cos (\vec{l}, \vec{n}) d s$ ，其中 $\vec{l}$ 为任一给定方向，$\vec{n}$ 为闭合

## 曲线 $C$ 的切向量

解：设 $\vec{l}$ 的方向余弦为 $(\cos a, \cos b)$（常数）， $\vec{n}$ 的方向余弦为 $(\cos \alpha, \cos \beta)$ ，

则 $\cos (\vec{l}, \vec{n})=(\cos a, \cos b) \cdot(\cos \alpha, \cos \beta)$ ，

$$
\begin{aligned}
\therefore & \oint_{C} \cos (\vec{l}, \vec{n}) d s=\oint_{C}(\cos a \cdot \cos \alpha+\cos b \cos \beta) d s \\
& =\oint_{C} \cos a d x+\cos b d y \xlongequal{\text { Green公式 }} \iint_{D} 0 d x d y=0 .
\end{aligned}
$$

（2）间接用：当 L 不是封闭曲线时，但

$$
\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}=k(\text { 或形式较简单 })
$$

可添加辅助曲线使之封闭，再用Green公式简化计算。
例3
例 5 计算 $\int_{A B} x d y$ ，其中曲线 $A B$ 是半径为 $r$ 的圆在第一象限部分．
例4 $I=\int_{L}\left(x^{2}-y\right) d x-\left(x+\sin ^{2} y\right) d y$ ，
$L: y=\sqrt{2 x-x^{2}}$ 上由点 $O(0,0)$ 到点 $A(1,1)$ 的一段弧。

例3 计算 $\int_{A B} x d y$ ，其中曲线 $A B$ 是半径为 $r$ 的圆在第一象限部分．
解1 代入法，$\therefore \int_{\overparen{A B}} x d y=\int_{\frac{\pi}{2}}^{0} r \cos t d(r \sin t)=r^{2} \int_{\frac{\pi}{2}}^{0} \cos ^{2} t d t=-\frac{\pi}{4} r^{2}$
解 2 引入辅助曲线 $L$ ，

$$
\begin{aligned}
& \boldsymbol{L}=\overline{\boldsymbol{O A}}+\overparen{\boldsymbol{A B}}+\overline{\boldsymbol{B O}} \\
& \boldsymbol{P}=\mathbf{0}, \boldsymbol{Q}=\boldsymbol{x} \quad \frac{\partial P}{\partial y}=0, \frac{\partial Q}{\partial x}=1
\end{aligned}
$$

$\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}=1$ 应用 Green 公式，有

$$
\begin{aligned}
& \text { 由于 } \int_{O A} \boldsymbol{x} \boldsymbol{d} \boldsymbol{y}=\mathbf{0}, \quad \int_{B O} \boldsymbol{x} \boldsymbol{d} \boldsymbol{y}=\mathbf{0}, \\
& \therefore \int_{\overparen{A B}} x d y=\oint_{L} x d y-\int_{\overparen{O A}} x d y-\int_{\overparen{B O}} x d y \overbrace{\mathbf{0}} \overbrace{\mathbf{L}} \overbrace{\mathbf{B}} \rightarrow \mathbf{x} \\
& \quad \stackrel{\text { "格" }}{=}-\iint_{D}\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right) d x d y \\
& \quad=-\iint_{D} d x d y=-\frac{1}{4} \pi r^{2} .
\end{aligned}
$$

例4 $I=\int_{L}\left(x^{2}-y\right) d x-\left(x+\sin ^{2} y\right) d y$ ，
$L: y=\sqrt{2 x-x^{2}}$ 上由点 $O(0,0)$ 到点 $A(1,1)$ 的一段弧。
解：$P(x, y)=x^{2}-y, Q(x, y)=-x-\sin ^{2} y$

$$
\frac{\partial P}{\partial y}=-1, \frac{\partial Q}{\partial x}=-1 \quad \frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}=0
$$

添加路径 $A B: x=1, y: 1 \rightarrow 0 ; B O: y=0, x: 1 \rightarrow 0$

使 $L+A B+B O$ 封闭，利用格林公式，有

$$
\begin{aligned}
& \int_{L}+\int_{A B}+\int_{B O}=\oint_{L+A B+B O}=-\iint_{D}\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right) d x d y=0 \\
& \therefore \int_{L}=-\int_{A B}-\int_{B O}=\int_{O B}+\int_{B A}
\end{aligned}
$$

$$
\begin{aligned}
& \text { 又 } \int_{O B}\left(x^{2}-y\right) d x-\left(x+\sin ^{2} y\right) d y \\
& =\int_{0}^{1}\left(x^{2}-0\right) d x-\left(x+\sin ^{2} 0\right) \cdot 0=\int_{0}^{1} x^{2} d x=\frac{1}{3} \\
& \text { 又 } \int_{B A}\left(x^{2}-y\right) d x-\left(x+\sin ^{2} y\right) d y \\
& =-\int_{0}^{1}\left(1+\sin ^{2} y\right) d y=-1-\int_{0}^{1} \frac{1-\cos 2 y}{2} d y \\
& =-\frac{3}{2}+\left.\frac{\sin 2 y}{4}\right|_{0} ^{1}=-\frac{3}{2}+\frac{\sin 2}{4} \\
& \therefore \int_{L}=-\int_{A B}-\int_{B O}=\int_{O B}+\int_{B A}=-\frac{7}{6}+\frac{\sin 2}{4}
\end{aligned}
$$

## 方法一：简化被积函数后再用

方法二：在 D 内有使 $\mathrm{P}, ~ \mathrm{Q}$ 不连续的点存在，不能直接用格林公式，采用＂挖小洞＂的方法，挖去不连续点，再用格林公式。
例5 计算 $\oint_{L} \frac{\boldsymbol{x} \boldsymbol{d} \boldsymbol{y}-\boldsymbol{y} \boldsymbol{d} \boldsymbol{x}}{\boldsymbol{x}^{2}+\boldsymbol{y}^{2}}$ ，其中 $L: x^{2}+y^{2}=a^{2}, L$ 的方向为逆时针方向．
例6。计算 $\oint_{L} \frac{x d y-y d x}{x^{2}+y^{2}}$ ，其中 $L$ 为一条无重点，分段光滑且不经过原点的连续闭曲线，$L$ 的方向为逆时针方向．

例 5 计算 $\oint_{L} \frac{\boldsymbol{x} d \boldsymbol{y}-\boldsymbol{y} d \boldsymbol{x}}{\boldsymbol{x}^{2}+\boldsymbol{y}^{2}}$ ，其中 $L: x^{2}+y^{2}=a^{2}, L$ 的方向为逆
时针方向．解 1：代入法，见练习题
解2：令 $P=\frac{-y}{x^{2}+y^{2}}, Q=\frac{x}{x^{2}+y^{2}}$ ，
则当 $x^{2}+y^{2} \neq 0$ 时，有 $\frac{\partial Q}{\partial x}=\frac{y^{2}-x^{2}}{\left(x^{2}+y^{2}\right)^{2}}=\frac{\partial P}{\partial y}$ ． $(0,0) \in D$

不符合Green公式的条件，但是可以先将曲线方程代入被积表达式的分母，化简后可用格林公式。

$$
\therefore \oint_{L} \frac{x d y-y d x}{x^{2}+y^{2}} \stackrel{\text { 分母代入L }}{=} \frac{\oint_{L} x d y-y d x}{a^{2}}=2 \pi .
$$

例6 计算 $\int_{L} \frac{x d y-y d x}{x^{2}+y^{2}}$ ，其中 $L$ 为一条无重点，分段光滑且不经过原点的连续闭曲线，$L$ 的方向为逆时针方向．

解

$$
\text { 令 } P=\frac{-y}{x^{2}+y^{2}}, \quad Q=\frac{x}{x^{2}+y^{2}} \text {, }
$$

则当 $x^{2}+y^{2} \neq 0$ 时，有 $\frac{\partial Q}{\partial x}=\frac{y^{2}-x^{2}}{\left(x^{2}+y^{2}\right)^{2}}=\frac{\partial P}{\partial y}$ ．
记 $\boldsymbol{L}$ 所围成的闭区域为 $\boldsymbol{D}$ ，
（1）当 $(0,0) \notin D$ 时，符合Green公式的条件。

$$
\therefore \oint_{L} \frac{x d y-y d x}{x^{2}+y^{2}}=\iint_{D} 0 d x d y=0 .
$$

（2）当 $(0,0) \in D$ 时，
作位于 $D$ 内的足够小圆周 $l: x^{2}+y^{2}=r^{2}$记 $\boldsymbol{D}_{\mathbf{1}}$ 由 $\boldsymbol{L}$ 和 $\boldsymbol{l}$ 所围成，在 $\boldsymbol{D}_{1}$ 上符合Green公式的条件．

$$
\text { ∴ 原式 }=\int_{L+l^{-}} \frac{x d y-y d x}{x^{2}+y^{2}}-\int_{l^{-}} \frac{x d y-y d x}{x^{2}+y^{2}}
$$

$$
\begin{aligned}
& =\iint_{D} 0 d x d y+\int_{l} \frac{x d y-y d x}{x^{2}+y^{2}} \\
& =\int_{l} \frac{x d y-y d x}{x^{2}+y^{2}}=\int_{0}^{2 \pi} \frac{r^{2} \cos ^{2} \theta+r^{2} \sin ^{2} \theta}{r^{2}} d \theta=2 \pi
\end{aligned}
$$

注意：
若计算 $I=\int_{L} \frac{? d x+? d y}{(x-a)^{2}+(y-b)^{2}}$ ，如何选择辅助曲线 $l$ ？
若计算 $I=\int_{L} \frac{? d x+? d y}{\frac{x^{2}}{4}+y^{2}}$ ，如何选择辅助曲线 $l$ ？
（4）简化二重积分计算

例7 计算 $\iint_{D} e^{-y^{2}} d x d y$ ，其中 $D$ 是以 $O(0,0), A(1,1), B(0,1)$ 为顶点的三角形闭区域。

例7，计算 $\iint_{D} e^{-y^{2}} d x d y$ ，其中 $D$ 是以 $O(0,0), A(1,1), B(0,1)$ 为顶点的三角形闭区域。
解
令 $P=0, Q=x e^{-y^{2}}$ ，
则 $\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}=e^{-y^{2}}$ ，

应用 Green 公式，有 $\iint_{D} e^{-y^{2}} d x d y=\iint_{O A+A B+B O} x e^{-y^{2}} d y =\int_{O A} x e^{-y^{2}} d y=\int_{0}^{1} x e^{-x^{2}} d x=\frac{1}{2}\left(1-e^{-1}\right)$.
（5）计算有界平面区域的面积
格林公式： $\iint_{D}\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right) d x d y=\oint_{L} P d x+Q d y$
（1）取 $\boldsymbol{P}=-\boldsymbol{y}, \boldsymbol{Q}=\boldsymbol{x}$ ，得 $2 \iint_{D} d x d y=\oint_{L} x d y-y d x$
闭区域 $D$ 的面积 $A=\frac{1}{2} \oint_{L} x d y-y d x$ ．
（2）取 $P=0, Q=x$ ，得 $A=\oint_{L} x d y$
（3）取 $P=-y, Q=0$ ，得 $A=\oint_{L}-y d x$
