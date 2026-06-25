## 练习P273习5.3－1（1）－（3）

（1）$I=\oint_{L}-x^{2} y d x+x y^{2} d y, L: x^{2}+y^{2}=R^{2}$ 沿逆时针方向．
解：$P(x, y)=-x^{2} y, Q(x, y)=x y^{2}$

$$
\frac{\partial P}{\partial y}=-x^{2}, \frac{\partial Q}{\partial x}=y^{2} \quad \frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}=x^{2}+y^{2}
$$

利用格林公式，有
$I=\iint_{D}\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right) d x d y=\iint_{D}\left(x^{2}+y^{2}\right) d x d y$
$=\int_{0}^{2 \pi} d \theta \int_{0}^{R} r^{3} d r=\frac{1}{2} \pi R^{4}$

$$
\begin{aligned}
& \text { (2) } I=\oint_{L}\left(x^{2} y \cos x+2 x y \sin x-y^{2} e^{x}\right) d x+\left(x^{2} \sin x-2 y e^{x}\right) x y^{2} d y, \\
& L: x^{\frac{2}{3}}+y^{\frac{2}{3}}=a^{\frac{2}{3}} \text { 沿正向. }
\end{aligned}
$$

解：$P(x, y)=x^{2} y \cos x+2 x y \sin x-y^{2} e^{x}$ ，

$$
\begin{gathered}
Q(x, y)=x^{2} \sin x-2 y e^{x} \\
\frac{\partial P}{\partial y}=x^{2} \cos x+2 x \sin x-2 y e^{x}=\frac{\partial Q}{\partial x} \quad \frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}=0
\end{gathered}
$$

利用格林公式，有

$$
I=\iint_{D}\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right) d x d y=0
$$

（3）$I=\int_{L}\left(x^{2}-y\right) d x-\left(x+\sin ^{2} y\right) d y$ ，
$L: y=\sqrt{2 x-x^{2}}$ 上由点 $O(0,0)$ 到点 $A(1,1)$ 的一段弧。
解：$P(x, y)=x^{2}-y, \quad Q(x, y)=-x-\sin ^{2} y$

$$
\frac{\partial P}{\partial y}=-1, \frac{\partial Q}{\partial x}=-1 \quad \frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}=0
$$

添加路径 $B A: x=1, y: 1 \rightarrow 0 ; A O: y=0, x: 1 \rightarrow 0$
使 $L+B A+A O$ 封闭，利用格林公式，有

$$
\begin{aligned}
& \int_{L}+\int_{B A}+\int_{A O}=\oint_{L+B A+A O}=-\iint_{D}\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right) d x d y=0 \\
& \therefore \int_{L}=-\int_{B A}-\int_{A O}=\int_{O A}+\int_{A B}
\end{aligned}
$$

$$
\begin{aligned}
& \text { 有 }\left(x^{2}-y\right) d x-\left(x+\sin ^{2} y\right) d y \\
& =\int_{0}^{1}\left(x^{2}-0\right) d x-\left(x+\sin ^{2} 0\right) \cdot 0=\int_{0}^{1} x^{2} d x=\frac{1}{3} \\
& \text { 又 } \int_{A B}\left(x^{2}-y\right) d x-\left(x+\sin ^{2} y\right) d y \\
& =-\int_{0}^{1}\left(1+\sin ^{2} y\right) d y=-1-\int_{0}^{1} \frac{1-\cos 2 y}{2} d y \\
& =-\frac{3}{2}+\left.\frac{\sin 2 y}{4}\right|_{0} ^{1}=-\frac{3}{2}+\frac{\sin 2}{4} \\
& \therefore \int_{L}=-\int_{B A}-\int_{A O}=\int_{O A}+\int_{A B}=-\frac{7}{6}+\frac{\sin 2}{4}
\end{aligned}
$$

$$
\begin{aligned}
& \therefore I=\int_{L}\left(x^{2}-y\right) d x-\left(x+\sin ^{2} y\right) d y \\
& =\oint_{L+L_{1}}-\int_{L_{1}}-\int_{L_{2}} \\
& =\frac{\sin 2}{4}-\frac{7}{6}
\end{aligned}
$$

