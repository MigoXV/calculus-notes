## 定理2.

（1）设光滑曲面 $\Sigma$ 的边界 $\Gamma$ 是按段光滑的连续曲线；
（2）$P(x, y, z), Q(x, y, z), R(x, y, z)$ 在 $\Sigma($ 连同 $\Gamma)$ 上连续，且有一阶连续偏导；则

$$
\begin{aligned}
& \int_{\Gamma} P d x+Q d y+R d z \\
& =\iint_{\Sigma}\left(\frac{\partial R}{\partial y}-\frac{\partial Q}{\partial z}\right) d y d z+\left(\frac{\partial P}{\partial z}-\frac{\partial R}{\partial x}\right) d z d x+\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right) d x d y
\end{aligned}
$$

其中 $\sum$ 的侧与 $\Gamma$ 的方向按右手法则确定．

先证 $\iint_{\Sigma} \frac{\partial \boldsymbol{P}}{\partial z} d z d x-\frac{\partial \boldsymbol{P}}{\partial y} d x d y=\int_{\Gamma} P d x$
（1）设平行于坐标轴的直线与 $\sum$ 的交点不多于一个，则
$\Sigma: z=z(x, y)$

$$
\begin{aligned}
& y=y(z, x) \\
& x=x(y, z)
\end{aligned}
$$

设当 $\sum$ 为 $z=z(x, y)$ 上侧，在 $x o y$ 面上投影区域为 $D_{x y}$ ，
$\Gamma$ 在xoy面上的投影曲线为 $C$ 时，如图所示．
$\Sigma$ 的法向量为 $\vec{n}=\left\{-z_{x},-z_{y}, 1\right\}$ ，方向余弦为 $\cos \alpha=\frac{-z_{x}}{\sqrt{1+z_{x}^{2}+z_{y}^{2}}}, \cos \beta=\frac{-z_{y}}{\sqrt{1+z_{x}^{2}+z_{y}^{2}}}$ ，

$$
\begin{aligned}
& \cos \gamma=\frac{1}{\sqrt{1+z_{x}^{2}+z_{y}^{2}}}, \quad \text { 则 } z_{x}=-\frac{\cos \alpha}{\cos \gamma}, z_{y}=-\frac{\cos \beta}{\cos \gamma} . \\
& \therefore \iint_{\Sigma} \frac{\partial P}{\partial z} d z d x-\frac{\partial P}{\partial y} d x d y=\iint_{\Sigma}\left(\frac{\partial P}{\partial z} \cos \beta-\frac{\partial P}{\partial y} \cos \gamma\right) d S \\
& =\iint_{\Sigma}\left(\frac{\partial P}{\partial z} \cos \beta-\frac{\partial P}{\partial y} \cos \gamma\right) \frac{d x d y}{\cos \gamma}=-\iint_{\Sigma}\left(\frac{\partial P}{\partial y}-\frac{\partial P}{\partial z} \cdot \frac{\cos \beta}{\cos \gamma}\right) d x d y \\
& =-\iint_{\Sigma}\left(\frac{\partial P}{\partial y}+\frac{\partial P}{\partial z} z_{y}\right) d x d y
\end{aligned}
$$

$$
\begin{aligned}
& =-\iint_{D_{x y}}\left[\frac{\partial}{\partial y} P(x, y, z)+\frac{\partial}{\partial z} P(x, y, z) \cdot z_{y}\right] d x d y \\
& =-\iint_{D_{x y}} \frac{\partial}{\partial y} P[x, y, z(x, y)] d x d y
\end{aligned}
$$

Green公式

$$
\oint_{c} P[x, y, z(x, y)] d x=\oint_{\Gamma} P(x, y, z) d x .
$$

$\Sigma$ 取下侧同样成立
同理可证 $\iint_{\Sigma} \frac{\partial Q}{\partial x} d x d y-\frac{\partial Q}{\partial z} d y d z=\int_{\Gamma} Q d y \quad$ 三式相加

