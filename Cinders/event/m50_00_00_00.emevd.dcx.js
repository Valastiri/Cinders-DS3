// ==EMEVD==
// @docs    ds3-common.emedf.json
// @compress    DarkSouls3
// @game    DarkSouls3
// @string    N:\FDP\data\Param\event\common_func.emevd       
// @linked    [0]
// ==/EMEVD==

//---------------------------------------------
// Constructor
//---------------------------------------------
Event(0, Default, function() {
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009850); // Skip in Gauntlet mode
    InitializeCommonEvent(20005500, 15000800, 15000000, 5000950, 5001950);
    
    RegisterBonfire(15000001, 5001951, 5, 180, 0);
    RegisterBonfire(15000002, 5001952, 5, 180, 0);
    RegisterBonfire(15000003, 5001953, 5, 180, 0);
    RegisterBonfire(15000004, 5001954, 5, 180, 0);
    InitializeEvent(0, 15005100, 0);
    InitializeEvent(0, 15005800, 0);
    InitializeEvent(0, 15005810, 0);
    InitializeEvent(0, 15005811, 0);
    InitializeEvent(0, 15005812, 0);
    InitializeEvent(0, 15005813, 0);
    InitializeEvent(0, 15005800, 0);
    InitializeEvent(0, 15005849, 0);
    InitializeEvent(0, 15005850, 5002850, 5003850, 1056964608, 1);
    InitializeEvent(1, 15005850, 5002851, 5003851, 1036831949, 1);
    InitializeEvent(2, 15005850, 5002852, 5003852, 0, 1);
    InitializeEvent(3, 15005850, 5002853, 5003853, 1045220557, 1);
    InitializeEvent(4, 15005850, 5002854, 5003854, 0, 1);
    InitializeEvent(5, 15005850, 5002855, 5003855, 1053609165, 1);
    InitializeEvent(6, 15005850, 5002856, 5003856, 1056964608, 1);
    InitializeEvent(7, 15005850, 5002857, 5003857, 1060320051, 1);
    InitializeEvent(8, 15005850, 5002858, 5003858, 1063675494, 1);
    InitializeEvent(9, 15005850, 5002859, 5003859, 1061997773, 1);
    InitializeEvent(10, 15005850, 5002860, 5003860, 1036831949, 1);
    InitializeEvent(11, 15005850, 5002861, 5003861, 1045220557, 1);
    InitializeEvent(12, 15005850, 5002862, 5003862, 1058642330, 1);
    InitializeEvent(13, 15005850, 5002863, 5003863, 1065017672, 1);
    InitializeEvent(14, 15005850, 5002864, 5003864, 1056964608, 1);
    InitializeEvent(15, 15005850, 5002865, 5003865, 1058642330, 1);
    InitializeEvent(16, 15005850, 5002866, 5003866, 1060320051, 1);
    InitializeEvent(17, 15005850, 5002867, 5003867, 1060152279, 1);
    InitializeEvent(18, 15005850, 5002868, 5003868, 1045220557, 1);
    InitializeEvent(19, 15005850, 5002869, 5003869, 1053609165, 1);
    InitializeEvent(20, 15005850, 5002870, 5003870, 1050253722, 1);
    InitializeEvent(21, 15005850, 5002871, 5003871, 1065353216, 1);
    InitializeEvent(22, 15005850, 5002872, 5003872, 0, 1);
    InitializeEvent(23, 15005850, 5002873, 5003873, 1063675494, 1);
    InitializeEvent(0, 15005220, 5000200, 15005230, 15005215, 5000210, 16620, 16640);
    InitializeCommonEvent(20005203, 5000200, 30000, 20000, 5002200, 5002201, 5002202, 0, 0, 0);
    InitializeEvent(0, 15005210, 5000210, 16256, 5004200, 5000200, 15005215);
    InitializeEvent(0, 15005250, 5000210, 5000200);
    InitializeEvent(0, 15005260, 0);
    InitializeEvent(0, 15005270, 5000200);
    InitializeEvent(0, 15005290, 5000200);
    InitializeEvent(0, 15005285, 15000235, 5000200, 5000210);
    SetEventFlag(15005215, OFF);
    InitializeEvent(0, 15005261, 0);
    InitializeEvent(1, 15005220, 5000201, 15005231, 15005216, 5000211, 16621, 16641);
    InitializeEvent(0, 15005240, 5000201, 5002228, 16255);
    InitializeEvent(1, 15005210, 5000211, 16256, 5004201, 5000201, 15005216);
    InitializeEvent(1, 15005250, 5000211, 5000201);
    InitializeEvent(1, 15005270, 5000201);
    InitializeEvent(1, 15005266, 5000211, 20001, 5002220, 5002221, 5002222, 0, 0, 0, 0);
    InitializeEvent(0, 15005280, 5000201, 30000, 20000);
    InitializeEvent(1, 15005290, 5000201);
    InitializeEvent(1, 15005285, 15000236, 5000201, 5000211);
    SetEventFlag(15005216, OFF);
    InitializeEvent(0, 15005265, 5000212, 20000, 5002240, 5002241, 5002242, 5002243, 0, 0, 0);
    InitializeEvent(2, 15005220, 5000202, 15005232, 15005217, 5000212, 16622, 16642);
    InitializeEvent(2, 15005210, 5000212, 16256, 5004202, 5000202, 15005217);
    InitializeEvent(2, 15005250, 5000212, 5000202);
    InitializeEvent(2, 15005270, 5000202);
    InitializeEvent(2, 15005290, 5000202);
    InitializeEvent(2, 15005285, 15000237, 5000202, 5000212);
    InitializeEvent(1, 15005460, 5000223, 700, 1700, 5002401, 5000222, 16005, 1050253722, 5000220);
    InitializeCommonEvent(20005132, 5000222, 1084227584, 5002400);
    InitializeCommonEvent(20005210, 5000224, 700, 1700, 1094713344);
    InitializeCommonEvent(20005132, 5000226, 1084227584, 5002402);
    InitializeCommonEvent(20005206, 5000232, 701, 1701, 5002250, 5002251, 5002252, 0, 0, 0);
    InitializeCommonEvent(20005203, 5000233, 701, 1701, 2, 5002253, 5002254, 0, 0, 0);
    InitializeCommonEvent(20005213, 5000236, 700, 1700, 1086324736, 5002256);
    InitializeCommonEvent(20005213, 5000237, 701, 1701, 1084227584, 5002257);
    InitializeEvent(0, 15005470, 0);
    InitializeCommonEvent(20005213, 5000300, 700, 1700, 1073741824, 5002301);
    InitializeCommonEvent(20005219, 5000301, 700, 1700, 1073741824, 5002302, 1077936128);
    InitializeCommonEvent(20005243, 5000400, 700, 1700, 5000300, 16220, 1087373312);
    InitializeCommonEvent(20005243, 5000401, 700, 1700, 5000300, 16220, 1088841318);
    InitializeCommonEvent(20005243, 5000402, 700, 1700, 5000300, 16220, 1081711002);
    InitializeCommonEvent(20005243, 5000403, 700, 1700, 5000300, 16220, 1085905306);
    InitializeCommonEvent(20005243, 5000404, 700, 1700, 5000300, 16220, 1082969293);
    InitializeCommonEvent(20005243, 5000405, 700, 1700, 5000300, 16220, 1072902963);
    InitializeCommonEvent(20005243, 5000406, 700, 1700, 5000300, 16220, 1061997773);
    InitializeCommonEvent(20005243, 5000407, 700, 1700, 5000300, 16220, 0);
    InitializeCommonEvent(20005243, 5000408, 700, 1700, 5000300, 16220, 1081291571);
    InitializeCommonEvent(20005243, 5000409, 700, 1700, 5000300, 16220, 1075838976);
    InitializeCommonEvent(20005243, 5000410, 700, 1700, 5000300, 16220, 1065353216);
    InitializeCommonEvent(20005212, 5000310, 700, 1700, 1084227584, 5002315);
    InitializeCommonEvent(20005212, 5000311, 700, 1700, 1101004800, 5002315);
    InitializeCommonEvent(20005219, 5000315, 700, 1700, 1077936128, 5002317, 1065353216);
    InitializeCommonEvent(20005219, 5000420, 700, 1700, 1073741824, 5002310, 0);
    InitializeCommonEvent(20005219, 5000421, 701, 1701, 1065353216, 5002316, 0);
    InitializeCommonEvent(20005219, 5000422, 702, 20000, 1073741824, 5002311, 1036831949);
    InitializeCommonEvent(20005219, 5000423, 701, 1701, 1073741824, 5002312, 0);
    InitializeCommonEvent(20005219, 5000424, 702, 20000, 1073741824, 5002312, 1050253722);
    InitializeCommonEvent(20005219, 5000425, 702, 20000, 1073741824, 5002314, 0);
    InitializeCommonEvent(20005219, 5000426, 700, 1700, 1073741824, 5002312, 1061997773);
    InitializeCommonEvent(20005219, 5000427, 701, 1701, 1065353216, 5002318, 1069547520);
    InitializeCommonEvent(20005219, 5000428, 700, 1700, 1065353216, 5002319, 1056964608);
    InitializeCommonEvent(20005219, 5000316, 700, 1700, 1073741824, 5002320, 1067869798);
    InitializeCommonEvent(20005219, 5000317, 700, 1700, 1073741824, 5002320, 0);
    InitializeEvent(0, 15005410, 5000319, 700, 1700, 5002322, 15005392, 1036831949);
    InitializeCommonEvent(20005205, 5000448, 701, 1701, 5002328, 1036831949);
    InitializeCommonEvent(20005132, 5000449, 1077936128, 5002329);
    InitializeCommonEvent(20005205, 5000331, 700, 1700, 5002332, 1084227584);
    InitializeCommonEvent(20005205, 5000456, 702, 20000, 5002332, 1091567616);
    InitializeCommonEvent(20005205, 5000457, 702, 20000, 5002334, 0);
    InitializeCommonEvent(20005205, 5000458, 700, 1700, 5002333, 1073741824);
    InitializeCommonEvent(20005205, 5000459, 701, 1701, 5002335, 1084227584);
    InitializeCommonEvent(20005219, 5000335, 700, 1700, 1073741824, 5002340, 0);
    InitializeCommonEvent(20005201, 5000460, 700, 1700, 5002340, 1077936128);
    InitializeCommonEvent(20005201, 5000461, 700, 1700, 5002340, 1067030938);
    InitializeCommonEvent(20005201, 5000462, 700, 1700, 5002340, 1069547520);
    InitializeCommonEvent(20005201, 5000463, 700, 1700, 5002340, 1085276160);
    InitializeCommonEvent(20005201, 5000464, 700, 1700, 5002340, 1085905306);
    InitializeEvent(0, 15005400, 5000335, 5000460, 5003340, 5000520, 5003345, 0);
    InitializeEvent(1, 15005400, 5000335, 5000461, 5003341, 5000521, 5003346, 1036831949);
    InitializeEvent(2, 15005400, 5000335, 5000462, 5003342, 5000522, 5003347, 1050253722);
    InitializeCommonEvent(20005201, 5000337, 700, 1700, 5002356, 0);
    InitializeCommonEvent(20005201, 5000475, 700, 1700, 5002355, 1077936128);
    InitializeCommonEvent(20005201, 5000476, 700, 1700, 5002355, 1080872141);
    InitializeCommonEvent(20005201, 5000477, 700, 1700, 5002355, 1081291571);
    InitializeCommonEvent(20005201, 5000478, 700, 1700, 5002355, 1084227584);
    InitializeCommonEvent(20005201, 5000479, 700, 1700, 5002355, 1085276160);
    InitializeEvent(0, 15005340, 5000316, 5000500);
    InitializeEvent(1, 15005340, 5000319, 5000503);
    InitializeEvent(2, 15005340, 5000315, 5000501);
    InitializeEvent(3, 15005340, 5000426, 5000502);
    InitializeEvent(4, 15005340, 5000337, 5000530);
    InitializeEvent(7, 15005340, 5000454, 5000506);
    InitializeEvent(8, 15005340, 5000455, 5000507);
    InitializeEvent(9, 15005340, 5000457, 5000508);
    InitializeEvent(10, 15005340, 5000458, 5000509);
    InitializeEvent(11, 15005340, 5000463, 5000523);
    InitializeEvent(12, 15005340, 5000464, 5000524);
    InitializeEvent(0, 15005360, 5000460, 5000520);
    InitializeEvent(1, 15005360, 5000461, 5000521);
    InitializeEvent(2, 15005360, 5000462, 5000522);
    InitializeEvent(13, 15005340, 5000463, 5000523);
    InitializeEvent(14, 15005340, 5000464, 5000524);
    InitializeEvent(0, 15005365, 5000520);
    InitializeEvent(1, 15005365, 5000521);
    InitializeEvent(2, 15005365, 5000522);
    InitializeEvent(12, 15005310, 5000335, 5000460);
    InitializeEvent(13, 15005310, 5000335, 5000461);
    InitializeEvent(14, 15005310, 5000335, 5000462);
    InitializeEvent(15, 15005310, 5000336, 5000463);
    InitializeEvent(16, 15005310, 5000336, 5000464);
    InitializeEvent(0, 15005390, 5000324, 5002325, 5003320);
    InitializeEvent(1, 15005390, 5000324, 5002326, 5003321);
    InitializeEvent(2, 15005390, 5000324, 5002327, 5003322);
    InitializeEvent(3, 15005390, 5000324, 5002342, 5003323);
    InitializeEvent(4, 15005390, 5000324, 5002343, 5003324);
    InitializeEvent(5, 15005390, 5000332, 5002350, 5003350);
    InitializeEvent(6, 15005390, 5000332, 5002350, 5003351);
    InitializeCommonEvent(20005114, 5000270, 5002270, 1065353216);
    InitializeCommonEvent(20005114, 5000271, 5002270, 1069547520);
    InitializeCommonEvent(20005120, 5000272, 1094713344);
    InitializeCommonEvent(20005331, 5000270);
    InitializeCommonEvent(20005331, 5000271);
    InitializeCommonEvent(20005331, 5000272);
    InitializeEvent(0, 15005444, 0);
    InitializeEvent(0, 15005447, 0);
    InitializeEvent(1, 15005448, 5000273, 701, 1701, 5002272, 1056964608);
    InitializeEvent(2, 15005448, 5000274, 701, 1701, 5002272, 0);
    InitializeEvent(3, 15005448, 5000275, 700, 1700, 5002271, 1073741824);
    InitializeCommonEvent(20005132, 5000275, 1077936128, 5002274);
    InitializeCommonEvent(20005132, 5000279, 1077936128, 5002276);
    InitializeCommonEvent(20005132, 5000280, 1077936128, 5002277);
    InitializeCommonEvent(20005132, 5000281, 1077936128, 5002277);
    InitializeCommonEvent(20005205, 5000283, 701, 1701, 5002279, 1056964608);
    InitializeCommonEvent(20005205, 5000284, 701, 1701, 5002280, 1056964608);
    InitializeCommonEvent(20005134, 5000285, 3006, 1077936128, 5002281);
    InitializeCommonEvent(20005205, 5000286, 701, 1701, 5002282, 1082130432);
    InitializeCommonEvent(20005132, 5000287, 1084227584, 5002286);
    InitializeCommonEvent(20005132, 5000288, 1084227584, 5002286);
    InitializeEvent(0, 15005440, 5000288, 5000200, 5002287, 5000287);
    InitializeEvent(0, 15005500, 0);
    InitializeEvent(0, 15005502, 0);
    InitializeEvent(0, 15005510, 0);
    InitializeEvent(0, 15005520, 5002520, 5001520);
    InitializeEvent(1, 15005520, 5002521, 5001521);
    InitializeEvent(0, 15005530, 5002530);
    InitializeEvent(1, 15005530, 5002531);
    InitializeEvent(2, 15005530, 5002532);
    InitializeEvent(3, 15005530, 5002533);
    InitializeEvent(4, 15005530, 5002534);
    InitializeEvent(0, 15005550, 5002550);
    InitializeEvent(0, 20005640, 15000580, 5001580, 15000581, 15000582);
    InitializeEvent(0, 15005590, 0);
    InitializeCommonEvent(20005650, 15000560, 5001560);
    InitializeEvent(0, 15005120, 15000120, 5000120);
    InitializeEvent(1, 15005120, 15000121, 5000121);
    InitializeEvent(2, 15005120, 15000122, 5000122);
    InitializeEvent(3, 15005120, 15000123, 5000123);
    InitializeEvent(4, 15005120, 15000124, 5000124);
    InitializeEvent(5, 15005120, 15000125, 5000125);
    InitializeEvent(6, 15005120, 15000126, 5000126);
    InitializeEvent(7, 15005120, 15000127, 5000127);
    
    // Amnesiac Lapp - Summon
    InitializeCommonEvent(20005701, 15000800, 15004170, 15005170, 5000170, 5002170, 70000030);
    InitializeCommonEvent(20005720, 15004170, 15005170, 15000800, 5000170);
    InitializeCommonEvent(20005716, 15004170, 15005805, 5000170, 5002801, 5002805, 15005801);
    InitializeCommonEvent(20005715, 15004170, 15005805, 5000170, 5002806, 15005801, 5002807, 0);
    InitializeEvent(0, 15005540, 5002534, 5000170);
    
    // Amnesiac Lapp - Summon
    InitializeCommonEvent(20005701, 15000800, 15004174, 15005174, 5000174, 5002174, 0);
    InitializeCommonEvent(20005720, 15004174, 15005174, 15000800, 5000174);
    InitializeCommonEvent(20005716, 15004174, 15005805, 5000174, 5002801, 5002805, 15005801);
    InitializeCommonEvent(20005715, 15004174, 15005805, 5000174, 5002806, 15005801, 5002807, 0);
    InitializeEvent(1, 15005540, 5002534, 5000174);
    
    InitializeCommonEvent(20005342, 15000180, 5000180);
    InitializeCommonEvent(20005132, 5000180, 1086324736, 5002270);
    InitializeEvent(0, 15005480, 5000190, 1086324736, 5002270, 5000180, 15000180, 5005190);
    
    // Lapp
    InitializeCommonEvent(20006002, 5000700, 1818, 1815, 1819);
    InitializeCommonEvent(20006002, 5000701, 1818, 1815, 1819);
    InitializeCommonEvent(20006002, 5000702, 1818, 1815, 1819);
    InitializeCommonEvent(20006000, 5000700, 1816, 1817, 75000140, 1059481190, 1815, 1819, 0);
    InitializeCommonEvent(20006000, 5000701, 1816, 1817, 75000141, 1059481190, 1815, 1819, 0);
    InitializeCommonEvent(20006000, 5000702, 1816, 1817, 75000142, 1059481190, 1815, 1819, 0);
    InitializeCommonEvent(20006001, 5000700, 1816, 1817, 75000140, 3);
    InitializeCommonEvent(20006001, 5000701, 1816, 1817, 75000141, 3);
    InitializeCommonEvent(20006001, 5000702, 1816, 1817, 75000142, 3);
    InitializeCommonEvent(20006030, 5001700, 4000, 0, 66200, 50006620, 50006620, 75000135);
    InitializeEvent(0, 15005702, 5000701, 5000170, 1801, 1803);
    InitializeEvent(1, 15005702, 5000702, 5000170, 1802, 1804);
    
    //----------------------
    // NPCs
    //----------------------
    // Stone-humped Hag
    InitializeCommonEvent(20006002, 5000705, 1878, 1875, 1879);
    InitializeCommonEvent(20006040, 5000705, 5002705, 5450);
    InitializeEvent(0, 15005721, 5000705, 5001705);
    
    //----------------------
    // Intruders
    //----------------------
    // Xavier the Ironclad
    InitializeCommonEvent(20090010, 5000730, 5002730, 30310, 63010, 13800, 99005440, 99005441, 15000730); // Setup
    InitializeCommonEvent(20090020, 5000730, 80300); // Kill Taunt
    
    //----------------------
    // Phantoms
    //----------------------
    InitializeEvent(0, 15007000, 0);

    //----------------------
    // Spell Summons
    //----------------------
    InitializeEvent(0, 15007100, 0);
    
    //---------------------
    // Treasure
    //---------------------
    // One-time Loot
    InitializeCommonEvent(20005351, 5000236, 5002000, 55002000, 1); // Harald Legion Set
    InitializeCommonEvent(20005351, 5000233, 5002010, 55002010, 1); // Harald Curved Greatsword
    InitializeCommonEvent(20005351, 5000403, 5002020, 55002020, 1); // Murky Hand Scythe
    InitializeCommonEvent(20005351, 5000317, 5002030, 55002030, 1); // Murky Longstaff
    
    // One-time Enemies
    //InitializeCommonEvent(20008150, 14500680, 4500680); // Crystal Lizard
    
    // Chests
    InitializeCommonEvent(20005520, 15001400, 5001400, 5004400);
    InitializeCommonEvent(20005520, 15001401, 5001401, 5004401);
    InitializeCommonEvent(20005520, 15001402, 5001402, 5004402);
    InitializeCommonEvent(20005520, 15001403, 5001403, 5004403);
    InitializeCommonEvent(20005520, 15001404, 5001404, 5004404);
    InitializeCommonEvent(20005520, 15001405, 5001405, 5004405);
   
    // Mimics
    InitializeCommonEvent(20005400, 5000780); // Open Action
    InitializeCommonEvent(20005400, 5000781); // Open Action
    InitializeCommonEvent(20005400, 5000782); // Open Action
    InitializeCommonEvent(20005400, 5000783); // Open Action
    InitializeCommonEvent(20005400, 5000784); // Open Action
    InitializeCommonEvent(20000343, 15000780, 5000780, 54501000); // Treasure Control
    InitializeCommonEvent(20000343, 15000781, 5000781, 54501010); // Treasure Control
    InitializeCommonEvent(20000343, 15000782, 5000782, 54501020); // Treasure Control
    InitializeCommonEvent(20000343, 15000783, 5000783, 54501030); // Treasure Control
    InitializeCommonEvent(20000343, 15000784, 5000784, 54501040); // Treasure Control
    
    // Misc
    InitializeCommonEvent(20005525, 55000900, 5000900, 5001680, 61); // Demon Prince's Room
    InitializeCommonEvent(20005525, 55000910, 5000910, 5001681, 61); // Old Firelink
    
    //---------------------
    // Misc
    //---------------------
    // Curses
    InitializeCommonEvent(20081010, 5005760, 250001020, 25000400); // Curse of Pride - 10%
    InitializeCommonEvent(20081010, 5005760, 250001021, 25000401); // Curse of Pride - 20%
    InitializeCommonEvent(20081010, 5005760, 250001022, 25000402); // Curse of Pride - 30%
    InitializeCommonEvent(20081010, 5005760, 250001023, 25000403); // Curse of Pride - 40%
    InitializeCommonEvent(20081010, 5005760, 250001024, 25000404); // Curse of Pride - 50%
    InitializeCommonEvent(20081010, 5005760, 250001025, 25000405); // Curse of Pride - 60%
    InitializeCommonEvent(20081010, 5005760, 250001026, 25000406); // Curse of Pride - 70%
    InitializeCommonEvent(20081010, 5005760, 250001027, 25000407); // Curse of Pride - 80%
    InitializeCommonEvent(20081010, 5005760, 250001028, 25000408); // Curse of Pride - 90%
    InitializeCommonEvent(20081010, 5005760, 250001029, 25000409); // Curse of Pride - 100%

    InitializeCommonEvent(20081010, 5005760, 250001120, 25000410); // Curse of Fortitude - 5%
    InitializeCommonEvent(20081010, 5005760, 250001121, 25000411); // Curse of Fortitude - 10%
    InitializeCommonEvent(20081010, 5005760, 250001122, 25000412); // Curse of Fortitude - 15%
    InitializeCommonEvent(20081010, 5005760, 250001123, 25000413); // Curse of Fortitude - 20%
    InitializeCommonEvent(20081010, 5005760, 250001124, 25000414); // Curse of Fortitude - 25%
    InitializeCommonEvent(20081010, 5005760, 250001125, 25000415); // Curse of Fortitude - 30%
    InitializeCommonEvent(20081010, 5005760, 250001126, 25000416); // Curse of Fortitude - 35%
    InitializeCommonEvent(20081010, 5005760, 250001127, 25000417); // Curse of Fortitude - 40%
    InitializeCommonEvent(20081010, 5005760, 250001128, 25000418); // Curse of Fortitude - 45%
    InitializeCommonEvent(20081010, 5005760, 250001129, 25000419); // Curse of Fortitude - 50%
    
    InitializeCommonEvent(20081010, 5005760, 250001320, 25000420); // Curse of Vitality - 10
    InitializeCommonEvent(20081010, 5005760, 250001321, 25000421); // Curse of Vitality - 20
    InitializeCommonEvent(20081010, 5005760, 250001322, 25000422); // Curse of Vitality - 30
    InitializeCommonEvent(20081010, 5005760, 250001323, 25000423); // Curse of Vitality - 40
    InitializeCommonEvent(20081010, 5005760, 250001324, 25000424); // Curse of Vitality - 50
    InitializeCommonEvent(20081010, 5005760, 250001325, 25000425); // Curse of Vitality - 60
    InitializeCommonEvent(20081010, 5005760, 250001326, 25000426); // Curse of Vitality - 70
    InitializeCommonEvent(20081010, 5005760, 250001327, 25000427); // Curse of Vitality - 80
    InitializeCommonEvent(20081010, 5005760, 250001328, 25000428); // Curse of Vitality - 90
    InitializeCommonEvent(20081010, 5005760, 250001329, 25000429); // Curse of Vitality - 100
    
    InitializeCommonEvent(20081010, 5005760, 250001420, 25000430); // Curse of Wrath - 10
    InitializeCommonEvent(20081010, 5005760, 250001421, 25000431); // Curse of Wrath - 20
    InitializeCommonEvent(20081010, 5005760, 250001422, 25000432); // Curse of Wrath - 30
    InitializeCommonEvent(20081010, 5005760, 250001423, 25000433); // Curse of Wrath - 40
    InitializeCommonEvent(20081010, 5005760, 250001424, 25000434); // Curse of Wrath - 50
    InitializeCommonEvent(20081010, 5005760, 250001425, 25000435); // Curse of Wrath - 60
    InitializeCommonEvent(20081010, 5005760, 250001426, 25000436); // Curse of Wrath - 70
    InitializeCommonEvent(20081010, 5005760, 250001427, 25000437); // Curse of Wrath - 80
    InitializeCommonEvent(20081010, 5005760, 250001428, 25000438); // Curse of Wrath - 90
    InitializeCommonEvent(20081010, 5005760, 250001429, 25000439); // Curse of Wrath - 100
    
    InitializeCommonEvent(20081000, 5005750, 25000440);             // Curse of Attraction
    InitializeCommonEvent(20081010, 5005760, 250001920, 25000480);  // Curse of Frailty
    InitializeCommonEvent(20081010, 5005770, 250002220, 25000510);  // Curse of Valor
    
    // NG+
    InitializeCommonEvent(20008001, 5005775, 1);
    InitializeCommonEvent(20008001, 5005776, 2);
    InitializeCommonEvent(20008001, 5005777, 3);
    
    // Company of Champions
    InitializeCommonEvent(20081020, 5005760, 160101502, 160101503); // I
    InitializeCommonEvent(20081020, 5005760, 160101512, 160101513); // II
    InitializeCommonEvent(20081020, 5005760, 160101522, 160101523); // III
    InitializeCommonEvent(20081020, 5005760, 160101532, 160101533); // IV
    InitializeCommonEvent(20081020, 5005760, 160101542, 160101543); // V

    // Swamp Effects
    InitializeEvent(0, 15000051, 5004500, 160750110);
    
    // Gauntlet Mode
    InitializeCommonEvent(20090800, 5002050);
});

