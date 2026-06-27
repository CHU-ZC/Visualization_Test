// 存放苏德战争核心数据 (共9个节点，包含图文详细档案)
const warData = [
    {
        "id": 1,
        "time": "1941.06",
        "stageName": "第一阶段：德军闪击与苏军的艰难防御\n(1941.06 - 1942.11)",
        "event_title": "巴巴罗萨计划",
        "description": "1941年6月22日凌晨，纳粹德国撕毁《苏德互不侵犯条约》，集结逾300万兵力、3000多辆坦克及数千架战机，分北、中、南三个集团军群，在长达2900公里的战线上对苏联发动了人类历史上最大规模的突然袭击。毫无防备的苏军在战争初期损失惨重，大批部队被合围歼灭。",
        "camera_offset": [3, 2.6],
        "routes": [
            { "name": "北方集团军群", "coords": [[21.01, 54.71], [30.33, 59.93]], "type": "axis", "label_offset": [18, -15] },
            { "name": "中央集团军群", "coords": [[23.16, 52.09], [31.98, 54.78]], "type": "axis", "label_offset": [-15, 22] },
            { "name": "南方集团军群", "coords": [[23.53, 49.83], [30.52, 50.45]], "type": "axis", "label_offset": [22, 8] }
        ],
        "focal_points": [
            {
                "name": "布列斯特要塞", "coord": [23.68, 52.19], "type": "fortress",
                "wikipedia_url": "https://zh.wikipedia.org/wiki/%E5%B8%83%E5%88%97%E6%96%AF%E7%89%B9%E8%A6%81%E5%A1%9E%E4%BF%9D%E5%8D%AB%E6%88%98",
                "detail": "<img src='assets/pic_barbarossa.jpg' class='modal-image'/><h3 class='modal-section-title'>战前与突袭</h3><p>作为边境的重要堡垒，布列斯特在开战首日便遭到德军重炮和斯图卡轰炸机的狂轰滥炸。守军在通讯切断、弹尽粮绝的情况下，依然依托地下工事进行了长达一个月的绝望抵抗。</p><h3 class='modal-section-title'>历史回响</h3><p>一名无名战士在墙上刻下了著名的血书：“我将死去，但我绝不投降！永别了，祖国！” 这座要塞成为了苏联军民顽强不屈精神的象征。</p>"
            }
        ]
    },
    {
        "id": 2,
        "time": "1941.09",
        "stageName": "第一阶段：德军闪击与苏军的艰难防御\n(1941.06 - 1942.11)",
        "event_title": "列宁格勒围城战",
        "description": "德军北方集团军群迅速推进，切断了列宁格勒（今圣彼得堡）的陆上交通线。希特勒下令不接受投降，意图通过饥饿和炮击将这座拥有数百万人口的城市“从地球表面抹去”。长达872天的残酷围城战就此开始。",
        "camera_offset": [0.5, -0.5],
        "routes": [
            { "name": "德北方集团军群推进", "coords": [[28.00, 57.00], [30.31, 59.93]], "type": "axis", "label_offset": [15, -20] },
            { "name": "芬兰军队配合封锁", "coords": [[29.00, 61.00], [30.31, 59.93]], "type": "axis", "label_offset": [40, -10] }
        ],
        "focal_points": [
            {
                "name": "列宁格勒", "coord": [30.31, 59.93], "type": "city",
                "wikipedia_url": "https://zh.wikipedia.org/wiki/%E5%88%97%E5%AE%81%E6%A0%BC%E5%8B%92%E5%9B%B4%E5%9F%8E%E6%88%98",
                "detail": "<img src='assets/pic_leningrad.jpg' class='modal-image'/><h3 class='modal-section-title'>无尽的长夜</h3><p>在零下30度的严寒中，城内每天的面包配给最低降至仅125克（主要由锯末和纤维组成）。人们被迫吃皮带、老鼠甚至发生人食人。小女孩塔季扬娜·萨维切娃在日记中写道：“萨维切夫一家都死了，只剩下塔尼娅。”</p><h3 class='modal-section-title'>拉多加湖生命线</h3><p>苏军在结冰的拉多加湖上开辟了一条“生命之岭”，卡车冒着德军轰炸和冰面破裂的危险，运进了宝贵的粮食并撤出平民。围城期间超过100万平民饿死，但城市最终未被攻克。</p>"
            }
        ]
    },
    {
        "id": 3,
        "time": "1941.10",
        "stageName": "第一阶段：德军闪击与苏军的艰难防御\n(1941.06 - 1942.11)",
        "event_title": "莫斯科保卫战",
        "description": "德军发动代号“台风”的攻势，企图在冬季来临前攻占苏联首都。苏联政府部分撤离，斯大林决定留守。随着秋季泥泞（Rasputitsa）和凛冬的降临，德军的机械化部队举步维艰，攻势在距离莫斯科仅二三十公里处彻底停滞。",
        "camera_offset": [0, -1],
        "routes": [
            { "name": "德军突击矛头", "coords": [[31.98, 54.78], [37.61, 55.75]], "type": "axis", "label_offset": [15, 10] }
        ],
        "focal_points": [
            {
                "name": "莫斯科", "coord": [37.61, 55.75], "type": "capital",
                "wikipedia_url": "https://zh.wikipedia.org/wiki/%E8%8E%AB%E6%96%AF%E7%A7%91%E6%88%98%E5%BD%B9",
                "detail": "<img src='assets/pic_moscow.jpg' class='modal-image'/><h3 class='modal-section-title'>兵临城下与红场阅兵</h3><p>德军前锋的望远镜已能看到克里姆林宫的尖顶。在极其危急的11月7日，斯大林在红场照常举行十月革命节阅兵，受阅部队全副武装，走过红场后直接开赴前线。</p><h3 class='modal-section-title'>冬将军的惩罚</h3><p>凭借间谍理查德·佐尔格从日本传回的情报（日本暂不北进），朱可夫得以将西伯利亚的精锐防寒部队调往西线。在零下40度的严寒中，缺乏冬装的德军全线溃退，“闪电战”不可战胜的神话终告破灭。</p>"
            }
        ]
    },
    {
        "id": 4,
        "time": "1942.08",
        "stageName": "第二阶段：相持与苏德战场的伟大战局转折\n(1942.11 - 1943.12)",
        "event_title": "斯大林格勒战役",
        "description": "德军发动“蓝色方案”，战争重心转向南方。为了夺取高加索油田并切断伏尔加河交通枢纽，双方在这座以斯大林命名的城市中展开了长达半年的残酷巷战。这不仅是二战的转折点，也是人类历史上最为血腥的战役。",
        "camera_offset": [-1, -1],
        "routes": [
            { "name": "德军第六集团军", "coords": [[39.42, 48.71], [44.51, 48.70]], "type": "axis", "label_offset": [15, 18] },
            { "name": "苏军天王星行动合围", "coords": [[42.00, 50.00], [44.51, 48.70]], "type": "allied", "label_offset": [25, -25] }
        ],
        "focal_points": [
            {
                "name": "斯大林格勒", "coord": [44.51, 48.70], "type": "decisive_battle",
                "wikipedia_url": "https://zh.wikipedia.org/wiki/%E6%96%AF%E5%A4%A7%E6%9E%97%E6%A0%BC%E5%8B%92%E6%88%98%E5%BD%B9",
                "detail": "<img src='assets/pic_stalingrad.jpg' class='modal-image'/><h3 class='modal-section-title'>老鼠战争</h3><p>战场距离被压缩到了几米内，德军惊恐地称之为“老鼠战争”。火车站、马马耶夫高地乃至一座公寓楼（如著名的“巴甫洛夫大楼”）都要经过反复的血肉拉锯，新兵投入战场的平均存活时间不到24小时。</p><h3 class='modal-section-title'>合围与转折</h3><p>苏军暗中集结重兵发动“天王星行动”，击溃了侧翼薄弱的罗马尼亚军，将保卢斯元帅的德国第6集团军近30万人死死包围。1943年2月德军残部投降，轴心国战略主动权彻底丧失。</p>"
            }
        ]
    },
    {
        "id": 5,
        "time": "1943.07",
        "stageName": "第二阶段：相持与苏德战场的伟大战局转折\n(1942.11 - 1943.12)",
        "event_title": "堡垒行动：库尔斯克会战",
        "description": "不甘失败的希特勒集结了德军最精锐的装甲部队（配备新型虎式和豹式坦克），企图夹击库尔斯克突出部。苏军通过情报网提前洞悉计划，构筑了八道深达数百公里的反坦克防线，静待德军来犯。",
        "camera_offset": [0, -1],
        "routes": [
            { "name": "德军北翼夹击", "coords": [[36.19, 52.96], [36.19, 51.72]], "type": "axis", "label_offset": [13, -18] },
            { "name": "德军南翼夹击", "coords": [[36.59, 50.60], [36.19, 51.72]], "type": "axis", "label_offset": [20, -5] }
        ],
        "focal_points": [
            {
                "name": "库尔斯克", "coord": [36.19, 51.72], "type": "tank_battle",
                "wikipedia_url": "https://zh.wikipedia.org/wiki/%E5%BA%93%E5%B0%94%E6%96%AF%E5%85%8B%E4%BC%9A%E6%88%98",
                "detail": "<img src='assets/pic_kursk.jpg' class='modal-image'/><h3 class='modal-section-title'>史上最大坦克战</h3><p>在普罗霍罗夫卡平原，苏德双方投入了超过6000辆坦克和200万士兵。震耳欲聋的炮火和燃烧的装甲残骸遮天蔽日。苏军T-34坦克利用机动性冲入德军重型坦克群中展开惨烈的贴身肉搏。</p><h3 class='modal-section-title'>敲碎法西斯的脊梁</h3><p>德军虽然取得了战术上的较高交换比，但其最精锐的装甲预备队被消耗殆尽。德军从此在东线彻底转入战略防守，直至灭亡再未能发动大规模攻势。</p>"
            }
        ]
    },
    {
        "id": 6,
        "time": "1943.08",
        "stageName": "第二阶段：相持与苏德战场的伟大战局转折\n(1942.11 - 1943.12)",
        "event_title": "第聂伯河战役与解放基辅",
        "description": "库尔斯克大捷后，苏军犹如决堤之水全线出击。德军企图依托欧洲第三大河——第聂伯河建立“东方壁垒”进行固守。苏军在没有足够渡河工具的情况下，展开了悲壮的大强渡。",
        "camera_offset": [2.5, -0.2],
        "routes": [
            { "name": "苏军多方面军强渡", "coords": [[36.00, 50.00], [30.52, 50.45]], "type": "allied", "label_offset": [-25, 30] }
        ],
        "focal_points": [
            {
                "name": "基辅", "coord": [30.52, 50.45], "type": "city",
                "wikipedia_url": "https://zh.wikipedia.org/wiki/%E5%9F%BA%E8%BE%85%E6%88%98%E5%BD%B9_(1943%E5%B9%B4)",
                "detail": "<img src='assets/pic_kiev.jpg' class='modal-image'/><h3 class='modal-section-title'>血染的河水</h3><p>为了不让德军有喘息之机，数十万苏军士兵抱着圆木、门板甚至空汽油桶，冒着德军密集的机枪扫射强行渡河。第聂伯河宽阔的河面被鲜血染红。</p><h3 class='modal-section-title'>乌克兰的解放</h3><p>苏军不仅成功突破防线，更在11月解放了乌克兰首府基辅，粉碎了希特勒固守乌克兰粮仓的企图，为后续的反攻奠定了极佳的前进阵地。</p>"
            }
        ]
    },
    {
        "id": 7,
        "time": "1944.06",
        "stageName": "第三阶段：苏联全面反攻与纳粹德国的覆灭\n(1944.01 - 1945.05)",
        "event_title": "巴格拉季昂行动",
        "description": "配合西线盟军诺曼底登陆，苏军在东线发起了代号“巴格拉季昂”的大纵深战略反攻。通过完美的“面具（欺骗）”战术，苏军让德国统帅部误以为主攻方向在南方，实际上却在中线集结了250万大军。",
        "camera_offset": [2.1, -0.7],
        "routes": [
            { "name": "苏军第一白俄罗斯方面军", "coords": [[31.00, 53.00], [27.56, 53.90]], "type": "allied", "label_offset": [-25, 30] }
        ],
        "focal_points": [
            {
                "name": "明斯克", "coord": [27.56, 53.90], "type": "liberation",
                "wikipedia_url": "https://zh.wikipedia.org/wiki/%E5%B7%B4%E6%A0%BC%E6%8B%89%E5%AD%A3%E6%98%82%E8%A1%8C%E5%8A%A8",
                "detail": "<img src='assets/pic_bagration.jpg' class='modal-image'/><h3 class='modal-section-title'>大纵深的雷霆</h3><p>苏军数千辆坦克在航空兵掩护下撕裂了德军防线，推进速度惊人。昔日不可一世的德国中央集团军群被完全合围分割，损失兵力高达40余万，其灾难程度超过了斯大林格勒。</p><h3 class='modal-section-title'>洗刷耻辱</h3><p>苏军不仅收复了白俄罗斯，更将战线直接推到了波兰边境。近6万名德军战俘被押送至莫斯科大街下游街示众，随后洒水车清洗了街道，洗去了法西斯的印记。</p>"
            }
        ]
    },
    {
        "id": 8,
        "time": "1945.01",
        "stageName": "第三阶段：苏联全面反攻与纳粹德国的覆灭\n(1944.01 - 1945.05)",
        "event_title": "维斯瓦河-奥德河攻势",
        "description": "为缓解西线盟军在阿登战役中的压力，苏军将原定攻势提前。朱可夫与科涅夫率领的装甲大军从波兰维斯瓦河一跃而出，如秋风扫落叶般将德军残余防线彻底碾碎。",
        "camera_offset": [1, 0],
        "routes": [
            { "name": "苏军装甲集群推进", "coords": [[21.01, 52.22], [14.54, 52.53]], "type": "allied", "label_offset": [-25, 30] }
        ],
        "focal_points": [
            {
                "name": "奥德河防线", "coord": [14.54, 52.53], "type": "liberation",
                "wikipedia_url": "https://zh.wikipedia.org/wiki/%E7%BB%B4%E6%96%AF%E7%93%A6%E6%B2%B3-%E5%A5%A5%E5%BE%97%E6%B2%B3%E6%94%BB%E5%8A%BF",
                "detail": "<img src='assets/pic_vistula.jpg' class='modal-image'/><h3 class='modal-section-title'>狂飙突进</h3><p>苏军装甲部队最高创下了每天推进70公里的惊人纪录，短短数周推进近500公里。溃败的德军甚至动用了由老人和孩子组成的“国民突击队”来填补战线。</p><h3 class='modal-section-title'>敲开柏林大门</h3><p>苏军兵锋直抵距离柏林仅70公里的奥德河畔。纳粹第三帝国已经清晰地听到了丧钟的轰鸣。</p>"
            }
        ]
    },
    {
        "id": 9,
        "time": "1945.04",
        "stageName": "第三阶段：苏联全面反攻与纳粹德国的覆灭\n(1944.01 - 1945.05)",
        "event_title": "攻克柏林",
        "description": "苏军集结250万大军、4万门火炮，对纳粹德国首都柏林展开最后的总攻。在泽劳高地的惨烈突破后，苏军攻入柏林市区。4月30日，希特勒在总理府地下室绝望自杀。",
        "camera_offset": [1, 0],
        "routes": [
            { "name": "苏军包围柏林", "coords": [[15.54, 52.53], [13.40, 52.52]], "type": "allied", "label_offset": [-10, 30] }
        ],
        "focal_points": [
            {
                "name": "柏林", "coord": [13.40, 52.52], "type": "victory",
                "wikipedia_url": "https://zh.wikipedia.org/wiki/%E6%9F%8F%E6%9E%97%E6%88%98%E5%BD%B9",
                "detail": "<img src='assets/pic_berlin.jpg' class='modal-image'/><h3 class='modal-section-title'>末日余晖与废墟之战</h3><p>数万门火炮的齐射让柏林化为一片火海，狂热的党卫军和党卫军青年团在废墟中做着最后的困兽之斗。苏联红军战士踩着瓦砾，逐屋肃清了这座曾经象征着法西斯权力的城市。</p><h3 class='modal-section-title'>红旗升起，战争落幕</h3><p>5月2日，两名苏联士兵将一面红旗插上了浓烟滚滚的德国国会大厦圆顶。5月8日，德国正式签署无条件投降书，伟大的卫国战争与欧洲战场的反法西斯战争取得了最终胜利。</p>"
            }
        ]
    }
];