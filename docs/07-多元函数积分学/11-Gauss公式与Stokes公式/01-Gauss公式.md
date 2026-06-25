## 一、Gauss公式

定理1．
（1）设空间闭区域 $\Omega$ 由分片光滑的闭曲面 $\Sigma$ 所围成；
（2）$P(x, y, z), Q(x, y, z), R(x, y, z)$ 在 $\Omega$ 上有一阶连续偏导；
则 $\iint_{\Sigma} P d y d z+Q d z d x+R d x d y=\iiint_{\Omega}\left(\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}\right) d v$
或 $\iint_{\Sigma}(P \cos \alpha+Q \cos \beta+R \cos \gamma) d S=\iiint_{\Omega}\left(\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}\right) d v$
其中 $\Sigma$ 是 $\Omega$ 的整个边界曲面的外侧， $\cos \alpha, \cos \beta, \cos \gamma$ 是 $\Sigma$ 上点 $(x, y, z)$ 处的外法向量的方向余 弦。

证．（1）设平行于坐标轴的直线与边界曲面的交点不多于两个，如图

设闭区域 $\Omega$ 在 $x o y$ 面上的投影区域为 $\boldsymbol{D}_{x y}$ ．
$\Sigma$ 由 $\Sigma_{1}, \Sigma_{2}$ 和 $\Sigma_{3}$ 三部分组成，
$\Sigma_{1}: z=z_{1}(x, y)$ ，取下侧；
$\Sigma_{2}: z=z_{2}(x, y)$ ，取上侧；
$\Sigma_{3}$ ，取外侧．
且 $\Omega=\left\{(x, y, z) \mid z_{1}(x, y) \leq z \leq z_{2}(x, y),(x, y) \in D_{x y}\right\}$

根据三重积分的计算法

$$
\begin{aligned}
\iiint_{\Omega} \frac{\partial R}{\partial z} d v & =\iint_{D_{x y}}\left\{\int_{z_{1}(x, y)}^{z_{2}(x, y)} \frac{\partial R}{\partial z} d z\right\} d x d y \\
& =\iint_{D_{x y}}\left\{R\left[x, y, z_{2}(x, y)\right]-R\left[x, y, z_{1}(x, y)\right]\right\} d x d y
\end{aligned}
$$

根据曲面积分的计算法

$$
\begin{aligned}
& \iint_{\Sigma} R(x, y, z) d x d y=\iint_{\Sigma_{1}} R d x d y+\iint_{\Sigma_{2}} R d x d y+\iint_{\Sigma_{3}} R d x d y \\
& =-\iint_{D_{x y}} R\left[x, y, z_{1}(x, y)\right] d x d y+\iint_{D_{x y}} R\left[x, y, z_{2}(x, y)\right] d x d y+0 \\
& \therefore \iiint_{\Omega} \frac{\partial R}{\partial z} d v=\iint_{\Sigma} R(x, y, z) d x d y .
\end{aligned}
$$

同理，$\Omega=\left\{(x, y, z) \mid y_{1}(x, z) \leq y \leq y_{2}(x, z),(x, z) \in D_{x z}\right\}$

$$
\begin{aligned}
& \iiint_{\Omega} \frac{\partial Q}{\partial y} d v=\iint_{\Sigma} Q d z d x \\
& \Omega=\left\{(x, y, z) \mid x_{1}(y, z) \leq x \leq x_{2}(y, z),(y, z) \in D_{y z}\right\} \\
& \iiint_{\Omega} \frac{\partial P}{\partial x} d v=\iint_{\Sigma} P d y d z
\end{aligned}
$$

三式相加得，

$$
\iiint_{\Omega}\left(\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}\right) d v=\iint_{\Sigma} P d y d z+Q d z d x+R d x d y .
$$

（2）当平行于坐标轴的直线与边界曲面的交点多于两个时，引进辅助曲面分成多个（1）中的区域，可得结论．

## 注意：

（1）Gauss公式的实质：表达了空间闭区域上的三重积分与其边界曲面上的曲面积分之间的关系。
（2）Gauss公式可用来简化某些曲面积分的计算．
（3）不是封闭曲面时，添加辅助面后可用Gauss公式。
（4）使用Gauss公式时应考虑：$P, Q, R$ 是对什么变量求偏导，是否有连续偏导，是否是闭曲面的外侧。

如果是闭曲面的内侧，则在三重积分号前添＂－＂号！
（5）可用曲面积分计算空间区域的体积： $\stackrel{o r}{=} \iint_{\Sigma} z d x d y$

