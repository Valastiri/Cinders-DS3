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
    // Bonfire: Filianore's Rest
    RegisterBonfire(15110001, 5111951, 5, 180, 0); 
    
    // Bonfire: Slave Knight Gael
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25009850); // Skip in Gauntlet mode
    InitializeCommonEvent(20005500, 15110800, 15110000, 5110950, 5111950);
    
    //----------------------------------------
    // Slave Knight Gael
    //----------------------------------------
    // Slave Knight Gael - Kill
    InitializeEvent(0, 15115800, 0); 
    
    // Slave Knight Gael - Boss Start
    InitializeEvent(0, 15115810, 0); 
    
    // Slave Knight Gael - 2nd Phase Transition
    InitializeEvent(0, 15115811, 0); 
    
    // Slave Knight Gael - 2nd Phase VFX Handler
    InitializeEvent(0, 15115812, 0); 
    
    // Slave Knight Gael - Handle AI State in Filianore's temple area
    InitializeEvent(0, 15115847, 0); 
    
    // Slave Knight Gael - Setup
    InitializeEvent(0, 15115849, 0); 
    
    // Slave Knight Gael - Handle Fog Wall for Player
    InitializeCommonEvent(20005840, 5111800); 
    
    // Slave Knight Gael - Handle Fog Wall for Client Player
    InitializeCommonEvent(20005841, 5111800); 
    
    //----------------------------------------
    // Shira
    //----------------------------------------
    // Shira - Handle Flags
    InitializeEvent(0, 15115850, 0); 
    
    // Shira - Handle Spawn State
    InitializeEvent(0, 15115860, 0); 
    
    // Shira - Setup
    InitializeEvent(0, 15115889, 0); 
    
    // Shira - Handle Fog Wall for Player
    InitializeCommonEvent(20005840, 5111850); 
    
    // Shira - Handle Fog Wall for Client Player
    InitializeCommonEvent(20005841, 5111850); 
    
    //----------------------------------------
    // Misc
    //----------------------------------------
    // Flag Handler - Gael + Shria dead
    InitializeEvent(0, 15115890, 0); 
    
    // Filianore - Play Animation
    InitializeEvent(0, 15115201, 0); 
    
    // Mad Pilgrim - Enable AI upon area/attack trigger
    InitializeCommonEvent(20005110, 5110300, 5112800); 
    
    // Mad Pilgrim - Handle State
    InitializeEvent(0, 15115300, 0); 
    
    // Ringed Knight - Award Itemlot
    InitializeCommonEvent(20005351, 5110240, 62600240, 55110981, 1073741824); 
    
    // Handle ? State
    InitializeEvent(0, 15115891, 0); 
    
    // Shira - Set Flags if Dead
    InitializeCommonEvent(20006002, 5110850, 1838, 1835, 1839); 
    
    // Area - Flag set if within
    InitializeCommonEvent(20006031, 75110180, 5112801); 
    
    //----------------------
    // Setup
    //----------------------
    // Fallen Abominations
    InitializeEvent(0, 15115000, 5110350);
    InitializeEvent(1, 15115000, 5110351);
    InitializeEvent(2, 15115000, 5110352);
    InitializeEvent(3, 15115000, 5110353);
    InitializeEvent(4, 15115000, 5110354);
    
    // Sounds
    ChangeCharacterEnableState(5110360, Disabled);
    SetCharacterAnimationState(5110360, Disabled);
    SetCharacterAIState(5110360, Disabled);
    
    // Modifiers
    InitializeEvent(0, 15116000, 0); 
    
    // Treasures
    InitializeEvent(0, 15116100, 0); 
    
    // Phantoms
    InitializeEvent(0, 15117000, 0); 
    
    // Spell Summons
    InitializeEvent(0, 15117100, 0); 
    
});

//---------------------------------------------
// Pre-constructor
//---------------------------------------------
Event(50, Default, function() {
    //----------------------------------------
    // Filianore
    //----------------------------------------
    // Setup
    InitializeEvent(0, 15115200, 0);
    
    //----------------------------------------
    // Slave Knight Gael
    //----------------------------------------
    // Setup
    InitializeEvent(0, 15115100, 0);
    
    //----------------------------------------
    // Misc
    //----------------------------------------
    SetMapSoundState(5114801, Disabled);
    SetMapSoundState(5114802, Disabled);
    SetMapSoundState(5114803, Disabled);
    
});

//----------------------------------------
// Slave Knight Gael - Setup
//----------------------------------------
Event(15115100, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15110800);
    SetCurrentMapCeremony(0);
});

//----------------------------------------
// Filianore - Setup
//----------------------------------------
Event(15115200, Restart, function() {
    SetCharacterGravity(5110200, Disabled);
    SetCharacterMaphit(5110200, true);
});

//----------------------------------------
// Filianore - Play Animation
//----------------------------------------
Event(15115201, Restart, function() {
    IfCharacterBackreadStatus(MAIN, 5110200, true, ComparisonType.Equal, 1);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(5110200, 30000, true, false, true, 0, 1);
});

