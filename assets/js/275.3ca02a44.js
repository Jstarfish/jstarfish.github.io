(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{768:function(a,s,t){"use strict";t.r(s);var n=t(2),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"你有认真了解过自己的-java-对象-吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#你有认真了解过自己的-java-对象-吗"}},[a._v("#")]),a._v(" 你有认真了解过自己的 “Java 对象”吗")]),a._v(" "),t("blockquote",[t("p",[a._v("对象在 JVM 中是怎么存储的")]),a._v(" "),t("p",[a._v("对象头里有什么？")]),a._v(" "),t("p",[a._v("文章收录在 GitHub "),t("a",{attrs:{href:"https://github.com/Jstarfish/JavaKeeper",target:"_blank",rel:"noopener noreferrer"}},[a._v("JavaKeeper"),t("OutboundLink")],1),a._v(" ，N线互联网开发必备技能兵器谱，有你想要的。")])]),a._v(" "),t("p",[a._v("作为一名 Javaer，生活中的我们可能暂时没有对象，但是工作中每天都会创建大量的 Java 对象，你有试着去了解下自己的“对象”吗？")]),a._v(" "),t("p",[a._v("我们从四个方面重新认识下自己的“对象”")]),a._v(" "),t("ol",[t("li",[a._v("创建对象的 6 种方式")]),a._v(" "),t("li",[a._v("创建一个对象在 JVM 中都发生了什么")]),a._v(" "),t("li",[a._v("对象在 JVM 中的内存布局")]),a._v(" "),t("li",[a._v("对象的访问定位")])]),a._v(" "),t("h2",{attrs:{id:"一、创建对象的方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、创建对象的方式"}},[a._v("#")]),a._v(" 一、创建对象的方式")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("使用 new 关键字")]),a._v(" "),t("p",[a._v("这是创建一个对象最通用、常规的方法，同时也是最简单的方式。通过使用此方法，我们可以调用任何要调用的构造函数（默认使用无参构造函数）")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Person")]),a._v(" p "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Person")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])]),a._v(" "),t("li",[t("p",[a._v("使用 Class 类的 newInstance()，只能调用空参的构造器，权限必须为 public")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//获取类对象")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Class")]),a._v(" aClass "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("forName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"priv.starfish.Person"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Person")]),a._v(" p1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Person")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" aClass"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("newInstance")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])]),a._v(" "),t("li",[t("p",[a._v("Constructor 的 newInstance(xxx)，对构造器没有要求")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Class")]),a._v(" aClass "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("forName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"priv.starfish.Person"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//获取构造器")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Constructor")]),a._v(" constructor "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" aClass"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getConstructor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Person")]),a._v(" p2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Person")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" constructor"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("newInstance")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])]),a._v(" "),t("li",[t("p",[a._v("clone()")]),a._v(" "),t("p",[a._v("深拷贝，需要实现 Cloneable 接口并实现 clone()，不调用任何的构造器")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Person")]),a._v(" p3 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Person")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("clone")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])]),a._v(" "),t("li",[t("p",[a._v("反序列化")]),a._v(" "),t("p",[a._v("通过序列化和反序列化技术从文件或者网络中获取对象的二进制流。")]),a._v(" "),t("p",[a._v("每当我们序列化和反序列化对象时，JVM 会为我们创建了一个独立的对象。在 deserialization 中，JVM 不使用任何构造函数来创建对象。（序列化的对象需要实现 Serializable）")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//准备一个文件用于存储该对象的信息")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("File")]),a._v(" f "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("File")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"person.obj"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FileOutputStream")]),a._v(" fos "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FileOutputStream")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ObjectOutputStream")]),a._v(" oos "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ObjectOutputStream")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("fos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//序列化对象，写入到磁盘中")]),a._v("\noos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("writeObject")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//反序列化")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FileInputStream")]),a._v(" fis "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FileInputStream")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ObjectInputStream")]),a._v(" ois "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ObjectInputStream")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("fis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//反序列化对象")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Person")]),a._v(" p4 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Person")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" ois"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("readObject")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])]),a._v(" "),t("li",[t("p",[a._v("第三方库 Objenesls")]),a._v(" "),t("p",[a._v("Java 已经支持通过 "),t("code",[a._v("Class.newInstance()")]),a._v(" 动态实例化 Java 类，但是这需要 Java 类有个适当的构造器。很多时候一个 Java 类无法通过这种途径创建，例如：构造器需要参数、构造器有副作用、构造器会抛出异常。Objenesis 可以绕过上述限制")])])]),a._v(" "),t("h2",{attrs:{id:"二、创建对象的步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、创建对象的步骤"}},[a._v("#")]),a._v(" 二、创建对象的步骤")]),a._v(" "),t("p",[a._v("这里讨论的仅仅是普通 Java 对象，不包含数组和 Class 对象（普通对象和数组对象的创建指令是不同的。创建类实例的指令：new，创建数组的指令：newarray，anewarray，multianewarray）")]),a._v(" "),t("h4",{attrs:{id:"_1-new-指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-new-指令"}},[a._v("#")]),a._v(" 1. new 指令")]),a._v(" "),t("p",[a._v("虚拟机遇到一条 new 指令时，首先去检查这个指令的参数是否能在 Metaspace 的常量池中定位到一个类的符号引用，并且检查这个符号引用代表的类是否已被加载、解析和初始化过（即判断类元信息是否存在）。如果没有，那么须在双亲委派模式下，先执行相应的类加载过程。")]),a._v(" "),t("h4",{attrs:{id:"_2-分配内存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-分配内存"}},[a._v("#")]),a._v(" 2. 分配内存")]),a._v(" "),t("p",[a._v("接下来虚拟机将为新生代对象分配内存。"),t("strong",[a._v("对象所需的内存的大小在类加载完成后便可完全确定")]),a._v("。如果实例成员变量是引用变量，仅分配引用变量空间即可，即 4 个字节大小。分配方式有“"),t("strong",[a._v("指针碰撞")]),a._v("（Bump the Pointer）”和“"),t("strong",[a._v("空闲列表")]),a._v("（Free List）”两种方式，具体由所采用的垃圾收集器是否带有压缩整理功能决定。")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("如果内存是规整的，就采用“指针碰撞”来为对象分配内存。意思是所有用过的内存在一边，空闲的内存在另一边，中间放着一个指针作为分界点的指示器，分配内存就仅仅是把指针指向空闲那边挪动一段与对象大小相等的距离罢了。如果垃圾收集器采用的是 Serial、ParNew 这种基于压缩算法的，就采用这种方法。（一般使用带整理功能的垃圾收集器，都采用指针碰撞）")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020060220241513.png",alt:""}})])]),a._v(" "),t("li",[t("p",[a._v("如果内存是不规整的，虚拟机需要维护一个列表，这个列表会记录哪些内存是可用的，在为对象分配内存的时候从列表中找到一块足够大的空间划分给该对象实例，并更新列表内容，这种分配方式就是“空闲列表”。使用 CMS 这种基于 Mark-Sweep 算法的收集器时，通常采用空闲列表。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200602202424136.png",alt:""}})])])]),a._v(" "),t("blockquote",[t("p",[a._v("我们都知道堆内存是线程共享的，那在分配内存的时候就会存在并发安全问题，JVM 是如何解决的呢？")])]),a._v(" "),t("p",[a._v("一般有两种解决方案：")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("对分配内存空间的动作做同步处理，采用 CAS 机制，配合失败重试的方式保证更新操作的原子性")])]),a._v(" "),t("li",[t("p",[a._v('每个线程在 Java 堆中预先分配一小块内存，然后再给对象分配内存的时候，直接在自己这块"私有"内存中分配，当这部分区域用完之后，再分配新的"私有"内存。这种方案称为 '),t("strong",[a._v("TLAB")]),a._v("（Thread Local Allocation Buffer），这部分 Buffer 是从堆中划分出来的，但是是本地线程独享的。")]),a._v(" "),t("p",[t("strong",[a._v("这里值得注意的是，我们说 TLAB 是线程独享的，只是在“分配”这个动作上是线程独占的，至于在读取、垃圾回收等动作上都是线程共享的。而且在使用上也没有什么区别")]),a._v("。另外，TLAB 仅作用于新生代的 Eden Space，对象被创建的时候首先放到这个区域，但是新生代分配不了内存的大对象会直接进入老年代。"),t("strong",[a._v("因此在编写 Java 程序时，通常多个小的对象比大的对象分配起来更加高效")]),a._v("。")]),a._v(" "),t("p",[a._v("虚拟机是否使用 TLAB 是可以选择的，可以通过设置 "),t("code",[a._v("-XX:+/-UseTLAB")]),a._v(" 参数来指定，JDK8 默认开启。")])])]),a._v(" "),t("h4",{attrs:{id:"_3-初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-初始化"}},[a._v("#")]),a._v(" 3. 初始化")]),a._v(" "),t("p",[a._v("内存分配完成后，虚拟机需要将分配到的内存空间都初始化为零值（不包括对象头），这一步操作保证了对象的实例字段在 Java 代码中可以不赋初始值就直接使用，程序能访问到这些字段的数据类型所对应的零值。如：byte、short、long 转化为对象后初始值为 0，Boolean 初始值为 false。")]),a._v(" "),t("h4",{attrs:{id:"_4-对象的初始设置-设置对象的对象头"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-对象的初始设置-设置对象的对象头"}},[a._v("#")]),a._v(" 4. 对象的初始设置（设置对象的对象头）")]),a._v(" "),t("p",[a._v("接下来虚拟机要对对象进行必要的设置，例如这个对象是哪个类的实例、如何才能找到类的元数据信息、对象的哈希码、对象的 GC 分代年龄等信息。这些信息存放在对象的对象头（Object Header）之中。根据虚拟机当前的运行状态的不同，如是否启用偏向锁等，对象头会有不同的设置方式。")]),a._v(" "),t("h4",{attrs:{id:"_5-init-方法初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-init-方法初始化"}},[a._v("#")]),a._v(" 5. <init>方法初始化")]),a._v(" "),t("p",[a._v("在上面的工作都完成了之后，从虚拟机的角度看，一个新的对象已经产生了，但是从 Java 程序的角度看，对象创建才刚刚开始，<init>方法还没有执行，所有的字段都还为零。初始化成员变量，执行实例化代码块，调用类的构造方法，并把堆内对象的地址赋值给引用变量。")]),a._v(" "),t("p",[a._v("所以，一般来说，执行 new 指令后接着执行 init 方法，把对象按照程序员的意愿进行初始化（应该是将构造函数中的参数赋值给对象的字段），这样一个真正可用的对象才算完全产生出来。")]),a._v(" "),t("h2",{attrs:{id:"三、对象的内存布局"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、对象的内存布局"}},[a._v("#")]),a._v(" 三、对象的内存布局")]),a._v(" "),t("p",[a._v("在 HotSpot 虚拟机中，对象在内存中存储的布局可以分为 3 块区域：对象头（Header）、实例数据（Instance Data）、对其填充（Padding）。")]),a._v(" "),t("h3",{attrs:{id:"对象头"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象头"}},[a._v("#")]),a._v(" 对象头")]),a._v(" "),t("p",[a._v("HotSpot 虚拟机的对象头包含两部分信息。")]),a._v(" "),t("ul",[t("li",[a._v("第一部分用于存储对象自身的运行时数据，如哈希码(HashCode)、GC 分代年龄、锁状态标志、线程持有的锁、偏向线程 ID、偏向时间戳等。")]),a._v(" "),t("li",[a._v("对象的另一部分类型指针，即对象指向它的类元数据的指针，虚拟机通过这个指针来确定这个对象是哪个类的实例（并不是所有的虚拟机实现都必须在对象数据上保留类型指针，也就是说，查找对象的元数据信息并不一定要经过对象本身）。")])]),a._v(" "),t("p",[a._v("如果对象是一个 Java 数组，那在对象头中还必须有一块用于记录数组长度的数据。")]),a._v(" "),t("blockquote",[t("p",[a._v("元数据：描述数据的数据。对数据及信息资源的描述信息。在 Java 中，元数据大多表示为注解。")])]),a._v(" "),t("h3",{attrs:{id:"实例数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例数据"}},[a._v("#")]),a._v(" 实例数据")]),a._v(" "),t("p",[a._v("实例数据部分是对象真正存储的有效信息，也是在程序代码中定义的各种类型的字段内容，无论从父类继承下来的，还是在子类中定义的，都需要记录起来。这部分的存储顺序会受虚拟机默认的分配策略参数和字段在 Java 源码中定义的顺序影响（相同宽度的字段总是被分配到一起）。")]),a._v(" "),t("p",[a._v("规则：")]),a._v(" "),t("ul",[t("li",[a._v("相同宽度的字段总是被分配在一起")]),a._v(" "),t("li",[a._v("父类中定义的变量会出现在子类之前")]),a._v(" "),t("li",[a._v("如果 CompactFields 参数为 true(默认true)，子类的窄变量可能插入到父类变量的空隙")])]),a._v(" "),t("h3",{attrs:{id:"对齐填充"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对齐填充"}},[a._v("#")]),a._v(" 对齐填充")]),a._v(" "),t("p",[a._v("对齐填充部分并不是必然存在的，也没有特别的含义，它仅仅起着占位符的作用。由于 HotSpot VM 的自动内存管理系统要求对象的起始地址必须是 8 字节的整数倍，也就是说，对象的大小必须是 8 字节的整数倍。而对象头部分正好是 8 字节的倍数（1倍或者2倍），因此，当对象实例数据部分没有对齐时，就需要通过对齐填充来补全。")]),a._v(" "),t("p",[a._v("我们通过一个简单的例子加深下理解")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PersonObject")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Person")]),a._v(" person "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Person")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Person")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1008")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Department")]),a._v(" department"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        name "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"匿名用户"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//name赋值为字符串常量")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Department")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1ggoj68y1auj31d20u0e6e.jpg",alt:""}})]),a._v(" "),t("h2",{attrs:{id:"四、对象的访问定位"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、对象的访问定位"}},[a._v("#")]),a._v(" 四、对象的访问定位")]),a._v(" "),t("p",[a._v("我们创建对象的目的，肯定是为了使用它，那 JVM 是如何通过栈帧中的对象引用访问到其内存的对象实例呢？")]),a._v(" "),t("p",[a._v("由于 reference 类型在 Java 虚拟机规范里只规定了一个指向对象的引用，并没有定义这个引用应该通过哪种方式去定位，以及访问到 Java 堆中的对象的具体位置，因此不同虚拟机实现的对象访问方式会有所不同，主流的访问方式有两种：")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("句柄访问")]),a._v(" "),t("p",[a._v("如果使用句柄访问方式，Java堆中会划分出一块内存来作为句柄池，reference中存储的就是对象的句柄地址，而句柄中包含了对象实例数据和类型数据各自的具体地址信息。使用句柄方式最大的好处就是reference中存储的是稳定的句柄地址，在对象被移动（垃圾收集时移动对象是非常普遍的行为）时只会改变句柄中的实例数据指针，而reference本身不需要被修改。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1ggojeoey4yj30oz0hadgu.jpg",alt:""}})])]),a._v(" "),t("li",[t("p",[a._v("直接指针（Hotspot 使用该方式）")]),a._v(" "),t("p",[a._v("如果使用该方式，Java堆对象的布局就必须考虑如何放置访问类型数据的相关信息，reference中直接存储的就是对象地址。使用直接指针方式最大的好处就是"),t("strong",[a._v("速度更快")]),a._v("，他"),t("strong",[a._v("节省了一次指针定位的时间开销")]),a._v("。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1ggojeyqqagj30p10hit9l.jpg",alt:""}})])])]),a._v(" "),t("p",[t("strong",[a._v("参考")]),a._v(":")]),a._v(" "),t("ul",[t("li",[a._v("https://zhuanlan.zhihu.com/p/44948944")]),a._v(" "),t("li",[a._v("https://blog.csdn.net/boy1397081650/article/details/89930710")]),a._v(" "),t("li",[a._v("https://www.cnblogs.com/lusaisai/p/12748869.html")]),a._v(" "),t("li",[a._v("https://juejin.im/post/5d4250def265da03ab422c79")])])])}),[],!1,null,null,null);s.default=e.exports}}]);