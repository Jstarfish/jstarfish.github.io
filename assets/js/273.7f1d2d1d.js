(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{771:function(t,v,a){"use strict";a.r(v);var _=a(2),s=Object(_.a)({},(function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"jvm-参数配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jvm-参数配置"}},[t._v("#")]),t._v(" JVM 参数配置")]),t._v(" "),a("blockquote",[a("p",[t._v("面试官：你说你做过 JVM 调优和参数配置，那你平时工作用过的配置参数有哪些？")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gjlfuwkbr3j31hi0u0qv7.jpg",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"jvm-参数类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jvm-参数类型"}},[t._v("#")]),t._v(" JVM 参数类型")]),t._v(" "),a("p",[t._v("JVM 参数类型大致分为以下几类：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("标准参数")]),t._v("（-），即在 JVM 的各个版本中基本不变的，相对比较稳定的参数，向后兼容;")]),t._v(" "),a("li",[a("strong",[t._v("非标准参数")]),t._v("（-X），变化比较小的参数，默认 JVM 实现这些参数的功能，但是并不保证所有 JVM 实现都满足，且不保证向后兼容；")]),t._v(" "),a("li",[a("strong",[t._v("非Stable参数")]),t._v("（-XX），此类参数各个 JVM 实现会有所不同，将来可能会随时取消，需要慎重使用；")])]),t._v(" "),a("h3",{attrs:{id:"标准参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标准参数"}},[t._v("#")]),t._v(" 标准参数")]),t._v(" "),a("p",[t._v("通过命令 "),a("code",[t._v("java")]),t._v(" 即可查看")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwly1gkamd9p5slj30u011mjzk.jpg",alt:""}})]),t._v(" "),a("ul",[a("li",[a("code",[t._v("-version")]),t._v("：输出 java 的版本信息，比如 jdk 版本、vendor、model")]),t._v(" "),a("li",[a("code",[t._v("-help")]),t._v("：输出 java 标准参数列表及其描述")]),t._v(" "),a("li",[a("code",[t._v("-showversion")]),t._v("：输出 java 版本信息（与-version相同）之后，继续输出 java 的标准参数列表及其描述，相当于"),a("code",[t._v("java -verion")]),t._v(" 和 "),a("code",[t._v("java -help")])]),t._v(" "),a("li",[a("code",[t._v("-client")]),t._v("：设置 jvm 使用 client 模式，特点是启动速度比较快，但运行时性能和内存管理效率不高，通常用于客户端应用程序或者PC应用开发和调试")]),t._v(" "),a("li",[a("code",[t._v("-server")]),t._v("：设置 jvm 使 server 模式，特点是启动速度比较慢，但运行时性能和内存管理效率很高，适用于生产环境。在具有64位能力的 jdk 环境下将默认启用该模式，而忽略 -client 参数")]),t._v(" "),a("li",[a("code",[t._v("-agentlib:libname[=options]")]),t._v("：用于装载本地 lib 包。其中 libname 为本地代理库文件名，默认搜索路径为环境变量 PATH 中的路径，options 为传给本地库启动时的参数，多个参数之间用逗号分隔")]),t._v(" "),a("li",[a("code",[t._v("-agentpath:pathname[=options]")]),t._v("：按全路径装载本地库，不再搜索PATH中的路径；其他功能和 agentlib相同")]),t._v(" "),a("li",[a("code",[t._v("-Dproperty=value")]),t._v('\n设置系统属性名/值对，运行在此jvm之上的应用程序可用System.getProperty("property")得到value的值。\n如果value中有空格，则需要用双引号将该值括起来，如-Dname="space string"。\n该参数通常用于设置系统级全局变量值，如配置文件路径，以便该属性在程序中任何地方都可访问')]),t._v(" "),a("li",[a("code",[t._v("-verbose:[class|gc|jni]")]),t._v("：输出每个加载类|gc|jni 的信息")])]),t._v(" "),a("h3",{attrs:{id:"x-参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#x-参数"}},[t._v("#")]),t._v(" X 参数")]),t._v(" "),a("p",[t._v("非标准参数又称为扩展参数，通过命令 "),a("code",[t._v("java -X")]),t._v(" 查看，其列表如下")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwly1gkamht10qaj30u00yaqbu.jpg",alt:""}})]),t._v(" "),a("ul",[a("li",[a("code",[t._v("-Xint")]),t._v("：设置 jvm 以解释模式运行，所有的字节码将被直接执行，而不会编译成本地码")]),t._v(" "),a("li",[t._v("-Xmixed：混合模式，JVM自己来决定是否编译成本地代码，默认使用的就是混合模式")]),t._v(" "),a("li",[a("code",[t._v("-Xbatch")]),t._v("：关闭后台代码编译，强制在前台编译，编译完成之后才能进行代码执行。 默认情况下，jvm 在后台进行编译，若没有编译完成，则前台运行代码时以解释模式运行")]),t._v(" "),a("li",[a("code",[t._v("-Xbootclasspath:bootclasspath")]),t._v("：让 jvm 从指定路径（可以是分号分隔的目录、jar、或者zip）中加载bootclass，用来替换 jdk 的 rt.jar；若非必要，一般不会用到")]),t._v(" "),a("li",[a("code",[t._v("-Xbootclasspath/a:path")]),t._v(" ：将指定路径的所有文件追加到默认 bootstrap 路径中")]),t._v(" "),a("li",[a("code",[t._v("-Xfuture")]),t._v("：让jvm对类文件执行严格的格式检查（默认 jvm 不进行严格格式检查），以符合类文件格式规范，推荐开发人员使用该参数。")]),t._v(" "),a("li",[a("code",[t._v("-Xincgc")]),t._v("：开启增量 gc（默认为关闭），这有助于减少长时间GC时应用程序出现的停顿，但由于可能和应用程序并发执行，所以会降低CPU对应用的处理能力")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("-Xloggc:file")])]),t._v("： 与-verbose:gc功能类似，只是将每次GC事件的相关情况记录到一个文件中，文件的位置最好在本地，以避免网络的潜在问题。若与 verbose 命令同时出现在命令行中，则以 -Xloggc 为准")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("-Xms")])]),t._v("：指定 jvm 堆的初始大小，默认为物理内存的1/64，最小为1M，可以指定单位，比如k、m，若不指定，则默认为字节")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("-Xmx")])]),t._v("：指定 jvm 堆的最大值，默认为物理内存的 1/4或者1G，最小为2M；单位与"),a("code",[t._v("-Xms")]),t._v("一致")]),t._v(" "),a("li",[a("code",[t._v("-Xprof")]),t._v("：跟踪正运行的程序，并将跟踪数据在标准输出输出；适合于开发环境调试")]),t._v(" "),a("li",[a("strong",[t._v("-Xss")]),t._v("： 设置单个线程栈的大小，一般默认为 512k")])]),t._v(" "),a("h3",{attrs:{id:"xx-参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xx-参数"}},[t._v("#")]),t._v(" xx 参数")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("-XX:+PrintFlagsInitial")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("主要查看初始默认值")])]),t._v(" "),a("li",[a("p",[t._v("java -XX:+PrintFlagsInitial")])]),t._v(" "),a("li",[a("p",[t._v("java -XX:+PrintFlagsInitial -version")])]),t._v(" "),a("li",[a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwly1gkan7em5moj318o0peq9p.jpg",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("等号前有冒号")]),t._v(" :=  说明 jvm 参数有人为修改过或者 JVM加载修改")]),t._v(" "),a("p",[t._v("false 说明是Boolean 类型 参数，数字说明是 KV 类型参数")])])])]),t._v(" "),a("li",[a("p",[t._v("-XX:+PrintFlagsFinal")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwly1gkanbdiozxj31700q2dmr.jpg",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("主要查看修改更新")]),t._v(" "),a("li",[t._v("java -XX:+PrintFlagsFinal")]),t._v(" "),a("li",[t._v("java -XX:+PrintFlagsFinal -version")]),t._v(" "),a("li",[t._v("运行java命令的同时打印出参数 java -XX:+PrintFlagsFinal -XX:MetaspaceSize=512m Hello.java")])])]),t._v(" "),a("li",[a("p",[t._v("-XX:+PrintCommondLineFlags")]),t._v(" "),a("ul",[a("li",[t._v("打印命令行参数")]),t._v(" "),a("li",[t._v("java -XX:+PrintCommandLineFlags -version")]),t._v(" "),a("li",[t._v("可以方便的看到垃圾回收器")]),t._v(" "),a("li",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0081Kckwly1gkangitwxaj31py06ijtn.jpg",alt:""}})])])])]),t._v(" "),a("p",[t._v("xx 参数主要分为 Boolean 类型参数和 KV 类型参数，我们一一介绍下")]),t._v(" "),a("h4",{attrs:{id:"boolean-类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#boolean-类型"}},[t._v("#")]),t._v(" Boolean 类型")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("公式： -xx:+ 或者 - 某个属性值（+表示开启，- 表示关闭）")])]),t._v(" "),a("li",[a("p",[t._v("Case")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("是否打印 GC 收集细节")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("-XX:+PrintGCDetails")])]),t._v(" "),a("li",[a("code",[t._v("-XX:-PrintGCDetails")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTly1gdebpozfgwj315o0sgtcy.jpg",alt:""}})]),t._v(" "),a("p",[t._v("添加如下参数后，重新查看，发现是 + 号了")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTly1gdebrx25moj31170u042c.jpg",alt:""}})])]),t._v(" "),a("li",[a("p",[t._v("是否使用串行垃圾回收器")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("-XX:-UseSerialGC")])]),t._v(" "),a("li",[a("code",[t._v("-XX:+UseSerialGC")])])])])])])]),t._v(" "),a("h4",{attrs:{id:"kv-设值类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kv-设值类型"}},[t._v("#")]),t._v(" KV 设值类型")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("公式： -XX:属性key=属性value")])]),t._v(" "),a("li",[a("p",[t._v("Case:")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("-XX:MetaspaceSize=128m")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("-xx:MaxTenuringThreshold=15")])])]),t._v(" "),a("li",[a("p",[t._v("我们常见的 -Xm s和 -Xmx 也属于 KV 设值类型")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("-Xms")]),t._v(" 等价于 "),a("code",[t._v("-XX:InitialHeapSize")])]),t._v(" "),a("li",[a("code",[t._v("-Xmx")]),t._v(" 等价于 "),a("code",[t._v("-XX:MaxHeapSize")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTly1gdecj9d7z3j310202qdgb.jpg",alt:""}})])])])]),t._v(" "),a("li",[a("p",[t._v("jinfo 举例，如何查看当前运行程序的配置")]),t._v(" "),a("ul",[a("li",[t._v("jps -l")]),t._v(" "),a("li",[t._v("jinfo -flag [配置项] 进程编号")]),t._v(" "),a("li",[t._v("jinfo "),a("strong",[t._v("-flags")]),t._v(" 1981(打印所有)")]),t._v(" "),a("li",[t._v("jinfo -flag PrintGCDetails 1981")]),t._v(" "),a("li",[t._v("jinfo -flag MetaspaceSize 2044")])])])]),t._v(" "),a("p",[t._v("这些都是命令级别的查看，我们也可以在程序运行中查看")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" totalMemory "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runtime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRuntime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("totalMemory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" maxMemory "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runtime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRuntime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("maxMemory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"total_memory(-xms)="')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("totalMemory"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"字节，"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("totalMemory"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MB"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"max_memory(-xmx)="')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("maxMemory"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"字节，"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("maxMemory"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MB"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"常用配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用配置"}},[t._v("#")]),t._v(" 常用配置")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("参数名称")])]),t._v(" "),a("th",[a("strong",[t._v("含义")])]),t._v(" "),a("th",[a("strong",[t._v("默认值")])]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("-Xms")]),t._v(" "),a("td",[t._v("初始堆大小")]),t._v(" "),a("td",[t._v("物理内存的1/64(<1GB)")]),t._v(" "),a("td",[t._v("默认(MinHeapFreeRatio参数可以调整)空余堆内存小于40%时，JVM就会增大堆直到-Xmx的最大限制.")])]),t._v(" "),a("tr",[a("td",[t._v("-Xmx")]),t._v(" "),a("td",[t._v("最大堆大小")]),t._v(" "),a("td",[t._v("物理内存的1/4(<1GB)")]),t._v(" "),a("td",[t._v("默认(MaxHeapFreeRatio参数可以调整)空余堆内存大于70%时，JVM会减少堆直到 -Xms的最小限制")])]),t._v(" "),a("tr",[a("td",[t._v("-Xmn")]),t._v(" "),a("td",[t._v("年轻代大小(1.4or lator)")]),t._v(" "),a("td"),t._v(" "),a("td",[a("strong",[t._v("注意")]),t._v("：此处的大小是（eden+ 2 survivor space).与jmap -heap中显示的New gen是不同的。 整个堆大小=年轻代大小 + 年老代大小 + 持久代大小. 增大年轻代后,将会减小年老代大小.此值对系统性能影响较大,Sun官方推荐配置为整个堆的3/8")])]),t._v(" "),a("tr",[a("td",[t._v("-XX:NewSize")]),t._v(" "),a("td",[t._v("设置年轻代大小(for 1.3/1.4)")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("-XX:MaxNewSize")]),t._v(" "),a("td",[t._v("年轻代最大值(for 1.3/1.4)")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("-XX:PermSize")]),t._v(" "),a("td",[t._v("设置持久代(perm gen)初始值")]),t._v(" "),a("td",[t._v("物理内存的1/64")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("-XX:MaxPermSize")]),t._v(" "),a("td",[t._v("设置持久代最大值")]),t._v(" "),a("td",[t._v("物理内存的1/4")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("-Xss")]),t._v(" "),a("td",[t._v("每个线程的堆栈大小")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v('JDK5.0以后每个线程堆栈大小为1M,以前每个线程堆栈大小为256K.更具应用的线程所需内存大小进行 调整.在相同物理内存下,减小这个值能生成更多的线程.但是操作系统对一个进程内的线程数还是有限制的,不能无限生成,经验值在3000~5000左右 一般小的应用， 如果栈不是很深， 应该是128k够用的 大的应用建议使用256k。这个选项对性能影响比较大，需要严格的测试。（校长） 和threadstacksize选项解释很类似,官方文档似乎没有解释,在论坛中有这样一句话:"” -Xss is translated in a VM flag named ThreadStackSize” 一般设置这个值就可以了。')])]),t._v(" "),a("tr",[a("td",[t._v("-"),a("em",[t._v("XX:ThreadStackSize")])]),t._v(" "),a("td",[t._v("Thread Stack Size")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("(0 means use default stack size) [Sparc: 512; Solaris x86: 320 (was 256 prior in 5.0 and earlier); Sparc 64 bit: 1024; Linux amd64: 1024 (was 0 in 5.0 and earlier); all others 0.]")])]),t._v(" "),a("tr",[a("td",[t._v("-XX:NewRatio")]),t._v(" "),a("td",[t._v("年轻代(包括Eden和两个Survivor区)与年老代的比值(除去持久代)")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("-XX:NewRatio=4表示年轻代与年老代所占比值为1:4,年轻代占整个堆栈的1/5 Xms=Xmx并且设置了Xmn的情况下，该参数不需要进行设置。")])]),t._v(" "),a("tr",[a("td",[t._v("-XX:SurvivorRatio")]),t._v(" "),a("td",[t._v("Eden区与Survivor区的大小比值")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("设置为8,则两个Survivor区与一个Eden区的比值为2:8,一个Survivor区占整个年轻代的1/10")])]),t._v(" "),a("tr",[a("td",[t._v("-XX:LargePageSizeInBytes")]),t._v(" "),a("td",[t._v("内存页的大小不可设置过大， 会影响Perm的大小")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("=128m")])]),t._v(" "),a("tr",[a("td",[t._v("-XX:+UseFastAccessorMethods")]),t._v(" "),a("td",[t._v("原始类型的快速优化")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("-XX:+DisableExplicitGC")]),t._v(" "),a("td",[t._v("关闭System.gc()")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("这个参数需要严格的测试")])]),t._v(" "),a("tr",[a("td",[t._v("-XX:MaxTenuringThreshold")]),t._v(" "),a("td",[t._v("垃圾最大年龄")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("如果设置为0的话,则年轻代对象不经过Survivor区,直接进入年老代. 对于年老代比较多的应用,可以提高效率.如果将此值设置为一个较大值,则年轻代对象会在Survivor区进行多次复制,这样可以增加对象再年轻代的存活 时间,增加在年轻代即被回收的概率 该参数只有在串行GC时才有效.")])]),t._v(" "),a("tr",[a("td",[t._v("-XX:+AggressiveOpts")]),t._v(" "),a("td",[t._v("加快编译")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("-XX:+UseBiasedLocking")]),t._v(" "),a("td",[t._v("锁机制的性能改善")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("-Xnoclassgc")]),t._v(" "),a("td",[t._v("禁用垃圾回收")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("-XX:SoftRefLRUPolicyMSPerMB")]),t._v(" "),a("td",[t._v("每兆堆空闲空间中SoftReference的存活时间")]),t._v(" "),a("td",[t._v("1s")]),t._v(" "),a("td",[t._v("softly reachable objects will remain alive for some amount of time after the last time they were referenced. The default value is one second of lifetime per free megabyte in the heap")])]),t._v(" "),a("tr",[a("td",[t._v("-XX:PretenureSizeThreshold")]),t._v(" "),a("td",[t._v("对象超过多大是直接在旧生代分配")]),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[t._v("单位字节 新生代采用Parallel Scavenge GC时无效 另一种直接在旧生代分配的情况是大的数组对象,且数组中无外部引用对象.")])]),t._v(" "),a("tr",[a("td",[t._v("-XX:TLABWasteTargetPercent")]),t._v(" "),a("td",[t._v("TLAB占eden区的百分比")]),t._v(" "),a("td",[t._v("1%")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("-XX:+"),a("em",[t._v("CollectGen0First")])]),t._v(" "),a("td",[t._v("FullGC时是否先YGC")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td")])])]),t._v(" "),a("p",[a("strong",[t._v("并行收集器相关参数")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("-XX:+UseParallelGC")]),t._v(" "),a("th",[t._v("Full GC采用parallel MSC (此项待验证)")]),t._v(" "),a("th"),t._v(" "),a("th",[t._v("选择垃圾收集器为并行收集器.此配置仅对年轻代有效.即上述配置下,年轻代使用并发收集,而年老代仍旧使用串行收集.(此项待验证)")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("-XX:+UseParNewGC")]),t._v(" "),a("td",[t._v("设置年轻代为并行收集")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("可与CMS收集同时使用 JDK5.0以上,JVM会根据系统配置自行设置,所以无需再设置此值")])]),t._v(" "),a("tr",[a("td",[t._v("-XX:ParallelGCThreads")]),t._v(" "),a("td",[t._v("并行收集器的线程数")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("此值最好配置与处理器数目相等 同样适用于CMS")])]),t._v(" "),a("tr",[a("td",[t._v("-XX:+UseParallelOldGC")]),t._v(" "),a("td",[t._v("年老代垃圾收集方式为并行收集(Parallel Compacting)")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("这个是JAVA 6出现的参数选项")])]),t._v(" "),a("tr",[a("td",[t._v("-XX:MaxGCPauseMillis")]),t._v(" "),a("td",[t._v("每次年轻代垃圾回收的最长时间(最大暂停时间)")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("如果无法满足此时间,JVM会自动调整年轻代大小,以满足此值.")])]),t._v(" "),a("tr",[a("td",[t._v("-XX:+UseAdaptiveSizePolicy")]),t._v(" "),a("td",[t._v("自动选择年轻代区大小和相应的Survivor区比例")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("设置此选项后,并行收集器会自动选择年轻代区大小和相应的Survivor区比例,以达到目标系统规定的最低相应时间或者收集频率等,此值建议使用并行收集器时,一直打开.")])]),t._v(" "),a("tr",[a("td",[t._v("-XX:GCTimeRatio")]),t._v(" "),a("td",[t._v("设置垃圾回收时间占程序运行时间的百分比")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("公式为1/(1+n)")])]),t._v(" "),a("tr",[a("td",[t._v("-XX:+"),a("em",[t._v("ScavengeBeforeFullGC")])]),t._v(" "),a("td",[t._v("Full GC前调用YGC")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("Do young generation GC prior to a full GC. (Introduced in 1.4.1.)")])])])]),t._v(" "),a("p",[a("strong",[t._v("CMS相关参数")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("-XX:+UseConcMarkSweepGC")]),t._v(" "),a("th",[t._v("使用CMS内存收集")]),t._v(" "),a("th"),t._v(" "),a("th",[t._v("测试中配置这个以后,-XX:NewRatio=4的配置失效了,原因不明.所以,此时年轻代大小最好用-Xmn设置.???")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("-XX:+AggressiveHeap")]),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td",[t._v("试图是使用大量的物理内存 长时间大内存使用的优化，能检查计算资源（内存， 处理器数量） 至少需要256MB内存 大量的CPU／内存， （在1.4.1在4CPU的机器上已经显示有提升）")])]),t._v(" "),a("tr",[a("td",[t._v("-XX:CMSFullGCsBeforeCompaction")]),t._v(" "),a("td",[t._v("多少次后进行内存压缩")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v('由于并发收集器不对内存空间进行压缩,整理,所以运行一段时间以后会产生"碎片",使得运行效率降低.此值设置运行多少次GC以后对内存空间进行压缩,整理.')])]),t._v(" "),a("tr",[a("td",[t._v("-XX:+CMSParallelRemarkEnabled")]),t._v(" "),a("td",[t._v("降低标记停顿")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("-XX+UseCMSCompactAtFullCollection")]),t._v(" "),a("td",[t._v("在FULL GC的时候， 对年老代的压缩")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("CMS是不会移动内存的， 因此， 这个非常容易产生碎片， 导致内存不够用， 因此， 内存的压缩这个时候就会被启用。 增加这个参数是个好习惯。 可能会影响性能,但是可以消除碎片")])]),t._v(" "),a("tr",[a("td",[t._v("-XX:+UseCMSInitiatingOccupancyOnly")]),t._v(" "),a("td",[t._v("使用手动定义初始化定义开始CMS收集")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("禁止hostspot自行触发CMS GC")])]),t._v(" "),a("tr",[a("td",[t._v("-XX:CMSInitiatingOccupancyFraction=70")]),t._v(" "),a("td",[t._v("使用cms作为垃圾回收 使用70％后开始CMS收集")]),t._v(" "),a("td",[t._v("92")]),t._v(" "),a("td",[t._v("为了保证不出现promotion failed(见下面介绍)错误,该值的设置需要满足以下公式**"),a("a",{attrs:{href:"http://www.cnblogs.com/redcreen/archive/2011/05/04/2037057.html#CMSInitiatingOccupancyFraction_value",target:"_blank",rel:"noopener noreferrer"}},[t._v("CMSInitiatingOccupancyFraction计算公式"),a("OutboundLink")],1),t._v("**")])]),t._v(" "),a("tr",[a("td",[t._v("-XX:CMSInitiatingPermOccupancyFraction")]),t._v(" "),a("td",[t._v("设置Perm Gen使用到达多少比率时触发")]),t._v(" "),a("td",[t._v("92")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("-XX:+CMSIncrementalMode")]),t._v(" "),a("td",[t._v("设置为增量模式")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("用于单CPU情况")])]),t._v(" "),a("tr",[a("td",[t._v("-XX:+CMSClassUnloadingEnabled")]),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td")])])]),t._v(" "),a("p",[a("strong",[t._v("辅助信息")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("-XX:+PrintGC")]),t._v(" "),a("th"),t._v(" "),a("th"),t._v(" "),a("th",[t._v("输出形式:[GC 118250K->113543K(130112K), 0.0094143 secs] [Full GC 121376K->10414K(130112K), 0.0650971 secs]")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("-XX:+PrintGCDetails")]),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td",[t._v("输出形式:[GC [DefNew: 8614K->781K(9088K), 0.0123035 secs] 118250K->113543K(130112K), 0.0124633 secs] [GC [DefNew: 8614K->8614K(9088K), 0.0000665 secs][Tenured: 112761K->10414K(121024K), 0.0433488 secs] 121376K->10414K(130112K), 0.0436268 secs]")])]),t._v(" "),a("tr",[a("td",[t._v("-XX:+PrintGCTimeStamps")]),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("-XX:+PrintGC:PrintGCTimeStamps")]),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td",[t._v("可与-XX:+PrintGC -XX:+PrintGCDetails混合使用 输出形式:11.851: [GC 98328K->93620K(130112K), 0.0082960 secs]")])]),t._v(" "),a("tr",[a("td",[t._v("-XX:+PrintGCApplicationStoppedTime")]),t._v(" "),a("td",[t._v("打印垃圾回收期间程序暂停的时间.可与上面混合使用")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("输出形式:Total time for which application threads were stopped: 0.0468229 seconds")])]),t._v(" "),a("tr",[a("td",[t._v("-XX:+PrintGCApplicationConcurrentTime")]),t._v(" "),a("td",[t._v("打印每次垃圾回收前,程序未中断的执行时间.可与上面混合使用")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("输出形式:Application time: 0.5291524 seconds")])]),t._v(" "),a("tr",[a("td",[t._v("-XX:+PrintHeapAtGC")]),t._v(" "),a("td",[t._v("打印GC前后的详细堆栈信息")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("-Xloggc:filename")]),t._v(" "),a("td",[t._v("把相关日志信息记录到文件以便分析. 与上面几个配合使用")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("-XX:+PrintClassHistogram")]),t._v(" "),a("td",[t._v("garbage collects before printing the histogram.")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("-XX:+PrintTLAB")]),t._v(" "),a("td",[t._v("查看TLAB空间的使用情况")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("XX:+PrintTenuringDistribution")]),t._v(" "),a("td",[t._v("查看每次minor GC后新的存活周期的阈值")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Desired survivor size 1048576 bytes, new threshold 7 (max 15) new threshold 7即标识新的存活周期的阈值为7。")])])])]),t._v(" "),a("p",[a("strong",[t._v("GC性能方面的考虑")])]),t._v(" "),a("h2",{attrs:{id:"再谈-jvm-参数设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#再谈-jvm-参数设置"}},[t._v("#")]),t._v(" 再谈 JVM 参数设置")]),t._v(" "),a("p",[t._v("经过前面对 JVM 参数的介绍及相关例子的实验，相信大家对 JVM 的参数有了比较深刻的理解，接下来我们再谈谈如何设置 JVM 参数")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("首先 Oracle 官方推荐堆的初始化大小与堆可设置的最大值一般是相等的，即 Xms = Xmx，因为起始堆内存太小（Xms），会导致启动初期频繁 GC，起始堆内存较大（Xmx）有助于减少 GC 次数")])]),t._v(" "),a("li",[a("p",[t._v("调试的时候设置一些打印参数，如 "),a("code",[t._v("-XX:+PrintClassHistogram -XX:+PrintGCDetails -XX:+PrintGCTimeStamps -XX:+PrintHeapAtGC -Xloggc:log/gc.log")]),t._v("，这样可以从 gc.log 里看出一些端倪出来")])]),t._v(" "),a("li",[a("p",[t._v("系统停顿时间过长可能是 GC 的问题也可能是程序的问题，多用 jmap 和 jstack 查看，或者 "),a("code",[t._v("killall -3 Java")]),t._v("，然后查看 Java 控制台日志，能看出很多问题")])]),t._v(" "),a("li",[a("p",[t._v("采用并发回收时，年轻代小一点，年老代要大，因为年老代用的是并发回收，即使时间长点也不会影响其他程序继续运行，网站不会停顿")])]),t._v(" "),a("li",[a("p",[t._v("仔细了解自己的应用，如果用了缓存，那么年老代应该大一些，缓存的 HashMap 不应该无限制长，建议采用 LRU 算法的 Map 做缓存，LRUMap 的最大长度也要根据实际情况设定")])])]),t._v(" "),a("p",[t._v("要设置好各种 JVM 参数，还可以对 server 进行压测， 预估自己的业务量，设定好一些 JVM 参数进行压测看下这些设置好的 JVM 参数是否能满足要求")]),t._v(" "),a("h2",{attrs:{id:"工作中常用配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作中常用配置"}},[t._v("#")]),t._v(" 工作中常用配置")]),t._v(" "),a("p",[t._v("https://docs.oracle.com/javacomponents/jrockit-hotspot/migration-guide/cloptions.htm#JRHMG127")]),t._v(" "),a("p",[t._v("参数不懂，推荐直接去看官网")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("-Xms")]),t._v(" "),a("ul",[a("li",[t._v("初始大小内存，默认为物理内存1/64")]),t._v(" "),a("li",[t._v("等价于 -XX:InitialHeapSize")])])]),t._v(" "),a("li",[a("p",[t._v("-Xmx")]),t._v(" "),a("ul",[a("li",[t._v("最大分配内存，默认为物理内存的1/4")]),t._v(" "),a("li",[t._v("等价于 -XX:MaxHeapSize")])])]),t._v(" "),a("li",[a("p",[t._v("-Xss")]),t._v(" "),a("ul",[a("li",[t._v("设置单个线程的大小，一般默认为 512k~1024k")]),t._v(" "),a("li",[t._v("等价于 -XX:ThreadStackSize")]),t._v(" "),a("li",[t._v("如果通过 "),a("code",[t._v("jinfo ThreadStackSize 线程 ID")]),t._v(" 查看会显示为 0，指的是默认出厂设置")])])]),t._v(" "),a("li",[a("p",[t._v("-Xmn")]),t._v(" "),a("ul",[a("li",[t._v("设置年轻代大小（一般不设置）")])])]),t._v(" "),a("li",[a("p",[t._v("-XX:MetaspaceSize")]),t._v(" "),a("ul",[a("li",[t._v("设置元空间大小。元空间的本质和永久代类似，都是对 JMM 规范中方法区的实现。不过元空间与永久代最大的区别是，元空间并不在虚拟机中，而是使用本地内存。因此，默认情况下，元空间的大小仅受本地内存限制")]),t._v(" "),a("li",[t._v("但是元空间默认也很小，频繁 new 对象，也会 OOM")]),t._v(" "),a("li",[t._v("-Xms10m -Xmx10m -XX:MetaspaceSize=1024m -XX:+PrintFlagsFinal")])])]),t._v(" "),a("li",[a("p",[t._v("-XX:+PrintGCDetails")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("输出详细的 GC 收集日志信息")])]),t._v(" "),a("li",[a("p",[t._v("测试时候，可以将参数调到最小，")]),t._v(" "),a("p",[a("code",[t._v("-Xms10m -Xmx10m -XX:+PrintGCDetails")])]),t._v(" "),a("p",[t._v("定义一个大对象，撑爆堆内存，")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InterruptedException")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"==hello gc==="')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Thread.sleep(Integer.MAX_VALUE);")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//-Xms10m -Xmx10m -XX:PrintGCDetails")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("byte")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" bytes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("byte")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])]),t._v(" "),a("li",[a("p",[t._v("-XX:SurvivorRatio")]),t._v(" "),a("ul",[a("li",[t._v("设置新生代中 eden 和S0/S1空间的比例")]),t._v(" "),a("li",[t._v("默认 -XX:SurvivorRatio=8,Eden:S0:S1=8:1:1")]),t._v(" "),a("li",[t._v("SurvivorRatio值就是设置 Eden 区的比例占多少，S0/S1相同，如果设置  -XX:SurvivorRatio=2，那Eden:S0:S1=2:1:1")])])]),t._v(" "),a("li",[a("p",[t._v("-XX:NewRatio")]),t._v(" "),a("ul",[a("li",[t._v("配置年轻代和老年代在堆结构的比例")]),t._v(" "),a("li",[t._v("默认 -XX:NewRatio=2，新生代 1，老年代 2，年轻代占整个堆的 1/3")]),t._v(" "),a("li",[t._v("NewRatio值就是设置老年代的占比，如果设置-XX:NewRatio=4，那就表示新生代占 1，老年代占 4，年轻代占整个堆的 1/5")])])]),t._v(" "),a("li",[a("p",[t._v("-XX:MaxTenuringThreshold")]),t._v(" "),a("ul",[a("li",[t._v("设置垃圾的最大年龄（java8 固定设置最大 15）")])])])]),t._v(" "),a("h2",{attrs:{id:"最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),a("p",[t._v("参数不懂，推荐直接去看官网，")]),t._v(" "),a("p",[t._v("https://docs.oracle.com/javase/8/docs/technotes/tools/unix/java.html#BGBCIEFC")]),t._v(" "),a("p",[t._v("https://docs.oracle.com/javacomponents/jrockit-hotspot/migration-guide/cloptions.htm#JRHMG127")]),t._v(" "),a("p",[t._v("https://docs.oracle.com/javase/8/")]),t._v(" "),a("p",[t._v("Java SE Tools Reference for UNIX](https://docs.oracle.com/javase/8/docs/technotes/tools/unix/index.html)")]),t._v(" "),a("p",[t._v("参考：")]),t._v(" "),a("p",[t._v("https://www.cnblogs.com/duanxz/p/3482366.html")]),t._v(" "),a("p",[t._v("https://www.javatt.com/p/48544")])])}),[],!1,null,null,null);v.default=s.exports}}]);