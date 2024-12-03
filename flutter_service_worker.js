'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "832f145c03305021c8dc87d99ef2f128",
"version.json": "fcda82662356bcda0f426b9e6daaa535",
"favicon.ico": "0f71882e50187565aaf3c75d99b9fd62",
"index.html": "d8e499c01ff6f6b649aa853097012dfb",
"/": "d8e499c01ff6f6b649aa853097012dfb",
"apple-touch-icon.png": "4a56f3701575e24201c88b73f5c47379",
"main.dart.js": "b853124c8effa29925cad9fe43e15bc3",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "0f71882e50187565aaf3c75d99b9fd62",
"main.dart.mjs": "a141f153b25826e08316aaa8ecee1252",
"icons/icon-192.png": "fc265461bf545398e28392324152c6b4",
"icons/Icon-maskable-192.png": "348241eac5501bc9018e7c5a3a5e67a5",
"icons/Icon-maskable-512.png": "debe37bfe5385c4ffe398bfcc3447d5d",
"icons/icon-512.png": "67b720d46d4ffec3616276c466682016",
"manifest.json": "9ada7c3bad0ccc5efc5195bd16fc0d51",
"main.dart.wasm": "314d16c0e07d14139650b7b1dd63a1f9",
".git/REBASE_HEAD": "8754b375385de6659412f5d34cb59a3e",
".git/ORIG_HEAD": "3a2a7a902c3a9f02140a3c16ca33172a",
".git/config": "13d44dd131f600aa8b0cc7709c1a09fb",
".git/objects/61/a3ac245f80da740fb0a80ee33fdcf38dc42f72": "dcd9714e9b53be291818f84a0a3946eb",
".git/objects/95/7d8d3dd35e939fe8cbb0e0f5fcb54b61eaa9ed": "73fbef2b3577329ad81a366ac81632e8",
".git/objects/95/2606c946e711b7c22d6c282bc474198de334a4": "8900da6b0bb84c361eec44bda8cbeb79",
".git/objects/59/aabf7e652e8d2fdfb5a69636217265ba803223": "7969019a67389d6edcb21ffc2349f219",
".git/objects/66/5e1b856a30f144007e2122f4c784acf0e9ccc3": "f62bc0a69aba67e5e43a26edfad2321f",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/3b/3a6cd98e7c3cd8dfe7e696008f68e75b11c702": "b459d2c9052f241be78703e91f70e135",
".git/objects/6f/ace2ce5743be02ac285d1f8a2127e428c6f785": "8647b91e6808ffe05f71ca1dc554070a",
".git/objects/9b/3d356135bf183915729516df8d9d974b0cd528": "9dc90c5e70df1db2368a0c8cce4cd982",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/582e0093c31468b6eff700c80d0c6dcac0a719": "46630fb6d5b62fca1f1e2b007066f071",
".git/objects/3d/89d0184ab58625f704d65ebad788b408490c30": "3bc88b0eb7d6fa9989d31dbf39d53f5c",
".git/objects/58/3791d40a7036c38e990365f9ba11cd085d2528": "3d5f17fea42794dc610dff5f2fe878bf",
".git/objects/0b/8f9878a44ddb66dce19c553a5be4849ee8f9d3": "68f987ac3aa5f3a929549d1b11bc9d22",
".git/objects/0e/4c46138c0c9696cd4a6272dec74b83ea0f7ab1": "b2fca341a84ece28ccd8ace072b1a302",
".git/objects/0e/cdae4c2ef386d7493aa053a9bbb3991ad48fac": "451a6a2e952bb8471245af06417b88d7",
".git/objects/34/649e7f98b18024cf4fe3603923692ac657611d": "5656ba47fb76400d22286cabdd5533f0",
".git/objects/34/fdf0707332cb13da64f9969e380f6e9c2e1894": "0af928db60aec68f64fdc9cdc7917502",
".git/objects/5a/38da5cb1f0e311ca157b1a45de4cda65607443": "22adfdb4462ed3f4ee51e356e0dab333",
".git/objects/5a/1bb22f1bb1207a1bb44cded0d4615724504b2b": "0577abdc2f14b992ddfdca5c11b85c2f",
".git/objects/5f/ce1b61dc8f433ed9da588ccde8ad2c49c47cc2": "0ed104642c11c19aaccbcd026a25f993",
".git/objects/9c/b4f7bd04105cf33cb87eeb08426ad3f782dff4": "46f8835162e040e79dca63dd4c0ab1c4",
".git/objects/9c/21d5afa7eb2f7f59f18d8ccb28eabc216eb6db": "cf2ab48aa747936f2544ad9dc586b125",
".git/objects/a4/64d39b48670e6a70307d61429f5335306187bf": "22ca14f9e38f7dd14001e644518910b0",
".git/objects/a4/7a15942c8899d877ddef38295d6b74cf0555bb": "2f4901748f6816367136de7b1fd0d2ae",
".git/objects/a3/ce30ff12bf65183e21bf9f0544650e2a53b382": "f63d18750a207eab1cfb18b2bba5a210",
".git/objects/a3/2afa74ce1020ba64e31c9018c58bdd7e04449f": "431dc9999aa6367141d4bd6b12e13fa4",
".git/objects/ad/381be535b8203f41360673fd653e22a22cdcdf": "5f882b428bc6e57c12b0fa1bbc9efc29",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/b3/f08fd5ee8161d0fdef69056afa1526f188889e": "107ab189016548fccd1fad3862b447a1",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/da/c0f07e12ffc4c8736adccc634b6288f5750d54": "eb3385895e291c949a7da43a0184024c",
".git/objects/da/6f9e858793c66c02365ea1a025858458112990": "57b9204dfbcc084ae558759a1970e79e",
".git/objects/da/bf654c1e649fadd990896ce2cf6fa4c4bda11b": "07fb1e5f00f3f4ce28a4a4cbe1e1fb17",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "cdce04155deb291d95d5b2a8a45a186e",
".git/objects/a5/8bd1efcf2b09f572110266664a036c12473859": "d3dec64be8788aa5b3e24eae85a58116",
".git/objects/d1/00d769b2e94df38d2ce266ea32999d50713b71": "1a824cf912fe3992ee57f9cef44fca72",
".git/objects/d6/73561a649d91bb337a77474902f7a4eb8b8069": "10878899a63094ec0719087e79b4ca62",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/c4e6f7de569528bc8b5f8707dffd60dbea9f5d": "1862a1c00dd7a0d8a5e08da3b4413d72",
".git/objects/e2/f346daf487b938cf9538eac54ae36145631165": "89af6238ad32bf2ebdae2c80800a70fa",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/3d3a335831bdf7063397998ec73b03ac285f75": "a1e8862ac6114cc2c39bf5e859a30e84",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/f5/fc3fcdfa3fd77206e11adedde188985f3859d2": "0cd3cdc39f2e2a238a236197170aac9c",
".git/objects/ca/2b35753d5192a658778866711a308d7e5c0609": "a662eddae5da48d52f2c0b6efe1b7cdc",
".git/objects/ca/9a574bf3bf7000c7a1b965a0bd4f3af3803f18": "1ea9401fe8352ff1b123dbc7479f3366",
".git/objects/c8/83d0f89bb54028fc0a09b99588d38603458c71": "b19eccb345244a24ee4357e6281c675c",
".git/objects/c1/2bff45932f17b968d7de0ba718218ae5e2e715": "d85d61ceff9e4e40e547501331d82e20",
".git/objects/c1/f5ac3e2a9d013d50d9e5af3305564ea4af80b4": "e73b0e8851e85cfcafc51c7f2f97706d",
".git/objects/c1/5fdb4402c8202e70eeb2600c5abbd98002f658": "10193f73dc29a8d5984d7885f3b3e995",
".git/objects/ec/efab1625c27df0d7b7f45c88929a3be763fb9c": "6b8f82b37c5854d250ad49c8e1d639cf",
".git/objects/ec/fb153ebf7830c9b83ee14d2baece1e216190d1": "e6d0cdc7c5ae46b54548889c2535c1b0",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/f57a4395b4a3aabec859a514d4f36eca2353d1": "efbfdc0daf929248ce9aaddd0f826c67",
".git/objects/11/6c50f42470d69dda916c806966f1532f1e4f5c": "6e4a9174356c269b9fb1a82a731797c7",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/16/052566a350d2cbc10a10881548d41d73092410": "d14f364e59330acbe9a82cefd90a6d3b",
".git/objects/89/f117fde4da985be00ebc533412f1d8c230004e": "f3759459474979147f3a374123df09db",
".git/objects/1f/a0986427f79607732218ec530855ba0db97474": "30d5ff75e36db81217ea652d3d08fa4a",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/80/6ce9772be8164331df014bf2148ea40f6bdc9c": "5c187f3fe55f3ee02cc48cd832e4d2c3",
".git/objects/74/41fe3f26ba9e0cd49c60110facd21a683e4273": "d36eec265328866d67ae9af4b39a4766",
".git/objects/8a/473df873de5f6a8354dce83390efd6fa4c4e20": "a0df5f6192c2b57ac51ddf8adcf0c1fc",
".git/objects/8a/37c890719a6fd6295f80282e86be5e970abf18": "ae1088de5613fa5421c7eda354bed004",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/897f68b3d838502004293a4a582f2fd98ce415": "920ccf3ca30ae6753ec6a062ced2d24f",
".git/objects/19/539670c9975048bda8bbfbe80d994970f1ab7a": "fed330c6f93920cb32604b848923da60",
".git/objects/4c/005c0cef70e9f7856159b458df134203972151": "f35089e273c2518b0fbab46a2c9aa5fa",
".git/objects/75/13bfe7da54c8168c02053abf30f26f252823d8": "51f293eb77a50930a182dd66db8696eb",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/67aeddbc70f7a2485b8e1da7a1453d60947b36": "f1fd56bb9d48bfbf6beb0cab21498f70",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/00/d2b1fb4cab9a5671af8743858011d36d5e98ac": "7a7beae4aae849911239873267ac9e7f",
".git/objects/9a/fb7912de21a85a1b19095a9278bdde4045ccdc": "5b0737443eb63c33399642e1fc4b3836",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/31/dc1480f535d0e23e1194c73ea76f6109eb68e0": "3aa80505ab5fed5e8ab6770f4adc1188",
".git/objects/91/cffa0da4462013b3900b013e10339d93436fe5": "0da39d0445d183534b9b832e6cdaac1c",
".git/objects/91/d1326852b2600dd7b18aade781a46b489607be": "d0d337ca1950adb5d1beb61be8f2ba9d",
".git/objects/65/d8a4ea02fd326e0eaad8b35a138cf885f299ce": "1262edda6d77a4a87551fc59ef728291",
".git/objects/96/25e045fc3b75e59ca4caebe0abdd721f2051d6": "5e064c9f7b5fdcef881d0696514e8144",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/5e/791563a502f5c605f60e0af80017cd89f9de47": "3283cc87449d808eda82057d5d21e831",
".git/objects/5b/dec0dd4872bde0da05311b7c4eca19a372c774": "c85f9998803729a211f4dab503e24fe1",
".git/objects/5b/88b9139f91352bc85365dd935078f031b8dee4": "233cf5cdc31beac6769094b531967b4c",
".git/objects/37/d9efae7e25207be353af8e77c613b935a1ddf5": "313722008e5dfbb77c997e7642314e73",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/06/f1752ae981c4a471c5841c7fcdc8c16bda15ff": "e1abaaef589d7470170720015c43957c",
".git/objects/06/24d81b19a871584cf5a45e11b458fed056e406": "b0a8a1f254ab021b3b8e2bd3705814c2",
".git/objects/6c/664c387ae8596601a24e600c891d922386ba7b": "85d66da0c8db475c269bc4b9be594c93",
".git/objects/55/f07b1e1d5deacfaeb423fbdf47ab7ea28c072e": "c738c6b36b3dfe851acbb9b498e13432",
".git/objects/0a/f547b7e7b810380ab8c8581091a4c71d17af60": "f9f5bc99c5e857b26377d3526a659689",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/9c26fddda44e5733f74cc8281bf93c7aa783ca": "fb937885bda83a079bd0b1c98c3d18be",
".git/objects/d4/0a638b412bef189b23eda21f8f28c2cb9bfbd8": "2f2360fd2711efd7b8476f1ace137cdb",
".git/objects/d4/c2786e429755a78da347596e3333ddfa18c217": "99ef09663fdf1348c431a7e7f2128b38",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/b69fc2c8d67f76547354e74d340ad24ae582a7": "c70043e1cbc14d1a731bd6e77890288e",
".git/objects/a0/f154a5f44b113c5773926db1e32905f40729f9": "133253807c881190b4643907ad6ba532",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/dd/a26af3e07a089cff472e029cdeb0a339fac1e8": "e253bdd167e3533a94a04f1bc86bc554",
".git/objects/a9/c9815e6e224ba50e14008c80c459c475f9d196": "f6a4ca4139f8ee809f18fe0b6bc5ac96",
".git/objects/a9/8fa2cdc55c012a6990475b9e98a8e67c3b9ecf": "9f624ab93a4ad1be6bb030c764838f8c",
".git/objects/d5/dcb346d4d0c6102b250a7b80a4a6c79c93d109": "94b54c5480a3ce77b162ea6911f33437",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d5/3309e7dbb3ccc6af619e2f215d093c76b4226e": "d19545d1d9e358e3c812205d13b4ab80",
".git/objects/aa/64a8664ea026905543f153f8790685d7da69f8": "9b4066f18da4022455fabde904080ef9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/0b6e9f18f6640efc2b0a8cc24d4b00a3d262b6": "f1885689c39602e060d53b999b32ad51",
".git/objects/db/cb508253ce2b4dafe4e2482dea8bd5c3276ae5": "092e9a0ff810c37171ce89351eec29f4",
".git/objects/a6/88e3d4061b502c924257279bc6fbc8081f59fd": "2e9e74b1f954fd24d92ffbdb97b1e537",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/a271e1582a1e9f3227568a2f1d6120cd96afd6": "b098d30447c6fbfe73e1887a0401d9f4",
".git/objects/ef/fa795d7a25a85355fa3c1418a4818bdb7f447f": "247967f5041b66604dcc86a53d7fc50a",
".git/objects/ea/b0596699a48637e335515ae2fa8615b98293d4": "7e7b3b885b3dadec3fba3a50ead616e6",
".git/objects/f9/efc57002184311f8f30072ada256c657a72605": "8040f8173fd404860be2e21aa111ae29",
".git/objects/f9/6901a1c79c8ecec2a1f3732811f516a3c017a3": "c6e39fe52a8fd3ff64dabdb5b88375ae",
".git/objects/f0/5f173b5075ae0db41840a4328238b55fb99638": "2c6607b4c8b0a5b0c05c1ce61ccce715",
".git/objects/f7/f02d335d2ca4c12e5602d9c2441ec4f6fd91bb": "6958e5908d373a4e65f40dd291de68c1",
".git/objects/f7/2df4d502ce81a1cd6769c697b9afa0f282b2f2": "aa3e396eda1113e75ca28cd0d23dfb8e",
".git/objects/c5/6df19b191cc4c83a5a3ebbac223f8d10c93d6d": "3a2640678bd7ac124c6b2e183223b30b",
".git/objects/f8/077176946f0fe80c84ef67f955cb9174d7adb5": "5ff2af56c1671faa82aa85fa3e3b86fd",
".git/objects/ce/8c6b01f43abcf84853a60666c719d56cddd5dc": "3bca4b865054b14f105937fbbba33e2c",
".git/objects/46/f7ed56987313fb0b8f574066ac8a962a794f2b": "3b85c233a996c2bdd07f8458231846e3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/32dfaccd5d2397d944999a8cd08ef3f6f16c90": "cff43af665d01ea37dbdd1a942efda80",
".git/objects/2d/4f103d6bc269c9c71d633ee2d58c32046ea20a": "de40135afced4c081770e706987bc59c",
".git/objects/41/ae595dfa5c1fb2b3becce3772a4d982724effe": "a74110d5d0d31790ab1449800cc34abd",
".git/objects/83/9d5352af1f8052e4040674e5fe7f42122d67c6": "f276399af217631d0a845496784b846c",
".git/objects/70/77b1112910c70d84c90261a28e96454dc86ecb": "2e72b5ad6d1f0d0f8662f4043376f358",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "e91280155bc02e320c2a664e7fefc7b5",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/8d/de8a645fb12dc09df786e9eb28187d77e98f2c": "f1127a15803a0dfd883c7afcc9cfb6d8",
".git/objects/15/74a8d73c1682debfd3f69af324421d89b6b23a": "308188e11faf6643137fefdb0c0dda31",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/c1ea45cdaec8d8e456ffd90a6e129ea64c5931": "98902bd2a713f6d1fd2249308145c02e",
".git/objects/82/4bfdee659fc8f356dc85151b17308e35f1ac3e": "6291560f0d462bf57569b09827f22d35",
".git/objects/40/f5e7087db99812b91b5d2dddb745d9a343b7f3": "fdd98deda8df86c8dfda723c554d3ef6",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/2b/fdfb4cbc84b82037f85e9c63037000fd5ffa2f": "cb6e73292d7cc881d643a063bc18e34c",
".git/objects/47/2565a075296e2940d1f801c56f7841814ca613": "9328387c1ac03f476591e604261e5b87",
".git/objects/78/bc84026edaaa1b0f6dfd3c851801a734b4caf9": "8e5f49c10c0bd9495032154b55d791b2",
".git/objects/8b/5f870d28905cafc1a14100baf69e91df68c4ec": "669ccc0cef62a7d5eac4e0895dd56857",
".git/objects/7a/06997a57236e18b5bd2a152435911b72371a89": "329907ef48df0536c349481a2600f27f",
".git/objects/14/50592867993f869adf11ee0d5122b337c3cbe5": "a21d7b4516404898469c11c53b44d1b7",
".git/objects/8e/656b7dcf9056010b636dd744f8f7cd075cdfdd": "1403a14e818f90b5792ada952c5a2102",
".git/objects/8e/593dc17042883fcea7e1d734c6de1a1eab7761": "8f538c4af05dc7c2da2cb6d4b209ce6d",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d208195ba0caaecc927ad6abc972a9ed",
".git/logs/refs/heads/main": "2f78c4082a4b3525b0d7635644739a00",
".git/logs/refs/remotes/origin/main": "aa29298234cb736f221fbed8ae953a50",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "3a2a7a902c3a9f02140a3c16ca33172a",
".git/refs/remotes/origin/main": "3a2a7a902c3a9f02140a3c16ca33172a",
".git/index": "97dd5abd2492059c844659745334ad68",
".git/COMMIT_EDITMSG": "68143e1b346a064aa1f70e03b829f1d5",
".git/FETCH_HEAD": "0560db1127328a920256ed62a4a1b6de",
"assets/AssetManifest.json": "c218783045349a86fa87c928ec04186a",
"assets/NOTICES": "efa18d09b04aefe30dd20d4d90117216",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "18b32358af7e64b5081a4df270ad2b3f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "91553b1ffe3147908f52b3482f5b425b",
"assets/fonts/MaterialIcons-Regular.otf": "57175afbaef53b367bf0bb9189f26576",
"assets/assets/undraw/modern_design.png": "23cf96810394dba99ffc493a0ade1cb8",
"assets/assets/undraw/mobile_pay.png": "930030dfdf5c2320b1948fd11cfc4220",
"assets/assets/undraw/online_calendar.png": "2ce3008c9984c6eafcdba6365d7262ff",
"assets/assets/undraw/home_screen.png": "fcc391001826a396047194df1b41d3cf",
"assets/assets/undraw/everyday_design.png": "f56c9d051f9cfa4795d762c719212131",
"assets/assets/undraw/thought_process.png": "c559efcf09373e74c7901376cee06a69",
"assets/assets/undraw/timeline.png": "ae1ffeb27bbd7a72ce90e885209b3d87",
"assets/assets/undraw/creative_woman.png": "8ee9364cdb15cc5decfef41a98845309",
"assets/assets/undraw/mobile_content.png": "65537245865656946c69357131c6fe1e",
"assets/assets/logo/app_icon.png": "063def1f4310b60bf344abf9b7ea60f2",
"assets/assets/logo/skill-icons--github-dark.png": "17b25751291ea1602a4eb728949f0643",
"assets/assets/icons/library.png": "bffd433eb8dc02950e7ce8d3768dd625",
"assets/assets/icons/wrench.png": "b3a0c0b1bd5367f5351531f8ee614ee9",
"assets/assets/icons/people.png": "761dbee3a1846bd98c3161373d68062e",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
