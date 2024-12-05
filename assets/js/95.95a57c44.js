(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{585:function(_,v,t){"use strict";t.r(v);var s=t(2),a=Object(s.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("p",[t("img",{attrs:{src:"https://img.starfish.ink/mysql/banner-mysql-lock.png",alt:""}})]),_._v(" "),t("blockquote",[t("p",[_._v("Hello, 我是海星。")]),_._v(" "),t("p",[_._v("锁是计算机协调多个进程或线程并发访问某一资源的机制。")]),_._v(" "),t("p",[_._v("数据库锁定机制简单来说，就是数据库为了保证数据的一致性，而使各种共享资源在被并发访问变得有序所设计的一种规则。主要用来处理并发问题。")])]),_._v(" "),t("p",[_._v("为什么需要锁，只有并发操作时候才有锁的必要，并发事务访问相同记录的情况大致可以划分为 3 种：")]),_._v(" "),t("ul",[t("li",[t("code",[_._v("读-读")]),_._v("情况：即并发事务相继读取相同的记录")]),_._v(" "),t("li",[t("code",[_._v("写-写")]),_._v("情况：即并发事务相继对相同的记录做出改动")]),_._v(" "),t("li",[t("code",[_._v("读-写")]),_._v("或"),t("code",[_._v("写-读")]),_._v("情况：也就是一个事务进行读取操作，另一个进行改动操作。")])]),_._v(" "),t("h2",{attrs:{id:"一、锁的分类有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、锁的分类有哪些"}},[_._v("#")]),_._v(" 一、锁的分类有哪些")]),_._v(" "),t("h4",{attrs:{id:"按操作粒度分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#按操作粒度分类"}},[_._v("#")]),_._v(" 按操作粒度分类：")]),_._v(" "),t("blockquote",[t("p",[_._v("为了尽可能提高数据库的并发度，每次锁定的数据范围越小越好，理论上每次只锁定当前操作的数据的方案会得到最大的并发度，但是管理锁是很耗资源的事情（涉及获取，检查，释放锁等动作），因此数据库系统需要在高并发响应和系统性能两方面进行平衡，这样就产生了“锁粒度（Lock granularity）”的概念。")])]),_._v(" "),t("ul",[t("li",[t("p",[t("strong",[_._v("全局锁")]),_._v("：对整个数据库实例加锁，可以用 "),t("code",[_._v("Flush tables with read lock (FTWRL)")]),_._v("设置为只读，就相当于加全局锁了。**全局锁的典型使用场景是，做全库逻辑备份。**也就是把整库每个表都 select 出来存成文本。")])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("页级锁")]),_._v("：对数据页（通常是连续的几个行）加锁，控制并发事务对该页的访问。（ BDB 存储引擎使用页级锁）")])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("表级锁")]),_._v("：开销小，加锁快；不会出现死锁；锁定粒度大，发生锁冲突的概率较高，并发度最低；")]),_._v(" "),t("ul",[t("li",[_._v("表锁的语法是"),t("code",[_._v("lock tables … read/write")])]),_._v(" "),t("li",[_._v("另一类表级的锁是 MDL（metadata lock)。MDL 不需要显式使用，在访问一个表的时候会被自动加上。MDL 的作用是，保证读写的正确性。")])])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("行级锁")]),_._v("：开销大，加锁慢；会出现死锁；锁定粒度最小，发生锁冲突的概率最低，并发度也最高；")])])]),_._v(" "),t("p",[_._v("适用：从锁的角度来说，表级锁更适合于以查询为主，只有少量按索引条件更新数据的应用，如 Web 应用；而行级锁则更适合于有大量按索引条件并发更新少量不同数据，同时又有并发查询的应用，如一些在线事务处理（OLTP）系统。")]),_._v(" "),t("p",[_._v("MySQL 不同的存储引擎支持不同的锁机制，所有的存储引擎都以自己的方式实现了锁机制")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th"),_._v(" "),t("th",[_._v("行锁")]),_._v(" "),t("th",[_._v("表锁")]),_._v(" "),t("th",[_._v("页锁")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("MyISAM")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("√")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("BDB")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("√")]),_._v(" "),t("td",[_._v("√")])]),_._v(" "),t("tr",[t("td",[_._v("InnoDB")]),_._v(" "),t("td",[_._v("√")]),_._v(" "),t("td",[_._v("√")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("Memory")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("√")]),_._v(" "),t("td")])])]),_._v(" "),t("h4",{attrs:{id:"按加锁机制分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#按加锁机制分类"}},[_._v("#")]),_._v(" 按加锁机制分类")]),_._v(" "),t("p",[t("strong",[_._v("乐观锁与悲观锁是两种并发控制的思想，可用于解决丢失更新问题")])]),_._v(" "),t("ul",[t("li",[t("p",[_._v("乐观锁会“乐观地”假定大概率不会发生并发更新冲突，访问、处理数据过程中不加锁，只在更新数据时再根据版本号或时间戳判断是否有冲突，有则处理，无则提交事务；")])]),_._v(" "),t("li",[t("p",[_._v("悲观锁会“悲观地”假定大概率会发生并发更新冲突，访问、处理数据前就加排他锁，在整个数据处理过程中锁定数据，事务提交或回滚后才释放锁；")])])]),_._v(" "),t("h4",{attrs:{id:"按锁模式-算法-分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#按锁模式-算法-分类"}},[_._v("#")]),_._v(" 按锁模式（算法）分类")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("记录锁（Record Lock）：行级锁的特定类型，锁定单个行，确保其他事务无法同时修改或读取该行")])]),_._v(" "),t("li",[t("p",[_._v("间隙锁（Gap Lock）：对索引项之间的“间隙”加锁，锁定记录的范围（对第一条记录前的间隙或最后一条将记录后的间隙加锁），不包含索引项本身。其他事务不能在锁范围内插入数据，这样就防止了别的事务新增幻影行")])]),_._v(" "),t("li",[t("p",[_._v("MDL（Metadata Lock）：锁定数据库对象的元数据，如表结构，用于保证数据定义的一致性")])]),_._v(" "),t("li",[t("p",[_._v("临建锁(next-key Lock)： 锁定索引项本身和索引范围。即 Record Lock 和 Gap Lock 的结合。可解决幻读问题。")])])]),_._v(" "),t("h4",{attrs:{id:"按属性分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#按属性分类"}},[_._v("#")]),_._v(" 按属性分类：")]),_._v(" "),t("ul",[t("li",[t("p",[t("strong",[_._v("读锁")]),_._v("（共享锁）：")]),_._v(" "),t("ul",[t("li",[t("p",[t("code",[_._v("共享锁")]),_._v("，英文名："),t("code",[_._v("Shared Locks")]),_._v("，简称"),t("code",[_._v("S锁")]),_._v("。在事务要读取一条记录时，需要先获取该记录的"),t("code",[_._v("S锁")]),_._v("。")])]),_._v(" "),t("li",[t("p",[_._v("针对同一份数据，多个读操作可以同时进行，不会互相影响")])]),_._v(" "),t("li",[t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("SELECT ... LOCK IN SHARE MODE; //对读取的记录加S锁\n")])])])])])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("写锁")]),_._v("（独占锁、排他锁）：")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("当前写操作没有完成前，它会阻断其他写锁和读锁")])]),_._v(" "),t("li",[t("p",[t("code",[_._v("独占锁")]),_._v("，也常称"),t("code",[_._v("排他锁")]),_._v("，英文名："),t("code",[_._v("Exclusive Locks")]),_._v("，简称"),t("code",[_._v("X锁")]),_._v("。在事务要改动一条记录时，需要先获取该记录的"),t("code",[_._v("X锁")])])]),_._v(" "),t("li",[t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("SELECT ... FOR UPDATE;\t//对读取的记录加X锁\n")])])])])])])]),_._v(" "),t("h4",{attrs:{id:"按状态分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#按状态分类"}},[_._v("#")]),_._v(" 按状态分类")]),_._v(" "),t("ul",[t("li",[_._v("意向共享锁（Intention Shared Lock）：表级锁的辅助锁，表示事务要在某个表或页级锁上获取共享锁。")]),_._v(" "),t("li",[_._v("意向排它锁（Intention Exclusive Lock）：表级锁的辅助锁，表示事务要在某个表或页级锁上获取排它锁。")])]),_._v(" "),t("h2",{attrs:{id:"二、全局锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、全局锁"}},[_._v("#")]),_._v(" 二、全局锁")]),_._v(" "),t("p",[_._v("要使用全局锁，则要执行这条命令：")]),_._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[_._v("flush "),t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("tables")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("with")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("read")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("lock")]),_._v("\n")])])]),t("p",[_._v("执行后，"),t("strong",[_._v("整个数据库就处于只读状态了")]),_._v("，这时其他线程执行以下操作，都会被阻塞")]),_._v(" "),t("p",[_._v("如果要释放全局锁，则要执行这条命令：")]),_._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("unlock")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("tables")]),_._v("\n")])])]),t("p",[_._v("全局锁主要应用于做"),t("strong",[_._v("全库逻辑备份")]),_._v("，这样在备份数据库期间，不会因为数据或表结构的更新，而出现备份文件的数据与预期的不一样。")]),_._v(" "),t("h2",{attrs:{id:"三、表锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、表锁"}},[_._v("#")]),_._v(" 三、表锁")]),_._v(" "),t("p",[_._v("MySQL 里面表级别的锁有这几种：")]),_._v(" "),t("ul",[t("li",[_._v("表锁")]),_._v(" "),t("li",[_._v("元数据锁（MDL）")]),_._v(" "),t("li",[_._v("意向锁")]),_._v(" "),t("li",[_._v("AUTO-INC 锁")])]),_._v(" "),t("h4",{attrs:{id:"表锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表锁"}},[_._v("#")]),_._v(" 表锁")]),_._v(" "),t("p",[_._v("MySQL  支持多种存储引擎，不同存储引擎对锁的支持也是不一样的。")]),_._v(" "),t("p",[_._v("对于"),t("code",[_._v("MyISAM")]),_._v("、"),t("code",[_._v("MEMORY")]),_._v("、"),t("code",[_._v("MERGE")]),_._v("这些存储引擎来说，它们只支持表级锁，而且这些引擎并不支持事务，所以使用这些存储引擎的锁一般都是针对当前会话来说的。")]),_._v(" "),t("h4",{attrs:{id:"元数据锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#元数据锁"}},[_._v("#")]),_._v(" 元数据锁")]),_._v(" "),t("p",[_._v("**另一类表级的锁是 MDL（metadata lock)。**MDL 不需要显式使用，在访问一个表的时候会被自动加上。MDL 的作用是，保证读写的正确性。你可以想象一下，如果一个查询正在遍历一个表中的数据，而执行期间另一个线程对这个表结构做变更，删了一列，那么查询线程拿到的结果跟表结构对不上，肯定是不行的。")]),_._v(" "),t("p",[_._v("因此，在 MySQL 5.5 版本中引入了 MDL，当对一个表做增删改查操作的时候，加 MDL 读锁；当要对表做结构变更操作的时候，加 MDL 写锁。")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("读锁之间不互斥，因此你可以有多个线程同时对一张表增删改查。")])]),_._v(" "),t("li",[t("p",[_._v("读写锁之间、写锁之间是互斥的，用来保证变更表结构操作的安全性。因此，如果有两个线程要同时给一个表加字段，其中一个要等另一个执行完才能开始执行。")])])]),_._v(" "),t("p",[_._v("虽然 MDL 锁是系统默认会加的，但却是你不能忽略的一个机制。比如下面这个例子，我经常看到有人掉到这个坑里：给一个小表加个字段，导致整个库挂了。")]),_._v(" "),t("ol",[t("li",[_._v("首先，线程 A 先启用了事务（但是一直不提交），然后执行一条 select 语句，此时就先对该表加上 MDL 读锁；")]),_._v(" "),t("li",[_._v("然后，线程 B 也执行了同样的 select 语句，此时并不会阻塞，因为「读读」并不冲突；")]),_._v(" "),t("li",[_._v("接着，线程 C 修改了表字段，此时由于线程 A 的事务并没有提交，也就是 MDL 读锁还在占用着，这时线程 C 就无法申请到 MDL 写锁，就会被阻塞，")])]),_._v(" "),t("p",[_._v("那么在线程 C 阻塞后，后续有对该表的 select 语句，就都会被阻塞，如果此时有大量该表的 select 语句的请求到来，就会有大量的线程被阻塞住，这时数据库的线程很快就会爆满了。")]),_._v(" "),t("blockquote",[t("p",[_._v("为什么线程 C 因为申请不到 MDL 写锁，而导致后续的申请读锁的查询操作也会被阻塞？")])]),_._v(" "),t("p",[_._v("这是因为申请 MDL 锁的操作会形成一个队列，队列中"),t("strong",[_._v("写锁获取优先级高于读锁")]),_._v("，一旦出现 MDL 写锁等待，会阻塞后续该表的所有 CRUD 操作。")]),_._v(" "),t("p",[_._v("所以为了能安全的对表结构进行变更，在对表结构变更前，先要看看数据库中的长事务，是否有事务已经对表加上了 MDL 读锁，如果可以考虑 kill 掉这个长事务，然后再做表结构的变更。")]),_._v(" "),t("h4",{attrs:{id:"表级别的意向锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表级别的意向锁"}},[_._v("#")]),_._v(" 表级别的意向锁")]),_._v(" "),t("ul",[t("li",[_._v("意向共享锁，英文名："),t("code",[_._v("Intention Shared Lock")]),_._v("，简称"),t("code",[_._v("IS锁")]),_._v("。在使用 InnoDB 引擎的表里对某些记录加上「共享锁」之前，需要先在表级别加上一个「意向共享锁」；")]),_._v(" "),t("li",[_._v("意向独占锁，英文名："),t("code",[_._v("Intention Exclusive Lock")]),_._v("，简称"),t("code",[_._v("IX锁")]),_._v("。在使用 InnoDB 引擎的表里对某些纪录加上「独占锁」之前，需要先在表级别加上一个「意向独占锁」；")])]),_._v(" "),t("p",[t("code",[_._v("IS锁")]),_._v("和"),t("code",[_._v("IX锁")]),_._v("的使命只是为了后续在加表级别的"),t("code",[_._v("S锁")]),_._v("和"),t("code",[_._v("X锁")]),_._v("时判断表中是否有已经被加锁的记录，以避免用遍历的方式来查看表中有没有上锁的记录。")]),_._v(" "),t("h4",{attrs:{id:"auto-inc-锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#auto-inc-锁"}},[_._v("#")]),_._v(" AUTO-INC 锁")]),_._v(" "),t("p",[_._v("表里的主键通常都会设置成自增的，这是通过对主键字段声明 "),t("code",[_._v("AUTO_INCREMENT")]),_._v(" 属性实现的。")]),_._v(" "),t("p",[_._v("之后在插入数据时，可以不指定主键的值，数据库会自动给主键赋值递增的值，这主要是通过 "),t("strong",[_._v("AUTO-INC 锁")]),_._v("实现的。")]),_._v(" "),t("p",[_._v("AUTO-INC 锁是特殊的表锁机制，锁"),t("strong",[_._v("不是在一个事务提交后才释放，而是在执行完插入语句后就会立即释放")]),_._v("。")]),_._v(" "),t("p",[t("strong",[_._v("在插入数据时，会加一个表级别的 AUTO-INC 锁")]),_._v("，然后为被 "),t("code",[_._v("AUTO_INCREMENT")]),_._v(" 修饰的字段赋值递增的值，等插入语句执行完成后，才会把 AUTO-INC 锁释放掉。")]),_._v(" "),t("p",[_._v("那么，一个事务在持有 AUTO-INC 锁的过程中，其他事务如果要向该表插入语句都会被阻塞，从而保证插入数据时，被 "),t("code",[_._v("AUTO_INCREMENT")]),_._v(" 修饰的字段的值是连续递增的。")]),_._v(" "),t("p",[_._v("但是， AUTO-INC 锁再对大量数据进行插入的时候，会影响插入性能，因为另一个事务中的插入会被阻塞。")]),_._v(" "),t("p",[_._v("因此， 在 MySQL 5.1.22 版本开始，InnoDB 存储引擎提供了一种"),t("strong",[_._v("轻量级的锁")]),_._v("来实现自增。")]),_._v(" "),t("p",[_._v("一样也是在插入数据的时候，会为被 "),t("code",[_._v("AUTO_INCREMENT")]),_._v(" 修饰的字段加上轻量级锁，"),t("strong",[_._v("然后给该字段赋值一个自增的值，就把这个轻量级锁释放了，而不需要等待整个插入语句执行完后才释放锁")]),_._v("。")]),_._v(" "),t("p",[_._v("InnoDB 存储引擎提供了个 "),t("code",[_._v("innodb_autoinc_lock_mode")]),_._v(" 的系统变量，是用来控制选择用 AUTO-INC 锁，还是轻量级的锁。")]),_._v(" "),t("ul",[t("li",[_._v("当 innodb_autoinc_lock_mode = 0，就采用 AUTO-INC 锁，语句执行结束后才释放锁；")]),_._v(" "),t("li",[_._v("当 innodb_autoinc_lock_mode = 2，就采用轻量级锁，申请自增主键后就释放锁，并不需要等语句执行后才释放。")]),_._v(" "),t("li",[_._v("当 innodb_autoinc_lock_mode = 1，相当于两种方式混着来\n"),t("ul",[t("li",[_._v("普通 insert 语句，自增锁在申请之后就马上释放；")]),_._v(" "),t("li",[_._v("类似 insert … select 这样的批量插入数据的语句，自增锁还是要等语句结束后才被释放；")])])])]),_._v(" "),t("p",[_._v("当 innodb_autoinc_lock_mode = 2 是性能最高的方式，但是当搭配 binlog 的日志格式是 statement 一起使用的时候，可能会造成不同事务中的插入语句为 AUTO_INCREMENT 修饰的列生成的值是交叉的，在「主从复制的场景」中会发生"),t("strong",[_._v("数据不一致的问题")]),_._v("。")]),_._v(" "),t("h4",{attrs:{id:"如何加表锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何加表锁"}},[_._v("#")]),_._v(" 如何加表锁")]),_._v(" "),t("p",[_._v("MyISAM 在执行查询语句（SELECT）前，会自动给涉及的所有表加读锁，在执行更新操作（UPDATE、DELETE、INSERT等）前，会自动给涉及的表加写锁，这个过程并不需要用户干预，因此，用户一般不需要直接用 LOCK TABLE 命令给 MyISAM 表显式加锁。")]),_._v(" "),t("h4",{attrs:{id:"myisam-表锁优化建议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#myisam-表锁优化建议"}},[_._v("#")]),_._v(" MyISAM 表锁优化建议")]),_._v(" "),t("p",[_._v("对于 MyISAM 存储引擎，虽然使用表级锁定在锁定实现的过程中比实现行级锁定或者页级锁所带来的附加成本都要小，锁定本身所消耗的资源也是最少。但是由于锁定的颗粒度比较大，所以造成锁定资源的争用情况也会比其他的锁定级别都要多，从而在较大程度上会降低并发处理能力。所以，在优化MyISAM存储引擎锁定问题的时候，最关键的就是如何让其提高并发度。由于锁定级别是不可能改变的了，所以我们首先需要"),t("strong",[_._v("尽可能让锁定的时间变短")]),_._v("，然后就是让可能并发进行的操作尽可能的并发。")]),_._v(" "),t("p",[_._v("看看哪些表被加锁了:")]),_._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("mysql>show open tables;\n")])])]),t("ol",[t("li",[t("h5",{attrs:{id:"查询表级锁争用情况"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询表级锁争用情况"}},[_._v("#")]),_._v(" 查询表级锁争用情况")])])]),_._v(" "),t("p",[_._v("MySQL 内部有两组专门的状态变量记录系统内部锁资源争用情况：")]),_._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("mysql> show status like 'table%';\n")])])]),t("p",[_._v("这里有两个状态变量记录 MySQL 内部表级锁定的情况，两个变量说明如下：")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("Table_locks_immediate：产生表级锁定的次数，表示可以立即获取锁的查询次数，每立即获取锁值加1")])]),_._v(" "),t("li",[t("p",[_._v("Table_locks_waited：出现表级锁定争用而发生等待的次数(不能立即获取锁的次数，每等待一次锁值加1)，此值高则说明存在着较严重的表级锁争用情况")])])]),_._v(" "),t("p",[_._v("两个状态值都是从系统启动后开始记录，出现一次对应的事件则数量加1。如果这里的Table_locks_waited状态值比较高，那么说明系统中表级锁定争用现象比较严重，就需要进一步分析为什么会有较多的锁定资源争用了。")]),_._v(" "),t("blockquote",[t("p",[_._v("此外，Myisam的读写锁调度是写优先，这也是myisam不适合做写为主表的引擎。因为写锁后，其他线程不能做任何操作，大量的更新会使查询很难得到锁，从而造成永远阻塞")])]),_._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[t("strong",[_._v("缩短锁定时间")])]),_._v(" "),t("p",[_._v("如何让锁定时间尽可能的短呢？唯一的办法就是让我们的Query执行时间尽可能的短。")])])]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("尽量减少大的复杂Query，将复杂Query分拆成几个小的Query分布进行；")])]),_._v(" "),t("li",[t("strong",[_._v("尽可能的建立足够高效的索引，让数据检索更迅速；")])]),_._v(" "),t("li",[t("strong",[_._v("尽量让MyISAM存储引擎的表只存放必要的信息，控制字段类型；")])]),_._v(" "),t("li",[t("strong",[_._v("利用合适的机会优化MyISAM表数据文件。")])])]),_._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[t("p",[_._v("分离能并行的操作")]),_._v(" "),t("p",[_._v("说到MyISAM的表锁，而且是读写互相阻塞的表锁，可能有些人会认为在MyISAM存储引擎的表上就只能是完全的串行化，没办法再并行了。大家不要忘记了，MyISAM的存储引擎还有一个非常有用的特性，那就是ConcurrentInsert（并发插入）的特性。")]),_._v(" "),t("p",[_._v("MyISAM存储引擎有一个控制是否打开Concurrent Insert功能的参数选项："),t("code",[_._v("concurrent_insert")]),_._v("，可以设置为0，1或者2。三个值的具体说明如下：")])])]),_._v(" "),t("ul",[t("li",[t("p",[_._v("concurrent_insert=2，无论MyISAM表中有没有空洞，都允许在表尾并发插入记录；")])]),_._v(" "),t("li",[t("p",[_._v("concurrent_insert=1，如果MyISAM表中没有空洞（即表的中间没有被删除的行），MyISAM允许在一个进程读表的同时，另一个进程从表尾插入记录。这也是MySQL的默认设置；")])]),_._v(" "),t("li",[t("p",[_._v("concurrent_insert=0，不允许并发插入。")]),_._v(" "),t("p",[_._v("可以利用MyISAM存储引擎的并发插入特性，来解决应用中对同一表查询和插入的锁争用。例如，将concurrent_insert系统变量设为2，总是允许并发插入；同时，通过定期在系统空闲时段执行OPTIMIZE TABLE语句来整理空间碎片，收回因删除记录而产生的中间空洞。")])])]),_._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[t("p",[_._v("合理利用读写优先级")]),_._v(" "),t("p",[_._v("MyISAM存储引擎的是读写互相阻塞的，那么，一个进程请求某个MyISAM表的读锁，同时另一个进程也请求同一表的写锁，MySQL如何处理呢？")]),_._v(" "),t("p",[_._v("答案是写进程先获得锁。不仅如此，即使读请求先到锁等待队列，写请求后到，写锁也会插到读锁请求之前。")]),_._v(" "),t("p",[_._v("这是因为MySQL的表级锁定对于读和写是有不同优先级设定的，默认情况下是写优先级要大于读优先级。")]),_._v(" "),t("p",[_._v("所以，如果我们可以根据各自系统环境的差异决定读与写的优先级：")]),_._v(" "),t("p",[_._v("通过执行命令SET LOW_PRIORITY_UPDATES=1，使该连接读比写的优先级高。如果我们的系统是一个以读为主，可以设置此参数，如果以写为主，则不用设置；")]),_._v(" "),t("p",[_._v("通过指定INSERT、UPDATE、DELETE语句的LOW_PRIORITY属性，降低该语句的优先级。")]),_._v(" "),t("p",[_._v("虽然上面方法都是要么更新优先，要么查询优先的方法，但还是可以用其来解决查询相对重要的应用（如用户登录系统）中，读锁等待严重的问题。")]),_._v(" "),t("p",[_._v("另外，MySQL也提供了一种折中的办法来调节读写冲突，即给系统参数max_write_lock_count设置一个合适的值，当一个表的读锁达到这个值后，MySQL就暂时将写请求的优先级降低，给读进程一定获得锁的机会。")]),_._v(" "),t("p",[_._v("这里还要强调一点：一些需要长时间运行的查询操作，也会使写进程“饿死”，因此，应用中应尽量避免出现长时间运行的查询操作，不要总想用一条SELECT语句来解决问题，因为这种看似巧妙的SQL语句，往往比较复杂，执行时间较长，在可能的情况下可以通过使用中间表等措施对SQL语句做一定的“分解”，使每一步查询都能在较短时间完成，从而减少锁冲突。如果复杂查询不可避免，应尽量安排在数据库空闲时段执行，比如一些定期统计可以安排在夜间执行。")])])]),_._v(" "),t("h2",{attrs:{id:"四、行锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、行锁"}},[_._v("#")]),_._v(" 四、行锁")]),_._v(" "),t("p",[_._v("InnoDB 引擎是支持行级锁的，而 MyISAM 引擎并不支持行级锁。")]),_._v(" "),t("blockquote",[t("p",[_._v("InnoDB 与 MyISAM 的最大不同有两点：一是支持事务（TRANSACTION）；二是采用了行级锁")])]),_._v(" "),t("p",[t("code",[_._v("行锁")]),_._v("，也称为"),t("code",[_._v("记录锁")]),_._v("，顾名思义就是在记录上加的锁。")]),_._v(" "),t("p",[_._v("行级锁的类型主要有三类：")]),_._v(" "),t("ul",[t("li",[_._v("Record Lock，记录锁，也就是仅仅把一条记录锁上；")]),_._v(" "),t("li",[_._v("Gap Lock，间隙锁，锁定一个范围，但是不包含记录本身；")]),_._v(" "),t("li",[_._v("Next-Key Lock：Record Lock + Gap Lock 的组合，锁定一个范围，并且锁定记录本身。")])]),_._v(" "),t("h4",{attrs:{id:"record-lock"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#record-lock"}},[_._v("#")]),_._v(" Record Lock")]),_._v(" "),t("p",[_._v("Innodb 存储引擎由于实现了行级锁定，虽然在锁定机制的实现方面所带来的性能损耗可能比表级锁定会要更高一些，但是在整体并发处理能力方面要远远优于 MyISAM 的表级锁定的。当系统并发量较高的时候，Innodb 的整体性能和 MyISAM 相比就会有比较明显的优势了。")]),_._v(" "),t("p",[_._v("Record Lock 称为记录锁，锁住的是一条记录。而且记录锁是有 S 锁和 X 锁之分的：")]),_._v(" "),t("ul",[t("li",[_._v("当一个事务对一条记录加了 S 型记录锁后，其他事务也可以继续对该记录加 S 型记录锁（S 型与 S 锁兼容），但是不可以对该记录加 X 型记录锁（S 型与 X 锁不兼容）;")]),_._v(" "),t("li",[_._v("当一个事务对一条记录加了 X 型记录锁后，其他事务既不可以对该记录加 S 型记录锁（S 型与 X 锁不兼容），也不可以对该记录加 X 型记录锁（X 型与 X 锁不兼容）。")])]),_._v(" "),t("p",[_._v("举个例子，当一个事务执行了下面这条语句：")]),_._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[_._v("mysql "),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v(">")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("begin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\nmysql "),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v(">")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("select")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v("*")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("from")]),_._v(" t "),t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("where")]),_._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[_._v("4")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("for")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("update")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n")])])]),t("p",[_._v("就是对 t 表中主键 id 为 4 的这条记录加上 X 型的记录锁，这样其他事务就无法对这条记录进行修改了。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img.starfish.ink/mysql/MySQL-record-lock.png",alt:""}})]),_._v(" "),t("p",[_._v("当事务执行 commit 后，事务过程中生成的锁都会被释放。")]),_._v(" "),t("h4",{attrs:{id:"gap-lock"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gap-lock"}},[_._v("#")]),_._v(" Gap Lock")]),_._v(" "),t("p",[_._v("Gap Lock 称为间隙锁，只存在于可重复读隔离级别，目的是为了解决可重复读隔离级别下幻读的现象。")]),_._v(" "),t("p",[_._v("假设，表中有一个范围 id 为（4，8）间隙锁，那么其他事务就无法插入 id = 5、6、7 的记录了，这样就有效的防止幻读现象的发生。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img.starfish.ink/mysql/MySQL-gap-lock.png",alt:""}})]),_._v(" "),t("p",[_._v("间隙锁虽然存在 X 型间隙锁和 S 型间隙锁，但是并没有什么区别，"),t("strong",[_._v("间隙锁之间是兼容的，即两个事务可以同时持有包含共同间隙范围的间隙锁，并不存在互斥关系，因为间隙锁的目的是防止插入幻影记录而提出的")]),_._v("。")]),_._v(" "),t("h4",{attrs:{id:"next-key-lock"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#next-key-lock"}},[_._v("#")]),_._v(" Next-Key Lock")]),_._v(" "),t("p",[_._v("Next-Key Lock 称为临键锁，是 Record Lock + Gap Lock 的组合，锁定一个范围，并且锁定记录本身。")]),_._v(" "),t("p",[_._v("假设，表中有一个范围 id 为（4，8] 的 next-key lock，那么其他事务即不能插入 id = 5,6,7 记录，也不能修改 id = 8 这条记录。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img.starfish.ink/mysql/MySQL-next-key-lock.png",alt:""}})]),_._v(" "),t("p",[_._v("所以，next-key lock 即能保护该记录，又能阻止其他事务将新记录插入到被保护记录前面的间隙中。")]),_._v(" "),t("p",[t("strong",[_._v("next-key lock 是包含间隙锁+记录锁的，如果一个事务获取了 X 型的 next-key lock，那么另外一个事务在获取相同范围的 X 型的 next-key lock 时，是会被阻塞的")]),_._v("。")]),_._v(" "),t("p",[_._v("比如，一个事务持有了范围为 (4, 8] 的 X 型的 next-key lock，那么另外一个事务在获取相同范围的 X 型的 next-key lock 时，就会被阻塞。")]),_._v(" "),t("p",[_._v("虽然相同范围的间隙锁是多个事务相互兼容的，但对于记录锁，我们是要考虑 X 型与 S 型关系，X 型的记录锁与 X 型的记录锁是冲突的。")]),_._v(" "),t("h4",{attrs:{id:"插入意向锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插入意向锁"}},[_._v("#")]),_._v(" 插入意向锁")]),_._v(" "),t("p",[_._v("一个事务在插入一条记录的时候，需要判断插入位置是否已被其他事务加了间隙锁（next-key lock 也包含间隙锁）。")]),_._v(" "),t("p",[_._v("如果有的话，插入操作就会发生"),t("strong",[_._v("阻塞")]),_._v("，直到拥有间隙锁的那个事务提交为止（释放间隙锁的时刻），在此期间会生成一个"),t("strong",[_._v("插入意向锁")]),_._v("，表明有事务想在某个区间插入新记录，但是现在处于等待状态。")]),_._v(" "),t("p",[_._v("举个例子，假设事务 A 已经对表加了一个范围 id 为（4，8）间隙锁。")]),_._v(" "),t("p",[_._v("当事务 A 还没提交的时候，事务 B 向该表插入一条 id = 5 的新记录，这时会判断到插入的位置已经被事务 A 加了间隙锁，于是事物 B 会生成一个插入意向锁，然后将锁的状态设置为等待状态（"),t("em",[_._v("PS：MySQL 加锁时，是先生成锁结构，然后设置锁的状态，如果锁状态是等待状态，并不是意味着事务成功获取到了锁，只有当锁状态为正常状态时，才代表事务成功获取到了锁")]),_._v("），此时事务 B 就会发生阻塞，直到事务 A 提交了事务。")]),_._v(" "),t("p",[_._v("插入意向锁名字虽然有意向锁，但是它并"),t("strong",[_._v("不是意向锁，它是一种特殊的间隙锁，属于行级别锁")]),_._v("。")]),_._v(" "),t("p",[_._v("如果说间隙锁锁住的是一个区间，那么「插入意向锁」锁住的就是一个点。因而从这个角度来说，插入意向锁确实是一种特殊的间隙锁。")]),_._v(" "),t("p",[_._v("插入意向锁与间隙锁的另一个非常重要的差别是：尽管「插入意向锁」也属于间隙锁，但两个事务却不能在同一时间内，一个拥有间隙锁，另一个拥有该间隙区间内的插入意向锁（当然，插入意向锁如果不在间隙锁区间内则是可以的）。")]),_._v(" "),t("h4",{attrs:{id:"innodb-行锁实现方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#innodb-行锁实现方式"}},[_._v("#")]),_._v(" InnoDB 行锁实现方式")]),_._v(" "),t("p",[t("strong",[_._v("InnoDB 行锁是通过给索引上的索引项加锁来实现的，只有通过索引条件检索数据，InnoDB 才使用行级锁，否则，InnoDB 将使用表锁")])]),_._v(" "),t("p",[_._v("在实际应用中，要特别注意 InnoDB 行锁的这一特性，不然的话，可能导致大量的锁冲突，从而影响并发性能。下面通过一些实际例子来加以说明。")]),_._v(" "),t("ol",[t("li",[_._v("在不通过索引条件查询的时候，InnoDB 确实使用的是表锁，而不是行锁。")]),_._v(" "),t("li",[_._v("由于 MySQL 的行锁是针对索引加的锁，不是针对记录加的锁，所以虽然是访问不同行的记录，但是如果是使用相同的索引键，是会出现锁冲突的。")]),_._v(" "),t("li",[_._v("当表有多个索引的时候，不同的事务可以使用不同的索引锁定不同的行，另外，不论是使用主键索引、唯一索引或普通索引，InnoDB 都会使用行锁来对数据加锁。")]),_._v(" "),t("li",[_._v("即便在条件中使用了索引字段，但是否使用索引来检索数据是由 MySQL 通过判断不同执行计划的代价来决定的，如果 MySQL 认为全表扫描效率更高，比如对一些很小的表，它就不会使用索引，这种情况下 InnoDB 将使用表锁，而不是行锁。因此，"),t("strong",[_._v("在分析锁冲突时，别忘了检查 SQL 的执行计划，以确认是否真正使用了索引")]),_._v("。")])]),_._v(" "),t("h4",{attrs:{id:"如何分析行锁定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何分析行锁定"}},[_._v("#")]),_._v(" 如何分析行锁定")]),_._v(" "),t("p",[_._v("通过检查 "),t("code",[_._v("InnoDB_row_lock")]),_._v(" 状态变量来分析系统上的行锁的争夺情况")]),_._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("mysql>show status like 'innodb_row_lock%';\n")])])]),t("p",[t("img",{attrs:{src:"https://img.starfish.ink/mysql/innodb_row_lock.png",alt:""}})]),_._v(" "),t("ul",[t("li",[t("code",[_._v("Innodb_row_lock_current_waits")]),_._v("：当前正在等待锁定的数量；")]),_._v(" "),t("li",[t("code",[_._v("Innodb_row_lock_time")]),_._v("：从系统启动到现在锁定总时间长度；")]),_._v(" "),t("li",[t("code",[_._v("Innodb_row_lock_time_avg")]),_._v("：每次等待所花平均时间；")]),_._v(" "),t("li",[t("code",[_._v("Innodb_row_lock_time_max")]),_._v("：从系统启动到现在等待最常的一次所花的时间；")]),_._v(" "),t("li",[t("code",[_._v("Innodb_row_lock_waits")]),_._v("：系统启动后到现在总共等待的次数；")])]),_._v(" "),t("h4",{attrs:{id:"行锁优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#行锁优化"}},[_._v("#")]),_._v(" 行锁优化")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("尽可能让所有数据检索都通过索引来完成，避免无索引行锁升级为表锁")])]),_._v(" "),t("li",[t("p",[_._v("合理设计索引，尽量缩小锁的范围")])]),_._v(" "),t("li",[t("p",[_._v("尽可能较少检索条件，避免间隙锁")])]),_._v(" "),t("li",[t("p",[_._v("尽量控制事务大小，减少锁定资源量和时间长度")])]),_._v(" "),t("li",[t("p",[_._v("尽可能低级别事务隔离")])])]),_._v(" "),t("h3",{attrs:{id:"页锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#页锁"}},[_._v("#")]),_._v(" 页锁")]),_._v(" "),t("p",[_._v("开销和加锁时间界于表锁和行锁之间；会出现死锁；锁定粒度界于表锁和行锁之间，并发度一般。")]),_._v(" "),t("h2",{attrs:{id:"五、innodb-锁内存结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、innodb-锁内存结构"}},[_._v("#")]),_._v(" 五、InnoDB 锁内存结构")]),_._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("*# 事务T1* \nSELECT * FROM hero LOCK IN SHARE MODE*;*\n")])])]),t("p",[_._v("很显然这条语句需要为"),t("code",[_._v("hero表")]),_._v("中的所有记录进行加锁，那是不是需要为每条记录都生成一个"),t("code",[_._v("锁结构")]),_._v("呢？")]),_._v(" "),t("p",[_._v("在对不同记录加锁时，如果符合下边这些条件：")]),_._v(" "),t("ul",[t("li",[_._v("在同一个事务中进行加锁操作")]),_._v(" "),t("li",[_._v("被加锁的记录在同一个页面中")]),_._v(" "),t("li",[_._v("加锁的类型是一样的")]),_._v(" "),t("li",[_._v("等待状态是一样的")])]),_._v(" "),t("p",[_._v("那么这些记录的锁就可以被放到一个"),t("code",[_._v("锁结构")]),_._v("中")]),_._v(" "),t("p",[t("code",[_._v("锁")]),_._v("是一个内存结构，InnoDB中用 "),t("code",[_._v("lock_t")]),_._v(" 这个结构来定义(8.0)：")]),_._v(" "),t("div",{staticClass:"language-c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("struct")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[_._v("lock_t")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),_._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[_._v("/** transaction owning the lock */")]),_._v("\n  "),t("span",{pre:!0,attrs:{class:"token class-name"}},[_._v("trx_t")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v("*")]),_._v("trx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[_._v("/** list of the locks of the transaction */")]),_._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[_._v("UT_LIST_NODE_T")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[_._v("lock_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),_._v(" trx_locks"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[_._v("/** Index for a record lock */")]),_._v("\n  "),t("span",{pre:!0,attrs:{class:"token class-name"}},[_._v("dict_index_t")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v("*")]),_._v("index"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[_._v("/** Hash chain node for a record lock. The link node in a singly\n  linked list, used by the hash table. */")]),_._v("\n  "),t("span",{pre:!0,attrs:{class:"token class-name"}},[_._v("lock_t")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v("*")]),_._v("hash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("union")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),_._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[_._v("/** Table lock */")]),_._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[_._v("lock_table_t")]),_._v(" tab_lock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[_._v("/** Record lock */")]),_._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[_._v("lock_rec_t")]),_._v(" rec_lock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n")])])]),t("h2",{attrs:{id:"六、死锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、死锁"}},[_._v("#")]),_._v(" 六、死锁")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img.starfish.ink/mysql/deadlock.jpeg",alt:""}})]),_._v(" "),t("p",[_._v("死锁是指两个或者多个事务在同一资源上互相占用，并请求锁定对方占用的资源，从而导致恶性循环的现象。当多个事务试图以不同的顺序锁定资源时，就可能会产生死锁。多个事务同时锁定同一个资源时，也会产生死锁。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img.starfish.ink/mysql/MySQL-dead-lock-demo.png",alt:""}})]),_._v(" "),t("p",[_._v("为了解决这种问题，数据库系统实现了各种死锁检测和死锁超时机制。")]),_._v(" "),t("p",[_._v("当出现死锁以后，有两种策略：")]),_._v(" "),t("ul",[t("li",[_._v("一种策略是，直接进入等待，直到超时。这个超时时间可以通过参数 innodb_lock_wait_timeout 来设置。")]),_._v(" "),t("li",[_._v("另一种策略是，发起死锁检测，发现死锁后，主动回滚死锁链条中的某一个事务，让其他事务得以继续执行。将参数 innodb_deadlock_detect 设置为 on，表示开启这个逻辑。")])]),_._v(" "),t("p",[_._v("在 InnoDB 中，"),t("code",[_._v("innodb_lock_wait_timeout")]),_._v(" 的默认值是 50s，意味着如果采用第一个策略，当出现死锁以后，第一个被锁住的线程要过 50s 才会超时退出，然后其他线程才有可能继续执行。对于在线服务来说，这个等待时间往往是无法接受的。")]),_._v(" "),t("p",[_._v("但是，我们又不可能直接把这个时间设置成一个很小的值，比如 1s。这样当出现死锁的时候，确实很快就可以解开，但如果不是死锁，而是简单的锁等待呢？所以，超时时间设置太短的话，会出现很多误伤。")]),_._v(" "),t("p",[_._v("所以，正常情况下我们还是要采用第二种策略，即：主动死锁检测，而且 "),t("code",[_._v("innodb_deadlock_detect")]),_._v(" 的默认值本身就是 on。主动死锁检测在发生死锁的时候，是能够快速发现并进行处理的，但是它也是有额外负担的。")]),_._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[_._v("#")]),_._v(" 参考")]),_._v(" "),t("ul",[t("li",[_._v("《高性能 MySQL》")]),_._v(" "),t("li",[_._v("《MySQL技术内幕：innodb》")]),_._v(" "),t("li",[_._v("《MySQL实战45讲》")]),_._v(" "),t("li",[_._v("《从根儿上理解MySQL》")])])])}),[],!1,null,null,null);v.default=a.exports}}]);