练习：P 274－－2（1）（2）
计算 $\oint_{L} \frac{x d y-y d x}{x^{2}+y^{2}}$ ，
其中 $\boldsymbol{L}$ 为（1）圆环域 $a^{2} \leq x^{2}+y^{2} \leq b^{2}$ 的正向边界．
（2）正方形 $|x|+|y|=1$ 的正向一周。
解：$P=\frac{-y}{x^{2}+y^{2}}, ~ Q=\frac{x}{x^{2}+y^{2}}$ ，
则当 $x^{2}+y^{2} \neq 0$ 时，有 $\frac{\partial Q}{\partial x}=\frac{y^{2}-x^{2}}{\left(x^{2}+y^{2}\right)^{2}}=\frac{\partial P}{\partial y}$ ．
（1）由 $L$ 的图知，该曲线积分满足格林公式，
则 $\oint_{L} \frac{x d y-y d x}{x^{2}+y^{2}}=\iint_{D} 0 d x d y=0$
（2）由 $L$ 的图知，该曲线积分不满足格林公式，则在 $L$ 内取 $l: x^{2}+y^{2}=r^{2}$ 顺时针方向一周，即，$L:\left\{\begin{array}{l}x=r \cos \theta \\ y=r \sin \theta\end{array}, \theta: 2 \pi \rightarrow 0\right.$

$$
\begin{aligned}
& \therefore \oint_{L}=\oint_{L+l_{1}}-\int_{l_{1}} \\
& =\iint_{D} 0 d x d y-\int_{2 \pi}^{0} \frac{r^{2} \cos ^{2} \theta+r^{2} \sin ^{2} \theta}{r^{2}} d \theta=2 \pi
\end{aligned}
$$

（3）$L: y=\pi \cos x, A(-\pi,-\pi)$ 到 $B(\pi,-\pi)$ ．
解：$P=\frac{-y}{x^{2}+y^{2}}, ~ Q=\frac{x}{x^{2}+y^{2}}$ ，
当 $x^{2}+y^{2} \neq 0$ 时，有 $\frac{\partial Q}{\partial x}=\frac{y^{2}-x^{2}}{\left(x^{2}+y^{2}\right)^{2}}=\frac{\partial P}{\partial y}$ ．

$$
\begin{aligned}
& \int_{L}=\oint_{L+l_{B A}+l_{\text {道 }}}-\int_{l_{B A}} \frac{x d y-y d x}{x^{2}+y^{2}}-\int_{l_{\text {通 }}^{\text {稓 }+y^{2} \leq r^{2}}} \frac{x d y-y d x}{x^{2}+y^{2}} \\
& =-\iint_{D} 0 d x d y+\frac{\pi}{2}-2 \pi \\
& =-\frac{3 \pi}{2}
\end{aligned}
$$

## 练习：P 274－3（1）求星形线

$x=a \cos ^{3} t, y=a \sin ^{3} t$ 所围的面积．
解：$A=\frac{1}{2} \oint_{L}(-y) d x+x d y$

$$
=6 a^{2} \cdot \int_{0}^{\frac{\pi}{2}}\left(\sin ^{2} t-\sin ^{4} t\right) d t=\frac{3 a^{2}}{8} \pi
$$

## 习题5.3－－－6，7，8

6．确定 $\lambda$ 的值，使曲线积分 $I=\int_{(A)}^{(B)}\left(x^{4}+4 x y^{3}\right) d x+\left(6 x^{\lambda-1} y^{2}-5 y^{4}\right) d y$ 与路径无关，并求 $A=(0,0), B=(1,2)$ 时该积分的值．

解：令 $P=x^{4}+4 x y^{3}, Q=6 x^{\lambda-1} y^{2}-5 y^{4}$ ，则 $\frac{\partial P}{\partial y}=12 x y^{2}, \frac{\partial Q}{\partial x}=6(\lambda-1) x^{\lambda-2} y^{2}$由曲线积分与路径无关的充要条件得：

$$
\begin{gathered}
12 x y^{2}=6(\lambda-1) x^{\lambda-2} y^{2} \quad \therefore \lambda=3 . \text { 此时 } \\
\int_{(0,0)}^{(1,2)}\left(x^{4}+4 x y^{3}\right) d x+\left(6 x^{2} y^{2}-5 y^{4}\right) d y=\int_{(0,0)}^{(1,2)} d\left(\frac{x^{5}}{5}+2 x^{2} y^{3}-y^{5}\right) \\
=\left.\left(\frac{x^{5}}{5}+2 x^{2} y^{3}-y^{5}\right)\right|_{(0,0)} ^{(1,2)}=-15 \frac{4}{5} .
\end{gathered}
$$

7．适当选取 $a, b$ ，使 $\frac{\left(y^{2}+2 x y+a x^{2}\right) d x-\left(x^{2}+2 x y+b x^{2}\right) d y}{\left(x^{2}+y^{2}\right)^{2}}$ 为某一函数 $u=u(x, y)$ 的全微分，并求出一个 $u(x, y)$ 。

解：要使微分形式 $\frac{\left(y^{2}+2 x y+a x^{2}\right) d x-\left(x^{2}+2 x y+b x^{2}\right) d y}{\left(x^{2}+y^{2}\right)^{2}}$ 为某一函数 $u=u(x, y)$的全微分，则

$$
\frac{\partial}{\partial y}\left(\frac{y^{2}+2 x y+a x^{2}}{\left(x^{2}+y^{2}\right)^{2}}\right)=\frac{\partial}{\partial x}\left(-\frac{x^{2}+2 x y+b y^{2}}{\left(x^{2}+y^{2}\right)^{2}}\right)
$$

$$
\begin{aligned}
\text { 即 } & \frac{(2 x+2 y)\left(x^{2}+y^{2}\right)^{2}-\left(y^{2}+2 x y+a x^{2}\right) 4 y\left(x^{2}+y^{2}\right)}{\left(x^{2}+y^{2}\right)^{4}} \\
= & \frac{-(2 x+2 y)\left(x^{2}+y^{2}\right)^{2}+\left(x^{2}+2 x y+b y^{2}\right) 4 x\left(x^{2}+y^{2}\right)}{\left(x^{2}+y^{2}\right)^{4}}
\end{aligned}
$$

$$
4 x y^{2}+4 a x^{2} y+4 x^{2} y+4 b x y^{2}=0
$$

即 $a=b=-1$ ，此时

$$
\begin{aligned}
& \frac{\left(y^{2}+2 x y-x^{2}\right) d x-\left(x^{2}+2 x y-y^{2}\right) d y}{\left(x^{2}+y^{2}\right)^{2}} \\
= & \frac{x^{2} d x-x^{2} d y+y^{2} d x-y^{2} d y-2 x^{2} d x+2 x y d x-2 x y d y+2 y^{2} d y}{\left(x^{2}+y^{2}\right)^{2}} \\
= & \frac{x^{2} d(x-y)+y^{2} d(x-y)-x d x^{2}+y d x^{2}-x d y^{2}+y d y^{2}}{\left(x^{2}+y^{2}\right)^{2}} \\
= & \frac{\left(x^{2}+y^{2}\right) d(x-y)-(x-y) d\left(x^{2}+y^{2}\right)}{\left(x^{2}+y^{2}\right)^{2}} \\
= & d\left(\frac{x-y}{x^{2}+y^{2}}\right)=\frac{x-y}{x^{2}+y^{2}} .
\end{aligned}
$$

8．计算曲线积分：$I=\int_{L} \frac{y^{2}}{\sqrt{R^{2}+x^{2}}} d x+\left[4 x+2 y \ln \left(x+\sqrt{R^{2} x^{2}}\right)\right] d y$ ，其中路径 $L$ 是沿圆周 $x^{2}+y^{2}=R^{2}$ 由点 $A(R, 0)$ 依逆时针方向到点 $B(-R, 0)$ 的半圆，$R>0$ 为常数．

解：令 $P=\frac{y^{2}}{\sqrt{R^{2}+x^{2}}}, Q=4 x+2 y \ln \left(x+\sqrt{R^{2}+x^{2}}\right)$

$$
\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}=4+\frac{2 y}{\sqrt{R^{2}+x^{2}}}-\frac{2 y}{\sqrt{R^{2}+x^{2}}}=4
$$

