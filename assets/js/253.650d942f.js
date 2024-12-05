(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{746:function(a,t,v){"use strict";v.r(t);var s=v(2),_=Object(s.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"从-pc-内存架构到-java-内存模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#从-pc-内存架构到-java-内存模型"}},[a._v("#")]),a._v(" 从 PC 内存架构到 Java 内存模型")]),a._v(" "),v("blockquote",[v("p",[a._v("你知道 Java 内存模型 JMM 吗？那你知道它的三大特性吗？\nJava 是如何解决指令重排问题的？\n既然CPU有缓存一致性协议（MESI），为什么 JMM 还需要 volatile 关键字？")])]),a._v(" "),v("blockquote",[v("p",[a._v("带着问题，尤其是面试问题的学习才是最高效的。加油，奥利给！"),v("br"),a._v("\n文章收录在 GitHub "),v("a",{attrs:{href:"https://github.com/Jstarfish/JavaKeeper",target:"_blank",rel:"noopener noreferrer"}},[a._v("JavaKeeper"),v("OutboundLink")],1),a._v(" ，N线互联网开发必备技能兵器谱")])]),a._v(" "),v("p",[a._v("前两天看到同学和我显摆他们公司配的电脑多好多好，我默默打开了自己的电脑，"),v("code",[a._v("酷睿 i7-4770")]),a._v("，也不是不够用嘛，4 核 8 线程的 CPU，也是杠杠的。")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTly1gcw3ao6z60j30qi0g874v.jpg",alt:""}})]),a._v(" "),v("p",[a._v("扯这玩意干啥，Em~~~~")]),a._v(" "),v("p",[a._v("介绍 Java 内存模型之前，先温习下计算机硬件内存模型")]),a._v(" "),v("h2",{attrs:{id:"一、硬件内存架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、硬件内存架构"}},[a._v("#")]),a._v(" 一、硬件内存架构")]),a._v(" "),v("p",[a._v("计算机在执行程序的时候，每条指令都是在 CPU 中执行的，而执行的时候，又免不了要和数据打交道。而计算机上面的数据，是存放在主存当中的，也就是计算机的物理内存。")]),a._v(" "),v("p",[a._v("计算机硬件架构简易图：")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTly1gcw2g16h50j31ho0tqq5w.jpg",alt:""}})]),a._v(" "),v("blockquote",[v("p",[a._v("这些年，我们的 CPU、内存、I/O 设备都在不断迭代，不断朝着更快的方向努力。但是，在这个快速发展的过程中，有一个"),v("strong",[a._v("核心矛盾一直存在，就是这三者的速度差异")]),a._v("。CPU 和内存的速度差异可以形象地描述为：CPU 是天上一天，内存是地上一年（假设 CPU 执行一条普通指令需要一天，那么 CPU 读写内存得等待一年的时间）。内存和 I/O 设备的速度差异就更大了，内存是天上一天，I/O 设备是地上十年。")])]),a._v(" "),v("p",[a._v("我们以多核 CPU 为例，每个 CPU 核都包含"),v("strong",[a._v("一组 「CPU 寄存器」")]),a._v("，这些寄存器本质上是在 CPU 内存中。CPU 在这些寄存器上执行操作的速度要比在主内存(RAM)中执行的速度快得多。")]),a._v(" "),v("p",[a._v("因为"),v("strong",[a._v("CPU速率高， 内存速率慢，为了让存储体系可以跟上 CPU 的速度，所以中间又加上 Cache 层，就是我们说的 『CPU 高速缓存』")]),a._v("。")]),a._v(" "),v("blockquote",[v("p",[a._v("为了合理利用 CPU 的高性能，平衡 CPU 、内存、I/O 设备的速度差异，计算机体系结构、操作系统、编译程序都做出了贡献，主要体现为：")]),a._v(" "),v("ol",[v("li",[a._v("CPU 增加了缓存，以均衡与内存的速度差异；")]),a._v(" "),v("li",[a._v("操作系统增加了进程、线程，以分时复用 CPU，进而均衡 CPU 与 I/O 设备的速度差异；")]),a._v(" "),v("li",[a._v("编译程序优化指令执行次序，使得缓存能够得到更加合理地利用。")])])]),a._v(" "),v("h3",{attrs:{id:"cpu多级缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cpu多级缓存"}},[a._v("#")]),a._v(" CPU多级缓存")]),a._v(" "),v("p",[a._v("由于 CPU 的运算速度远远超越了 1 级缓存的数据 I\\O 能力，CPU 厂商又引入了多级的缓存结构。通常 L1、L2 是每个 CPU 核有一个，L3 是多个核共用一个。")]),a._v(" "),v("h3",{attrs:{id:"cache-line"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cache-line"}},[a._v("#")]),a._v(" Cache Line")]),a._v(" "),v("p",[a._v("Cache 又是由很多个「"),v("strong",[a._v("缓存行")]),a._v("」(Cache line) 组成的。Cache line 是 Cache 和 RAM 交换数据的最小单位。")]),a._v(" "),v("p",[a._v("Cache 存储数据是固定大小为单位的，称为一个"),v("strong",[a._v("Cache entry")]),a._v("，这个单位称为 "),v("strong",[a._v("Cache line")]),a._v(" 或 "),v("strong",[a._v("Cache block")]),a._v("。给定 Cache 容量大小和 Cache line size 的情况下，它能存储的条目个数(number of cache entries)就是固定的。因为Cache 是固定大小的，所以它从主内存获取数据也是固定大小。对于 X86 来讲，是 64Bytes。对于 ARM 来讲，较旧的架构的 Cache line 是 32Bytes，但一次内存访存只访问一半的数据也不太合适，所以它经常是一次填两个 Cache line，叫做 double fill。")]),a._v(" "),v("h3",{attrs:{id:"缓存的工作原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#缓存的工作原理"}},[a._v("#")]),a._v(" 缓存的工作原理")]),a._v(" "),v("p",[a._v("这里的缓存的工作原理和我们项目中用 memcached、redis 做常用数据的缓存层是一个道理。")]),a._v(" "),v("p",[a._v("当 CPU 要读取一个数据时，首先从缓存中查找，如果找到就立即读取并送给CPU处理；如果没有找到，就去内存中读取并送给 CPU 处理，同时把这个数据所在的"),v("strong",[a._v("数据块")]),a._v("（就是我们上边说的 Cache block）调入缓存中，即把临近的共 64 Byte 的数据也一同载入，因为临近的数据在将来被访问的可能性更大，可以使得以后对整块数据的读取都从缓存中进行，不必再调用内存。")]),a._v(" "),v("p",[a._v("这就增加了CPU读取缓存的"),v("strong",[a._v("命中率")]),a._v("（Cache hit）了。")]),a._v(" "),v("h3",{attrs:{id:"计算机层级存储"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#计算机层级存储"}},[a._v("#")]),a._v(" 计算机层级存储")]),a._v(" "),v("p",[a._v("计算机存储系统是有层次结构的，类似一个金字塔，顶层的寄存器读写速度较高，但是空间较小。底层的读写速度较低，但是空间较大")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTly1gcw2gd50fdj30vy0juq4k.jpg",alt:""}})]),a._v(" "),v("h3",{attrs:{id:"缓存一致性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#缓存一致性"}},[a._v("#")]),a._v(" 缓存一致性")]),a._v(" "),v("p",[a._v("既然每个核中都有单独的缓存，那我的 4 核 8 线程 CPU 处理主内存数据的时候，不就会出现数据不一致问题了吗？")]),a._v(" "),v("p",[a._v("为了解决这个问题，先后有过两种方法："),v("strong",[a._v("总线锁机制")]),a._v("和"),v("strong",[a._v("缓存锁机制")]),a._v("。")]),a._v(" "),v("p",[a._v("总线锁就是使用 CPU 提供的一个 "),v("code",[a._v("LOCK#")]),a._v(" 信号，当一个处理器在总线上输出此信号，其他处理器的请求将被阻塞，那么该处理器就可以独占共享锁。这样就保证了数据一致性。")]),a._v(" "),v("p",[a._v("但是总线锁开销太大，我们需要控制锁的粒度，所以又有了缓存锁，核心就是“"),v("strong",[a._v("缓存一致性协议")]),a._v("”，不同的 CPU 硬件厂商实现方式稍有不同，有 MSI、MESI、MOSI 等。")]),a._v(" "),v("h3",{attrs:{id:"代码乱序执行优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#代码乱序执行优化"}},[a._v("#")]),a._v(" 代码乱序执行优化")]),a._v(" "),v("p",[a._v("为了使得处理器内部的运算单元尽量被充分利用，提高运算效率，处理器可能会对输入的代码进行「"),v("strong",[a._v("乱序执行")]),a._v("」"),v("strong",[a._v("(Out-Of-Order Execution)，处理器会在计算之后将乱序执行的结果重组")]),a._v("，乱序优化可以保证在单线程下该执行结果与顺序执行的结果是一致的，但不保证程序中各个语句计算的先后顺序与输入代码中的顺序一致。")]),a._v(" "),v("p",[v("strong",[a._v("乱序执行技术是处理器为提高运算速度而做出违背代码原有顺序的优化")]),a._v("。在单核时代，处理器保证做出的优化不会导致执行结果远离预期目标，但在多核环境下却并非如此。")]),a._v(" "),v("p",[a._v("多核环境下， 如果存在一个核的计算任务依赖另一个核的计算任务的中间结果，而且对相关数据读写没做任何防护措施，那么其顺序性并不能靠代码的先后顺序来保证，处理器最终得出的结果和我们逻辑得到的结果可能会大不相同。")]),a._v(" "),v("h4",{attrs:{id:"编译器指令重排"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#编译器指令重排"}},[a._v("#")]),a._v(" 编译器指令重排")]),a._v(" "),v("p",[a._v("除了上述由处理器和缓存引起的乱序之外，现代编译器同样提供了乱序优化。之所以出现编译器乱序优化其根本原因在于处理器每次只能分析一小块指令，但编译器却能在很大范围内进行代码分析，从而做出更优的策略，充分利用处理器的乱序执行功能。")]),a._v(" "),v("h3",{attrs:{id:"内存屏障"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内存屏障"}},[a._v("#")]),a._v(" 内存屏障")]),a._v(" "),v("p",[a._v("又称为内存栅栏，是一个 CPU 指令。尽管我们看到乱序执行初始目的是为了提高效率，但是在这多核时代效果好像不尽人意，其中的某些”自作聪明”的优化导致多线程程序产生各种各样的意外。因此有必要存在一种机制来消除乱序执行带来的坏影响，也就是说应该允许程序员显式的告诉处理器对某些地方禁止乱序执行。这种机制就是所谓内存屏障。不同架构的处理器在其指令集中提供了不同的指令来发起内存屏障，对应在编程语言当中就是提供特殊的关键字来调用处理器相关的指令，JMM 里我们再探讨。")]),a._v(" "),v("hr"),a._v(" "),v("h2",{attrs:{id:"二、java-内存模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、java-内存模型"}},[a._v("#")]),a._v(" 二、Java 内存模型")]),a._v(" "),v("p",[a._v("Java 内存模型即 "),v("code",[a._v("Java Memory Model")]),a._v("，简称 "),v("strong",[a._v("JMM")]),a._v("。")]),a._v(" "),v("p",[a._v("这里的内存模型可不是 JVM 里的运行时数据区。")]),a._v(" "),v("p",[a._v("「内存模型」可以理解为"),v("strong",[a._v("在特定操作协议下，对特定的内存或高速缓存进行读写访问的过程抽象")]),a._v("。")]),a._v(" "),v("p",[a._v("不同架构的物理计算机可以有不一样的内存模型，Java 虚拟机也有自己的内存模型。")]),a._v(" "),v("p",[a._v("Java 虚拟机规范中试图定义一种「 "),v("strong",[a._v("Java 内存模型")]),a._v("」来"),v("strong",[a._v("屏蔽掉各种硬件和操作系统的内存访问差异")]),a._v("，以实现"),v("strong",[a._v("让 Java 程序在各种平台下都能达到一致的内存访问效果")]),a._v("，不必因为不同平台上的物理机的内存模型的差异，对各平台定制化开发程序。")]),a._v(" "),v("p",[a._v("Java 内存模型的主要目标是定义程序中各个变量的访问规则，即在虚拟机中将变量存储到内存和从内存中取出变量这样的底层细节。这里的变量与我们写 Java 代码中的变量不同，它包括了实例字段、静态字段和构成数组对象的元素，但不包括局部变量和方法参数，因为他们是线程私有的，不会被共享。")]),a._v(" "),v("blockquote",[v("p",[a._v("Java 内存模型是个很复杂的规范，可以从不同的视角来解读，站在程序员的视角，本质上可以理解为，Java 内存模型规范了 JVM 如何提供"),v("strong",[a._v("按需禁用缓存")]),a._v("（解决可见性问题）和编译优化（解决有序性问题）的方法。具体来说，这些方法包括 volatile、synchronized 和 final 三个关键字，以及六项 Happens-Before 规则，这也正是本期的重点内容。")])]),a._v(" "),v("h3",{attrs:{id:"jmm-组成"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jmm-组成"}},[a._v("#")]),a._v(" JMM 组成")]),a._v(" "),v("ul",[v("li",[v("p",[v("strong",[a._v("主内存")]),a._v("：Java 内存模型规定了所有变量都存储在主内存(Main Memory)中（此处的主内存与物理硬件的主内存 RAM 名字一样，两者可以互相类比，但此处仅是虚拟机内存的一部分）。")])]),a._v(" "),v("li",[v("p",[v("strong",[a._v("工作内存")]),a._v("：每条线程都有自己的工作内存(Working Memory，又称本地内存，可与 CPU 高速缓存类比)，线程的工作内存中保存了该线程使用到的主内存中的共享变量的副本拷贝。"),v("strong",[a._v("线程对变量的所有操作都必须在工作内存进行，而不能直接读写主内存中的变量")]),a._v("。"),v("strong",[a._v("工作内存是 JMM 的一个抽象概念，并不真实存在")]),a._v("。")])])]),a._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTly1gcw2gtxpaej314o0lw0uc.jpg",alt:""}})]),a._v(" "),v("h3",{attrs:{id:"jmm-与-jvm-内存结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jmm-与-jvm-内存结构"}},[a._v("#")]),a._v(" JMM 与 JVM 内存结构")]),a._v(" "),v("p",[a._v("JMM 与 Java 内存区域中的堆、栈、方法区等并不是同一个层次的内存划分，两者基本没有关系。如果一定要勉强对应，那从变量、主内存、工作内存的定义看，主内存主要对应 Java 堆中的对象实例数据部分，工作内存则对应虚拟机栈的部分区域（与上图对应着看哈）。")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTly1gcw2h5qt9ij316b0qeq68.jpg",alt:""}})]),a._v(" "),v("h3",{attrs:{id:"jmm-与计算机内存结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jmm-与计算机内存结构"}},[a._v("#")]),a._v(" JMM 与计算机内存结构")]),a._v(" "),v("p",[a._v("Java 内存模型和硬件内存体系结构也没有什么关系。硬件内存体系结构不区分栈和堆。在硬件上，线程栈和堆都位于主内存中。线程栈和堆的一部分有时可能出现在高速缓存和 CPU 寄存器中。如下图所示:")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTly1gcw2heypd6j31ee0kc76r.jpg",alt:"img"}})]),a._v(" "),v("p",[a._v("当对象和变量可以存储在计算机中不同的内存区域时，这就可能会出现某些问题。两个主要问题是:")]),a._v(" "),v("ul",[v("li",[a._v("线程更新(写)到共享变量的可见性")]),a._v(" "),v("li",[a._v("读取、检查和写入共享变量时的竞争条件")])]),a._v(" "),v("h4",{attrs:{id:"可见性问题-visibility-of-shared-objects"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#可见性问题-visibility-of-shared-objects"}},[a._v("#")]),a._v(" 可见性问题（Visibility of Shared Objects）")]),a._v(" "),v("p",[a._v("如果两个或多个线程共享一个对象，则一个线程对共享对象的更新可能对其他线程不可见（当然可以用 Java 提供的关键字 volatile）。")]),a._v(" "),v("p",[a._v("假设共享对象最初存储在主内存中。在 CPU 1上运行的线程将共享对象读入它的 CPU 缓存后修改，但是还没来得及刷新回主内存，这时其他 CPU 上运行的线程就不会看到共享对象的更改。这样，每个线程都可能以自己的线程结束，就出现了可见性问题，如下")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTly1gcw2hs7adij30pu0hq0tr.jpg",alt:""}})]),a._v(" "),v("h4",{attrs:{id:"竞争条件-race-conditions"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#竞争条件-race-conditions"}},[a._v("#")]),a._v(" 竞争条件（Race Conditions）")]),a._v(" "),v("p",[a._v("这个其实就是我们常说的「原子性问题」。")]),a._v(" "),v("p",[a._v("如果两个或多个线程共享一个对象，并且多个线程更新该共享对象中的变量，则可能出现竞争条件。")]),a._v(" "),v("blockquote",[v("p",[a._v("由于 IO 太慢，早期的操作系统就发明了多进程，即便在单核的 CPU 上我们也可以一边听着歌，一边写 Bug，这个就是多进程的功劳。")]),a._v(" "),v("p",[a._v("操作系统允许某个进程执行一小段时间，例如 50 毫秒，过了 50 毫秒操作系统就会重新选择一个进程来执行（我们称为“任务切换”），这个 50 毫秒称为“时间片”。")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Jstarfish/picBed/juc/254b129b145d80e9bb74123d6e620efb.png",alt:""}})]),a._v(" "),v("p",[a._v("这里的进程在等待 IO 时之所以会释放 CPU 使用权，是为了让 CPU 在这段等待时间里可以做别的事情，这样一来 CPU 的使用率就上来了；此外，如果这时有另外一个进程也读文件，读文件的操作就会排队，磁盘驱动在完成一个进程的读操作后，发现有排队的任务，就会立即启动下一个读操作，这样 IO 的使用率也上来了。")]),a._v(" "),v("p",[a._v("是不是很简单的逻辑？但是，虽然看似简单，支持多进程分时复用在操作系统的发展史上却具有里程碑意义，Unix 就是因为解决了这个问题而名噪天下的。")]),a._v(" "),v("p",[a._v("早期的操作系统基于进程来调度 CPU，不同进程间是不共享内存空间的，所以进程要做任务切换就要切换内存映射地址，而一个进程创建的所有线程，都是共享一个内存空间的，所以线程做任务切换成本就很低了。现代的操作系统都基于更轻量的线程来调度，现在我们提到的“任务切换”都是指“线程切换”。")]),a._v(" "),v("p",[a._v("Java 并发程序都是基于多线程的，自然也会涉及到任务切换，也许你想不到，任务切换竟然也是并发编程里诡异 Bug 的源头之一。任务切换的时机大多数是在时间片结束的时候，我们现在基本都使用高级语言编程，高级语言里一条语句往往需要多条 CPU 指令完成，例如 count += 1，至少需要三条 CPU 指令。")]),a._v(" "),v("ul",[v("li",[a._v("指令 1：首先，需要把变量 count 从内存加载到 CPU 的寄存器；")]),a._v(" "),v("li",[a._v("指令 2：之后，在寄存器中执行 +1 操作；")]),a._v(" "),v("li",[a._v("指令 3：最后，将结果写入内存（缓存机制导致可能写入的是 CPU 缓存而不是内存）。")])]),a._v(" "),v("p",[a._v("操作系统做任务切换，可以发生在任何一条 CPU 指令执行完，是的，是 CPU 指令，而不是高级语言里的一条语句。这样不同步的操作，就会出现 bug。")])]),a._v(" "),v("p",[a._v("想象一下，如果线程 A 将一个共享对象的变量读入到它的 CPU 缓存中。此时，线程 B 执行相同的操作，但是进入不同的 CPU 缓存。现在线程 A 执行 +1 操作，线程 B 也这样做。现在该变量增加了两次，在每个 CPU 缓存中一次。")]),a._v(" "),v("p",[a._v("如果这些增量是按顺序执行的，则变量结果会是 3，并将原始值 +2 写回主内存。但是，这两个增量是同时执行的，没有适当的同步。不管将哪个线程的结果写回主内存，更新后的值只比原始值高 1，显然是有问题的。如下（当然可以用 Java 提供的关键字 Synchronized）")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTly1gcw2i23173j30pu0hqgml.jpg",alt:""}})]),a._v(" "),v("h4",{attrs:{id:"有序性问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#有序性问题"}},[a._v("#")]),a._v(" 有序性问题")]),a._v(" "),v("p",[a._v("顾名思义，有序性指的是程序按照代码的先后顺序执行。编译器为了优化性能，有时候会改变程序中语句的先后顺序，例如程序中：“a=6；b=7；”编译器优化后可能变成“b=7；a=6；”，在这个例子中，编译器调整了语句的顺序，但是不影响程序的最终结果。")]),a._v(" "),v("p",[a._v("这个就是我们上文说到的代码乱序执行优化。")]),a._v(" "),v("p",[a._v("不过有时候编译器及解释器的优化可能导致意想不到的 Bug。")]),a._v(" "),v("blockquote",[v("p",[a._v("在  Java 领域一个经典的案例就是利用双重检查创建单例对象，例如下面的代码：在获取实例 getInstance() 的方法中，我们首先判断 instance 是否为空，如果为空，则锁定 Singleton.class 并再次检查 instance 是否为空，如果还为空则创建 Singleton 的一个实例。")]),a._v(" "),v("div",{staticClass:"language-java extra-class"},[v("pre",{pre:!0,attrs:{class:"language-java"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),v("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Singleton")]),a._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),v("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),v("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Singleton")]),a._v(" instance"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),v("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),v("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Singleton")]),a._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[a._v("getInstance")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),v("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("instance "),v("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),v("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("synchronized")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),v("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Singleton")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),v("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),v("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("instance "),v("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n          instance "),v("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),v("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Singleton")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),v("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" instance"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),v("p",[a._v("假设有两个线程 A、B 同时调用 getInstance() 方法，他们会同时发现 instance == null ，于是同时对 Singleton.class 加锁，此时 JVM 保证只有一个线程能够加锁成功（假设是线程 A），另外一个线程则会处于等待状态（假设是线程 B）；线程 A 会创建一个 Singleton 实例，之后释放锁，锁释放后，线程 B 被唤醒，线程 B 再次尝试加锁，此时是可以加锁成功的，加锁成功后，线程 B 检查 instance == null 时会发现，已经创建过 Singleton 实例了，所以线程 B 不会再创建一个 Singleton 实例。")]),a._v(" "),v("p",[a._v("这看上去一切都很完美，无懈可击，但实际上这个 getInstance() 方法并不完美。问题出在哪里呢？")]),a._v(" "),v("p",[a._v("出在 new 操作上，我们以为的 new 操作应该是：")]),a._v(" "),v("ol",[v("li",[a._v("分配一块内存 M；")]),a._v(" "),v("li",[a._v("在内存 M 上初始化 Singleton 对象；")]),a._v(" "),v("li",[a._v("然后 M 的地址赋值给 instance 变量。")])]),a._v(" "),v("p",[a._v("但是实际上优化后的执行路径可能是这样的：")]),a._v(" "),v("ol",[v("li",[a._v("分配一块内存 M；")]),a._v(" "),v("li",[a._v("将 M 的地址赋值给 instance 变量；")]),a._v(" "),v("li",[a._v("最后在内存 M 上初始化 Singleton 对象。")])]),a._v(" "),v("p",[a._v("优化后会导致什么问题呢？我们假设线程 A 先执行 getInstance() 方法，当执行完指令 2 时恰好发生了线程切换，切换到了线程 B 上；如果此时线程 B 也执行 getInstance() 方法，那么线程 B 在执行第一个判断时会发现 instance != null ，所以直接返回 instance，而此时的 instance 是没有初始化过的，如果我们这个时候访问 instance 的成员变量就可能触发空指针异常。")])]),a._v(" "),v("h3",{attrs:{id:"jmm-特性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jmm-特性"}},[a._v("#")]),a._v(" JMM 特性")]),a._v(" "),v("p",[a._v("JMM 就是用来解决如上问题的。 "),v("strong",[a._v("JMM是围绕着并发过程中如何处理可见性、原子性和有序性这 3 个 特征建立起来的")])]),a._v(" "),v("ul",[v("li",[v("p",[v("strong",[a._v("可见性")]),a._v("：可见性是指当一个线程修改了共享变量的值，其他线程能够立即得知这个修改。Java 中的 volatile、synchronzied、final 都可以实现可见性")])]),a._v(" "),v("li",[v("p",[v("strong",[a._v("原子性")]),a._v("：即一个操作或者多个操作，要么全部执行并且执行的过程不会被任何因素打断，要么就都不执行。即使在多个线程一起执行的时候，一个操作一旦开始，就不会被其他线程所干扰。")])]),a._v(" "),v("li",[v("p",[v("strong",[a._v("有序性")]),a._v("：")]),a._v(" "),v("p",[a._v("计算机在执行程序时，为了提高性能，编译器和处理器常常会对指令做重排，一般分为以下 3 种")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTly1gcrgrycnj0j31bs04k74y.jpg",alt:""}})]),a._v(" "),v("p",[a._v("单线程环境里确保程序最终执行结果和代码顺序执行的结果一致；")]),a._v(" "),v("p",[a._v("处理器在进行重排序时必须要考虑指令之间的"),v("strong",[a._v("数据依赖性")]),a._v("；")]),a._v(" "),v("p",[a._v("多线程环境中线程交替执行，由于编译器优化重排的存在，两个线程中使用的变量能否保证一致性是无法确定的，结果无法预测")])])]),a._v(" "),v("h3",{attrs:{id:"内存之间的交互操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内存之间的交互操作"}},[a._v("#")]),a._v(" 内存之间的交互操作")]),a._v(" "),v("p",[a._v("关于主内存和工作内存之间具体的交互协议，即一个变量如何从主内存拷贝到工作内存、如何从工作内存同步回主内存之类的实现细节，Java 内存模型中定义了 8 种 操作来完成，虚拟机实现必须保证每一种操作都是原子的、不可再拆分的（double 和 long 类型例外）")]),a._v(" "),v("ul",[v("li",[v("strong",[a._v("lock")]),a._v("（锁定）：作用于主内存的变量，它把一个变量标识为一条线程独占的状态。")]),a._v(" "),v("li",[v("strong",[a._v("unlock")]),a._v("（解锁）：作用于主内存的变量，它把一个处于锁定状态的变量释放出来，释放后的变量才可以被其他线程锁定。")]),a._v(" "),v("li",[v("strong",[a._v("read")]),a._v("（读取）：作用于主内存的变量，它把一个变量的值从主内存传输到线程的工作内存中，以便随后的load 动作使用。")]),a._v(" "),v("li",[v("strong",[a._v("load")]),a._v("（载入）：作用于工作内存的变量，它把 read 操作从主内存中得到的变量值放入工作内存的变量副本中。")]),a._v(" "),v("li",[v("strong",[a._v("use")]),a._v("（使用）：作用于工作内存的变量，它把工作内存中一个变量的值传递给执行引擎，每当虚拟机遇到一个需要使用到变量的值的字节码指令时将会执行这个操作。")]),a._v(" "),v("li",[v("strong",[a._v("assign")]),a._v("（赋值）：作用于工作内存的变量，它把一个从执行引擎接收到的值赋给工作内存的变量，每当虚拟机遇到一个给变量赋值的字节码指令时执行这个操作。")]),a._v(" "),v("li",[v("strong",[a._v("store")]),a._v("（存储）：作用于工作内存的变量，它把工作内存中一个变量的值传送到主内存中，以便随后的 write操作使用。")]),a._v(" "),v("li",[v("strong",[a._v("write")]),a._v("（写入）：作用于主内存的变量，它把 store 操作从工作内存中得到的变量的值放入主内存的变量中。")])]),a._v(" "),v("p",[a._v("如果需要把一个变量从主内存复制到工作内存，那就要顺序地执行 "),v("strong",[a._v("read 和 load 操作")]),a._v("，如果要把变量从工作内存同步回主内存，就要顺序地执行 "),v("strong",[a._v("store 和 write 操作")]),a._v("。注意，"),v("strong",[a._v("Java 内存模型只要求上述两个操作必须按顺序执行，而没有保证是连续执行")]),a._v("。也就是说 read 与 load 之间、store 与write 之间是可插入其他指令的，如对主内存中的变量 a、b 进行访问时，一种可能出现顺序是 read a、read b、load b、load a。")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTly1gcw2ijaoarj30oq0nctae.jpg",alt:""}})]),a._v(" "),v("p",[a._v("除此之外，Java 内存模型还规定了在执行上述 8 种基本操作时必须满足如下规则")]),a._v(" "),v("ul",[v("li",[a._v("不允许 read 和 load、store 和 write 操作之一单独出现，即不允许一个变量从主内存读取了但工作内存不接受，或者从工作内存发起回写了但主内存不接受的情况出现。")]),a._v(" "),v("li",[a._v("不允许一个线程丢弃它的最近的 assign 操作，即变量在工作内存中改变了之后必须把该变化同步回主内存。")]),a._v(" "),v("li",[a._v("不允许一个线程无原因地（没有发生过任何 assign 操作）把数据从线程的工作内存同步回主内存。")]),a._v(" "),v("li",[a._v("一个新的变量只能在主内存中“诞生”，不允许在工作内存中直接使用一个未被初始化（load 或 assign）的变量，换句话说，就是对一个变量实施 use、store 操作之前，必须先执行过了 assign 和 load 操作。")]),a._v(" "),v("li",[a._v("一个变量在同一时刻只允许一条线程对其进行 lock 操作，但 lock 操作可以被同一条线程重复执行多次，多次执行 lock 后，只有执行相同次数的 unlock 操作，变量才会被解锁。")]),a._v(" "),v("li",[a._v("如果对一个变量执行 lock 操作，那将会清空工作内存中此变量的值，在执行引擎使用这个变量前，需要重新执行 load 或 assign 操作初始化变量的值。")]),a._v(" "),v("li",[a._v("如果一个变量事先没有被 lock 操作锁定，那就不允许对它执行 unlock 操作，也不允许去 unlock 一个被其他线程锁定住的变量。")]),a._v(" "),v("li",[a._v("对一个变量执行 unlock 操作之前，必须先把此变量同步回主内存中（执行 store、write 操作）。")])]),a._v(" "),v("h4",{attrs:{id:"long-和-double-型变量的特殊规则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#long-和-double-型变量的特殊规则"}},[a._v("#")]),a._v(" long 和 double 型变量的特殊规则")]),a._v(" "),v("p",[a._v("Java 内存模型要求 lock，unlock，read，load，assign，use，store，write 这 8 个操作都具有原子性，但对于64 位的数据类型（ long 或 double），在模型中定义了一条相对宽松的规定，允许虚拟机将没有被 volatile 修饰的 64 位数据的读写操作划分为两次 32 位的操作来进行，即允许虚拟机实现选择可以不保证 64 位数据类型的load，store，read，write 这 4 个操作的原子性，即 "),v("strong",[a._v("long 和 double 的非原子性协定")]),a._v("。")]),a._v(" "),v("blockquote",[v("p",[a._v("以 32 位 CPU 上执行 long 型变量的写操作为例来说明这个问题，long 型变量是 64 位，在 32 位 CPU 上执行写操作会被拆分成两次写操作（写高 32 位和写低 32 位，如下图所示）。")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Jstarfish/picBed/juc/381b657801c48b3399f19d946bad9e28.png",alt:""}})])]),a._v(" "),v("p",[a._v("如果多线程的情况下 double 或 long 类型并未声明为 volatile，可能会出现“半个变量”的数值，也就是既非原值，也非修改后的值。")]),a._v(" "),v("p",[a._v("虽然 Java 规范允许上面的实现，但商用虚拟机中基本都采用了原子性的操作，因此在日常使用中几乎不会出现读取到“半个变量”的情况，so，这个了解下就行。")]),a._v(" "),v("h3",{attrs:{id:"先行发生原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#先行发生原则"}},[a._v("#")]),a._v(" 先行发生原则")]),a._v(" "),v("p",[a._v("先行发生（happens-before）是 Java 内存模型中定义的两项操作之间的偏序关系，"),v("strong",[a._v("如果操作 A 先行发生于操作 B，那么 A 的结果对 B 可见")]),a._v("。")]),a._v(" "),v("blockquote",[v("p",[a._v("Happens-Before 约束了编译器的优化行为，虽允许编译器优化，但是要求编译器优化后一定遵守 Happens-Before 规则。")])]),a._v(" "),v("p",[a._v("happens-before 关系的分析需要分为"),v("strong",[a._v("单线程和多线程")]),a._v("的情况：")]),a._v(" "),v("ul",[v("li",[v("strong",[a._v("单线程下的 happens-before")]),a._v(" 字节码的先后顺序天然包含 happens-before 关系：因为单线程内共享一份工作内存，不存在数据一致性的问题。 在程序控制流路径中靠前的字节码 happens-before 靠后的字节码，即靠前的字节码执行完之后操作结果对靠后的字节码可见。然而，这并不意味着前者一定在后者之前执行。实际上，如果后者不依赖前者的运行结果，那么它们可能会被重排序。")]),a._v(" "),v("li",[v("strong",[a._v("多线程下的 happens-before")]),a._v(" 多线程由于每个线程有共享变量的副本，如果没有对共享变量做同步处理，线程 1 更新执行操作 A 共享变量的值之后，线程 2 开始执行操作 B，此时操作 A 产生的结果对操作 B 不一定可见。")])]),a._v(" "),v("p",[a._v("为了方便程序开发，Java 内存模型实现了下述的先行发生关系（“天然的”先行发生关系，无需任何同步器协助就存在）：")]),a._v(" "),v("ul",[v("li",[v("strong",[a._v("程序次序规则：")]),a._v(" 一个线程内，按照代码顺序，书写在前面的操作先行发生于书写在后面的操作。")]),a._v(" "),v("li",[v("strong",[a._v("管程锁定规则：")]),a._v(" 一个 unLock 操作先行发生于后面对同一个锁的 lock 操作。")]),a._v(" "),v("li",[v("strong",[a._v("volatile变量规则：")]),a._v(" 对一个变量的写操作先行发生于后面对这个变量的读操作。")]),a._v(" "),v("li",[v("strong",[a._v("传递规则：")]),a._v(" 如果操作 A 先行发生于操作 B，而操作 B 又先行发生于操作 C，则可以得出操作 A 先行发生于操作 C。")]),a._v(" "),v("li",[v("strong",[a._v("线程启动规则：")]),a._v(" Thread对象的 "),v("code",[a._v("start()")]),a._v(" 方法先行发生于此线程的每一个动作。")]),a._v(" "),v("li",[v("strong",[a._v("线程中断规则：")]),a._v(" 对线程 "),v("code",[a._v("interrupt()")]),a._v(" 方法的调用先行发生于被中断线程的代码检测到中断事件的发生。")]),a._v(" "),v("li",[v("strong",[a._v("线程终结规则：")]),a._v(" 线程中所有的操作都先行发生于线程的终止检测，我们可以通过"),v("code",[a._v("Thread.join()")]),a._v("方法结束、"),v("code",[a._v("Thread.isAlive()")]),a._v("的返回值手段检测到线程已经终止执行。")]),a._v(" "),v("li",[v("strong",[a._v("对象终结规则：")]),a._v(" 一个对象的初始化完成先行发生于它的 "),v("code",[a._v("finalize()")]),a._v("方法的开始")])]),a._v(" "),v("h3",{attrs:{id:"内存屏障-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内存屏障-2"}},[a._v("#")]),a._v(" 内存屏障")]),a._v(" "),v("p",[a._v("上边的一系列操作保证了数据一致性，Java 中如何保证底层操作的有序性和可见性？可以通过内存屏障。")]),a._v(" "),v("p",[a._v("内存屏障是被插入两个 CPU 指令之间的一种指令，用来禁止处理器指令发生重排序（像屏障一样），从而保障"),v("strong",[a._v("有序性")]),a._v("的。另外，为了达到屏障的效果，它也会使处理器写入、读取值之前，将主内存的值写入高速缓存，清空无效队列，从而保障"),v("strong",[a._v("可见性")]),a._v("。")]),a._v(" "),v("p",[a._v("eg：")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("Store1; \nStore2;   \nLoad1;   \nStoreLoad;  //内存屏障\nStore3;   \nLoad2;   \nLoad3;\n")])])]),v("p",[a._v("对于上面的一组 CPU 指令（Store表示写入指令，Load表示读取指令），StoreLoad 屏障之前的 Store 指令无法与 StoreLoad 屏障之后的 Load 指令进行交换位置，即"),v("strong",[a._v("重排序")]),a._v("。但是 StoreLoad 屏障之前和之后的指令是可以互换位置的，即 Store1 可以和 Store2 互换，Load2 可以和 Load3 互换。")]),a._v(" "),v("p",[a._v("常见的 4 种屏障")]),a._v(" "),v("ul",[v("li",[v("strong",[a._v("LoadLoad")]),a._v(" 屏障： 对于这样的语句 Load1; LoadLoad; Load2，在 Load2 及后续读取操作要读取的数据被访问前，保证 Load1 要读取的数据被读取完毕。")]),a._v(" "),v("li",[v("strong",[a._v("StoreStore")]),a._v(" 屏障： 对于这样的语句 Store1; StoreStore; Store2，在 Store2 及后续写入操作执行前，保证Store1 的写入操作对其它处理器可见。")]),a._v(" "),v("li",[v("strong",[a._v("LoadStore")]),a._v(" 屏障： 对于这样的语句 Load1; LoadStore; Store2，在 Store2 及后续写入操作被执行前，保证Load1 要读取的数据被读取完毕。")]),a._v(" "),v("li",[v("strong",[a._v("StoreLoad")]),a._v(" 屏障： 对于这样的语句 Store1; StoreLoad; Load2，在 Load2 及后续所有读取操作执行前，保证Store1 的写入对所有处理器可见。它的开销是四种屏障中最大的（冲刷写缓冲器，清空无效化队列）。在大多数处理器的实现中，这个屏障也被称为"),v("strong",[a._v("全能屏障")]),a._v("，兼具其它三种内存屏障的功能。")])]),a._v(" "),v("p",[a._v("Java 中对内存屏障的使用在一般的代码中不太容易见到，常见的有 volatile 和 synchronized 关键字修饰的代码块，还可以通过 Unsafe 这个类来使用内存屏障。（下一章扯扯这些）")]),a._v(" "),v("p",[a._v("噢啦，Java 内存模型就是通过以上定义的这些来解决可见性、原子性和有序性问题的。")]),a._v(" "),v("h2",{attrs:{id:"参考"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),v("p",[a._v("《深入理解 Java 虚拟机》第二版")]),a._v(" "),v("p",[a._v("《Java 并发编程实战》")]),a._v(" "),v("p",[a._v("http://tutorials.jenkov.com/java-concurrency/java-memory-model.html\nhttps://juejin.im/post/5bf2977751882505d840321d#heading-5\nhttp://rsim.cs.uiuc.edu/Pubs/popl05.pdf\nhttp://ifeve.com/wp-content/uploads/2014/03/JSR133中文版.pdf")])])}),[],!1,null,null,null);t.default=_.exports}}]);