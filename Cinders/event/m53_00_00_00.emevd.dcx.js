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
Event(0, Restart, function() {
    RegisterBonfire(15300000, 5301950, 5, 180, 0); // Bonfire
    
    //-------------------------------
    // Local Companion
    //-------------------------------
    InitializeCommonEvent(20080000, 5300750); // Setup
    InitializeCommonEvent(20080001, 5300750); // Bonfire Rest
    InitializeCommonEvent(20080002, 5300750); // Tools
    InitializeCommonEvent(20080003, 5300750); // Effects
    InitializeCommonEvent(20080005, 5300750);
    InitializeCommonEvent(20080006, 5300750);
    InitializeCommonEvent(20080004, 5300750, 160760000, 160760216, 47, 0); // Summoning
    
    //----------------------
    // Phantoms
    //----------------------
    InitializeEvent(0, 15307000, 0);

    //----------------------
    // Spell Summons
    //----------------------
    InitializeEvent(0, 15307100, 0);
    
    //-------------------------------
    // Setup Pre-Memory
    //-------------------------------
    BatchSetEventFlags(25009680, 25009689, OFF); // Announcer flags
    
    SetEventFlag(25009600, OFF);
    SetEventFlag(25009610, OFF);
    SetEventFlag(25009611, OFF);
    SetEventFlag(25009612, OFF);
    SetEventFlag(25009613, OFF);
    SetEventFlag(25009614, OFF);
    
    InitializeEvent(0, 15302000, 0);
    
    WaitFixedTimeSeconds(2.0);
    
    //-------------------------------
    // Start Memory
    //-------------------------------
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 25009600);
    SetEventFlag(25009600, OFF);
    
    // Disable bonfire
    ChangeCharacterEnableState(5300950, Disabled);
    DeactivateObject(5301950, Disabled);
    SpawnOneshotSFX(TargetEntityType.Object, 5301950, 200, 1060);
    PlaySE(10000, SoundType.v_Voice, 444444441); // Shwing
    
    WaitFixedTimeSeconds(2.0);
    
    SetEventFlag(25009680, ON); // Announcer - Survive!
    PlaySE(10000, SoundType.v_Voice, 444444440); // Thud

    InitializeEvent(0, 15300100, 0);
});
    
//---------------------------------------------
// Destructor
//---------------------------------------------
Event(50, Default, function() {
    
});