//---------------------------------------------
// Destructor
//---------------------------------------------
Event(50, Default, function() {
    InitializeEvent(0, 15005200, 5000200, 5002200, 0, 0);
    InitializeEvent(1, 15005200, 5000201, 5002220, 5002221, 5002222);
    InitializeEvent(2, 15005200, 5000202, 5002240, 5002241, 5002242);
    InitializeEvent(0, 15005570, 0);
    InitializeEvent(0, 15005575, 0);
    SetMapSoundState(5004801, Disabled);
    SetMapSoundState(5004802, Disabled);
    InitializeEvent(0, 15005700, 5000700, 5000701, 5000702, 91180, 91180, 91170);
    InitializeEvent(0, 15005701, 5001345, 5000230, 5001230);
    InitializeEvent(0, 15005720, 5000705, 30004, 2160, 5001705, 5002705);
    InitializeEvent(0, 15005722, 5000203);
});

// Swamp
Event(15000051, Restart, function(X0_4, X4_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    IfInoutsideArea(MAIN, 1, 10000, X0_4, 1);
    SetSpeffect(10000, X4_4);
    WaitFixedTimeSeconds(0.8);
    EndUnconditionally(EventEndType.Restart);
});

Event(15005100, Restart, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 15000800);
    IfActionButtonInArea(AND_01, 9380, 5001100);
    IfConditionGroup(MAIN, PASS, AND_01);
    IfPlayerHasdoesntHaveItem(AND_02, ItemType.Goods, 2156, OwnershipState.Owns);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, PASS, AND_02);
    DisplayGenericDialog(10012800, PromptType.OKCANCEL, NumberofOptions.NoButtons, -1, 3);
    EndUnconditionally(EventEndType.Restart);
    Label0();
    SetPlayerRespawnPoint(5102110);
    SaveRequest(0);
    PlayCutsceneAndWarpPlayer(51000000, CutscenePlayMode.Skippable, 5102110, 51, 0, 10000);
    WaitFixedTimeFrames(1);
    EndUnconditionally(EventEndType.Restart);
});

