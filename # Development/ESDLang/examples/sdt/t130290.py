# -*- coding: utf-8 -*-
def t130290_1():
    """ State 0,1 """
    t130290_x9(flag1=70009149, flag2=1375, flag3=1376, val1=5, val2=10, val3=12, val4=10, val5=12, flag4=6000,
               val6=7002904, flag5=6000, flag6=6001, flag7=6000, flag8=6000, mode1=1, val7=1000000, val8=1000000,
               val9=1000000, mode2=1, mode3=1, mode4=0, val10=1000000, val11=1000000, mode5=0, flag9=6000,
               mode6=0)

def t130290_1000():
    """ State 0,2 """
    assert t130290_x0()
    """ State 1 """
    def WhilePaused():
        c1119(0)

def t130290_1101():
    """ State 0,2 """
    assert t130290_x1()
    """ State 1 """
    def WhilePaused():
        c1119(0)

def t130290_1103():
    """ State 0,2 """
    assert t130290_x2()
    """ State 1 """
    def WhilePaused():
        c1119(0)

def t130290_x0():
    """ State 0,1 """
    # talk:29200000:Will you be cast out?  Or throw yourself in?
    assert t130290_x7(text5=29200000, z2=72000110, flag18=0, mode13=1)
    """ State 2 """
    return 0

def t130290_x1():
    """ State 0,1 """
    # talk:29030000:    , talk:29030100:   , talk:29030200:Please stop..., talk:29030300:What are you doing?!
    assert (t130290_x28(text1=29030000, flag14=71110140, text2=29030100, flag15=71110141, text3=29030200,
            flag16=71110142, text4=29030300))
    """ State 2 """
    return 0

def t130290_x2():
    """ State 0,1 """
    # talk:29030400:    
    assert t130290_x8(text4=29030400, flag17=1, mode12=1)
    """ State 2 """
    return 0