//----------------------------------------
// Mad Pilgrim - Handle State
//----------------------------------------
Event(15115300, Restart, function() {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 15110801);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 15110300);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, PASS, AND_01);
    ChangeCharacterEnableState(5110300, Disabled);
    SetCharacterBackreadState(5110300, true);
    SetCharacterAnimationState(5110300, Disabled);
    EndUnconditionally(EventEndType.End);
    Label0();
    SetCharacterTalkRange(5110300, 100);
    SetEventFlag(75110200, OFF);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 15110800);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 5110300, 5112300, 1);
    IfCharacterDeadalive(OR_01, 5110300, DeathState.Dead, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    IfCharacterDeadalive(AND_01, 5110300, DeathState.Dead, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(1, PASS, AND_01);
    ForceCharacterDeath(5110300, false);
    SetEventFlag(15110300, ON);
});

//----------------------------------------
// Slave Knight Gael Kill
//----------------------------------------
Event(15115800, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15110800);
    IfCharacterHPRatio(AND_01, 5110800, ComparisonType.Equal, 0, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeSeconds(2.67);
    PlaySE(5110800, SoundType.s_SFX, 777777777);
    WaitFixedTimeSeconds(3);
    HandleBossDefeatAndDisplayBanner(5110800, TextBannerType.HeirofFireDestroyed);
    DeleteMapSFX(5113820, true);
    DeleteMapSFX(5113821, true);
    DeleteMapSFX(5113822, true);
    DeleteMapSFX(5113823, true);
    SetEventFlag(15110800, ON);
    SetEventFlag(6327, ON);
    SetEventFlag(9327, ON);
    InitializeCommonEvent(20020000, 25001024, 25002024, 800300030, 800300040, 120220, 121220); // Boss Kill
});

//----------------------------------------
// Slave Knight Gael - Boss Start
//----------------------------------------
Event(15115810, Restart, function() {
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 15110800);
    ChangeCharacterEnableState(5115800, Disabled);
    SetCharacterAnimationState(5115800, Disabled);
    ForceCharacterDeath(5115800, false);
    DeleteMapSFX(5113820, false);
    DeleteMapSFX(5113821, false);
    DeleteMapSFX(5113822, false);
    DeleteMapSFX(5113823, false);
    DeleteMapSFX(5113830, false);
    DeleteMapSFX(5113831, false);
    DeleteMapSFX(5113832, false);
    DeleteMapSFX(5113833, false);
    DeactivateObject(5116820, Disabled);
    DeactivateObject(5116821, Enabled);
    EndUnconditionally(EventEndType.End);
    
    Label0();
    DeleteMapSFX(5113820, false);
    DeleteMapSFX(5113821, false);
    DeleteMapSFX(5113822, false);
    DeleteMapSFX(5113823, false);
    DeleteMapSFX(5113830, false);
    DeleteMapSFX(5113831, false);
    DeleteMapSFX(5113832, false);
    DeleteMapSFX(5113833, false);
    DeactivateObject(5116820, Enabled);
    DeactivateObject(5116821, Disabled);
    SetCharacterAIState(5115800, Disabled);
    ChangeCharacterEnableState(5110801, Disabled);
    SetCharacterAnimationState(5110801, Disabled);
    SetCharacterAnimationState(5110800, Disabled);
    IfCharacterType(OR_15, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterInvadeType(OR_15, 10000, 7, ComparisonType.Equal, 1);
    IfCharacterInvadeType(OR_15, 10000, 21, ComparisonType.Equal, 1);
    IfCharacterInvadeType(OR_15, 10000, 4, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, OR_15);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 15110801);
    WarpCharacterAndCopyFloor(5110801, TargetEntityType.Area, 5112804, -1, 5110801);
    DeactivateObject(5111810, Disabled);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_09, false);
    IfEntityInoutsideRadiusOfEntity(AND_09, InsideOutsideState.Inside, 10000, 5110801, 120, 1);
    IfInoutsideArea(AND_09, InsideOutsideState.Inside, 10000, 5112801, 1);
    IfEventFlag(AND_09, OFF, TargetEventFlagType.EventFlag, 15115852);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfDamageType(OR_01, 5110801, -1, DamageType.Unspecified);
    IfConditionGroup(MAIN, PASS, OR_01);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SendInvadingPhantomsHome(0);
    SkipIfMultiplayerState(2, MultiplayerState.TryingtoCreateSession);
    PlayCutsceneAndWarpPlayer(51010005, CutscenePlayMode.SkippableWithFadeOut, 5112802, 51, 1, 10000);
    SkipUnconditionally(7);
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0);
    PlayCutsceneAndWarpPlayer(51010005, CutscenePlayMode.UnskippableWithFadeOut, 5112802, 51, 1, 10000);
    SkipUnconditionally(4);
    SkipIfPlayerInoutsideArea(2, InsideOutsideState.Inside, 10000, 5112815);
    PlayCutsceneToPlayer(51010005, CutscenePlayMode.Unskippable, 10000);
    SkipUnconditionally(1);
    PlayCutsceneAndWarpPlayer(51010005, CutscenePlayMode.UnskippableWithFadeOut, 5112816, 51, 1, 10000);
    WaitFixedTimeFrames(1);
    GotoUnconditionally(Label.LABEL2);
    
    Label1();
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 15115805);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 5112800, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SendInvadingPhantomsHome(0);
    
    Label2();
    DeactivateObject(5111810, Enabled);
    ChangeCharacterEnableState(5110801, Enabled);
    SetCharacterAnimationState(5110801, Enabled);
    SetCharacterAIState(5110801, Enabled);
    SetNetworkUpdateRate(5110801, true, CharacterUpdateFrequency.AlwaysUpdate);
    ForceAnimationPlayback(5110801, 3035, false, false, false, 0, 1);
    CreateReferredDamagePair(5110801, 5110800);
    SetCharacterHPBarDisplay(5110801, Disabled);
    DisplayBossHealthBar(Enabled, 5110800, 0, 906200);
    SetNetworkconnectedEventFlag(15110801, ON);
    InitializeCommonEvent(20020123, 0); // Boss Start
});