Event(15005120, Default, function(X0_4, X4_4) {
    SetSpeffect(X4_4, 17500);
    SetCharacterAIState(X4_4, Disabled);
    SetCharacterAnimationState(X4_4, Disabled);
    ForceAnimationPlayback(X4_4, 91230, false, false, false, 0, 1);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetEventFlag(X0_4, OFF);
    EndUnconditionally(EventEndType.End);
});

Event(15005200, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    SetCharacterGravity(X0_4, Disabled);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, X4_4, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, X8_4, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, X12_4, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AlwaysUpdate);
});

Event(15005210, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    IfCharacterHasSpeffect(AND_01, X0_4, X4_4, true, ComparisonType.Equal, 1);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X16_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    MakeEnemyAppearEvent(X8_4);
    SetEventFlag(X16_4, OFF);
    WaitFixedTimeFrames(1);
    RequestCharacterAIReplan(X12_4);
    SetNetworkUpdateRate(X12_4, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterGravity(X12_4, Disabled);
    EndUnconditionally(EventEndType.Restart);
});

Event(15005220, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkconnectedEventFlag(X4_4, OFF);
    IfCharacterDeadalive(AND_02, X0_4, DeathState.Dead, ComparisonType.Equal, 1);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_02, false);
    IfConditionGroup(MAIN, PASS, AND_02);
    SkipIfNumberOfClientsOfType(3, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkconnectedEventFlag(X4_4, ON);
    SetNetworkconnectedEventFlag(X8_4, ON);
    SetSpeffect(X12_4, X16_4);
    SetNetworkUpdateRate(X12_4, true, CharacterUpdateFrequency.AlwaysUpdate);
    IfCharacterDeadalive(AND_03, X0_4, DeathState.Alive, ComparisonType.Equal, 1);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_03, false);
    IfConditionGroup(MAIN, PASS, AND_03);
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkconnectedEventFlag(X4_4, OFF);
    SetSpeffect(X12_4, X20_4);
    SetNetworkUpdateRate(X12_4, false, CharacterUpdateFrequency.AlwaysUpdate);
    EndUnconditionally(EventEndType.Restart);
});

Event(15005240, Restart, function(X0_4, X4_4, X8_4) {
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, X4_4, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetSpeffect(X0_4, X8_4);
    SetCharacterEventTarget(X0_4, 10000);
    WaitFixedTimeSeconds(3);
    EndUnconditionally(EventEndType.Restart);
});

Event(15005250, Restart, function(X0_4, X4_4) {
    IfCharacterDeadalive(MAIN, X0_4, DeathState.Dead, ComparisonType.Equal, 1);
    SetSpeffect(X4_4, 16258);
});

Event(15005260, Restart, function() {
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 5002202, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 5002221, 1);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfCharacterHasSpeffect(AND_01, 5000200, 16259, true, ComparisonType.Equal, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    ClearSpeffect(5000200, 16259);
    EndUnconditionally(EventEndType.Restart);
});

Event(15005261, Restart, function() {
    IfCharacterDeadalive(AND_15, 5000287, DeathState.Dead, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, AND_15);
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 5002286, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeSeconds(2.9);
    SetSpeffect(5000200, 16611);
    SetCharacterEventTarget(5000200, 5000287);
    IfCharacterDeadalive(MAIN, 5000287, DeathState.Dead, ComparisonType.Equal, 1);
    ClearSpeffect(5000200, 16611);
});

