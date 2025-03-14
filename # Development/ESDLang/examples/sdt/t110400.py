# -*- coding: utf-8 -*-
def t110400_1():
    """ State 0,1 """
    t110400_x5(flag1=1799, flag2=1795, flag3=1796, val1=5, val2=10, val3=12, val4=10, val5=12, flag4=6001,
               val6=7004000, flag5=6000, flag6=6001, flag7=6000, flag8=6000, mode1=1, val7=1000000, val8=1000000,
               val9=1000000, mode2=1, mode3=1, mode4=0, val10=1000000, val11=1000000, mode5=0, flag9=6000,
               mode6=0)

def t110400_1000():
    """ State 0,3 """
    assert f116(-1) == 1000000
    """ State 2 """
    if GetEventStatus(8302) == 1:
        """ State 6 """
        assert t110400_x29()
    elif GetEventStatus(8301) == 1:
        """ State 5 """
        assert t110400_x28()
    else:
        """ State 4 """
        assert t110400_x27()
    """ State 1 """
    def WhilePaused():
        c1119(0)

def t110400_2000():
    """ State 0,3 """
    assert (t110400_x0(val6=7004000, flag6=6001, flag10=6000, flag11=6000, flag12=6000, flag13=6000,
            mode7=0, flag5=6000, val7=1000000, val8=1000000, val9=1000000, val10=1000000, val11=1000000))
    """ State 2 """
    SetEventState(71100707, 1)
    """ State 1 """
    def WhilePaused():
        c1119(0)

def t110400_x0(val6=7004000, flag6=6001, flag10=6000, flag11=6000, flag12=6000, flag13=6000, mode7=0,
               flag5=6000, val7=1000000, val8=1000000, val9=1000000, val10=1000000, val11=1000000):
    """ State 0,3 """
    while Loop('mainloop'):
        call = t110400_x26(val6=val6, flag6=flag6, flag10=flag10, flag11=flag11, flag12=flag12, flag13=flag13,
                           mode7=mode7, flag5=flag5)
        if call.Done():
            break
        elif (not f116(-1) == val7 and not f116(-1) == val8 and not f116(-1) == val9 and not DoesSelfHaveSpEffect(4510)
              and not val7 == -1 and not f116(-1) == val10 and not f116(-1) == val11):
            pass
        """ State 1 """
        while True:
            assert (f116(-1) == val7 or f116(-1) == val8 or f116(-1) == val9 or (DoesSelfHaveSpEffect(4510)
                    == 1 and f116(-1) == val10 and f116(-1) == val11))
            """ State 2 """
            if GetCurrentStateElapsedTime() > 0.5:
                Continue('mainloop')
            elif (not f116(-1) == val7 and not f116(-1) == val8 and not f116(-1) == val9 and not DoesSelfHaveSpEffect(4510)
                  and not f116(-1) == val10 and not f116(-1) == val11):
                pass
    """ State 4 """
    SetTalkTime(0.1)
    return 0

def t110400_x1():
    """ State 0,1 """
    if not CheckSpecificPersonTalkHasEnded(0):
        """ State 7 """
        ClearTalkProgressData()
        StopEventAnimWithoutForcingConversationEnd(0)
        """ State 6 """
        ReportConversationEndToHavokBehavior()
    else:
        pass
    """ State 2 """
    if CheckSpecificPersonGenericDialogIsOpen(0) == 1:
        """ State 3 """
        ForceCloseGenericDialog()
    else:
        pass
    """ State 4 """
    if CheckSpecificPersonMenuIsOpen(-1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0):
        """ State 5 """
        ForceCloseMenu()
    else:
        pass
    """ State 8 """
    return 0

def t110400_x2():
    """ State 0,1 """
    ClearTalkProgressData()
    StopEventAnimWithoutForcingConversationEnd(0)
    ForceCloseGenericDialog()
    ForceCloseMenu()
    ReportConversationEndToHavokBehavior()
    """ State 2 """
    return 0