//----------------------------------------
// Slave Knight Gael - 2nd Phase Transition
//----------------------------------------
Event(15115811, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15110800);
    IfCharacterHPRatio(OR_01, 5110800, ComparisonType.Less, 0.65, ComparisonType.Equal, 1);
    IfCharacterHPRatio(OR_01, 5110801, ComparisonType.Equal, 0, ComparisonType.Equal, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfConditionGroup(MAIN, PASS, AND_01);
    GotoIfMultiplayerState(Label.LABEL1, MultiplayerState.TryingtoCreateSession);
    PlayCutsceneChangeMapCeremonyAndWarpPlayer(51010010, CutscenePlayMode.SkippableWithFadeOut, 10, 1, 5112805, 51, 1, 10000);
    GotoUnconditionally(Label.LABEL9);
    Label1();
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL3, true);
    IfCharacterHPValue(AND_02, 10000, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL2, PASS, AND_02);
    PlayCutsceneChangeMapCeremonyAndWarpPlayer(51010010, CutscenePlayMode.UnskippableWithFadeOut, 10, 1, 5112805, 51, 1, 10000);
    GotoUnconditionally(Label.LABEL9);
    Label2();
    PlayCutsceneToPlayerAndChangeCurrentMapCeremony(51010010, CutscenePlayMode.UnskippableWithFadeOut, 10, 1, 10000);
    GotoUnconditionally(Label.LABEL9);
    Label3();
    GotoIfPlayerInoutsideArea(Label.LABEL4, InsideOutsideState.Inside, 10000, 5112810);
    IfCharacterHPValue(AND_04, 10000, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL4, PASS, AND_04);
    PlayCutsceneChangeMapCeremonyAndWarpPlayer(51010010, CutscenePlayMode.Unskippable, 10, 1, 5112806, 51, 1, 10000);
    GotoUnconditionally(Label.LABEL9);
    Label4();
    PlayCutsceneToPlayerAndChangeCurrentMapCeremony(51010010, CutscenePlayMode.Unskippable, 10, 1, 10000);
    Label9();
    WaitFixedTimeFrames(1);
    ChangeCharacterEnableState(5110801, Disabled);
    SetCharacterAnimationState(5110801, Disabled);
    WarpCharacterAndCopyFloor(5110800, TargetEntityType.Area, 5112807, -1, 5110800);
    ChangeCharacterEnableState(5110800, Enabled);
    SetCharacterAnimationState(5110800, Enabled);
    SetCharacterAIState(5110800, Enabled);
    SetNetworkUpdateRate(5110800, true, CharacterUpdateFrequency.AlwaysUpdate);
    ForceAnimationPlayback(5110800, 3037, false, false, false, 0, 1);
    SetEventFlag(15115802, ON);
    DeactivateObject(5116820, Disabled);
    DeactivateObject(5116821, Enabled);
    SpawnMapSFX(5113830);
    SpawnMapSFX(5113831);
    SpawnMapSFX(5113832);
    SpawnMapSFX(5113833);
});

//----------------------------------------
// Slave Knight Gael - 2nd Phase VFX Handler
//----------------------------------------
Event(15115812, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15110800);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 15115802);
    IfCharacterHasSpeffect(AND_01, 5110800, 16207, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(15115803, ON);
    DeleteMapSFX(5113830, true);
    DeleteMapSFX(5113831, true);
    DeleteMapSFX(5113832, true);
    DeleteMapSFX(5113833, true);
    SpawnMapSFX(5113820);
    SpawnMapSFX(5113821);
    SpawnMapSFX(5113822);
    SpawnMapSFX(5113823);
});