$$
\iint_{\Sigma} \frac{\partial R}{\partial y} d y d z-\frac{\partial R}{\partial x} d z d x=\int_{\Gamma} R d z \quad \text { 即得结论. }
$$

（2）若平行于坐标轴的直线与 $\Sigma$ 的交点多于一个时，作辅助线可得结论成立．

## 注意：

（1）便于记忆，Stokes公式可用行列式表示为

$$
\oint_{\Gamma} P d x+Q d y+R d z=\iint_{\Sigma}\left|\begin{array}{ccc}
d y d z & d z d x & d x d y \\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
P & Q & R
\end{array}\right|
$$

（2）利用两类曲面积分的关系，得Stokes公式的另一形式

$$
\oint_{\Gamma} P d x+Q d y+R d z=\iint_{\Sigma}\left|\begin{array}{ccc}
\cos \alpha & \cos \beta & \cos \gamma \\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
P & Q & R
\end{array}\right| d S
$$

其中 $\vec{n}=\{\cos \alpha, \cos \beta, \cos \gamma\}$
（3）Stokes公式的实质：表达了有向曲面上的曲面积分与其边界曲线上的曲线积分之间的关系。
（4）当 $\Sigma$ 是 $x o y$ 面的平面闭区域时，

也称Stokes公式为空间的Green公式。
（5）Stokes公式理论上很重要，用它来计算曲线积分并不很方便。

## Stokes公式应用习例