补充 $\overline{B A}: ~ y=0, x:-R \rightarrow R$ ，则

$$
\begin{aligned}
I= & \oint_{L \overline{B A}} \frac{y^{2}}{\sqrt{R^{2}+x^{2}}} d x+\left[4 x+2 y \ln \left(x+\sqrt{R^{2}+x^{2}}\right) d y\right. \\
& -\int_{\overline{B A}} \frac{y^{2}}{\sqrt{R^{2}+x^{2}}} d x+\left[4 x+2 y \ln \left(x+\sqrt{R^{2}+x^{2}}\right) d y\right. \\
& =\iint_{D} 4 d x d y-\int_{-R}^{R} 0 \cdot d x=2 \pi R^{2}
\end{aligned}
$$

## 5.3 Green 公式及应用

一、选择题
1、对于格林公式 $\oint_{I} P d x+Q d y=\iint_{D}\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right) d x d y$ ，下述说法正确的是（C）
（A） L 取逆时针方向，函数 $\mathrm{P}, \mathrm{Q}$ 在闭区域 D 上存在一阶偏导数且 $\frac{\partial Q}{\partial x}=\frac{\partial P}{\partial y}$
（B） L 取顺时针方向，函数 $\mathrm{P}, \mathrm{Q}$ 在闭区域 D 上存在一阶偏导数且 $\frac{\partial Q}{\partial x}=\frac{\partial P}{\partial y}$
（C） L 为 D 的正向边界，函数 $\mathrm{P}, ~ \mathrm{Q}$ 在闭区域 D 上存在一阶连续偏导数
（D） L 取顺时针方向，函数 $\mathrm{P}, \mathrm{Q}$ 在闭区域 D 上存在一阶连续偏导数
解：C

2．用格林公式计算 $\oint_{L}\left(-x^{2} y\right) d x+x y^{2} d y$ ，其中 $L$ ：沿圆 $x^{2}+y^{2}=R^{2}$ 逆时针方向绕一周，则（C）。
（A）$、-\int_{0}^{2 x} d \theta \int_{0}^{R} \rho^{3} d \rho$ ；
（B） $\iiint_{D} 0 d x d y=0$ ；
（C） $\iint_{D}\left(x^{2}+y^{2}\right) d x d y=\frac{\pi}{2} R^{4}$ ；
（D）、 $\iint_{D} r^{2} d r d \theta=\int_{0}^{2 x} d \theta \int_{0}^{R} r^{2} d r=\frac{2 \pi}{3} R^{3}$ ．

解：$\oint_{L}\left(-x^{2} y\right) d x+x y^{2} d y=\iint_{D}\left(x^{2}+y^{2}\right) d x d y=\int_{0}^{2 x} d \theta \int_{0}^{R} r^{2} \cdot r d r=\frac{\pi}{2} R^{4}$ ；选（c）

3．设 $\vec{A}=P(x, y) \vec{i}+Q(x, y) \vec{j},(x, y) \in D$ ，其中 $\mathrm{P}, \mathrm{Q}$ 在区域 D 内具有连续的一阶偏导数，又L是D中任一曲线，则下列关于曲线积分的论断，其中不正确的是（C）
（A）如果 $\int_{I} \vec{A} \cdot \overrightarrow{d l}$ 与路径无关，则在区域 D 内，必有 $\frac{\partial Q}{\partial x}=\frac{\partial P}{\partial y}$
（B）如果 $\int_{I} \vec{A} \cdot \overrightarrow{d l}$ 与路径无关，则在区域 D 内，必存在单值函数 $u(x, y)$ ，使得 $d u(x, y)=P(x, y) d x+Q(x, y) d y$
（C）如果在区域 D 内，$\frac{\partial Q}{\partial x} \equiv \frac{\partial P}{\partial y}$ ，则必有 $\int_{I} \vec{A} \cdot \overrightarrow{d l}$ 与路径无关
（D）如果对 D 中的每一条闭典线 C ，恒有 $\int_{I} \vec{A} \cdot \overrightarrow{d l}=0$ ，则 $\int_{I} \vec{A} \cdot \overrightarrow{d l}$ 与路径无关解：选 C ，注意用条件 $\frac{\partial Q}{\partial x} \equiv \frac{\partial P}{\partial y}$ 推出曲线积分与路径无关，需在单连通域内才成立。

## 二、填空题：

1．设 $L$ 为取兹时针方向的椭圆 $\frac{x^{2}}{a^{2}}+\frac{y^{2}}{b^{2}}=1$ ，则 $\oint_{L} \frac{x}{2} d y-y d x=$ $\_\_\_\_$ ．

解：$\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}=\frac{3}{2}, \oint_{I} \frac{x}{2} d y-y d x \stackrel{\text { Geener }}{=} \iint_{D} \frac{3}{2} d x d y=\frac{3}{2} \pi a b$
2．设 $L$ 为上半圆 $x^{2}+y^{2} \leq a x$ 的逆时针方向的整个边界曲线，则