//----------------------------------------
// Handle AI State in Filianore's temple area
//----------------------------------------
Event(15115847, Restart, function() {
    SetNetworkSyncState(Disabled);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15110800);
    SetSpeffect(10000, 16189);
    WaitFixedTimeSeconds(0.3);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 5112830, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    ClearSpeffect(10000, 16189);
    WaitFixedTimeSeconds(0.3);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 5112830, 1);
    IfConditionGroup(MAIN, PASS, AND_02);
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------
// Slave Knight Gael - Fogwall Handler
//----------------------------------------
Event(15115848, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    SetNetworkSyncState(Disabled);
    DeactivateObject(X4_4, Disabled);
    DeleteObjectfollowingSFX(X4_4, true);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, X12_4);
    IfParameterComparison(OR_01, ComparisonType.Equal, X12_4, 0);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, true);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, X12_4);
    IfParameterComparison(OR_02, ComparisonType.Equal, X12_4, 0);
    IfConditionGroup(AND_02, PASS, OR_02);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, X0_4);
    IfMultiplayerState(OR_03, MultiplayerState.TryingtoCreateSession);
    IfMultiplayerState(OR_03, MultiplayerState.TryingtoJoinSession);
    IfConditionGroup(AND_03, PASS, OR_03);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, X0_4);
    IfConditionGroup(OR_04, PASS, AND_01);
    IfConditionGroup(OR_04, PASS, AND_02);
    IfConditionGroup(OR_04, PASS, AND_03);
    IfConditionGroup(MAIN, PASS, OR_04);
    DeactivateObject(X4_4, Enabled);
    DeleteObjectfollowingSFX(X4_4, true);
    CreateObjectfollowingSFX(X4_4, 101, X8_4);
    IfEventFlag(OR_11, ON, TargetEventFlagType.EventFlag, X12_4);
    IfParameterComparison(OR_11, ComparisonType.Equal, X12_4, 0);
    IfConditionGroup(AND_11, PASS, OR_11);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_11, true);
    IfEventFlag(OR_12, ON, TargetEventFlagType.EventFlag, X12_4);
    IfParameterComparison(OR_12, ComparisonType.Equal, X12_4, 0);
    IfConditionGroup(AND_12, PASS, OR_12);
    IfEventFlag(AND_12, OFF, TargetEventFlagType.EventFlag, X0_4);
    IfMultiplayerState(OR_13, MultiplayerState.TryingtoCreateSession);
    IfMultiplayerState(OR_13, MultiplayerState.TryingtoJoinSession);
    IfConditionGroup(AND_13, PASS, OR_13);
    IfEventFlag(AND_13, ON, TargetEventFlagType.EventFlag, X0_4);
    IfConditionGroup(AND_14, FAIL, AND_11);
    IfConditionGroup(AND_14, FAIL, AND_12);
    IfConditionGroup(AND_14, FAIL, AND_13);
    IfConditionGroup(MAIN, PASS, AND_14);
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------
// Slave Knight Gael - Setup
//----------------------------------------
Event(15115849, Restart, function() {
    // Boss - Enter Boss Room 
    InitializeCommonEvent(20005800, 15110800, 5111800, 5112800, 15115805, 5111800, 5115800, 15110801, 0);
    
    // Slave Knight Gael - Fogwall Handler
    InitializeEvent(0, 15115895, 15110800, 5111800, 5112800, 15115805, 5111800, 15115806, 15110801, 0, 5112810);
    
    // Boss Sound
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 15110801);
    InitializeCommonEvent(20001838, 15110800, 15115805, 15115806, 15115810, 5114801, 5114802, 5114803, 15115802, 15115803);
    SkipUnconditionally(1);
    InitializeCommonEvent(20005833, 15110800, 15115805, 15115806, 5112800, 5114801, 5114802, 5114803, 15115802, 15115803);
    
    // Slave Knight Gael - Fogwall Handler
    InitializeEvent(0, 15115848, 15110800, 5111800, 4, 15110801);
    
    // Boss - Enter Fogwall
    InitializeCommonEvent(20005810, 15110800, 5111800, 5112800, 10000);
});

//----------------------------------------
// Shira - Handle Flags
//----------------------------------------
Event(15115850, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15110850);
    IfCharacterDeadalive(AND_01, 5110850, DeathState.Dead, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(15110850, ON);
    SetEventFlag(65100604, ON);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetEventFlag(15115852, OFF);
});

//----------------------------------------
// Shira - Handle Spawn State
//----------------------------------------
Event(15115860, Restart, function() {
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 15110850);
    ChangeCharacterEnableState(5110850, Disabled);
    SetCharacterAnimationState(5110850, Disabled);
    ForceCharacterTreasure(5110850);
    SetCharacterBackreadState(5110850, true);
    EndUnconditionally(EventEndType.End);
    Label0();
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0);
    SetEventFlag(15115851, OFF);
    SetEventFlag(15115852, OFF);
    SetCharacterAIState(5110850, Disabled);
    ChangeCharacterEnableState(5110850, Disabled);
    SetCharacterBackreadState(5110850, true);
    SetCharacterAnimationState(5110850, Disabled);
    SetCharacterTalkRange(5110850, 100);
    SetEventFlag(75110150, OFF);
    IfCharacterType(OR_15, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterInvadeType(OR_15, 10000, 7, ComparisonType.Equal, 1);
    IfCharacterInvadeType(OR_15, 10000, 21, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, OR_15);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 15115851);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 15110800);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 15110801);
    IfEventFlag(AND_04, OFF, TargetEventFlagType.EventFlag, 15110801);
    IfConditionGroup(OR_03, PASS, AND_03);
    IfConditionGroup(OR_03, PASS, AND_04);
    IfConditionGroup(AND_09, PASS, OR_03);
    IfEntityInoutsideRadiusOfEntity(AND_09, InsideOutsideState.Inside, 10000, 5110850, 60, 1);
    IfInoutsideArea(AND_09, InsideOutsideState.Inside, 10000, 5112851, 1);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_09, false);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfDamageType(OR_01, 5102850, -1, DamageType.Unspecified);
    IfConditionGroup(MAIN, PASS, OR_01);
    GotoUnconditionally(Label.LABEL2);
    Label1();
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 15115855);
    IfConditionGroup(MAIN, PASS, AND_01);
    Label2();
    SetEventFlag(15115851, ON);
    SetEventFlag(15115852, ON);
    ChangeCharacterEnableState(5110850, Enabled);
    SetCharacterBackreadState(5110850, false);
    SetCharacterAnimationState(5110850, Enabled);
    SetNetworkUpdateRate(5110850, true, CharacterUpdateFrequency.AlwaysUpdate);
    ActivateMultiplayerdependantBuffs(5110850);
    SetCharacterAIState(5110850, Enabled);
    ForceAnimationPlayback(5110850, 63010, false, false, false, 0, 1);
    SetEventFlag(15115855, ON);
});