$$
V=\frac{1}{3} \iint_{\Sigma} x d y d z+y d z d x+z d x d y=\iint_{\Sigma}^{o r} x d y d z=\iint_{\Sigma}^{o r} y d z d x
$$

例1．计算 $\oiint_{\Sigma} y(x-z) d y d z+x^{2} d z d x+\left(y^{2}+x z\right) d x d y$ ，其中 $\Sigma$ 是第一卦限内边长为 $a$ 的正方体表面并取外侧。

例 2．计算曲面积分 $\int \oint_{\Sigma}(x-y) d x d y+(y-z) x d y d z$ ，其中 $\Sigma$ 为柱面 $\boldsymbol{x}^{2}+\boldsymbol{y}^{2}=1$ 及平面 $z=0, z=3$ 所围成的空间闭区域 $\boldsymbol{\Omega}$ 的整个边界曲面的外侧。

例3。计算 $\oiint_{\Sigma}\left(x^{3} \cos \alpha+y^{3} \cos \beta+z^{3} \cos \gamma\right) d S$ 其中 $\Sigma$ 是球面 $x^{2}+y^{2}+z^{2}=a^{2}, \cos \alpha, \cos \beta, \cos \gamma$ 是球面内法线的方向余弦。

例1．计算 $\oiint_{\Sigma} y(x-z) d y d z+x^{2} d z d x+\left(y^{2}+x z\right) d x d y$ ，其中 $\Sigma$ 是第一卦限内边长为 $a$ 的正方体表面并取外侧。

解 记 $\Sigma$ 所围的区域为 $\Omega$ ，利用Gauss公式，有

$$
\begin{aligned}
\text { 原式 } & =\iiint_{\Omega}\left(\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}\right) d v \\
& =\iiint_{\Omega}(y+x) d x d y d z \\
& =\int_{0}^{a} d x \int_{0}^{a} d y \int_{0}^{a}(y+x) d z=a^{4} .
\end{aligned}
$$

例 2．计算曲面积分 $\int_{\Sigma}(x-y) d x d y+(y-z) x d y d z$ ，其中 $\Sigma$ 为柱面 $\boldsymbol{x}^{2}+\boldsymbol{y}^{2}=1$ 及平面 $z=0, z=3$ 所围成的空间闭区域 $\boldsymbol{\Omega}$ 的整个边界曲面的外侧。
解 利用Gauss公式，得

$$
\begin{aligned}
& \text { 原式 }=\iiint_{\Omega}\left(\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}\right) d v \\
& =\iiint(y-z) d x d y d z \\
& =\iint_{\Omega}^{\Omega}(r \sin \theta-z) r d r d \theta d z \\
& =\int_{0}^{2 \pi} d \theta \int_{0}^{1} r d r \int_{0}^{3}(r \sin \theta-z) d z=-\frac{9 \pi}{2} .
\end{aligned}
$$

例3．计算 $\oiint_{\Sigma}\left(x^{3} \cos \alpha+y^{3} \cos \beta+z^{3} \cos \gamma\right) d S$ 其中 $\Sigma$ 是球面 $x^{2}+y^{2}+z^{2}=a^{2}, \cos \alpha, \cos \beta, \cos \gamma$ 是球面内法线的方向余弦。

解 记 $\Sigma$ 所围空间区域为 $\Omega$ ，由Gauss公式，有

$$
\begin{aligned}
& \text { 原式 }=\iint_{\Sigma} x^{3} d y d z+y^{3} d z d x+z^{3} d x d y \\
& =-\iiint_{\Omega} 3\left(x^{2}+y^{2}+z^{2}\right) d v=-\iiint_{\Omega} 3 \rho^{2} \cdot \rho^{2} \sin \varphi d \rho d \varphi d \theta \\
& =-3 \int_{0}^{2 \pi} d \theta \int_{0}^{\pi} \sin \varphi d \varphi \int_{0}^{a} \rho^{4} d \rho=-\frac{12}{5} \pi a^{5} .
\end{aligned}
$$

## 二.沿闭曲面的曲面积分为零的条件

定理2。（1）设开区域 $\boldsymbol{G}$ 是一个空间的单连通域；
（2）$P(x, y, z), Q(x, y, z), R(x, y, z)$ 在 $G$ 内有一阶连续偏导；则有结论：
（1）若 $\Sigma$ 为 $G$ 内任一有向闭曲面，

$$
\int_{\Sigma} P d y d z+Q d z d x+R d x d y=0 \Leftrightarrow \frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}=0 .
$$

