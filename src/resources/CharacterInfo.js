import Alm from './portraits/alm.png';
import Atlas from './portraits/atlas.png';
import Berkut from './portraits/berkut.png';
import Boey from './portraits/boey.png';
import Catria from './portraits/catria.png';
import Celica from './portraits/celica.png';
import Clair from './portraits/clair.png';
import Clive from './portraits/clive.png';
import Conrad from './portraits/conrad.png';
import Deen from './portraits/deen.png';
import Delthea from './portraits/delthea.png';
import Desaix from './portraits/desaix.png';
import Duma from './portraits/duma.png';
import Emma from './portraits/emma.png';
import Est from './portraits/est.png';
import Faye from './portraits/faye.png';
import Fernand from './portraits/fernand.png';
import Forsyth from './portraits/forsyth.png';
import Genny from './portraits/genny.png';
import Gray from './portraits/gray.png';
import Grieth from './portraits/grieth.png';
import Jedah from './portraits/jedah.png';
import Jesse from './portraits/jesse.png';
import Kamui from './portraits/kamui.png';
import Kliff from './portraits/kliff.png';
import Leon from './portraits/leon.png';
import Lukas from './portraits/lukas.png';
import Luthier from './portraits/luthier.png';
import Mae from './portraits/mae.png';
import Mathilda from './portraits/mathilda.png';
import Mila from './portraits/mila.png';
import Mycen from './portraits/mycen.png';
import Nomah from './portraits/nomah.png';
import Nuibaba from './portraits/nuibaba.png';
import Palla from './portraits/palla.png';
import Python from './portraits/python.png';
import Randal from './portraits/randal.png';
import Rinea from './portraits/rinea.png';
import Rudolf from './portraits/rudolf.png';
import Shade from './portraits/shade.png';
import Silque from './portraits/silque.png';
import Slayde from './portraits/slayde.png';
import Sonya from './portraits/sonya.png';
import Tatiana from './portraits/tatiana.png';
import Tobin from './portraits/tobin.png';
import Valbar from './portraits/valbar.png';
import Yuzu from './portraits/yuzu.png';
import Zeke from './portraits/zeke.png';

