// ==UserScript==
// @name         Emoji Tooltip
// @namespace    GorillaSapiens
// @version      0.1
// @description  Displays tooltip with emoji information when hovering over emojis
// @author       Gorilla Sapiens
// @match        *://*/*
// @grant        GM_addStyle
// ==/UserScript==

// Define the emoji data
const emojiData = {
  // Add more emoji data here...
  '🀄': {
    canonicalName: 'MAHJONG TILE RED DRAGON',
    slangMeanings: ['mahjong'],
  },
  '🃏': {
    canonicalName: 'PLAYING CARD BLACK JOKER',
    slangMeanings: ['black_joker'],
  },
  '🆎': {
    canonicalName: 'NEGATIVE SQUARED AB',
    slangMeanings: ['ab'],
  },
  '🆑': {
    canonicalName: 'SQUARED CL',
    slangMeanings: ['cl'],
  },
  '🆒': {
    canonicalName: 'SQUARED COOL',
    slangMeanings: ['cool'],
  },
  '🆓': {
    canonicalName: 'SQUARED FREE',
    slangMeanings: ['free'],
  },
  '🆔': {
    canonicalName: 'SQUARED ID',
    slangMeanings: ['id'],
  },
  '🆕': {
    canonicalName: 'SQUARED NEW',
    slangMeanings: ['new'],
  },
  '🆖': {
    canonicalName: 'SQUARED NG',
    slangMeanings: ['ng'],
  },
  '🆗': {
    canonicalName: 'SQUARED OK',
    slangMeanings: ['ok'],
  },
  '🆘': {
    canonicalName: 'SQUARED SOS',
    slangMeanings: ['sos'],
  },
  '🆙': {
    canonicalName: 'SQUARED UP WITH EXCLAMATION MARK',
    slangMeanings: ['up'],
  },
  '🆚': {
    canonicalName: 'SQUARED VS',
    slangMeanings: ['vs'],
  },
  '🈁': {
    canonicalName: 'SQUARED KATAKANA KOKO',
    slangMeanings: ['koko'],
  },
  '🈚': {
    canonicalName: 'SQUARED CJK UNIFIED IDEOGRAPH-7121',
    slangMeanings: ['u7121'],
  },
  '🈯': {
    canonicalName: 'SQUARED CJK UNIFIED IDEOGRAPH-6307',
    slangMeanings: ['u6307'],
  },
  '🈲': {
    canonicalName: 'SQUARED CJK UNIFIED IDEOGRAPH-7981',
    slangMeanings: ['u7981'],
  },
  '🈳': {
    canonicalName: 'SQUARED CJK UNIFIED IDEOGRAPH-7A7A',
    slangMeanings: ['u7a7a'],
  },
  '🈴': {
    canonicalName: 'SQUARED CJK UNIFIED IDEOGRAPH-5408',
    slangMeanings: ['u5408'],
  },
  '🈵': {
    canonicalName: 'SQUARED CJK UNIFIED IDEOGRAPH-6E80',
    slangMeanings: ['u6e80'],
  },
  '🈶': {
    canonicalName: 'SQUARED CJK UNIFIED IDEOGRAPH-6709',
    slangMeanings: ['u6709'],
  },
  '🈸': {
    canonicalName: 'SQUARED CJK UNIFIED IDEOGRAPH-7533',
    slangMeanings: ['u7533'],
  },
  '🈹': {
    canonicalName: 'SQUARED CJK UNIFIED IDEOGRAPH-5272',
    slangMeanings: ['u5272'],
  },
  '🈺': {
    canonicalName: 'SQUARED CJK UNIFIED IDEOGRAPH-55B6',
    slangMeanings: ['u55b6'],
  },
  '🉐': {
    canonicalName: 'CIRCLED IDEOGRAPH ADVANTAGE',
    slangMeanings: ['ideograph_advantage'],
  },
  '🉑': {
    canonicalName: 'CIRCLED IDEOGRAPH ACCEPT',
    slangMeanings: ['accept'],
  },
  '🌀': {
    canonicalName: 'CYCLONE',
    slangMeanings: ['cyclone'],
  },
  '🌁': {
    canonicalName: 'FOGGY',
    slangMeanings: ['foggy'],
  },
  '🌂': {
    canonicalName: 'CLOSED UMBRELLA',
    slangMeanings: ['closed_umbrella'],
  },
  '🌃': {
    canonicalName: 'NIGHT WITH STARS',
    slangMeanings: ['night_with_stars'],
  },
  '🌄': {
    canonicalName: 'SUNRISE OVER MOUNTAINS',
    slangMeanings: ['sunrise_over_mountains'],
  },
  '🌅': {
    canonicalName: 'SUNRISE',
    slangMeanings: ['sunrise'],
  },
  '🌆': {
    canonicalName: 'CITYSCAPE AT DUSK',
    slangMeanings: ['city_sunset'],
  },
  '🌇': {
    canonicalName: 'SUNSET OVER BUILDINGS',
    slangMeanings: ['city_sunrise'],
  },
  '🌈': {
    canonicalName: 'RAINBOW',
    slangMeanings: ['rainbow'],
  },
  '🌉': {
    canonicalName: 'BRIDGE AT NIGHT',
    slangMeanings: ['bridge_at_night'],
  },
  '🌊': {
    canonicalName: 'WATER WAVE',
    slangMeanings: ['ocean'],
  },
  '🌋': {
    canonicalName: 'VOLCANO',
    slangMeanings: ['volcano'],
  },
  '🌌': {
    canonicalName: 'MILKY WAY',
    slangMeanings: ['milky_way'],
  },
  '🌍': {
    canonicalName: 'EARTH GLOBE EUROPE-AFRICA',
    slangMeanings: ['earth_africa'],
  },
  '🌎': {
    canonicalName: 'EARTH GLOBE AMERICAS',
    slangMeanings: ['earth_americas'],
  },
  '🌏': {
    canonicalName: 'EARTH GLOBE ASIA-AUSTRALIA',
    slangMeanings: ['earth_asia'],
  },
  '🌐': {
    canonicalName: 'GLOBE WITH MERIDIANS',
    slangMeanings: ['globe_with_meridians'],
  },
  '🌑': {
    canonicalName: 'NEW MOON SYMBOL',
    slangMeanings: ['new_moon'],
  },
  '🌒': {
    canonicalName: 'WAXING CRESCENT MOON SYMBOL',
    slangMeanings: ['waxing_crescent_moon'],
  },
  '🌓': {
    canonicalName: 'FIRST QUARTER MOON SYMBOL',
    slangMeanings: ['first_quarter_moon'],
  },
  '🌔': {
    canonicalName: 'WAXING GIBBOUS MOON SYMBOL',
    slangMeanings: ['moon', 'waxing_gibbous_moon'],
  },
  '🌕': {
    canonicalName: 'FULL MOON SYMBOL',
    slangMeanings: ['full_moon'],
  },
  '🌖': {
    canonicalName: 'WANING GIBBOUS MOON SYMBOL',
    slangMeanings: ['waning_gibbous_moon'],
  },
  '🌗': {
    canonicalName: 'LAST QUARTER MOON SYMBOL',
    slangMeanings: ['last_quarter_moon'],
  },
  '🌘': {
    canonicalName: 'WANING CRESCENT MOON SYMBOL',
    slangMeanings: ['waning_crescent_moon'],
  },
  '🌙': {
    canonicalName: 'CRESCENT MOON',
    slangMeanings: ['crescent_moon'],
  },
  '🌚': {
    canonicalName: 'NEW MOON WITH FACE',
    slangMeanings: ['new_moon_with_face'],
  },
  '🌛': {
    canonicalName: 'FIRST QUARTER MOON WITH FACE',
    slangMeanings: ['first_quarter_moon_with_face'],
  },
  '🌜': {
    canonicalName: 'LAST QUARTER MOON WITH FACE',
    slangMeanings: ['last_quarter_moon_with_face'],
  },
  '🌝': {
    canonicalName: 'FULL MOON WITH FACE',
    slangMeanings: ['full_moon_with_face'],
  },
  '🌞': {
    canonicalName: 'SUN WITH FACE',
    slangMeanings: ['sun_with_face'],
  },
  '🌟': {
    canonicalName: 'GLOWING STAR',
    slangMeanings: ['star2'],
  },
  '🌠': {
    canonicalName: 'SHOOTING STAR',
    slangMeanings: ['stars'],
  },
  '🌭': {
    canonicalName: 'HOT DOG',
    slangMeanings: ['hotdog'],
  },
  '🌮': {
    canonicalName: 'TACO',
    slangMeanings: ['taco'],
  },
  '🌯': {
    canonicalName: 'BURRITO',
    slangMeanings: ['burrito'],
  },
  '🌰': {
    canonicalName: 'CHESTNUT',
    slangMeanings: ['chestnut'],
  },
  '🌱': {
    canonicalName: 'SEEDLING',
    slangMeanings: ['seedling'],
  },
  '🌲': {
    canonicalName: 'EVERGREEN TREE',
    slangMeanings: ['evergreen_tree'],
  },
  '🌳': {
    canonicalName: 'DECIDUOUS TREE',
    slangMeanings: ['deciduous_tree'],
  },
  '🌴': {
    canonicalName: 'PALM TREE',
    slangMeanings: ['palm_tree'],
  },
  '🌵': {
    canonicalName: 'CACTUS',
    slangMeanings: ['cactus'],
  },
  '🌷': {
    canonicalName: 'TULIP',
    slangMeanings: ['tulip'],
  },
  '🌸': {
    canonicalName: 'CHERRY BLOSSOM',
    slangMeanings: ['cherry_blossom'],
  },
  '🌹': {
    canonicalName: 'ROSE',
    slangMeanings: ['rose'],
  },
  '🌺': {
    canonicalName: 'HIBISCUS',
    slangMeanings: ['hibiscus'],
  },
  '🌻': {
    canonicalName: 'SUNFLOWER',
    slangMeanings: ['sunflower'],
  },
  '🌼': {
    canonicalName: 'BLOSSOM',
    slangMeanings: ['blossom'],
  },
  '🌽': {
    canonicalName: 'EAR OF MAIZE',
    slangMeanings: ['corn', 'ear of corn', 'porn', 'pornography'],
  },
  '🌾': {
    canonicalName: 'EAR OF RICE',
    slangMeanings: ['ear_of_rice'],
  },
  '🌿': {
    canonicalName: 'HERB',
    slangMeanings: ['herb'],
  },
  '🍀': {
    canonicalName: 'FOUR LEAF CLOVER',
    slangMeanings: ['four_leaf_clover'],
  },
  '🍁': {
    canonicalName: 'MAPLE LEAF',
    slangMeanings: ['maple_leaf'],
  },
  '🍂': {
    canonicalName: 'FALLEN LEAF',
    slangMeanings: ['fallen_leaf'],
  },
  '🍃': {
    canonicalName: 'LEAF FLUTTERING IN WIND',
    slangMeanings: ['leaves'],
  },
  '🍄': {
    canonicalName: 'MUSHROOM',
    slangMeanings: ['mushroom'],
  },
  '🍅': {
    canonicalName: 'TOMATO',
    slangMeanings: ['tomato'],
  },
  '🍆': {
    canonicalName: 'AUBERGINE',
    slangMeanings: ['eggplant', 'penis'],
  },
  '🍇': {
    canonicalName: 'GRAPES',
    slangMeanings: ['grapes'],
  },
  '🍈': {
    canonicalName: 'MELON',
    slangMeanings: ['melon'],
  },
  '🍉': {
    canonicalName: 'WATERMELON',
    slangMeanings: ['watermelon'],
  },
  '🍊': {
    canonicalName: 'TANGERINE',
    slangMeanings: ['tangerine'],
  },
  '🍋': {
    canonicalName: 'LEMON',
    slangMeanings: ['lemon'],
  },
  '🍌': {
    canonicalName: 'BANANA',
    slangMeanings: ['banana'],
  },
  '🍍': {
    canonicalName: 'PINEAPPLE',
    slangMeanings: ['pineapple', 'sharing partners', 'swinging'],
  },
  '🍎': {
    canonicalName: 'RED APPLE',
    slangMeanings: ['apple'],
  },
  '🍏': {
    canonicalName: 'GREEN APPLE',
    slangMeanings: ['green_apple'],
  },
  '🍐': {
    canonicalName: 'PEAR',
    slangMeanings: ['pear'],
  },
  '🍑': {
    canonicalName: 'PEACH',
    slangMeanings: ['ass', 'bottom', 'buttocks', 'peach'],
  },
  '🍒': {
    canonicalName: 'CHERRIES',
    slangMeanings: ['breasts', 'cherries'],
  },
  '🍓': {
    canonicalName: 'STRAWBERRY',
    slangMeanings: ['strawberry'],
  },
  '🍔': {
    canonicalName: 'HAMBURGER',
    slangMeanings: ['hamburger'],
  },
  '🍕': {
    canonicalName: 'SLICE OF PIZZA',
    slangMeanings: ['pizza'],
  },
  '🍖': {
    canonicalName: 'MEAT ON BONE',
    slangMeanings: ['meat_on_bone'],
  },
  '🍗': {
    canonicalName: 'POULTRY LEG',
    slangMeanings: ['poultry_leg'],
  },
  '🍘': {
    canonicalName: 'RICE CRACKER',
    slangMeanings: ['rice_cracker'],
  },
  '🍙': {
    canonicalName: 'RICE BALL',
    slangMeanings: ['rice_ball'],
  },
  '🍚': {
    canonicalName: 'COOKED RICE',
    slangMeanings: ['rice'],
  },
  '🍛': {
    canonicalName: 'CURRY AND RICE',
    slangMeanings: ['curry'],
  },
  '🍜': {
    canonicalName: 'STEAMING BOWL',
    slangMeanings: ['noodles', 'noods', 'nude photographs', 'ramen', 'steaming bowl'],
  },
  '🍝': {
    canonicalName: 'SPAGHETTI',
    slangMeanings: ['spaghetti'],
  },
  '🍞': {
    canonicalName: 'BREAD',
    slangMeanings: ['bread'],
  },
  '🍟': {
    canonicalName: 'FRENCH FRIES',
    slangMeanings: ['fries'],
  },
  '🍠': {
    canonicalName: 'ROASTED SWEET POTATO',
    slangMeanings: ['sweet_potato'],
  },
  '🍡': {
    canonicalName: 'DANGO',
    slangMeanings: ['dango'],
  },
  '🍢': {
    canonicalName: 'ODEN',
    slangMeanings: ['oden'],
  },
  '🍣': {
    canonicalName: 'SUSHI',
    slangMeanings: ['sushi'],
  },
  '🍤': {
    canonicalName: 'FRIED SHRIMP',
    slangMeanings: ['fried_shrimp'],
  },
  '🍥': {
    canonicalName: 'FISH CAKE WITH SWIRL DESIGN',
    slangMeanings: ['fish_cake'],
  },
  '🍦': {
    canonicalName: 'SOFT ICE CREAM',
    slangMeanings: ['icecream'],
  },
  '🍧': {
    canonicalName: 'SHAVED ICE',
    slangMeanings: ['shaved_ice'],
  },
  '🍨': {
    canonicalName: 'ICE CREAM',
    slangMeanings: ['ice_cream'],
  },
  '🍩': {
    canonicalName: 'DOUGHNUT',
    slangMeanings: ['doughnut'],
  },
  '🍪': {
    canonicalName: 'COOKIE',
    slangMeanings: ['cookie'],
  },
  '🍫': {
    canonicalName: 'CHOCOLATE BAR',
    slangMeanings: ['chocolate_bar'],
  },
  '🍬': {
    canonicalName: 'CANDY',
    slangMeanings: ['candy'],
  },
  '🍭': {
    canonicalName: 'LOLLIPOP',
    slangMeanings: ['lollipop'],
  },
  '🍮': {
    canonicalName: 'CUSTARD',
    slangMeanings: ['custard'],
  },
  '🍯': {
    canonicalName: 'HONEY POT',
    slangMeanings: ['honey_pot'],
  },
  '🍰': {
    canonicalName: 'SHORTCAKE',
    slangMeanings: ['cake'],
  },
  '🍱': {
    canonicalName: 'BENTO BOX',
    slangMeanings: ['bento'],
  },
  '🍲': {
    canonicalName: 'POT OF FOOD',
    slangMeanings: ['stew'],
  },
  '🍳': {
    canonicalName: 'COOKING',
    slangMeanings: ['cooking', 'fried_egg'],
  },
  '🍴': {
    canonicalName: 'FORK AND KNIFE',
    slangMeanings: ['fork_and_knife'],
  },
  '🍵': {
    canonicalName: 'TEACUP WITHOUT HANDLE',
    slangMeanings: ['tea'],
  },
  '🍶': {
    canonicalName: 'SAKE BOTTLE AND CUP',
    slangMeanings: ['sake'],
  },
  '🍷': {
    canonicalName: 'WINE GLASS',
    slangMeanings: ['wine_glass'],
  },
  '🍸': {
    canonicalName: 'COCKTAIL GLASS',
    slangMeanings: ['cocktail'],
  },
  '🍹': {
    canonicalName: 'TROPICAL DRINK',
    slangMeanings: ['tropical_drink'],
  },
  '🍺': {
    canonicalName: 'BEER MUG',
    slangMeanings: ['beer'],
  },
  '🍻': {
    canonicalName: 'CLINKING BEER MUGS',
    slangMeanings: ['beers'],
  },
  '🍼': {
    canonicalName: 'BABY BOTTLE',
    slangMeanings: ['baby_bottle'],
  },
  '🍾': {
    canonicalName: 'BOTTLE WITH POPPING CORK',
    slangMeanings: ['champagne'],
  },
  '🍿': {
    canonicalName: 'POPCORN',
    slangMeanings: ['popcorn'],
  },
  '🎀': {
    canonicalName: 'RIBBON',
    slangMeanings: ['ribbon'],
  },
  '🎁': {
    canonicalName: 'WRAPPED PRESENT',
    slangMeanings: ['gift'],
  },
  '🎂': {
    canonicalName: 'BIRTHDAY CAKE',
    slangMeanings: ['birthday'],
  },
  '🎃': {
    canonicalName: 'JACK-O-LANTERN',
    slangMeanings: ['jack_o_lantern'],
  },
  '🎄': {
    canonicalName: 'CHRISTMAS TREE',
    slangMeanings: ['christmas_tree'],
  },
  '🎅': {
    canonicalName: 'FATHER CHRISTMAS',
    slangMeanings: ['santa'],
  },
  '🎆': {
    canonicalName: 'FIREWORKS',
    slangMeanings: ['fireworks'],
  },
  '🎇': {
    canonicalName: 'FIREWORK SPARKLER',
    slangMeanings: ['sparkler'],
  },
  '🎈': {
    canonicalName: 'BALLOON',
    slangMeanings: ['balloon'],
  },
  '🎉': {
    canonicalName: 'PARTY POPPER',
    slangMeanings: ['tada'],
  },
  '🎊': {
    canonicalName: 'CONFETTI BALL',
    slangMeanings: ['confetti_ball'],
  },
  '🎋': {
    canonicalName: 'TANABATA TREE',
    slangMeanings: ['tanabata_tree'],
  },
  '🎌': {
    canonicalName: 'CROSSED FLAGS',
    slangMeanings: ['crossed_flags'],
  },
  '🎍': {
    canonicalName: 'PINE DECORATION',
    slangMeanings: ['bamboo'],
  },
  '🎎': {
    canonicalName: 'JAPANESE DOLLS',
    slangMeanings: ['dolls'],
  },
  '🎏': {
    canonicalName: 'CARP STREAMER',
    slangMeanings: ['flags'],
  },
  '🎐': {
    canonicalName: 'WIND CHIME',
    slangMeanings: ['wind_chime'],
  },
  '🎑': {
    canonicalName: 'MOON VIEWING CEREMONY',
    slangMeanings: ['rice_scene'],
  },
  '🎒': {
    canonicalName: 'SCHOOL SATCHEL',
    slangMeanings: ['school_satchel'],
  },
  '🎓': {
    canonicalName: 'GRADUATION CAP',
    slangMeanings: ['mortar_board'],
  },
  '🎠': {
    canonicalName: 'CAROUSEL HORSE',
    slangMeanings: ['carousel_horse'],
  },
  '🎡': {
    canonicalName: 'FERRIS WHEEL',
    slangMeanings: ['ferris_wheel'],
  },
  '🎢': {
    canonicalName: 'ROLLER COASTER',
    slangMeanings: ['roller_coaster'],
  },
  '🎣': {
    canonicalName: 'FISHING POLE AND FISH',
    slangMeanings: ['fishing_pole_and_fish'],
  },
  '🎤': {
    canonicalName: 'MICROPHONE',
    slangMeanings: ['microphone'],
  },
  '🎥': {
    canonicalName: 'MOVIE CAMERA',
    slangMeanings: ['movie_camera'],
  },
  '🎦': {
    canonicalName: 'CINEMA',
    slangMeanings: ['cinema'],
  },
  '🎧': {
    canonicalName: 'HEADPHONE',
    slangMeanings: ['headphones'],
  },
  '🎨': {
    canonicalName: 'ARTIST PALETTE',
    slangMeanings: ['art'],
  },
  '🎩': {
    canonicalName: 'TOP HAT',
    slangMeanings: ['tophat'],
  },
  '🎪': {
    canonicalName: 'CIRCUS TENT',
    slangMeanings: ['circus_tent'],
  },
  '🎫': {
    canonicalName: 'TICKET',
    slangMeanings: ['ticket'],
  },
  '🎬': {
    canonicalName: 'CLAPPER BOARD',
    slangMeanings: ['clapper'],
  },
  '🎭': {
    canonicalName: 'PERFORMING ARTS',
    slangMeanings: ['performing_arts'],
  },
  '🎮': {
    canonicalName: 'VIDEO GAME',
    slangMeanings: ['video_game'],
  },
  '🎯': {
    canonicalName: 'DIRECT HIT',
    slangMeanings: ['dart'],
  },
  '🎰': {
    canonicalName: 'SLOT MACHINE',
    slangMeanings: ['slot_machine'],
  },
  '🎱': {
    canonicalName: 'BILLIARDS',
    slangMeanings: ['8ball'],
  },
  '🎲': {
    canonicalName: 'GAME DIE',
    slangMeanings: ['game_die'],
  },
  '🎳': {
    canonicalName: 'BOWLING',
    slangMeanings: ['bowling'],
  },
  '🎴': {
    canonicalName: 'FLOWER PLAYING CARDS',
    slangMeanings: ['flower_playing_cards'],
  },
  '🎵': {
    canonicalName: 'MUSICAL NOTE',
    slangMeanings: ['musical_note'],
  },
  '🎶': {
    canonicalName: 'MULTIPLE MUSICAL NOTES',
    slangMeanings: ['notes'],
  },
  '🎷': {
    canonicalName: 'SAXOPHONE',
    slangMeanings: ['saxophone'],
  },
  '🎸': {
    canonicalName: 'GUITAR',
    slangMeanings: ['guitar'],
  },
  '🎹': {
    canonicalName: 'MUSICAL KEYBOARD',
    slangMeanings: ['musical_keyboard'],
  },
  '🎺': {
    canonicalName: 'TRUMPET',
    slangMeanings: ['trumpet'],
  },
  '🎻': {
    canonicalName: 'VIOLIN',
    slangMeanings: ['violin'],
  },
  '🎼': {
    canonicalName: 'MUSICAL SCORE',
    slangMeanings: ['musical_score'],
  },
  '🎽': {
    canonicalName: 'RUNNING SHIRT WITH SASH',
    slangMeanings: ['running_shirt_with_sash'],
  },
  '🎾': {
    canonicalName: 'TENNIS RACQUET AND BALL',
    slangMeanings: ['tennis'],
  },
  '🎿': {
    canonicalName: 'SKI AND SKI BOOT',
    slangMeanings: ['ski'],
  },
  '🏀': {
    canonicalName: 'BASKETBALL AND HOOP',
    slangMeanings: ['basketball'],
  },
  '🏁': {
    canonicalName: 'CHEQUERED FLAG',
    slangMeanings: ['checkered_flag'],
  },
  '🏂': {
    canonicalName: 'SNOWBOARDER',
    slangMeanings: ['snowboarder'],
  },
  '🏃': {
    canonicalName: 'RUNNER',
    slangMeanings: ['runner', 'running'],
  },
  '🏄': {
    canonicalName: 'SURFER',
    slangMeanings: ['surfer'],
  },
  '🏅': {
    canonicalName: 'SPORTS MEDAL',
    slangMeanings: ['sports_medal'],
  },
  '🏆': {
    canonicalName: 'TROPHY',
    slangMeanings: ['trophy'],
  },
  '🏇': {
    canonicalName: 'HORSE RACING',
    slangMeanings: ['horse_racing'],
  },
  '🏈': {
    canonicalName: 'AMERICAN FOOTBALL',
    slangMeanings: ['football'],
  },
  '🏉': {
    canonicalName: 'RUGBY FOOTBALL',
    slangMeanings: ['rugby_football'],
  },
  '🏊': {
    canonicalName: 'SWIMMER',
    slangMeanings: ['swimmer'],
  },
  '🏏': {
    canonicalName: 'CRICKET BAT AND BALL',
    slangMeanings: ['cricket_bat_and_ball'],
  },
  '🏐': {
    canonicalName: 'VOLLEYBALL',
    slangMeanings: ['volleyball'],
  },
  '🏑': {
    canonicalName: 'FIELD HOCKEY STICK AND BALL',
    slangMeanings: ['field_hockey_stick_and_ball'],
  },
  '🏒': {
    canonicalName: 'ICE HOCKEY STICK AND PUCK',
    slangMeanings: ['ice_hockey_stick_and_puck'],
  },
  '🏓': {
    canonicalName: 'TABLE TENNIS PADDLE AND BALL',
    slangMeanings: ['table_tennis_paddle_and_ball'],
  },
  '🏠': {
    canonicalName: 'HOUSE BUILDING',
    slangMeanings: ['house'],
  },
  '🏡': {
    canonicalName: 'HOUSE WITH GARDEN',
    slangMeanings: ['house_with_garden'],
  },
  '🏢': {
    canonicalName: 'OFFICE BUILDING',
    slangMeanings: ['office'],
  },
  '🏣': {
    canonicalName: 'JAPANESE POST OFFICE',
    slangMeanings: ['post_office'],
  },
  '🏤': {
    canonicalName: 'EUROPEAN POST OFFICE',
    slangMeanings: ['european_post_office'],
  },
  '🏥': {
    canonicalName: 'HOSPITAL',
    slangMeanings: ['hospital'],
  },
  '🏦': {
    canonicalName: 'BANK',
    slangMeanings: ['bank'],
  },
  '🏧': {
    canonicalName: 'AUTOMATED TELLER MACHINE',
    slangMeanings: ['atm'],
  },
  '🏨': {
    canonicalName: 'HOTEL',
    slangMeanings: ['hotel'],
  },
  '🏩': {
    canonicalName: 'LOVE HOTEL',
    slangMeanings: ['love_hotel'],
  },
  '🏪': {
    canonicalName: 'CONVENIENCE STORE',
    slangMeanings: ['convenience_store'],
  },
  '🏫': {
    canonicalName: 'SCHOOL',
    slangMeanings: ['school'],
  },
  '🏬': {
    canonicalName: 'DEPARTMENT STORE',
    slangMeanings: ['department_store'],
  },
  '🏭': {
    canonicalName: 'FACTORY',
    slangMeanings: ['factory'],
  },
  '🏮': {
    canonicalName: 'IZAKAYA LANTERN',
    slangMeanings: ['izakaya_lantern', 'lantern'],
  },
  '🏯': {
    canonicalName: 'JAPANESE CASTLE',
    slangMeanings: ['japanese_castle'],
  },
  '🏰': {
    canonicalName: 'EUROPEAN CASTLE',
    slangMeanings: ['european_castle'],
  },
  '🏴': {
    canonicalName: 'WAVING BLACK FLAG',
    slangMeanings: ['waving_black_flag'],
  },
  '🏸': {
    canonicalName: 'BADMINTON RACQUET AND SHUTTLECOCK',
    slangMeanings: ['badminton_racquet_and_shuttlecock'],
  },
  '🏹': {
    canonicalName: 'BOW AND ARROW',
    slangMeanings: ['bow_and_arrow'],
  },
  '🏺': {
    canonicalName: 'AMPHORA',
    slangMeanings: ['amphora'],
  },
  '🏻': {
    canonicalName: 'EMOJI MODIFIER FITZPATRICK TYPE-1-2',
    slangMeanings: ['skin-tone-2'],
  },
  '🏼': {
    canonicalName: 'EMOJI MODIFIER FITZPATRICK TYPE-3',
    slangMeanings: ['skin-tone-3'],
  },
  '🏽': {
    canonicalName: 'EMOJI MODIFIER FITZPATRICK TYPE-4',
    slangMeanings: ['skin-tone-4'],
  },
  '🏾': {
    canonicalName: 'EMOJI MODIFIER FITZPATRICK TYPE-5',
    slangMeanings: ['skin-tone-5'],
  },
  '🏿': {
    canonicalName: 'EMOJI MODIFIER FITZPATRICK TYPE-6',
    slangMeanings: ['skin-tone-6'],
  },
  '🐀': {
    canonicalName: 'RAT',
    slangMeanings: ['rat'],
  },
  '🐁': {
    canonicalName: 'MOUSE',
    slangMeanings: ['mouse2'],
  },
  '🐂': {
    canonicalName: 'OX',
    slangMeanings: ['ox'],
  },
  '🐃': {
    canonicalName: 'WATER BUFFALO',
    slangMeanings: ['water_buffalo'],
  },
  '🐄': {
    canonicalName: 'COW',
    slangMeanings: ['cow2'],
  },
  '🐅': {
    canonicalName: 'TIGER',
    slangMeanings: ['tiger2'],
  },
  '🐆': {
    canonicalName: 'LEOPARD',
    slangMeanings: ['leopard'],
  },
  '🐇': {
    canonicalName: 'RABBIT',
    slangMeanings: ['rabbit2'],
  },
  '🐈': {
    canonicalName: 'CAT',
    slangMeanings: ['cat2'],
  },
  '🐉': {
    canonicalName: 'DRAGON',
    slangMeanings: ['dragon'],
  },
  '🐊': {
    canonicalName: 'CROCODILE',
    slangMeanings: ['crocodile'],
  },
  '🐋': {
    canonicalName: 'WHALE',
    slangMeanings: ['whale2'],
  },
  '🐌': {
    canonicalName: 'SNAIL',
    slangMeanings: ['snail'],
  },
  '🐍': {
    canonicalName: 'SNAKE',
    slangMeanings: ['snake'],
  },
  '🐎': {
    canonicalName: 'HORSE',
    slangMeanings: ['racehorse'],
  },
  '🐏': {
    canonicalName: 'RAM',
    slangMeanings: ['ram'],
  },
  '🐐': {
    canonicalName: 'GOAT',
    slangMeanings: ['goat'],
  },
  '🐑': {
    canonicalName: 'SHEEP',
    slangMeanings: ['sheep'],
  },
  '🐒': {
    canonicalName: 'MONKEY',
    slangMeanings: ['monkey'],
  },
  '🐓': {
    canonicalName: 'ROOSTER',
    slangMeanings: ['rooster'],
  },
  '🐔': {
    canonicalName: 'CHICKEN',
    slangMeanings: ['chicken'],
  },
  '🐕': {
    canonicalName: 'DOG',
    slangMeanings: ['dog2'],
  },
  '🐖': {
    canonicalName: 'PIG',
    slangMeanings: ['pig2'],
  },
  '🐗': {
    canonicalName: 'BOAR',
    slangMeanings: ['boar'],
  },
  '🐘': {
    canonicalName: 'ELEPHANT',
    slangMeanings: ['elephant'],
  },
  '🐙': {
    canonicalName: 'OCTOPUS',
    slangMeanings: ['octopus'],
  },
  '🐚': {
    canonicalName: 'SPIRAL SHELL',
    slangMeanings: ['shell'],
  },
  '🐛': {
    canonicalName: 'BUG',
    slangMeanings: ['bug'],
  },
  '🐜': {
    canonicalName: 'ANT',
    slangMeanings: ['ant'],
  },
  '🐝': {
    canonicalName: 'HONEYBEE',
    slangMeanings: ['bee', 'honeybee'],
  },
  '🐞': {
    canonicalName: 'LADY BEETLE',
    slangMeanings: ['lady_beetle', 'ladybug'],
  },
  '🐟': {
    canonicalName: 'FISH',
    slangMeanings: ['fish'],
  },
  '🐠': {
    canonicalName: 'TROPICAL FISH',
    slangMeanings: ['tropical_fish'],
  },
  '🐡': {
    canonicalName: 'BLOWFISH',
    slangMeanings: ['blowfish'],
  },
  '🐢': {
    canonicalName: 'TURTLE',
    slangMeanings: ['turtle'],
  },
  '🐣': {
    canonicalName: 'HATCHING CHICK',
    slangMeanings: ['hatching_chick'],
  },
  '🐤': {
    canonicalName: 'BABY CHICK',
    slangMeanings: ['baby_chick'],
  },
  '🐥': {
    canonicalName: 'FRONT-FACING BABY CHICK',
    slangMeanings: ['hatched_chick'],
  },
  '🐦': {
    canonicalName: 'BIRD',
    slangMeanings: ['bird'],
  },
  '🐧': {
    canonicalName: 'PENGUIN',
    slangMeanings: ['penguin'],
  },
  '🐨': {
    canonicalName: 'KOALA',
    slangMeanings: ['koala'],
  },
  '🐩': {
    canonicalName: 'POODLE',
    slangMeanings: ['poodle'],
  },
  '🐪': {
    canonicalName: 'DROMEDARY CAMEL',
    slangMeanings: ['dromedary_camel'],
  },
  '🐫': {
    canonicalName: 'BACTRIAN CAMEL',
    slangMeanings: ['camel'],
  },
  '🐬': {
    canonicalName: 'DOLPHIN',
    slangMeanings: ['dolphin', 'flipper'],
  },
  '🐭': {
    canonicalName: 'MOUSE FACE',
    slangMeanings: ['mouse'],
  },
  '🐮': {
    canonicalName: 'COW FACE',
    slangMeanings: ['cow'],
  },
  '🐯': {
    canonicalName: 'TIGER FACE',
    slangMeanings: ['tiger'],
  },
  '🐰': {
    canonicalName: 'RABBIT FACE',
    slangMeanings: ['rabbit'],
  },
  '🐱': {
    canonicalName: 'CAT FACE',
    slangMeanings: ['cat', 'cat face', 'pussy', 'vagina'],
  },
  '🐲': {
    canonicalName: 'DRAGON FACE',
    slangMeanings: ['dragon_face'],
  },
  '🐳': {
    canonicalName: 'SPOUTING WHALE',
    slangMeanings: ['whale'],
  },
  '🐴': {
    canonicalName: 'HORSE FACE',
    slangMeanings: ['horse'],
  },
  '🐵': {
    canonicalName: 'MONKEY FACE',
    slangMeanings: ['monkey_face'],
  },
  '🐶': {
    canonicalName: 'DOG FACE',
    slangMeanings: ['dog'],
  },
  '🐷': {
    canonicalName: 'PIG FACE',
    slangMeanings: ['pig'],
  },
  '🐸': {
    canonicalName: 'FROG FACE',
    slangMeanings: ['frog'],
  },
  '🐹': {
    canonicalName: 'HAMSTER FACE',
    slangMeanings: ['hamster'],
  },
  '🐺': {
    canonicalName: 'WOLF FACE',
    slangMeanings: ['wolf'],
  },
  '🐻': {
    canonicalName: 'BEAR FACE',
    slangMeanings: ['bear'],
  },
  '🐼': {
    canonicalName: 'PANDA FACE',
    slangMeanings: ['panda_face'],
  },
  '🐽': {
    canonicalName: 'PIG NOSE',
    slangMeanings: ['pig_nose'],
  },
  '🐾': {
    canonicalName: 'PAW PRINTS',
    slangMeanings: ['feet', 'paw_prints'],
  },
  '👀': {
    canonicalName: 'EYES',
    slangMeanings: ['eyes'],
  },
  '👂': {
    canonicalName: 'EAR',
    slangMeanings: ['ear'],
  },
  '👃': {
    canonicalName: 'NOSE',
    slangMeanings: ['nose'],
  },
  '👄': {
    canonicalName: 'MOUTH',
    slangMeanings: ['lips'],
  },
  '👅': {
    canonicalName: 'TONGUE',
    slangMeanings: ['licking', 'oral sex', 'oral stimulation', 'tongue'],
  },
  '👆': {
    canonicalName: 'WHITE UP POINTING BACKHAND INDEX',
    slangMeanings: ['point_up_2'],
  },
  '👇': {
    canonicalName: 'WHITE DOWN POINTING BACKHAND INDEX',
    slangMeanings: ['point_down'],
  },
  '👈': {
    canonicalName: 'WHITE LEFT POINTING BACKHAND INDEX',
    slangMeanings: ['point_left'],
  },
  '👉': {
    canonicalName: 'WHITE RIGHT POINTING BACKHAND INDEX',
    slangMeanings: ['point_right'],
  },
  '👊': {
    canonicalName: 'FISTED HAND SIGN',
    slangMeanings: ['facepunch', 'punch'],
  },
  '👋': {
    canonicalName: 'WAVING HAND SIGN',
    slangMeanings: ['wave'],
  },
  '👌': {
    canonicalName: 'OK HAND SIGN',
    slangMeanings: ['ok_hand'],
  },
  '👍': {
    canonicalName: 'THUMBS UP SIGN',
    slangMeanings: ['+1', 'thumbsup'],
  },
  '👎': {
    canonicalName: 'THUMBS DOWN SIGN',
    slangMeanings: ['-1', 'thumbsdown'],
  },
  '👏': {
    canonicalName: 'CLAPPING HANDS SIGN',
    slangMeanings: ['clap'],
  },
  '👐': {
    canonicalName: 'OPEN HANDS SIGN',
    slangMeanings: ['open_hands'],
  },
  '👑': {
    canonicalName: 'CROWN',
    slangMeanings: ['crown'],
  },
  '👒': {
    canonicalName: 'WOMANS HAT',
    slangMeanings: ['womans_hat'],
  },
  '👓': {
    canonicalName: 'EYEGLASSES',
    slangMeanings: ['eyeglasses'],
  },
  '👔': {
    canonicalName: 'NECKTIE',
    slangMeanings: ['necktie'],
  },
  '👕': {
    canonicalName: 'T-SHIRT',
    slangMeanings: ['shirt', 'tshirt'],
  },
  '👖': {
    canonicalName: 'JEANS',
    slangMeanings: ['jeans'],
  },
  '👗': {
    canonicalName: 'DRESS',
    slangMeanings: ['dress'],
  },
  '👘': {
    canonicalName: 'KIMONO',
    slangMeanings: ['kimono'],
  },
  '👙': {
    canonicalName: 'BIKINI',
    slangMeanings: ['bikini'],
  },
  '👚': {
    canonicalName: 'WOMANS CLOTHES',
    slangMeanings: ['womans_clothes'],
  },
  '👛': {
    canonicalName: 'PURSE',
    slangMeanings: ['purse'],
  },
  '👜': {
    canonicalName: 'HANDBAG',
    slangMeanings: ['handbag'],
  },
  '👝': {
    canonicalName: 'POUCH',
    slangMeanings: ['pouch'],
  },
  '👞': {
    canonicalName: 'MANS SHOE',
    slangMeanings: ['mans_shoe', 'shoe'],
  },
  '👟': {
    canonicalName: 'ATHLETIC SHOE',
    slangMeanings: ['athletic_shoe'],
  },
  '👠': {
    canonicalName: 'HIGH-HEELED SHOE',
    slangMeanings: ['high_heel'],
  },
  '👡': {
    canonicalName: 'WOMANS SANDAL',
    slangMeanings: ['sandal'],
  },
  '👢': {
    canonicalName: 'WOMANS BOOTS',
    slangMeanings: ['boot'],
  },
  '👣': {
    canonicalName: 'FOOTPRINTS',
    slangMeanings: ['footprints'],
  },
  '👤': {
    canonicalName: 'BUST IN SILHOUETTE',
    slangMeanings: ['bust_in_silhouette'],
  },
  '👥': {
    canonicalName: 'BUSTS IN SILHOUETTE',
    slangMeanings: ['busts_in_silhouette'],
  },
  '👦': {
    canonicalName: 'BOY',
    slangMeanings: ['boy'],
  },
  '👧': {
    canonicalName: 'GIRL',
    slangMeanings: ['girl'],
  },
  '👨': {
    canonicalName: 'MAN',
    slangMeanings: ['man'],
  },
  '👩': {
    canonicalName: 'WOMAN',
    slangMeanings: ['woman'],
  },
  '👪': {
    canonicalName: 'FAMILY',
    slangMeanings: ['family'],
  },
  '👫': {
    canonicalName: 'MAN AND WOMAN HOLDING HANDS',
    slangMeanings: ['couple', 'man_and_woman_holding_hands', 'woman_and_man_holding_hands'],
  },
  '👬': {
    canonicalName: 'TWO MEN HOLDING HANDS',
    slangMeanings: ['men_holding_hands', 'two_men_holding_hands'],
  },
  '👭': {
    canonicalName: 'TWO WOMEN HOLDING HANDS',
    slangMeanings: ['two_women_holding_hands', 'women_holding_hands'],
  },
  '👮': {
    canonicalName: 'POLICE OFFICER',
    slangMeanings: ['cop'],
  },
  '👯': {
    canonicalName: 'WOMAN WITH BUNNY EARS',
    slangMeanings: ['dancers'],
  },
  '👰': {
    canonicalName: 'BRIDE WITH VEIL',
    slangMeanings: ['bride_with_veil'],
  },
  '👱': {
    canonicalName: 'PERSON WITH BLOND HAIR',
    slangMeanings: ['person_with_blond_hair'],
  },
  '👲': {
    canonicalName: 'MAN WITH GUA PI MAO',
    slangMeanings: ['man_with_gua_pi_mao'],
  },
  '👳': {
    canonicalName: 'MAN WITH TURBAN',
    slangMeanings: ['man_with_turban'],
  },
  '👴': {
    canonicalName: 'OLDER MAN',
    slangMeanings: ['older_man'],
  },
  '👵': {
    canonicalName: 'OLDER WOMAN',
    slangMeanings: ['older_woman'],
  },
  '👶': {
    canonicalName: 'BABY',
    slangMeanings: ['baby'],
  },
  '👷': {
    canonicalName: 'CONSTRUCTION WORKER',
    slangMeanings: ['construction_worker'],
  },
  '👸': {
    canonicalName: 'PRINCESS',
    slangMeanings: ['princess'],
  },
  '👹': {
    canonicalName: 'JAPANESE OGRE',
    slangMeanings: ['japanese_ogre'],
  },
  '👺': {
    canonicalName: 'JAPANESE GOBLIN',
    slangMeanings: ['japanese_goblin'],
  },
  '👻': {
    canonicalName: 'GHOST',
    slangMeanings: ['ghost'],
  },
  '👼': {
    canonicalName: 'BABY ANGEL',
    slangMeanings: ['angel'],
  },
  '👽': {
    canonicalName: 'EXTRATERRESTRIAL ALIEN',
    slangMeanings: ['alien'],
  },
  '👾': {
    canonicalName: 'ALIEN MONSTER',
    slangMeanings: ['space_invader'],
  },
  '👿': {
    canonicalName: 'IMP',
    slangMeanings: ['imp'],
  },
  '💀': {
    canonicalName: 'SKULL',
    slangMeanings: ['skull'],
  },
  '💁': {
    canonicalName: 'INFORMATION DESK PERSON',
    slangMeanings: ['information_desk_person'],
  },
  '💂': {
    canonicalName: 'GUARDSMAN',
    slangMeanings: ['guardsman'],
  },
  '💃': {
    canonicalName: 'DANCER',
    slangMeanings: ['dancer'],
  },
  '💄': {
    canonicalName: 'LIPSTICK',
    slangMeanings: ['lipstick'],
  },
  '💅': {
    canonicalName: 'NAIL POLISH',
    slangMeanings: ['nail_care'],
  },
  '💆': {
    canonicalName: 'FACE MASSAGE',
    slangMeanings: ['massage'],
  },
  '💇': {
    canonicalName: 'HAIRCUT',
    slangMeanings: ['haircut'],
  },
  '💈': {
    canonicalName: 'BARBER POLE',
    slangMeanings: ['barber'],
  },
  '💉': {
    canonicalName: 'SYRINGE',
    slangMeanings: ['syringe'],
  },
  '💊': {
    canonicalName: 'PILL',
    slangMeanings: ['pill'],
  },
  '💋': {
    canonicalName: 'KISS MARK',
    slangMeanings: ['kiss'],
  },
  '💌': {
    canonicalName: 'LOVE LETTER',
    slangMeanings: ['love_letter'],
  },
  '💍': {
    canonicalName: 'RING',
    slangMeanings: ['ring'],
  },
  '💎': {
    canonicalName: 'GEM STONE',
    slangMeanings: ['gem'],
  },
  '💏': {
    canonicalName: 'KISS',
    slangMeanings: ['couplekiss'],
  },
  '💐': {
    canonicalName: 'BOUQUET',
    slangMeanings: ['bouquet'],
  },
  '💑': {
    canonicalName: 'COUPLE WITH HEART',
    slangMeanings: ['couple_with_heart'],
  },
  '💒': {
    canonicalName: 'WEDDING',
    slangMeanings: ['wedding'],
  },
  '💓': {
    canonicalName: 'BEATING HEART',
    slangMeanings: ['heartbeat'],
  },
  '💔': {
    canonicalName: 'BROKEN HEART',
    slangMeanings: ['broken_heart'],
  },
  '💕': {
    canonicalName: 'TWO HEARTS',
    slangMeanings: ['two_hearts'],
  },
  '💖': {
    canonicalName: 'SPARKLING HEART',
    slangMeanings: ['sparkling_heart'],
  },
  '💗': {
    canonicalName: 'GROWING HEART',
    slangMeanings: ['heartpulse'],
  },
  '💘': {
    canonicalName: 'HEART WITH ARROW',
    slangMeanings: ['cupid'],
  },
  '💙': {
    canonicalName: 'BLUE HEART',
    slangMeanings: ['blue_heart'],
  },
  '💚': {
    canonicalName: 'GREEN HEART',
    slangMeanings: ['green_heart'],
  },
  '💛': {
    canonicalName: 'YELLOW HEART',
    slangMeanings: ['yellow_heart'],
  },
  '💜': {
    canonicalName: 'PURPLE HEART',
    slangMeanings: ['purple_heart'],
  },
  '💝': {
    canonicalName: 'HEART WITH RIBBON',
    slangMeanings: ['gift_heart'],
  },
  '💞': {
    canonicalName: 'REVOLVING HEARTS',
    slangMeanings: ['revolving_hearts'],
  },
  '💟': {
    canonicalName: 'HEART DECORATION',
    slangMeanings: ['heart_decoration'],
  },
  '💠': {
    canonicalName: 'DIAMOND SHAPE WITH A DOT INSIDE',
    slangMeanings: ['diamond_shape_with_a_dot_inside'],
  },
  '💡': {
    canonicalName: 'ELECTRIC LIGHT BULB',
    slangMeanings: ['bulb'],
  },
  '💢': {
    canonicalName: 'ANGER SYMBOL',
    slangMeanings: ['anger'],
  },
  '💣': {
    canonicalName: 'BOMB',
    slangMeanings: ['bomb'],
  },
  '💤': {
    canonicalName: 'SLEEPING SYMBOL',
    slangMeanings: ['zzz'],
  },
  '💥': {
    canonicalName: 'COLLISION SYMBOL',
    slangMeanings: ['boom', 'collision'],
  },
  '💦': {
    canonicalName: 'SPLASHING SWEAT SYMBOL',
    slangMeanings: ['cum', 'semen', 'seminal fluid', 'sweat droplets', 'sweat_drops'],
  },
  '💧': {
    canonicalName: 'DROPLET',
    slangMeanings: ['droplet'],
  },
  '💨': {
    canonicalName: 'DASH SYMBOL',
    slangMeanings: ['dash'],
  },
  '💩': {
    canonicalName: 'PILE OF POO',
    slangMeanings: ['hankey', 'poop', 'shit'],
  },
  '💪': {
    canonicalName: 'FLEXED BICEPS',
    slangMeanings: ['muscle'],
  },
  '💫': {
    canonicalName: 'DIZZY SYMBOL',
    slangMeanings: ['dizzy'],
  },
  '💬': {
    canonicalName: 'SPEECH BALLOON',
    slangMeanings: ['speech_balloon'],
  },
  '💭': {
    canonicalName: 'THOUGHT BALLOON',
    slangMeanings: ['thought_balloon'],
  },
  '💮': {
    canonicalName: 'WHITE FLOWER',
    slangMeanings: ['white_flower'],
  },
  '💯': {
    canonicalName: 'HUNDRED POINTS SYMBOL',
    slangMeanings: ['100'],
  },
  '💰': {
    canonicalName: 'MONEY BAG',
    slangMeanings: ['moneybag'],
  },
  '💱': {
    canonicalName: 'CURRENCY EXCHANGE',
    slangMeanings: ['currency_exchange'],
  },
  '💲': {
    canonicalName: 'HEAVY DOLLAR SIGN',
    slangMeanings: ['heavy_dollar_sign'],
  },
  '💳': {
    canonicalName: 'CREDIT CARD',
    slangMeanings: ['credit_card'],
  },
  '💴': {
    canonicalName: 'BANKNOTE WITH YEN SIGN',
    slangMeanings: ['yen'],
  },
  '💵': {
    canonicalName: 'BANKNOTE WITH DOLLAR SIGN',
    slangMeanings: ['dollar'],
  },
  '💶': {
    canonicalName: 'BANKNOTE WITH EURO SIGN',
    slangMeanings: ['euro'],
  },
  '💷': {
    canonicalName: 'BANKNOTE WITH POUND SIGN',
    slangMeanings: ['pound'],
  },
  '💸': {
    canonicalName: 'MONEY WITH WINGS',
    slangMeanings: ['money_with_wings'],
  },
  '💹': {
    canonicalName: 'CHART WITH UPWARDS TREND AND YEN SIGN',
    slangMeanings: ['chart'],
  },
  '💺': {
    canonicalName: 'SEAT',
    slangMeanings: ['seat'],
  },
  '💻': {
    canonicalName: 'PERSONAL COMPUTER',
    slangMeanings: ['computer'],
  },
  '💼': {
    canonicalName: 'BRIEFCASE',
    slangMeanings: ['briefcase'],
  },
  '💽': {
    canonicalName: 'MINIDISC',
    slangMeanings: ['minidisc'],
  },
  '💾': {
    canonicalName: 'FLOPPY DISK',
    slangMeanings: ['floppy_disk'],
  },
  '💿': {
    canonicalName: 'OPTICAL DISC',
    slangMeanings: ['cd'],
  },
  '📀': {
    canonicalName: 'DVD',
    slangMeanings: ['dvd'],
  },
  '📁': {
    canonicalName: 'FILE FOLDER',
    slangMeanings: ['file_folder'],
  },
  '📂': {
    canonicalName: 'OPEN FILE FOLDER',
    slangMeanings: ['open_file_folder'],
  },
  '📃': {
    canonicalName: 'PAGE WITH CURL',
    slangMeanings: ['page_with_curl'],
  },
  '📄': {
    canonicalName: 'PAGE FACING UP',
    slangMeanings: ['page_facing_up'],
  },
  '📅': {
    canonicalName: 'CALENDAR',
    slangMeanings: ['date'],
  },
  '📆': {
    canonicalName: 'TEAR-OFF CALENDAR',
    slangMeanings: ['calendar'],
  },
  '📇': {
    canonicalName: 'CARD INDEX',
    slangMeanings: ['card_index'],
  },
  '📈': {
    canonicalName: 'CHART WITH UPWARDS TREND',
    slangMeanings: ['chart_with_upwards_trend'],
  },
  '📉': {
    canonicalName: 'CHART WITH DOWNWARDS TREND',
    slangMeanings: ['chart_with_downwards_trend'],
  },
  '📊': {
    canonicalName: 'BAR CHART',
    slangMeanings: ['bar_chart'],
  },
  '📋': {
    canonicalName: 'CLIPBOARD',
    slangMeanings: ['clipboard'],
  },
  '📌': {
    canonicalName: 'PUSHPIN',
    slangMeanings: ['pushpin'],
  },
  '📍': {
    canonicalName: 'ROUND PUSHPIN',
    slangMeanings: ['round_pushpin'],
  },
  '📎': {
    canonicalName: 'PAPERCLIP',
    slangMeanings: ['paperclip'],
  },
  '📏': {
    canonicalName: 'STRAIGHT RULER',
    slangMeanings: ['straight_ruler'],
  },
  '📐': {
    canonicalName: 'TRIANGULAR RULER',
    slangMeanings: ['triangular_ruler'],
  },
  '📑': {
    canonicalName: 'BOOKMARK TABS',
    slangMeanings: ['bookmark_tabs'],
  },
  '📒': {
    canonicalName: 'LEDGER',
    slangMeanings: ['ledger'],
  },
  '📓': {
    canonicalName: 'NOTEBOOK',
    slangMeanings: ['notebook'],
  },
  '📔': {
    canonicalName: 'NOTEBOOK WITH DECORATIVE COVER',
    slangMeanings: ['notebook_with_decorative_cover'],
  },
  '📕': {
    canonicalName: 'CLOSED BOOK',
    slangMeanings: ['closed_book'],
  },
  '📖': {
    canonicalName: 'OPEN BOOK',
    slangMeanings: ['book', 'open_book'],
  },
  '📗': {
    canonicalName: 'GREEN BOOK',
    slangMeanings: ['green_book'],
  },
  '📘': {
    canonicalName: 'BLUE BOOK',
    slangMeanings: ['blue_book'],
  },
  '📙': {
    canonicalName: 'ORANGE BOOK',
    slangMeanings: ['orange_book'],
  },
  '📚': {
    canonicalName: 'BOOKS',
    slangMeanings: ['books'],
  },
  '📛': {
    canonicalName: 'NAME BADGE',
    slangMeanings: ['name_badge'],
  },
  '📜': {
    canonicalName: 'SCROLL',
    slangMeanings: ['scroll'],
  },
  '📝': {
    canonicalName: 'MEMO',
    slangMeanings: ['memo', 'pencil'],
  },
  '📞': {
    canonicalName: 'TELEPHONE RECEIVER',
    slangMeanings: ['telephone_receiver'],
  },
  '📟': {
    canonicalName: 'PAGER',
    slangMeanings: ['pager'],
  },
  '📠': {
    canonicalName: 'FAX MACHINE',
    slangMeanings: ['fax'],
  },
  '📡': {
    canonicalName: 'SATELLITE ANTENNA',
    slangMeanings: ['satellite_antenna'],
  },
  '📢': {
    canonicalName: 'PUBLIC ADDRESS LOUDSPEAKER',
    slangMeanings: ['loudspeaker'],
  },
  '📣': {
    canonicalName: 'CHEERING MEGAPHONE',
    slangMeanings: ['mega'],
  },
  '📤': {
    canonicalName: 'OUTBOX TRAY',
    slangMeanings: ['outbox_tray'],
  },
  '📥': {
    canonicalName: 'INBOX TRAY',
    slangMeanings: ['inbox_tray'],
  },
  '📦': {
    canonicalName: 'PACKAGE',
    slangMeanings: ['package'],
  },
  '📧': {
    canonicalName: 'E-MAIL SYMBOL',
    slangMeanings: ['e-mail'],
  },
  '📨': {
    canonicalName: 'INCOMING ENVELOPE',
    slangMeanings: ['incoming_envelope'],
  },
  '📩': {
    canonicalName: 'ENVELOPE WITH DOWNWARDS ARROW ABOVE',
    slangMeanings: ['envelope_with_arrow'],
  },
  '📪': {
    canonicalName: 'CLOSED MAILBOX WITH LOWERED FLAG',
    slangMeanings: ['mailbox_closed'],
  },
  '📫': {
    canonicalName: 'CLOSED MAILBOX WITH RAISED FLAG',
    slangMeanings: ['mailbox'],
  },
  '📬': {
    canonicalName: 'OPEN MAILBOX WITH RAISED FLAG',
    slangMeanings: ['mailbox_with_mail'],
  },
  '📭': {
    canonicalName: 'OPEN MAILBOX WITH LOWERED FLAG',
    slangMeanings: ['mailbox_with_no_mail'],
  },
  '📮': {
    canonicalName: 'POSTBOX',
    slangMeanings: ['postbox'],
  },
  '📯': {
    canonicalName: 'POSTAL HORN',
    slangMeanings: ['postal_horn'],
  },
  '📰': {
    canonicalName: 'NEWSPAPER',
    slangMeanings: ['newspaper'],
  },
  '📱': {
    canonicalName: 'MOBILE PHONE',
    slangMeanings: ['iphone'],
  },
  '📲': {
    canonicalName: 'MOBILE PHONE WITH RIGHTWARDS ARROW AT LEFT',
    slangMeanings: ['calling'],
  },
  '📳': {
    canonicalName: 'VIBRATION MODE',
    slangMeanings: ['vibration_mode'],
  },
  '📴': {
    canonicalName: 'MOBILE PHONE OFF',
    slangMeanings: ['mobile_phone_off'],
  },
  '📵': {
    canonicalName: 'NO MOBILE PHONES',
    slangMeanings: ['no_mobile_phones'],
  },
  '📶': {
    canonicalName: 'ANTENNA WITH BARS',
    slangMeanings: ['signal_strength'],
  },
  '📷': {
    canonicalName: 'CAMERA',
    slangMeanings: ['camera'],
  },
  '📸': {
    canonicalName: 'CAMERA WITH FLASH',
    slangMeanings: ['camera_with_flash'],
  },
  '📹': {
    canonicalName: 'VIDEO CAMERA',
    slangMeanings: ['video_camera'],
  },
  '📺': {
    canonicalName: 'TELEVISION',
    slangMeanings: ['tv'],
  },
  '📻': {
    canonicalName: 'RADIO',
    slangMeanings: ['radio'],
  },
  '📼': {
    canonicalName: 'VIDEOCASSETTE',
    slangMeanings: ['vhs'],
  },
  '📿': {
    canonicalName: 'PRAYER BEADS',
    slangMeanings: ['prayer_beads'],
  },
  '🔀': {
    canonicalName: 'TWISTED RIGHTWARDS ARROWS',
    slangMeanings: ['twisted_rightwards_arrows'],
  },
  '🔁': {
    canonicalName: 'CLOCKWISE RIGHTWARDS AND LEFTWARDS OPEN CIRCLE ARROWS',
    slangMeanings: ['repeat'],
  },
  '🔂': {
    canonicalName: 'CLOCKWISE RIGHTWARDS AND LEFTWARDS OPEN CIRCLE ARROWS WITH CIRCLED ONE OVERLAY',
    slangMeanings: ['repeat_one'],
  },
  '🔃': {
    canonicalName: 'CLOCKWISE DOWNWARDS AND UPWARDS OPEN CIRCLE ARROWS',
    slangMeanings: ['arrows_clockwise'],
  },
  '🔄': {
    canonicalName: 'ANTICLOCKWISE DOWNWARDS AND UPWARDS OPEN CIRCLE ARROWS',
    slangMeanings: ['arrows_counterclockwise'],
  },
  '🔅': {
    canonicalName: 'LOW BRIGHTNESS SYMBOL',
    slangMeanings: ['low_brightness'],
  },
  '🔆': {
    canonicalName: 'HIGH BRIGHTNESS SYMBOL',
    slangMeanings: ['high_brightness'],
  },
  '🔇': {
    canonicalName: 'SPEAKER WITH CANCELLATION STROKE',
    slangMeanings: ['mute'],
  },
  '🔈': {
    canonicalName: 'SPEAKER',
    slangMeanings: ['speaker'],
  },
  '🔉': {
    canonicalName: 'SPEAKER WITH ONE SOUND WAVE',
    slangMeanings: ['sound'],
  },
  '🔊': {
    canonicalName: 'SPEAKER WITH THREE SOUND WAVES',
    slangMeanings: ['loud_sound'],
  },
  '🔋': {
    canonicalName: 'BATTERY',
    slangMeanings: ['battery'],
  },
  '🔌': {
    canonicalName: 'ELECTRIC PLUG',
    slangMeanings: ['electric_plug'],
  },
  '🔍': {
    canonicalName: 'LEFT-POINTING MAGNIFYING GLASS',
    slangMeanings: ['mag'],
  },
  '🔎': {
    canonicalName: 'RIGHT-POINTING MAGNIFYING GLASS',
    slangMeanings: ['mag_right'],
  },
  '🔏': {
    canonicalName: 'LOCK WITH INK PEN',
    slangMeanings: ['lock_with_ink_pen'],
  },
  '🔐': {
    canonicalName: 'CLOSED LOCK WITH KEY',
    slangMeanings: ['closed_lock_with_key'],
  },
  '🔑': {
    canonicalName: 'KEY',
    slangMeanings: ['key'],
  },
  '🔒': {
    canonicalName: 'LOCK',
    slangMeanings: ['lock'],
  },
  '🔓': {
    canonicalName: 'OPEN LOCK',
    slangMeanings: ['unlock'],
  },
  '🔔': {
    canonicalName: 'BELL',
    slangMeanings: ['bell'],
  },
  '🔕': {
    canonicalName: 'BELL WITH CANCELLATION STROKE',
    slangMeanings: ['no_bell'],
  },
  '🔖': {
    canonicalName: 'BOOKMARK',
    slangMeanings: ['bookmark'],
  },
  '🔗': {
    canonicalName: 'LINK SYMBOL',
    slangMeanings: ['link'],
  },
  '🔘': {
    canonicalName: 'RADIO BUTTON',
    slangMeanings: ['radio_button'],
  },
  '🔙': {
    canonicalName: 'BACK WITH LEFTWARDS ARROW ABOVE',
    slangMeanings: ['back'],
  },
  '🔚': {
    canonicalName: 'END WITH LEFTWARDS ARROW ABOVE',
    slangMeanings: ['end'],
  },
  '🔛': {
    canonicalName: 'ON WITH EXCLAMATION MARK WITH LEFT RIGHT ARROW ABOVE',
    slangMeanings: ['on'],
  },
  '🔜': {
    canonicalName: 'SOON WITH RIGHTWARDS ARROW ABOVE',
    slangMeanings: ['soon'],
  },
  '🔝': {
    canonicalName: 'TOP WITH UPWARDS ARROW ABOVE',
    slangMeanings: ['top'],
  },
  '🔞': {
    canonicalName: 'NO ONE UNDER EIGHTEEN SYMBOL',
    slangMeanings: ['underage'],
  },
  '🔟': {
    canonicalName: 'KEYCAP TEN',
    slangMeanings: ['keycap_ten'],
  },
  '🔠': {
    canonicalName: 'INPUT SYMBOL FOR LATIN CAPITAL LETTERS',
    slangMeanings: ['capital_abcd'],
  },
  '🔡': {
    canonicalName: 'INPUT SYMBOL FOR LATIN SMALL LETTERS',
    slangMeanings: ['abcd'],
  },
  '🔢': {
    canonicalName: 'INPUT SYMBOL FOR NUMBERS',
    slangMeanings: ['1234'],
  },
  '🔣': {
    canonicalName: 'INPUT SYMBOL FOR SYMBOLS',
    slangMeanings: ['symbols'],
  },
  '🔤': {
    canonicalName: 'INPUT SYMBOL FOR LATIN LETTERS',
    slangMeanings: ['abc'],
  },
  '🔥': {
    canonicalName: 'FIRE',
    slangMeanings: ['fire'],
  },
  '🔦': {
    canonicalName: 'ELECTRIC TORCH',
    slangMeanings: ['flashlight'],
  },
  '🔧': {
    canonicalName: 'WRENCH',
    slangMeanings: ['wrench'],
  },
  '🔨': {
    canonicalName: 'HAMMER',
    slangMeanings: ['hammer'],
  },
  '🔩': {
    canonicalName: 'NUT AND BOLT',
    slangMeanings: ['nut_and_bolt'],
  },
  '🔪': {
    canonicalName: 'HOCHO',
    slangMeanings: ['hocho', 'knife'],
  },
  '🔫': {
    canonicalName: 'PISTOL',
    slangMeanings: ['gun'],
  },
  '🔬': {
    canonicalName: 'MICROSCOPE',
    slangMeanings: ['microscope'],
  },
  '🔭': {
    canonicalName: 'TELESCOPE',
    slangMeanings: ['telescope'],
  },
  '🔮': {
    canonicalName: 'CRYSTAL BALL',
    slangMeanings: ['crystal_ball'],
  },
  '🔯': {
    canonicalName: 'SIX POINTED STAR WITH MIDDLE DOT',
    slangMeanings: ['six_pointed_star'],
  },
  '🔰': {
    canonicalName: 'JAPANESE SYMBOL FOR BEGINNER',
    slangMeanings: ['beginner'],
  },
  '🔱': {
    canonicalName: 'TRIDENT EMBLEM',
    slangMeanings: ['trident'],
  },
  '🔲': {
    canonicalName: 'BLACK SQUARE BUTTON',
    slangMeanings: ['black_square_button'],
  },
  '🔳': {
    canonicalName: 'WHITE SQUARE BUTTON',
    slangMeanings: ['white_square_button'],
  },
  '🔴': {
    canonicalName: 'LARGE RED CIRCLE',
    slangMeanings: ['red_circle'],
  },
  '🔵': {
    canonicalName: 'LARGE BLUE CIRCLE',
    slangMeanings: ['large_blue_circle'],
  },
  '🔶': {
    canonicalName: 'LARGE ORANGE DIAMOND',
    slangMeanings: ['large_orange_diamond'],
  },
  '🔷': {
    canonicalName: 'LARGE BLUE DIAMOND',
    slangMeanings: ['large_blue_diamond'],
  },
  '🔸': {
    canonicalName: 'SMALL ORANGE DIAMOND',
    slangMeanings: ['small_orange_diamond'],
  },
  '🔹': {
    canonicalName: 'SMALL BLUE DIAMOND',
    slangMeanings: ['small_blue_diamond'],
  },
  '🔺': {
    canonicalName: 'UP-POINTING RED TRIANGLE',
    slangMeanings: ['small_red_triangle'],
  },
  '🔻': {
    canonicalName: 'DOWN-POINTING RED TRIANGLE',
    slangMeanings: ['small_red_triangle_down'],
  },
  '🔼': {
    canonicalName: 'UP-POINTING SMALL RED TRIANGLE',
    slangMeanings: ['arrow_up_small'],
  },
  '🔽': {
    canonicalName: 'DOWN-POINTING SMALL RED TRIANGLE',
    slangMeanings: ['arrow_down_small'],
  },
  '🕋': {
    canonicalName: 'KAABA',
    slangMeanings: ['kaaba'],
  },
  '🕌': {
    canonicalName: 'MOSQUE',
    slangMeanings: ['mosque'],
  },
  '🕍': {
    canonicalName: 'SYNAGOGUE',
    slangMeanings: ['synagogue'],
  },
  '🕎': {
    canonicalName: 'MENORAH WITH NINE BRANCHES',
    slangMeanings: ['menorah_with_nine_branches'],
  },
  '🕐': {
    canonicalName: 'CLOCK FACE ONE OCLOCK',
    slangMeanings: ['clock1'],
  },
  '🕑': {
    canonicalName: 'CLOCK FACE TWO OCLOCK',
    slangMeanings: ['clock2'],
  },
  '🕒': {
    canonicalName: 'CLOCK FACE THREE OCLOCK',
    slangMeanings: ['clock3'],
  },
  '🕓': {
    canonicalName: 'CLOCK FACE FOUR OCLOCK',
    slangMeanings: ['clock4'],
  },
  '🕔': {
    canonicalName: 'CLOCK FACE FIVE OCLOCK',
    slangMeanings: ['clock5'],
  },
  '🕕': {
    canonicalName: 'CLOCK FACE SIX OCLOCK',
    slangMeanings: ['clock6'],
  },
  '🕖': {
    canonicalName: 'CLOCK FACE SEVEN OCLOCK',
    slangMeanings: ['clock7'],
  },
  '🕗': {
    canonicalName: 'CLOCK FACE EIGHT OCLOCK',
    slangMeanings: ['clock8'],
  },
  '🕘': {
    canonicalName: 'CLOCK FACE NINE OCLOCK',
    slangMeanings: ['clock9'],
  },
  '🕙': {
    canonicalName: 'CLOCK FACE TEN OCLOCK',
    slangMeanings: ['clock10'],
  },
  '🕚': {
    canonicalName: 'CLOCK FACE ELEVEN OCLOCK',
    slangMeanings: ['clock11'],
  },
  '🕛': {
    canonicalName: 'CLOCK FACE TWELVE OCLOCK',
    slangMeanings: ['clock12'],
  },
  '🕜': {
    canonicalName: 'CLOCK FACE ONE-THIRTY',
    slangMeanings: ['clock130'],
  },
  '🕝': {
    canonicalName: 'CLOCK FACE TWO-THIRTY',
    slangMeanings: ['clock230'],
  },
  '🕞': {
    canonicalName: 'CLOCK FACE THREE-THIRTY',
    slangMeanings: ['clock330'],
  },
  '🕟': {
    canonicalName: 'CLOCK FACE FOUR-THIRTY',
    slangMeanings: ['clock430'],
  },
  '🕠': {
    canonicalName: 'CLOCK FACE FIVE-THIRTY',
    slangMeanings: ['clock530'],
  },
  '🕡': {
    canonicalName: 'CLOCK FACE SIX-THIRTY',
    slangMeanings: ['clock630'],
  },
  '🕢': {
    canonicalName: 'CLOCK FACE SEVEN-THIRTY',
    slangMeanings: ['clock730'],
  },
  '🕣': {
    canonicalName: 'CLOCK FACE EIGHT-THIRTY',
    slangMeanings: ['clock830'],
  },
  '🕤': {
    canonicalName: 'CLOCK FACE NINE-THIRTY',
    slangMeanings: ['clock930'],
  },
  '🕥': {
    canonicalName: 'CLOCK FACE TEN-THIRTY',
    slangMeanings: ['clock1030'],
  },
  '🕦': {
    canonicalName: 'CLOCK FACE ELEVEN-THIRTY',
    slangMeanings: ['clock1130'],
  },
  '🕧': {
    canonicalName: 'CLOCK FACE TWELVE-THIRTY',
    slangMeanings: ['clock1230'],
  },
  '🕺': {
    canonicalName: 'MAN DANCING',
    slangMeanings: ['man_dancing'],
  },
  '🖕': {
    canonicalName: 'REVERSED HAND WITH MIDDLE FINGER EXTENDED',
    slangMeanings: ['middle_finger', 'reversed_hand_with_middle_finger_extended'],
  },
  '🖖': {
    canonicalName: 'RAISED HAND WITH PART BETWEEN MIDDLE AND RING FINGERS',
    slangMeanings: ['spock-hand'],
  },
  '🖤': {
    canonicalName: 'BLACK HEART',
    slangMeanings: ['black_heart'],
  },
  '🗻': {
    canonicalName: 'MOUNT FUJI',
    slangMeanings: ['mount_fuji'],
  },
  '🗼': {
    canonicalName: 'TOKYO TOWER',
    slangMeanings: ['tokyo_tower'],
  },
  '🗽': {
    canonicalName: 'STATUE OF LIBERTY',
    slangMeanings: ['statue_of_liberty'],
  },
  '🗾': {
    canonicalName: 'SILHOUETTE OF JAPAN',
    slangMeanings: ['japan'],
  },
  '🗿': {
    canonicalName: 'MOYAI',
    slangMeanings: ['moyai'],
  },
  '😀': {
    canonicalName: 'GRINNING FACE',
    slangMeanings: ['grinning'],
  },
  '😁': {
    canonicalName: 'GRINNING FACE WITH SMILING EYES',
    slangMeanings: ['grin'],
  },
  '😂': {
    canonicalName: 'FACE WITH TEARS OF JOY',
    slangMeanings: ['joy'],
  },
  '😃': {
    canonicalName: 'SMILING FACE WITH OPEN MOUTH',
    slangMeanings: ['smiley'],
  },
  '😄': {
    canonicalName: 'SMILING FACE WITH OPEN MOUTH AND SMILING EYES',
    slangMeanings: ['smile'],
  },
  '😅': {
    canonicalName: 'SMILING FACE WITH OPEN MOUTH AND COLD SWEAT',
    slangMeanings: ['sweat_smile'],
  },
  '😆': {
    canonicalName: 'SMILING FACE WITH OPEN MOUTH AND TIGHTLY-CLOSED EYES',
    slangMeanings: ['laughing', 'satisfied'],
  },
  '😇': {
    canonicalName: 'SMILING FACE WITH HALO',
    slangMeanings: ['innocent'],
  },
  '😈': {
    canonicalName: 'SMILING FACE WITH HORNS',
    slangMeanings: ['smiling_imp'],
  },
  '😉': {
    canonicalName: 'WINKING FACE',
    slangMeanings: ['wink'],
  },
  '😊': {
    canonicalName: 'SMILING FACE WITH SMILING EYES',
    slangMeanings: ['blush'],
  },
  '😋': {
    canonicalName: 'FACE SAVOURING DELICIOUS FOOD',
    slangMeanings: ['yum'],
  },
  '😌': {
    canonicalName: 'RELIEVED FACE',
    slangMeanings: ['relieved'],
  },
  '😍': {
    canonicalName: 'SMILING FACE WITH HEART-SHAPED EYES',
    slangMeanings: ['heart_eyes'],
  },
  '😎': {
    canonicalName: 'SMILING FACE WITH SUNGLASSES',
    slangMeanings: ['sunglasses'],
  },
  '😏': {
    canonicalName: 'SMIRKING FACE',
    slangMeanings: ['smirk'],
  },
  '😐': {
    canonicalName: 'NEUTRAL FACE',
    slangMeanings: ['neutral_face'],
  },
  '😑': {
    canonicalName: 'EXPRESSIONLESS FACE',
    slangMeanings: ['expressionless'],
  },
  '😒': {
    canonicalName: 'UNAMUSED FACE',
    slangMeanings: ['unamused'],
  },
  '😓': {
    canonicalName: 'FACE WITH COLD SWEAT',
    slangMeanings: ['sweat'],
  },
  '😔': {
    canonicalName: 'PENSIVE FACE',
    slangMeanings: ['pensive'],
  },
  '😕': {
    canonicalName: 'CONFUSED FACE',
    slangMeanings: ['confused'],
  },
  '😖': {
    canonicalName: 'CONFOUNDED FACE',
    slangMeanings: ['confounded'],
  },
  '😗': {
    canonicalName: 'KISSING FACE',
    slangMeanings: ['kissing'],
  },
  '😘': {
    canonicalName: 'FACE THROWING A KISS',
    slangMeanings: ['kissing_heart'],
  },
  '😙': {
    canonicalName: 'KISSING FACE WITH SMILING EYES',
    slangMeanings: ['kissing_smiling_eyes'],
  },
  '😚': {
    canonicalName: 'KISSING FACE WITH CLOSED EYES',
    slangMeanings: ['kissing_closed_eyes'],
  },
  '😛': {
    canonicalName: 'FACE WITH STUCK-OUT TONGUE',
    slangMeanings: ['stuck_out_tongue'],
  },
  '😜': {
    canonicalName: 'FACE WITH STUCK-OUT TONGUE AND WINKING EYE',
    slangMeanings: ['stuck_out_tongue_winking_eye'],
  },
  '😝': {
    canonicalName: 'FACE WITH STUCK-OUT TONGUE AND TIGHTLY-CLOSED EYES',
    slangMeanings: ['stuck_out_tongue_closed_eyes'],
  },
  '😞': {
    canonicalName: 'DISAPPOINTED FACE',
    slangMeanings: ['disappointed'],
  },
  '😟': {
    canonicalName: 'WORRIED FACE',
    slangMeanings: ['worried'],
  },
  '😠': {
    canonicalName: 'ANGRY FACE',
    slangMeanings: ['angry'],
  },
  '😡': {
    canonicalName: 'POUTING FACE',
    slangMeanings: ['rage'],
  },
  '😢': {
    canonicalName: 'CRYING FACE',
    slangMeanings: ['cry'],
  },
  '😣': {
    canonicalName: 'PERSEVERING FACE',
    slangMeanings: ['persevere'],
  },
  '😤': {
    canonicalName: 'FACE WITH LOOK OF TRIUMPH',
    slangMeanings: ['triumph'],
  },
  '😥': {
    canonicalName: 'DISAPPOINTED BUT RELIEVED FACE',
    slangMeanings: ['disappointed_relieved'],
  },
  '😦': {
    canonicalName: 'FROWNING FACE WITH OPEN MOUTH',
    slangMeanings: ['frowning'],
  },
  '😧': {
    canonicalName: 'ANGUISHED FACE',
    slangMeanings: ['anguished'],
  },
  '😨': {
    canonicalName: 'FEARFUL FACE',
    slangMeanings: ['fearful'],
  },
  '😩': {
    canonicalName: 'WEARY FACE',
    slangMeanings: ['weary'],
  },
  '😪': {
    canonicalName: 'SLEEPY FACE',
    slangMeanings: ['sleepy'],
  },
  '😫': {
    canonicalName: 'TIRED FACE',
    slangMeanings: ['tired_face'],
  },
  '😬': {
    canonicalName: 'GRIMACING FACE',
    slangMeanings: ['grimacing'],
  },
  '😭': {
    canonicalName: 'LOUDLY CRYING FACE',
    slangMeanings: ['sob'],
  },
  '😮': {
    canonicalName: 'FACE WITH OPEN MOUTH',
    slangMeanings: ['open_mouth'],
  },
  '😯': {
    canonicalName: 'HUSHED FACE',
    slangMeanings: ['hushed'],
  },
  '😰': {
    canonicalName: 'FACE WITH OPEN MOUTH AND COLD SWEAT',
    slangMeanings: ['cold_sweat'],
  },
  '😱': {
    canonicalName: 'FACE SCREAMING IN FEAR',
    slangMeanings: ['scream'],
  },
  '😲': {
    canonicalName: 'ASTONISHED FACE',
    slangMeanings: ['astonished'],
  },
  '😳': {
    canonicalName: 'FLUSHED FACE',
    slangMeanings: ['flushed'],
  },
  '😴': {
    canonicalName: 'SLEEPING FACE',
    slangMeanings: ['sleeping'],
  },
  '😵': {
    canonicalName: 'DIZZY FACE',
    slangMeanings: ['dizzy_face'],
  },
  '😶': {
    canonicalName: 'FACE WITHOUT MOUTH',
    slangMeanings: ['no_mouth'],
  },
  '😷': {
    canonicalName: 'FACE WITH MEDICAL MASK',
    slangMeanings: ['mask'],
  },
  '😸': {
    canonicalName: 'GRINNING CAT FACE WITH SMILING EYES',
    slangMeanings: ['smile_cat'],
  },
  '😹': {
    canonicalName: 'CAT FACE WITH TEARS OF JOY',
    slangMeanings: ['joy_cat'],
  },
  '😺': {
    canonicalName: 'SMILING CAT FACE WITH OPEN MOUTH',
    slangMeanings: ['smiley_cat'],
  },
  '😻': {
    canonicalName: 'SMILING CAT FACE WITH HEART-SHAPED EYES',
    slangMeanings: ['heart_eyes_cat'],
  },
  '😼': {
    canonicalName: 'CAT FACE WITH WRY SMILE',
    slangMeanings: ['smirk_cat'],
  },
  '😽': {
    canonicalName: 'KISSING CAT FACE WITH CLOSED EYES',
    slangMeanings: ['kissing_cat'],
  },
  '😾': {
    canonicalName: 'POUTING CAT FACE',
    slangMeanings: ['pouting_cat'],
  },
  '😿': {
    canonicalName: 'CRYING CAT FACE',
    slangMeanings: ['crying_cat_face'],
  },
  '🙀': {
    canonicalName: 'WEARY CAT FACE',
    slangMeanings: ['scream_cat'],
  },
  '🙁': {
    canonicalName: 'SLIGHTLY FROWNING FACE',
    slangMeanings: ['slightly_frowning_face'],
  },
  '🙂': {
    canonicalName: 'SLIGHTLY SMILING FACE',
    slangMeanings: ['slightly_smiling_face'],
  },
  '🙃': {
    canonicalName: 'UPSIDE-DOWN FACE',
    slangMeanings: ['upside_down_face'],
  },
  '🙄': {
    canonicalName: 'FACE WITH ROLLING EYES',
    slangMeanings: ['face_with_rolling_eyes'],
  },
  '🙅': {
    canonicalName: 'FACE WITH NO GOOD GESTURE',
    slangMeanings: ['no_good'],
  },
  '🙆': {
    canonicalName: 'FACE WITH OK GESTURE',
    slangMeanings: ['ok_woman'],
  },
  '🙇': {
    canonicalName: 'PERSON BOWING DEEPLY',
    slangMeanings: ['bow'],
  },
  '🙈': {
    canonicalName: 'SEE-NO-EVIL MONKEY',
    slangMeanings: ['see_no_evil'],
  },
  '🙉': {
    canonicalName: 'HEAR-NO-EVIL MONKEY',
    slangMeanings: ['hear_no_evil'],
  },
  '🙊': {
    canonicalName: 'SPEAK-NO-EVIL MONKEY',
    slangMeanings: ['speak_no_evil'],
  },
  '🙋': {
    canonicalName: 'HAPPY PERSON RAISING ONE HAND',
    slangMeanings: ['raising_hand'],
  },
  '🙌': {
    canonicalName: 'PERSON RAISING BOTH HANDS IN CELEBRATION',
    slangMeanings: ['raised_hands'],
  },
  '🙍': {
    canonicalName: 'PERSON FROWNING',
    slangMeanings: ['person_frowning'],
  },
  '🙎': {
    canonicalName: 'PERSON WITH POUTING FACE',
    slangMeanings: ['person_with_pouting_face'],
  },
  '🙏': {
    canonicalName: 'PERSON WITH FOLDED HANDS',
    slangMeanings: ['pray'],
  },
  '🚀': {
    canonicalName: 'ROCKET',
    slangMeanings: ['rocket'],
  },
  '🚁': {
    canonicalName: 'HELICOPTER',
    slangMeanings: ['helicopter'],
  },
  '🚂': {
    canonicalName: 'STEAM LOCOMOTIVE',
    slangMeanings: ['steam_locomotive'],
  },
  '🚃': {
    canonicalName: 'RAILWAY CAR',
    slangMeanings: ['railway_car'],
  },
  '🚄': {
    canonicalName: 'HIGH-SPEED TRAIN',
    slangMeanings: ['bullettrain_side'],
  },
  '🚅': {
    canonicalName: 'HIGH-SPEED TRAIN WITH BULLET NOSE',
    slangMeanings: ['bullettrain_front'],
  },
  '🚆': {
    canonicalName: 'TRAIN',
    slangMeanings: ['train2'],
  },
  '🚇': {
    canonicalName: 'METRO',
    slangMeanings: ['metro'],
  },
  '🚈': {
    canonicalName: 'LIGHT RAIL',
    slangMeanings: ['light_rail'],
  },
  '🚉': {
    canonicalName: 'STATION',
    slangMeanings: ['station'],
  },
  '🚊': {
    canonicalName: 'TRAM',
    slangMeanings: ['tram'],
  },
  '🚋': {
    canonicalName: 'TRAM CAR',
    slangMeanings: ['train'],
  },
  '🚌': {
    canonicalName: 'BUS',
    slangMeanings: ['bus'],
  },
  '🚍': {
    canonicalName: 'ONCOMING BUS',
    slangMeanings: ['oncoming_bus'],
  },
  '🚎': {
    canonicalName: 'TROLLEYBUS',
    slangMeanings: ['trolleybus'],
  },
  '🚏': {
    canonicalName: 'BUS STOP',
    slangMeanings: ['busstop'],
  },
  '🚐': {
    canonicalName: 'MINIBUS',
    slangMeanings: ['minibus'],
  },
  '🚑': {
    canonicalName: 'AMBULANCE',
    slangMeanings: ['ambulance'],
  },
  '🚒': {
    canonicalName: 'FIRE ENGINE',
    slangMeanings: ['fire_engine'],
  },
  '🚓': {
    canonicalName: 'POLICE CAR',
    slangMeanings: ['police_car'],
  },
  '🚔': {
    canonicalName: 'ONCOMING POLICE CAR',
    slangMeanings: ['oncoming_police_car'],
  },
  '🚕': {
    canonicalName: 'TAXI',
    slangMeanings: ['taxi'],
  },
  '🚖': {
    canonicalName: 'ONCOMING TAXI',
    slangMeanings: ['oncoming_taxi'],
  },
  '🚗': {
    canonicalName: 'AUTOMOBILE',
    slangMeanings: ['car', 'red_car'],
  },
  '🚘': {
    canonicalName: 'ONCOMING AUTOMOBILE',
    slangMeanings: ['oncoming_automobile'],
  },
  '🚙': {
    canonicalName: 'RECREATIONAL VEHICLE',
    slangMeanings: ['blue_car'],
  },
  '🚚': {
    canonicalName: 'DELIVERY TRUCK',
    slangMeanings: ['truck'],
  },
  '🚛': {
    canonicalName: 'ARTICULATED LORRY',
    slangMeanings: ['articulated_lorry'],
  },
  '🚜': {
    canonicalName: 'TRACTOR',
    slangMeanings: ['tractor'],
  },
  '🚝': {
    canonicalName: 'MONORAIL',
    slangMeanings: ['monorail'],
  },
  '🚞': {
    canonicalName: 'MOUNTAIN RAILWAY',
    slangMeanings: ['mountain_railway'],
  },
  '🚟': {
    canonicalName: 'SUSPENSION RAILWAY',
    slangMeanings: ['suspension_railway'],
  },
  '🚠': {
    canonicalName: 'MOUNTAIN CABLEWAY',
    slangMeanings: ['mountain_cableway'],
  },
  '🚡': {
    canonicalName: 'AERIAL TRAMWAY',
    slangMeanings: ['aerial_tramway'],
  },
  '🚢': {
    canonicalName: 'SHIP',
    slangMeanings: ['ship'],
  },
  '🚣': {
    canonicalName: 'ROWBOAT',
    slangMeanings: ['rowboat'],
  },
  '🚤': {
    canonicalName: 'SPEEDBOAT',
    slangMeanings: ['speedboat'],
  },
  '🚥': {
    canonicalName: 'HORIZONTAL TRAFFIC LIGHT',
    slangMeanings: ['traffic_light'],
  },
  '🚦': {
    canonicalName: 'VERTICAL TRAFFIC LIGHT',
    slangMeanings: ['vertical_traffic_light'],
  },
  '🚧': {
    canonicalName: 'CONSTRUCTION SIGN',
    slangMeanings: ['construction'],
  },
  '🚨': {
    canonicalName: 'POLICE CARS REVOLVING LIGHT',
    slangMeanings: ['rotating_light'],
  },
  '🚩': {
    canonicalName: 'TRIANGULAR FLAG ON POST',
    slangMeanings: ['triangular_flag_on_post'],
  },
  '🚪': {
    canonicalName: 'DOOR',
    slangMeanings: ['door'],
  },
  '🚫': {
    canonicalName: 'NO ENTRY SIGN',
    slangMeanings: ['no_entry_sign'],
  },
  '🚬': {
    canonicalName: 'SMOKING SYMBOL',
    slangMeanings: ['smoking'],
  },
  '🚭': {
    canonicalName: 'NO SMOKING SYMBOL',
    slangMeanings: ['no_smoking'],
  },
  '🚮': {
    canonicalName: 'PUT LITTER IN ITS PLACE SYMBOL',
    slangMeanings: ['put_litter_in_its_place'],
  },
  '🚯': {
    canonicalName: 'DO NOT LITTER SYMBOL',
    slangMeanings: ['do_not_litter'],
  },
  '🚰': {
    canonicalName: 'POTABLE WATER SYMBOL',
    slangMeanings: ['potable_water'],
  },
  '🚱': {
    canonicalName: 'NON-POTABLE WATER SYMBOL',
    slangMeanings: ['non-potable_water'],
  },
  '🚲': {
    canonicalName: 'BICYCLE',
    slangMeanings: ['bike'],
  },
  '🚳': {
    canonicalName: 'NO BICYCLES',
    slangMeanings: ['no_bicycles'],
  },
  '🚴': {
    canonicalName: 'BICYCLIST',
    slangMeanings: ['bicyclist'],
  },
  '🚵': {
    canonicalName: 'MOUNTAIN BICYCLIST',
    slangMeanings: ['mountain_bicyclist'],
  },
  '🚶': {
    canonicalName: 'PEDESTRIAN',
    slangMeanings: ['walking'],
  },
  '🚷': {
    canonicalName: 'NO PEDESTRIANS',
    slangMeanings: ['no_pedestrians'],
  },
  '🚸': {
    canonicalName: 'CHILDREN CROSSING',
    slangMeanings: ['children_crossing'],
  },
  '🚹': {
    canonicalName: 'MENS SYMBOL',
    slangMeanings: ['mens'],
  },
  '🚺': {
    canonicalName: 'WOMENS SYMBOL',
    slangMeanings: ['womens'],
  },
  '🚻': {
    canonicalName: 'RESTROOM',
    slangMeanings: ['restroom'],
  },
  '🚼': {
    canonicalName: 'BABY SYMBOL',
    slangMeanings: ['baby_symbol'],
  },
  '🚽': {
    canonicalName: 'TOILET',
    slangMeanings: ['toilet'],
  },
  '🚾': {
    canonicalName: 'WATER CLOSET',
    slangMeanings: ['wc'],
  },
  '🚿': {
    canonicalName: 'SHOWER',
    slangMeanings: ['shower'],
  },
  '🛀': {
    canonicalName: 'BATH',
    slangMeanings: ['bath'],
  },
  '🛁': {
    canonicalName: 'BATHTUB',
    slangMeanings: ['bathtub'],
  },
  '🛂': {
    canonicalName: 'PASSPORT CONTROL',
    slangMeanings: ['passport_control'],
  },
  '🛃': {
    canonicalName: 'CUSTOMS',
    slangMeanings: ['customs'],
  },
  '🛄': {
    canonicalName: 'BAGGAGE CLAIM',
    slangMeanings: ['baggage_claim'],
  },
  '🛅': {
    canonicalName: 'LEFT LUGGAGE',
    slangMeanings: ['left_luggage'],
  },
  '🛌': {
    canonicalName: 'SLEEPING ACCOMMODATION',
    slangMeanings: ['sleeping_accommodation'],
  },
  '🛐': {
    canonicalName: 'PLACE OF WORSHIP',
    slangMeanings: ['place_of_worship'],
  },
  '🛑': {
    canonicalName: 'OCTAGONAL SIGN',
    slangMeanings: ['octagonal_sign'],
  },
  '🛒': {
    canonicalName: 'SHOPPING TROLLEY',
    slangMeanings: ['shopping_trolley'],
  },
  '🛕': {
    canonicalName: 'HINDU TEMPLE',
    slangMeanings: ['hindu_temple'],
  },
  '🛖': {
    canonicalName: 'HUT',
    slangMeanings: ['hut'],
  },
  '🛗': {
    canonicalName: 'ELEVATOR',
    slangMeanings: ['elevator'],
  },
  '🛜': {
    canonicalName: 'WIRELESS',
    slangMeanings: ['wireless'],
  },
  '🛝': {
    canonicalName: 'PLAYGROUND SLIDE',
    slangMeanings: ['playground_slide'],
  },
  '🛞': {
    canonicalName: 'WHEEL',
    slangMeanings: ['wheel'],
  },
  '🛟': {
    canonicalName: 'RING BUOY',
    slangMeanings: ['ring_buoy'],
  },
  '🛫': {
    canonicalName: 'AIRPLANE DEPARTURE',
    slangMeanings: ['airplane_departure'],
  },
  '🛬': {
    canonicalName: 'AIRPLANE ARRIVING',
    slangMeanings: ['airplane_arriving'],
  },
  '🛴': {
    canonicalName: 'SCOOTER',
    slangMeanings: ['scooter'],
  },
  '🛵': {
    canonicalName: 'MOTOR SCOOTER',
    slangMeanings: ['motor_scooter'],
  },
  '🛶': {
    canonicalName: 'CANOE',
    slangMeanings: ['canoe'],
  },
  '🛷': {
    canonicalName: 'SLED',
    slangMeanings: ['sled'],
  },
  '🛸': {
    canonicalName: 'FLYING SAUCER',
    slangMeanings: ['flying_saucer'],
  },
  '🛹': {
    canonicalName: 'SKATEBOARD',
    slangMeanings: ['skateboard'],
  },
  '🛺': {
    canonicalName: 'AUTO RICKSHAW',
    slangMeanings: ['auto_rickshaw'],
  },
  '🛻': {
    canonicalName: 'PICKUP TRUCK',
    slangMeanings: ['pickup_truck'],
  },
  '🛼': {
    canonicalName: 'ROLLER SKATE',
    slangMeanings: ['roller_skate'],
  },
  '🟠': {
    canonicalName: 'LARGE ORANGE CIRCLE',
    slangMeanings: ['large_orange_circle'],
  },
  '🟡': {
    canonicalName: 'LARGE YELLOW CIRCLE',
    slangMeanings: ['large_yellow_circle'],
  },
  '🟢': {
    canonicalName: 'LARGE GREEN CIRCLE',
    slangMeanings: ['large_green_circle'],
  },
  '🟣': {
    canonicalName: 'LARGE PURPLE CIRCLE',
    slangMeanings: ['large_purple_circle'],
  },
  '🟤': {
    canonicalName: 'LARGE BROWN CIRCLE',
    slangMeanings: ['large_brown_circle'],
  },
  '🟥': {
    canonicalName: 'LARGE RED SQUARE',
    slangMeanings: ['large_red_square'],
  },
  '🟦': {
    canonicalName: 'LARGE BLUE SQUARE',
    slangMeanings: ['large_blue_square'],
  },
  '🟧': {
    canonicalName: 'LARGE ORANGE SQUARE',
    slangMeanings: ['large_orange_square'],
  },
  '🟨': {
    canonicalName: 'LARGE YELLOW SQUARE',
    slangMeanings: ['large_yellow_square'],
  },
  '🟩': {
    canonicalName: 'LARGE GREEN SQUARE',
    slangMeanings: ['large_green_square'],
  },
  '🟪': {
    canonicalName: 'LARGE PURPLE SQUARE',
    slangMeanings: ['large_purple_square'],
  },
  '🟫': {
    canonicalName: 'LARGE BROWN SQUARE',
    slangMeanings: ['large_brown_square'],
  },
  '🟰': {
    canonicalName: 'HEAVY EQUALS SIGN',
    slangMeanings: ['heavy_equals_sign'],
  },
  '🤌': {
    canonicalName: 'PINCHED FINGERS',
    slangMeanings: ['pinched_fingers'],
  },
  '🤍': {
    canonicalName: 'WHITE HEART',
    slangMeanings: ['white_heart'],
  },
  '🤎': {
    canonicalName: 'BROWN HEART',
    slangMeanings: ['brown_heart'],
  },
  '🤏': {
    canonicalName: 'PINCHING HAND',
    slangMeanings: ['pinching_hand'],
  },
  '🤐': {
    canonicalName: 'ZIPPER-MOUTH FACE',
    slangMeanings: ['zipper_mouth_face'],
  },
  '🤑': {
    canonicalName: 'MONEY-MOUTH FACE',
    slangMeanings: ['money_mouth_face'],
  },
  '🤒': {
    canonicalName: 'FACE WITH THERMOMETER',
    slangMeanings: ['face_with_thermometer'],
  },
  '🤓': {
    canonicalName: 'NERD FACE',
    slangMeanings: ['nerd_face'],
  },
  '🤔': {
    canonicalName: 'THINKING FACE',
    slangMeanings: ['thinking_face'],
  },
  '🤕': {
    canonicalName: 'FACE WITH HEAD-BANDAGE',
    slangMeanings: ['face_with_head_bandage'],
  },
  '🤖': {
    canonicalName: 'ROBOT FACE',
    slangMeanings: ['robot_face'],
  },
  '🤗': {
    canonicalName: 'HUGGING FACE',
    slangMeanings: ['hugging_face'],
  },
  '🤘': {
    canonicalName: 'SIGN OF THE HORNS',
    slangMeanings: ['sign_of_the_horns', 'the_horns'],
  },
  '🤙': {
    canonicalName: 'CALL ME HAND',
    slangMeanings: ['call_me_hand'],
  },
  '🤚': {
    canonicalName: 'RAISED BACK OF HAND',
    slangMeanings: ['raised_back_of_hand'],
  },
  '🤛': {
    canonicalName: 'LEFT-FACING FIST',
    slangMeanings: ['left-facing_fist'],
  },
  '🤜': {
    canonicalName: 'RIGHT-FACING FIST',
    slangMeanings: ['right-facing_fist'],
  },
  '🤝': {
    canonicalName: 'HANDSHAKE',
    slangMeanings: ['handshake'],
  },
  '🤞': {
    canonicalName: 'HAND WITH INDEX AND MIDDLE FINGERS CROSSED',
    slangMeanings: ['crossed_fingers', 'hand_with_index_and_middle_fingers_crossed'],
  },
  '🤟': {
    canonicalName: 'I LOVE YOU HAND SIGN',
    slangMeanings: ['i_love_you_hand_sign'],
  },
  '🤠': {
    canonicalName: 'FACE WITH COWBOY HAT',
    slangMeanings: ['face_with_cowboy_hat'],
  },
  '🤡': {
    canonicalName: 'CLOWN FACE',
    slangMeanings: ['clown_face'],
  },
  '🤢': {
    canonicalName: 'NAUSEATED FACE',
    slangMeanings: ['nauseated_face'],
  },
  '🤣': {
    canonicalName: 'ROLLING ON THE FLOOR LAUGHING',
    slangMeanings: ['rolling_on_the_floor_laughing'],
  },
  '🤤': {
    canonicalName: 'DROOLING FACE',
    slangMeanings: ['drooling_face'],
  },
  '🤥': {
    canonicalName: 'LYING FACE',
    slangMeanings: ['lying_face'],
  },
  '🤦': {
    canonicalName: 'FACE PALM',
    slangMeanings: ['face_palm'],
  },
  '🤧': {
    canonicalName: 'SNEEZING FACE',
    slangMeanings: ['sneezing_face'],
  },
  '🤨': {
    canonicalName: 'FACE WITH ONE EYEBROW RAISED',
    slangMeanings: ['face_with_one_eyebrow_raised', 'face_with_raised_eyebrow'],
  },
  '🤩': {
    canonicalName: 'GRINNING FACE WITH STAR EYES',
    slangMeanings: ['grinning_face_with_star_eyes', 'star-struck'],
  },
  '🤪': {
    canonicalName: 'GRINNING FACE WITH ONE LARGE AND ONE SMALL EYE',
    slangMeanings: ['grinning_face_with_one_large_and_one_small_eye', 'zany_face'],
  },
  '🤫': {
    canonicalName: 'FACE WITH FINGER COVERING CLOSED LIPS',
    slangMeanings: ['face_with_finger_covering_closed_lips', 'shushing_face'],
  },
  '🤬': {
    canonicalName: 'SERIOUS FACE WITH SYMBOLS COVERING MOUTH',
    slangMeanings: ['face_with_symbols_on_mouth', 'serious_face_with_symbols_covering_mouth'],
  },
  '🤭': {
    canonicalName: 'SMILING FACE WITH SMILING EYES AND HAND COVERING MOUTH',
    slangMeanings: ['face_with_hand_over_mouth', 'smiling_face_with_smiling_eyes_and_hand_covering_mouth'],
  },
  '🤮': {
    canonicalName: 'FACE WITH OPEN MOUTH VOMITING',
    slangMeanings: ['face_vomiting', 'face_with_open_mouth_vomiting'],
  },
  '🤯': {
    canonicalName: 'SHOCKED FACE WITH EXPLODING HEAD',
    slangMeanings: ['exploding_head', 'shocked_face_with_exploding_head'],
  },
  '🤰': {
    canonicalName: 'PREGNANT WOMAN',
    slangMeanings: ['pregnant_woman'],
  },
  '🤱': {
    canonicalName: 'BREAST-FEEDING',
    slangMeanings: ['breast-feeding'],
  },
  '🤲': {
    canonicalName: 'PALMS UP TOGETHER',
    slangMeanings: ['palms_up_together'],
  },
  '🤳': {
    canonicalName: 'SELFIE',
    slangMeanings: ['selfie'],
  },
  '🤴': {
    canonicalName: 'PRINCE',
    slangMeanings: ['prince'],
  },
  '🤵': {
    canonicalName: 'MAN IN TUXEDO',
    slangMeanings: ['person_in_tuxedo'],
  },
  '🤶': {
    canonicalName: 'MOTHER CHRISTMAS',
    slangMeanings: ['mother_christmas', 'mrs_claus'],
  },
  '🤷': {
    canonicalName: 'SHRUG',
    slangMeanings: ['shrug'],
  },
  '🤸': {
    canonicalName: 'PERSON DOING CARTWHEEL',
    slangMeanings: ['person_doing_cartwheel'],
  },
  '🤹': {
    canonicalName: 'JUGGLING',
    slangMeanings: ['juggling'],
  },
  '🤺': {
    canonicalName: 'FENCER',
    slangMeanings: ['fencer'],
  },
  '🤼': {
    canonicalName: 'WRESTLERS',
    slangMeanings: ['wrestlers'],
  },
  '🤽': {
    canonicalName: 'WATER POLO',
    slangMeanings: ['water_polo'],
  },
  '🤾': {
    canonicalName: 'HANDBALL',
    slangMeanings: ['handball'],
  },
  '🤿': {
    canonicalName: 'DIVING MASK',
    slangMeanings: ['diving_mask'],
  },
  '🥀': {
    canonicalName: 'WILTED FLOWER',
    slangMeanings: ['wilted_flower'],
  },
  '🥁': {
    canonicalName: 'DRUM WITH DRUMSTICKS',
    slangMeanings: ['drum_with_drumsticks'],
  },
  '🥂': {
    canonicalName: 'CLINKING GLASSES',
    slangMeanings: ['clinking_glasses'],
  },
  '🥃': {
    canonicalName: 'TUMBLER GLASS',
    slangMeanings: ['tumbler_glass'],
  },
  '🥄': {
    canonicalName: 'SPOON',
    slangMeanings: ['spoon'],
  },
  '🥅': {
    canonicalName: 'GOAL NET',
    slangMeanings: ['goal_net'],
  },
  '🥇': {
    canonicalName: 'FIRST PLACE MEDAL',
    slangMeanings: ['first_place_medal'],
  },
  '🥈': {
    canonicalName: 'SECOND PLACE MEDAL',
    slangMeanings: ['second_place_medal'],
  },
  '🥉': {
    canonicalName: 'THIRD PLACE MEDAL',
    slangMeanings: ['third_place_medal'],
  },
  '🥊': {
    canonicalName: 'BOXING GLOVE',
    slangMeanings: ['boxing_glove'],
  },
  '🥋': {
    canonicalName: 'MARTIAL ARTS UNIFORM',
    slangMeanings: ['martial_arts_uniform'],
  },
  '🥌': {
    canonicalName: 'CURLING STONE',
    slangMeanings: ['curling_stone'],
  },
  '🥍': {
    canonicalName: 'LACROSSE STICK AND BALL',
    slangMeanings: ['lacrosse'],
  },
  '🥎': {
    canonicalName: 'SOFTBALL',
    slangMeanings: ['softball'],
  },
  '🥏': {
    canonicalName: 'FLYING DISC',
    slangMeanings: ['flying_disc'],
  },
  '🥐': {
    canonicalName: 'CROISSANT',
    slangMeanings: ['croissant'],
  },
  '🥑': {
    canonicalName: 'AVOCADO',
    slangMeanings: ['avocado'],
  },
  '🥒': {
    canonicalName: 'CUCUMBER',
    slangMeanings: ['cucumber'],
  },
  '🥓': {
    canonicalName: 'BACON',
    slangMeanings: ['bacon'],
  },
  '🥔': {
    canonicalName: 'POTATO',
    slangMeanings: ['potato'],
  },
  '🥕': {
    canonicalName: 'CARROT',
    slangMeanings: ['carrot'],
  },
  '🥖': {
    canonicalName: 'BAGUETTE BREAD',
    slangMeanings: ['baguette_bread'],
  },
  '🥗': {
    canonicalName: 'GREEN SALAD',
    slangMeanings: ['green_salad'],
  },
  '🥘': {
    canonicalName: 'SHALLOW PAN OF FOOD',
    slangMeanings: ['shallow_pan_of_food'],
  },
  '🥙': {
    canonicalName: 'STUFFED FLATBREAD',
    slangMeanings: ['stuffed_flatbread'],
  },
  '🥚': {
    canonicalName: 'EGG',
    slangMeanings: ['egg'],
  },
  '🥛': {
    canonicalName: 'GLASS OF MILK',
    slangMeanings: ['glass_of_milk'],
  },
  '🥜': {
    canonicalName: 'PEANUTS',
    slangMeanings: ['peanuts', 'to ejaculate', 'to nut'],
  },
  '🥝': {
    canonicalName: 'KIWIFRUIT',
    slangMeanings: ['kiwifruit'],
  },
  '🥞': {
    canonicalName: 'PANCAKES',
    slangMeanings: ['flat ass', 'flat bottom', 'pancakes'],
  },
  '🥟': {
    canonicalName: 'DUMPLING',
    slangMeanings: ['dumpling'],
  },
  '🥠': {
    canonicalName: 'FORTUNE COOKIE',
    slangMeanings: ['fortune_cookie'],
  },
  '🥡': {
    canonicalName: 'TAKEOUT BOX',
    slangMeanings: ['takeout_box'],
  },
  '🥢': {
    canonicalName: 'CHOPSTICKS',
    slangMeanings: ['chopsticks'],
  },
  '🥣': {
    canonicalName: 'BOWL WITH SPOON',
    slangMeanings: ['bowl_with_spoon'],
  },
  '🥤': {
    canonicalName: 'CUP WITH STRAW',
    slangMeanings: ['cup_with_straw'],
  },
  '🥥': {
    canonicalName: 'COCONUT',
    slangMeanings: ['coconut'],
  },
  '🥦': {
    canonicalName: 'BROCCOLI',
    slangMeanings: ['broccoli'],
  },
  '🥧': {
    canonicalName: 'PIE',
    slangMeanings: ['pie'],
  },
  '🥨': {
    canonicalName: 'PRETZEL',
    slangMeanings: ['pretzel'],
  },
  '🥩': {
    canonicalName: 'CUT OF MEAT',
    slangMeanings: ['cut_of_meat'],
  },
  '🥪': {
    canonicalName: 'SANDWICH',
    slangMeanings: ['sandwich'],
  },
  '🥫': {
    canonicalName: 'CANNED FOOD',
    slangMeanings: ['canned_food'],
  },
  '🥬': {
    canonicalName: 'LEAFY GREEN',
    slangMeanings: ['leafy_green'],
  },
  '🥭': {
    canonicalName: 'MANGO',
    slangMeanings: ['mango'],
  },
  '🥮': {
    canonicalName: 'MOON CAKE',
    slangMeanings: ['moon_cake'],
  },
  '🥯': {
    canonicalName: 'BAGEL',
    slangMeanings: ['bagel'],
  },
  '🥰': {
    canonicalName: 'SMILING FACE WITH SMILING EYES AND THREE HEARTS',
    slangMeanings: ['smiling_face_with_3_hearts'],
  },
  '🥱': {
    canonicalName: 'YAWNING FACE',
    slangMeanings: ['yawning_face'],
  },
  '🥲': {
    canonicalName: 'SMILING FACE WITH TEAR',
    slangMeanings: ['smiling_face_with_tear'],
  },
  '🥳': {
    canonicalName: 'FACE WITH PARTY HORN AND PARTY HAT',
    slangMeanings: ['partying_face'],
  },
  '🥴': {
    canonicalName: 'FACE WITH UNEVEN EYES AND WAVY MOUTH',
    slangMeanings: ['woozy_face'],
  },
  '🥵': {
    canonicalName: 'OVERHEATED FACE',
    slangMeanings: ['hot_face'],
  },
  '🥶': {
    canonicalName: 'FREEZING FACE',
    slangMeanings: ['cold_face'],
  },
  '🥷': {
    canonicalName: 'NINJA',
    slangMeanings: ['ninja'],
  },
  '🥸': {
    canonicalName: 'DISGUISED FACE',
    slangMeanings: ['disguised_face'],
  },
  '🥹': {
    canonicalName: 'FACE HOLDING BACK TEARS',
    slangMeanings: ['face_holding_back_tears'],
  },
  '🥺': {
    canonicalName: 'FACE WITH PLEADING EYES',
    slangMeanings: ['pleading_face'],
  },
  '🥻': {
    canonicalName: 'SARI',
    slangMeanings: ['sari'],
  },
  '🥼': {
    canonicalName: 'LAB COAT',
    slangMeanings: ['lab_coat'],
  },
  '🥽': {
    canonicalName: 'GOGGLES',
    slangMeanings: ['goggles'],
  },
  '🥾': {
    canonicalName: 'HIKING BOOT',
    slangMeanings: ['hiking_boot'],
  },
  '🥿': {
    canonicalName: 'FLAT SHOE',
    slangMeanings: ['womans_flat_shoe'],
  },
  '🦀': {
    canonicalName: 'CRAB',
    slangMeanings: ['crab'],
  },
  '🦁': {
    canonicalName: 'LION FACE',
    slangMeanings: ['lion_face'],
  },
  '🦂': {
    canonicalName: 'SCORPION',
    slangMeanings: ['scorpion'],
  },
  '🦃': {
    canonicalName: 'TURKEY',
    slangMeanings: ['turkey'],
  },
  '🦄': {
    canonicalName: 'UNICORN FACE',
    slangMeanings: ['unicorn_face'],
  },
  '🦅': {
    canonicalName: 'EAGLE',
    slangMeanings: ['eagle'],
  },
  '🦆': {
    canonicalName: 'DUCK',
    slangMeanings: ['duck'],
  },
  '🦇': {
    canonicalName: 'BAT',
    slangMeanings: ['bat'],
  },
  '🦈': {
    canonicalName: 'SHARK',
    slangMeanings: ['shark'],
  },
  '🦉': {
    canonicalName: 'OWL',
    slangMeanings: ['owl'],
  },
  '🦊': {
    canonicalName: 'FOX FACE',
    slangMeanings: ['fox_face'],
  },
  '🦋': {
    canonicalName: 'BUTTERFLY',
    slangMeanings: ['butterfly'],
  },
  '🦌': {
    canonicalName: 'DEER',
    slangMeanings: ['deer'],
  },
  '🦍': {
    canonicalName: 'GORILLA',
    slangMeanings: ['gorilla'],
  },
  '🦎': {
    canonicalName: 'LIZARD',
    slangMeanings: ['lizard'],
  },
  '🦏': {
    canonicalName: 'RHINOCEROS',
    slangMeanings: ['rhinoceros'],
  },
  '🦐': {
    canonicalName: 'SHRIMP',
    slangMeanings: ['shrimp'],
  },
  '🦑': {
    canonicalName: 'SQUID',
    slangMeanings: ['squid'],
  },
  '🦒': {
    canonicalName: 'GIRAFFE FACE',
    slangMeanings: ['giraffe_face'],
  },
  '🦓': {
    canonicalName: 'ZEBRA FACE',
    slangMeanings: ['zebra_face'],
  },
  '🦔': {
    canonicalName: 'HEDGEHOG',
    slangMeanings: ['hedgehog'],
  },
  '🦕': {
    canonicalName: 'SAUROPOD',
    slangMeanings: ['sauropod'],
  },
  '🦖': {
    canonicalName: 'T-REX',
    slangMeanings: ['t-rex'],
  },
  '🦗': {
    canonicalName: 'CRICKET',
    slangMeanings: ['cricket'],
  },
  '🦘': {
    canonicalName: 'KANGAROO',
    slangMeanings: ['kangaroo'],
  },
  '🦙': {
    canonicalName: 'LLAMA',
    slangMeanings: ['llama'],
  },
  '🦚': {
    canonicalName: 'PEACOCK',
    slangMeanings: ['peacock'],
  },
  '🦛': {
    canonicalName: 'HIPPOPOTAMUS',
    slangMeanings: ['hippopotamus'],
  },
  '🦜': {
    canonicalName: 'PARROT',
    slangMeanings: ['parrot'],
  },
  '🦝': {
    canonicalName: 'RACCOON',
    slangMeanings: ['raccoon'],
  },
  '🦞': {
    canonicalName: 'LOBSTER',
    slangMeanings: ['lobster'],
  },
  '🦟': {
    canonicalName: 'MOSQUITO',
    slangMeanings: ['mosquito'],
  },
  '🦠': {
    canonicalName: 'MICROBE',
    slangMeanings: ['microbe'],
  },
  '🦡': {
    canonicalName: 'BADGER',
    slangMeanings: ['badger'],
  },
  '🦢': {
    canonicalName: 'SWAN',
    slangMeanings: ['swan'],
  },
  '🦣': {
    canonicalName: 'MAMMOTH',
    slangMeanings: ['mammoth'],
  },
  '🦤': {
    canonicalName: 'DODO',
    slangMeanings: ['dodo'],
  },
  '🦥': {
    canonicalName: 'SLOTH',
    slangMeanings: ['sloth'],
  },
  '🦦': {
    canonicalName: 'OTTER',
    slangMeanings: ['otter'],
  },
  '🦧': {
    canonicalName: 'ORANGUTAN',
    slangMeanings: ['orangutan'],
  },
  '🦨': {
    canonicalName: 'SKUNK',
    slangMeanings: ['skunk'],
  },
  '🦩': {
    canonicalName: 'FLAMINGO',
    slangMeanings: ['flamingo'],
  },
  '🦪': {
    canonicalName: 'OYSTER',
    slangMeanings: ['oyster'],
  },
  '🦫': {
    canonicalName: 'BEAVER',
    slangMeanings: ['beaver'],
  },
  '🦬': {
    canonicalName: 'BISON',
    slangMeanings: ['bison'],
  },
  '🦭': {
    canonicalName: 'SEAL',
    slangMeanings: ['seal'],
  },
  '🦮': {
    canonicalName: 'GUIDE DOG',
    slangMeanings: ['guide_dog'],
  },
  '🦯': {
    canonicalName: 'PROBING CANE',
    slangMeanings: ['probing_cane'],
  },
  '🦴': {
    canonicalName: 'BONE',
    slangMeanings: ['bone'],
  },
  '🦵': {
    canonicalName: 'LEG',
    slangMeanings: ['leg'],
  },
  '🦶': {
    canonicalName: 'FOOT',
    slangMeanings: ['foot'],
  },
  '🦷': {
    canonicalName: 'TOOTH',
    slangMeanings: ['tooth'],
  },
  '🦸': {
    canonicalName: 'SUPERHERO',
    slangMeanings: ['superhero'],
  },
  '🦹': {
    canonicalName: 'SUPERVILLAIN',
    slangMeanings: ['supervillain'],
  },
  '🦺': {
    canonicalName: 'SAFETY VEST',
    slangMeanings: ['safety_vest'],
  },
  '🦻': {
    canonicalName: 'EAR WITH HEARING AID',
    slangMeanings: ['ear_with_hearing_aid'],
  },
  '🦼': {
    canonicalName: 'MOTORIZED WHEELCHAIR',
    slangMeanings: ['motorized_wheelchair'],
  },
  '🦽': {
    canonicalName: 'MANUAL WHEELCHAIR',
    slangMeanings: ['manual_wheelchair'],
  },
  '🦾': {
    canonicalName: 'MECHANICAL ARM',
    slangMeanings: ['mechanical_arm'],
  },
  '🦿': {
    canonicalName: 'MECHANICAL LEG',
    slangMeanings: ['mechanical_leg'],
  },
  '🧀': {
    canonicalName: 'CHEESE WEDGE',
    slangMeanings: ['cheese_wedge'],
  },
  '🧁': {
    canonicalName: 'CUPCAKE',
    slangMeanings: ['cupcake'],
  },
  '🧂': {
    canonicalName: 'SALT SHAKER',
    slangMeanings: ['salt'],
  },
  '🧃': {
    canonicalName: 'BEVERAGE BOX',
    slangMeanings: ['beverage_box'],
  },
  '🧄': {
    canonicalName: 'GARLIC',
    slangMeanings: ['garlic'],
  },
  '🧅': {
    canonicalName: 'ONION',
    slangMeanings: ['onion'],
  },
  '🧆': {
    canonicalName: 'FALAFEL',
    slangMeanings: ['falafel'],
  },
  '🧇': {
    canonicalName: 'WAFFLE',
    slangMeanings: ['waffle'],
  },
  '🧈': {
    canonicalName: 'BUTTER',
    slangMeanings: ['butter'],
  },
  '🧉': {
    canonicalName: 'MATE DRINK',
    slangMeanings: ['mate_drink'],
  },
  '🧊': {
    canonicalName: 'ICE CUBE',
    slangMeanings: ['ice_cube'],
  },
  '🧋': {
    canonicalName: 'BUBBLE TEA',
    slangMeanings: ['bubble_tea'],
  },
  '🧌': {
    canonicalName: 'TROLL',
    slangMeanings: ['troll'],
  },
  '🧍': {
    canonicalName: 'STANDING PERSON',
    slangMeanings: ['standing_person'],
  },
  '🧎': {
    canonicalName: 'KNEELING PERSON',
    slangMeanings: ['kneeling_person'],
  },
  '🧏': {
    canonicalName: 'DEAF PERSON',
    slangMeanings: ['deaf_person'],
  },
  '🧐': {
    canonicalName: 'FACE WITH MONOCLE',
    slangMeanings: ['face_with_monocle'],
  },
  '🧑': {
    canonicalName: 'ADULT',
    slangMeanings: ['adult'],
  },
  '🧒': {
    canonicalName: 'CHILD',
    slangMeanings: ['child'],
  },
  '🧓': {
    canonicalName: 'OLDER ADULT',
    slangMeanings: ['older_adult'],
  },
  '🧔': {
    canonicalName: 'BEARDED PERSON',
    slangMeanings: ['bearded_person'],
  },
  '🧕': {
    canonicalName: 'PERSON WITH HEADSCARF',
    slangMeanings: ['person_with_headscarf'],
  },
  '🧖': {
    canonicalName: 'PERSON IN STEAMY ROOM',
    slangMeanings: ['person_in_steamy_room'],
  },
  '🧗': {
    canonicalName: 'PERSON CLIMBING',
    slangMeanings: ['person_climbing'],
  },
  '🧘': {
    canonicalName: 'PERSON IN LOTUS POSITION',
    slangMeanings: ['person_in_lotus_position'],
  },
  '🧙': {
    canonicalName: 'MAGE',
    slangMeanings: ['mage'],
  },
  '🧚': {
    canonicalName: 'FAIRY',
    slangMeanings: ['fairy'],
  },
  '🧛': {
    canonicalName: 'VAMPIRE',
    slangMeanings: ['vampire'],
  },
  '🧜': {
    canonicalName: 'MERPERSON',
    slangMeanings: ['merperson'],
  },
  '🧝': {
    canonicalName: 'ELF',
    slangMeanings: ['elf'],
  },
  '🧞': {
    canonicalName: 'GENIE',
    slangMeanings: ['genie'],
  },
  '🧟': {
    canonicalName: 'ZOMBIE',
    slangMeanings: ['zombie'],
  },
  '🧠': {
    canonicalName: 'BRAIN',
    slangMeanings: ['brain', 'give head', 'give oral sex'],
  },
  '🧡': {
    canonicalName: 'ORANGE HEART',
    slangMeanings: ['orange_heart'],
  },
  '🧢': {
    canonicalName: 'BILLED CAP',
    slangMeanings: ['billed_cap'],
  },
  '🧣': {
    canonicalName: 'SCARF',
    slangMeanings: ['scarf'],
  },
  '🧤': {
    canonicalName: 'GLOVES',
    slangMeanings: ['gloves'],
  },
  '🧥': {
    canonicalName: 'COAT',
    slangMeanings: ['coat'],
  },
  '🧦': {
    canonicalName: 'SOCKS',
    slangMeanings: ['socks'],
  },
  '🧧': {
    canonicalName: 'RED GIFT ENVELOPE',
    slangMeanings: ['red_envelope'],
  },
  '🧨': {
    canonicalName: 'FIRECRACKER',
    slangMeanings: ['firecracker'],
  },
  '🧩': {
    canonicalName: 'JIGSAW PUZZLE PIECE',
    slangMeanings: ['jigsaw'],
  },
  '🧪': {
    canonicalName: 'TEST TUBE',
    slangMeanings: ['test_tube'],
  },
  '🧫': {
    canonicalName: 'PETRI DISH',
    slangMeanings: ['petri_dish'],
  },
  '🧬': {
    canonicalName: 'DNA DOUBLE HELIX',
    slangMeanings: ['dna'],
  },
  '🧭': {
    canonicalName: 'COMPASS',
    slangMeanings: ['compass'],
  },
  '🧮': {
    canonicalName: 'ABACUS',
    slangMeanings: ['abacus'],
  },
  '🧯': {
    canonicalName: 'FIRE EXTINGUISHER',
    slangMeanings: ['fire_extinguisher'],
  },
  '🧰': {
    canonicalName: 'TOOLBOX',
    slangMeanings: ['toolbox'],
  },
  '🧱': {
    canonicalName: 'BRICK',
    slangMeanings: ['bricks'],
  },
  '🧲': {
    canonicalName: 'MAGNET',
    slangMeanings: ['magnet'],
  },
  '🧳': {
    canonicalName: 'LUGGAGE',
    slangMeanings: ['luggage'],
  },
  '🧴': {
    canonicalName: 'LOTION BOTTLE',
    slangMeanings: ['lotion_bottle'],
  },
  '🧵': {
    canonicalName: 'SPOOL OF THREAD',
    slangMeanings: ['thread'],
  },
  '🧶': {
    canonicalName: 'BALL OF YARN',
    slangMeanings: ['yarn'],
  },
  '🧷': {
    canonicalName: 'SAFETY PIN',
    slangMeanings: ['safety_pin'],
  },
  '🧸': {
    canonicalName: 'TEDDY BEAR',
    slangMeanings: ['teddy_bear'],
  },
  '🧹': {
    canonicalName: 'BROOM',
    slangMeanings: ['broom'],
  },
  '🧺': {
    canonicalName: 'BASKET',
    slangMeanings: ['basket'],
  },
  '🧻': {
    canonicalName: 'ROLL OF PAPER',
    slangMeanings: ['roll_of_paper'],
  },
  '🧼': {
    canonicalName: 'BAR OF SOAP',
    slangMeanings: ['soap'],
  },
  '🧽': {
    canonicalName: 'SPONGE',
    slangMeanings: ['sponge'],
  },
  '🧾': {
    canonicalName: 'RECEIPT',
    slangMeanings: ['receipt'],
  },
  '🧿': {
    canonicalName: 'NAZAR AMULET',
    slangMeanings: ['nazar_amulet'],
  },
  '🩰': {
    canonicalName: 'BALLET SHOES',
    slangMeanings: ['ballet_shoes'],
  },
  '🩱': {
    canonicalName: 'ONE-PIECE SWIMSUIT',
    slangMeanings: ['one-piece_swimsuit'],
  },
  '🩲': {
    canonicalName: 'BRIEFS',
    slangMeanings: ['briefs'],
  },
  '🩳': {
    canonicalName: 'SHORTS',
    slangMeanings: ['shorts'],
  },
  '🩴': {
    canonicalName: 'THONG SANDAL',
    slangMeanings: ['thong_sandal'],
  },
  '🩵': {
    canonicalName: 'LIGHT BLUE HEART',
    slangMeanings: ['light_blue_heart'],
  },
  '🩶': {
    canonicalName: 'GREY HEART',
    slangMeanings: ['grey_heart'],
  },
  '🩷': {
    canonicalName: 'PINK HEART',
    slangMeanings: ['pink_heart'],
  },
  '🩸': {
    canonicalName: 'DROP OF BLOOD',
    slangMeanings: ['drop_of_blood'],
  },
  '🩹': {
    canonicalName: 'ADHESIVE BANDAGE',
    slangMeanings: ['adhesive_bandage'],
  },
  '🩺': {
    canonicalName: 'STETHOSCOPE',
    slangMeanings: ['stethoscope'],
  },
  '🩻': {
    canonicalName: 'X-RAY',
    slangMeanings: ['x-ray'],
  },
  '🩼': {
    canonicalName: 'CRUTCH',
    slangMeanings: ['crutch'],
  },
  '🪀': {
    canonicalName: 'YO-YO',
    slangMeanings: ['yo-yo'],
  },
  '🪁': {
    canonicalName: 'KITE',
    slangMeanings: ['kite'],
  },
  '🪂': {
    canonicalName: 'PARACHUTE',
    slangMeanings: ['parachute'],
  },
  '🪃': {
    canonicalName: 'BOOMERANG',
    slangMeanings: ['boomerang'],
  },
  '🪄': {
    canonicalName: 'MAGIC WAND',
    slangMeanings: ['magic_wand'],
  },
  '🪅': {
    canonicalName: 'PINATA',
    slangMeanings: ['pinata'],
  },
  '🪆': {
    canonicalName: 'NESTING DOLLS',
    slangMeanings: ['nesting_dolls'],
  },
  '🪇': {
    canonicalName: 'MARACAS',
    slangMeanings: ['maracas'],
  },
  '🪈': {
    canonicalName: 'FLUTE',
    slangMeanings: ['flute'],
  },
  '🪐': {
    canonicalName: 'RINGED PLANET',
    slangMeanings: ['ringed_planet'],
  },
  '🪑': {
    canonicalName: 'CHAIR',
    slangMeanings: ['chair', 'sit on my body part', 'sit on my face'],
  },
  '🪒': {
    canonicalName: 'RAZOR',
    slangMeanings: ['razor'],
  },
  '🪓': {
    canonicalName: 'AXE',
    slangMeanings: ['axe'],
  },
  '🪔': {
    canonicalName: 'DIYA LAMP',
    slangMeanings: ['diya_lamp'],
  },
  '🪕': {
    canonicalName: 'BANJO',
    slangMeanings: ['banjo'],
  },
  '🪖': {
    canonicalName: 'MILITARY HELMET',
    slangMeanings: ['military_helmet'],
  },
  '🪗': {
    canonicalName: 'ACCORDION',
    slangMeanings: ['accordion'],
  },
  '🪘': {
    canonicalName: 'LONG DRUM',
    slangMeanings: ['long_drum'],
  },
  '🪙': {
    canonicalName: 'COIN',
    slangMeanings: ['coin'],
  },
  '🪚': {
    canonicalName: 'CARPENTRY SAW',
    slangMeanings: ['carpentry_saw'],
  },
  '🪛': {
    canonicalName: 'SCREWDRIVER',
    slangMeanings: ['screwdriver'],
  },
  '🪜': {
    canonicalName: 'LADDER',
    slangMeanings: ['ladder'],
  },
  '🪝': {
    canonicalName: 'HOOK',
    slangMeanings: ['hook'],
  },
  '🪞': {
    canonicalName: 'MIRROR',
    slangMeanings: ['mirror'],
  },
  '🪟': {
    canonicalName: 'WINDOW',
    slangMeanings: ['window'],
  },
  '🪠': {
    canonicalName: 'PLUNGER',
    slangMeanings: ['plunger'],
  },
  '🪡': {
    canonicalName: 'SEWING NEEDLE',
    slangMeanings: ['sewing_needle'],
  },
  '🪢': {
    canonicalName: 'KNOT',
    slangMeanings: ['knot'],
  },
  '🪣': {
    canonicalName: 'BUCKET',
    slangMeanings: ['bucket'],
  },
  '🪤': {
    canonicalName: 'MOUSE TRAP',
    slangMeanings: ['mouse_trap'],
  },
  '🪥': {
    canonicalName: 'TOOTHBRUSH',
    slangMeanings: ['toothbrush'],
  },
  '🪦': {
    canonicalName: 'HEADSTONE',
    slangMeanings: ['headstone'],
  },
  '🪧': {
    canonicalName: 'PLACARD',
    slangMeanings: ['placard'],
  },
  '🪨': {
    canonicalName: 'ROCK',
    slangMeanings: ['rock'],
  },
  '🪩': {
    canonicalName: 'MIRROR BALL',
    slangMeanings: ['mirror_ball'],
  },
  '🪪': {
    canonicalName: 'IDENTIFICATION CARD',
    slangMeanings: ['identification_card'],
  },
  '🪫': {
    canonicalName: 'LOW BATTERY',
    slangMeanings: ['low_battery'],
  },
  '🪬': {
    canonicalName: 'HAMSA',
    slangMeanings: ['hamsa'],
  },
  '🪭': {
    canonicalName: 'FOLDING HAND FAN',
    slangMeanings: ['folding_hand_fan'],
  },
  '🪮': {
    canonicalName: 'HAIR PICK',
    slangMeanings: ['hair_pick'],
  },
  '🪯': {
    canonicalName: 'KHANDA',
    slangMeanings: ['khanda'],
  },
  '🪰': {
    canonicalName: 'FLY',
    slangMeanings: ['fly'],
  },
  '🪱': {
    canonicalName: 'WORM',
    slangMeanings: ['worm'],
  },
  '🪲': {
    canonicalName: 'BEETLE',
    slangMeanings: ['beetle'],
  },
  '🪳': {
    canonicalName: 'COCKROACH',
    slangMeanings: ['cockroach'],
  },
  '🪴': {
    canonicalName: 'POTTED PLANT',
    slangMeanings: ['potted_plant'],
  },
  '🪵': {
    canonicalName: 'WOOD',
    slangMeanings: ['wood'],
  },
  '🪶': {
    canonicalName: 'FEATHER',
    slangMeanings: ['feather'],
  },
  '🪷': {
    canonicalName: 'LOTUS',
    slangMeanings: ['lotus'],
  },
  '🪸': {
    canonicalName: 'CORAL',
    slangMeanings: ['coral'],
  },
  '🪹': {
    canonicalName: 'EMPTY NEST',
    slangMeanings: ['empty_nest'],
  },
  '🪺': {
    canonicalName: 'NEST WITH EGGS',
    slangMeanings: ['nest_with_eggs'],
  },
  '🪻': {
    canonicalName: 'HYACINTH',
    slangMeanings: ['hyacinth'],
  },
  '🪼': {
    canonicalName: 'JELLYFISH',
    slangMeanings: ['jellyfish'],
  },
  '🪽': {
    canonicalName: 'WING',
    slangMeanings: ['wing'],
  },
  '🪿': {
    canonicalName: 'GOOSE',
    slangMeanings: ['goose'],
  },
  '🫀': {
    canonicalName: 'ANATOMICAL HEART',
    slangMeanings: ['anatomical_heart'],
  },
  '🫁': {
    canonicalName: 'LUNGS',
    slangMeanings: ['lungs'],
  },
  '🫂': {
    canonicalName: 'PEOPLE HUGGING',
    slangMeanings: ['people_hugging'],
  },
  '🫃': {
    canonicalName: 'PREGNANT MAN',
    slangMeanings: ['pregnant_man'],
  },
  '🫄': {
    canonicalName: 'PREGNANT PERSON',
    slangMeanings: ['pregnant_person'],
  },
  '🫅': {
    canonicalName: 'PERSON WITH CROWN',
    slangMeanings: ['person_with_crown'],
  },
  '🫎': {
    canonicalName: 'MOOSE',
    slangMeanings: ['moose'],
  },
  '🫏': {
    canonicalName: 'DONKEY',
    slangMeanings: ['donkey'],
  },
  '🫐': {
    canonicalName: 'BLUEBERRIES',
    slangMeanings: ['blueberries'],
  },
  '🫑': {
    canonicalName: 'BELL PEPPER',
    slangMeanings: ['bell_pepper'],
  },
  '🫒': {
    canonicalName: 'OLIVE',
    slangMeanings: ['olive'],
  },
  '🫓': {
    canonicalName: 'FLATBREAD',
    slangMeanings: ['flatbread'],
  },
  '🫔': {
    canonicalName: 'TAMALE',
    slangMeanings: ['tamale'],
  },
  '🫕': {
    canonicalName: 'FONDUE',
    slangMeanings: ['fondue'],
  },
  '🫖': {
    canonicalName: 'TEAPOT',
    slangMeanings: ['teapot'],
  },
  '🫗': {
    canonicalName: 'POURING LIQUID',
    slangMeanings: ['pouring_liquid'],
  },
  '🫘': {
    canonicalName: 'BEANS',
    slangMeanings: ['beans'],
  },
  '🫙': {
    canonicalName: 'JAR',
    slangMeanings: ['jar'],
  },
  '🫚': {
    canonicalName: 'GINGER ROOT',
    slangMeanings: ['ginger_root'],
  },
  '🫛': {
    canonicalName: 'PEA POD',
    slangMeanings: ['pea_pod'],
  },
  '🫠': {
    canonicalName: 'MELTING FACE',
    slangMeanings: ['melting_face'],
  },
  '🫡': {
    canonicalName: 'SALUTING FACE',
    slangMeanings: ['saluting_face'],
  },
  '🫢': {
    canonicalName: 'FACE WITH OPEN EYES AND HAND OVER MOUTH',
    slangMeanings: ['face_with_open_eyes_and_hand_over_mouth'],
  },
  '🫣': {
    canonicalName: 'FACE WITH PEEKING EYE',
    slangMeanings: ['face_with_peeking_eye'],
  },
  '🫤': {
    canonicalName: 'FACE WITH DIAGONAL MOUTH',
    slangMeanings: ['face_with_diagonal_mouth'],
  },
  '🫥': {
    canonicalName: 'DOTTED LINE FACE',
    slangMeanings: ['dotted_line_face'],
  },
  '🫦': {
    canonicalName: 'BITING LIP',
    slangMeanings: ['biting_lip'],
  },
  '🫧': {
    canonicalName: 'BUBBLES',
    slangMeanings: ['bubbles'],
  },
  '🫨': {
    canonicalName: 'SHAKING FACE',
    slangMeanings: ['shaking_face'],
  },
  '🫰': {
    canonicalName: 'HAND WITH INDEX FINGER AND THUMB CROSSED',
    slangMeanings: ['hand_with_index_finger_and_thumb_crossed'],
  },
  '🫱': {
    canonicalName: 'RIGHTWARDS HAND',
    slangMeanings: ['rightwards_hand'],
  },
  '🫲': {
    canonicalName: 'LEFTWARDS HAND',
    slangMeanings: ['leftwards_hand'],
  },
  '🫳': {
    canonicalName: 'PALM DOWN HAND',
    slangMeanings: ['palm_down_hand'],
  },
  '🫴': {
    canonicalName: 'PALM UP HAND',
    slangMeanings: ['palm_up_hand'],
  },
  '🫵': {
    canonicalName: 'INDEX POINTING AT THE VIEWER',
    slangMeanings: ['index_pointing_at_the_viewer'],
  },
  '🫶': {
    canonicalName: 'HEART HANDS',
    slangMeanings: ['heart_hands'],
  },
  '🫷': {
    canonicalName: 'LEFTWARDS PUSHING HAND',
    slangMeanings: ['leftwards_pushing_hand'],
  },
  '🫸': {
    canonicalName: 'RIGHTWARDS PUSHING HAND',
    slangMeanings: ['rightwards_pushing_hand'],
  },
  '⌚': {
    canonicalName: 'WATCH',
    slangMeanings: ['watch'],
  },
  '⌛': {
    canonicalName: 'HOURGLASS',
    slangMeanings: ['hourglass'],
  },
  '⏩': {
    canonicalName: 'BLACK RIGHT-POINTING DOUBLE TRIANGLE',
    slangMeanings: ['fast_forward'],
  },
  '⏪': {
    canonicalName: 'BLACK LEFT-POINTING DOUBLE TRIANGLE',
    slangMeanings: ['rewind'],
  },
  '⏫': {
    canonicalName: 'BLACK UP-POINTING DOUBLE TRIANGLE',
    slangMeanings: ['arrow_double_up'],
  },
  '⏬': {
    canonicalName: 'BLACK DOWN-POINTING DOUBLE TRIANGLE',
    slangMeanings: ['arrow_double_down'],
  },
  '⏰': {
    canonicalName: 'ALARM CLOCK',
    slangMeanings: ['alarm_clock'],
  },
  '⏳': {
    canonicalName: 'HOURGLASS WITH FLOWING SAND',
    slangMeanings: ['hourglass_flowing_sand'],
  },
  '◽': {
    canonicalName: 'WHITE MEDIUM SMALL SQUARE',
    slangMeanings: ['white_medium_small_square'],
  },
  '◾': {
    canonicalName: 'BLACK MEDIUM SMALL SQUARE',
    slangMeanings: ['black_medium_small_square'],
  },
  '☔': {
    canonicalName: 'UMBRELLA WITH RAIN DROPS',
    slangMeanings: ['umbrella_with_rain_drops'],
  },
  '☕': {
    canonicalName: 'HOT BEVERAGE',
    slangMeanings: ['coffee'],
  },
  '♈': {
    canonicalName: 'ARIES',
    slangMeanings: ['aries'],
  },
  '♉': {
    canonicalName: 'TAURUS',
    slangMeanings: ['taurus'],
  },
  '♊': {
    canonicalName: 'GEMINI',
    slangMeanings: ['gemini'],
  },
  '♋': {
    canonicalName: 'CANCER',
    slangMeanings: ['cancer'],
  },
  '♌': {
    canonicalName: 'LEO',
    slangMeanings: ['leo'],
  },
  '♍': {
    canonicalName: 'VIRGO',
    slangMeanings: ['virgo'],
  },
  '♎': {
    canonicalName: 'LIBRA',
    slangMeanings: ['libra'],
  },
  '♏': {
    canonicalName: 'SCORPIUS',
    slangMeanings: ['scorpius'],
  },
  '♐': {
    canonicalName: 'SAGITTARIUS',
    slangMeanings: ['sagittarius'],
  },
  '♑': {
    canonicalName: 'CAPRICORN',
    slangMeanings: ['capricorn'],
  },
  '♒': {
    canonicalName: 'AQUARIUS',
    slangMeanings: ['aquarius'],
  },
  '♓': {
    canonicalName: 'PISCES',
    slangMeanings: ['pisces'],
  },
  '♿': {
    canonicalName: 'WHEELCHAIR SYMBOL',
    slangMeanings: ['wheelchair'],
  },
  '⚓': {
    canonicalName: 'ANCHOR',
    slangMeanings: ['anchor'],
  },
  '⚡': {
    canonicalName: 'HIGH VOLTAGE SIGN',
    slangMeanings: ['zap'],
  },
  '⚪': {
    canonicalName: 'MEDIUM WHITE CIRCLE',
    slangMeanings: ['white_circle'],
  },
  '⚫': {
    canonicalName: 'MEDIUM BLACK CIRCLE',
    slangMeanings: ['black_circle'],
  },
  '⚽': {
    canonicalName: 'SOCCER BALL',
    slangMeanings: ['soccer'],
  },
  '⚾': {
    canonicalName: 'BASEBALL',
    slangMeanings: ['baseball'],
  },
  '⛄': {
    canonicalName: 'SNOWMAN WITHOUT SNOW',
    slangMeanings: ['snowman_without_snow'],
  },
  '⛅': {
    canonicalName: 'SUN BEHIND CLOUD',
    slangMeanings: ['partly_sunny'],
  },
  '⛎': {
    canonicalName: 'OPHIUCHUS',
    slangMeanings: ['ophiuchus'],
  },
  '⛔': {
    canonicalName: 'NO ENTRY',
    slangMeanings: ['no_entry'],
  },
  '⛪': {
    canonicalName: 'CHURCH',
    slangMeanings: ['church'],
  },
  '⛲': {
    canonicalName: 'FOUNTAIN',
    slangMeanings: ['fountain'],
  },
  '⛳': {
    canonicalName: 'FLAG IN HOLE',
    slangMeanings: ['golf'],
  },
  '⛵': {
    canonicalName: 'SAILBOAT',
    slangMeanings: ['boat', 'sailboat'],
  },
  '⛺': {
    canonicalName: 'TENT',
    slangMeanings: ['tent'],
  },
  '⛽': {
    canonicalName: 'FUEL PUMP',
    slangMeanings: ['fuelpump'],
  },
  '✅': {
    canonicalName: 'WHITE HEAVY CHECK MARK',
    slangMeanings: ['white_check_mark'],
  },
  '✊': {
    canonicalName: 'RAISED FIST',
    slangMeanings: ['fist'],
  },
  '✋': {
    canonicalName: 'RAISED HAND',
    slangMeanings: ['hand', 'raised_hand'],
  },
  '✨': {
    canonicalName: 'SPARKLES',
    slangMeanings: ['sparkles'],
  },
  '❌': {
    canonicalName: 'CROSS MARK',
    slangMeanings: ['x'],
  },
  '❎': {
    canonicalName: 'NEGATIVE SQUARED CROSS MARK',
    slangMeanings: ['negative_squared_cross_mark'],
  },
  '❓': {
    canonicalName: 'BLACK QUESTION MARK ORNAMENT',
    slangMeanings: ['question'],
  },
  '❔': {
    canonicalName: 'WHITE QUESTION MARK ORNAMENT',
    slangMeanings: ['grey_question'],
  },
  '❕': {
    canonicalName: 'WHITE EXCLAMATION MARK ORNAMENT',
    slangMeanings: ['grey_exclamation'],
  },
  '❗': {
    canonicalName: 'HEAVY EXCLAMATION MARK SYMBOL',
    slangMeanings: ['exclamation', 'heavy_exclamation_mark'],
  },
  '➕': {
    canonicalName: 'HEAVY PLUS SIGN',
    slangMeanings: ['heavy_plus_sign'],
  },
  '➖': {
    canonicalName: 'HEAVY MINUS SIGN',
    slangMeanings: ['heavy_minus_sign'],
  },
  '➗': {
    canonicalName: 'HEAVY DIVISION SIGN',
    slangMeanings: ['heavy_division_sign'],
  },
  '➰': {
    canonicalName: 'CURLY LOOP',
    slangMeanings: ['curly_loop'],
  },
  '➿': {
    canonicalName: 'DOUBLE CURLY LOOP',
    slangMeanings: ['loop'],
  },
  '⬛': {
    canonicalName: 'BLACK LARGE SQUARE',
    slangMeanings: ['black_large_square'],
  },
  '⬜': {
    canonicalName: 'WHITE LARGE SQUARE',
    slangMeanings: ['white_large_square'],
  },
  '⭐': {
    canonicalName: 'WHITE MEDIUM STAR',
    slangMeanings: ['star'],
  },
  '⭕': {
    canonicalName: 'HEAVY LARGE CIRCLE',
    slangMeanings: ['o'],
  },
};