//----------------------------------------
// Unused
//----------------------------------------
Event(15115861, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15110850);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15110801);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 15115852);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 15110801);
    IfConditionGroup(MAIN, PASS, AND_01);
    ForceAnimationPlayback(5110850, 91030, false, false, false, 0, 1);
    WaitFixedTimeSeconds(2);
    ChangeCharacterEnableState(5110850, Disabled);
    SetCharacterAnimationState(5110850, Disabled);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 15110800);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 5112850, 1);
    IfConditionGroup(MAIN, PASS, AND_02);
    ChangeCharacterEnableState(5110850, Enabled);
    SetCharacterAnimationState(5110850, Enabled);
    WarpCharacterAndCopyFloor(5110850, TargetEntityType.Area, 5112852, -1, 5110850);
    RequestCharacterAnimationReset(5110850, Interpolation.Interpolated);
    ForceAnimationPlayback(5110850, 63010, false, false, false, 0, 1);
});

//----------------------------------------
// Shira - Fogwall Handler
//----------------------------------------
Event(15115888, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    SetNetworkSyncState(Disabled);
    DeactivateObject(X4_4, Disabled);
    DeleteObjectfollowingSFX(X4_4, true);
    EndUnconditionally(EventEndType.End);
    IfEventFlag(OR_01, OFF, TargetEventFlagType.EventFlag, X12_4);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, X24_4);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, true);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, X16_4);
    IfParameterComparison(OR_02, ComparisonType.Equal, X16_4, 0);
    IfConditionGroup(AND_02, PASS, OR_02);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, X12_4);
    IfEventFlag(OR_03, ON, TargetEventFlagType.EventFlag, X24_4);
    IfParameterComparison(OR_03, ComparisonType.Equal, X24_4, 0);
    IfConditionGroup(AND_03, PASS, OR_03);
    IfEventFlag(AND_03, OFF, TargetEventFlagType.EventFlag, X20_4);
    IfMultiplayerState(OR_04, MultiplayerState.TryingtoCreateSession);
    IfMultiplayerState(OR_04, MultiplayerState.TryingtoJoinSession);
    IfConditionGroup(AND_04, PASS, OR_04);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, X0_4);
    IfConditionGroup(OR_05, PASS, AND_01);
    IfConditionGroup(OR_05, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_05);
    DeactivateObject(X4_4, Enabled);
    DeleteObjectfollowingSFX(X4_4, true);
    CreateObjectfollowingSFX(X4_4, 101, X8_4);
    IfEventFlag(OR_11, OFF, TargetEventFlagType.EventFlag, X12_4);
    IfEventFlag(OR_11, ON, TargetEventFlagType.EventFlag, X24_4);
    IfConditionGroup(AND_11, PASS, OR_11);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_11, true);
    IfEventFlag(OR_12, ON, TargetEventFlagType.EventFlag, X16_4);
    IfParameterComparison(OR_12, ComparisonType.Equal, X16_4, 0);
    IfConditionGroup(AND_12, PASS, OR_12);
    IfEventFlag(AND_12, OFF, TargetEventFlagType.EventFlag, X12_4);
    IfEventFlag(OR_13, ON, TargetEventFlagType.EventFlag, X24_4);
    IfParameterComparison(OR_13, ComparisonType.Equal, X24_4, 0);
    IfConditionGroup(AND_13, PASS, OR_13);
    IfEventFlag(AND_13, OFF, TargetEventFlagType.EventFlag, X20_4);
    IfMultiplayerState(OR_14, MultiplayerState.TryingtoCreateSession);
    IfMultiplayerState(OR_14, MultiplayerState.TryingtoJoinSession);
    IfConditionGroup(AND_14, PASS, OR_14);
    IfEventFlag(AND_14, ON, TargetEventFlagType.EventFlag, X0_4);
    IfConditionGroup(AND_15, FAIL, AND_11);
    IfConditionGroup(AND_15, FAIL, AND_12);
    IfConditionGroup(MAIN, PASS, AND_15);
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------
// Shira - Setup
//----------------------------------------
Event(15115889, Restart, function() {
    // Shira - Fogwall Handler
    InitializeEvent(0, 15115888, 15110890, 5111850, 2, 15110850, 15115851, 15110800, 15110801);
    
    // Shira - Enter Fogwall
    InitializeCommonEvent(20005810, 15110890, 5111850, 5112850, 10000);
});

//----------------------------------------
// Flag Handler - Gael + Shria dead
//----------------------------------------
Event(15115890, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15110890);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 15110800);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 15110850);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(15110890, ON);
});

