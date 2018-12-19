//汉化杂项
var cnItems = {
    'village': '村庄',
    'forest': '森林',
    'friendly': '友好',
    'neutral': '中立',
    'hostile': '敌对',
    //汉化脚本
    'Furs': '皮毛',
    'Unobtainium': '难得素',
    'Catnip': '猫薄荷',
    'Wood': '木材',
    'Minerals': '矿物',
    'Coal': '煤',
    'Iron': '铁',
    'Titanium': '钛',
    'Gold': '黄金',
    'Oil': '石油',
    'Uranium': '铀',
    'Manpower': '喵力',
    'Science': '科学点',
    'Culture': '文化点',
    'Faith': '信仰',
    'Kittens': '猫咪',
    'Zebras': '斑马',
    'Starchart': '星图',
    'Antimatter': '反物质',
    'TemporalFlux': '时间通量',
    'Gflops': '浮点运算能力',
    'Hashrates': '哈希值',
    'Ivory': '象牙',
    'Spice': '香料',
    'Unicorns': '独角兽',
    'Alicorn': '翼角兽',
    'Necrocorn': '死灵兽',
    'Tears': '眼泪',
    'Karma': '业',
    'Paragon': '领导力',
    'BurnedParagon': '燃烧领导力',
    'TimeCrystal': '时间水晶',
    'Sorrow': '悲伤',
    'Relic': '圣遗物',
    'Void': '虚空',
    'ElderBox': '礼盒',
    'WrappingPaper': '包装纸',
    'Beam': '木梁',
    'Slab': '石板',
    'Plate': '金属板',
    'Steel': '钢',
    'Concrete': '混凝土',
    'Gear': '齿轮',
    'Alloy': '合金',
    'Eludium': 'E合金',
    'Scaffold': '脚手架',
    'Ship': '船',
    'Tanker': '油轮',
    'Kerosene': '煤油',
    'Parchment': '羊皮纸',
    'Manuscript': '手稿',
    'Compendium': '摘要',
    'Blueprint': '蓝图',
    'Thorium': '钍',
    'Megalith': '巨石',
    'Dragons': '龙',
    'Zebras': '斑马',
    'Lizards': '蜥蜴',
    'Sharks': '鲨鱼',
    'Griffins': '狮鹫',
    'Nagas': '娜迦',
    'Spiders': '蜘蛛',
    'Leviathans': '利维坦',
    'Spring': '春季',
    'Summer': '夏季',
    'Autumn': '秋季',
    'Winter': '冬季',
    'Hut': '小屋',
    'LogHouse': '木屋',
    'Mansion': '宅邸',
    'Workshop': '工作台',
    'Factory': '工厂',
    'Field': '猫薄荷田',
    'Pasture': '牧场',
    'SolarFarm': '太阳能发电站',
    'Mine': '矿井',
    'LumberMill': '木材厂',
    'Aqueduct': '水渠',
    'HydroPlant': '水电站',
    'OilWell': '油井',
    'Quarry': '采石场',
    'Smelter': '熔炉',
    'Biolab': '生物实验室',
    'Calciner': '锻烧炉',
    'Reactor': '反应堆',
    'Accelerator': '加速器',
    'Steamworks': '蒸汽机',
    'Magneto': '磁发电机',
    'Library': '图书馆',
    'Academy': '研究院',
    'Observatory': '天文台',
    'Amphitheatre': '剧场',
    'BroadcastTower': '广播塔',
    'Tradepost': '交易站',
    'Chapel': '教堂',
    'Temple': '寺庙',
    'Mint': '铸物厂',
    'UnicornPasture': '独角兽牧场',
    'Ziggurat': '庙塔',
    'Chronosphere': '空间转移发生器',
    'Barn': '粮仓',
    'Harbor': '港口',
    'Warehouse': '仓库',
    'SpaceElevator': '太空电梯',
    'Sattelite': '人造卫星',
    'SpaceStation': '空间站',
    'MoonOutpost': '月球前哨',
    'MoonBase': '月球基地',
    'PlanetCracker': '星球肢解',
    'Hydrofracturer': '流体切割',
    'SpiceRefinery': '香料提炼厂',
    'ResearchVessel': '研究船',
    'OrbitalArray': '轨道阵列',
    'Sunlifter': '太阳能抽取',
    'ContainmentChamber': '遏制室',
    'Cryostation': '低温恒温储存站',
    'SpaceBeacon': '太空灯塔',
    'TerraformingStation': '星球改造站',
    'Hydroponics': '水栽培',
    'Tectonic': '构造',
    'Solarchant': '阳光赞歌',
    'Scholasticism': '经院哲学',
    'GoldenSpire': '金色塔尖',
    'SunAltar': '太阳祭坛',
    'StainedGlass': '彩色玻璃',
    'SolarRevolution': '太阳革命',
    'Basilica': '大教堂',
    'Templars': '圣殿骑士',
    'Apocripha': '新约外传',
    'Transcendence': '超越',
    'Enable Scientists': '启用科学家',
    'Building': '建筑',
    'Space': '太空',
    'Crafting': '工艺',
    'Trading': '贸易',
    'Hunting': '狩猎',
    'Festival': '节日',
    'Religion': '宗教',
    'Blackcoin': '黑币',
    'Bloodstone': '血石',
    'Concrate': '混凝土',
    'Compedium': '概要',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

};

function cnItem(text) {
    //数组里面有的，返回中文
    for (var i in cnItems) {
        if (text == i) {
            return cnItems[i];
        }
    }
    //数组里面没有的，原样返回
    for (var i in cnItems) {
        if (text != i) {
//            console.log("需汉化的英文Item：" + text);
            return text;
        }
    }
}



//汉化标题
var cntit = {
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',


};

function cntitle(text) {
    //数组里面有的，返回中文
    for (var i in cntit) {
        if (text == i) {
            return cntit[i];
        }
    }
    //数组里面没有的，原样返回
    for (var i in cntit) {
        if (text != i) {
            console.log("需汉化的英文标题：" + text);
            return text;
        }
    }
}
