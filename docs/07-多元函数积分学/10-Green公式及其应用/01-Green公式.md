## 第7章 多元函数积分学

7.2 曲线曲面积分

7.2.3 Green公式及其应用

7.2 曲线曲面积分

格林（Green）公式：平面区域的二重积分与沿此区域的第二类曲线积分的关系。

意义：微积分基本公式在二重积分情形下的推广，不仅给计算第二类曲线积分带来新方法，更重要的是揭示定向曲线积分与积分路径无关的条件，在积分理论的发展中起了重要的作用。
＊格林（Green）［英］1793－1841 物理学家，数学家，自学成才英国数学家和物理学家，仅读过两年书，回家帮父亲烤面包卖，一直到40岁，父亲去世后才得以到剑桥大学读书。44岁大学毕业，48岁因流行感冒去世。但依靠自学，做出了巨大的贡献，相关成果至今仍是数学物理中的经典内容。他的工作培育了数学物理方面的剑桥学派。

## 1、区域连通性

设 D 为平面区域，如果 D 内任一闭曲线所围成的部分都属于D，则称D为平面单连通区域，否则称为复连通区域。

单连通区域

复连通区域

（不含有＂洞＂或＂点洞＂）（含有＂洞＂或＂点洞＂）

## 2、Green公式

定理1．设区域 $\boldsymbol{D}$ 是由分段光滑正向曲线 $\boldsymbol{L}$ 围成，函数 $P(x, y), Q(x, y)$ 在 $\boldsymbol{D}$ 上具有连续一阶偏导数，则有

$$
\int_{L} P d x+Q d y=\iint_{D}\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right) d x d y, \quad \text { (Green公式) }
$$

或 $\int_{L}(P \cos \alpha+Q \cos \beta) d s=\iint_{D}\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right) d x d y$ ．

分析：待证表达式 $\iint_{D}\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right) d x d y=\int_{L} P d x+Q d y$等价于证明

$$
\begin{gathered}
\iint_{D} \frac{\partial Q}{\partial x} d x d y=\int_{L} Q d y \\
\begin{array}{c}
\text { ↓ 型区域 }
\end{array}
\end{gathered}
$$

$$
\begin{aligned}
& -\iint_{D} \frac{\partial P}{\partial y} d x d y=\int_{L} P d x \\
& \vdots \\
& \text { 型区域 }
\end{aligned}
$$

证明依赖于区域的形状 $\left\{\begin{array}{l}\text { 单连通 }\left\{\begin{array}{l}\text { 既 } x \text { 又 } y \text { 型 } \\ \text { 一般区域 } \\ \text { 复连通 }\end{array}\right.\end{array}\right.$

思路：公式两边化为同一定积分．从简单情形出发．

## 证明（1）

若区域 $\boldsymbol{D}$ 既是 $\boldsymbol{X}$ —型又是 $\boldsymbol{Y}$ —型，即平行于坐标轴的直线和 $L$ 至多交于两点。

$$
\begin{aligned}
& D=\left\{(x, y) \varphi_{1}(x) \leq y \leq \varphi_{2}(x), a \leq x \leq b\right\} \\
& D=\left\{(x, y) \psi_{1}(y) \leq x \leq \psi_{2}(y), c \leq y \leq d\right\}
\end{aligned}
$$

$$
\begin{aligned}
& \iint_{D} \frac{\partial Q}{\partial x} d x d y=\int_{c}^{d} d y \int_{\psi_{1}(y)}^{\psi_{2}(y)} \frac{\partial Q}{\partial x} d x \\
= & \int_{c}^{d} Q\left(\psi_{2}(y), y\right) d y-\int_{c}^{d} Q\left(\psi_{1}(y), y\right) d y \\
= & \int_{C B E} Q(x, y) d y-\int_{C A E} Q(x, y) d y \overbrace{x=\psi_{1}}(y) \int_{\mathrm{D}} \\
= & \int_{C B E} Q(x, y) d y+\int_{E A C} Q(x, y) d y \\
= & \int_{L} Q(x, y) d y
\end{aligned}
$$

同理可证 $\quad-\iint_{D} \frac{\partial P}{\partial y} d x d y=\int_{L} P(x, y) d x$

两式相加得

$$
\iint_{D}\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right) d x d y=\oint_{L} P d x+Q d y
$$

## 证明（2）

若区域D由按段光滑的闭曲线围成。如图，将 $\boldsymbol{D}$ 分成三个既是 $\boldsymbol{X}$ —型又是
$Y$ —型的区域 $D_{1}, D_{2}, D_{3}$ ．

$$
\iint_{D}\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right) d x d y=\iint_{D_{1}+D_{2}+D_{3}}\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right) d x d y
$$

$$
\begin{aligned}
& \iint_{D_{1}}\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right) d x d y+\iint_{D_{2}}\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right) d x d y+\iint_{D_{3}}\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right) d x d y \\
& =\int_{L_{1}} P d x+Q d y+\int_{L_{2}} P d x+Q d y+\int_{L_{3}} P d x+Q d y \\
& =\oint_{L} P d x+Q d y \\
& \left(L_{1}, L_{2}, L_{3} \text { 对 } D \text { 来说为正方向 }\right)
\end{aligned}
$$

## 证明（3）

若区域不止由一条闭曲线所围成。添加直线段 $A B, C E$ ．则 $\boldsymbol{D}$ 的边界曲线由 $A B, \boldsymbol{L}_{\mathbf{2}}, B A$ ， $A F C, C E, L_{3}, E C$ 及 $C G A$ 构成。

$$
\begin{aligned}
& \text { 由(2)知 } \iint_{D}\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right) d x d y \\
& =\left\{\int_{A B}+\int_{L_{2}}+\int_{B A}+\int_{A F C}+\int_{C E}+\int_{L_{3}}+\int_{E C}+\int_{C G A}\right\} \cdot(P d x+Q d y)
\end{aligned}
$$

$$
\begin{aligned}
& =\left(\oint_{L_{2}}+\oint_{L_{3}}+\oint_{L_{1}}\right)(P d x+Q d y) \\
& =\oint_{L} P d x+Q d y \quad\left(L_{1}, L_{2}, L_{3} \text { 对 } D \text { 来说为正方向 }\right)
\end{aligned}
$$

格林公式的实质：沟通了沿闭曲线的积分与二重积分之间的联系。

注意：格林公式的应用条件 $\left\{\begin{array}{l}\mathbf{L} \text { 为封闭曲线（取正向）} \\ \mathbf{P}, \mathbf{Q} \text { 在 } \mathbf{L} \text { 所围的区域 } \mathbf{D} \\ \text { 内有一阶连续偏导数 }\end{array}\right.$

## 注意：

（1）便于记忆形式： $\int_{L} P d x+Q d y=\iint_{D}\left|\begin{array}{cc}\frac{\partial}{\partial x} & \frac{\partial}{\partial y} \\ P & Q\end{array}\right| d x d y$
（2）当边界曲线取反方向时，Green公式中二重积分符号前添＂－＂号！
（3）应用Green公式条件缺一不可。

3、格林公式的简单应用