def t110400_x3(text1=_, z2=_, flag15=0, mode13=1):
    """ State 0,7 """
    assert t110400_x2() and CheckSpecificPersonTalkHasEnded(0) == 1
    """ State 5 """
    if not flag15:
        """ State 1 """
        TalkToPlayer(text1, -1, -1, flag15, 0)
        def WhilePaused():
            GiveSpEffectToPlayer(30700)
        assert CheckSpecificPersonTalkHasEnded(0) == 1
    else:
        """ State 6 """
        TalkToPlayer(text1, -1, -1, flag15, 1)
        def WhilePaused():
            GiveSpEffectToPlayer(30700)
        assert CheckSpecificPersonTalkHasEnded(0) == 1
    """ State 4 """
    if not mode13:
        pass
    else:
        """ State 3 """
        ReportConversationEndToHavokBehavior()
    """ State 2 """
    SetEventState(z2, 1)
    """ State 8 """
    return 0

def t110400_x4(text3=_, flag14=0, mode12=1):
    """ State 0,6 """
    assert t110400_x2() and CheckSpecificPersonTalkHasEnded(0) == 1
    """ State 4 """
    if not flag14:
        """ State 1 """
        TalkToPlayer(text3, -1, -1, flag14, 0)
        def WhilePaused():
            GiveSpEffectToPlayer(30700)
        assert CheckSpecificPersonTalkHasEnded(0) == 1
    else:
        """ State 5 """
        TalkToPlayer(text3, -1, -1, flag14, 1)
        def WhilePaused():
            GiveSpEffectToPlayer(30700)
        assert CheckSpecificPersonTalkHasEnded(0) == 1
    """ State 3 """
    if not mode12:
        pass
    else:
        """ State 2 """
        ReportConversationEndToHavokBehavior()
    """ State 7 """
    return 0

def t110400_x5(flag1=1799, flag2=1795, flag3=1796, val1=5, val2=10, val3=12, val4=10, val5=12, flag4=6001,
               val6=7004000, flag5=6000, flag6=6001, flag7=6000, flag8=6000, mode1=1, val7=1000000, val8=1000000,
               val9=1000000, mode2=1, mode3=1, mode4=0, val10=1000000, val11=1000000, mode5=0, flag9=6000,
               mode6=0):
    """ State 0,1 """
    while True:
        RemoveMyAggro()
        call = t110400_x6(val1=val1, val2=val2, val3=val3, val4=val4, val5=val5, flag4=flag4, val6=val6,
                          flag5=flag5, flag6=flag6, flag7=flag7, flag8=flag8, mode1=mode1, val7=val7,
                          val8=val8, val9=val9, mode2=mode2, mode3=mode3, mode4=mode4, val10=val10, val11=val11,
                          mode5=mode5, mode6=mode6)
        def WhilePaused():
            c5116(GetDistanceToPlayer() < 4)
        if (CheckSelfDeath() == 1 or GetEventStatus(flag1) == 1) and not GetEventStatus(flag9):
            pass
        elif GetEventStatus(flag2) == 1 or GetEventStatus(flag3) == 1:
            """ State 3 """
            call = t110400_x21(val2=val2, val3=val3)
            if CheckSelfDeath() == 1 or GetEventStatus(flag1) == 1 or DoesSelfHaveSpEffect(30100) == 1:
                pass
            elif not GetEventStatus(flag2) and not GetEventStatus(flag3):
                continue
        """ State 2 """
        call = t110400_x7(flag1=flag1, val2=val2, val3=val3)
        assert not CheckSelfDeath() and not GetEventStatus(flag1) and not DoesSelfHaveSpEffect(30100)