Event(15005265, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    SkipIfNumberOfClientsOfType(1, ClientType.Coop, ComparisonType.Equal, 0);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    SetCharacterAIState(X0_4, Disabled);
    SetEventFlag(15005217, ON);
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, X8_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X12_4, 0);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, X12_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X16_4, 0);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, X16_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X20_4, 0);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, X20_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X24_4, 0);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, X24_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X28_4, 0);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, X28_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X32_4, 0);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, X32_4, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfConditionGroup(OR_03, PASS, AND_01);
    IfCharacterDamagedBy(OR_03, X0_4, 10000);
    IfConditionGroup(MAIN, PASS, OR_03);
    ForceAnimationPlayback(X0_4, X4_4, false, false, true, 0, 1);
    SetCharacterAIState(X0_4, Enabled);
});

Event(15005266, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    SkipIfNumberOfClientsOfType(1, ClientType.Coop, ComparisonType.Equal, 0);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    SetCharacterAIState(X0_4, Disabled);
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, X8_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X12_4, 0);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, X12_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X16_4, 0);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, X16_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X20_4, 0);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, X20_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X24_4, 0);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, X24_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X28_4, 0);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, X28_4, 1);
    SkipIfComparison(1, ComparisonType.Equal, X32_4, 0);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, X32_4, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfConditionGroup(OR_03, PASS, AND_01);
    IfCharacterDamagedBy(OR_03, X0_4, 10000);
    IfConditionGroup(MAIN, PASS, OR_03);
    ForceAnimationPlayback(X0_4, X4_4, false, false, true, 0, 1);
    SetCharacterAIState(X0_4, Enabled);
});

Event(15005270, Restart, function(X0_4) {
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, true);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, AND_01);
    IfCharacterBackreadStatus(AND_02, X0_4, true, ComparisonType.Equal, 1);
    IfCharacterDeadalive(AND_02, X0_4, DeathState.Alive, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_02);
    SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Forced);
    IfCharacterDeadalive(MAIN, X0_4, DeathState.Dead, ComparisonType.Equal, 1);
    EndUnconditionally(EventEndType.Restart);
});

Event(15005280, Restart, function(X0_4, X4_4, X8_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    ForceAnimationPlayback(X0_4, X4_4, true, false, false, 0, 1);
    IfCharacterHasSpeffect(AND_01, 5000211, 16610, true, ComparisonType.Equal, 1);
    IfCharacterBackreadStatus(AND_01, X0_4, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, X0_4, 5450, true, ComparisonType.Equal, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(OR_03, PASS, AND_01);
    IfCharacterDamagedBy(OR_03, X0_4, 10000);
    IfConditionGroup(MAIN, PASS, OR_03);
    WaitFixedTimeSeconds(0.1);
    IfCharacterHasSpeffect(AND_02, X0_4, 5450, false, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, AND_02);
    IfCharacterAIState(AND_08, X0_4, AIStateType.Combat, ComparisonType.Equal, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL1, PASS, AND_08);
    ForceAnimationPlayback(X0_4, X8_4, false, false, false, 0, 1);
    GotoUnconditionally(Label.LABEL0);
    Label1();
    ForceAnimationPlayback(X0_4, 20002, false, false, false, 0, 1);
    Label0();
    RequestCharacterAIReplan(X0_4);
});

Event(15005285, Restart, function(X0_4, X4_4, X8_4) {
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, X0_4);
    SetCharacterAnimationState(X4_4, Disabled);
    SetCharacterAnimationState(X8_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    EndUnconditionally(EventEndType.End);
    Label0();
    IfCharacterDeadalive(MAIN, X8_4, DeathState.Dead, ComparisonType.Equal, 1);
    SetEventFlag(X0_4, ON);
});

Event(15005290, Restart, function(X0_4) {
    IfCharacterHasSpeffect(MAIN, X0_4, 5031, true, ComparisonType.Equal, 1);
    ClearCharactersAITarget(X0_4);
    EndUnconditionally(EventEndType.Restart);
});

Event(15005300, Restart, function(X0_4, X4_4, X8_4) {
    ClearSpeffect(X0_4, 16240);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventIDSlotNumber, 0);
    IfCharacterDeadalive(AND_01, X4_4, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, X0_4, 16240, true, ComparisonType.Equal, 1);
    IfCharacterBackreadStatus(AND_01, X0_4, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    MakeEnemyAppearEvent(X8_4);
    WaitFixedTimeFrames(1);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Character, X0_4, 8, X0_4);
    EndUnconditionally(EventEndType.Restart);
});

Event(15005310, Restart, function(X0_4, X4_4) {
    IfCharacterBackreadStatus(AND_01, X0_4, true, ComparisonType.Equal, 1);
    IfCharacterDeadalive(AND_01, X0_4, DeathState.Alive, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, X0_4, 16245, false, ComparisonType.Equal, 1);
    IfCharacterDeadalive(AND_01, X4_4, DeathState.Dead, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    IfCharacterDeadalive(AND_02, X4_4, DeathState.Alive, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.Restart, PASS, AND_02);
    SetSpeffect(X0_4, 16245);
    WaitFixedTimeFrames(1);
    EndUnconditionally(EventEndType.Restart);
});

Event(15005340, Restart, function(X0_4, X4_4) {
    IfCharacterDeadalive(AND_01, X4_4, DeathState.Dead, ComparisonType.Equal, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, FAIL, AND_01);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterAnimationState(X0_4, Disabled);
    SetCharacterAIState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterAIState(X4_4, Disabled);
    EndUnconditionally(EventEndType.End);
    Label0();
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventIDSlotNumber, 0);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterAnimationState(X0_4, Disabled);
    EndUnconditionally(EventEndType.End);
    Label1();
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterAnimationState(X4_4, Disabled);
    SetCharacterAIState(X4_4, Disabled);
    IfCharacterHasSpeffect(MAIN, X0_4, 16247, true, ComparisonType.Equal, 1);
    ChangeCharacterEnableState(X4_4, Enabled);
    SetCharacterAIState(X4_4, Enabled);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Character, X0_4, 50, X0_4);
    WaitFixedTimeFrames(1);
    RequestCharacterAIReplan(X4_4);
    SetAutogeneratedEventspecificEventFlag1Unknown200373(2, 1);
    IfCharacterHasSpeffect(MAIN, X0_4, 16249, true, ComparisonType.Equal, 1);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterAnimationState(X0_4, Disabled);
    EndUnconditionally(EventEndType.End);
});

Event(15005360, Restart, function(X0_4, X4_4) {
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterAnimationState(X4_4, Disabled);
    SetCharacterAIState(X4_4, Disabled);
    IfCharacterHasSpeffect(AND_01, X0_4, 16247, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    ChangeCharacterEnableState(X4_4, Enabled);
    SetCharacterAIState(X4_4, Enabled);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Character, X0_4, 50, X0_4);
    WaitFixedTimeFrames(1);
    RequestCharacterAIReplan(X4_4);
    SetAutogeneratedEventspecificEventFlag1Unknown200373(2, 1);
    ClearSpeffect(X0_4, 16247);
    IfCharacterHasSpeffect(MAIN, X0_4, 16249, true, ComparisonType.Equal, 1);
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, 5002390, -1, X0_4);
    ForceCharacterDeath(X0_4, false);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

Event(15005365, Restart, function(X0_4) {
    IfCharacterHPValue(AND_01, X0_4, ComparisonType.GreaterOrEqual, 1, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, X0_4, 16901, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    ForceCharacterDeath(X0_4, false);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

Event(15005370, Restart, function(X0_4, X4_4, X8_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    SetSpeffect(X0_4, 16229);
    IfCharacterHasSpeffect(AND_01, X4_4, X8_4, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    ClearSpeffect(X0_4, 16229);
});

Event(15005380, Restart, function(X0_4, X4_4) {
    ClearSpeffect(X0_4, 16240);
    IfCharacterHasSpeffect(AND_01, X0_4, 16240, true, ComparisonType.Equal, 1);
    IfCharacterBackreadStatus(AND_01, X0_4, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    MakeEnemyAppearEvent(X4_4);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

Event(15005390, Restart, function(X0_4, X4_4, X8_4) {
    DeactivateGenerator(X8_4, Disabled);
    IfCharacterDeadalive(AND_01, X0_4, DeathState.Dead, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, AND_01);
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfConditionGroup(AND_02, PASS, OR_01);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, X4_4, 1);
    IfCharacterDeadalive(AND_02, X0_4, DeathState.Alive, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_02);
    DeactivateGenerator(X8_4, Enabled);
    WaitFixedTimeSeconds(0.2);
    IfAllPlayersInoutsideArea(AND_03, InsideOutsideState.Outside, X4_4);
    IfConditionGroup(OR_03, PASS, AND_03);
    IfCharacterDeadalive(OR_03, X0_4, DeathState.Dead, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_03);
    EndUnconditionally(EventEndType.Restart);
});

Event(15005400, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    ClearSpeffect(X0_4, 16240);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventIDSlotNumber, 0);
    IfCharacterDeadalive(AND_01, X4_4, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, X0_4, 16240, true, ComparisonType.Equal, 1);
    IfCharacterBackreadStatus(AND_01, X0_4, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeSeconds(X20_4);
    IfCharacterDeadalive(AND_03, X4_4, DeathState.Alive, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(1, PASS, AND_03);
    MakeEnemyAppearEvent(X8_4);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventIDSlotNumber, 0);
    IfCharacterDeadalive(AND_02, X12_4, DeathState.Alive, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(1, PASS, AND_02);
    MakeEnemyAppearEvent(X16_4);
    WaitFixedTimeFrames(1);
    SetCharacterAIState(X12_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    SetCharacterAnimationState(X12_4, Disabled);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

Event(15005410, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false, 0, 1);
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, X12_4, 1);
    IfCharacterBackreadStatus(AND_01, X0_4, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, X0_4, 5450, true, ComparisonType.Equal, 1);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X16_4);
    IfConditionGroup(OR_03, PASS, AND_01);
    IfDamageType(OR_03, X0_4, 10000, DamageType.Unspecified);
    IfConditionGroup(MAIN, PASS, OR_03);
    SetAutogeneratedEventspecificEventFlag1Unknown200373(2, 1);
    IfCharacterHasSpeffect(AND_02, X0_4, 5450, false, ComparisonType.Equal, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, PASS, AND_02);
    WaitFixedTimeSeconds(X20_4);
    ForceAnimationPlayback(X0_4, X8_4, false, false, false, 0, 1);
    RequestCharacterAIReplan(X0_4);
    EndUnconditionally(EventEndType.End);
});

Event(15005440, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 0);
    SkipIfComparison(1, ComparisonType.Equal, 0, X12_4);
    IfCharacterDamagedBy(OR_01, X12_4, X4_4);
    IfCharacterDamagedBy(OR_01, X0_4, X4_4);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, X0_4, X8_4, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, X0_4, X8_4, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, PASS, AND_02);
    SetSpeffect(X0_4, 5000);
    IfInoutsideArea(OR_03, InsideOutsideState.Inside, X0_4, X12_4, 1);
    IfConditionGroup(MAIN, PASS, OR_03);
    Label0();
    ClearSpeffect(X0_4, 5000);
});

Event(15005444, Restart, function() {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL9, false);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 15005445);
    GotoUnconditionally(Label.LABEL1);
    Label9();
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 15000180);
    GotoUnconditionally(Label.LABEL1);
    Label0();
    ChangeCharacterEnableState(5000290, Disabled);
    SetCharacterAnimationState(5000290, Disabled);
    ChangeCharacterEnableState(5000291, Disabled);
    SetCharacterAnimationState(5000291, Disabled);
    ChangeCharacterEnableState(5000292, Disabled);
    SetCharacterAnimationState(5000292, Disabled);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetNetworkconnectedEventFlag(15005445, ON);
    EndUnconditionally(EventEndType.End);
    Label1();
    ChangeCharacterEnableState(5000270, Disabled);
    SetCharacterAnimationState(5000270, Disabled);
    ChangeCharacterEnableState(5000271, Disabled);
    SetCharacterAnimationState(5000271, Disabled);
    ChangeCharacterEnableState(5000272, Disabled);
    SetCharacterAnimationState(5000272, Disabled);
    EndUnconditionally(EventEndType.End);
});