（2）若 $\Sigma_{1}, \Sigma_{2}$ 为 $G$ 内同一边界曲线所张的 任两有向曲面，

$$
\begin{aligned}
& \iint_{\Sigma_{1}} P d y d z+Q d z d x+R d x d y=\iint_{\Sigma_{2}} P d y d z+Q d z d x+R d x d y \\
& \Leftrightarrow \frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}=0 .
\end{aligned}
$$

## 证．⇐ 由Gauss公式，有

$$
\begin{aligned}
\oint_{\Sigma} P d y d z+Q d z d x+R d x d y & =\iiint_{\Omega}\left(\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}\right) d v \\
\Rightarrow \text { 反证法 } & =\iiint_{\Omega} 0 d v=0
\end{aligned}
$$

假设在 $G$ 内有一点 $M_{0}$ 使得 $\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z} \neq 0$ ，不妨设 $\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}>0$ ，由于 $\frac{\partial P}{\partial x}, \frac{\partial Q}{\partial y}, \frac{\partial R}{\partial z}$ 连续，故在 $G$ 内存在一个包含 $M_{0}$ 的 $\Sigma_{1}$ 为边界曲面的小空间区域 $\Omega_{1}$ ，

$$
\begin{aligned}
& \text { 且在 } \Omega_{1} \text { 内也有 } \frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}>0, \\
& \therefore \iint_{\Sigma_{1}} P d y d z+Q d z d x+R d x d y=\iiint_{\Omega_{1}}\left(\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}\right) d v>0
\end{aligned}
$$

与已知矛盾，故结论成立．

## 三、综合习例