例11．计算 $\oint_{c} 2 y d x-z d y-x d z$ ，
$C:\left\{\begin{array}{l}x^{2}+y^{2}+z^{2}=R^{2} \\ x+z=R\end{array}\right.$ 方向为由 $x$ 轴正向看去是逆时针的．
例12．计算 $\oint_{\Gamma}(y-z) d x+(z-x) d y+(x-y) d z$ ，
$\Gamma$ 为椭圆 $\left\{\begin{array}{l}x^{2}+y^{2}=a^{2} \\ \frac{x}{a}+\frac{z}{b}=1\end{array} \quad(a>0, b>0)\right.$
若从 $x$ 轴正向看去，这椭圆是取逆时针方向．

例13．计算 $I=\oint_{\Gamma} y^{2} d x+z^{2} d y+x^{2} d z$ ，
其中 $\Gamma$ 为曲线 $\left\{\begin{array}{l}x^{2}+y^{2}+z^{2}=R^{2} \\ x^{2}+y^{2}=R x\end{array}(z \geq 0)\right.$,若从 $z$ 轴正向看去，取逆时针方向．

例14．利用斯托克斯公式计算积分 $\oint_{\Gamma} y \mathrm{~d} x+z \mathrm{~d} y+x \mathrm{~d} z$其中 $\Gamma$ 为平面 $x+y+z=1$ 被三坐标面所截三角形的整个边界，若从向量（1，1，1）正向看去，取逆时针方向。

例 15．计算 $\oint_{\Gamma}\left(y^{2}-z^{2}\right) d x+\left(z^{2}-x^{2}\right) d y+\left(x^{2}-y^{2}\right) d z$其中 $\Gamma$ 是平面 $x+y+z=\frac{3}{2}$ 截立方体： $0 \leq x \leq 1$ ， $0 \leq y \leq 1,0 \leq z \leq 1$ 的表面所得的截痕，若从 $o x$轴的正向看去，取逆时针方向。

例11．计算 $\oint_{c} 2 y d x-z d y-x d z$ ，
$C:\left\{\begin{array}{l}x^{2}+y^{2}+z^{2}=R^{2} \\ x+z=R\end{array}\right.$ 方向为由 $x$ 轴正向看去是逆时针的．
解1 如图所示
取 $\Sigma$ 为 $x+z=R$ 的上侧，$\vec{n}=\{1,0,1\}$ ，
$\cos \alpha=\frac{1}{\sqrt{2}}, \cos \beta=0, \cos \gamma=\frac{1}{\sqrt{2}}$
$\therefore \int_{\mathcal{C}} 2 y d x-z d y-x d z=\iint_{\Sigma}\left|\begin{array}{ccc}\frac{1}{\sqrt{2}} & 0 & \frac{1}{\sqrt{2}} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ 2 y & -z & -x\end{array}\right| d S$

$$
\begin{aligned}
& =\iint_{\Sigma}\left(\frac{1}{\sqrt{2}}-\frac{2}{\sqrt{2}}\right) d S=-\frac{1}{\sqrt{2}} \iint_{\Sigma} d S \\
& =-\frac{1}{\sqrt{2}} \cdot \pi\left(\frac{\sqrt{2}}{2} R\right)^{2}=-\frac{\pi}{2 \sqrt{2}} R^{2} .
\end{aligned}
$$

注意：
（1）截面圆的半径为 $\frac{1}{2} \sqrt{\left(\boldsymbol{R}^{2}+\boldsymbol{R}^{2}\right)}=\frac{\sqrt{2}}{2} \boldsymbol{R}$ ．
（2）选用两种类型的曲面积分都可以，就本题来说，积分号下出现常数，故选对面积的曲面积分为宜．
（3）积分曲面 $\Sigma$ 是选平面还是选球面被平面割下的那一部分，从理论上讲，都是可以的，以计算简单为宜．

$$
\begin{aligned}
& \because \iint_{\Sigma+\Sigma^{\prime}}\left[\left(\frac{\partial R}{\partial y}-\frac{\partial Q}{\partial z}\right) \cos \alpha+\left(\frac{\partial P}{\partial z}-\frac{\partial R}{\partial x}\right) \cos \beta+\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right) \cos \gamma\right] d S \\
& =\iint_{\Sigma+\Sigma^{\prime}}\left[\left(\frac{\partial R}{\partial y}-\frac{\partial Q}{\partial z}\right) d y d z+\left(\frac{\partial P}{\partial z}-\frac{\partial R}{\partial x}\right) d z d x+\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right) d x d y\right] \\
& \xlongequal{\text { Gauss公式 }} \iiint_{\Omega}\left\{\frac{\partial}{\partial x}\left[\frac{\partial R}{\partial y}-\frac{\partial Q}{\partial z}\right]+\frac{\partial}{\partial y}\left[\frac{\partial P}{\partial z}-\frac{\partial R}{\partial x}\right]+\frac{\partial}{\partial z}\left[\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right]\right\} d x d y d z \\
& =\iiint_{\Omega} 0 d x d y d z=\mathbf{0} \\
& \therefore \iint_{\Sigma}=-\iint_{\Sigma^{\prime}}
\end{aligned}
$$

（4）再次体现Stokes公式计算曲线积分并不方便．
（5）也可化为参数方程直接计算．
解2曲线 $C$ 的参数方程为 ：$\left\{\begin{array}{l}x=\frac{R}{2}+\frac{R}{2} \cos t \\ y=\frac{R}{\sqrt{2}} \sin t \\ z=\frac{R}{2}-\frac{R}{2} \cos t\end{array} \quad t\right.$ 从 $0 \rightarrow 2 \pi$

$$
\begin{aligned}
& \therefore \int_{c} 2 y d x-z d y-x d z \\
& =\int_{0}^{2 \pi}\left(-\frac{R^{2} \sin ^{2} t}{\sqrt{2}}-\frac{R^{2} \cos t}{2 \sqrt{2}}+\frac{R^{2} \cos ^{2} t}{2 \sqrt{2}}-\frac{R^{2} \sin t}{4}-\frac{R^{2} \sin t \cos t}{4}\right) d t \\
& =-\frac{\pi}{2 \sqrt{2}} R^{2}
\end{aligned}
$$

例12．计算 $\oint_{\Gamma}(y-z) d x+(z-x) d y+(x-y) d z$ ，
$\Gamma$ 为椭圆 $\left\{\begin{array}{l}x^{2}+y^{2}=a^{2} \\ \frac{x}{a}+\frac{z}{b}=1\end{array} \quad(a>0, b>0)\right.$
若从 $x$ 轴正向看去，这椭圆是取逆时针方向．
解 如图所示
取 $\Sigma$ 为 $\frac{x}{a}+\frac{z}{b}=1$ 的上侧，$\vec{n}=\left\{\frac{1}{a}, 0, \frac{1}{b}\right\} \cos \alpha=\frac{b}{\sqrt{a^{2}+b^{2}}}, \cos \beta=0$,
$\cos \gamma=\frac{\boldsymbol{a}}{\sqrt{\boldsymbol{a}^{\mathbf{2}}+\boldsymbol{b}^{\mathbf{2}}}}$

$$
\begin{aligned}
\text { 原式 } & =\iint_{\Sigma}\left|\begin{array}{ccc}
\frac{b}{\sqrt{a^{2}+b^{2}}} & 0 & \frac{a}{\sqrt{a^{2}+b^{2}}} \\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
y-z & z-x & x-y
\end{array}\right| d S \\
& =-\frac{2(a+b)}{\sqrt{a^{2}+b^{2}}} \iint_{\Sigma} d S \\
& =-\frac{2(a+b)}{\sqrt{a^{2}+b^{2}}} \iint_{x^{2}+y^{2} \leq a^{2}} \sqrt{1+\frac{b^{2}}{a^{2}}} d x d y \\
& =-2 \pi a(a+b) .
\end{aligned}
$$

## 或者

曲者 曲线 $\Gamma$ 的参数方程为 ：$\left\{\begin{array}{l}x=a \cos t \\ y=a \sin t \\ z=b(1-\cos t)\end{array} \quad t\right.$ 从 $0 \rightarrow 2 \pi$

$$
\begin{aligned}
\text { 原式 } & =\int_{0}^{2 \pi}[a \sin t-b(1-\cos t)](-a \sin t) d t \\
& +\int_{0}^{2 \pi}[b(1-\cos t)-a \cos t] a \cos t d t \\
& +\int_{0}^{2 \pi}(a \cos t-a \sin t) b \sin t d t \\
& =-2 \pi a(a+b) .
\end{aligned}
$$

例13．计算 $I=\oint_{\Gamma} y^{2} d x+z^{2} d y+x^{2} d z$ ，
其中 $\Gamma$ 为曲线 $\left\{\begin{array}{l}x^{2}+y^{2}+z^{2}=R^{2} \\ x^{2}+y^{2}=R x\end{array}(z \geq 0)\right.$,若从 $z$ 轴正向看去，取逆时针方向．

解 如图所示
取 $\Sigma$ 为 $z=\sqrt{\boldsymbol{R}^{2}-\boldsymbol{x}^{2}-\boldsymbol{y}^{2}}$ 的上侧，
$\vec{n}=\left\{\frac{x}{\sqrt{R^{2}-x^{2}-y^{2}}}, \frac{y}{\sqrt{R^{2}-x^{2}-y^{2}}}, 1\right\}$
$\cos \alpha=\frac{x}{R}, \cos \beta=\frac{y}{R}, \cos \gamma=\frac{\sqrt{R^{2}-x^{2}-y^{2}}}{R}$

$$
\begin{aligned}
I & =\iint_{\Sigma}\left|\begin{array}{ccc}
\frac{x}{R} & \frac{y}{R} & \sqrt{R^{2}-x^{2}-y^{2}} \\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
y^{2} & z^{2} & x^{2}
\end{array}\right| d S \\
& =-\frac{2}{R} \iint_{\Sigma}\left(x z+x y+y \sqrt{R^{2}-x^{2}-y^{2}}\right) d S=-\frac{2}{R} \iint_{\Sigma} x z d S \\
& =-\frac{2}{R} \iint_{x^{2}+y^{2} \leq R x} x \sqrt{R^{2}-x^{2}-y^{2}} \cdot \frac{R}{\sqrt{R^{2}-x^{2}-y^{2}}} d x d y \\
& =-2 \iint_{x^{2}+y^{2} \leq R x} x d x d y=-2 \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \cos \theta d \theta \int_{0}^{R \cos \theta} r^{2} d r=-\frac{\pi R^{3}}{4}
\end{aligned}
$$

14．利用斯托克斯公式计算积分 $\oint_{\Gamma} y \mathrm{~d} x+z \mathrm{~d} y+x \mathrm{~d} z$其中 $\Gamma$ 为平面 $x+y+z=1$ 被三坐标面所截三角形的整个边界，若从向量（1，1，1）正向看去，取逆时针方向。
解1 化为II－型曲面积分，记三角形域为 $\Sigma$ ，取上侧，

$$
\begin{aligned}
& \oint_{\Gamma} y \mathrm{~d} x+z \mathrm{~d} y+x \mathrm{~d} z \\
= & \iint_{\Sigma}\left|\begin{array}{ccc}
d y d z & d z d x & d x d y \\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
y & z & x
\end{array}\right|_{\text {利用对称性 }} \\
= & -\iint_{\Sigma} \mathrm{d} y \mathrm{~d} z+\mathrm{d} z \mathrm{~d} x+\mathrm{d} x \mathrm{~d} y=-3 \iint_{D_{x y}} d x d y=-\frac{3}{2} .
\end{aligned}
$$

## 解2 化为I－型曲面积分

$\sum: z=1-x-y$ ，取上侧，$\vec{n}=\{1,1,1\}, ~ D_{x y}$ ：如图示。
$\cos \alpha=\cos \beta=\cos \gamma=\frac{1}{\sqrt{3}}$ ，按斯托克斯公式，有

$$
\begin{aligned}
I & =\iint_{\Sigma}\left|\begin{array}{ccc}
\frac{1}{\sqrt{3}} & \frac{1}{\sqrt{3}} & \frac{1}{\sqrt{3}} \\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
y & z & x
\end{array}\right| d S \\
& =-\iint_{\Sigma} \frac{1}{\sqrt{3}} \cdot 3 d S=|\vec{n}| d x d y=\sqrt{3} d x d y
\end{aligned}
$$

例 15．计算 $\oint_{\Gamma}\left(y^{2}-z^{2}\right) d x+\left(z^{2}-x^{2}\right) d y+\left(x^{2}-y^{2}\right) d z$其中 $\Gamma$ 是平面 $x+y+z=\frac{3}{2}$ 截立方体： $0 \leq x \leq 1$ ， $0 \leq y \leq 1,0 \leq z \leq 1$ 的表面所得的截痕，若从 $o x$轴的正向看去，取逆时针方向。

解 取 $\Sigma$ 为平面 $x+y+z=\frac{3}{2}$
的上侧被 $\Gamma$ 所围成的部分．

$$
\begin{aligned}
& \vec{n}=\{1,1,1\} \\
& \cos \alpha=\cos \beta=\cos \gamma=\frac{1}{\sqrt{3}},
\end{aligned}
$$

$$
\begin{aligned}
& \therefore I=\iint_{\Sigma} \left\lvert\, \begin{array}{ccc}
\frac{1}{\sqrt{3}} & \frac{1}{\sqrt{3}} & \frac{1}{\sqrt{3}} \\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
y^{2}-z^{2} & z^{2}-x^{2} & x^{2}-y^{2}
\end{array} d S{ }_{x=1}\right. \\
& =-\frac{4}{\sqrt{3}} \iint_{\Sigma}(x+y+z) d S \quad\left(\because \text { 在 } \Sigma \text { 上 } x+y+z=\frac{3}{2}\right) \\
& =-\frac{4}{\sqrt{3}} \cdot \frac{3}{2} \iint_{\Sigma} d S=-2 \sqrt{3} \iint_{D_{x y}} \sqrt{3} d x d y \\
& =-6 \iint_{D_{x y}} d x d y=-\frac{9}{2} .
\end{aligned}
$$

## 五、空间曲线积分与路径无关的条件

定理2．设空间开区域 $G$ 是单连通区域；
$P(x, y, z), Q(x, y, z) R(x, y, z)$ 在 $G$ 内具有一阶连续偏导数，则以下四个条件相互等价：
（1）沿 $G$ 内任意分段光滑的闭曲 线 $\Gamma$ 有 $\int_{\Gamma} P d x+Q d y+R d z=0$ ．
（2）沿 $G$ 内任意分段光滑的曲线 $\Gamma, \int_{\Gamma} P d x+Q d y+R d z$与路径无关，只与 $\Gamma$ 的起点和终点有关。
（3）$\frac{\partial P}{\partial y}=\frac{\partial Q}{\partial x}, \frac{\partial Q}{\partial z}=\frac{\partial R}{\partial y}, \frac{\partial R}{\partial x}=\frac{\partial P}{\partial z}$ 在 $G$ 内恒成立．
（4）$P d x+Q d y+R d z$ 在 $G$ 内是某一函数 $u(x, y, z)$ 的全微分，

即 $d u(x, y, z)=P d x+Q d y+R d z$,
且 $u(x, y, z)=\int_{\left(x_{0}, y_{0}, z_{0}\right)}^{(x, y, z)} P d x+Q d y+R d z$

$$
=\int_{x_{0}}^{x} P\left(x, y_{0}, z_{0}\right) d x+\int_{y_{0}}^{y} Q\left(x, y, z_{0}\right) d y+\int_{z_{0}}^{z} R(x, y, z) d z .
$$

解 由曲线积分与路径无关，所以可选择特殊路径，如图所示．

$$
\begin{aligned}
& M_{0} M_{1}: \begin{cases}y=y_{0} & x \text { 从 } x_{0} \rightarrow x \\
z=z_{0} & \end{cases} \\
& M_{1} M_{2}:\left\{\begin{array}{l}
x=x \\
z=z_{0}
\end{array} y \text { 从 } y_{0} \rightarrow y\right. \\
& M_{2} M:\left\{\begin{array}{l}
x=x \\
y=y
\end{array} \quad z \text { 从 } z_{0} \rightarrow z\right. \\
\therefore & u(x, y, z)=\int_{\left(x_{0}, y_{0}, z_{0}\right)}^{(x, y, z)} P d x+Q d y+R d z \\
= & \int_{M_{0} M_{1}}+\int_{M_{1} M_{2}}+\int_{M_{2} M} \\
= & \int_{x_{0}}^{x} P\left(x, y_{0}, z_{0}\right) d x+\int_{y_{0}}^{y} Q\left(x, y, z_{0}\right) d y+\int_{z_{0}}^{z} R(x, y, z) d z .
\end{aligned}
$$

若 $u(x, y, z)$ 是 $P d x+Q d y+R d z$ 的原函数，则

$$
\begin{aligned}
\int_{\left(x_{1}, y_{1}, z_{1}\right)}^{\left(x_{2}, y_{2}, z_{2}\right)} P d x+Q d y+R d z & =u(x, y, z)_{\left(x_{1}, y_{1}, z_{1}\right)}^{\left(x_{2}, y_{2}, z_{2}\right)} \\
& =u\left(x_{2}, y_{2}, z_{2}\right)-u\left(x_{1}, y_{1}, z_{1}\right)
\end{aligned}
$$

或者

$$
\begin{aligned}
& \int_{\left(x_{1}, y_{1}, z_{1}\right)}^{\left(x_{2}, y_{2}, z_{2}\right)} P d x+Q d y+R d z \\
& =\int_{x_{1}}^{x_{2}} P\left(x, y_{1}, z_{1}\right) d x+\int_{y_{1}}^{y_{2}} Q\left(x_{2}, y, z_{1}\right) d y+\int_{z_{1}}^{z_{2}} R\left(x_{2}, y_{2}, z\right) d z .
\end{aligned}
$$

例16．计算 $I=\int_{(0,1,0)}^{\left(\frac{\pi}{2}, 0,1\right)}\left[\left(x-\frac{\sin x}{2}\right) y^{2}+(2-\cos x) y\right] d x$

$$
+\left[\left(\cos x+x^{2}-2\right) y+2 x-\sin x\right] d y+z d z
$$

例17 验证曲线积分

$$
\int_{\Gamma}(\boldsymbol{y}+\boldsymbol{z}) \mathrm{d} \boldsymbol{x}+(\boldsymbol{z}+\boldsymbol{x}) \mathrm{d} \boldsymbol{y}+(\boldsymbol{x}+\boldsymbol{y}) \mathrm{d} \boldsymbol{z}
$$

与路径无关，其中 $\Gamma$ 是从点（1，2，3）到点（4，5，6）的一条光滑曲线弧，并计算其积分值。

例
例 16．计算 $I=\int_{(0,1,0)}^{\left(\frac{\pi}{2}, 0,1\right)}\left[\left(x-\frac{\sin x}{2}\right) y^{2}+(2-\cos x) y\right] d x$

$$
+\left[\left(\cos x+x^{2}-2\right) y+2 x-\sin x\right] d y+z d z
$$

解

$$
\begin{aligned}
& \because \frac{\partial R}{\partial y}=0=\frac{\partial Q}{\partial z}, \quad \frac{\partial P}{\partial z}=0=\frac{\partial R}{\partial x}, \\
& \frac{\partial Q}{\partial x}=(-\sin x+2 x) y+2-\cos x=\frac{\partial P}{\partial y},
\end{aligned}
$$

故曲线积分与路径无关．

$$
\begin{aligned}
\therefore I & =\int_{(0,1,0)}^{\left(\frac{\pi}{2}, 0,1\right)} P d x+Q d y+R d z=-\int_{\left(\frac{\pi}{2}, 0,1\right)}^{(0,1,0)} P d x+Q d y+R d z \\
& =-\int_{\frac{\pi}{2}}^{0} P(x, 0,1) d x-\int_{0}^{1} Q(0, y, 1) d y-\int_{1}^{0} R(0,1, z) d z=1
\end{aligned}
$$

例17 验证曲线积分

$$
\int_{\Gamma}(\boldsymbol{y}+\boldsymbol{z}) \mathrm{d} \boldsymbol{x}+(\boldsymbol{z}+\boldsymbol{x}) \mathrm{d} \boldsymbol{y}+(\boldsymbol{x}+\boldsymbol{y}) \mathrm{d} \boldsymbol{z}
$$

与路径无关，其中 $\Gamma$ 是从点（ $\mathbf{1 , 2 , 3}$ ）到点（ $\mathbf{4 , 5 , 6}$ ）的一条光滑曲线弧，并计算其积分值。

解 $P=y+z, Q=z+x, R=x+y$

$$
\frac{\partial \boldsymbol{P}}{\partial \boldsymbol{y}}=\frac{\partial \boldsymbol{Q}}{\partial \boldsymbol{x}}=1, \quad \frac{\partial \boldsymbol{Q}}{\partial \boldsymbol{z}}=\frac{\partial \boldsymbol{R}}{\partial \boldsymbol{y}}=1, \quad \frac{\partial \boldsymbol{R}}{\partial \boldsymbol{x}}=\frac{\partial \boldsymbol{P}}{\partial \boldsymbol{z}}=1
$$

积分与路径无关，有

$$
\int_{\Gamma}(\boldsymbol{y}+\boldsymbol{z}) \mathrm{d} \boldsymbol{x}+(\boldsymbol{z}+\boldsymbol{x}) \mathrm{d} \boldsymbol{y}+(\boldsymbol{x}+\boldsymbol{y}) \mathrm{d} \boldsymbol{z}
$$

$$
(4,2,3) \quad(4,5,3)
$$

$$
\begin{aligned}
I & =\int_{1}^{4}(2+3) d x+\int_{2}^{5}(3+4) d y+\int_{3}^{6}(4+5) d z \\
& =63
\end{aligned}
$$