Event(15005447, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15000180);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    SetSpeffect(5000272, 16805);
    IfEntityInoutsideRadiusOfEntity(MAIN, InsideOutsideState.Inside, 5000272, 5000180, 5, 1);
    ClearSpeffect(5000272, 16805);
});

Event(15005448, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphit(X0_4, true);
    ForceAnimationPlayback(X0_4, X4_4, true, false, false, 0, 1);
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, X12_4, 1);
    IfCharacterBackreadStatus(AND_01, X0_4, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, X0_4, 5450, true, ComparisonType.Equal, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(OR_02, PASS, AND_01);
    IfCharacterDamagedBy(OR_02, X0_4, 10000);
    IfConditionGroup(MAIN, PASS, OR_02);
    IfCharacterHasSpeffect(AND_02, X0_4, 5450, false, ComparisonType.Equal, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, PASS, AND_02);
    SetAutogeneratedEventspecificEventFlag2Unknown200375(2, 1);
    SkipIfConditionGroupStateCompiled(1, FAIL, AND_01);
    WaitFixedTimeSeconds(X16_4);
    IfCharacterHasSpeffect(AND_02, X0_4, 5450, false, ComparisonType.Equal, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, PASS, AND_02);
    SetCharacterGravity(X0_4, Enabled);
    SetCharacterMaphit(X0_4, false);
    ForceAnimationPlayback(X0_4, X8_4, false, false, false, 0, 1);
    RequestCharacterAIReplan(X0_4);
    EndUnconditionally(EventEndType.End);
    Label0();
    SetCharacterGravity(X0_4, Enabled);
    SetCharacterMaphit(X0_4, false);
});

Event(15005460, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false, 0, 1);
    SetCharacterGravity(X0_4, Disabled);
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfConditionGroup(AND_02, PASS, OR_01);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, X12_4, 1);
    IfConditionGroup(OR_02, PASS, AND_02);
    IfCharacterHasSpeffect(OR_02, X0_4, X20_4, true, ComparisonType.Equal, 1);
    IfDamageType(OR_02, X16_4, -1, DamageType.Unspecified);
    IfDamageType(OR_02, X28_4, -1, DamageType.Unspecified);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfCharacterBackreadStatus(AND_01, X0_4, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, X0_4, 5450, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_03, PASS, AND_01);
    IfDamageType(OR_03, X0_4, 10000, DamageType.Unspecified);
    IfConditionGroup(MAIN, PASS, OR_03);
    SetAutogeneratedEventspecificEventFlag1Unknown200373(2, 1);
    IfCharacterHasSpeffect(AND_02, X0_4, 5450, false, ComparisonType.Equal, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, PASS, AND_02);
    SkipIfCharacterHasSpeffect(1, X0_4, X20_4, false, ComparisonType.Equal, 1);
    WaitFixedTimeSeconds(0.5);
    SkipIfConditionGroupStateCompiled(1, FAIL, AND_01);
    WaitFixedTimeSeconds(X24_4);
    SetCharacterGravity(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, X8_4, false, false, false, 0, 1);
    RequestCharacterAIReplan(X0_4);
    EndUnconditionally(EventEndType.End);
});

Event(15005470, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 5000236, 5002260, 1);
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfConditionGroup(AND_02, PASS, OR_01);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 5002261, 1);
    IfEntityInoutsideRadiusOfEntity(AND_02, InsideOutsideState.Outside, 10000, 5000236, 3, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, PASS, AND_02);
    EndUnconditionally(EventEndType.End);
    Label0();
    SetNetworkUpdateRate(5000236, true, CharacterUpdateFrequency.AlwaysUpdate);
    ForceAnimationPlayback(5000236, 3011, false, true, false, 0, 1);
    SetNetworkUpdateRate(5000236, false, CharacterUpdateFrequency.AlwaysUpdate);
});

Event(15005480, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, X16_4);
    SetCharacterAIState(X0_4, Disabled);
    EndUnconditionally(EventEndType.End);
    Label0();
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    SetCharacterAIState(X0_4, Disabled);
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(OR_02, InsideOutsideState.Inside, 10000, X0_4, X4_4, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, X8_4, 1);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfCharacterDamagedBy(OR_03, X0_4, 10000);
    IfConditionGroup(OR_03, PASS, AND_01);
    IfConditionGroup(AND_03, PASS, OR_03);
    IfEventFlag(AND_03, OFF, TargetEventFlagType.EventFlag, X16_4);
    IfConditionGroup(MAIN, PASS, AND_03);
    Label1();
    SetCharacterAIState(X0_4, Enabled);
    SkipIfComparison(1, ComparisonType.Equal, 0, 0);
    SetSpeffect(X20_4, 5000);
    RequestCharacterAICommand(X0_4, 100, 0);
    SetCharacterEventTarget(X0_4, X12_4);
});

Event(15005500, Restart, function() {
    ActivateHitAndCreateNavimesh(5001505, Disabled);
    ActivateHitAndCreateNavimesh(5001506, Disabled);
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 15000500);
    ReproduceObjectAnimation(5001500, 2);
    DeactivateObject(5001501, Disabled);
    DeactivateObject(5001502, Disabled);
    DeactivateObject(5001503, Disabled);
    DeactivateObject(5001504, Enabled);
    SpawnMapSFX(5003500);
    SpawnMapSFX(5003501);
    ActivateHitAndCreateNavimesh(5001506, Enabled);
    EndUnconditionally(EventEndType.End);
    Label0();
    ActivateHitAndCreateNavimesh(5001505, Enabled);
    DeactivateObject(5001504, Disabled);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 5002500, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 5002501, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(15000500, ON);
    SetEventFlag(15005500, ON);
    ActivateHitAndCreateNavimesh(5001505, Disabled);
    ForceAnimationPlayback(5001500, 1, false, false, false, 0, 1);
    WaitFixedTimeSeconds(1.5);
    CreateDamagingObject(15005500, 5001500, 40, 6210, DamageTargetType.Character, 2, 6, 0);
    WaitFixedTimeSeconds(1.7);
    CreateDamagingObject(15005501, 5001500, 41, 6210, DamageTargetType.Character, 2, 0.5, 0);
    DestroyObject(5001501);
    DestroyObject(5001502);
    DestroyObject(5001503);
    DeactivateObject(5001504, Enabled);
    SpawnMapSFX(5003500);
    SpawnMapSFX(5003501);
    WaitFixedTimeSeconds(0.5);
    DeleteObjectEvent(15005500);
    DeleteObjectEvent(15005501);
    WaitFixedTimeSeconds(2.2);
    ActivateHitAndCreateNavimesh(5001506, Enabled);
});

Event(15005502, Restart, function() {
    SetNetworkSyncState(Disabled);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15000500);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 15000500);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 5002502, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, FAIL, AND_01);
    WaitFixedTimeSeconds(0.4);
    SetCameraVibration(105, TargetEntityType.Area, 5002502, -1, 999, 999);
    WaitFixedTimeSeconds(1.6);
    SetCameraVibration(105, TargetEntityType.Area, 5002502, -1, 999, 999);
    WaitFixedTimeSeconds(1.6);
    SetCameraVibration(104, TargetEntityType.Area, 5002502, -1, 999, 999);
});

Event(15005510, Restart, function() {
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    ForceAnimationPlayback(5001301, 310, true, false, true, 0, 1);
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, 5002510, 1);
    DestroyObject(5001510);
    SetAutogeneratedEventspecificEventFlag1Unknown200373(2, 1);
    ForceAnimationPlayback(5001301, 311, false, true, true, 0, 1);
    ForceAnimationPlayback(5001301, 312, true, false, true, 0, 1);
    EndUnconditionally(EventEndType.End);
    Label0();
    DeactivateObject(5001510, Disabled);
    ForceAnimationPlayback(5001301, 312, true, false, true, 0, 1);
});

Event(15005520, Restart, function(X0_4, X4_4) {
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, X0_4, 1);
    DestroyObject(X4_4);
    EndUnconditionally(EventEndType.End);
    Label0();
    DeactivateObject(X4_4, Disabled);
});

Event(15005530, Restart, function(X0_4) {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, X0_4, 1);
    SetSpeffect(10000, 4050);
    IfInoutsideArea(MAIN, InsideOutsideState.Outside, 10000, X0_4, 1);
    ClearSpeffect(10000, 4050);
    EndUnconditionally(EventEndType.Restart);
});

Event(15005540, Restart, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, X4_4, X0_4, 1);
    SetSpeffect(X4_4, 4050);
    IfInoutsideArea(MAIN, InsideOutsideState.Outside, X4_4, X0_4, 1);
    ClearSpeffect(X4_4, 4050);
    EndUnconditionally(EventEndType.Restart);
});

Event(15005550, Restart, function(X0_4) {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, X0_4, 1);
    SetSpeffect(10000, 4070);
    IfInoutsideArea(MAIN, InsideOutsideState.Outside, 10000, X0_4, 1);
    ClearSpeffect(10000, 4070);
    EndUnconditionally(EventEndType.Restart);
});

Event(15005570, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    RequestObjectRestoration(5001510);
    RequestObjectRestoration(5001520);
    RequestObjectRestoration(5001521);
});

Event(15005575, Restart, function() {
    SetObjectInvulnerability(5001411, Enabled);
});

Event(15005580, Restart, function() {
    RegisterLadder(15001580, 15001581, 5001580);
});

Event(15005590, Restart, function() {
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 5002590, 1);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 15000590);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, PASS, AND_01);
    EndUnconditionally(EventEndType.End);
    Label0();
    SetAreaWelcomeMessageState(Disabled);
    SetEventFlag(15000590, ON);
});