def t110400_x6(val1=5, val2=10, val3=12, val4=10, val5=12, flag4=6001, val6=7004000, flag5=6000, flag6=6001,
               flag7=6000, flag8=6000, mode1=1, val7=1000000, val8=1000000, val9=1000000, mode2=1, mode3=1,
               mode4=0, val10=1000000, val11=1000000, mode5=0, mode6=0):
    """ State 0,4 """
    while True:
        call = t110400_x23(val6=val6, flag5=flag5, flag6=flag6, val7=val7, val8=val8, val9=val9, val10=val10,
                           val11=val11)
        if call.Done():
            """ State 1 """
            Label('L0')
            call = t110400_x8(val1=val1, mode1=mode1, mode2=mode2, mode3=mode3, mode4=mode4, mode5=mode5)
            def WhilePaused():
                GiveSpEffectToPlayer(30700)
            if call.Done():
                continue
            elif IsAttackedBySomeone() == 1 and not mode6 and not DoesSelfHaveSpEffect(30201):
                pass
        elif IsAttackedBySomeone() == 1 and not mode6 and not DoesSelfHaveSpEffect(30201):
            pass
        elif GetEventStatus(flag8) == 1:
            Goto('L0')
        elif not GetEventStatus(flag4) and GetEventStatus(flag7) == 1 and GetDistanceToPlayer() < val4:
            """ State 3 """
            call = t110400_x9(val5=val5)
            if call.Done():
                continue
            elif IsAttackedBySomeone() == 1 and not mode6 and not DoesSelfHaveSpEffect(30201):
                pass
        """ State 2 """
        def ExitPause():
            RemoveMyAggro()
        assert t110400_x10(val2=val2, val3=val3)

def t110400_x7(flag1=1799, val2=10, val3=12):
    """ State 0,1 """
    if GetEventStatus(flag1) == 1:
        """ State 2 """
        pass
    else:
        """ State 3 """
        if GetDistanceToPlayer() < val2:
            """ State 4,6 """
            call = t110400_x18()
            if call.Done():
                pass
            elif GetDistanceToPlayer() > val3:
                """ State 7 """
                assert t110400_x1()
        else:
            """ State 5 """
            pass
    """ State 8 """
    return 0

def t110400_x8(val1=5, mode1=1, mode2=1, mode3=1, mode4=0, mode5=0):
    """ State 0,2 """
    ClearPlayerDamageInfo()
    TurnCharacterToFaceEntity(-1, 10000, -1)
    call = t110400_x16(mode2=mode2, mode4=mode4)
    def WhilePaused():
        c1117(mode1, 10000)
        c1117(1000000, -1)
        SetTalkTime(0.01)
        c5128(mode3 == 1, 0.1)
        c5120(val1 == 1 and not mode1 and mode5 == 1, 1, 0, 9, 9, 9, 9, 9, 9, 9)
    if call.Done():
        pass
    elif (HasPlayerBeenAttacked() == 1 or (GetTalkInterruptReason() == 5 and IsTalkInProgress() == 1)
          or IsPlayerDead() == 1 or f116(10000) == 90):
        """ State 1 """
        assert t110400_x13()
    elif GetDistanceToPlayer() > val1:
        """ State 3 """
        assert t110400_x12()
    """ State 4 """
    return 0

def t110400_x9(val5=12):
    """ State 0,1 """
    call = t110400_x22()
    if call.Done():
        pass
    elif GetDistanceToPlayer() > val5:
        """ State 2 """
        assert t110400_x1()
    """ State 3 """
    return 0

def t110400_x10(val2=10, val3=12):
    """ State 0,4 """
    assert t110400_x1() and GetCurrentStateElapsedFrames() > 2
    """ State 1 """
    if GetDistanceToPlayer() < 10:
        """ State 2,6 """
        call = t110400_x15()
        if call.Done():
            pass
        elif GetDistanceToPlayer() > 12:
            """ State 5 """
            assert t110400_x1()
    else:
        """ State 3 """
        pass
    """ State 7 """
    return 0

def t110400_x11(val2=10, val3=12):
    """ State 0,1 """
    assert GetDistanceToPlayer() < val2
    """ State 2 """
    call = t110400_x20()
    if call.Done():
        pass
    elif GetDistanceToPlayer() > val3:
        """ State 3 """
        assert t110400_x1()
    """ State 4 """
    return 0

def t110400_x12():
    """ State 0,1 """
    assert t110400_x1()
    """ State 2 """
    return 0

def t110400_x13():
    """ State 0,2 """
    assert t110400_x1()
    """ State 1 """
    ClearTalkProgressData()
    """ State 3 """
    return 0

