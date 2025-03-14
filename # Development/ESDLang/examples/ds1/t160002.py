# -*- coding: utf-8 -*-
def t160002_1():
    """ State 0,25 """
    Label('L0')
    while True:
        DebugEvent('最初')
        if (GetOneLineHelpStatus() == 1 and CompareBonfireState(0) == 1 and HasDisableTalkPeriodElapsed()
            == 1 and not IsTalkingToSomeoneElse() and not CheckSelfDeath() and not IsCharacterDisabled()
            and not IsClientPlayer() and GetRelativeAngleBetweenPlayerAndSelf() <= 45 and GetDistanceToPlayer()
            <= 2):
            """ State 27 """
            Label('L1')
            DisplayOneLineHelp(-1)
        elif (GetOneLineHelpStatus() == 1 and (IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled()
              or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf() > 45 or GetDistanceToPlayer()
              > 2)):
            Goto('L1')
        elif CompareBonfireLevel(2, 0) == 1 and CompareBonfireState(1) == 1:
            break
        elif (not GetOneLineHelpStatus() and HasDisableTalkPeriodElapsed() == 1 and not IsTalkingToSomeoneElse()
              and not CheckSelfDeath() and not IsCharacterDisabled() and not IsClientPlayer() and GetRelativeAngleBetweenPlayerAndSelf()
              <= 45 and GetDistanceToPlayer() <= 2 and CompareBonfireState(1) == 1):
            """ State 28 """
            # action:10010182:Light bonfire
            DisplayOneLineHelp(10010182)
        elif (IsPlayerTalkingToMe() == 1 and GetRelativeAngleBetweenPlayerAndSelf() <= 45 and GetDistanceToPlayer()
              <= 2 and GetOneLineHelpStatus() == 1 and CompareBonfireState(1) == 1):
            """ State 26 """
            DisplayOneLineHelp(-1)
            """ State 24 """
            DebugEvent('人間性を捧げた')
            OfferHumanity()
            RequestUnlockTrophy(26)
            """ State 23 """
            ClearTalkDisabledState()
            DebugEvent('会話タイマークリア　最初')
    """ State 1 """
    while Loop('loop1'):
        DebugEvent('待機')
        SetUpdateDistance(10)
        if CompareBonfireLevel(0, 0) == 1:
            Goto('L0')
        elif (CompareBonfireState(0) == 1 and HasDisableTalkPeriodElapsed() == 1 and not IsTalkingToSomeoneElse()
              and not CheckSelfDeath() and not IsCharacterDisabled() and not IsClientPlayer() and GetRelativeAngleBetweenPlayerAndSelf()
              <= 45 and GetDistanceToPlayer() <= 3.4 and GetOneLineHelpStatus() == 1):
            """ State 3 """
            Label('L2')
            DisplayOneLineHelp(-1)
        elif (GetOneLineHelpStatus() == 1 and (IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled()
              or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf() > 45 or GetDistanceToPlayer()
              > 3.4)):
            Goto('L2')
        elif GetPlayerYDistance() > 1 and GetOneLineHelpStatus() == 1:
            """ State 48 """
            DisplayOneLineHelp(-1)
        elif (not GetOneLineHelpStatus() and HasDisableTalkPeriodElapsed() == 1 and not IsTalkingToSomeoneElse()
              and not CheckSelfDeath() and not IsCharacterDisabled() and not IsClientPlayer() and GetRelativeAngleBetweenPlayerAndSelf()
              <= 45 and GetDistanceToPlayer() <= 3.4 and CompareBonfireState(1) == 1 and GetPlayerYDistance()
              < 1):
            """ State 2 """
            # action:10010183:Rest at bonfire
            DisplayOneLineHelp(10010183)
        elif (IsPlayerTalkingToMe() == 1 and GetRelativeAngleBetweenPlayerAndSelf() <= 45 and GetDistanceToPlayer()
              <= 3.4 and GetOneLineHelpStatus() == 1 and CompareBonfireState(1) == 1):
            """ State 46 """
            StartBonfireAnimLoop()
            ClearTalkActionState()
            DisplayOneLineHelp(-1)
            ClearPlayerDamageInfo()
            SetEventState(760, 0)
            if CompareBonfireState(0) == 1:
                """ State 21 """
                Label('L3')
                ForceEndTalk(0)
                ClearTalkProgressData()
                CloseShopMessage()
                DebugEvent('リスト強制開放')
                EndBonfireKindleAnimLoop()
            elif GetDistanceToPlayer() >= 8 or GetPlayerYDistance() > 1:
                Goto('L3')
            elif CompareBonfireState(1) == 1:
                """ State 4 """
                while True:
                    ShowShopMessage(0, 0, 0)
                    DebugEvent('篝火リスト')
                    RequestSave(0)
                    # action:15000005:Leave
                    AddTalkListData(9, 15000005, -1)
                    # action:15000100:Level Up
                    AddTalkListData(1, 15000100, 11810000)
                    # action:15000111:Reinforce Weapon
                    AddTalkListData(2, 15000111, 250)
                    # action:15000112:Reinforce Armor
                    AddTalkListData(3, 15000112, 251)
                    # action:15000120:Repair Equipment
                    AddTalkListData(4, 15000120, 252)
                    # action:15000130:Attune Magic
                    AddTalkListData(5, 15000130, 719)
                    # action:15000220:Access Bottomless Box
                    AddTalkListData(10, 15000220, 258)
                    # action:15000150:Warp
                    AddTalkListData(7, 15000150, 710)
                    # action:15000150:Warp
                    AddTalkListData(12, 15000150, 717)
                    # action:10010744:Covenant
                    AddTalkListData(6, 10010744, 69696969)
                    # action:15000170:Kindle
                    AddTalkListData(8, 15000170, 11810000)
                    # action:15000270:Reverse Hollowing
                    AddTalkListData(11, 15000270, 11810000)
                    def ExitPause():
                        ClearTalkListData()
                    if CompareBonfireState(0) == 1 or IsPlayerDead() == 1:
                        Goto('L3')
                    elif HasPlayerBeenAttacked() == 1:
                        Goto('L3')
                    elif (IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled() or IsClientPlayer()
                          == 1 or GetRelativeAngleBetweenPlayerAndSelf() > 180 or GetDistanceToPlayer()
                          > 8):
                        Goto('L3')
                    elif not GetTalkListEntryResult():
                        break
                    elif GetTalkListEntryResult() == 1:
                        """ State 20 """
                        OpenSoul()
                        DebugEvent('ソウルショップ')
                        if CompareBonfireState(0) == 1 or HasPlayerBeenAttacked() == 1:
                            """ State 49 """
                            Label('L4')
                            CloseMenu()
                            DebugEvent('メッセージボックス閉じる')
                            EndBonfireKindleAnimLoop()
                            Goto('L3')
                        elif (IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled() or
                              IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf() > 120 or
                              GetDistanceToPlayer() > 8 or GetPlayerYDistance() > 1):
                            Goto('L4')
                        elif not IsMenuOpen(23):
                            pass
                    elif GetTalkListEntryResult() == 2:
                        """ State 30 """
                        OpenEnhanceShop(0)
                        DebugEvent('武器強化')
                        if CompareBonfireState(0) == 1 or HasPlayerBeenAttacked() == 1:
                            Goto('L4')
                        elif (IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled() or
                              IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf() > 120 or
                              GetDistanceToPlayer() > 8 or GetPlayerYDistance() > 1):
                            Goto('L4')
                        elif not IsMenuOpen(13):
                            pass
                    elif GetTalkListEntryResult() == 4:
                        """ State 29 """
                        OpenRepairShop()
                        DebugEvent('修理ショップ')
                        if CompareBonfireState(0) == 1 or HasPlayerBeenAttacked() == 1:
                            Goto('L4')
                        elif (IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled() or
                              IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf() > 120 or
                              GetDistanceToPlayer() > 8 or GetPlayerYDistance() > 1):
                            Goto('L4')
                        elif not IsMenuOpen(12):
                            pass
                    elif GetTalkListEntryResult() == 12:
                        """ State 31 """
                        Label('L5')
                        StartWarpMenuInit()
                        DebugEvent('ワープメニューを開く')
                        if WasWarpMenuDestinationSelected() == 1:
                            """ State 63 """
                            ForceEndTalk(0)
                            ClearTalkProgressData()
                            CloseShopMessage()
                            DebugEvent('リスト強制開放')
                            Goto('L18')
                        elif CompareBonfireState(0) == 1 or HasPlayerBeenAttacked() == 1:
                            Goto('L4')
                        elif (IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled() or
                              IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf() > 120 or
                              GetDistanceToPlayer() > 8 or GetPlayerYDistance() > 1):
                            Goto('L4')
                        elif not IsMenuOpen(36):
                            pass
                    elif GetTalkListEntryResult() == 7 and GetEventStatus(706) == 1:
                        Goto('L5')
                    elif GetTalkListEntryResult() == 7 and not GetEventStatus(706):
                        """ State 67 """
                        # action:10010712:This bonfire is cut off from the others. Cannot warp.
                        OpenGenericDialog(7, 10010712, 1, 0, 2)
                        DebugEvent('ワープできない')
                        DisplayOneLineHelp(-1)
                        if CompareBonfireState(0) == 1 or HasPlayerBeenAttacked() == 1:
                            Goto('L4')
                        elif (CompareBonfireState(0) == 1 or HasPlayerBeenAttacked() == 1 or IsPlayerDead()
                              == 1):
                            """ State 59 """
                            Label('L6')
                            ForceCloseGenericDialog()
                            ForceEndTalk(0)
                            ClearTalkProgressData()
                        elif (IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled() or
                              IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf() > 120 or
                              GetDistanceToPlayer() > 8):
                            Goto('L6')
                        elif GetGenericDialogButtonResult() == 1 and not IsGenericDialogOpen():
                            """ State 60 """
                            Label('L7')
                            ClearTalkDisabledState()
                            DebugEvent('会話タイマークリア')
                            ClearTalkActionState()
                            ForceCloseGenericDialog()
                        elif not GetGenericDialogButtonResult() and not IsGenericDialogOpen():
                            Goto('L7')
                    elif GetTalkListEntryResult() == 8:
                        """ State 32 """
                        if CompareBonfireState(0) == 1 or HasPlayerBeenAttacked() == 1:
                            Goto('L4')
                        elif GetPlayerChrType() == 8:
                            """ State 65 """
                            # action:10010725:Cannot kindle while Hollowed
                            OpenGenericDialog(7, 10010725, 1, 0, 2)
                            DebugEvent('亡者のときは注ぎ火できない')
                            DisplayOneLineHelp(-1)
                            if (CompareBonfireState(0) == 1 or HasPlayerBeenAttacked() == 1 or IsPlayerDead()
                                == 1):
                                pass
                            elif (IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled()
                                  or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf()
                                  > 120 or GetDistanceToPlayer() > 8):
                                pass
                            elif GetGenericDialogButtonResult() == 1 and not IsGenericDialogOpen():
                                """ State 43 """
                                Label('L8')
                                ClearTalkDisabledState()
                                DebugEvent('会話タイマークリア')
                                ClearTalkActionState()
                                ForceCloseGenericDialog()
                                continue
                            elif not GetGenericDialogButtonResult() and not IsGenericDialogOpen():
                                Goto('L8')
                            """ State 42 """
                            Label('L9')
                            ForceCloseGenericDialog()
                            ForceEndTalk(0)
                            ClearTalkProgressData()
                        elif GetStatus(10) <= 1:
                            """ State 40 """
                            # action:10010722:No humanity
                            OpenGenericDialog(7, 10010722, 1, 0, 2)
                            DebugEvent('人間性がない　リストから')
                            DisplayOneLineHelp(-1)
                            if (CompareBonfireState(0) == 1 or HasPlayerBeenAttacked() == 1 or IsPlayerDead()
                                == 1):
                                Goto('L9')
                            elif (IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled()
                                  or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf()
                                  > 120 or GetDistanceToPlayer() > 8):
                                Goto('L9')
                            elif GetGenericDialogButtonResult() == 1 and not IsGenericDialogOpen():
                                Goto('L8')
                            elif not GetGenericDialogButtonResult() and not IsGenericDialogOpen():
                                Goto('L8')
                        elif CompareBonfireLevel(0, 4) == 1:
                            """ State 39 """
                            # action:10010723:Cannot kindle any further
                            OpenGenericDialog(7, 10010723, 1, 0, 2)
                            DebugEvent('これ以上捧げられない　解放後')
                            DisplayOneLineHelp(-1)
                            if (CompareBonfireState(0) == 1 or HasPlayerBeenAttacked() == 1 or IsPlayerDead()
                                == 1):
                                """ State 45 """
                                Label('L10')
                                ForceCloseGenericDialog()
                                ForceEndTalk(0)
                                ClearTalkProgressData()
                            elif (IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled()
                                  or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf()
                                  > 120 or GetDistanceToPlayer() > 8):
                                Goto('L10')
                            elif GetGenericDialogButtonResult() == 1 and not IsGenericDialogOpen():
                                """ State 44 """
                                Label('L11')
                                ClearTalkDisabledState()
                                DebugEvent('会話タイマークリア')
                                ClearTalkActionState()
                                ForceCloseGenericDialog()
                            elif not GetGenericDialogButtonResult() and not IsGenericDialogOpen():
                                Goto('L11')
                        elif CompareBonfireLevel(0, 2) == 1 and not GetEventStatus(257):
                            """ State 64 """
                            # action:10010724:Cannot kindle further without the secret rite
                            OpenGenericDialog(7, 10010724, 1, 0, 2)
                            DebugEvent('これ以上捧げられない　解放前')
                            DisplayOneLineHelp(-1)
                            if (CompareBonfireState(0) == 1 or HasPlayerBeenAttacked() == 1 or IsPlayerDead()
                                == 1):
                                Goto('L10')
                            elif (IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled()
                                  or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf()
                                  > 120 or GetDistanceToPlayer() > 8):
                                Goto('L10')
                            elif GetGenericDialogButtonResult() == 1 and not IsGenericDialogOpen():
                                Goto('L11')
                            elif not GetGenericDialogButtonResult() and not IsGenericDialogOpen():
                                Goto('L11')
                        else:
                            """ State 34 """
                            # action:10010741:Offer humanity and kindle flame?
                            OpenGenericDialog(8, 10010741, 3, 4, 2)
                            if (CompareBonfireState(0) == 1 or HasPlayerBeenAttacked() == 1 or IsPlayerDead()
                                == 1):
                                """ State 37 """
                                Label('L12')
                                ForceCloseGenericDialog()
                                ForceEndTalk(0)
                                ClearTalkProgressData()
                                continue
                            elif (IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled()
                                  or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf()
                                  > 120 or GetDistanceToPlayer() > 8):
                                Goto('L12')
                            elif not GetGenericDialogButtonResult() and not IsGenericDialogOpen():
                                pass
                            elif GetGenericDialogButtonResult() == 1 and not IsGenericDialogOpen():
                                """ State 36 """
                                DebugEvent('人間性を捧げた')
                                SetEventState(760, 1)
                                OfferHumanity()
                            elif GetGenericDialogButtonResult() == 2 and not IsGenericDialogOpen():
                                """ State 35 """
                                DebugEvent('人間性を捧げない')
                            """ State 38 """
                            ClearTalkDisabledState()
                            DebugEvent('会話タイマークリア　リストへ')
                            ClearTalkActionState()
                            ForceCloseGenericDialog()
                            if not GetEventStatus(760):
                                pass
                            elif (GetDistanceToPlayer() >= 8 or HasPlayerBeenAttacked() == 1 or (IsTalkingToSomeoneElse()
                                  or CheckSelfDeath() or IsCharacterDisabled() or IsClientPlayer() ==
                                  1 or GetRelativeAngleBetweenPlayerAndSelf() > 120 or GetDistanceToPlayer()
                                  > 8)):
                                Continue('loop1')
                    elif GetTalkListEntryResult() == 10:
                        """ State 50 """
                        DebugEvent('倉庫')
                        OpenRepository()
                        if CompareBonfireState(0) == 1 or HasPlayerBeenAttacked() == 1:
                            Goto('L4')
                        elif (IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled() or
                              IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf() > 120 or
                              GetDistanceToPlayer() > 8 or GetPlayerYDistance() > 1):
                            Goto('L4')
                        elif not IsMenuOpen(26):
                            pass
                    elif GetTalkListEntryResult() == 5:
                        """ State 33 """
                        OpenMagicEquip(10000, 10099)
                        DebugEvent('魔法装備ショップ')
                        if CompareBonfireState(0) == 1 or HasPlayerBeenAttacked() == 1:
                            Goto('L4')
                        elif (IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled() or
                              IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf() > 120 or
                              GetDistanceToPlayer() > 8 or GetPlayerYDistance() > 1):
                            Goto('L4')
                        elif not IsMenuOpen(25):
                            pass
                    elif GetTalkListEntryResult() == 3:
                        """ State 47 """
                        OpenEnhanceShop(10)
                        DebugEvent('防具強化')
                        if CompareBonfireState(0) == 1 or HasPlayerBeenAttacked() == 1:
                            Goto('L4')
                        elif (IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled() or
                              IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf() > 120 or
                              GetDistanceToPlayer() > 8 or GetPlayerYDistance() > 1):
                            Goto('L4')
                        elif not IsMenuOpen(13):
                            pass
                    elif GetTalkListEntryResult() == 9:
                        break
                    elif GetTalkListEntryResult() == 11:
                        """ State 51 """
                        DebugEvent('亡者から復活する')
                        if CompareBonfireState(0) == 1 or HasPlayerBeenAttacked() == 1:
                            Goto('L4')
                        elif GetEventStatus(751) == 1:
                            """ State 68 """
                            # action:10010736:Cannot reverse Hollowing while cursed
                            OpenGenericDialog(7, 10010736, 1, 0, 2)
                            DebugEvent('呪われている')
                            DisplayOneLineHelp(-1)
                            if (CompareBonfireState(0) == 1 or HasPlayerBeenAttacked() == 1 or IsPlayerDead()
                                == 1):
                                Goto('L6')
                            elif (IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled()
                                  or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf()
                                  > 120 or GetDistanceToPlayer() > 8):
                                Goto('L6')
                            elif GetGenericDialogButtonResult() == 1 and not IsGenericDialogOpen():
                                Goto('L7')
                            elif not GetGenericDialogButtonResult() and not IsGenericDialogOpen():
                                Goto('L7')
                        elif not GetPlayerChrType():
                            """ State 57 """
                            # action:10010730:You are not Hollow
                            OpenGenericDialog(7, 10010730, 1, 0, 2)
                            DebugEvent('亡者ではない')
                            DisplayOneLineHelp(-1)
                            if (CompareBonfireState(0) == 1 or HasPlayerBeenAttacked() == 1 or IsPlayerDead()
                                == 1):
                                """ State 62 """
                                Label('L13')
                                ForceCloseGenericDialog()
                                ForceEndTalk(0)
                                ClearTalkProgressData()
                            elif (IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled()
                                  or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf()
                                  > 120 or GetDistanceToPlayer() > 8):
                                Goto('L13')
                            elif GetGenericDialogButtonResult() == 1 and not IsGenericDialogOpen():
                                """ State 61 """
                                Label('L14')
                                ClearTalkDisabledState()
                                DebugEvent('会話タイマークリア')
                                ClearTalkActionState()
                                ForceCloseGenericDialog()
                            elif not GetGenericDialogButtonResult() and not IsGenericDialogOpen():
                                Goto('L14')
                        elif GetStatus(10) <= 1:
                            """ State 58 """
                            # action:10010731:No humanity
                            OpenGenericDialog(7, 10010731, 1, 0, 2)
                            DebugEvent('人間性がない')
                            DisplayOneLineHelp(-1)
                            if (CompareBonfireState(0) == 1 or HasPlayerBeenAttacked() == 1 or IsPlayerDead()
                                == 1):
                                Goto('L6')
                            elif (IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled()
                                  or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf()
                                  > 120 or GetDistanceToPlayer() > 8):
                                Goto('L6')
                            elif GetGenericDialogButtonResult() == 1 and not IsGenericDialogOpen():
                                Goto('L7')
                            elif not GetGenericDialogButtonResult() and not IsGenericDialogOpen():
                                Goto('L7')
                        else:
                            """ State 52 """
                            # action:10010732:Offer humanity and reverse Hollowing?
                            OpenGenericDialog(8, 10010732, 3, 4, 2)
                            if (CompareBonfireState(0) == 1 or HasPlayerBeenAttacked() == 1 or IsPlayerDead()
                                == 1):
                                pass
                            elif (IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled()
                                  or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf()
                                  > 120 or GetDistanceToPlayer() > 8):
                                pass
                            elif not GetGenericDialogButtonResult() and not IsGenericDialogOpen():
                                """ State 53 """
                                Label('L15')
                                DebugEvent('人間性を捧げない')
                                """ State 56 """
                                Label('L16')
                                ClearTalkDisabledState()
                                DebugEvent('会話タイマークリア　リストへ')
                                ClearTalkActionState()
                                ForceCloseGenericDialog()
                                if True:
                                    continue
                                elif (GetDistanceToPlayer() >= 8 or HasPlayerBeenAttacked() == 1 or (IsTalkingToSomeoneElse()
                                      or CheckSelfDeath() or IsCharacterDisabled() or IsClientPlayer()
                                      == 1 or GetRelativeAngleBetweenPlayerAndSelf() > 120 or GetDistanceToPlayer()
                                      > 8)):
                                    Continue('loop1')
                            elif GetGenericDialogButtonResult() == 1 and not IsGenericDialogOpen():
                                """ State 66 """
                                SetEventState(762, 1)
                                SetEventState(764, 1)
                                if IsPlayerDead() == 1:
                                    pass
                                elif (IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled()
                                      or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf()
                                      > 120 or GetDistanceToPlayer() > 8):
                                    pass
                                elif not GetEventStatus(762):
                                    """ State 54 """
                                    DebugEvent('人間性を捧げた')
                                    PlayerRespawn()
                                    ShowGrandioseTextPresentation(3)
                                    GiveSpEffectToPlayer(25)
                                    ChangePlayerStats(10, 1, 1)
                                    if IsPlayerDead() == 1:
                                        pass
                                    elif (GetDistanceToPlayer() >= 8 or HasPlayerBeenAttacked() == 1
                                          or (IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled()
                                          or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf()
                                          > 120 or GetDistanceToPlayer() > 8)):
                                        Continue('loop1')
                                    elif not IsMenuOpen(53) and not GetEventStatus(764):
                                        Goto('L16')
                            elif GetGenericDialogButtonResult() == 2 and not IsGenericDialogOpen():
                                Goto('L15')
                            """ State 55 """
                            ForceCloseGenericDialog()
                            ForceEndTalk(0)
                            ClearTalkProgressData()
                    elif GetTalkListEntryResult() == 6:
                        """ State 5 """
                        c172()
                        DebugEvent('Open_covenant_menu')
                        if CheckActionButtonArea() == 1:
                            """ State 6 """
                            ForceCloseMenu()
                            assert GetEventStatus(4084) == 1
                            """ State 7 """
                            c175()
                            assert not CheckSpecificPersonMenuIsOpen()
                            """ State 8 """
                            if (ComparePlayerStatus(11, 0, 8) == 1 and (not GetEventStatus(11510596)
                                or not GetEventStatus(11510580))):
                                """ State 9 """
                                SetEventState(11510596, 1)
                                SetEventState(11510580, 1)
                                if (IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled()
                                    or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf()
                                    > 180 or GetDistanceToPlayer() > 8):
                                    Goto('L3')
                                elif not IsMenuOpen(63):
                                    pass
                            elif ComparePlayerStatus(11, 0, 9) == 1 and not GetEventStatus(11400596):
                                """ State 10 """
                                SetEventState(11400596, 1)
                                if (IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled()
                                    or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf()
                                    > 180 or GetDistanceToPlayer() > 8):
                                    Goto('L3')
                                elif not IsMenuOpen(63):
                                    pass
                            elif ComparePlayerStatus(11, 0, 4) == 1 and not GetEventStatus(11600594):
                                """ State 11 """
                                SetEventState(11600594, 1)
                                if (IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled()
                                    or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf()
                                    > 180 or GetDistanceToPlayer() > 8):
                                    Goto('L3')
                                elif not IsMenuOpen(63):
                                    pass
                            elif ComparePlayerStatus(11, 0, 7) == 1 and not GetEventStatus(11200592):
                                """ State 12 """
                                SetEventState(71200047, 1)
                                SetEventState(11200592, 1)
                                if (IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled()
                                    or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf()
                                    > 180 or GetDistanceToPlayer() > 8):
                                    Goto('L3')
                                elif not IsMenuOpen(63):
                                    pass
                            elif (ComparePlayerStatus(11, 0, 6) == 1 and (not GetEventStatus(11310592)
                                  or not GetEventStatus(11310580))):
                                """ State 13 """
                                SetEventState(11310592, 1)
                                SetEventState(11310580, 1)
                                if (IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled()
                                    or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf()
                                    > 180 or GetDistanceToPlayer() > 8):
                                    Goto('L3')
                                elif not IsMenuOpen(63):
                                    pass
                            elif ComparePlayerStatus(11, 0, 5) == 1 and not GetEventStatus(11320581):
                                """ State 14 """
                                SetEventState(11320592, 1)
                                SetEventState(11320581, 1)
                                if (IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled()
                                    or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf()
                                    > 180 or GetDistanceToPlayer() > 8):
                                    Goto('L3')
                                elif not IsMenuOpen(63):
                                    pass
                            elif ComparePlayerStatus(11, 0, 2) == 1:
                                """ State 15 """
                                SetEventState(11510595, 1)
                                if (IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled()
                                    or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf()
                                    > 180 or GetDistanceToPlayer() > 8):
                                    Goto('L3')
                                elif not IsMenuOpen(63):
                                    pass
                            elif ComparePlayerStatus(11, 0, 3) == 1 and not GetEventStatus(11010594):
                                """ State 16 """
                                SetEventState(11010594, 1)
                                if (IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled()
                                    or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf()
                                    > 180 or GetDistanceToPlayer() > 8):
                                    Goto('L3')
                                elif not IsMenuOpen(63):
                                    pass
                            else:
                                pass
                            """ State 18 """
                            # action:10010729:Covenant established
                            OpenGenericDialog(7, 10010729, 1, 0, 2)
                            DisplayOneLineHelp(-1)
                            if (IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled()
                                or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf() >
                                180 or GetDistanceToPlayer() > 8):
                                Goto('L3')
                            elif not GetGenericDialogButtonResult() and not IsGenericDialogOpen():
                                """ State 19 """
                                Label('L17')
                                ClearTalkActionState()
                                DisplayOneLineHelp(-1)
                                ClearPlayerDamageInfo()
                                SetEventState(760, 0)
                            elif GetGenericDialogButtonResult() == 1 and not IsGenericDialogOpen():
                                Goto('L17')
                        elif CompareBonfireState(0) == 1 or HasPlayerBeenAttacked() == 1:
                            Goto('L4')
                        elif (IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled() or
                              IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf() > 120 or
                              GetDistanceToPlayer() > 8 or GetPlayerYDistance() > 1):
                            Goto('L4')
                        elif not IsMenuOpen(180):
                            pass
                """ State 22 """
                EndBonfireKindleAnimLoop()
                Goto('L3')
            """ State 41 """
            Label('L18')
            ClearTalkDisabledState()
            DebugEvent('会話タイマーをクリア　待機へ')