// Demon Prince Kill
Event(15005800, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15000800);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 15005803);
    IfCharacterHPRatio(AND_01, 5000801, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 15005804);
    IfCharacterHPRatio(AND_02, 5000802, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_01);
    GotoIfConditionGroupStateCompiled(Label.LABEL0, PASS, AND_02);
    WaitFixedTimeSeconds(3);
    PlaySE(5000801, SoundType.s_SFX, 777777777);
    WaitFixedTimeSeconds(3);
    HandleBossDefeatAndDisplayBanner(5000801, TextBannerType.HeirofFireDestroyed);
    GotoUnconditionally(Label.LABEL1);
    Label0();
    ForceCharacterDeath(5005803, false);
    WaitFixedTimeSeconds(3);
    PlaySE(5000802, SoundType.s_SFX, 777777777);
    WaitFixedTimeSeconds(3);
    HandleBossDefeatAndDisplayBanner(5000802, TextBannerType.HeirofFireDestroyed);
    GotoUnconditionally(Label.LABEL1);
    Label1();
    SetEventFlag(15000800, ON);
    SetEventFlag(9324, ON);
    SetEventFlag(6324, ON);
    InitializeCommonEvent(20020000, 25001022, 25002022, 800300020, 800300030, 120200, 121200); // Boss Kill
});

Event(15005810, Restart, function() {
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 15000800);
    ChangeCharacterEnableState(5005800, Disabled);
    SetCharacterAnimationState(5005800, Disabled);
    ForceCharacterDeath(5005800, false);
    EndUnconditionally(EventEndType.End);
    
    Label0();
    SetCharacterImmortality(5000800, Enabled);
    SetCharacterHPBarDisplay(5000800, Disabled);
    SetLockOnPoint(5000800, 220, Disabled);
    SetCharacterAIState(5005800, Disabled);
    SetCharacterImmortality(5000801, Enabled);
    SetCharacterAIState(5005801, Disabled);
    SetCharacterHPBarDisplay(5000801, Disabled);
    ChangeCharacterHitmask(5000801, 1, ON);
    IfCharacterType(OR_15, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterInvadeType(OR_15, 10000, 7, ComparisonType.Equal, 1);
    IfCharacterInvadeType(OR_15, 10000, 21, ComparisonType.Equal, 1);
    IfCharacterInvadeType(OR_15, 10000, 4, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, OR_15);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 5002800, 1);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfDamageType(OR_01, 5000801, -1, DamageType.Unspecified);
    IfConditionGroup(MAIN, PASS, OR_01);
    GotoUnconditionally(Label.LABEL2);
    
    Label1();
    IfEventFlag(AND_09, ON, TargetEventFlagType.EventFlag, 15005805);
    IfInoutsideArea(AND_09, InsideOutsideState.Inside, 10000, 5002800, 1);
    IfConditionGroup(MAIN, PASS, AND_09);
    
    Label2();
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SendInvadingPhantomsHome(0);
    SetNetworkUpdateRate(5005801, true, CharacterUpdateFrequency.AlwaysUpdate);
    CreateReferredDamagePair(5000801, 5000800);
    WaitFixedTimeSeconds(0.3);
    SetCharacterAIState(5005801, Enabled);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 15005810);
    WaitFixedTimeSeconds(3);
    DisplayBossHealthBar(Enabled, 5000801, 0, 905020);
    DisplayBossHealthBar(Enabled, 5000802, 1, 905021);
    SetEventFlag(15005810, ON);
    SetNetworkconnectedEventFlag(15005801, ON);
    InitializeCommonEvent(20020121, 0); // Boss Start
    
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    WaitFixedTimeSeconds(0);
    SetNetworkconnectedEventFlag(15005809, ON);
});

Event(15005811, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15000800);
    SetCharacterImmortality(5000802, Enabled);
    SetCharacterAIState(5005802, Disabled);
    SetCharacterHPBarDisplay(5000802, Disabled);
    ChangeCharacterHitmask(5000802, 1, ON);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 15005809);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 15005811);
    IfDamageType(OR_01, 5000802, -1, DamageType.Unspecified);
    IfCharacterHPRatio(OR_01, 5000801, ComparisonType.LessOrEqual, 0.65, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_01, 5000801, 15025, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    SetCharacterAIState(5005802, Enabled);
    SetNetworkUpdateRate(5005802, true, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFixedTimeSeconds(0);
    DisplayBossHealthBar(Enabled, 5000802, 1, 905021);
});

Event(15005812, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15000800);
    IfCharacterHasSpeffect(AND_02, 5000801, 15202, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_03, 5000802, 15202, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(OR_01, PASS, AND_03);
    IfConditionGroup(MAIN, PASS, OR_01);
    GotoIfConditionGroupStateCompiled(Label.LABEL0, PASS, AND_03);
    SetNetworkconnectedEventFlag(15005803, ON);
    WaitFixedTimeSeconds(6);
    DisplayBossHealthBar(Disabled, 5000802, 1, 905023);
    WaitFixedTimeSeconds(12);
    DisplayBossHealthBar(Enabled, 5000801, 0, 905022);
    SetCharacterImmortality(5000801, Disabled);
    ChangeCharacterHitmask(5000801, 1, OFF);
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL11, true);
    IfFriendlyPhantomCountComparison(AND_11, true, ComparisonType.GreaterOrEqual, 2);
    GotoIfConditionGroupStateUncompiled(Label.LABEL11, PASS, AND_11);
    SetSpeffect(5000801, 15150);
    Label11();
    ChangeCharacterEnableState(5000802, Disabled);
    GotoUnconditionally(Label.LABEL1);
    Label0();
    SetNetworkconnectedEventFlag(15005804, ON);
    WaitFixedTimeSeconds(6);
    DisplayBossHealthBar(Disabled, 5000801, 0, 905022);
    WaitFixedTimeSeconds(12);
    DisplayBossHealthBar(Enabled, 5000802, 0, 905023);
    SetCharacterImmortality(5000802, Disabled);
    ChangeCharacterHitmask(5000802, 1, OFF);
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL12, true);
    IfFriendlyPhantomCountComparison(AND_12, true, ComparisonType.GreaterOrEqual, 2);
    GotoIfConditionGroupStateUncompiled(Label.LABEL12, PASS, AND_12);
    SetSpeffect(5000802, 15150);
    Label12();
    ChangeCharacterEnableState(5000801, Disabled);
    GotoUnconditionally(Label.LABEL1);
    Label1();
    SetNetworkconnectedEventFlag(15005802, ON);
});

Event(15005813, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15000800);
    IfCharacterHPValue(AND_01, 5000801, ComparisonType.Equal, 1, ComparisonType.Equal, 1);
    IfCharacterHPValue(AND_02, 5000802, ComparisonType.Equal, 1, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(AND_03, PASS, OR_01);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_03, false);
    IfConditionGroup(MAIN, PASS, AND_03);
    GotoIfConditionGroupStateCompiled(Label.LABEL0, PASS, AND_02);
    SetSpeffect(5000801, 15100);
    SetSpeffect(5000801, 15204);
    SetSpeffect(5000802, 15204);
    SetSpeffect(5000802, 15201);
    WaitFixedTimeSeconds(3);
    ClearSpeffect(5000801, 15040);
    ClearSpeffect(5000801, 15026);
    EndUnconditionally(EventEndType.End);
    Label0();
    SetSpeffect(5000802, 15100);
    SetSpeffect(5000802, 15204);
    SetSpeffect(5000801, 15204);
    SetSpeffect(5000801, 15201);
    WaitFixedTimeSeconds(3);
    ClearSpeffect(5000802, 15040);
    ClearSpeffect(5000802, 15026);
});

Event(15005820, Restart, function(X0_4, X4_4, X8_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15000800);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15005803);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfCharacterDeadalive(AND_01, X0_4, DeathState.Alive, ComparisonType.Equal, 1);
    IfCharacterDeadalive(AND_01, X4_4, DeathState.Dead, ComparisonType.Equal, 1);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X8_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetNetworkconnectedEventFlag(X8_4, OFF);
    WaitFixedTimeFrames(1);
    EndUnconditionally(EventEndType.Restart);
});

Event(15005825, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15000800);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15005803);
    SetCharacterGravity(X4_4, Disabled);
    IfCharacterHasSpeffect(AND_01, X0_4, X12_4, true, ComparisonType.Equal, 1);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, X8_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    MakeEnemyAppearEvent(X16_4);
    WaitFixedTimeFrames(1);
    SetNetworkUpdateRate(X4_4, true, CharacterUpdateFrequency.AlwaysUpdate);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Character, X0_4, X20_4, X0_4);
    SetNetworkconnectedEventFlag(X8_4, ON);
    RequestCharacterAIReplan(X4_4);
    SkipIfComparison(1, ComparisonType.NotEqual, 1, X24_4);
    SetCharacterEventTarget(X4_4, X0_4);
    WaitFixedTimeFrames(1);
    EndUnconditionally(EventEndType.Restart);
});