// Create a CSS class for the tooltip
GM_addStyle(`
  .emoji-tooltip {
    position: absolute;
    z-index: 9999;
    padding: 4px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    font-family: Arial, sans-serif;
    height: initial;
    width: initial;
    margin: initial;
    line-height: initial;
    box-sizing: initial;
    color: black;
  }
`);

// Add event listeners to the document for mouseover and mouseout events
document.addEventListener('mouseover', handleEmojiMouseOver);
document.addEventListener('mouseout', handleEmojiMouseOut);

function stringToCodePoints(text) {
  const codePoints = [];
  for (let i = 0; i < text.length; i++) {
    const codePoint = text.codePointAt(i);
    codePoints.push(codePoint);
    if (codePoint > 0xFFFF) {
      i++; // Increment additional position for surrogate pair
    }
  }
  return codePoints;
}

function codePointToSurrogatePair(codePoint) {
  if (codePoint <= 0xFFFF) {
    return String.fromCharCode(codePoint);
  } else {
    const highSurrogate = Math.floor((codePoint - 0x10000) / 0x400) + 0xD800;
    const lowSurrogate = ((codePoint - 0x10000) % 0x400) + 0xDC00;
    return String.fromCharCode(highSurrogate, lowSurrogate);
  }
}

// Recursive function to handle mouseover event on emojis
function handleEmojiMouseOver(event) {
  const target = event.target;
  if (target.nodeType === Node.TEXT_NODE) {
    const emojis = findEmojis(target.textContent);
    emojis.forEach((emoji) => createTooltip(emoji, target.parentNode));
  } else {
    const emojis = findEmojisInElement(target);
    emojis.forEach((emoji) => createTooltip(emoji, target));
  }
}