// ----------------------------------------
// Wave System
// ----------------------------------------
Event(15300100, Default, function() {
    // Add enemy modifiers
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009610);
    SetSpEffect(5305761, 260200100);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009611);
    SetSpEffect(5305761, 260200101);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009612);
    SetSpEffect(5305761, 260200102);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009613);
    SetSpEffect(5305761, 260200103);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009614);
    SetSpEffect(5305761, 260200104);
    
    //-----------------------------
    // Round 1 
    //-----------------------------
    WaitFixedTimeSeconds(5.0);
    
    SetEventFlag(25009681, ON); // Announcer - Round 1
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    
    SetEventFlag(25009620, OFF);
    SetEventFlag(25009621, OFF);
    RandomlySetEventFlagInRange(25009620, 25009621, ON);
    
    // Set 1
    SkipIfEventFlag(16, ON, TargetEventFlagType.EventFlag, 25009620);
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    InitializeCommonEvent(20087100, 5300100);
    InitializeCommonEvent(20087100, 5300101);
    
    IfCharacterDeadalive(MAIN, 5300100, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterDeadalive(MAIN, 5300101, DeathState.Dead, ComparisonType.Equal, 1);
    
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    InitializeCommonEvent(20087100, 5300102);
    InitializeCommonEvent(20087100, 5300103);
    
    IfCharacterDeadalive(MAIN, 5300102, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterDeadalive(MAIN, 5300103, DeathState.Dead, ComparisonType.Equal, 1);
    
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    InitializeCommonEvent(20087100, 5300104);
    InitializeCommonEvent(20087100, 5300105);
    
    IfCharacterDeadalive(MAIN, 5300104, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterDeadalive(MAIN, 5300105, DeathState.Dead, ComparisonType.Equal, 1);
    
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    
    // Set 2
    SkipIfEventFlag(16, OFF, TargetEventFlagType.EventFlag, 25009620);
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    InitializeCommonEvent(20087100, 5300110);
    InitializeCommonEvent(20087100, 5300111);
    
    IfCharacterDeadalive(MAIN, 5300110, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterDeadalive(MAIN, 5300111, DeathState.Dead, ComparisonType.Equal, 1);
    
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    InitializeCommonEvent(20087100, 5300112);
    InitializeCommonEvent(20087100, 5300113);
    
    IfCharacterDeadalive(MAIN, 5300112, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterDeadalive(MAIN, 5300113, DeathState.Dead, ComparisonType.Equal, 1);
    
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    InitializeCommonEvent(20087100, 5300114);
    InitializeCommonEvent(20087100, 5300115);
    
    IfCharacterDeadalive(MAIN, 5300114, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterDeadalive(MAIN, 5300115, DeathState.Dead, ComparisonType.Equal, 1);
    
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    
    WaitFixedTimeSeconds(5.0);
    
    //-----------------------------
    // Round 2
    //-----------------------------
    SetEventFlag(25009682, ON); // Announcer - Round 2
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    
    SetEventFlag(25009620, OFF);
    SetEventFlag(25009621, OFF);
    RandomlySetEventFlagInRange(25009620, 25009621, ON);
    
    // Set 1
    SkipIfEventFlag(16, ON, TargetEventFlagType.EventFlag, 25009620);
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    InitializeCommonEvent(20087100, 5300120);
    InitializeCommonEvent(20087100, 5300121);
    
    IfCharacterDeadalive(MAIN, 5300120, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterDeadalive(MAIN, 5300121, DeathState.Dead, ComparisonType.Equal, 1);
    
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    InitializeCommonEvent(20087100, 5300122);
    InitializeCommonEvent(20087100, 5300123);
    
    IfCharacterDeadalive(MAIN, 5300122, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterDeadalive(MAIN, 5300123, DeathState.Dead, ComparisonType.Equal, 1);
    
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    InitializeCommonEvent(20087100, 5300124);
    InitializeCommonEvent(20087100, 5300125);
    
    IfCharacterDeadalive(MAIN, 5300124, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterDeadalive(MAIN, 5300125, DeathState.Dead, ComparisonType.Equal, 1);
    
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    
    // Set 2
    SkipIfEventFlag(16, OFF, TargetEventFlagType.EventFlag, 25009620);
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    InitializeCommonEvent(20087100, 5300130);
    InitializeCommonEvent(20087100, 5300131);
    
    IfCharacterDeadalive(MAIN, 5300130, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterDeadalive(MAIN, 5300131, DeathState.Dead, ComparisonType.Equal, 1);
    
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    InitializeCommonEvent(20087100, 5300132);
    InitializeCommonEvent(20087100, 5300133);
    
    IfCharacterDeadalive(MAIN, 5300132, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterDeadalive(MAIN, 5300133, DeathState.Dead, ComparisonType.Equal, 1);
    
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    InitializeCommonEvent(20087100, 5300134);
    InitializeCommonEvent(20087100, 5300135);
    
    IfCharacterDeadalive(MAIN, 5300134, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterDeadalive(MAIN, 5300135, DeathState.Dead, ComparisonType.Equal, 1);
    
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    
    WaitFixedTimeSeconds(5.0);
    
    //-----------------------------
    // Round 3
    //-----------------------------
    SetEventFlag(25009683, ON); // Announcer - Round 3
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    
    SetEventFlag(25009620, OFF);
    SetEventFlag(25009621, OFF);
    RandomlySetEventFlagInRange(25009620, 25009621, ON);
    
    // Set 1
    SkipIfEventFlag(16, ON, TargetEventFlagType.EventFlag, 25009620);
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    InitializeCommonEvent(20087100, 5300140);
    InitializeCommonEvent(20087100, 5300141);
    
    IfCharacterDeadalive(MAIN, 5300140, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterDeadalive(MAIN, 5300141, DeathState.Dead, ComparisonType.Equal, 1);
    
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    InitializeCommonEvent(20087100, 5300142);
    InitializeCommonEvent(20087100, 5300143);
    
    IfCharacterDeadalive(MAIN, 5300142, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterDeadalive(MAIN, 5300143, DeathState.Dead, ComparisonType.Equal, 1);
    
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    InitializeCommonEvent(20087100, 5300144);
    InitializeCommonEvent(20087100, 5300145);
    
    IfCharacterDeadalive(MAIN, 5300144, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterDeadalive(MAIN, 5300145, DeathState.Dead, ComparisonType.Equal, 1);
    
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    
    // Set 2
    SkipIfEventFlag(16, OFF, TargetEventFlagType.EventFlag, 25009620);
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    InitializeCommonEvent(20087100, 5300150);
    InitializeCommonEvent(20087100, 5300151);
    
    IfCharacterDeadalive(MAIN, 5300150, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterDeadalive(MAIN, 5300151, DeathState.Dead, ComparisonType.Equal, 1);
    
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    InitializeCommonEvent(20087100, 5300152);
    InitializeCommonEvent(20087100, 5300153);
    
    IfCharacterDeadalive(MAIN, 5300152, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterDeadalive(MAIN, 5300153, DeathState.Dead, ComparisonType.Equal, 1);
    
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    InitializeCommonEvent(20087100, 5300154);
    InitializeCommonEvent(20087100, 5300155);
    
    IfCharacterDeadalive(MAIN, 5300154, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterDeadalive(MAIN, 5300155, DeathState.Dead, ComparisonType.Equal, 1);
    
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    
    WaitFixedTimeSeconds(5.0);
    
    //-----------------------------
    // Round 4
    //-----------------------------
    SetEventFlag(25009684, ON); // Announcer - Round 4
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    
    SetEventFlag(25009620, OFF);
    SetEventFlag(25009621, OFF);
    RandomlySetEventFlagInRange(25009620, 25009621, ON);
    
    // Set 1
    SkipIfEventFlag(16, ON, TargetEventFlagType.EventFlag, 25009620);
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    InitializeCommonEvent(20087100, 5300160);
    InitializeCommonEvent(20087100, 5300161);
    
    IfCharacterDeadalive(MAIN, 5300160, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterDeadalive(MAIN, 5300161, DeathState.Dead, ComparisonType.Equal, 1);
    
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    InitializeCommonEvent(20087100, 5300162);
    InitializeCommonEvent(20087100, 5300163);
    
    IfCharacterDeadalive(MAIN, 5300162, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterDeadalive(MAIN, 5300163, DeathState.Dead, ComparisonType.Equal, 1);
    
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    InitializeCommonEvent(20087100, 5300164);
    InitializeCommonEvent(20087100, 5300165);
    
    IfCharacterDeadalive(MAIN, 5300164, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterDeadalive(MAIN, 5300165, DeathState.Dead, ComparisonType.Equal, 1);
    
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    
    // Set 2
    SkipIfEventFlag(16, OFF, TargetEventFlagType.EventFlag, 25009620);
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    InitializeCommonEvent(20087100, 5300170);
    InitializeCommonEvent(20087100, 5300171);
    
    IfCharacterDeadalive(MAIN, 5300170, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterDeadalive(MAIN, 5300171, DeathState.Dead, ComparisonType.Equal, 1);
    
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    InitializeCommonEvent(20087100, 5300172);
    InitializeCommonEvent(20087100, 5300173);
    
    IfCharacterDeadalive(MAIN, 5300172, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterDeadalive(MAIN, 5300173, DeathState.Dead, ComparisonType.Equal, 1);
    
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    InitializeCommonEvent(20087100, 5300174);
    InitializeCommonEvent(20087100, 5300175);
    
    IfCharacterDeadalive(MAIN, 5300174, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterDeadalive(MAIN, 5300175, DeathState.Dead, ComparisonType.Equal, 1);
    
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    
    WaitFixedTimeSeconds(5.0);
    
    //-----------------------------
    // Round 5
    //-----------------------------
    SetEventFlag(25009685, ON); // Announcer - Round 5
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    
    SetEventFlag(25009620, OFF);
    SetEventFlag(25009621, OFF);
    RandomlySetEventFlagInRange(25009620, 25009621, ON);
    
    // Set 1
    SkipIfEventFlag(16, ON, TargetEventFlagType.EventFlag, 25009620);
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    InitializeCommonEvent(20087100, 5300180);
    InitializeCommonEvent(20087100, 5300181);
    
    IfCharacterDeadalive(MAIN, 5300180, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterDeadalive(MAIN, 5300181, DeathState.Dead, ComparisonType.Equal, 1);
    
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    InitializeCommonEvent(20087100, 5300182);
    InitializeCommonEvent(20087100, 5300183);
    
    IfCharacterDeadalive(MAIN, 5300182, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterDeadalive(MAIN, 5300183, DeathState.Dead, ComparisonType.Equal, 1);
    
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    InitializeCommonEvent(20087100, 5300184);
    InitializeCommonEvent(20087100, 5300185);
    
    IfCharacterDeadalive(MAIN, 5300184, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterDeadalive(MAIN, 5300185, DeathState.Dead, ComparisonType.Equal, 1);
    
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    
    // Set 2
    SkipIfEventFlag(16, OFF, TargetEventFlagType.EventFlag, 25009620);
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    InitializeCommonEvent(20087100, 5300190);
    InitializeCommonEvent(20087100, 5300191);
    
    IfCharacterDeadalive(MAIN, 5300190, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterDeadalive(MAIN, 5300191, DeathState.Dead, ComparisonType.Equal, 1);
    
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    InitializeCommonEvent(20087100, 5300192);
    InitializeCommonEvent(20087100, 5300193);
    
    IfCharacterDeadalive(MAIN, 5300192, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterDeadalive(MAIN, 5300193, DeathState.Dead, ComparisonType.Equal, 1);
    
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    InitializeCommonEvent(20087100, 5300194);
    InitializeCommonEvent(20087100, 5300195);
    
    IfCharacterDeadalive(MAIN, 5300194, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterDeadalive(MAIN, 5300195, DeathState.Dead, ComparisonType.Equal, 1);
    
    PlaySE(10000, SoundType.v_Voice, 444444442); // Thud Shwing
    
    WaitFixedTimeSeconds(5.0);
    
    //-----------------------------
    // Complete
    //-----------------------------
    SetEventFlag(25009686, ON); // Announcer - Cycle Complete
    PlaySE(10000, SoundType.v_Voice, 444444441); // Shwing
    
    // Rewards
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009610);
    AwardItemLot(110100);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009611);
    AwardItemLot(110110);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009612);
    AwardItemLot(110120);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009613);
    AwardItemLot(110130);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009614);
    AwardItemLot(110140);
    
    // Restart
    WaitFixedTimeSeconds(10.0);
    
    WarpPlayer(53, 0, 5300970);
});
    
// ----------------------------------------
// Setup Enemies
// ----------------------------------------
Event(15302000, Restart, function() {
    ChangeCharacterEnableState(5300900, Disabled);
    SetCharacterAnimationState(5300900, Disabled);
    SetCharacterAIState(5300900, Disabled);

    ChangeCharacterEnableState(5305761, Disabled);
    SetCharacterAnimationState(5305761, Disabled);
    SetCharacterAIState(5305761, Disabled);
    
    InitializeCommonEvent(20081010, 5305761, 250001020, 25000400); // Curse of Pride - 10%
    InitializeCommonEvent(20081010, 5305761, 250001021, 25000401); // Curse of Pride - 20%
    InitializeCommonEvent(20081010, 5305761, 250001022, 25000402); // Curse of Pride - 30%
    InitializeCommonEvent(20081010, 5305761, 250001023, 25000403); // Curse of Pride - 40%
    InitializeCommonEvent(20081010, 5305761, 250001024, 25000404); // Curse of Pride - 50%
    InitializeCommonEvent(20081010, 5305761, 250001025, 25000405); // Curse of Pride - 60%
    InitializeCommonEvent(20081010, 5305761, 250001026, 25000406); // Curse of Pride - 70%
    InitializeCommonEvent(20081010, 5305761, 250001027, 25000407); // Curse of Pride - 80%
    InitializeCommonEvent(20081010, 5305761, 250001028, 25000408); // Curse of Pride - 90%
    InitializeCommonEvent(20081010, 5305761, 250001029, 25000409); // Curse of Pride - 100%

    InitializeCommonEvent(20081010, 5305761, 250001120, 25000410); // Curse of Fortitude - 5%
    InitializeCommonEvent(20081010, 5305761, 250001121, 25000411); // Curse of Fortitude - 10%
    InitializeCommonEvent(20081010, 5305761, 250001122, 25000412); // Curse of Fortitude - 15%
    InitializeCommonEvent(20081010, 5305761, 250001123, 25000413); // Curse of Fortitude - 20%
    InitializeCommonEvent(20081010, 5305761, 250001124, 25000414); // Curse of Fortitude - 25%
    InitializeCommonEvent(20081010, 5305761, 250001125, 25000415); // Curse of Fortitude - 30%
    InitializeCommonEvent(20081010, 5305761, 250001126, 25000416); // Curse of Fortitude - 35%
    InitializeCommonEvent(20081010, 5305761, 250001127, 25000417); // Curse of Fortitude - 40%
    InitializeCommonEvent(20081010, 5305761, 250001128, 25000418); // Curse of Fortitude - 45%
    InitializeCommonEvent(20081010, 5305761, 250001129, 25000419); // Curse of Fortitude - 50%
    
    InitializeCommonEvent(20081010, 5305761, 250001320, 25000420); // Curse of Vitality - 10
    InitializeCommonEvent(20081010, 5305761, 250001321, 25000421); // Curse of Vitality - 20
    InitializeCommonEvent(20081010, 5305761, 250001322, 25000422); // Curse of Vitality - 30
    InitializeCommonEvent(20081010, 5305761, 250001323, 25000423); // Curse of Vitality - 40
    InitializeCommonEvent(20081010, 5305761, 250001324, 25000424); // Curse of Vitality - 50
    InitializeCommonEvent(20081010, 5305761, 250001325, 25000425); // Curse of Vitality - 60
    InitializeCommonEvent(20081010, 5305761, 250001326, 25000426); // Curse of Vitality - 70
    InitializeCommonEvent(20081010, 5305761, 250001327, 25000427); // Curse of Vitality - 80
    InitializeCommonEvent(20081010, 5305761, 250001328, 25000428); // Curse of Vitality - 90
    InitializeCommonEvent(20081010, 5305761, 250001329, 25000429); // Curse of Vitality - 100
    
    InitializeCommonEvent(20081010, 5305761, 250001420, 25000430); // Curse of Wrath - 10
    InitializeCommonEvent(20081010, 5305761, 250001421, 25000431); // Curse of Wrath - 20
    InitializeCommonEvent(20081010, 5305761, 250001422, 25000432); // Curse of Wrath - 30
    InitializeCommonEvent(20081010, 5305761, 250001423, 25000433); // Curse of Wrath - 40
    InitializeCommonEvent(20081010, 5305761, 250001424, 25000434); // Curse of Wrath - 50
    InitializeCommonEvent(20081010, 5305761, 250001425, 25000435); // Curse of Wrath - 60
    InitializeCommonEvent(20081010, 5305761, 250001426, 25000436); // Curse of Wrath - 70
    InitializeCommonEvent(20081010, 5305761, 250001427, 25000437); // Curse of Wrath - 80
    InitializeCommonEvent(20081010, 5305761, 250001428, 25000438); // Curse of Wrath - 90
    InitializeCommonEvent(20081010, 5305761, 250001429, 25000439); // Curse of Wrath - 100
    
    InitializeCommonEvent(20081000, 5305750, 25000440);             // Curse of Attraction
    InitializeCommonEvent(20081010, 5305761, 250001920, 25000480);  // Curse of Frailty
    InitializeCommonEvent(20081010, 5305770, 250002220, 25000510);  // Curse of Valor
    
    // Company of Champions
    InitializeCommonEvent(20081020, 5305760, 160101502, 160101503); // I
    InitializeCommonEvent(20081020, 5305760, 160101512, 160101513); // II
    InitializeCommonEvent(20081020, 5305760, 160101522, 160101523); // III
    InitializeCommonEvent(20081020, 5305760, 160101532, 160101533); // IV
    InitializeCommonEvent(20081020, 5305760, 160101542, 160101543); // V
});

// ----------------------------------------
// Phantoms
// ----------------------------------------
Event(15307000, Default, function() {
    
});

// ----------------------------------------
// Spell Summons
// ----------------------------------------
Event(15307100, Default, function() {
    // Skeleton
    InitializeCommonEvent(20080000, 5300750); // Setup
    InitializeCommonEvent(20080001, 5300750); // Bonfire Rest
    InitializeCommonEvent(20080002, 5300750); // Tools
    InitializeCommonEvent(20080003, 5300750); // Effects
    InitializeCommonEvent(20080004, 5300750, 160760000, 160760217, 53, 0); // Summoning
    
    // Hollow
    InitializeCommonEvent(20080000, 5300751); // Setup
    InitializeCommonEvent(20080001, 5300751); // Bonfire Rest
    InitializeCommonEvent(20080002, 5300751); // Tools
    InitializeCommonEvent(20080003, 5300751); // Effects
    InitializeCommonEvent(20080004, 5300751, 160760001, 160760217, 53, 0); // Summoning
    
    // Hound
    InitializeCommonEvent(20080000, 5300752); // Setup
    InitializeCommonEvent(20080001, 5300752); // Bonfire Rest
    InitializeCommonEvent(20080002, 5300752); // Tools
    InitializeCommonEvent(20080003, 5300752); // Effects
    InitializeCommonEvent(20080004, 5300752, 160760002, 160760217, 53, 0); // Summoning
    
    // Carthus Warrior
    InitializeCommonEvent(20080000, 5300753); // Setup
    InitializeCommonEvent(20080001, 5300753); // Bonfire Rest
    InitializeCommonEvent(20080002, 5300753); // Tools
    InitializeCommonEvent(20080003, 5300753); // Effects
    InitializeCommonEvent(20080004, 5300753, 160760003, 160760217, 53, 0); // Summoning
    
    // Lothric Knight
    InitializeCommonEvent(20080000, 5300754); // Setup
    InitializeCommonEvent(20080001, 5300754); // Bonfire Rest
    InitializeCommonEvent(20080002, 5300754); // Tools
    InitializeCommonEvent(20080003, 5300754); // Effects
    InitializeCommonEvent(20080004, 5300754, 160760004, 160760217, 53, 0); // Summoning
    
    // Lycanthrope
    InitializeCommonEvent(20080000, 5300755); // Setup
    InitializeCommonEvent(20080001, 5300755); // Bonfire Rest
    InitializeCommonEvent(20080002, 5300755); // Tools
    InitializeCommonEvent(20080003, 5300755); // Effects
    InitializeCommonEvent(20080004, 5300755, 160760005, 160760217, 53, 0); // Summoning
    
    // Black Knight
    InitializeCommonEvent(20080000, 5300756); // Setup
    InitializeCommonEvent(20080001, 5300756); // Bonfire Rest
    InitializeCommonEvent(20080002, 5300756); // Tools
    InitializeCommonEvent(20080003, 5300756); // Effects
    InitializeCommonEvent(20080004, 5300756, 160760006, 160760217, 53, 0); // Summoning
    
    // Abyss Watcher
    InitializeCommonEvent(20080000, 5300757); // Setup
    InitializeCommonEvent(20080001, 5300757); // Bonfire Rest
    InitializeCommonEvent(20080002, 5300757); // Tools
    InitializeCommonEvent(20080003, 5300757); // Effects
    InitializeCommonEvent(20080004, 5300757, 160760007, 160760217, 53, 0); // Summoning
    
    // Stone Gargoyle
    InitializeCommonEvent(20080000, 5300758); // Setup
    InitializeCommonEvent(20080001, 5300758); // Bonfire Rest
    InitializeCommonEvent(20080002, 5300758); // Tools
    InitializeCommonEvent(20080003, 5300758); // Effects
    InitializeCommonEvent(20080004, 5300758, 160760008, 160760217, 53, 0); // Summoning
    
    // Skeleton Unique
    InitializeCommonEvent(20080010, 5300750);
    InitializeCommonEvent(20080011, 5300750);
    InitializeCommonEvent(20080012, 5300750);
    
    // Hollow Unique
    InitializeCommonEvent(20080020, 5300751);
    InitializeCommonEvent(20080021, 5300751);
    InitializeCommonEvent(20080022, 5300751);
    
    // Hound Unique
    InitializeCommonEvent(20080030, 5300752);
    InitializeCommonEvent(20080031, 5300752);
    InitializeCommonEvent(20080032, 5300752);
    
    // Warrior Unique
    InitializeCommonEvent(20080040, 5300753);
    InitializeCommonEvent(20080041, 5300753);
    InitializeCommonEvent(20080042, 5300753);
    
    // Lothric Knight Unique
    InitializeCommonEvent(20080050, 5300754);
    InitializeCommonEvent(20080051, 5300754);
    InitializeCommonEvent(20080052, 5300754);
    
    // Lycanthrope Unique
    InitializeCommonEvent(20080060, 5300755);
    InitializeCommonEvent(20080061, 5300755);
    InitializeCommonEvent(20080062, 5300755);
    
    // Black Knight Unique
    InitializeCommonEvent(20080070, 5300756);
    InitializeCommonEvent(20080071, 5300756);
    InitializeCommonEvent(20080072, 5300756);
    
    // Abyss Watcher Unique
    InitializeCommonEvent(20080080, 5300757);
    InitializeCommonEvent(20080081, 5300757);
    InitializeCommonEvent(20080082, 5300757);
   
    // Gargoyle Unique
    InitializeCommonEvent(20080090, 5300758);
    InitializeCommonEvent(20080091, 5300758);
    InitializeCommonEvent(20080092, 5300758);
});