Event(15005830, Restart, function(X0_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15000800);
    SetNetworkSyncState(Disabled);
    IfCharacterHPValue(OR_05, 5000801, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    IfCharacterHPValue(OR_05, 5000802, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL9, PASS, OR_05);
    IfEntityInoutsideRadiusOfEntity(AND_01, InsideOutsideState.Inside, 10000, X0_4, 18, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL1, PASS, AND_01);
    IfEntityInoutsideRadiusOfEntity(AND_02, InsideOutsideState.Outside, 10000, X0_4, 18, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL2, PASS, AND_02);
    Label1();
    SetSpeffect(X0_4, 15041);
    IfEntityInoutsideRadiusOfEntity(OR_01, InsideOutsideState.Outside, 10000, X0_4, 18, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    GotoUnconditionally(Label.LABEL0);
    Label2();
    SetSpeffect(X0_4, 15040);
    IfEntityInoutsideRadiusOfEntity(OR_02, InsideOutsideState.Inside, 10000, X0_4, 18, 1);
    IfConditionGroup(MAIN, PASS, OR_02);
    GotoUnconditionally(Label.LABEL0);
    Label0();
    EndUnconditionally(EventEndType.Restart);
    Label9();
    IfCharacterHasSpeffect(AND_10, X0_4, 15042, true, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(1, PASS, AND_10);
    SetSpeffect(X0_4, 15040);
    WaitFixedTimeSeconds(0.2);
    EndUnconditionally(EventEndType.End);
});

Event(15005835, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15000800);
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(AND_13, InsideOutsideState.Inside, 10000, 5002800, 1);
    IfEventFlag(AND_13, ON, TargetEventFlagType.EventFlag, 15005810);
    IfConditionGroup(MAIN, PASS, AND_13);
    IfEventFlag(AND_14, ON, TargetEventFlagType.EventFlag, 15005803);
    IfCharacterDeadalive(AND_14, 5000801, DeathState.Dead, ComparisonType.Equal, 1);
    IfEventFlag(AND_15, ON, TargetEventFlagType.EventFlag, 15005804);
    IfCharacterDeadalive(AND_15, 5000802, DeathState.Dead, ComparisonType.Equal, 1);
    IfConditionGroup(OR_15, PASS, AND_14);
    IfConditionGroup(OR_15, PASS, AND_15);
    GotoIfConditionGroupStateUncompiled(Label.LABEL20, PASS, OR_15);
    IfCharacterHasSpeffect(AND_05, 5000802, 15100, true, ComparisonType.Equal, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL5, PASS, AND_05);
    IfCharacterHasSpeffect(AND_10, 5000801, 15100, true, ComparisonType.Equal, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL10, PASS, AND_10);
    IfEntityInoutsideRadiusOfEntity(OR_01, InsideOutsideState.Inside, 10000, 5000801, 8, 1);
    IfEntityInoutsideRadiusOfEntity(OR_01, InsideOutsideState.Inside, 10000, 5000802, 8, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL1, PASS, OR_01);
    IfEntityInoutsideRadiusOfEntity(AND_01, InsideOutsideState.Outside, 10000, 5000801, 8, 1);
    IfEntityInoutsideRadiusOfEntity(AND_01, InsideOutsideState.Outside, 10000, 5000802, 8, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL2, PASS, AND_01);
    Label1();
    ChangeCamera(5020, 5020);
    WaitFixedTimeSeconds(0.5);
    IfEntityInoutsideRadiusOfEntity(AND_03, InsideOutsideState.Outside, 10000, 5000801, 8, 1);
    IfEntityInoutsideRadiusOfEntity(AND_03, InsideOutsideState.Outside, 10000, 5000802, 8, 1);
    IfConditionGroup(OR_03, PASS, AND_03);
    IfCharacterHasSpeffect(OR_03, 5000801, 15100, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_03, 5000802, 15100, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_03);
    GotoUnconditionally(Label.LABEL0);
    Label2();
    ChangeCamera(5021, 5021);
    WaitFixedTimeSeconds(0.5);
    IfEntityInoutsideRadiusOfEntity(OR_04, InsideOutsideState.Inside, 10000, 5000801, 8, 1);
    IfEntityInoutsideRadiusOfEntity(OR_04, InsideOutsideState.Inside, 10000, 5000802, 8, 1);
    IfCharacterHasSpeffect(OR_04, 5000801, 15100, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_04, 5000802, 15100, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_04);
    GotoUnconditionally(Label.LABEL0);
    Label5();
    IfEntityInoutsideRadiusOfEntity(AND_06, InsideOutsideState.Inside, 10000, 5000801, 8, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL6, PASS, AND_06);
    IfEntityInoutsideRadiusOfEntity(AND_07, InsideOutsideState.Outside, 10000, 5000801, 8, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL7, PASS, AND_07);
    Label6();
    ChangeCamera(5020, 5020);
    WaitFixedTimeSeconds(0.5);
    IfCharacterDeadalive(OR_06, 5000801, DeathState.Dead, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(OR_06, InsideOutsideState.Outside, 10000, 5000801, 8, 1);
    IfConditionGroup(MAIN, PASS, OR_06);
    GotoUnconditionally(Label.LABEL0);
    Label7();
    ChangeCamera(5021, 5021);
    WaitFixedTimeSeconds(0.5);
    IfCharacterDeadalive(OR_07, 5000801, DeathState.Dead, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(OR_07, InsideOutsideState.Inside, 10000, 5000801, 8, 1);
    IfConditionGroup(MAIN, PASS, OR_07);
    GotoUnconditionally(Label.LABEL0);
    Label10();
    IfEntityInoutsideRadiusOfEntity(AND_11, InsideOutsideState.Inside, 10000, 5000802, 8, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL11, PASS, AND_11);
    IfEntityInoutsideRadiusOfEntity(AND_12, InsideOutsideState.Outside, 10000, 5000802, 8, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL12, PASS, AND_12);
    Label11();
    ChangeCamera(5020, 5020);
    WaitFixedTimeSeconds(0.5);
    IfCharacterDeadalive(OR_11, 5000802, DeathState.Dead, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(OR_11, InsideOutsideState.Outside, 10000, 5000802, 8, 1);
    IfConditionGroup(MAIN, PASS, OR_11);
    GotoUnconditionally(Label.LABEL0);
    Label12();
    ChangeCamera(5021, 5021);
    WaitFixedTimeSeconds(0.5);
    IfCharacterDeadalive(OR_12, 5000802, DeathState.Dead, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(OR_12, InsideOutsideState.Inside, 10000, 5000802, 8, 1);
    IfConditionGroup(MAIN, PASS, OR_12);
    GotoUnconditionally(Label.LABEL0);
    Label0();
    EndUnconditionally(EventEndType.Restart);
    Label20();
    WaitFixedTimeSeconds(3);
    ChangeCamera(-1, -1);
    WaitFixedTimeSeconds(0.5);
    EndUnconditionally(EventEndType.End);
});

Event(15005850, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15000800);
    DeleteMapSFX(X4_4, true);
    SkipIfComparison(3, ComparisonType.Equal, 1, X12_4);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 5000801, X0_4, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 5000802, X0_4, 1);
    SkipUnconditionally(2);
    IfCharacterHasSpeffect(OR_01, 5000801, 5404, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_01, 5000802, 5404, true, ComparisonType.Equal, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 15005802);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeSeconds(X8_4);
    SpawnMapSFX(X4_4);
});

Event(15005849, Restart, function() {
    InitializeCommonEvent(20005800, 15000800, 5001800, 5002800, 15005805, 5001800, 5005800, 15005801, 0);
    InitializeCommonEvent(20005801, 15000800, 5001800, 5002801, 15005805, 5001800, 15005806);
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 15005801);
    InitializeCommonEvent(20001836, 15000800, 15005805, 15005806, 15005810, 5004801, 5004802, 15005802);
    SkipUnconditionally(1);
    InitializeCommonEvent(20005831, 15000800, 15005805, 15005806, 5002800, 5004801, 5004802, 15005802);
    InitializeCommonEvent(20005820, 15000800, 5001800, 3, 15005801);
    InitializeCommonEvent(20005820, 15000800, 5001801, 2, 15005801);
    InitializeCommonEvent(20005810, 15000800, 5001800, 5002801, 10000);
    InitializeEvent(0, 15005820, 5000802, 5000810, 15005840);
    InitializeEvent(1, 15005820, 5000802, 5000811, 15005841);
    InitializeEvent(2, 15005820, 5000802, 5000812, 15005842);
    InitializeEvent(3, 15005820, 5000802, 5000813, 15005843);
    InitializeEvent(4, 15005820, 5000802, 5000814, 15005844);
    InitializeEvent(0, 15005825, 5000802, 5000810, 15005840, 15020, 5004810, 100, 0);
    InitializeEvent(1, 15005825, 5000802, 5000811, 15005841, 15021, 5004811, 1, 0);
    InitializeEvent(2, 15005825, 5000802, 5000812, 15005842, 15022, 5004812, 2, 0);
    InitializeEvent(3, 15005825, 5000802, 5000813, 15005843, 15027, 5004813, 1, 1);
    InitializeEvent(4, 15005825, 5000802, 5000814, 15005844, 15028, 5004814, 2, 1);
    InitializeEvent(0, 15005835, 0);
    InitializeCommonEvent(20005840, 5001800);
    InitializeCommonEvent(20005841, 5001800);
});

Event(15005700, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1815, 1819);
    BatchSetNetworkconnectedEventFlags(1815, 1819, OFF);
    SetNetworkconnectedEventFlag(1815, ON);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1816);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70001073);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1815, 1819, OFF);
    SetNetworkconnectedEventFlag(1815, ON);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1800, 1814);
    BatchSetNetworkconnectedEventFlags(1800, 1814, OFF);
    SetNetworkconnectedEventFlag(1800, ON);
    GotoIfEventFlag(Label.LABEL9, OFF, TargetEventFlagType.EventFlag, 1815);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1800);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 75000101);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1800, 1814, OFF);
    SetNetworkconnectedEventFlag(1801, ON);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 1803);
    BatchSetNetworkconnectedEventFlags(1800, 1814, OFF);
    SetNetworkconnectedEventFlag(1801, ON);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1801);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 9324);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_03);
    BatchSetNetworkconnectedEventFlags(1800, 1814, OFF);
    SetNetworkconnectedEventFlag(1805, ON);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 1801);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 75000131);
    IfEventFlag(AND_04, OFF, TargetEventFlagType.EventFlag, 55000910);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 1875);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_04);
    BatchSetNetworkconnectedEventFlags(1800, 1814, OFF);
    SetNetworkconnectedEventFlag(1802, ON);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 1804);
    BatchSetNetworkconnectedEventFlags(1800, 1814, OFF);
    SetNetworkconnectedEventFlag(1802, ON);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 1802);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 9324);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_05);
    BatchSetNetworkconnectedEventFlags(1800, 1814, OFF);
    SetNetworkconnectedEventFlag(1806, ON);
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 1805);
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 75000131);
    IfEventFlag(AND_06, OFF, TargetEventFlagType.EventFlag, 55000910);
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 1875);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_06);
    BatchSetNetworkconnectedEventFlags(1800, 1814, OFF);
    SetNetworkconnectedEventFlag(1806, ON);
    IfBatchEventFlags(AND_07, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1805, 1806);
    IfEventFlag(AND_07, ON, TargetEventFlagType.EventFlag, 75000104);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_07);
    BatchSetNetworkconnectedEventFlags(1800, 1814, OFF);
    SetNetworkconnectedEventFlag(1807, ON);
    Label9();
    SetEventFlag(70001073, OFF);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 1815);
    SetEventFlag(75000120, OFF);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 1802);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 1806);
    SkipIfConditionGroupStateUncompiled(1, FAIL, OR_01);
    SetEventFlag(15000703, ON);
    SkipIfBatchEventFlags(1, LogicalOperationType.AllOFF, TargetEventFlagType.EventFlag, 1807, 1814);
    SetEventFlag(75000135, ON);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 1801);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 1803);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 1805);
    IfEventFlag(AND_08, ON, TargetEventFlagType.EventFlag, 75000130);
    IfEventFlag(AND_08, OFF, TargetEventFlagType.EventFlag, 55000910);
    IfEventFlag(AND_08, ON, TargetEventFlagType.EventFlag, 1875);
    IfConditionGroup(AND_08, PASS, OR_02);
    SkipIfConditionGroupStateUncompiled(1, FAIL, AND_08);
    SetEventFlag(75000131, ON);
    IfEventFlag(OR_03, ON, TargetEventFlagType.EventFlag, 1801);
    IfEventFlag(OR_03, ON, TargetEventFlagType.EventFlag, 1803);
    IfEventFlag(OR_03, ON, TargetEventFlagType.EventFlag, 1805);
    IfEventFlag(AND_09, ON, TargetEventFlagType.EventFlag, 75000103);
    IfEventFlag(AND_09, OFF, TargetEventFlagType.EventFlag, 55000910);
    IfEventFlag(AND_09, ON, TargetEventFlagType.EventFlag, 1875);
    IfConditionGroup(AND_09, PASS, OR_03);
    SkipIfConditionGroupStateUncompiled(1, FAIL, AND_09);
    SetEventFlag(75000130, ON);
    IfPlayerHasdoesntHaveItem(OR_04, ItemType.Goods, 2153, OwnershipState.Owns);
    IfEventFlag(OR_04, ON, TargetEventFlagType.EventFlag, 6500);
    SkipIfConditionGroupStateUncompiled(1, FAIL, OR_04);
    SetEventFlag(50006623, ON);
    Label10();
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1800);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1801);
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 1802);
    GotoIfEventFlag(Label.LABEL5, ON, TargetEventFlagType.EventFlag, 1805);
    GotoIfEventFlag(Label.LABEL6, ON, TargetEventFlagType.EventFlag, 1806);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    EndUnconditionally(EventEndType.End);
    Label0();
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    GotoIfEventFlag(Label.LABEL16, ON, TargetEventFlagType.EventFlag, 1816);
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1818);
    ForceAnimationPlayback(X0_4, X12_4, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    Label16();
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
    Label18();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
    Label1();
    Label5();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    GotoIfEventFlag(Label.LABEL16, ON, TargetEventFlagType.EventFlag, 1816);
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1818);
    ForceAnimationPlayback(X4_4, X16_4, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    Label16();
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
    Label18();
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    ForceCharacterTreasure(X4_4);
    EndUnconditionally(EventEndType.End);
    Label2();
    Label6();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    GotoIfEventFlag(Label.LABEL16, ON, TargetEventFlagType.EventFlag, 1816);
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1818);
    ForceAnimationPlayback(X8_4, X20_4, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    Label16();
    SetCharacterTeamType(X8_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
    Label18();
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    ForceCharacterTreasure(X8_4);
    EndUnconditionally(EventEndType.End);
});