def t110400_x14(val2=10, val3=12):
    """ State 0,2,1 """
    while True:
        assert GetDistanceToPlayer() < val2
        """ State 3 """
        call = t110400_x19()
        if call.Done():
            pass
        elif GetDistanceToPlayer() > val3:
            """ State 4 """
            assert t110400_x1()

def t110400_x15():
    """ State 0,1 """
    assert t110400_x17(z1=1101, mode8=0, mode9=0, mode10=0, mode11=0)
    """ State 2 """
    return 0

def t110400_x16(mode2=1, mode4=0):
    """ State 0,2 """
    if f116(10000) == 1:
        """ State 1 """
        assert GetCurrentStateElapsedFrames() > 5
        """ State 3 """
        assert not DoesPlayerHaveSpEffect(4511)
        """ State 4 """
        def WhilePaused():
            c5120(mode2 == 1 and not mode4, 1, 0, 9, 9, 9, 9, 9, 9, 9)
            c5120(mode2 == 1 and mode4 == 1, 2, 9, 0, 9, 9, 9, 9, 9, 9)
        assert t110400_x17(z1=1000, mode8=0, mode9=0, mode10=0, mode11=0)
    elif GetCurrentStateElapsedTime() > 5:
        pass
    """ State 5 """
    return 0

def t110400_x17(z1=_, mode8=0, mode9=0, mode10=0, mode11=0):
    """ State 0,4 """
    if f118(z1) == 1:
        """ State 2 """
        assert GetCurrentStateElapsedFrames() > 1
        """ State 1 """
        def WhilePaused():
            c1118(z1)
        assert f117() == mode8 or f117() == mode9 or f117() == mode10 or f117() == mode11
        """ State 5 """
        return 0
    else:
        """ State 3,6 """
        return 1

def t110400_x18():
    """ State 0,1 """
    call = t110400_x17(z1=1103, mode8=0, mode9=0, mode10=0, mode11=0)
    if call.Get() == 1:
        """ State 2 """
        assert t110400_x1()
    elif call.Get() == 0:
        pass
    """ State 3 """
    return 0

def t110400_x19():
    """ State 0,2 """
    call = t110400_x17(z1=1102, mode8=0, mode9=0, mode10=0, mode11=0)
    if call.Get() == 1:
        """ State 1 """
        pass
    elif call.Done():
        """ State 3 """
        return 0

def t110400_x20():
    """ State 0,1 """
    assert t110400_x17(z1=1001, mode8=0, mode9=0, mode10=0, mode11=0)
    """ State 2 """
    return 0

def t110400_x21(val2=10, val3=12):
    """ State 0,1 """
    while True:
        call = t110400_x14(val2=val2, val3=val3)
        if f122() == 1:
            break
        elif not f122():
            """ State 3 """
            call = t110400_x24(val2=val2, val3=val3)
            assert not IsPlayerDead()
    """ State 2 """
    t110400_x11(val2=val2, val3=val3)

def t110400_x22():
    """ State 0,1 """
    assert t110400_x17(z1=1100, mode8=0, mode9=0, mode10=0, mode11=0)
    """ State 2 """
    return 0

def t110400_x23(val6=7004000, flag5=6000, flag6=6001, val7=1000000, val8=1000000, val9=1000000, val10=1000000,
                val11=1000000):
    """ State 0,1 """
    call = t110400_x17(z1=2000, mode8=0, mode9=0, mode10=0, mode11=0)
    if call.Get() == 1:
        """ State 2 """
        assert (t110400_x0(val6=val6, flag6=flag6, flag10=6000, flag11=6000, flag12=6000, flag13=6000,
                mode7=0, flag5=flag5, val7=val7, val8=val8, val9=val9, val10=val10, val11=val11))
    elif call.Done():
        pass
    """ State 3 """
    return 0

def t110400_x24(val2=10, val3=12):
    """ State 0,1 """
    assert GetDistanceToPlayer() < val2
    """ State 3 """
    call = t110400_x25()
    if call.Done():
        pass
    elif GetDistanceToPlayer() > val3:
        """ State 2 """
        assert t110400_x1()
    """ State 4 """
    return 0

def t110400_x25():
    """ State 0,1 """
    assert t110400_x17(z1=1002, mode8=0, mode9=0, mode10=0, mode11=0)
    """ State 2 """
    return 0