//----------------------------------------
// Handle ? State
//----------------------------------------
Event(15115891, Default, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    ClearSpeffect(10000, 4700);
    IfPlayerInoutMap(MAIN, true, 51, 1);
    SetSpeffect(10000, 4700);
});

//----------------------------------------
// Slave Knight Gael - Fogwall Handler
//----------------------------------------
Event(15115895, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    SetNetworkSyncState(Disabled);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, X0_4);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetEventFlag(X12_4, OFF);
    GotoIfComparison(Label.LABEL0, ComparisonType.Equal, X24_4, 0);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, X24_4);
    SkipIfComparison(1, ComparisonType.Equal, X28_4, 0);
    IfInoutsideArea(OR_09, InsideOutsideState.Inside, 10000, X28_4, 1);
    IfEventFlag(OR_09, ON, TargetEventFlagType.EventFlag, X24_4);
    IfConditionGroup(AND_09, PASS, OR_09);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_09, true);
    IfCharacterType(AND_09, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_09);
    IfInoutsideArea(AND_15, InsideOutsideState.Inside, 10000, X32_4, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, PASS, AND_15);
    GotoUnconditionally(Label.LABEL1);
    Label0();
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, X0_4);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X12_4);
    IfCharacterType(AND_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfActionButtonInArea(AND_01, X16_4, X4_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    RotateCharacter(10000, X8_4, 60060, true);
    IfCharacterType(AND_02, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, X8_4, 1);
    IfElapsedSeconds(OR_01, 3);
    IfConditionGroup(OR_02, PASS, OR_01);
    IfConditionGroup(AND_02, PASS, OR_02);
    IfConditionGroup(MAIN, PASS, AND_02);
    EndIfConditionGroupStateCompiled(EventEndType.Restart, PASS, OR_01);
    Label1();
    SetEventFlag(X20_4, ON);
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------
// Unused
//----------------------------------------
Event(15115896, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    SetNetworkSyncState(Disabled);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, false);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, true);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X0_4);
    IfMultiplayerState(OR_01, MultiplayerState.TryingtoCreateSession);
    IfMultiplayerState(OR_01, MultiplayerState.TryingtoJoinSession);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfActionButtonInArea(AND_01, X12_4, X4_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    RotateCharacter(10000, X8_4, 60060, true);
    EndUnconditionally(EventEndType.Restart);
});

//----------------------------------------
// Unused
//----------------------------------------
Event(15115700, Default, function() {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1835, 1839);
    BatchSetNetworkconnectedEventFlags(1835, 1839, OFF);
    SetNetworkconnectedEventFlag(1835, ON);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1836);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70001074);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1835, 1839, OFF);
    SetNetworkconnectedEventFlag(1835, ON);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1820, 1834);
    BatchSetNetworkconnectedEventFlags(1820, 1834, OFF);
    SetNetworkconnectedEventFlag(1820, ON);
    GotoIfEventFlag(Label.LABEL9, OFF, TargetEventFlagType.EventFlag, 1835);
    SkipIfBatchEventFlags(4, LogicalOperationType.AllOFF, TargetEventFlagType.EventFlag, 1820, 1822);
    BatchSetNetworkconnectedEventFlags(1820, 1834, OFF);
    SetNetworkconnectedEventFlag(1823, ON);
    BatchSetNetworkconnectedEventFlags(1835, 1839, OFF);
    SetNetworkconnectedEventFlag(1837, ON);
    Label9();
    SetEventFlag(70001074, OFF);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 1838);
    SetEventFlag(75110150, OFF);
    Label10();
});

//----------------------------------------
// Crown of Filianore - Puzzle
//----------------------------------------
Event(15115110, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 55110800);
    
    IfCharacterHasSpeffect(AND_01, 10000, 12518, true, ComparisonType.Equal, 1); // Prayer gesture
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 5112830, 1);
    WaitForConditionGroupState(PASS, AND_01);
    
    AwardItemLot(5110800);
});

// ----------------------------------------
// Fallen Abomination
// ----------------------------------------
Event(15115000, Restart, function(X0_4) { 
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterAnimationState(X0_4, Disabled);
    SetCharacterAIState(X0_4, Disabled);
    
    // End if Gael hasn't been killed
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, 15110800);
    
    // Spawn the Abomination once Gael has been defeated
    ChangeCharacterEnableState(X0_4, Enabled);
    SetCharacterAnimationState(X0_4, Enabled);
    SetCharacterAIState(X0_4, Enabled);
});