def t130290_x3(val6=7002904, flag6=6001, flag10=6000, flag11=6000, flag12=6000, flag13=6000, mode7=0,
               flag5=6000, val7=1000000, val8=1000000, val9=1000000, val10=1000000, val11=1000000):
    """ State 0,3 """
    while Loop('mainloop'):
        call = t130290_x31(val6=val6, flag6=flag6, flag10=flag10, flag11=flag11, flag12=flag12, flag13=flag13,
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

def t130290_x4():
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

def t130290_x5():
    """ State 0,1 """
    ClearTalkProgressData()
    StopEventAnimWithoutForcingConversationEnd(0)
    ForceCloseGenericDialog()
    ForceCloseMenu()
    ReportConversationEndToHavokBehavior()
    """ State 2 """
    return 0

def t130290_x6(text1=_, flag14=_, flag19=1, mode14=1):
    """ State 0,7 """
    assert t130290_x5() and CheckSpecificPersonTalkHasEnded(0) == 1
    """ State 2 """
    SetEventState(flag14, 1)
    """ State 6 """
    if not flag19:
        """ State 1 """
        TalkToPlayer(text1, -1, -1, flag19, 0)
        def WhilePaused():
            GiveSpEffectToPlayer(30700)
        assert CheckSpecificPersonTalkHasEnded(0) == 1
    else:
        """ State 5 """
        TalkToPlayer(text1, -1, -1, flag19, 1)
        def WhilePaused():
            GiveSpEffectToPlayer(30700)
        assert CheckSpecificPersonTalkHasEnded(0) == 1
    """ State 4 """
    if not mode14:
        pass
    else:
        """ State 3 """
        ReportConversationEndToHavokBehavior()
    """ State 8 """
    return 0

def t130290_x7(text5=29200000, z2=72000110, flag18=0, mode13=1):
    """ State 0,7 """
    assert t130290_x5() and CheckSpecificPersonTalkHasEnded(0) == 1
    """ State 5 """
    if not flag18:
        """ State 1 """
        # talk:29200000:Will you be cast out?  Or throw yourself in?
        TalkToPlayer(text5, -1, -1, flag18, 0)
        def WhilePaused():
            GiveSpEffectToPlayer(30700)
        assert CheckSpecificPersonTalkHasEnded(0) == 1
    else:
        """ State 6 """
        # talk:29200000:Will you be cast out?  Or throw yourself in?
        TalkToPlayer(text5, -1, -1, flag18, 1)
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

def t130290_x8(text4=_, flag17=1, mode12=1):
    """ State 0,6 """
    assert t130290_x5() and CheckSpecificPersonTalkHasEnded(0) == 1
    """ State 4 """
    if not flag17:
        """ State 1 """
        TalkToPlayer(text4, -1, -1, flag17, 0)
        def WhilePaused():
            GiveSpEffectToPlayer(30700)
        assert CheckSpecificPersonTalkHasEnded(0) == 1
    else:
        """ State 5 """
        TalkToPlayer(text4, -1, -1, flag17, 1)
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

def t130290_x9(flag1=70009149, flag2=1375, flag3=1376, val1=5, val2=10, val3=12, val4=10, val5=12, flag4=6000,
               val6=7002904, flag5=6000, flag6=6001, flag7=6000, flag8=6000, mode1=1, val7=1000000, val8=1000000,
               val9=1000000, mode2=1, mode3=1, mode4=0, val10=1000000, val11=1000000, mode5=0, flag9=6000,
               mode6=0):
    """ State 0,1 """
    while True:
        RemoveMyAggro()
        call = t130290_x10(val1=val1, val2=val2, val3=val3, val4=val4, val5=val5, flag4=flag4, val6=val6,
                           flag5=flag5, flag6=flag6, flag7=flag7, flag8=flag8, mode1=mode1, val7=val7,
                           val8=val8, val9=val9, mode2=mode2, mode3=mode3, mode4=mode4, val10=val10,
                           val11=val11, mode5=mode5, mode6=mode6)
        def WhilePaused():
            c5116(GetDistanceToPlayer() < 4)
        if (CheckSelfDeath() == 1 or GetEventStatus(flag1) == 1) and not GetEventStatus(flag9):
            pass
        elif GetEventStatus(flag2) == 1 or GetEventStatus(flag3) == 1:
            """ State 3 """
            call = t130290_x25(val2=val2, val3=val3)
            if CheckSelfDeath() == 1 or GetEventStatus(flag1) == 1 or DoesSelfHaveSpEffect(30100) == 1:
                pass
            elif not GetEventStatus(flag2) and not GetEventStatus(flag3):
                continue
        """ State 2 """
        call = t130290_x11(flag1=flag1, val2=val2, val3=val3)
        assert not CheckSelfDeath() and not GetEventStatus(flag1) and not DoesSelfHaveSpEffect(30100)

def t130290_x10(val1=5, val2=10, val3=12, val4=10, val5=12, flag4=6000, val6=7002904, flag5=6000, flag6=6001,
                flag7=6000, flag8=6000, mode1=1, val7=1000000, val8=1000000, val9=1000000, mode2=1, mode3=1,
                mode4=0, val10=1000000, val11=1000000, mode5=0, mode6=0):
    """ State 0,4 """
    while True:
        call = t130290_x27(val6=val6, flag5=flag5, flag6=flag6, val7=val7, val8=val8, val9=val9, val10=val10,
                           val11=val11)
        if call.Done():
            """ State 1 """
            Label('L0')
            call = t130290_x12(val1=val1, mode1=mode1, mode2=mode2, mode3=mode3, mode4=mode4, mode5=mode5)
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
            call = t130290_x13(val5=val5)
            if call.Done():
                continue
            elif IsAttackedBySomeone() == 1 and not mode6 and not DoesSelfHaveSpEffect(30201):
                pass
        """ State 2 """
        def ExitPause():
            RemoveMyAggro()
        assert t130290_x14(val2=val2, val3=val3)

def t130290_x11(flag1=70009149, val2=10, val3=12):
    """ State 0,1 """
    if GetEventStatus(flag1) == 1:
        """ State 2 """
        pass
    else:
        """ State 3 """
        if GetDistanceToPlayer() < val2:
            """ State 4,6 """
            call = t130290_x22()
            if call.Done():
                pass
            elif GetDistanceToPlayer() > val3:
                """ State 7 """
                assert t130290_x4()
        else:
            """ State 5 """
            pass
    """ State 8 """
    return 0

def t130290_x12(val1=5, mode1=1, mode2=1, mode3=1, mode4=0, mode5=0):
    """ State 0,2 """
    ClearPlayerDamageInfo()
    TurnCharacterToFaceEntity(-1, 10000, -1)
    call = t130290_x20(mode2=mode2, mode4=mode4)
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
        assert t130290_x17()
    elif GetDistanceToPlayer() > val1:
        """ State 3 """
        assert t130290_x16()
    """ State 4 """
    return 0

def t130290_x13(val5=12):
    """ State 0,1 """
    call = t130290_x26()
    if call.Done():
        pass
    elif GetDistanceToPlayer() > val5:
        """ State 2 """
        assert t130290_x4()
    """ State 3 """
    return 0

def t130290_x14(val2=10, val3=12):
    """ State 0,4 """
    assert t130290_x4() and GetCurrentStateElapsedFrames() > 2
    """ State 1 """
    if GetDistanceToPlayer() < 10:
        """ State 2,6 """
        call = t130290_x19()
        if call.Done():
            pass
        elif GetDistanceToPlayer() > 12:
            """ State 5 """
            assert t130290_x4()
    else:
        """ State 3 """
        pass
    """ State 7 """
    return 0

def t130290_x15(val2=10, val3=12):
    """ State 0,1 """
    assert GetDistanceToPlayer() < val2
    """ State 2 """
    call = t130290_x24()
    if call.Done():
        pass
    elif GetDistanceToPlayer() > val3:
        """ State 3 """
        assert t130290_x4()
    """ State 4 """
    return 0

def t130290_x16():
    """ State 0,1 """
    assert t130290_x4()
    """ State 2 """
    return 0

def t130290_x17():
    """ State 0,2 """
    assert t130290_x4()
    """ State 1 """
    ClearTalkProgressData()
    """ State 3 """
    return 0

def t130290_x18(val2=10, val3=12):
    """ State 0,2,1 """
    while True:
        assert GetDistanceToPlayer() < val2
        """ State 3 """
        call = t130290_x23()
        if call.Done():
            pass
        elif GetDistanceToPlayer() > val3:
            """ State 4 """
            assert t130290_x4()

def t130290_x19():
    """ State 0,1 """
    assert t130290_x21(z1=1101, mode8=0, mode9=0, mode10=0, mode11=0)
    """ State 2 """
    return 0

def t130290_x20(mode2=1, mode4=0):
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
        assert t130290_x21(z1=1000, mode8=0, mode9=0, mode10=0, mode11=0)
    elif GetCurrentStateElapsedTime() > 5:
        pass
    """ State 5 """
    return 0

def t130290_x21(z1=_, mode8=0, mode9=0, mode10=0, mode11=0):
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

def t130290_x22():
    """ State 0,1 """
    call = t130290_x21(z1=1103, mode8=0, mode9=0, mode10=0, mode11=0)
    if call.Get() == 1:
        """ State 2 """
        assert t130290_x4()
    elif call.Get() == 0:
        pass
    """ State 3 """
    return 0

def t130290_x23():
    """ State 0,2 """
    call = t130290_x21(z1=1102, mode8=0, mode9=0, mode10=0, mode11=0)
    if call.Get() == 1:
        """ State 1 """
        pass
    elif call.Done():
        """ State 3 """
        return 0

def t130290_x24():
    """ State 0,1 """
    assert t130290_x21(z1=1001, mode8=0, mode9=0, mode10=0, mode11=0)
    """ State 2 """
    return 0

def t130290_x25(val2=10, val3=12):
    """ State 0,1 """
    while True:
        call = t130290_x18(val2=val2, val3=val3)
        if f122() == 1:
            break
        elif not f122():
            """ State 3 """
            call = t130290_x29(val2=val2, val3=val3)
            assert not IsPlayerDead()
    """ State 2 """
    t130290_x15(val2=val2, val3=val3)

def t130290_x26():
    """ State 0,1 """
    assert t130290_x21(z1=1100, mode8=0, mode9=0, mode10=0, mode11=0)
    """ State 2 """
    return 0

def t130290_x27(val6=7002904, flag5=6000, flag6=6001, val7=1000000, val8=1000000, val9=1000000, val10=1000000,
                val11=1000000):
    """ State 0,1 """
    call = t130290_x21(z1=2000, mode8=0, mode9=0, mode10=0, mode11=0)
    if call.Get() == 1:
        """ State 2 """
        assert (t130290_x3(val6=val6, flag6=flag6, flag10=6000, flag11=6000, flag12=6000, flag13=6000,
                mode7=0, flag5=flag5, val7=val7, val8=val8, val9=val9, val10=val10, val11=val11))
    elif call.Done():
        pass
    """ State 3 """
    return 0

def t130290_x28(text1=29030000, flag14=71110140, text2=29030100, flag15=71110141, text3=29030200, flag16=71110142,
                text4=29030300):
    """ State 0,1 """
    if not text1 == -1 and not GetEventStatus(flag14):
        """ State 3 """
        assert t130290_x6(text1=text1, flag14=flag14, flag19=1, mode14=1)
    elif not text2 == -1 and not GetEventStatus(flag15):
        """ State 4 """
        assert t130290_x6(text1=text2, flag14=flag15, flag19=1, mode14=1)
    elif not text3 == -1 and not GetEventStatus(flag16):
        """ State 5 """
        assert t130290_x6(text1=text3, flag14=flag16, flag19=1, mode14=1)
    else:
        """ State 2 """
        SetEventState(flag14, 0)
        SetEventState(flag15, 0)
        SetEventState(flag16, 0)
        """ State 6 """
        assert t130290_x8(text4=text4, flag17=1, mode12=1)
    """ State 7 """
    return 0

def t130290_x29(val2=10, val3=12):
    """ State 0,1 """
    assert GetDistanceToPlayer() < val2
    """ State 3 """
    call = t130290_x30()
    if call.Done():
        pass
    elif GetDistanceToPlayer() > val3:
        """ State 2 """
        assert t130290_x4()
    """ State 4 """
    return 0

def t130290_x30():
    """ State 0,1 """
    assert t130290_x21(z1=1002, mode8=0, mode9=0, mode10=0, mode11=0)
    """ State 2 """
    return 0

def t130290_x31(val6=7002904, flag6=6001, flag10=6000, flag11=6000, flag12=6000, flag13=6000, mode7=0,
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