def t110400_x26(val6=7004000, flag6=6001, flag10=6000, flag11=6000, flag12=6000, flag13=6000, mode7=0,
                flag5=6000):
    """ State 0,1 """
    while Loop('mainloop'):
        assert not GetOneLineHelpStatus() and not IsClientPlayer() and not IsPlayerDead() and not IsCharacterDisabled()
        """ State 3 """
        assert (GetEventStatus(flag6) == 1 or GetEventStatus(flag10) == 1 or GetEventStatus(flag11) ==
                1 or GetEventStatus(flag12) == 1 or GetEventStatus(flag13) == 1)
        """ State 4 """
        while True:
            assert not GetEventStatus(flag5)
            """ State 2 """
            if (not (not GetOneLineHelpStatus() and not IsClientPlayer() and not IsPlayerDead() and not
                IsCharacterDisabled())):
                Continue('mainloop')
            elif (not GetEventStatus(flag6) and not GetEventStatus(flag10) and not GetEventStatus(flag11)
                  and not GetEventStatus(flag12) and not GetEventStatus(flag13)):
                Continue('mainloop')
            elif GetEventStatus(flag5) == 1:
                pass
            elif CheckActionButtonArea(val6 + mode7) and not f116(10000) == 90:
                Break('mainloop')
    """ State 5 """
    SetTalkTime(0.1)
    return 0

def t110400_x27():
    """ State 0,1 """
    if not GetEventStatus(71100700):
        """ State 2 """
        # talk:40000000:Oh...? You survived?
        assert t110400_x3(text1=40000000, z2=71100700, flag15=0, mode13=1)
    else:
        """ State 3 """
        # talk:40000100:Now then, be gone already.
        assert t110400_x4(text3=40000100, flag14=0, mode12=1)
    """ State 4 """
    return 0

def t110400_x28():
    """ State 0,1 """
    if not GetEventStatus(71100701):
        """ State 2 """
        # talk:40000200:You want something?
        assert t110400_x3(text1=40000200, z2=71100701, flag15=0, mode13=1)
    else:
        """ State 3 """
        # talk:40000300:Now then, be gone already.
        assert t110400_x4(text3=40000300, flag14=0, mode12=1)
    """ State 4 """
    return 0

def t110400_x29():
    """ State 0,2 """
    if GetEventStatus(71100700) == 1:
        """ State 4,5 """
        if not GetEventStatus(71100702):
            """ State 11 """
            # talk:40000400:Oh...? You're still alive?, talk:40000700:Oh...? You're still alive?
            assert t110400_x30(text1=40000400, text2=40000700)
        elif GetEventStatus(71100702) == 1 and not GetEventStatus(71100703):
            """ State 9 """
            # talk:40000500:... Some advice.
            assert t110400_x3(text1=40000500, z2=71100703, flag15=0, mode13=1)
        else:
            """ State 10 """
            # talk:40000600:Now then, be gone already.
            assert t110400_x4(text3=40000600, flag14=0, mode12=1)
    else:
        """ State 3,1 """
        if not GetEventStatus(71100702):
            """ State 6 """
            # talk:40000800:Oh...? You survived?, talk:40000900:Oh...? You survived?
            assert t110400_x30(text1=40000800, text2=40000900)
        elif GetEventStatus(71100702) == 1 and not GetEventStatus(71100703):
            """ State 7 """
            # talk:40000500:... Some advice.
            assert t110400_x3(text1=40000500, z2=71100703, flag15=0, mode13=1)
        else:
            """ State 8 """
            # talk:40000600:Now then, be gone already.
            assert t110400_x4(text3=40000600, flag14=0, mode12=1)
    """ State 12 """
    return 0

def t110400_x30(text1=_, text2=_):
    """ State 0,1 """
    if GetEventStatus(71100111) == 1:
        """ State 2 """
        assert t110400_x3(text1=text1, z2=71100702, flag15=0, mode13=1)
    else:
        """ State 3 """
        assert t110400_x3(text1=text2, z2=71100702, flag15=0, mode13=1)
    """ State 4 """
    return 0

