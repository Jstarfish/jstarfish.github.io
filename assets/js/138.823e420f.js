(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{638:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"https://img.starfish.ink/algorithm/recursion-banner.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"什么是递归"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是递归"}},[t._v("#")]),t._v(" 什么是递归")]),t._v(" "),a("p",[t._v("递归的基本思想是某个函数直接或者间接地调用自身，这样就把原问题的求解转换为许多性质相同但是规模更小的子问题。我们只需要关注如何把原问题划分成符合条件的子问题，而不需要去研究这个子问题是如何被解决的。")]),t._v(" "),a("p",[a("strong",[t._v("简单地说，就是如果在函数中存在着调用函数本身的情况，这种现象就叫递归。")])]),t._v(" "),a("p",[t._v("你以前肯定写过递归，只是有可能某些不知道这就是递归罢了。")]),t._v(" "),a("p",[t._v("以阶乘函数为例，在 factorial 函数中存在着 "),a("code",[t._v("factorial(n - 1)")]),t._v(" 的调用，所以此函数是递归函数")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("factorial")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("factorial")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("进一步剖析「递归」，先有「递」再有「归」，「递」的意思是将问题拆解成子问题来解决， 子问题再拆解成子子问题，...，直到被拆解的子问题无需再拆分成更细的子问题（即可以求解），「归」是说最小的子问题解决了，那么它的上一层子问题也就解决了，上一层的子问题解决了，上上层子问题自然也就解决了,....,直到最开始的问题解决，文字说可能有点抽象，那我们就以阶层 f(6) 为例来看下它的「递」和「归」。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.starfish.ink/algorithm/recursion.png",alt:"img"}})]),t._v(" "),a("p",[t._v("求解问题 "),a("code",[t._v("f(6)")]),t._v("，由于 "),a("code",[t._v("f(6) = n * f(5)")]),t._v(", 所以 f(6) 需要拆解成 f(5) 子问题进行求解，同理 "),a("code",[t._v("f(5) = n * f(4)")]),t._v(",也需要进一步拆分,... ,直到 "),a("code",[t._v("f(1)")]),t._v(", 这是「递」，"),a("code",[t._v("f(1)")]),t._v("解决了，由于 "),a("code",[t._v("f(2) = 2 f(1) = 2")]),t._v(" 也解决了,.... "),a("code",[t._v("f(n)")]),t._v(" 到最后也解决了，这是「归」，所以递归的本质是能把问题拆分成具有"),a("strong",[t._v("相同解决思路")]),t._v("的子问题，。。。直到最后被拆解的子问题再也不能拆分，解决了最小粒度可求解的子问题后，在「归」的过程中自然顺其自然地解决了最开始的问题。")]),t._v(" "),a("h3",{attrs:{id:"递归原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#递归原理"}},[t._v("#")]),t._v(" 递归原理")]),t._v(" "),a("p",[t._v("递归的基本思想是某个函数直接或者间接地调用自身，这样就把原问题的求解转换为许多性质相同但是规模更小的子问题。")]),t._v(" "),a("p",[t._v("我们只需要关注如何把原问题划分成符合条件的子问题，而不需要去研究这个子问题是如何被解决的。")]),t._v(" "),a("p",[t._v("递归和枚举的区别在于：枚举是横向地把问题划分，然后依次求解子问题，而递归是把问题逐级分解，是纵向的拆分。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("你今年几岁"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最简子问题，递归终止条件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("你"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1999")]),t._v("年几岁"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" 我"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("岁"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 递归调用，缩小规模")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("你去年几岁"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("任何一个有意义的递归算法总是两部分组成："),a("strong",[t._v("递归调用")]),t._v("和"),a("strong",[t._v("递归终止条件")]),t._v("。")]),t._v(" "),a("p",[t._v("为了确保递归函数不会导致无限循环，它应具有以下属性：")]),t._v(" "),a("ol",[a("li",[t._v("一个简单的"),a("code",[t._v("基本案例（basic case）")]),t._v("（或一些案例） —— 能够不使用递归来产生答案的终止方案。")]),t._v(" "),a("li",[t._v("一组规则，也称作"),a("code",[t._v("递推关系（recurrence relation）")]),t._v("，可将所有其他情况拆分到基本案例。")])]),t._v(" "),a("p",[t._v("注意，函数可能会有多个位置进行自我调用。")]),t._v(" "),a("h3",{attrs:{id:"递归需要满足的三个条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#递归需要满足的三个条件"}},[t._v("#")]),t._v(" 递归需要满足的三个条件")]),t._v(" "),a("p",[t._v("只要同时满足以下三个条件，就可以用递归来解决。")]),t._v(" "),a("ol",[a("li",[a("p",[a("strong",[t._v("一个问题的解可以分解为几个子问题的解")])]),t._v(" "),a("p",[t._v("何为子问题？子问题就是数据规模更小的问题。比如前面的案例，要知道“自己在哪一排”，可以分解为“前一排的人在哪一排”这样的一个子问题。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("这个问题与分解之后的子问题，除了数据规模不同，求解思路完全一样")])]),t._v(" "),a("p",[t._v("如案例所示，求解“自己在哪一排”的思路，和前面一排人求解“自己在哪一排”的思路是一模一样的。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("存在递归终止条件")])]),t._v(" "),a("p",[t._v("把问题分解为子问题，把子问题再分解为子子问题，一层一层分解下去，不能存在无限循环，这就需要有终止条件。")])])]),t._v(" "),a("h3",{attrs:{id:"怎样编写递归代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#怎样编写递归代码"}},[t._v("#")]),t._v(" 怎样编写递归代码")]),t._v(" "),a("p",[t._v("写递归代码，可以按三步走：")]),t._v(" "),a("p",[a("strong",[t._v("第一要素：明确你这个函数想要干什么")])]),t._v(" "),a("p",[t._v("首先，你需要明确你要解决的问题，以及这个问题是否适合用递归来解决。")]),t._v(" "),a("p",[t._v("也就是说，我们先不管函数里面的代码什么，而是要先明白，你这个函数是要用来干什么。")]),t._v(" "),a("p",[t._v("例如，我定义了一个函数，算 n 的阶乘")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 算 n 的阶乘(假设n不为0)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("factorial")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("第二要素：寻找递归结束条件")])]),t._v(" "),a("p",[t._v("递归基（Base Case）是递归函数结束的条件。如果没有递归基，递归函数会无限循环下去。递归基应该是问题的最小单位，在这种情况下，函数可以直接返回结果而无需进一步递归。")]),t._v(" "),a("p",[t._v("也就是说，我们需要找出"),a("strong",[t._v("当参数为啥时，递归结束，之后直接把结果返回")]),t._v("，请注意，这个时候我们必须能根据这个参数的值，能够"),a("strong",[t._v("直接")]),t._v("知道函数的结果是什么。")]),t._v(" "),a("p",[t._v("例如，上面那个例子，当 n = 1 时，那你应该能够直接知道 f(n) 是啥吧？此时，f(1) = 1。完善我们函数内部的代码，把第二要素加进代码里面")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 算 n 的阶乘(假设n不为0)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("有人可能会说，当 n = 2 时，那我们可以直接知道 f(n) 等于多少啊，那我可以把 n = 2 作为递归的结束条件吗？")]),t._v(" "),a("p",[t._v("当然可以，只要你觉得参数是什么时，你能够直接知道函数的结果，那么你就可以把这个参数作为结束的条件，所以下面这段代码也是可以的。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 算 n 的阶乘(假设n>=2)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("注意我代码里面写的注释，假设 n >= 2，因为如果 n = 1时，会被漏掉，当 n <= 2时，f(n) = n，所以为了更加严谨，我们可以写成这样：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 算 n 的阶乘(假设n不为0)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("第三要素：定义递归关系")])]),t._v(" "),a("p",[t._v("第三要素就是，我们要"),a("strong",[t._v("不断缩小参数的范围")]),t._v("，缩小之后，我们可以通过一些辅助的变量或者操作，使原函数的结果不变。")]),t._v(" "),a("p",[t._v("例如，f(n) 这个范围比较大，我们可以让 "),a("code",[t._v("f(n) = n * f(n-1)")]),t._v("。这样，范围就由 n 变成了 n-1 了，范围变小了，并且为了原函数f(n) 不变，我们需要让 f(n-1) 乘以 n。")]),t._v(" "),a("p",[t._v("说白了，就是要找到原函数的一个等价关系式，"),a("code",[t._v("f(n)")]),t._v(" 的等价关系式为 "),a("code",[t._v("n * f(n-1)")]),t._v("，即 "),a("code",[t._v("f(n) = n * f(n-1)")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("写递归代码的关键就是找到如何将大问题分解为小问题的规律，请求基于此写出递推公式，然后再推敲终止条件，最后将递推公式和终止条件翻译成代码")]),t._v("。")]),t._v(" "),a("p",[t._v("当我们面对一个问题需要分解为多个子问题的时候，递归代码往往没那么好理解，比如第二个案例，人脑几乎没办法把整个“递”和“归”的过程一步一步都想清楚。")]),t._v(" "),a("p",[t._v("计算机擅长做重复的事情，所以递归正符合它的胃口。而我们人脑更喜欢平铺直叙的思维方式。当我们看到递归时，我们总想把递归平铺展开，脑子里就会循环，一层一层往下调，然后再一层一层返回，试图想搞清楚计算机每一步都是怎么执行的，这样就很容易被绕进去。")]),t._v(" "),a("p",[t._v("对于递归代码，这种试图想清楚整个递和归过程的做法，实际上是进入了一个思维误区。很多时候，我们理解起来比较吃力，主要原因就是自己给自己制造了这种理解障碍。那正确的思维方式应该是怎样的呢？")]),t._v(" "),a("p",[t._v("如果一个问题 A 可以分解为若干子问题 B、C、D，可以假设子问题 B、C、D 已经解决，在此基础上思考如何解决问题 A。而且，只需要思考问题 A 与子问题 B、C、D 两层之间的关系即可，不需要一层一层往下思考子问题与子子问题，子子问题与子子子问题之间的关系。屏蔽掉递归细节，这样子理解起来就简单多了。")]),t._v(" "),a("p",[t._v("换句话说就是：千万不要跳进这个函数里面企图探究更多细节，否则就会陷入无穷的细节无法自拔，人脑能压几个栈啊。")]),t._v(" "),a("p",[t._v("所以，编写递归代码的关键是："),a("strong",[t._v("只要遇到递归，我们就把它抽象成一个递推公式，不用想一层层的调用关系，不要试图用人脑去分解递归的每个步骤")]),t._v("。")])]),t._v(" "),a("h4",{attrs:{id:"递归代码要警惕堆栈溢出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#递归代码要警惕堆栈溢出"}},[t._v("#")]),t._v(" 递归代码要警惕堆栈溢出")]),t._v(" "),a("p",[t._v("递归调用的深度受限于程序的栈空间。如果递归深度太深，可能会导致栈溢出。对于深度较大的递归问题，可以考虑使用迭代方法或尾递归优化（Tail Recursion Optimization）")]),t._v(" "),a("h4",{attrs:{id:"递归代码要警惕重复计算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#递归代码要警惕重复计算"}},[t._v("#")]),t._v(" 递归代码要警惕重复计算")]),t._v(" "),a("p",[t._v("在某些问题中（如斐波那契数列），直接递归可能导致大量重复计算，影响效率。可以使用记忆化（Memoization）或动态规划（Dynamic Programming）来优化递归，避免重复计算")]),t._v(" "),a("h3",{attrs:{id:"案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例"}},[t._v("#")]),t._v(" 案例")]),t._v(" "),a("h4",{attrs:{id:"斐波那契数列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#斐波那契数列"}},[t._v("#")]),t._v(" 斐波那契数列")]),t._v(" "),a("blockquote",[a("p",[t._v("斐波那契数列的是这样一个数列：1、1、2、3、5、8、13、21、34....，即第一项 f(1) = 1,第二项 f(2) = 1.....,第 n 项目为 f(n) = f(n-1) + f(n-2)。求第 n 项的值是多少。")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.先写递归结束条件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.接着写等价关系式")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"小青蛙跳台阶"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小青蛙跳台阶"}},[t._v("#")]),t._v(" 小青蛙跳台阶")]),t._v(" "),a("blockquote",[a("p",[t._v("一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法。")])]),t._v(" "),a("p",[t._v("每次跳的时候，小青蛙可以跳一个台阶，也可以跳两个台阶，也就是说，每次跳的时候，小青蛙有两种跳法。")]),t._v(" "),a("p",[t._v("第一种跳法：第一次我跳了一个台阶，那么还剩下n-1个台阶还没跳，剩下的n-1个台阶的跳法有f(n-1)种。")]),t._v(" "),a("p",[t._v("第二种跳法：第一次跳了两个台阶，那么还剩下n-2个台阶还没，剩下的n-2个台阶的跳法有f(n-2)种。")]),t._v(" "),a("p",[t._v("所以，小青蛙的全部跳法就是这两种跳法之和了，即 f(n) = f(n-1) + f(n-2)。至此，等价关系式就求出来了")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.先写递归结束条件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.接着写等价关系式")]),t._v("\n    ruturn "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("大家觉得上面的代码对不对？")]),t._v(" "),a("p",[t._v("答是不大对，当 n = 2 时，显然会有 f(2) = f(1) + f(0)。我们知道，f(0) = 0，按道理是递归结束，不用继续往下调用的，但我们上面的代码逻辑中，会继续调用 f(0) = f(-1) + f(-2)。这会导致无限调用，进入"),a("strong",[t._v("死循环")]),t._v("。")]),t._v(" "),a("p",[t._v("这也是我要和你们说的，关于"),a("strong",[t._v("递归结束条件是否够严谨问题")]),t._v("，有很多人在使用递归的时候，由于结束条件不够严谨，导致出现死循环。也就是说，当我们在第二步找出了一个递归结束条件的时候，可以把结束条件写进代码，然后进行第三步，但是"),a("strong",[t._v("请注意")]),t._v("，当我们第三步找出等价函数之后，还得再返回去第二步，根据第三步函数的调用关系，会不会出现一些漏掉的结束条件。就像上面，f(n-2)这个函数的调用，有可能出现 f(0) 的情况，导致死循环，所以我们把它补上。代码如下：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//f(0) = 0,f(1) = 1，等价于 n<=1时，f(n) = n。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    ruturn "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"反转单链表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#反转单链表"}},[t._v("#")]),t._v(" 反转单链表")]),t._v(" "),a("blockquote",[a("p",[t._v("反转单链表。例如链表为：1->2->3->4。反转后为 4->3->2->1")])]),t._v(" "),a("p",[t._v("链表的节点定义如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("class Node{\n    int date;\n    Node next;\n}\n")])])]),a("p",[t._v("这个的等价关系不像 n 是个数值那样，比较容易寻找。但是我告诉你，它的等价条件中，一定是范围不断在缩小，对于链表来说，就是链表的节点个数不断在变小")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//用递归的方法反转链表")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reverseList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.递归结束条件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("head "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 递归反转 子链表")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),t._v(" newList "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reverseList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 改变 1，2节点的指向。")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过 head.next获取节点2")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),t._v(" t1  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 让 2 的 next 指向 2")]),t._v("\n     t1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1 的 next 指向 null.")]),t._v("\n    head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把调整之后的链表返回。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" newList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"两两交换链表中的节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两两交换链表中的节点"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://leetcode.cn/problems/swap-nodes-in-pairs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("两两交换链表中的节点"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://assets.leetcode.com/uploads/2020/10/03/swap_ex1.jpg",alt:"img"}})]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：head = [1,2,3,4]\n输出：[2,1,4,3]\n")])])])]),t._v(" "),a("p",[t._v("当前节点next，指向当前节点，指针互换")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("swapPairs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//递归的终止条件")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("head"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//假设链表是 1->2->3->4")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这句就先保存节点2")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" tmp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//继续递归，处理节点3->4")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当递归结束返回后，就变成了4->3")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//于是head节点就指向了4，变成1->4->3")]),t._v("\n  head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("swapPairs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将2节点指向1")]),t._v("\n  tmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" tmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);