Event(15005701, Restart, function(X0_4, X4_4, X8_4) {
    DeactivateObject(X8_4, Disabled);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 15000703);
    SetObjectTreasureState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    DeactivateObject(X8_4, Enabled);
});

Event(15005702, Default, function(X0_4, X4_4, X8_4, X12_4) {
    EndIfBatchEventFlags(EventEndType.End, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1805, 1814);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1815);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X8_4);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 9324);
    IfCharacterHasSpeffect(AND_01, 10000, 490, true, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(AND_01, InsideOutsideState.Inside, 10000, X4_4, 10, 1);
    IfCharacterBackreadStatus(AND_01, X4_4, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL0, true);
    BatchSetNetworkconnectedEventFlags(1800, 1814, OFF);
    SetNetworkconnectedEventFlag(X12_4, ON);
    Label0();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
});

Event(15005720, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1875, 1879);
    BatchSetNetworkconnectedEventFlags(1875, 1879, OFF);
    SetNetworkconnectedEventFlag(1875, ON);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1876);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70001076);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1875, 1879, OFF);
    SetNetworkconnectedEventFlag(1875, ON);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1860, 1874);
    BatchSetNetworkconnectedEventFlags(1860, 1874, OFF);
    SetNetworkconnectedEventFlag(1860, ON);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1860);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1878);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1860, 1874, OFF);
    SetNetworkconnectedEventFlag(1861, ON);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1860);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1875);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 15100500);
    SkipIfConditionGroupStateUncompiled(4, FAIL, AND_03);
    BatchSetNetworkconnectedEventFlags(1860, 1874, OFF);
    SetNetworkconnectedEventFlag(1862, ON);
    BatchSetNetworkconnectedEventFlags(1875, 1879, OFF);
    SetNetworkconnectedEventFlag(1878, ON);
    Label9();
    SetEventFlag(70001076, OFF);
    SetEventFlag(15000721, OFF);
    Label10();
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1860);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1861);
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 1862);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndUnconditionally(EventEndType.End);
    Label0();
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1878);
    SetCharacterHPBarDisplay(X0_4, Disabled);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false, 0, 1);
    SetCharacterMaphit(X0_4, true);
    SetCharacterGravity(X0_4, Disabled);
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X16_4, -1, X0_4);
    RequestObjectRestoration(X12_4);
    SetObjectInvulnerability(X12_4, Enabled);
    EndUnconditionally(EventEndType.End);
    Label18();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ForceCharacterTreasure(X0_4);
    RequestObjectDestruction(X12_4, 0);
    EndUnconditionally(EventEndType.End);
    Label1();
    Label2();
    EzstateInstructionRequest(X0_4, X8_4, 1);
    ForceCharacterTreasure(X0_4);
    RequestObjectDestruction(X12_4, 1);
    EndUnconditionally(EventEndType.End);
});

Event(15005721, Default, function(X0_4, X4_4) {
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 15000721);
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, 1860);
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL1, true);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfCharacterHasSpeffect(AND_01, X0_4, 5450, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_02, false);
    IfCharacterHasSpeffect(AND_02, X0_4, 5450, false, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_02);
    WaitFixedTimeFrames(1);
    Label1();
    IfPlayerIsNotInOwnWorldExcludesArena(AND_03, false);
    IfCharacterBackreadStatus(AND_03, X0_4, true, ComparisonType.Equal, 1);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_04, false);
    IfCharacterBackreadStatus(AND_04, X0_4, false, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_03);
    IfConditionGroup(OR_01, PASS, AND_04);
    IfConditionGroup(MAIN, PASS, OR_01);
    EndIfConditionGroupStateCompiled(EventEndType.Restart, PASS, AND_04);
    Label0();
    SetCharacterMaphit(X0_4, false);
    SetCharacterGravity(X0_4, Enabled);
    SetObjectInvulnerability(X4_4, Disabled);
    DestroyObject(X4_4);
    SetEventFlag(15000721, ON);
});

Event(15005722, Restart, function(X0_4) {
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    IfBatchEventFlags(MAIN, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1861, 1862);
    ChangeCharacterEnableState(X0_4, Enabled);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterGravity(X0_4, Disabled);
    SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AlwaysUpdate);
});

Event(15005900, Restart, function() {
    SetCharacterDefaultBackreadState(5000202, Enabled);
    SetCharacterDefaultBackreadState(5000212, Enabled);
    SetNetworkUpdateRate(5000212, true, CharacterUpdateFrequency.AlwaysUpdate);
});

// ----------------------------------------
// Phantoms
// ----------------------------------------
Event(15007000, Default, function() {
    
});
    
// ----------------------------------------
// Spell Summons
// ----------------------------------------
Event(15007100, Default, function() {
    // Skeleton
    InitializeCommonEvent(20080000, 5000750); // Setup
    InitializeCommonEvent(20080001, 5000750); // Bonfire Rest
    InitializeCommonEvent(20080002, 5000750); // Tools
    InitializeCommonEvent(20080003, 5000750); // Effects
    InitializeCommonEvent(20080004, 5000750, 160760000, 160760213, 50, 0); // Summoning
    
    // Hollow
    InitializeCommonEvent(20080000, 5000751); // Setup
    InitializeCommonEvent(20080001, 5000751); // Bonfire Rest
    InitializeCommonEvent(20080002, 5000751); // Tools
    InitializeCommonEvent(20080003, 5000751); // Effects
    InitializeCommonEvent(20080004, 5000751, 160760001, 160760213, 50, 0); // Summoning
    
    // Hound
    InitializeCommonEvent(20080000, 5000752); // Setup
    InitializeCommonEvent(20080001, 5000752); // Bonfire Rest
    InitializeCommonEvent(20080002, 5000752); // Tools
    InitializeCommonEvent(20080003, 5000752); // Effects
    InitializeCommonEvent(20080004, 5000752, 160760002, 160760213, 50, 0); // Summoning
    
    // Carthus Warrior
    InitializeCommonEvent(20080000, 5000753); // Setup
    InitializeCommonEvent(20080001, 5000753); // Bonfire Rest
    InitializeCommonEvent(20080002, 5000753); // Tools
    InitializeCommonEvent(20080003, 5000753); // Effects
    InitializeCommonEvent(20080004, 5000753, 160760003, 160760213, 50, 0); // Summoning
    
    // Lothric Knight
    InitializeCommonEvent(20080000, 5000754); // Setup
    InitializeCommonEvent(20080001, 5000754); // Bonfire Rest
    InitializeCommonEvent(20080002, 5000754); // Tools
    InitializeCommonEvent(20080003, 5000754); // Effects
    InitializeCommonEvent(20080004, 5000754, 160760004, 160760213, 50, 0); // Summoning
    
    // Lycanthrope
    InitializeCommonEvent(20080000, 5000755); // Setup
    InitializeCommonEvent(20080001, 5000755); // Bonfire Rest
    InitializeCommonEvent(20080002, 5000755); // Tools
    InitializeCommonEvent(20080003, 5000755); // Effects
    InitializeCommonEvent(20080004, 5000755, 160760005, 160760213, 50, 0); // Summoning
    
    // Black Knight
    InitializeCommonEvent(20080000, 5000756); // Setup
    InitializeCommonEvent(20080001, 5000756); // Bonfire Rest
    InitializeCommonEvent(20080002, 5000756); // Tools
    InitializeCommonEvent(20080003, 5000756); // Effects
    InitializeCommonEvent(20080004, 5000756, 160760006, 160760213, 50, 0); // Summoning
    
    // Abyss Watcher
    InitializeCommonEvent(20080000, 5000757); // Setup
    InitializeCommonEvent(20080001, 5000757); // Bonfire Rest
    InitializeCommonEvent(20080002, 5000757); // Tools
    InitializeCommonEvent(20080003, 5000757); // Effects
    InitializeCommonEvent(20080004, 5000757, 160760007, 160760213, 50, 0); // Summoning
    
    // Stone Gargoyle
    InitializeCommonEvent(20080000, 5000758); // Setup
    InitializeCommonEvent(20080001, 5000758); // Bonfire Rest
    InitializeCommonEvent(20080002, 5000758); // Tools
    InitializeCommonEvent(20080003, 5000758); // Effects
    InitializeCommonEvent(20080004, 5000758, 160760008, 160760213, 50, 0); // Summoning
    
    // Skeleton Unique
    InitializeCommonEvent(20080010, 5000750);
    InitializeCommonEvent(20080011, 5000750);
    InitializeCommonEvent(20080012, 5000750);
    
    // Hollow Unique
    InitializeCommonEvent(20080020, 5000751);
    InitializeCommonEvent(20080021, 5000751);
    InitializeCommonEvent(20080022, 5000751);
    
    // Hound Unique
    InitializeCommonEvent(20080030, 5000752);
    InitializeCommonEvent(20080031, 5000752);
    InitializeCommonEvent(20080032, 5000752);
    
    // Warrior Unique
    InitializeCommonEvent(20080040, 5000753);
    InitializeCommonEvent(20080041, 5000753);
    InitializeCommonEvent(20080042, 5000753);
    
    // Lothric Knight Unique
    InitializeCommonEvent(20080050, 5000754);
    InitializeCommonEvent(20080051, 5000754);
    InitializeCommonEvent(20080052, 5000754);
    
    // Lycanthrope Unique
    InitializeCommonEvent(20080060, 5000755);
    InitializeCommonEvent(20080061, 5000755);
    InitializeCommonEvent(20080062, 5000755);
    
    // Black Knight Unique
    InitializeCommonEvent(20080070, 5000756);
    InitializeCommonEvent(20080071, 5000756);
    InitializeCommonEvent(20080072, 5000756);
    
    // Abyss Watcher Unique
    InitializeCommonEvent(20080080, 5000757);
    InitializeCommonEvent(20080081, 5000757);
    InitializeCommonEvent(20080082, 5000757);
   
    // Gargoyle Unique
    InitializeCommonEvent(20080090, 5000758);
    InitializeCommonEvent(20080091, 5000758);
    InitializeCommonEvent(20080092, 5000758);
});
