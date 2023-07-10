'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2ae920a947ed4572129ccd0e9a6a326d",
".git/config": "344784f1e44088ef01bb8c0c39d98f38",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4780beabe3a3676b44b47ea7f75da802",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "db8e040acc1525ba71b6e08c145f1e76",
".git/logs/refs/heads/main": "13feab8cf7958955fe315e0a40c1937b",
".git/logs/refs/remotes/origin/main": "82050930f422f3f972427111933bd204",
".git/objects/01/6e6842179523c77a32dfbe86cf7e545065ce50": "ff824b941cd341078398bf0043b62217",
".git/objects/02/55fcaaef1bf56bbfa3a2d0ecfdaa25337b695a": "825e328f3659c9c48d5ac536e9c5f4fc",
".git/objects/03/77c3fdea20fa7e439fd1f7eff80731839ea43c": "54407f872049c942fa0b0a7c6c069f3a",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/f948c5e55108c8e4b11aac6cb426571040dc3b": "91ff1670860060e98fc01fbf81ee9b39",
".git/objects/04/68614da4f03b4f7408d61e7396233c8f4f9f1b": "7ea268418ef6822f5164591cb58f09cf",
".git/objects/04/cbb6006648e10ade63c7ed78c6004fe709fe12": "901dbca004ecbdc064887128e982792c",
".git/objects/06/82c922e2809f9ccff95276b9591a6027093024": "32e1a55490b45e1afdce5f12887b49b0",
".git/objects/08/0268a4fe9facf2791a939f9dd1451b23195ef9": "bf348d49cc19a0bc3549c71e64d24a4b",
".git/objects/08/d7663a3104c6de753675b986b4f799f2dbdf12": "fc3f6f2b358ca7a6d970169e16b54dbf",
".git/objects/09/7a6758047210dea70100bdb8fe121ac0811112": "2e9f0b560ad2e641ad17224e9f308e53",
".git/objects/0a/1db34a66265763c358999730d31e62af095fee": "e1e6c2732565190e7e71a4ec6368d534",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0b/aa856fabc73a577fef9263b6f8a2f01f2ed374": "b7ef9e28c88e9689a763befd3336c180",
".git/objects/0c/fa4bbde058fde105fd5028265460dc7c75bf28": "3bd46f5e3934c3858614c5b6589a6515",
".git/objects/0d/26f59e4a1c430670f089b6f8bfcca0eee031ed": "e386afd9f09f3ac6a825d97070d47795",
".git/objects/0e/2aafe0ec3becd056ac211d7fe7df2e7827b234": "d196fa13cdc81c4240a22c77764a4948",
".git/objects/10/1cf34205b41e54cc78d37be43fb3ff67015541": "07fd9e457cf0339ddf80a7dbb359f322",
".git/objects/10/f9e2471f90a5fa6cd405f5e63485300770f022": "9006b031127d694e2d67bca1868ebfcb",
".git/objects/13/0b9a407e7a6bd97c524882b6368203e3050a10": "39c1e5c55e7365a3c70098be9a87fe7c",
".git/objects/13/93e7155662bb9bc2337bf34165b1879bc92ae5": "d546d91c3f10fb02770cee1e17741072",
".git/objects/15/2b34d0d7903912b08c04c45041363b3e759a31": "2dd8e93011733653d9f8eeebc173e310",
".git/objects/15/625292497d8ff39564a85ff820e505e3e027a2": "82f44711a4cfd2edc527fb61220d8250",
".git/objects/17/04827df3ef6cf4eb0d2c902e89d00bf490c941": "519f91b2fcf03cd86c7143fe2212a636",
".git/objects/1a/8a1beb31d096a471f9c7e47e2213ed892829e7": "6f5ffecc3673fcd8c32ef1680f3b4664",
".git/objects/1c/61d7f224c606acda7f4411cb191031f3ca392a": "a84dc9b598cb32d4fc1ab223e7422b6a",
".git/objects/1d/cb16f9b15747da723de8cb6cf4485da433e1d2": "8ac9699fcb5f26500b888f4bbdf14f8a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/1f/6b5ac54acb442ab76b80efe304479e916ea8e0": "0c1e65b1475ffcecd738af311328dc57",
".git/objects/1f/bc2aa3066844ba106f4ffcc49b0ab5233b3d1e": "b1548bebd68890058932410e030144f8",
".git/objects/20/997360cad3f0dbf433dfd3044eadeac79e23c9": "e1da8f8eefcd712390680db4561ecfa6",
".git/objects/21/5857069decae2091d041456d994b3e0549504b": "e93e3a1685ce9eefe9e4ae196cfde92c",
".git/objects/21/669468130da6689d857a7ba3c0cd302ee0054b": "ae2adc735906cddf9e4cb80668ce9bce",
".git/objects/21/f3a9ca7cb551881f11f2ab892c4c68e0b25b93": "dd0a21b418686e62fcb0cb41da1de7fe",
".git/objects/23/66f6c909315a36a5ac0cc698940b7f41f0b057": "2df76cce39e45eabb707de76d172f61c",
".git/objects/25/a8b468c8c53b7646e3d8259b477f1d714556a6": "c7c6b8c932b072b0d8a5f047ee172d4f",
".git/objects/25/d0d82930741fc2b0daa72ac2f6e5afe2a96c79": "31e1a772d2c1fc3c80e092ac776143f2",
".git/objects/26/96f16c966b6666d6aba6176f9a1dbf510df0d1": "723e443f8e7bb7cf57e0b1c8aae5fceb",
".git/objects/27/9e7ac471f48c7df846fdd7fdac69d2f76a285b": "422d86ead52881704d2be228c9ceab42",
".git/objects/28/0d052dc331191c6ab3b0d0cab41c88bb387871": "e3e9916d436608047eab9d074197124a",
".git/objects/28/35ea5b9320f5244045da274bd2df75b3fa270f": "20b52420d0db8a20bdde58c80d00dde0",
".git/objects/28/5d3b3a65eb455d410c3bf31fccc8dbbc8cbdbc": "8f13b3e9424f71d09fc00a1d9e39692c",
".git/objects/28/d0819f3c9b9468a7c05e768ede19e333c23d34": "4e6bdf0702aef05cfdd412428c121295",
".git/objects/29/6cb0f65b3ae2c8e9776af8cd888ef2cb82936d": "4da97237d2d9bb5a5c1005993b9545e3",
".git/objects/2a/48f33346e302ef5b17b5c27ba9808aaa2e9cf5": "2b9f8e039a0d340292cca30ec3e22195",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/2b/cedd3fd25a796c11a6c1c9cfd8c7df8c689272": "70d31788008de6a3dbc45bf1601c0d6f",
".git/objects/2c/13ff6a0b93fa35d098780961234d26067df1ae": "56aba59485a95a9d7fcc83640ba19a81",
".git/objects/2c/1d1d9d1ceea4ca8c66a1e2c6254c0e375f681e": "442529bfb46b3b9ec750e834b7744635",
".git/objects/2d/b0ab3b64b668f13f46c717fa2b2ca3040318bd": "5924f7690d60f3f01b02c283b1966ff4",
".git/objects/2e/6c66aaec1059f45d10df84e0fb4bffcb5ac6b9": "cef16bf6aaa607a0e764db3daef59a95",
".git/objects/2e/f5255ac28ca3679e4dcaae03b30f7bb3b164f5": "0f64f5a6c0e62136f548ab2e74f8c9dc",
".git/objects/2f/38cc51d0eb3ed4de4096945097249d32234084": "abb3e52c7c6f35fb7604b7aedacac763",
".git/objects/2f/71358016a722f3fe5e503ec262b34c36d1fc80": "507af27571ac674e481d606e9d6eb862",
".git/objects/30/5effdac8844a6e4440b07b452b0d361b75e28f": "076b7cec05baad060677ce5665e16243",
".git/objects/31/d26bee2ee5dad40aca8b824908bb2ddb9d8cb4": "ce13fd8689a73fae85cf69bc4fcb69b7",
".git/objects/32/49c9e978fd6cb34edcb969b6a39492f9f0fcc3": "0a5872ce15a5355a65b8b668ea222eee",
".git/objects/32/5e6324891a53d35767ff695b5c0a86d38dc4fa": "6ed62dc6c91233cd1891c9f903990fce",
".git/objects/33/08cfcaf0d6f223f29c3efb0e96cc9115d8c79c": "f563439d267c7619bf73c44c6c4f3ec7",
".git/objects/34/07c92d4b1a4c0022e49686260c386bdf7a8603": "57c30b0fa5b569baea471ba979ce0f07",
".git/objects/34/ad33bf128e5de23c72812cd7930f9d630d3543": "9e6d2ca81d9c4f5e723f008d785edb23",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/36/cdd5ec1ae01dd938fc9336daaa612c8aeae156": "dcef39cb91bd3ef4f5a94c3fbea44ca6",
".git/objects/36/f3647d6061525e31d237c669ddea4560be3876": "38d3e2a5b278bacc8d9ccfc593d80f65",
".git/objects/37/3d335d94687a12112b43d3d9adf93380f8224b": "bff8f75239bd00d5abff027ab80232af",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/f52c47ed16f6862bdf28931368d87fd3dddce2": "0c5c96c833be9102c3a3eb91c3c2940c",
".git/objects/3d/3ee4a025d1a1fec87536562b0afd3dfab395d8": "218dfe4f265f5332ac4dc38e673346cc",
".git/objects/3d/6b511a1e0725a510e37f7c52788a93ae66e6fb": "51663c46a2a57176a455fd2c9c098568",
".git/objects/3e/57a6b0000209907d90e9adbd227c6873eabc35": "526925d666fdca32191ba35809772c63",
".git/objects/3f/10d2001ab631a12832c2dd977ec981d3b40ab5": "dab762266f94d13a225d6134da8780a0",
".git/objects/40/9bec8defa4bde087ffa11af3009742172510f2": "1b2d25fe9f4eb63152d63d393a924744",
".git/objects/42/9fee204fbc14930d1936ea808c56b693869811": "53b8fff94f9058e3957c9f033ebd1062",
".git/objects/43/1a12fc2aafdc61fb8bee517e2c7d98b1dd6ecf": "7543c24a69b79352437f542af33150ed",
".git/objects/43/af128937242f80358bb7de4aba471a6f2e2a0c": "f1fd272528e79783eac38bf3e5179231",
".git/objects/44/c837597d3cf054b9bd97b05179c4ef0ce2eeb7": "dc9fdd02ddb3e970e99a72186b8cb696",
".git/objects/45/61b86a1e8f2aef17fffaa1763121bc45f9a231": "244861d6e31c9c16c0ffc6e580893aea",
".git/objects/46/12caf4cbee7fd5068b4f891398f518dfb14b15": "70cea585c03b9221a8e2913d70038e0a",
".git/objects/47/a92bcc12d165502b9a08757931372140fad29c": "9e58c682f20e6a46c15ad4ce93be69d2",
".git/objects/47/d0bf344fa4b434db10de8ed19d17ce9859889c": "395adbf7ba349a92011887bb033a0db1",
".git/objects/47/fe1b26d50d34ed621f63b5e36094551ccc5190": "c24a101cdd7dc570da9c5f797a7cc67f",
".git/objects/49/698e74205843ebf63e7af48dda68e5b6fde879": "c35a3360410ae549c879baf34348f2e8",
".git/objects/49/776696125785d7c6a2f34e3dd1a5cd71303add": "e4c980f607b8e53db9ffd882f0afb04d",
".git/objects/4a/98dc1d808ba1a9be419d3f7b5e2593a4d02cb6": "78d379308ecccca21c5f11c190595040",
".git/objects/4a/f12f3fb865e07bfc2dfb8dcd97754c1280ceda": "21bec6b1d9831686cb11559375208997",
".git/objects/4a/fd63459ee36d7768c6395ac96b5efa7abc8a91": "bc1da2516488cc05e9b6bce88e2b7f9e",
".git/objects/4b/892e029449792f5279031dc991dde6f45387e1": "21dfd491b1bae8a38d3c0cf9359739e4",
".git/objects/4b/b92f7130c4723a46fef45e47e5f8fad762b173": "02940e52bbd8252b404681d4a17286f8",
".git/objects/4c/1d6d32b8146a8b3eca79bdb007bd65190b7661": "248f08561114e0481775bf505fa343d7",
".git/objects/4c/f163bfe2478d5bcff267b559de41710d278af7": "f3902f948291f941a9e683f3f29542f0",
".git/objects/4e/7bf14b68f75161ac098840a712434f4a629783": "6a653b04841a789e6767135e55cf862d",
".git/objects/4f/a54932cc3ae6a001d40ed1c90b6b55c2fa4b01": "a3c17671eecf026e8b3b9c3183402731",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/bccf61c5ab93989ea8cee76ef17d3edb92e487": "4e4caee849cf9832960c14cbac4c81f0",
".git/objects/51/f6b52688a931715d38d7f68c14184181ca3b3a": "391cbf9d16c70fc93ecf644897c46220",
".git/objects/52/e940d0cd1d28b847be7b0b5458b6dc6e1b7941": "749a2a407d3df25924bb47dae7132d2c",
".git/objects/54/70762e4d31c273bae6199fa31c65a45c128a9a": "72b07d90ea411983d00b821ba59d46cd",
".git/objects/54/b308356484298970cc412d9e0ea87fb42becad": "00aecdddea6d6bd4a2cfccfbf34e203c",
".git/objects/55/3fdbd485068c4bc0eb2a49103ddf5da815b34b": "f9512717f31386f9f59bf3816636fa54",
".git/objects/55/79f9d460d1bc7f5fe54edacd805166f14c5abd": "de2b0d9a90c303715d6f0124ae873f15",
".git/objects/56/4f8356a6439bf337cc19dfd5d4d9b25e4ced08": "048a16d24696de8f9483d9fd5eda460f",
".git/objects/56/757ab351febfed0af0e91358edf63bf9ab609e": "8f032886d856e91bdf0c5e404eff36e4",
".git/objects/57/3e67da8ade96ad7de30f3145a19ed02340cb15": "c6b0fe8ca46308dec028b4098941e712",
".git/objects/58/58fb7bea9ce186b548ac4eb28bc6aa7d775d4f": "e464d47f9c9c21d7397571e4d1784b72",
".git/objects/59/15051bb526be56e94de2c86e32063be18eae0f": "dd960d052cde86e05b210320b6e13ee6",
".git/objects/59/a946613a2a2f3c49c97d420a0849bf59a55183": "58620d0ca988dc94bb27dcd32ead71cb",
".git/objects/5a/3d972872da9aff13845e1ef39fc04421ac8ffd": "162beb7cb4a4514093380c7c077ba395",
".git/objects/5b/89af1e048bed14a6bfb42ab251e63ad8fc53ac": "a7d1e4fcde03beefb25554fd1763c475",
".git/objects/5b/d1f44359d0c06b283089b47be1bb621804568d": "11cbcd0f3b72aea4d39f50c1e3a3d84b",
".git/objects/5c/1cbb4a509fd9679c15a732ad12f1d2786136a9": "42fa6af3c955cee661bbf4c7632dde8e",
".git/objects/5d/81b8c761e9de351dee3cd7471f6acb0e781464": "81afc6c430aed8b461423e8e4c85d9e0",
".git/objects/5e/c938d7d3d4ae4ff18414c688a4146fc5deb167": "0b257e11b59485e2d3b89ef9c7b788e6",
".git/objects/5e/d43a994ee3e93d4cf250579ba41b31f114aaeb": "ef65ce8a7177a4fe69f3b9415ff3ca55",
".git/objects/5f/7c4657a439d2499cfc13a23fa464cb0444d21d": "14b1aa4590b16d392c87fd6018901c89",
".git/objects/5f/bcc8d787a6a350c5e5de32d3d8fb9b8e72506f": "eb1ad26a75dff704f38a8595549598e4",
".git/objects/5f/cab55379a863986b541d007e8a3f29e4ddd372": "7d40b7dcf96ff6913d9dbf0f14912229",
".git/objects/60/474c7c89e6248d4b1775c68b529d9072615d57": "f16bc71d1355fd7d6532d3722ecd0b9b",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/14113992a654fd8365d8f29babff4efaff8162": "2ef978e815cacbe8f1a118000b17eac9",
".git/objects/63/7c21311647c67e31b71c67c01e905c858cb1c6": "2588fbb6fe2328f2895044ec9af79969",
".git/objects/65/0fa5f8fb95b1f0f74cd437f0dca28bea0e6d45": "0db866107a102ee69b7ad2ee7a897e08",
".git/objects/68/3a07545b5b54589d407a568e9de43df45edadc": "e86a4bcfac0a1e4ab66967c9cce42dbb",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/6a/afce1fae3ecd995afd79fdc1249e41aaf07988": "137cb50af1b8637f535ba817dd6d1492",
".git/objects/6b/739a761f1b3889cae86878b71bc5992e77c99a": "eb539f7ea16b29fb82a405ddb87e1513",
".git/objects/6b/c00c4d406a6e0a5acabf26bbec1e0f58cc0c27": "0689a272242686131f7c3e4098385aa0",
".git/objects/6c/0f103a775c5eaa07853af1a662e03f556eb808": "dc51e800882e2e20b1c200afb949b19c",
".git/objects/6c/487795c6ebc163678c7a5c8a9e5a542a14a7d7": "466e6539bd8912a46fdd57f35ce9654f",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/6d/6d6bad87d1f42cd044f347d8798bf381b2fad1": "6c603364dd8dc323f7956157a1e18332",
".git/objects/6e/4dd8748c31c21967e465904631b3fe34d9d28b": "97dcc8d1b3c4a283dcfc7c57ec87ce32",
".git/objects/6e/97796956d1ffa7d635b1e4ad66b0f3d28d7096": "7cca1145c1404814d1731239eb5965e6",
".git/objects/6e/aa3066a8a230d5f6f0682ad96dd72995c9f5f7": "37ccc1c08598f7c56e6531da4435783e",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/6f/acf0364cb5dd2b936dfeef730be69904468566": "33c1c76d1996a90d197bea09b9a50c49",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/5096c9504dd1a8190e1a7b0c915ed17bcb23d4": "ea11f0f57b36e215d13ff986152f96da",
".git/objects/70/974d5ccc24c59b1c90f44886e2dc550e52ed36": "dbf0feca250fc257cc70932cff6210d9",
".git/objects/71/9442d420a9c3d8df77d85b6f6ea1bc55bd39cc": "f0f785e8e884c8c1befbda9dcd273a1d",
".git/objects/71/99ac01a1b999f0f475bc3343d2f7bf00a72a02": "76bd00f5eb1fb39e81dc49c82f118aab",
".git/objects/72/865c2363fc822187af76719685e5af89c4cf19": "7a80ed7e4c654c79bb807e4fab1c6b37",
".git/objects/73/0a8f1e940c26b3b6b072ef55c06f17a9650fc4": "a51452eaa2b91a1ed3c36068e4ddaed5",
".git/objects/74/b630dff97f72e34c8a8547932ed77c940b95e2": "8cf4ee7791c22758599be4ca2c7672b7",
".git/objects/75/1a6492e947e32622e577d9ad73ee19c7ffb50f": "b9a2e820e585385dcc640904a75be8cf",
".git/objects/75/96ebaf37971d0320219855dc7651dadc16e707": "6e25107f76cf92f6ef5662fa3174fa73",
".git/objects/75/d6b8a0321797506f9d243ae3fc163f9a34f0f1": "b63e436d47a422bba50b5b98a742155b",
".git/objects/76/d91cb9895982d66c398f9da3daa61470488fb6": "eb9c926b9504ff85b80091feb21a6b60",
".git/objects/78/1ab2ba2a51f026185ec43fcfd7b7194896d510": "2287d24b208dfa148fbad1dc75269118",
".git/objects/78/329a9fff017185e3dfa4586c3989308e012a45": "e703a1e3f8f3061186f8586fc10b5b00",
".git/objects/79/b7aad8ac35e54c0d70943c2888034e84745eb1": "c01fa98c45a5687756eab1e89022a648",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/c08c8c7510096074e9736b3b2bbdf2f8c6be0c": "7ba4299bc76eb8eeaa5d7a682eafc430",
".git/objects/7b/efa5080f62aa5805629cff4e9642fe13fa9dce": "3ed09a4f6a983da4de36f6194c75c63f",
".git/objects/7c/3dfce9adf6a8992bc047898c4402e70629ebb2": "7f60f8cf6cb1405aa03a9b27ed965995",
".git/objects/7c/5e7c435ca6416bbd0a319bfee3cf35f3a12aa0": "dab0637689d138250527437be7230372",
".git/objects/7c/80030fd053563aae556b9bc6fa3cfa6d6275a4": "6ce68c2b8c4702c4b25017aa8aa42ae3",
".git/objects/7c/acb1f7145e63da036e8deeec4da6427b6f8edd": "1b2061573173847d8ced245a3587cf01",
".git/objects/7c/e659192671dc51a707b3e130079ac4e8927033": "d95348112275871bdc9d119f237e8eea",
".git/objects/7e/298cb0c0047e01c6bf31f9ed087cfd51b368c3": "f2148c8dd025763c074e9c1cb23efa6f",
".git/objects/7f/4131ce7aa75733a51b7035ade7fe1d91f607ac": "07a9f8d5171b64159c504efe0537515f",
".git/objects/7f/7f70b9092256d11da63b687f1178b11213787b": "091d46afe43d2ba1f75644c2ac54386b",
".git/objects/80/5134f32d5123482087ccb56cfc81d30eec8288": "2d3f5d7bc48b921a317756f9ad8a70d6",
".git/objects/81/9065e0f5740a12df4d9caa282fe99659d128ce": "1e1b0f2836b3095c95cdb0598bda242d",
".git/objects/81/f8da657f4d111d76b4d2cd5a7411b77310dc0d": "8b8ee3407d538b030f8eb735009c6074",
".git/objects/82/fcdf61f390b5e27fb9953a8f70af5978abc4b4": "3edbb359a8a5494ce72cd4be090b7253",
".git/objects/84/46cced9f6801c1cadf5c9e6e3fc986c268a1b8": "a6df141035f77a7e2194bf18c63754cc",
".git/objects/84/73a19ccd2c7b4614d9e045bfd7564833b4ca03": "94fdeae2137c578eb91c6810ee3ffa20",
".git/objects/85/640695afd8b25a64ba7f78ae3567820d71d8cf": "71bfc165511d342b2dd1431d476b9265",
".git/objects/85/87742a944e407741b5a45f2a773a477c196215": "57b0d695fb1891aa4d99c0919b42e079",
".git/objects/86/8413f12f7b9e08c7e7bd2e5025924f67baf597": "a44479b27966c518ce559ca5d405eff6",
".git/objects/86/a1facaac782b72a745ee861c8d746f72715b0b": "1dd59e11a5a2cbbddbdc40c1e7440b3c",
".git/objects/87/0be05b24076116bf2c1769bc3bbe50c97b0bd9": "1bc98f2e2fc6e615046783b8bed5f44d",
".git/objects/87/7a11dd260b5a86d243fbec458439a2aeec1270": "282cd3324a6ca9af2280a44f732ff8b3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/283193e216dcafc61b1a75c82d7768fa264ff0": "4a66cf9d0e263e8edca7589ceb241ef4",
".git/objects/89/973ea8404d1f875a9eb2bae8abd885b595f2dc": "4e486142d19a41cf96c704247c59896f",
".git/objects/89/e4c26837c5030400bdc10e1d914e4e5a58cb16": "f6939c174fccf3133779404e2565455a",
".git/objects/8a/87ece4f06fba42d21e8f8c3c572a46c10900f2": "155a302fd068d33f41ccb8a9e3ec999a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/20c5be1cd3d65123fcffaf064484566360ca51": "cf88e5ce89e88b14170a2604d8e946dd",
".git/objects/8c/6276263d7e322e7a945afeb8861ec940ee3291": "245e48ebd2b2005f8e5ea83b8c5c767e",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/37afd54d486291ec54b2bdbed7eeaea0026da8": "0227604a91677aedb30a3349868ad947",
".git/objects/8e/55d9e2e35ab1b9250ebd3aabe0d0666bc5963f": "1d184a5b0b2b13caeb64a9af0403896a",
".git/objects/8f/4547dfe955c18c73899f1080423c802f6f874b": "3a5dd3504fc8b53d2bd977b4fe1a2d8f",
".git/objects/8f/865a1dab80b1214c03db3e23f9828d5c3aa736": "22cb70a5689be54693e12366cf04ec4c",
".git/objects/92/266ccba535591a1925c43e147279741fc6cd51": "882310d99053b34bc5352dd100fa68eb",
".git/objects/93/3471e6a70d7173de0c868e0f382ee3f20e6b2f": "dc2b120d137f8d3dd5e38017f63cf085",
".git/objects/93/5439478ed9c3cbcbec274a393e9dfc1a61de8c": "cdfa7fa1f09f5dcfa96ff8f4c9a2931b",
".git/objects/93/57caf3ec578893142b36f1eba228cbd633e33d": "e9e393a6fef17a2a5c615c1def3dcba1",
".git/objects/93/ce924e70a50d14a2070db74d7f97073990f410": "a4a58f568e1b17ceec967196fc37c69e",
".git/objects/95/1f08d4b6d5b71a5a080df0607c63e6e13591f0": "85adadc2eb7427be722b1884f9a9edb9",
".git/objects/95/e504908b1d71c3beee2aa9546b3948512b8969": "7916d6b1858ce9207335afee8ffe909f",
".git/objects/96/e2e81a3d1e00f2638000e2110075d3af23cfbe": "fa5d75dadf587cc64c82eaf9de652f15",
".git/objects/97/a2e9c434ac9ca4d105c797871605eefafbcdef": "e7180bd39a11f268cea1dcf516e7e383",
".git/objects/97/f8b5b2146e1e438f691ea9e063bf173d5f294e": "26a8a546e1c3d1b7e6f6eaaec6a903c4",
".git/objects/98/031fec84b5a7e2fec9b0d1fc6787655b6ae50b": "c051d309f72c96e791ed69c93bd3476b",
".git/objects/99/9a89180478519b22af700a5f568be8123eb9c3": "17991429a9a9505275f551ba15703cb9",
".git/objects/9a/2f4bdbf5f1f4184eb7e248640a994f8acdaa69": "2069d2df5660ed10e8bdd450c94fd3cf",
".git/objects/9b/96b3c2dcffd33427ed593162a3ae5e1ef21af5": "8c14f7facc9f7784801429285cb44205",
".git/objects/9c/e394b0b18cf6bf998817d013223d45a6acbc44": "b75e3896f0baa8477d2424da1366b79f",
".git/objects/9d/8b98d10d5558d16ed176c67dadd414a7578ddc": "718d3a9925cfc4f3d58c9bd523932f84",
".git/objects/9e/be22c75ce31659f7e61c5907e4283a645171f7": "a37c87055ef6582e89fbd493c7443c56",
".git/objects/9f/8062a713c4af5045e82ba34633d7f66d453c73": "e10ac3156a3c3788518175c752fcc806",
".git/objects/9f/e02ba2c0aa610e79e0b856cfe80fa0b2e88692": "c031bd8d3a3e37606476f60842a9eb1a",
".git/objects/a0/7bc9e9e86fc6f3da3dff03dd37a9e7a510b444": "87fdc9f897a9a0e71d2b263fb3995894",
".git/objects/a0/fcc01cbf41739026540734280d0fcb9daebf19": "0fd8a2937b9ed63e558b50ec26eadb18",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/ad0885f367991c1648d9a9a6c35d20422840bf": "9730603670694a9bd6fc46fb8b1a6b6e",
".git/objects/a3/d865d02b89a10aa5fd35229197ed47a5445e04": "c003ecc4ac30b342c79b58dbb29805c3",
".git/objects/a5/47d7530b17547f40e077669375b1875461b335": "9e2b85de372e6f80ffa977145f86f3c4",
".git/objects/a6/9e44399378c272171fe469852ec1379de41aa3": "b98279b3d6c3a87f59456e7a51dfd1b5",
".git/objects/a6/de98879112a43225498e364a77c2ca84cc9979": "80f84867a15ebaeafd9876aa6e2ecf84",
".git/objects/a7/02a403249d6ccd82c2ba1bd4cca1f3004baf9b": "12563144fc67349b78eaabac9d702900",
".git/objects/a9/626d5b1c1a50ec74b8dde3a2022e7a1ec914cd": "a504c5ee7cfd6d209f872653f252b17a",
".git/objects/a9/a40dc1a155f644b8c90bc32b15cb95d67971c3": "7e3122c8b634606dbd3b601cd818c7f7",
".git/objects/aa/13bdf650ecd1c4d3ab240fd08bb39328d09ac0": "bb5deafb7aab7f85c3a82677b059e63e",
".git/objects/aa/8ad5c54dc7ebf66ca025caa7f4d61d3f5791dd": "c39df42746c5d2755eab9aa5300da517",
".git/objects/ab/9d421a308f1b98e5b99c20c2554f8a90f72063": "cb31f34c76a35bc23e53b184068cf436",
".git/objects/ac/25e0714986df176f8c92bce945006793a909fd": "db8672497a2d5d2ffc9f04c579e10397",
".git/objects/ac/b7ec364944d9fe8d85972558ce1e3e2589ade0": "28527e7915d6e1c349f88927e9c05f63",
".git/objects/ae/9c2cfd44165b547997e87dd7678f04986ecdb4": "84b45df9da9b053bd2831e1b4ac4b6d9",
".git/objects/af/007942ab593e1fd360836902fc16ea0bbd98cc": "32770480380cbc8ce9ffc4a11216bf88",
".git/objects/af/793027c351ab66a35d761402f92fe959cf3716": "bfc311d715ccbbda2d5cc0d59f49de09",
".git/objects/b1/39b9270abe72622c9500db15a375f7a2a21b99": "48aa4e8fa3d5cbf655c412a0f3c58414",
".git/objects/b1/5b71344dc660d07ea826c83c9bbe00206a028e": "2ce3d220b120ad9eccf2fd34a28e0ef4",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/3daf9f840892c337bedb260049800c7adbad76": "8b35cd1411f85ec545f8e6ed615ff764",
".git/objects/b3/7bb9acc0f4c41cc3733f90586f77d0bb91c8b8": "bbce4c9653632925f544a05e811a67bf",
".git/objects/b4/f2d0101ed8c61a82e3fc9284464fc575801f65": "0e13aaa6a6e98ef710e5f487af61fb8c",
".git/objects/b6/1af64594271e3c5d08bf3cf8f1cfd8e0702e24": "be3a1a533c12f171381537aca6130ee1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/70aa35555d219ae0d80b90fd9dc9a6fc0e4800": "41a573f7f68e0b64ad587267904bc228",
".git/objects/b7/ad1ed03a78713c13d94fd060eba1cd195c2f3d": "78daa4d07b1635efa9af88e570fdd2d6",
".git/objects/b7/f242542d9421aac6d82c151ff299591c0eae4a": "982ed3be9252605242636d8cb03b1843",
".git/objects/b8/86900cbeb15189bc5748bc94b0336e030ca01f": "fba817b6034b69c55b3d25b67899d220",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/ec48596088290dbff9f55ed380d114b374d25a": "b2bf386e8bc1ed74bd93f472804ae54f",
".git/objects/ba/873595714be0aed5b3f40c3f409125d58b741e": "090eab633a2fc6144387ae5913e6fe15",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/dfe3a57d33275b45e51699c754769ae9bd8cf1": "8db422c23808bb731e8a3697a914f531",
".git/objects/bc/3672803070fa0ae8e89be56e82df944330e48c": "e93e899fcc87a2762fb9731e68684862",
".git/objects/bc/919f35356827f1247efebb99ba5c88f0fc93c6": "b89c4255710433628daadc3ba698a60b",
".git/objects/be/88518d0da72ffa46a33424e6c286a9e8db7f57": "7f9189456a05cf78559a842430e5a243",
".git/objects/bf/b34b1d678c1de94ad5a4c659a165e3a8018c38": "1eff6aa3b513324b37786ae0a4a4accf",
".git/objects/c0/13b1abb6c8418a9d805a0e3408579be541f257": "155f69623a31e47ed8f1c1ceb1a01b15",
".git/objects/c1/2d609632b8988806e6d6657501401460493dac": "82f81eb3975d91482b44ead9dc7dc7a2",
".git/objects/c2/1326099d59a6aac5c558ce511b15f6c08e02e6": "715d2caaa723cf0c0794b5b1e9a7e331",
".git/objects/c2/c962fa0be86c275fb470f5955b672b6fd6fd26": "4e40715d79beda1136304d4742a44d78",
".git/objects/c7/201e6920aa8485649f7c32186b5084ca5bfea8": "553de7405bed6c11fa028f3b7a0d4543",
".git/objects/c7/83ecea668e3774e29ceab9f3a3822525edb636": "9a178c9c275d330b970b45b12f2a005d",
".git/objects/cc/55905ffe185d5cbf5246e0953388f3199e8eb7": "a24e687cfd1cbbc7998841a67eda5252",
".git/objects/cd/f0e952bacf75eb4d63acc9f548e31b70d1f9e5": "31bd3db38bf2c7cd82317427c67e6f81",
".git/objects/ce/a78940067e9dcf71e3f8cedc9bf4d45cf9ef9f": "48fc43381f6fa0d284e0e1bc118e4edc",
".git/objects/cf/30df965ac8ab9d7a1ace0f037c4d6dd184db98": "cdd4e6ddbea837f6bc47729949a66885",
".git/objects/d1/5f04ecf99575c6ee782792ec6be7e567864ff6": "35a7acd920cbafd55767731f1f24de31",
".git/objects/d1/ac9ba1169e4076832034c5585e1c5bf9d6f83c": "876bc5615b97dd6984ed3a864ba27059",
".git/objects/d2/0397dc55ec81079b0da79caae84fc39515c51e": "944da30658accbeead37ff1beda51b93",
".git/objects/d3/151e6204c87d64764d7e192febb51adb5203b5": "5f3b3d4af5397b1dccdb2319379ce633",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/02d4dc71e2f90924f06d2fcb50653b46ba2db5": "d9dbc2e5f80fd51f9e980e852600c797",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/05e15beee9dc589c77f8b5c5fe32ad6a333414": "1849cb7586ce84fe962c18328e50e397",
".git/objects/d7/ab0ee4ba66949cc83e165384f3521ddc28bf17": "870b12b554003634b11c8541a12e175e",
".git/objects/d8/46118d762afc695804f549b8498e9fbaa0dc2f": "eac22a30a3851ca79cd050341ca9336c",
".git/objects/d8/caccef8608bef1dabca75257c8c166cecfe75d": "85ec9f38d4a2179c20133668ba966c31",
".git/objects/d8/f42b22ec2d242ea146d2cda490cb192c114e47": "261f67aceb49cb4a0de02b9cdbb98996",
".git/objects/da/0526415f7eb2fcbf5da2b143edf73d0977ee0a": "7cd94f8dcba2026e235b4d1590f70bf9",
".git/objects/da/a3d06656edfbf8fd2f87164a9db7821cc8333d": "c5138b279390bf36d6c70070aaf110c0",
".git/objects/db/13ed937d7a6e7a32470dc714fc617d666c207b": "2bc32bf3ba0c71c6a48272fde22a5193",
".git/objects/db/62a105df0e5b308c6f516ff8323cc697dfa03b": "91830e013e3534654e2de2bf39466a79",
".git/objects/dd/f61e2b0b89515994b72555013b3f585770f565": "9141cf76ba5faca2de4d3438d143618d",
".git/objects/e0/95059d63ad166922e7beba1c93a175ab6bdbd4": "59477541ca6882221f8d245013539727",
".git/objects/e0/b5aceb932e35410de535597b34839e79d2c30f": "cf3aacebbce895c23b48bf04b7bf48cb",
".git/objects/e1/e2b45575bf2368688d49113ad14482b9bfc86d": "1d85e7038338be0d7d7676463423d051",
".git/objects/e2/6c1cd350870002012b12345aa8999228806332": "c3ee09e19e7dc55a0d1dd92c14a4cfcc",
".git/objects/e2/b5fbb02fd0ce400780207ac39d203a319af7bb": "4bb073efbd374cfa8e7e0d1b0377cd4c",
".git/objects/e3/03ab359d2a4a68f5609574611ec7ab2f84e522": "a46fc8c293feb8bbfa67e466f719b21d",
".git/objects/e3/635306d473978c2613f52c2775f3c8420e6e1e": "8ade127e4f5ea6475ae2b8b73e8ba2ce",
".git/objects/e4/bd919c05e79e419cdc5f429cd88aa265ed3b65": "f5da0fb0a0c7563d3003f64d973d7a44",
".git/objects/e4/d3e149f1428f32e15df89bc896e575d9a30be4": "8f5a5796819d5e7dfc7c63bfc16be761",
".git/objects/e5/0801b3b620af91f824c7655df7d064db05b764": "3a034b2609afa6f9a14cf62c9fb57254",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/29dbf2d3682b1a2b22dfbb97496faa2ea27ae6": "4bbf2cd5d93324f3602113b5dd67f238",
".git/objects/e8/aae78a7a6b6d4d08fb4128a6b21576e0cacbaa": "9bc38075ebcb7c90718dc67cd3f121cd",
".git/objects/ea/834a35bd763c1d459d3982fa96f97c7d892502": "41db6eddf2b625110b0718b5a1a13b75",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/7a85d9533e5b907889c536f7817281026d3405": "c0950561f93119f9f38cd9385de0a679",
".git/objects/ed/4b89307b286c76cd9d4b7aa4f45fea1b234e0a": "0ecf8fc6234c68d832716235af98e4ff",
".git/objects/f0/69fca3a1a58f4d75039b629778047e02e91257": "8271f371e34947d525b9ed7bf749fa1f",
".git/objects/f0/8051d0a62d163788125efab5b174572661bd1f": "59150523ab0f45db07582427eaaf9dd1",
".git/objects/f1/6b586918ae57b838e8c23711d7ff36727d69ca": "75d81a07f217b8831742764c638708b6",
".git/objects/f2/cee14a1948051966d625eb75b5d50f84c9f4e7": "09efa4e249432f9c5c4f547055b7a457",
".git/objects/f3/3e8162997aaa9da582aa81428ee87aa48953a6": "fc158db0779aaef1b463487bc31157f0",
".git/objects/f6/50d48f265de8503d0b7e49709ca78d0e008210": "47cb3dfd6e64456f91c5b60ec6abf141",
".git/objects/f6/d6e0cfecf87b45f1b62e92eb9b0a7a062f25e4": "5f6a2e258443e6bf1d67a7f9818e3c26",
".git/objects/f7/501b13af3da9f5bea77933dee7a30dc041ad25": "cb8b699be2a9d0fe2a9c0266e82f6262",
".git/objects/f8/8682f04e6180eb8a2ccab1715b0db7b65686ea": "b70ea9e49d4d587ecc1a60555b0b0a72",
".git/objects/f8/8bfc0db6e3f9233b2d7fbfbad160e65b4850ad": "fb40bb7563d93a83c0665d0cee0a2420",
".git/objects/f8/daedca4515bb70b84038c6c447022f868f57ab": "6a10cef0b99704e835bd0f233ca880ac",
".git/objects/f9/c848f71359b50492fe883d734483795b18539f": "9e9a781e4e49e77bd6135f2771f2c0fa",
".git/objects/fc/567cd2f11d83683d9eb4ca1a5fdc912f7d417c": "a043e3e370f27b8721ecd4c53e4c975e",
".git/objects/fd/b39db7531f751fd586aa104fa7b31f52ab6eb3": "b209cde37b80993a3e01a3e3fc4fd730",
".git/objects/fe/76b9b6652182db66b320eb26b3d2931fb77235": "29150685495cb94de37edf052f3d0a74",
".git/objects/fe/fc391e915039630b4dc962823371dea3c9b99b": "e7f566a85f5719aa7c40a3680441a7f7",
".git/objects/ff/266db535edd97780e561d0da50f7a15c1323b7": "4634ea84824e6fcb2edc884d0958a16d",
".git/objects/ff/5ab5140afa7bc2bc5998fc68b4b429893c72ad": "ace2b40d1a1d1b98a30c6d4dcc779937",
".git/objects/ff/ebdc8007a8a12602720389cffaa8c79dffe773": "0593ec6001ec1b195787541a2e5f3eb0",
".git/refs/heads/main": "ac8c28f0ec4f5a108be512fb813d22e3",
".git/refs/remotes/origin/main": "ac8c28f0ec4f5a108be512fb813d22e3",
"assets/AssetManifest.bin": "ed4c03bdd343767b20443efefd26a6d9",
"assets/AssetManifest.json": "2f8eb3e63558436e2d6f9ddf9fa62d9a",
"assets/assets/ai_tip_image.png": "79fd67c4c189a542e9cd505923daf593",
"assets/assets/audio/canone.mp3": "612aaebc9bee5a51e35d0801a9ce338f",
"assets/assets/bgd.png": "2ba4ce62fad06d5ad2259bd5ea27a4b1",
"assets/assets/creta-crayon.png": "8b1a33d2be10dec9a95ff7bd76057a2f",
"assets/assets/creta-digital-art.png": "83bda569ea3be2963ccf76775a95f5d5",
"assets/assets/creta-drawing.png": "9be6ecdc86b6240b23d97bdae7d6505a",
"assets/assets/creta-illustration.png": "cdd42fa516bcd3647e12b7d7df3cefc3",
"assets/assets/creta-oilpainting.png": "efa3012c06d044af70dae8d29abc57c4",
"assets/assets/creta-orientalpainting.png": "74332d0ead5fcb395e52c1d5c8f7b81a",
"assets/assets/creta-outlinedrawing.png": "9a6f7953d9260f91c7c6ef1a079a921a",
"assets/assets/creta-photo.png": "484dae169f5f9d46acc241b380853e26",
"assets/assets/creta-popart.png": "7d12a7faf31326e9250b79c8767254aa",
"assets/assets/creta-printmaking.png": "f82315d66f95eec8c60a08e967dfe925",
"assets/assets/creta-sketch.png": "b9b7da2f7c1156c1673ab753d53fb918",
"assets/assets/creta-watercolor.png": "7aceb96c30dc503ac48240d9b7e5fedf",
"assets/assets/creta_default.png": "cf1eb68da282f005cc5cbf8a6c3d9d8c",
"assets/assets/creta_logo_blue.png": "bafadae9d8eddb17987e77ba49c0d13b",
"assets/assets/delete.svg": "290daba2785fb1146c928c8b3d3a7762",
"assets/assets/delete_content.svg": "f1958da0b63de6e70f78414664b93022",
"assets/assets/delete_frame.svg": "d67f01a11018305a3ee4e98a944a05c6",
"assets/assets/example.html": "ef766ad9cbe65574a206c7f898e69619",
"assets/assets/example.json": "d4897eff41e6f937adb0d9876783f622",
"assets/assets/google__g__logo.svg": "ea735e62c31af39012853c932d74375a",
"assets/assets/grid.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/assets/hycop_config.json": "4001e5e03502bcc9420aeef8212a7b3f",
"assets/assets/icon.png": "cc9b97397cc141085df80ea3d8e054af",
"assets/assets/landing_page_banner.mp4": "b301e723bfe6e89334c032502309b0f8",
"assets/assets/logo_en.png": "a6de38b7f004ea361acfbc9ed98a447e",
"assets/assets/michael_buble.jpg": "c51c37922416de7ad68b198f2923bcbb",
"assets/assets/noise.png": "326f70bd3633c4bb951eac0da073485d",
"assets/assets/no_image.png": "05434b1b716ba721f3015a2393b9fe80",
"assets/assets/tipImage-1-1.png": "fe0ec67588b071f5b7980c4d88c2efd7",
"assets/assets/tipImage-1-2.png": "006a497f79eaf60cb8f893de92e0bf6e",
"assets/assets/tipImage-1-3.png": "e87acefb77b521ee366b127cb94ade72",
"assets/assets/tipImage-1-4.png": "eabb8c3ac2bfa97e7db7f12af542d258",
"assets/assets/tipImage-2-1.png": "b17e6a723043acab6c4cc0675c1ba1f6",
"assets/assets/tipImage-2-2.png": "9983ccb385d7ddf1ae5740768fe8b4bd",
"assets/assets/tipImage-2-3.png": "5aea6da297886bdb6e8633854645fa9f",
"assets/assets/tipImage-2-4.png": "7ad6eed05d40d74e2d4ca544ad87b963",
"assets/assets/youtube.png": "c647da897d59668d1c5d18751e7de2aa",
"assets/FontManifest.json": "0c25a05df9f6b6f02d7facccb3c817a4",
"assets/fonts/Jua/Jua-Regular.ttf": "f32585404eaefb4f771d6ec0d0492682",
"assets/fonts/Macondo/Macondo-Regular.ttf": "cea32bd04bb9981d8dd78e509ac1cccd",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/Nanum_Gothic/NanumGothic-Bold.ttf": "4fa4ea43222779743fc8cd4b4835d04e",
"assets/fonts/Nanum_Gothic/NanumGothic-ExtraBold.ttf": "4b1b824d86d866cb8245accebe324b62",
"assets/fonts/Nanum_Gothic/NanumGothic-Regular.ttf": "3cbe9257e888255cb2dad0d8a80a7759",
"assets/fonts/Nanum_Myeongjo/NanumMyeongjo-Bold.ttf": "9eaa2e637c6efe5b4e37b7626e65b47c",
"assets/fonts/Nanum_Myeongjo/NanumMyeongjo-ExtraBold.ttf": "a2dcb7090ec61a328c2d518342cdc568",
"assets/fonts/Nanum_Myeongjo/NanumMyeongjo-Regular.ttf": "afce7d51531785bfad8c666d6ee2a9b7",
"assets/fonts/Nanum_Pen_Script/NanumPenScript-Regular.ttf": "6238324b9cfd31534885a47e8b07231e",
"assets/fonts/Noto_Sans_KR/NotoSansKR-Black.otf": "aef8424b7c9ece17f01cbc8618e4723b",
"assets/fonts/Noto_Sans_KR/NotoSansKR-Bold.otf": "b59ac7cf449e57469daf2480fafbddf4",
"assets/fonts/Noto_Sans_KR/NotoSansKR-Light.otf": "89816c0e22baa4f81a196a1c3b61bf46",
"assets/fonts/Noto_Sans_KR/NotoSansKR-Medium.otf": "de132efeffa48aef0bf5bdfe1c4602f4",
"assets/fonts/Noto_Sans_KR/NotoSansKR-Regular.otf": "913f146b0200b19b17eb4de8b4427a9c",
"assets/fonts/Noto_Sans_KR/NotoSansKR-Thin.otf": "5dac92efb94655ca5331df2505f3428a",
"assets/fonts/Pretendard/Pretendard-Black.otf": "a0dae583b0afcf6f07f170fe75c07642",
"assets/fonts/Pretendard/Pretendard-Bold.otf": "0c28c1f5ba0bcdfb02688cc77186c89d",
"assets/fonts/Pretendard/Pretendard-ExtraBold.otf": "44ba46bad2096044f462bc5ec1d28915",
"assets/fonts/Pretendard/Pretendard-ExtraLight.otf": "fc5c7c8047bbdaf09f8813d1fe3165ac",
"assets/fonts/Pretendard/Pretendard-Light.otf": "d39b4dd5b80382ea3b767f805de6ee92",
"assets/fonts/Pretendard/Pretendard-Medium.otf": "c40957def7f8380b7ab0aa28e594ab1d",
"assets/fonts/Pretendard/Pretendard-Regular.otf": "d1e2411be87335a335df2d824eacf3f0",
"assets/fonts/Pretendard/Pretendard-SemiBold.otf": "5c328494b7eabdb6942b76d5fb4d48e0",
"assets/fonts/Pretendard/Pretendard-Thin.otf": "1095c717674530e8a42bd9d4c4aede43",
"assets/NOTICES": "97482e30c40810fa3edb1eedccb9cde7",
"assets/packages/appflowy_editor/assets/images/check.svg": "c7b016041b6a5b0ce7cd50b7277364ec",
"assets/packages/appflowy_editor/assets/images/checkmark.svg": "3dc55867deb579484c5702a79054bb0e",
"assets/packages/appflowy_editor/assets/images/clear.svg": "f74736135d3ee5656b916262104469d0",
"assets/packages/appflowy_editor/assets/images/clear_highlight_color.svg": "0b35a31822656c53578fb91acdfacb31",
"assets/packages/appflowy_editor/assets/images/copy.svg": "8aff328e13b4b3667a6fbe1046d691b2",
"assets/packages/appflowy_editor/assets/images/delete.svg": "4a8d17ccc8cd1bd44a472f66ad028a01",
"assets/packages/appflowy_editor/assets/images/image_toolbar/align_center.svg": "e82165a5f6fb20a7ad3a6faf0ab735cc",
"assets/packages/appflowy_editor/assets/images/image_toolbar/align_left.svg": "fcd2f1a9124961798dd7009f27172a64",
"assets/packages/appflowy_editor/assets/images/image_toolbar/align_right.svg": "bf18d4c1654d502abea1d2c8aa010c30",
"assets/packages/appflowy_editor/assets/images/image_toolbar/copy.svg": "8aff328e13b4b3667a6fbe1046d691b2",
"assets/packages/appflowy_editor/assets/images/image_toolbar/delete.svg": "15cbb502f4554ee7a443207099cc839a",
"assets/packages/appflowy_editor/assets/images/image_toolbar/divider.svg": "b7677e94ef1007c39a1853588b177d1e",
"assets/packages/appflowy_editor/assets/images/image_toolbar/share.svg": "42aee34d22fd39e710e4e448bf654e29",
"assets/packages/appflowy_editor/assets/images/link.svg": "d323cd62b3df10a342e8e78ca50bf4e1",
"assets/packages/appflowy_editor/assets/images/point.svg": "50c7d9067a4a84945f1d79640589f501",
"assets/packages/appflowy_editor/assets/images/quote.svg": "ba6e97b8ddde8bf842fe2a56d06003ad",
"assets/packages/appflowy_editor/assets/images/reset_text_color.svg": "a9ecce95365f0b4636ad43cc054d87e4",
"assets/packages/appflowy_editor/assets/images/selection_menu/bulleted_list.svg": "7b22749438c843bc176fb559c924ad21",
"assets/packages/appflowy_editor/assets/images/selection_menu/checkbox.svg": "b81c986f918f1bd859fe07717b1e9d59",
"assets/packages/appflowy_editor/assets/images/selection_menu/h1.svg": "8135d2d5883f5cdd8776dca2dddb5f9b",
"assets/packages/appflowy_editor/assets/images/selection_menu/h2.svg": "129cb4e93b4badba4805968b13d52098",
"assets/packages/appflowy_editor/assets/images/selection_menu/h3.svg": "cd75480a77da1cabc7c5c2bf81325322",
"assets/packages/appflowy_editor/assets/images/selection_menu/image.svg": "92468547c1be63604f0820e565a1a6c2",
"assets/packages/appflowy_editor/assets/images/selection_menu/number.svg": "9dad0889a48bb8f0ff288a5c0b711ab4",
"assets/packages/appflowy_editor/assets/images/selection_menu/quote.svg": "f58d378109520a8058edb4fed9d9ddbb",
"assets/packages/appflowy_editor/assets/images/selection_menu/text.svg": "890a3a1b0a674b1fbd769f42520cfef7",
"assets/packages/appflowy_editor/assets/images/toolbar/bold.svg": "51e86ea040233e6a093caf02eea0c5f4",
"assets/packages/appflowy_editor/assets/images/toolbar/bulleted_list.svg": "b9441734387d7df0122b9dc629ca6bbb",
"assets/packages/appflowy_editor/assets/images/toolbar/center.svg": "978236ba1b8cb0882d8f5e29a5ceaef1",
"assets/packages/appflowy_editor/assets/images/toolbar/code.svg": "2d41f509ac1e1b1eb60c9adedc75ce03",
"assets/packages/appflowy_editor/assets/images/toolbar/divider.svg": "b7677e94ef1007c39a1853588b177d1e",
"assets/packages/appflowy_editor/assets/images/toolbar/h1.svg": "735f59f34690e55680453a0d018ada75",
"assets/packages/appflowy_editor/assets/images/toolbar/h2.svg": "bf7b09c579a5db9e6392b01f95909347",
"assets/packages/appflowy_editor/assets/images/toolbar/h3.svg": "30d4699894d5de3b696b11cf678b35a0",
"assets/packages/appflowy_editor/assets/images/toolbar/highlight_color.svg": "df1b842dc7d37edeec995512e543b598",
"assets/packages/appflowy_editor/assets/images/toolbar/italic.svg": "b96a655409eea41190182ae3ab3ed500",
"assets/packages/appflowy_editor/assets/images/toolbar/left.svg": "fcd2f1a9124961798dd7009f27172a64",
"assets/packages/appflowy_editor/assets/images/toolbar/link.svg": "42aee34d22fd39e710e4e448bf654e29",
"assets/packages/appflowy_editor/assets/images/toolbar/numbered_list.svg": "a6072f727ea30c379dd5e0e2909790c4",
"assets/packages/appflowy_editor/assets/images/toolbar/quote.svg": "7d20ee07b7f80cc886294a43a0db0b3d",
"assets/packages/appflowy_editor/assets/images/toolbar/right.svg": "bf18d4c1654d502abea1d2c8aa010c30",
"assets/packages/appflowy_editor/assets/images/toolbar/strikethrough.svg": "82564a24aa7e82675d377431ac8fb075",
"assets/packages/appflowy_editor/assets/images/toolbar/text.svg": "2b52bcda2b12945b27e859c414ef43c9",
"assets/packages/appflowy_editor/assets/images/toolbar/text_color.svg": "5943cc2453a095c8e49f0bb6ab4c0177",
"assets/packages/appflowy_editor/assets/images/toolbar/underline.svg": "fc86b2c49c42f5b9322a4ba76d066203",
"assets/packages/appflowy_editor/assets/images/uncheck.svg": "d94aa89207d28adebb0a4e11237f1c57",
"assets/packages/appflowy_editor/assets/images/upload_image.svg": "67fac764479d7cded5e98f6fe58c75ef",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/bold.svg": "7118c4686f95cedaa776faf7924c89a0",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/bulleted_list.svg": "4d7dba759b6073003a84e5938aa043b2",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/checkbox.svg": "eda1fb784a3429e96b42b7f24b7ea4c9",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/code.svg": "02ef07d8ea084d72dc2f4cc74a1b756d",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/color.svg": "d061328f2a2b335e121c44dccff39a43",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/divider.svg": "098194a544d649f3545d35f301b0191f",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/h1.svg": "295c462eeb57150f11a2e747d9220869",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/h2.svg": "88278b54319f416c66c1cf830fcf6c42",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/h3.svg": "ba38c1cdee5d41663df86128b73b835e",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/heading.svg": "8e872c0f97c1740a2f9858523aeb7743",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/italic.svg": "c8585c2f19414f94f26430e8eecc4bb3",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/link.svg": "d7a05e0d3a904118900ca7d8e3cf47b4",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/list.svg": "ed5fb52546835a9865541c1e2c06c20c",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/numbered_list.svg": "1daa60662c6ab43e65ac96e9e930b745",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/quote.svg": "dda6772a0e0d9b40e8aad07ff377ffc1",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/setting.svg": "0cb728ff605b6f7457950f3a47d291f1",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/strikethrough.svg": "c82d154453ef6759daa7cebb397cf58c",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/text_decoration.svg": "e4dd4997dec353c1eb7cdfab039a49ef",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/underline.svg": "472439a97df9c883661d818045a40d95",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "0266ef445553f45f6e45344556cfd6fd",
"assets/packages/flutter_rte/assets/document.html": "0e6aaa8fb61c82fb779aa1998ced6fac",
"assets/packages/flutter_rte/lib/assets/document.html": "0e6aaa8fb61c82fb779aa1998ced6fac",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "31b5ffea3daddc69dd01a1f3d6cf63c5",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "a76d309774d33d9856f650bed4292a23",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "3b89dd103490708d19a95adcae52210e",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "1f77739ca9ff2188b539c36f30ffa2be",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "605ed7926cf39a2ad5ec2d1f9d391d3d",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b3263095df30cb7db78c613e73f9499a",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "b62641afc9ab487008e996a5c5865e56",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "8ef52a15e44481b41e7db3c7eaf9bb83",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "f7c53c47a66934504fcbc7cc164895a7",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "1681f34aaca71b8dfb70756bca331eb2",
"assets/packages/flutter_weather_bg_null_safety/images/cloud.webp": "849a0a8f321c14b3af35ede9808a17b5",
"assets/packages/flutter_weather_bg_null_safety/images/lightning0.webp": "8d28c99840abf552a78cade97a4cad22",
"assets/packages/flutter_weather_bg_null_safety/images/lightning1.webp": "c267264ed06f875fa86b841e4e70064a",
"assets/packages/flutter_weather_bg_null_safety/images/lightning2.webp": "f48a914f5b0560942aed70b7ea9efbf3",
"assets/packages/flutter_weather_bg_null_safety/images/lightning3.webp": "29797eeedec55c06efd7f167a74ec6ad",
"assets/packages/flutter_weather_bg_null_safety/images/lightning4.webp": "a175b2bc15e4df4bab37d5ccc43c14a0",
"assets/packages/flutter_weather_bg_null_safety/images/rain.webp": "be14922d4d3c0caa92982861045a678a",
"assets/packages/flutter_weather_bg_null_safety/images/snow.webp": "d5ce493b018954f7eefb569fe185df05",
"assets/packages/flutter_weather_bg_null_safety/images/sun.webp": "f4a3e24a77f84b97ac15f8c5b846eed1",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c5c2b2d7d4208d54a9b16c674445d1a7",
"/": "c5c2b2d7d4208d54a9b16c674445d1a7",
"js/screenshot.js": "0b011cf26143e3110e1209294a9ad4db",
"main.dart.js": "c222b383b23a398855682aaeaeeb292e",
"manifest.json": "10c4c2a8c89b772ff830f2ce83fa630d",
"version.json": "534c1d2f16718b3387f30c1432052801"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