$$
\int_{I}\left(e^{x} \sin y-m y\right) d x+\left(e^{x} \cos y-m\right) d y=
$$

$\_\_\_\_$ ．

解：$\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}=m, \oint_{L} \stackrel{\text { Gremerf }}{=} \iint_{D} m d x d y=m \cdot \frac{1}{2} \pi\left(\frac{a}{2}\right)^{2}=\frac{\pi m a^{2}}{8}$
3．设 $L$ 为圆周 $x^{2}+y^{2}=a^{2}$ ，取逆时针方向，则 $\oint_{I} x y^{2} d x-x^{2} y d y=$ $\_\_\_\_$。

解 $\oint_{L} x y^{2} d x-x^{2} y d y=\iint_{D}(-2 x y-2 x y) d x d y=0$

4．设 $C$ 为闭曲线 $|x|+|y|=2$ ，取逆时针方向，则 $\oint_{C} \frac{a x d y-b y d x}{|x|+|y|}=4(a+b)$ 。
解：$\oint_{C} \frac{a x d y-b y d x}{|x|+|y|} \xlongequal{\text { 代入 } C:|x|+|y|=2} \frac{1}{2} \oint_{C} a x d y-b y d x+$
$\underline{\underline{\text { Green公式 }} \frac{1}{2}(a+b) \iint_{D} d x d y=4(a+b)}$