const CharacterInfo = [
    {
        id: 1,
        name: "Alm",
        img: Alm,
        class: "Fighter",
        age: "17",
        description: "One of the protagonists. He grew up in the village of Ram located at the borders of the Kingdom of Zofia. Trained by his grandfather Mycen, he has an exceptional sword arm. He joined the Deliverance to fight against Rigel to test his strength and because of his strong sense of justice."
    },
    {
        id: 2,
        name: "Atlas",
        img: Atlas,
        class: "Villager",
        age: "20",
        description: "A strong lumberjack whose younger siblings have been kidnapped by Grieth. With a strong sense of family, he plans on striking the bandit's stronghold, with or without help."
    },
    {
        id: 3,
        name: "Berkut",
        img: Berkut,
        class: "Paladin",
        age: "17",
        description: "Born into the Rigelian royal family; the Emperor’s nephew. A highly ambitious and prideful man. In a bid to become the next emperor, he directed the invasion of Zofia to prove his military prowess."
    },
    {
        id: 4,
        name: "Boey",
        img: Boey,
        class: "Mage",
        age: "16",
        description: "A mage who works at the Novis Priory. He serves Celica together with his childhood friend Mae. He accompanies Celica on her journey towards the Temple of Mila."
    },
    {
        id: 5,
        name: "Catria",
        img: Catria,
        class: "Pegasus Knight",
        age: "20",
        description: "The middle sister of the three Whitewings of Archanea. Often acts as the buffer between her older and younger sisters and rarely pushes her own thoughts on the matter. Has a cool and serious personality."
    },
    {
        id: 6,
        name: "Celica",
        img: Celica,
        class: "Priestess",
        age: "17",
        description: "One of the protagonists. She spent her childhood days with Alm but left the village after a certain incident, serving as a priestess at Novis. After having an ominous dream about Alm and to determine the cause of many unusual happenings in Zofia, she leaves on a journey to the Temple of Mila."
    },
    {
        id: 7,
        name: "Clair",
        img: Clair,
        class: "Pegasus Knight",
        age: "18",
        description: "Clive’s younger sister, also a member of the Deliverance. Her overbearingness is her one big flaw, not that she pays it any mind. A cheery and pretty girl who loves to interact with any and everyone."
    },
    {
        id: 8,
        name: "Clive",
        img: Clive,
        class: "Cavalier",
        age: "27",
        description: "Leader of the Deliverance, a young man hailing from the upper nobility. Once a member of the Knights of Zofia, but in response to Desaix’s rebellion he created the Deliverance."
    },
    {
        id: 9,
        name: "Deen",
        img: Deen,
        class: "Myrmidon",
        age: "30",
        description: "A mercenary who guards the north desert passage leading to the headquarters of Grieth the pillager. Quiet and stoic, he's a man of few words and an unknown past."
    },
    {
        id: 10,
        name: "Delthea",
        img: Delthea,
        class: "Mage",
        age: "13",
        description: "Luthier’s little sister. Possesses a talent for magic that surpasses even her brother, but she herself is not interested in pursuing the Mage’s path. Bright and cheerful, but a bit of a selfish girl. Currently in the midst of a rebellious period against Luthier.",
    },
    {
        id: 11,
        name: "Desaix",
        img: Desaix,
        class: "Baron",
        age: "43",
        description: "The chancellor of Zofia. He wishes to have absolute power, and for that, harming Zofia and its royalty, as well as allying with Rigel is nothing but the next stepping stone in his tyrannic rise."
    },
    {
        id: 12,
        name: "Duma",
        img: Duma,
        class: "Unknown",
        age: "Unknown",
        description: "The God who watches over Valentia's northern region of Rigel. While he belived that humans needed to struggle, never intervening, he had honored the pact never to invade Zofia. However, Mila's kingdom has been attacked and Duma doesn't seem to be taking action, what is he doing?"
    },
    {
        id: 13,
        name: "Emma",
        img: Emma,
        class: "Falcon Knight",
        age: "13",
        description: "A traveler from another land. While young and inexperienced, she proves to be responsible and determined, all while maintaning a cheerful personality. Only available via DLC."
    },
    {
        id: 14,
        name: "Est",
        img: Est,
        class: "Pegasus Knight",
        age: "16",
        description: "The youngest of the three Whitewing sisters from Archanea. As the youngest child, she’s pure and innocent and often gets told off by her sisters. Cheerful and chatty with a straight-forward personality."
    },
    {
        id: 15,
        name: "Faye",
        img: Faye,
        class: "Villager",
        age: "18",
        description: "A childhood friend of Alm’s who lives in Ram Village. Has been dreaming of Alm ever since childhood. She joined the Deliverance to keep close to Alm."
    },
    {
        id: 16,
        name: "Fernand",
        img: Fernand,
        class: "Cavalier",
        age: "Unknown",
        description: "A Zofian noble, with a disdain for the lower class. As Clive's right-hand man, he respects his friend's decisions regarding increasing the Deliverance's numbers with commoners, but due to his past with commonfolk, every day he grows more upset with the group."
    },
    {
        id: 17,
        name: "Forsyth",
        img: Forsyth,
        class: "Soldier",
        age: "25",
        description: "A passionate man who always dreamed of becoming a knight, despite his social standing. He sees in Clive his role model, dilligently studying in him, how to be a knight."
    },
    {
        id: 18,
        name: "Genny",
        img: Genny,
        class: "Cleric",
        age: "15",
        description: "A cleric who lives in the Novis Priory. She’s like a little sister to Celica. She accompanies Celica on her journey towards the Temple of Mila."
    },
    {
        id: 19,
        name: "Gray",
        img: Gray,
        class: "Villager",
        age: "18",
        description: "A childhood friend of Alm’s who lives in Ram Village. Has an aloof personality. Since he was born in a merchant family he’s chatty and well informed. Along with Alm, he joined the Deliverance."
    },
    {
        id: 20,
        name: "Grieth",
        img: Grieth,
        class: "Dread Fighter",
        age: "Unknown",
        description: "An opportunist pirate who rose to the top as Zofia's so-called bandit king. With his fearless and defiant attitude, he remorselessly claims anything for profit, including people."
    },
    {
        id: 21,
        name: "Jedah",
        img: Jedah,
        class: "Cantor",
        age: "147",
        description: "A Cantor of the Duma Faithful and a devout servant of the War Father Duma. While he leads the mages of the Rigelian Empire to invade Zofia, he dispatches minions to assault Celica for reasons unknown. As his unearthly appearance suggests, he wields immensely powerful magic."
    },
    {
        id: 22,
        name: "Jesse",
        img: Jesse,
        class: "Mercenary",
        age: "24",
        description: "A flirty mercenary who enjoys life without restrictions. A big dreamer, he wants to make a nation of mercenaries, where everyone is free."
    },
    {
        id: 23,
        name: "Kamui",
        img: Kamui,
        class: "Mercenary",
        age: "28",
        description: "A mercenary from a distant nation. He was hired by Valbar for the purpose of revenge. Has a carefree and easy-going personality. A freedom-loving drifter who hates being tied down."
    },
    {
        id: 24,
        name: "Kliff",
        img: Kliff,
        class: "Villager",
        age: "15",
        description: "A childhood friend of Alm’s who lives in Ram Village. Loves reading books and studying history, and acts surprisingly maturely for his age. Because he was interested in seeing the world, he joined the Deliverance."
    },
    {
        id: 25,
        name: "Leon",
        img: Leon,
        class: "Archer",
        age: "24",
        description: "A pretty boy ex-soldier who follows his big brother figure Valbar. Has a frank personality and a sharp tongue, but he’s an honest man who tells no lies."
    },
    {
        id: 26,
        name: "Lukas",
        img: Lukas,
        class: "Soldier",
        age: "24",
        description: "A pretty boy ex-soldier who follows his love Valbar. Has a frank personality and a sharp tongue, but he’s an honest man who tells no lies."
    },
    {
        id: 27,
        name: "Luthier",
        img: Luthier,
        class: "Mage",
        age: "22",
        description: "A mage who lives in a village located at the Zofian borders. He has fully devoted himself to mastering the art of sorcery and shows nary an interest to the people of society. Finds it impossible to deal with his younger sister’s selfish streaks."
    },
    {
        id: 28,
        name: "Mae",
        img: Mae,
        class: "Mage",
        age: "17",
        description: "A mage who works at the Novis Priory. Her role is Celica’s servant, but the two are also close friends. She accompanies Celica on her journey towards the Temple of Mila."
    },
    {
        id: 29,
        name: "Mathilda",
        img: Mathilda,
        class: "Paladin",
        age: "28",
        description: "An excellent knight and one of the founders of the Deliverance. While confident on her abilities, she sometimes worries she might be casting a shadow on Clive, who is the leader of the Deliverance and her husband."
    },
    {
        id: 30,
        name: "Mila",
        img: Mila,
        class: "Unknown",
        age: "Unknown",
        description: "The Goddess who watches over Valentia’s southern region of Zofia. The Kingdom of Zofia once prospered with Mila’s blessings, but it has recently been troubled by poor harvests, the appearance of monsters and even an invasion by the Rigelian Empire. During this time of crisis, what is Mila doing?"
    },
    {
        id: 31,
        name: "Mycen",
        img: Mycen,
        class: "Gold Knight",
        age: "65",
        description: "A former Rigelian who became famous as a Zofian general. A hero among fellow commoners, as his title as a knight would be unthinkable for someone without noble blood, but was made possible by merit alone."
    },
    {
        id: 32,
        name: "Nomah",
        img: Nomah,
        class: "Sage",
        age: "71",
        description: "Mycen's old friend and Mila worshipper. He is a sage who takes care of the priory where Celica was raised, warning her of the dangers ahead before she sets out on her journey."
    },
    {
        id: 33,
        name: "Nuibaba",
        img: Nuibaba,
        class: "Witch",
        age: "124",
        description: "A witch from the Duma faithful. Obsessed with power and beauty, she has secluded herself in the woods, where she sacrifices beautiful women in exchange for longevity."
    },
    {
        id: 34,
        name: "Palla",
        img: Palla,
        class: "Pegasus Knight",
        age: "23",
        description: "The eldest of the three Whitewing sisters from Archanea. She’s mild-mannered and down to earth, always caring about her sisters. However she also has a stubborn side and absolutely will not budge after a decision is made."
    },
    {
        id: 35,
        name: "Python",
        img: Python,
        class: "Archer",
        age: "25",
        description: "A member of the Deliverance. Born in a local town, he was encouraged by a childhood friend to join the army. He tends to view the world from a cynical angle, but he can be surprisingly serious and performs his duties with diligence."
    },
    {
        id: 36,
        name: "Randal",
        img: Randal,
        class: "Paladin",
        age: "Unknown",
        description: "A traveler from another land. With a love for gambling, and a laid back personality, he comes off as a vagabond, yet his experience and combat skills show once he needs to become serious. Only available via DLC."
    },
    {
        id: 37,
        name: "Rinea",
        img: Rinea,
        class: "Unknown",
        age: "Unknown",
        description: "A noblewoman who loves nature and dancing. After becoming Berkut's wife, she feels pressure to become a worthy fiancee, as she comes from a lesser house."
    },
    {
        id: 38,
        name: "Rudolf",
        img: Rudolf,
        class: "Gold Knight",
        age: "50",
        description: "The fourth Emperor of Rigel. As the one responsible for the invasion of Zofia, Rudolf is surrounded by mysteries regarding his motivations and ability to oppose a god."
    },
    {
        id: 39,
        name: "Shade",
        img: Shade,
        class: "Saint",
        age: "Unknown",
        description: "A traveler from another land. Wise and knowledgeable, she behaves like an older sister, but doesn't take well to being made fun of. Only available via DLC."
    },
    {
        id: 40,
        name: "Silque",
        img: Silque,
        class: "Cleric",
        age: "19",
        description: "The eldest of the three Whitewing sisters from Archanea. She’s mild-mannered and down to earth, always caring about her sisters. However she also has a stubborn side and absolutely will not budge after a decision is made."
    },
    {
        id: 41,
        name: "Slayde",
        img: Slayde,
        class: "Cavalier",
        age: "32",
        description: "A slimy knight serving directly under Desaix. His job is solely to follow commands from the tyrannical chancellor, but he makes sure to enjoy his orders."
    },
    {
        id: 42,
        name: "Sonya",
        img: Sonya,
        class: "Mage",
        age: "25",
        description: "A mage who guards the south desert passage leading to the headquarters of Grieth the pillager. She stands in Celica’s path, preventing her from crossing the desert. Cool and unyielding, she’s a lady who oozes womanly charm. Apparently burdened with an awful past, but hates to talk about it."
    },
    {
        id: 43,
        name: "Tatiana",
        img: Tatiana,
        class: "Saint",
        age: "28",
        description: "A Rigelian woman in service of the church of Duma. Good-natured, amiable and clumsy, she's a very approachable person, going as far as caring for a complete stranger with no memories, in exchange for nothing."
    },
    {
        id: 44,
        name: "Tobin",
        img: Tobin,
        class: "Villager",
        age: "17",
        description: "A childhood friend of Alm’s who lives in Ram Village. He’s the eldest son of a big family and fights for the Deliverance to earn money. He’s straightforward, simple and serious, but terrible at reading the mood."
    },
    {
        id: 45,
        name: "Valbar",
        img: Valbar,
        class: "Knight",
        age: "31",
        description: "An ex-soldier who seeks revenge on Barth, the pirate who murdered his family. He joined Celica to exact his vengeance. Headstrong and always trying to help people with nary a regard of the consequences."
    },
    {
        id: 46,
        name: "Yuzu",
        img: Yuzu,
        class: "Priestess",
        age: "Unknown",
        description: "A traveler from another land. Has a very serious personality, keen to prove her swordswoman skills, but is a little social awkward. Only available via DLC."
    },
    {
        id: 47,
        name: "Zeke",
        img: Zeke,
        class: "Gold Knight",
        age: "29",
        description: "A knight of unknown origin who serves the Rigelian Empire. Has lost all recollection of his past, including his original name. After washing up at Rigel, his undeniable skills earned him the position of general. He opposes Alm not merely because he’s a Rigelian general, but because of some other reason."
    },
    {
        id: "48",
        name: "???",
        img: Conrad,
        class: "Paladin",
        age: "21",
        description: "A mysterious man who appeared before Celica during her time of need. His true face and intentions are hidden by his mask. He appears to be a capable knight, but is he a friend or foe…?"
    }
]

export default CharacterInfo;