// Recursive function to find emojis within a text node
function findEmojis(text) {
    const codePoints = stringToCodePoints(text);
    const emojis = [];

    for (let i = 0; i < codePoints.length; i++) {
        emojis.push(codePointToSurrogatePair(codePoints[i]));
    }
    return emojis;
}

// Recursive function to find emojis within an element and its children
function findEmojisInElement(element) {
  const emojis = [];
  const childNodes = element.childNodes;
  for (let i = 0; i < childNodes.length; i++) {
    const child = childNodes[i];
    if (child.nodeType === Node.TEXT_NODE) {
      const childEmojis = findEmojis(child.textContent);
      emojis.push(...childEmojis);
    } else {
      const childEmojis = findEmojisInElement(child);
      emojis.push(...childEmojis);
    }
  }
  return emojis;
}

// Function to create and append tooltip element
function createTooltip(emoji, parentElement) {
    //console.log(emoji.charCodeAt(0));
  if (emoji in emojiData) {
      //console.log("found");
    const emojiInfo = emojiData[emoji];
    const tooltip = document.createElement('div');
    tooltip.className = 'emoji-tooltip';
    tooltip.textContent = `${emojiInfo.canonicalName} (${emojiInfo.slangMeanings.join(', ')})`;
    parentElement.appendChild(tooltip);
  }
}

// Function to handle mouseout event on emojis and remove tooltips
function handleEmojiMouseOut(event) {
  const target = event.target;
  const tooltips = target.querySelectorAll('.emoji-tooltip');
  tooltips.forEach((tooltip) => {
tooltip.remove();
});
}

// To handle emojis within dynamically loaded content, you can listen for DOM mutations
// and apply the emoji tooltip functionality to the new elements. Uncomment the following code block:

const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            const addedNodes = mutation.addedNodes;
            for (const node of addedNodes) {
                if (node.nodeType === Node.TEXT_NODE) {
                    const emojis = findEmojis(node.textContent);
                    emojis.forEach((emoji) => createTooltip(emoji, node.parentNode));
                } else if (node.nodeType === Node.ELEMENT_NODE) {
                    const emojis = findEmojisInElement(node);
                    emojis.forEach((emoji) => createTooltip(emoji, node));
                }
            }
        }
    }
});

observer.observe(document, { childList: true, subtree: true });