三、计算 $\oint_{I} \frac{y d x-x d y}{2\left(x^{2}+y^{2}\right)}$ ，其中 $L$ 为圆周 $(x-1)^{2}+y^{2}=2, L$ 的方向为逆时针方向。

解 $P=\frac{y}{2\left(x^{2}+y^{2}\right)}, Q=\frac{-x}{2\left(x^{2}+y^{2}\right)}$ ，当 $x^{2}+y^{2} \neq 0$ 时，

$$
\frac{\partial Q}{\partial x}=\frac{x^{2}-y^{2}}{2\left(x^{2}+y^{2}\right)}=\frac{\partial P}{\partial y}
$$

$L$ 所围区域为 $D$ ，由于 $(0,0) \in D$ ，故不能直接用格林公式．选适当小的 $r>0$ ，作位于 $D$ 内的小圆周 $l: x^{2}+y^{2}=r^{2}$ ，取顺时针方向。记 $L$ 与 $l$ 所围区域为 $D_{1}$ ，在 $D_{1}$ 上应用格林公式，得

$$
\oint_{L+2} \frac{y d x-x d y}{2\left(x^{2}+y^{2}\right)}=0
$$

所以 $\quad \oint_{L} \frac{y d x-x d y}{2\left(x^{2}+y^{2}\right)}=\oint \frac{y d x-x d y}{2\left(x^{2}+y^{2}\right)}=\int_{0}^{2 x} \frac{-r^{2} \sin ^{2} \theta-r^{2} \cos ^{2} \theta}{2 r^{2}} d \theta=-\pi$ ．

四、计算星形线 $x=a \cos ^{3} t, y=a \sin ^{3} t,(0 \leq t \leq 2 \pi)$ 所围成区域的面积．

解

$$
A=\frac{1}{2} \oint_{z} x d y-y d x=\int_{0}^{x}\left(3 a^{2} \cos ^{4} t \sin ^{2} t+3 a^{2} \sin ^{4} t \cos ^{2} t\right) d t=\frac{3}{8} \pi a^{2}
$$

五、用适当的方法计算下列曲线积分
1．计算 $\int_{L}\left(1+y e^{x}\right) d x+\left(x+e^{x}\right) d y$ ，其中 $L$ 为椭圆 $\frac{x^{2}}{a^{2}}+\frac{y^{2}}{b^{2}}=1$ 的上半周由点 $A(a, 0)$到 $B(-a, 0)$ 的弧段．

解 $P=1+y e^{x}, Q=x+e^{x}, \frac{\partial Q}{\partial x}=1+e^{x}, \frac{\partial P}{\partial y}=e^{x}, \frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}=1$ ，可补充路径 $L_{1}: y=0, \quad x:-a \rightarrow a$ ，借助格林公式简化计算

