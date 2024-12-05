(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{608:function(s,t,e){"use strict";e.r(t);var a=e(2),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[e("img",{attrs:{src:"https://redis.io/wp-content/uploads/2014/05/redis_289_art.png",alt:"img"}})]),s._v(" "),e("blockquote",[e("p",[s._v("作为一名后端开发工程师，工作中肯定会用到 Redis，面试中八成也会被问到 Redis 相关的问题。所以系统学习，深入学习还是很有必要的。")]),s._v(" "),e("p",[s._v("建立属于自己的完整的 Reids 知识框架。")]),s._v(" "),e("p",[s._v("带着问题去系统学习，有一个自己的问题画像，最后梳理成自己的“武功秘籍”")]),s._v(" "),e("p",[s._v("看下极客时间中的一个 Redis 问题画像图：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://static001.geekbang.org/resource/image/70/b4/70a5bc1ddc9e3579a2fcb8a5d44118b4.jpeg",alt:"img"}})])]),s._v(" "),e("h2",{attrs:{id:"redis-简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-简介"}},[s._v("#")]),s._v(" Redis 简介")]),s._v(" "),e("p",[s._v("Redis: "),e("strong",[s._v("REmote DIctionary Server")]),s._v("(远程字典服务器)。")]),s._v(" "),e("p",[s._v("Redis 是一个全开源免费（BSD许可）的，使用 C 语言编写，内存中的数据结构存储系统，它可以用作"),e("strong",[s._v("数据库、缓存和消息中间件")]),s._v("。一般作为一个高性能的(key/value)分布式内存数据库，基于"),e("strong",[s._v("内存")]),s._v("运行并支持持久化的 NoSQL 数据库，是当前最热门的 NoSql 数据库之一，也被人们称为"),e("strong",[s._v("数据结构服务器")])]),s._v(" "),e("p",[s._v("它支持多种数据结构，如字符串（Strings）、哈希（Hashes）、列表（Lists）、集合（Sets）、有序集合（Sorted Sets）、位图（bitmaps）、HyperLogLogs 和地理空间索引（geospatial indexes），并带有半持久化存储的选项。")]),s._v(" "),e("h3",{attrs:{id:"主要特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主要特点"}},[s._v("#")]),s._v(" 主要特点")]),s._v(" "),e("ol",[e("li",[e("strong",[s._v("高性能")]),s._v("：Redis 的读写速度非常快，支持每秒百万级的请求处理能力。其所有数据都存储在内存中，保证了极高的读写性能。")]),s._v(" "),e("li",[e("strong",[s._v("多种数据结构")]),s._v("：Redis 不仅支持简单的键值对，还支持多种高级数据结构，如列表、集合、有序集合、哈希等，可以满足复杂的数据存储需求。")]),s._v(" "),e("li",[e("strong",[s._v("持久化")]),s._v("：Redis 支持多种持久化机制，如 RDB（快照）和 AOF（追加文件），可以将内存中的数据持久化到磁盘，保证数据的持久性。")]),s._v(" "),e("li",[e("strong",[s._v("高可用性")]),s._v("：通过 Redis 的复制（Replication）、Sentinel 和 Cluster 特性，可以实现高可用性和自动故障转移。复制机制允许数据从主节点复制到多个从节点，从而提高数据的冗余性和读取的可扩展性。")]),s._v(" "),e("li",[e("strong",[s._v("Lua脚本")]),s._v("：Redis 内置 Lua 脚本引擎，支持在服务器端运行复杂的脚本，减少了网络往返次数，提高了操作的原子性。")]),s._v(" "),e("li",[e("strong",[s._v("事务支持")]),s._v("：Redis 支持事务，通过 MULTI、EXEC、DISCARD 和 WATCH 等命令实现事务操作。")]),s._v(" "),e("li",[e("strong",[s._v("发布/订阅")]),s._v("：Redis 提供了发布/订阅功能，可以实现消息通知和实时消息传递。")]),s._v(" "),e("li",[e("strong",[s._v("丰富的生态系统")]),s._v("：Redis 拥有丰富的客户端库，支持多种编程语言，包括 C、C++、Java、Python、Go、Node.js等。")])]),s._v(" "),e("h3",{attrs:{id:"应用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[s._v("#")]),s._v(" 应用场景")]),s._v(" "),e("ol",[e("li",[e("strong",[s._v("缓存")]),s._v("：Redis 作为缓存系统，可以极大地提高数据读取速度，减轻数据库的压力。")]),s._v(" "),e("li",[e("strong",[s._v("会话存储")]),s._v("：利用 Redis 的高性能和持久化特性，可以用于存储用户会话信息。")]),s._v(" "),e("li",[e("strong",[s._v("实时分析")]),s._v("：利用 Redis 的集合和有序集合，可以进行实时数据分析和排名。")]),s._v(" "),e("li",[e("strong",[s._v("消息队列")]),s._v("：利用 Redis 的列表和发布/订阅特性，可以实现简单的消息队列系统。")]),s._v(" "),e("li",[e("strong",[s._v("计数器和限流")]),s._v("：利用 Redis 的原子递增操作，可以实现高效的计数器和限流机制。")])]),s._v(" "),e("blockquote",[e("p",[e("strong",[s._v("具体以某一论坛为例：")])]),s._v(" "),e("ul",[e("li",[s._v("记录帖子的点赞数、评论数和点击数 (hash)。")]),s._v(" "),e("li",[s._v("记录用户的帖子 ID 列表 (排序)，便于快速显示用户的帖子列表 (zset)。")]),s._v(" "),e("li",[s._v("记录帖子的标题、摘要、作者和封面信息，用于列表页展示 (hash)。")]),s._v(" "),e("li",[s._v("记录帖子的点赞用户 ID 列表，评论 ID 列表，用于显示和去重计数 (zset)。")]),s._v(" "),e("li",[s._v("缓存近期热帖内容 (帖子内容空间占用比较大)，减少数据库压力 (hash)。")]),s._v(" "),e("li",[s._v("记录帖子的相关文章 ID，根据内容推荐相关帖子 (list)。")]),s._v(" "),e("li",[s._v("如果帖子 ID 是整数自增的，可以使用 Redis 来分配帖子 ID(计数器)。")]),s._v(" "),e("li",[s._v("收藏集和帖子之间的关系 (zset)。")]),s._v(" "),e("li",[s._v("记录热榜帖子 ID 列表，总热榜和分类热榜 (zset)。")]),s._v(" "),e("li",[s._v("缓存用户行为历史，进行恶意行为过滤 (zset,hash)。")])])]),s._v(" "),e("p",[s._v("Redis 的官网地址，非常好记，是 redis.io。（域名后缀io属于国家域名，是 british Indian Ocean territory，即英属印度洋领地）目前，Vmware 在资助着 Redis 项目的开发和维护。")]),s._v(" "),e("p",[e("strong",[s._v("安装")])]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://download.redis.io/releases/redis-5.0.6.tar.gz\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xzf redis-5.0.6.tar.gz\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" redis-5.0.6\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n")])])]),e("p",[s._v("新版本的编译文件在 src 中（之前在bin目录），启动 server")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ src/redis-server\n")])])]),e("p",[s._v("启动客户端")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ src/redis-cli\nredis"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" foo bar\nOK\nredis"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" get foo\n"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bar"')]),s._v("\n")])])]),e("h2",{attrs:{id:"redis-知识全景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-知识全景"}},[s._v("#")]),s._v(" Redis 知识全景")]),s._v(" "),e("p",[e("img",{attrs:{src:"/Users/starfish/Downloads/79da7093ed998a99d9abe91e610b74e7.jpg",alt:""}})]),s._v(" "),e("p",[s._v("“两大维度”就是指系统维度和应用维度，“三大主线”也就是指高性能、高可靠和高可扩展（可以简称为“三高”）。")]),s._v(" "),e("p",[s._v("Redis 作为庞大的键值数据库，可以说遍地都是知识，一抓一大把，我们怎么能快速地知道该学哪些呢？别急，接下来就要看“三大主线”的魔力了。")]),s._v(" "),e("p",[s._v("别看技术点是零碎的，其实你完全可以按照这三大主线，给它们分下类，就像图片中展示的那样，具体如下：")]),s._v(" "),e("p",[e("strong",[s._v("高性能主线")]),s._v("，包括线程模型、数据结构、持久化、网络框架；")]),s._v(" "),e("p",[e("strong",[s._v("高可靠主线")]),s._v("，包括主从复制、哨兵机制；")]),s._v(" "),e("p",[e("strong",[s._v("高可扩展主线")]),s._v("，包括数据分片、负载均衡。")]),s._v(" "),e("h2",{attrs:{id:"推荐阅读"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#推荐阅读"}},[s._v("#")]),s._v(" 推荐阅读")]),s._v(" "),e("p",[e("a",{attrs:{href:"http://kaito-kidd.com/2020/09/09/how-i-learned-redis/",target:"_blank",rel:"noopener noreferrer"}},[s._v("《我是如何学习Redis的？高效学习Redis的路径和方法分享》"),e("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);