// ----------------------------------------
// Modifiers
// ----------------------------------------
Event(15116000, Default, function() { 
    // NG+
    InitializeCommonEvent(20008001, 5115775, 1);
    InitializeCommonEvent(20008001, 5115776, 2);
    InitializeCommonEvent(20008001, 5115777, 3);
    
    // Company of Champions
    InitializeCommonEvent(20081020, 5115760, 160101502, 160101503); // I
    InitializeCommonEvent(20081020, 5115760, 160101512, 160101513); // II
    InitializeCommonEvent(20081020, 5115760, 160101522, 160101523); // III
    InitializeCommonEvent(20081020, 5115760, 160101532, 160101533); // IV
    InitializeCommonEvent(20081020, 5115760, 160101542, 160101543); // V
    
    // Curses
    InitializeCommonEvent(20081010, 5115760, 250001020, 25000400); // Curse of Pride - 10%
    InitializeCommonEvent(20081010, 5115760, 250001021, 25000401); // Curse of Pride - 20%
    InitializeCommonEvent(20081010, 5115760, 250001022, 25000402); // Curse of Pride - 30%
    InitializeCommonEvent(20081010, 5115760, 250001023, 25000403); // Curse of Pride - 40%
    InitializeCommonEvent(20081010, 5115760, 250001024, 25000404); // Curse of Pride - 50%
    InitializeCommonEvent(20081010, 5115760, 250001025, 25000405); // Curse of Pride - 60%
    InitializeCommonEvent(20081010, 5115760, 250001026, 25000406); // Curse of Pride - 70%
    InitializeCommonEvent(20081010, 5115760, 250001027, 25000407); // Curse of Pride - 80%
    InitializeCommonEvent(20081010, 5115760, 250001028, 25000408); // Curse of Pride - 90%
    InitializeCommonEvent(20081010, 5115760, 250001029, 25000409); // Curse of Pride - 100%

    InitializeCommonEvent(20081010, 5115760, 250001120, 25000410); // Curse of Fortitude - 5%
    InitializeCommonEvent(20081010, 5115760, 250001121, 25000411); // Curse of Fortitude - 10%
    InitializeCommonEvent(20081010, 5115760, 250001122, 25000412); // Curse of Fortitude - 15%
    InitializeCommonEvent(20081010, 5115760, 250001123, 25000413); // Curse of Fortitude - 20%
    InitializeCommonEvent(20081010, 5115760, 250001124, 25000414); // Curse of Fortitude - 25%
    InitializeCommonEvent(20081010, 5115760, 250001125, 25000415); // Curse of Fortitude - 30%
    InitializeCommonEvent(20081010, 5115760, 250001126, 25000416); // Curse of Fortitude - 35%
    InitializeCommonEvent(20081010, 5115760, 250001127, 25000417); // Curse of Fortitude - 40%
    InitializeCommonEvent(20081010, 5115760, 250001128, 25000418); // Curse of Fortitude - 45%
    InitializeCommonEvent(20081010, 5115760, 250001129, 25000419); // Curse of Fortitude - 50%
    
    InitializeCommonEvent(20081010, 5115760, 250001320, 25000420); // Curse of Vitality - 10
    InitializeCommonEvent(20081010, 5115760, 250001321, 25000421); // Curse of Vitality - 20
    InitializeCommonEvent(20081010, 5115760, 250001322, 25000422); // Curse of Vitality - 30
    InitializeCommonEvent(20081010, 5115760, 250001323, 25000423); // Curse of Vitality - 40
    InitializeCommonEvent(20081010, 5115760, 250001324, 25000424); // Curse of Vitality - 50
    InitializeCommonEvent(20081010, 5115760, 250001325, 25000425); // Curse of Vitality - 60
    InitializeCommonEvent(20081010, 5115760, 250001326, 25000426); // Curse of Vitality - 70
    InitializeCommonEvent(20081010, 5115760, 250001327, 25000427); // Curse of Vitality - 80
    InitializeCommonEvent(20081010, 5115760, 250001328, 25000428); // Curse of Vitality - 90
    InitializeCommonEvent(20081010, 5115760, 250001329, 25000429); // Curse of Vitality - 100
    
    InitializeCommonEvent(20081010, 5115760, 250001420, 25000430); // Curse of Wrath - 10
    InitializeCommonEvent(20081010, 5115760, 250001421, 25000431); // Curse of Wrath - 20
    InitializeCommonEvent(20081010, 5115760, 250001422, 25000432); // Curse of Wrath - 30
    InitializeCommonEvent(20081010, 5115760, 250001423, 25000433); // Curse of Wrath - 40
    InitializeCommonEvent(20081010, 5115760, 250001424, 25000434); // Curse of Wrath - 50
    InitializeCommonEvent(20081010, 5115760, 250001425, 25000435); // Curse of Wrath - 60
    InitializeCommonEvent(20081010, 5115760, 250001426, 25000436); // Curse of Wrath - 70
    InitializeCommonEvent(20081010, 5115760, 250001427, 25000437); // Curse of Wrath - 80
    InitializeCommonEvent(20081010, 5115760, 250001428, 25000438); // Curse of Wrath - 90
    InitializeCommonEvent(20081010, 5115760, 250001429, 25000439); // Curse of Wrath - 100
    
    InitializeCommonEvent(20081000, 5115750, 25000440);             // Curse of Attraction
    InitializeCommonEvent(20081010, 5115760, 250001920, 25000480);  // Curse of Frailty
    InitializeCommonEvent(20081010, 5115770, 250002220, 25000510);  // Curse of Valor
});

// ----------------------------------------
// Treasures
// ----------------------------------------
Event(15116100, Default, function() { 
    // Crown of Filianore
    InitializeEvent(0, 15115110, 0); 
});

// ----------------------------------------
// Phantoms
// ----------------------------------------
Event(15117000, Default, function() {
    
});
    