$$
I=\oint_{L+L_{1}}-\int_{L}=\iint_{D} d x d y-\int_{-a}^{2} d x=\frac{1}{2} \pi a b-2 a
$$

2．$I=\int_{\mathrm{L}}\left(e^{y}-12 x y\right) d x+\left(x e^{y}-\cos y\right) d y$ ，其中 $L$ 曲线 $y=x^{2}$ 上从 $A(-1,1)$ 到 $B(1,1)$的一段。

解：$P=e^{y}-12 x y, Q=x e^{y}-\cos y, \frac{\partial P}{\partial y}=e^{y}-12 x, \frac{\partial Q}{\partial x}=e^{y}$ ，

$$
\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}=12 x
$$

若化为定积分计算，则会出现 $\int_{-1}^{1} e^{x^{2}} d x$ 的项，无法积分，

则 $L+\overline{B A}$ 构成正向封闭曲线。

$$
\begin{aligned}
& \quad I=\oint_{L+\overline{B A}}\left(e^{y}-12 x y\right) d x+\left(x e^{y}-\cos y\right) d y-\int_{\overline{B A}} \\
= & \iint_{D} 12 x d x d y-\int_{1}^{-1}(e-12 x) d x=2 e
\end{aligned}
$$

六、验证下列曲线积分在整个 $x o y$ 平面内与路径无关，并计算积分值

$$
\int_{(1,2)}^{(3,4)}\left(6 x y^{2}-y^{3}\right) d x+\left(6 x^{2} y-3 x y^{2}\right) d y
$$

解：$P=6 x y^{2}-y^{3}, \quad Q=6 x^{2} y-3 x y^{2}$ ，

$$
\frac{\partial Q}{\partial x}=12 x y-3 y^{2}=\frac{\partial P}{\partial y}, \quad(x, y) \in R^{2},
$$

所以题设线积分在 $R^{2}$ 内与路径无关，我们可以选择经过点 $(3,2)$ 的折线段计算积分值：

$$
\begin{aligned}
\int_{(1,2)}^{(3,4)} & =\int_{(1,2)}^{(3,2)}\left(6 x y^{2}-y^{3}\right) d x+\int_{(3,2)}^{(3,4)}\left(6 x^{2} y-3 x y^{2}\right) d y \\
& =\int_{1}^{3}(24 x-8) d x+\int_{2}^{4}\left(54 y-9 y^{2}\right) d y=236
\end{aligned}
$$

十、证明 $\frac{(x+y) d x-(x-y) d y}{x^{2}+y^{2}}$ 在整个 $x \circ y$ 面内除 $x$ 的负半轴及原点外的开区域 $G$ 内
是某个二元函数的全凯分，并求出这样一个二元函数 $u(x, y)$ ．

证明：对 $P=\frac{x+y}{x^{2}+y^{2}}, Q=\frac{x-y}{x^{2}+y^{2}}$ ，整个 $x y y$ 面内除 $x$ 的负半轴及原点外的开区域 $G$ 是单连通域，$P, Q$ 在单连通域G内有连续偏导数，$\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}=0$ ，所以 $\frac{(x+y) d x-(x-y) d y}{x^{2}+y^{2}}$在整个 xoy面内除 $x$ 的负半轴及原点外的开区域 $G$ 内是某个二元函数的全微分，

$$
\begin{aligned}
& d u(x, y)=\frac{x d x+y d y}{x^{2}+y^{2}}+\frac{y d x-x d y}{x^{2}+y^{2}}=\frac{1}{2} \frac{1}{x^{2}+y^{2}} d\left(x^{2}+y^{2}\right)+\frac{\frac{y}{x^{2}} d x-\frac{1}{x} d y}{1+\left(\frac{y}{x}\right)^{2}} \\
& =\frac{1}{2} d \ln \left(x^{2}+y^{2}\right)-\frac{d \frac{y}{x}}{1+\left(\frac{y}{x}\right)^{2}}=d\left(\frac{1}{2} \ln \left(x^{2}+y^{2}\right)-\arctan \frac{y}{x}\right) \\
& \therefore u(x, y)=\frac{1}{2} \ln \left(x^{2}+y^{2}\right)-\arctan \frac{y}{x}+C
\end{aligned}
$$