例4．计算 $\iint_{\Sigma} 4 z x d y d z-2 y z d z d x+\left(1-z^{2}\right) d x d y$
其中 $\Sigma$ 为由曲线 $\left\{\begin{array}{l}z=e^{y} \\ x=0\end{array}(0 \leq y \leq a)\right.$ 绕 $z$ 轴旋转一周所成的曲面，其法向量与 $z$ 轴正向夹角恒大于 $\pi / 2$ ．

例5．计算 $I=\iint_{\Sigma} x f\left(x^{2}+y^{2}+1\right) d y d z$ ，
其中 $\Sigma$ 是 $x^{2}+y^{2}=1$ 被 $z=1$ 与 $z=-1$ 所截的外侧。
例6．计算 $I=\iint_{\Sigma} y^{2} z d x d y+x^{2} y d z d x$ ，
$\Sigma$ 是第一卦限内抛物面 $z=x^{2}+y^{2}(0 \leq z \leq 1)$ 的下侧。

例7。计算曲面积分 $\iint_{\Sigma} x^{2} z \cos \gamma d S$ ，
其中 $\Sigma$ 是球面 $x^{2}+y^{2}+z^{2}=a^{2}$ 的下半部， $\gamma$ 是 $\Sigma$ 向上的法线正向与 $o z$ 轴正向的夹角。

例8．计算曲面积分 $I=\oiint_{\Sigma} \frac{x d y d z+y d z d x+z d x d y}{\left(x^{2}+y^{2}+z^{2}\right)^{3 / 2}}$ ，其中 $\Sigma$ 是 $2 x^{2}+2 y^{2}+z^{2}=4$ 的外侧．

例9．设空间区域 $\Omega$ 由曲面 $z=a^{2}-x^{2}-y^{2}$ 与平面 $z=0$ 围成，其中 $a$ 为正常数，记 $\Omega$ 表面的外侧为 $\Sigma, \Omega$ 的体积为 $V$ ，证明 $\iint_{\Sigma} x^{2} y z^{2} d y d z-x y^{2} z^{2} d z d x+z(1+x y z) d x d y=V$ ．

例10．设 $r(x), p(y), q(z)$ 可微，$\Sigma$ 为长方体 $0 \leq x \leq a, 0 \leq y \leq b$ ， $0 \leq z \leq c$ 的外侧，求 $\iint_{\Sigma} r(x) d y d z+p(y) d z d x+q(z) d x d y$ 。

例4．计算 $\iint_{\Sigma} 4 z x d y d z-2 y z d z d x+\left(1-z^{2}\right) d x d y$
其中 $\Sigma$ 为由曲线 $\left\{\begin{array}{l}z=e^{y} \\ x=0\end{array}(0 \leq y \leq a)\right.$ 绕 $z$ 轴旋转一周所成的曲面，其法向量与 $z$ 轴正向夹角恒大于 $\pi / 2$ ．

解 所给曲面如图，
添加辅助面 $\Sigma_{1}: z=e^{a}$ ，取上侧记 $\Sigma, \Sigma_{1}$ 围成的空间区域为 $\Omega$ ，
由Gauss公式有

$$
\begin{aligned}
\text { 原式 } & =\iint_{\Sigma}+\iint_{\Sigma_{1}}-\iint_{\Sigma_{1}}=\int \oint_{\Sigma+\Sigma_{1}}-\iint_{\Sigma_{1}} \\
& =\iiint_{\Omega}(4 z-2 z-2 z) d v-\iint_{\Sigma_{1}}\left(1-z^{2}\right) d x d y \\
& =-\iint_{x^{2}+y^{2} \leq a^{2}}\left(1-e^{2 a}\right) d x d y \\
& =\left(e^{2 a}-1\right) \pi a^{2} .
\end{aligned}
$$

例5．计算 $I=\iint_{\Sigma} x f\left(x^{2}+y^{2}+1\right) d y d z$ ，
其中 $\Sigma$ 是 $x^{2}+y^{2}=1$ 被 $z=1$ 与 $z=-1$ 所截的外侧。
解 如图所示，$\Sigma$ 关于 $y o z$ 面对称， $x f\left(x^{2}+y^{2}+1\right)$ 是 $x$ 的奇函数．
记 $\Sigma_{1}: x=\sqrt{1-y^{2}}$ ，取前侧，

$$
\begin{aligned}
& \therefore I=2 \iint_{\Sigma_{1}} x f\left(x^{2}+y^{2}+1\right) d y d z \quad x \\
& \therefore 2 \iint_{\substack{-1 \leq z \leq 1 \\
-1 \leq y \leq 1}} \sqrt{1-y^{2}} f(2) d y d z=2 f(2) \int_{-1}^{1} d y \int_{-1}^{1} \sqrt{1-y^{2}} d z \\
& =2 \pi f(2)
\end{aligned}
$$

例6．计算 $I=\iint_{\Sigma} y^{2} z d x d y+x^{2} y d z d x$ ，
$\Sigma$ 是第一卦限内抛物面 $z=x^{2}+y^{2}(0 \leq z \leq 1)$ 的下侧。解 如图所示，

添加辅助面 $\Sigma_{1}: x=0$ ，取后侧

$$
\begin{aligned}
& \Sigma_{2}: y=0, \text { 取左侧 } \\
& \Sigma_{3}: z=1, \text { 取上侧 }
\end{aligned}
$$

记 $\Sigma, \Sigma_{1}, \Sigma_{2}, \Sigma_{3}$ 围成的空间区域为 $\Omega$ ，由Gauss公式有

$$
I=\oiint_{\Sigma+\Sigma_{1}+\Sigma_{2}+\Sigma_{3}}-\iint_{\Sigma_{1}}-\iint_{\Sigma_{2}}-\iint_{\Sigma_{3}}
$$

$$
\begin{aligned}
& =\iiint_{\Omega}\left(x^{2}+y^{2}\right) d v-\iint_{\Sigma_{3}} y^{2} z d x d y \\
& =\iiint_{\Omega} r^{2} r d r d \theta d z-\iint_{\substack{x^{2}+y^{2} \leq 1 \\
x \geq 0, y \geq 0}} y^{2} d x d y \\
& =\iiint_{\Omega} r^{2} r d r d \theta d z-\iint_{0 \leq r \leq 1} r^{2} \sin ^{2} \theta r d r d \theta \\
& 0 \leq \theta \leq \frac{\pi}{2} \\
& =\int_{0}^{\frac{\pi}{2}} d \theta \int_{0}^{1} r^{3} d r \int_{r^{2}}^{1} d z-\int_{0}^{\frac{\pi}{2}} \sin ^{2} \theta d \theta \int_{0}^{1} r^{3} d r \\
& =-\frac{\pi}{48}
\end{aligned}
$$

例 7．计算曲面积分 $\iint_{\Sigma} x^{2} z \cos \gamma d S$ ，
其中 $\Sigma$ 是球面 $x^{2}+y^{2}+z^{2}=a^{2}$ 的下半部， $\gamma$ 是 $\Sigma$ 向上的法线正向与 $o z$ 轴正向的夹角。解 如图所示，添加辅助面 $\Sigma_{1}: z=0$ ，取下侧
原式 $=\iint_{\Sigma} x^{2} z d x d y=\iint_{\Sigma+\Sigma_{1}}-\iint_{\Sigma_{1}}$

$$
\begin{aligned}
& =-\iiint_{\Omega} x^{2} d v-\iint_{\Sigma_{1}} x^{2} z d x d y \\
& =-\int_{0}^{2 \pi} d \theta \int_{\frac{\pi}{2}}^{\pi} d \varphi \int_{0}^{a} \rho^{2} \sin ^{2} \varphi \cos ^{2} \theta \rho^{2} \sin \varphi d \rho-0 \\
& =-\int_{0}^{2 \pi} \cos ^{2} \theta d \theta \int_{\frac{\pi}{2}}^{\pi} \sin ^{3} \varphi d \varphi \int_{0}^{a} \rho^{4} d \rho=\cdots
\end{aligned}
$$

例8．计算曲面积分 $I=\oiint_{\Sigma} \frac{x d y d z+y d z d x+z d x d y}{\left(x^{2}+y^{2}+z^{2}\right)^{3 / 2}}$ ，其中 $\Sigma$ 是 $2 x^{2}+2 y^{2}+z^{2}=4$ 的外侧．

解 添加辅助面 $\Sigma_{1}: x^{2}+y^{2}+z^{2}=1$ ，取内侧 $\Omega$ 为 $\Sigma$ 与 $\Sigma_{1}$ 之间的部分，由Gauss公式得，

$$
\begin{aligned}
\text { 原式 } & =\iint_{\Sigma+\Sigma_{1}}-\iint_{\Sigma_{1}}=\iiint_{\Omega} 0 d v-\iint_{\Sigma_{1}} \frac{x d y d z+y d z d x+z d x d y}{\left(x^{2}+y^{2}+z^{2}\right)^{3 / 2}} \\
& =-\iint_{\Sigma_{1}} x d y d z+y d z d x+z d x d y=\underset{x^{2}+y^{2}+z^{2} \leq 1}{\iiint_{1} 3 d v}=4 \pi .
\end{aligned}
$$

例9．设空间区域 $\Omega$ 由曲面 $z=a^{2}-x^{2}-y^{2}$ 与平面 $z=0$ 围成，其中 $a$ 为正常数，记 $\Omega$ 表面的外侧为 $\Sigma, \Omega$ 的体积为 $V$ ，证明 $\iint_{\Sigma} x^{2} y z^{2} d y d z-x y^{2} z^{2} d z d x+z(1+x y z) d x d y=V$ ．
证．左边 $\xlongequal{\text { Gauss公式 }} \iiint_{\Omega}\left(2 x y z^{2}-2 x y z^{2}+1+2 x y z\right) d v$

$$
=V+2 \iiint_{\Omega} x y z d v
$$

$\Omega$ 对称于 yoz 面
$x y z$ 关于 $x$ 为奇函数
$V$ ．

例10．设 $r(x), p(y), q(z)$ 可微，$\Sigma$ 为长方体 $0 \leq x \leq a, 0 \leq y \leq b$ ， $0 \leq z \leq c$ 的外侧，求 $\iint_{\Sigma} r(x) d y d z+p(y) d z d x+q(z) d x d y$ 。

$$
\begin{aligned}
& \text { 解 } \begin{array}{r}
\text { 原式 } \xlongequal{\text { Gauss公式 }} \iiint_{\Omega}\left[r^{\prime}(x)+p^{\prime}(y)+q^{\prime}(z)\right] d v \\
=\int_{0}^{a} d x \int_{0}^{b} d y \int_{0}^{c}\left[r^{\prime}(x)+p^{\prime}(y)+q^{\prime}(z)\right] d z \\
=\int_{0}^{a} r^{\prime}(x) d x \int_{0}^{b} d y \int_{0}^{c} d z+\int_{0}^{a} d x \int_{0}^{b} p^{\prime}(y) d y \int_{0}^{c} d z \\
+\int_{0}^{a} d x \int_{0}^{b} d y \int_{0}^{c} q^{\prime}(z) d z
\end{array} \\
& =b c[r(a)-r(0)]+a c[p(b)-p(0)]+a b[q(c)-q(0)]
\end{aligned}
$$

－将Green公式推广至空间，即Stokes 公式给出了沿空间曲线 $\Gamma$ 的第二型线积分与 $\Gamma$ 上所张开的曲面的面积分之间的关系。
（ $\Gamma$ 作为该曲面的边界曲线也可记为 $\partial \Sigma$ ）
曲面的侧与边界曲线的方向作如下规定（右手法则）：
当右手四指依 $\Gamma$ 的绕行方向时，大拇指所指的方向与 $\sum$ 上法向量的指向相同，这时称 $\Gamma$ 是有向曲面 $\sum$ 的正向边界曲线。