// ----------------------------------------
// Spell Summons
// ----------------------------------------
Event(15117100, Default, function() {
    // Skeleton
    InitializeCommonEvent(20080000, 5110750); // Setup
    InitializeCommonEvent(20080001, 5110750); // Bonfire Rest
    InitializeCommonEvent(20080002, 5110750); // Tools
    InitializeCommonEvent(20080003, 5110750); // Effects
    InitializeCommonEvent(20080004, 5110750, 160760000, 160760215, 51, 1); // Summoning
    
    // Hollow
    InitializeCommonEvent(20080000, 5110751); // Setup
    InitializeCommonEvent(20080001, 5110751); // Bonfire Rest
    InitializeCommonEvent(20080002, 5110751); // Tools
    InitializeCommonEvent(20080003, 5110751); // Effects
    InitializeCommonEvent(20080004, 5110751, 160760001, 160760215, 51, 1); // Summoning
    
    // Hound
    InitializeCommonEvent(20080000, 5110752); // Setup
    InitializeCommonEvent(20080001, 5110752); // Bonfire Rest
    InitializeCommonEvent(20080002, 5110752); // Tools
    InitializeCommonEvent(20080003, 5110752); // Effects
    InitializeCommonEvent(20080004, 5110752, 160760002, 160760215, 51, 1); // Summoning
    
    // Carthus Warrior
    InitializeCommonEvent(20080000, 5110753); // Setup
    InitializeCommonEvent(20080001, 5110753); // Bonfire Rest
    InitializeCommonEvent(20080002, 5110753); // Tools
    InitializeCommonEvent(20080003, 5110753); // Effects
    InitializeCommonEvent(20080004, 5110753, 160760003, 160760215, 51, 1); // Summoning
    
    // Lothric Knight
    InitializeCommonEvent(20080000, 5110754); // Setup
    InitializeCommonEvent(20080001, 5110754); // Bonfire Rest
    InitializeCommonEvent(20080002, 5110754); // Tools
    InitializeCommonEvent(20080003, 5110754); // Effects
    InitializeCommonEvent(20080004, 5110754, 160760004, 160760215, 51, 1); // Summoning
    
    // Lycanthrope
    InitializeCommonEvent(20080000, 5110755); // Setup
    InitializeCommonEvent(20080001, 5110755); // Bonfire Rest
    InitializeCommonEvent(20080002, 5110755); // Tools
    InitializeCommonEvent(20080003, 5110755); // Effects
    InitializeCommonEvent(20080004, 5110755, 160760005, 160760215, 51, 1); // Summoning
    
    // Black Knight
    InitializeCommonEvent(20080000, 5110756); // Setup
    InitializeCommonEvent(20080001, 5110756); // Bonfire Rest
    InitializeCommonEvent(20080002, 5110756); // Tools
    InitializeCommonEvent(20080003, 5110756); // Effects
    InitializeCommonEvent(20080004, 5110756, 160760006, 160760215, 51, 1); // Summoning
    
    // Abyss Watcher
    InitializeCommonEvent(20080000, 5110757); // Setup
    InitializeCommonEvent(20080001, 5110757); // Bonfire Rest
    InitializeCommonEvent(20080002, 5110757); // Tools
    InitializeCommonEvent(20080003, 5110757); // Effects
    InitializeCommonEvent(20080004, 5110757, 160760007, 160760215, 51, 1); // Summoning
    
    // Stone Gargoyle
    InitializeCommonEvent(20080000, 5110758); // Setup
    InitializeCommonEvent(20080001, 5110758); // Bonfire Rest
    InitializeCommonEvent(20080002, 5110758); // Tools
    InitializeCommonEvent(20080003, 5110758); // Effects
    InitializeCommonEvent(20080004, 5110758, 160760008, 160760215, 51, 1); // Summoning
    
    // Skeleton Unique
    InitializeCommonEvent(20080010, 5110750);
    InitializeCommonEvent(20080011, 5110750);
    InitializeCommonEvent(20080012, 5110750);
    
    // Hollow Unique
    InitializeCommonEvent(20080020, 5110751);
    InitializeCommonEvent(20080021, 5110751);
    InitializeCommonEvent(20080022, 5110751);
    
    // Hound Unique
    InitializeCommonEvent(20080030, 5110752);
    InitializeCommonEvent(20080031, 5110752);
    InitializeCommonEvent(20080032, 5110752);
    
    // Warrior Unique
    InitializeCommonEvent(20080040, 5110753);
    InitializeCommonEvent(20080041, 5110753);
    InitializeCommonEvent(20080042, 5110753);
    
    // Lothric Knight Unique
    InitializeCommonEvent(20080050, 5110754);
    InitializeCommonEvent(20080051, 5110754);
    InitializeCommonEvent(20080052, 5110754);
    
    // Lycanthrope Unique
    InitializeCommonEvent(20080060, 5110755);
    InitializeCommonEvent(20080061, 5110755);
    InitializeCommonEvent(20080062, 5110755);
    
    // Black Knight Unique
    InitializeCommonEvent(20080070, 5110756);
    InitializeCommonEvent(20080071, 5110756);
    InitializeCommonEvent(20080072, 5110756);
    
    // Abyss Watcher Unique
    InitializeCommonEvent(20080080, 5110757);
    InitializeCommonEvent(20080081, 5110757);
    InitializeCommonEvent(20080082, 5110757);
   
    // Gargoyle Unique
    InitializeCommonEvent(20080090, 5110758);
    InitializeCommonEvent(20080091, 5110758);
    InitializeCommonEvent(20080092, 5110758);
});
