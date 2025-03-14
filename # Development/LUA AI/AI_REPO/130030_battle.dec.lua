RegisterTableGoal(GOAL_BlackKight_Halberd_130030_Battle, "BlackKight_Halberd_130030_Battle")
Goal.Initialize = function (arg0, arg1, arg2, arg3)
    return 
end

Goal.Activate = function (arg0, arg1, arg2)
    Init_Pseudo_Global(arg1, arg2)
    arg1:SetStringIndexedNumber("Dist_SideStep", 3)
    arg1:SetStringIndexedNumber("Dist_BackStep", 3)
    local local0 = {}
    local local1 = {}
    local local2 = {}
    Common_Clear_Param(local0, local1, local2)
    local local3 = arg1:GetDist(TARGET_ENE_0)
    local local4 = arg1:GetExcelParam(AI_EXCEL_THINK_PARAM_TYPE__thinkAttr_doAdmirer)
    local local5 = arg1:GetEventRequest()
    if local4 == 1 and arg1:GetTeamOrder(ORDER_TYPE_Role) == ROLE_TYPE_Kankyaku then
        local0[10] = 50
        local0[11] = 50
    elseif local4 == 1 and arg1:GetTeamOrder(ORDER_TYPE_Role) == ROLE_TYPE_Torimaki then
        local0[1] = 10
        local0[2] = 10
        local0[10] = 40
        local0[11] = 40
    elseif arg1:IsInsideTarget(TARGET_ENE_0, AI_DIR_TYPE_B, 90) then
        local0[20] = 100
    elseif arg1:IsInsideTarget(TARGET_ENE_0, AI_DIR_TYPE_F, 90) and local3 <= 1 and arg1:GetRandam_Int(1, 100) <= 40 then
        local0[10] = 40
    elseif 5 <= local3 then
        local0[1] = 10
        local0[2] = 5
        local0[3] = 25
        local0[4] = 25
        local0[5] = 1
        local0[6] = 5
        local0[7] = 5
        local0[8] = 0
        local0[9] = 10
        local0[10] = 0
        local0[11] = 0
    elseif 2.5 <= local3 then
        local0[1] = 15
        local0[2] = 5
        local0[3] = 20
        local0[4] = 15
        local0[5] = 1
        local0[6] = 10
        local0[7] = 5
        local0[8] = 0
        local0[9] = 30
        local0[10] = 0
        local0[11] = 0
    elseif 1 <= local3 then
        local0[1] = 15
        local0[2] = 15
        local0[3] = 15
        local0[4] = 10
        local0[5] = 5
        local0[6] = 15
        local0[7] = 15
        local0[8] = 0
        local0[9] = 0
        local0[10] = 0
        local0[11] = 0
    else
        local0[1] = 20
        local0[2] = 15
        local0[3] = 5
        local0[4] = 0
        local0[5] = 10
        local0[6] = 15
        local0[7] = 20
        local0[8] = 30
        local0[9] = 0
        local0[10] = 0
        local0[11] = 0
    end
    local0[3] = SetCoolTime(arg1, arg2, 3004, 10, local0[3], 1)
    local0[4] = SetCoolTime(arg1, arg2, 3005, 10, local0[4], 1)
    local1[1] = REGIST_FUNC(arg1, arg2, BlackKight_Halberd_130030_Act01)
    local1[2] = REGIST_FUNC(arg1, arg2, BlackKight_Halberd_130030_Act02)
    local1[3] = REGIST_FUNC(arg1, arg2, BlackKight_Halberd_130030_Act03)
    local1[4] = REGIST_FUNC(arg1, arg2, BlackKight_Halberd_130030_Act04)
    local1[5] = REGIST_FUNC(arg1, arg2, BlackKight_Halberd_130030_Act05)
    local1[6] = REGIST_FUNC(arg1, arg2, BlackKight_Halberd_130030_Act06)
    local1[7] = REGIST_FUNC(arg1, arg2, BlackKight_Halberd_130030_Act07)
    local1[8] = REGIST_FUNC(arg1, arg2, BlackKight_Halberd_130030_Act08)
    local1[9] = REGIST_FUNC(arg1, arg2, BlackKight_Halberd_130030_Act09)
    local1[10] = REGIST_FUNC(arg1, arg2, BlackKight_Halberd_130030_Act10)
    local1[11] = REGIST_FUNC(arg1, arg2, BlackKight_Halberd_130030_Act11)
    local1[20] = REGIST_FUNC(arg1, arg2, BlackKight_Halberd_130030_Act20)
    Common_Battle_Activate(arg1, arg2, local0, local1, REGIST_FUNC(arg1, arg2, BlackKight_Halberd_130030_ActAfter_AdjustSpace), local2)
    return 
end

function BlackKight_Halberd_130030_Act01(arg0, arg1, arg2)
    Approach_Act_Flex(arg0, arg1, 2 - arg0:GetMapHitRadius(TARGET_SELF), 2 - arg0:GetMapHitRadius(TARGET_SELF) + 0.9, 2 - arg0:GetMapHitRadius(TARGET_SELF) + 4, 75, 75, 5, 5)
    local local0 = 3000
    local local1 = 3001
    local local2 = 3007
    local local3 = 3.1 - arg0:GetMapHitRadius(TARGET_SELF) + 1
    local local4 = 2 - arg0:GetMapHitRadius(TARGET_SELF)
    local local5 = 1.5
    local local6 = 20
    local local7 = arg0:GetRandam_Int(1, 100)
    if local7 <= 20 then
        arg1:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, local0, TARGET_ENE_0, local4, local5, local6, 0, 0)
    elseif local7 <= 70 then
        arg1:AddSubGoal(GOAL_COMMON_ComboAttackTunableSpin, 10, local0, TARGET_ENE_0, local3, local5, local6, 0, 0)
        arg1:AddSubGoal(GOAL_COMMON_ComboFinal, 10, local1, TARGET_ENE_0, local4, 0, 0)
    elseif arg0:GetRandam_Int(1, 100) <= 50 then
        arg1:AddSubGoal(GOAL_COMMON_ComboAttackTunableSpin, 10, local0, TARGET_ENE_0, local3, local5, local6, 0, 0)
        arg1:AddSubGoal(GOAL_COMMON_ComboRepeat, 10, local1, TARGET_ENE_0, 3.4 - arg0:GetMapHitRadius(TARGET_SELF) + 1, local5, local6, 0, 0)
        arg1:AddSubGoal(GOAL_COMMON_ComboFinal, 10, 3002, TARGET_ENE_0, local4, 0, 0)
    else
        arg1:AddSubGoal(GOAL_COMMON_ComboAttackTunableSpin, 10, local0, TARGET_ENE_0, local3, local5, local6, 0, 0)
        arg1:AddSubGoal(GOAL_COMMON_ComboRepeat, 10, local1, TARGET_ENE_0, 3 - arg0:GetMapHitRadius(TARGET_SELF) + 1, local5, local6, 0, 0)
        arg1:AddSubGoal(GOAL_COMMON_ComboFinal, 10, Attack7, TARGET_ENE_0, local4, 0, 0)
    end
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

function BlackKight_Halberd_130030_Act02(arg0, arg1, arg2)
    Approach_Act_Flex(arg0, arg1, 2.8 - arg0:GetMapHitRadius(TARGET_SELF), 2.8 - arg0:GetMapHitRadius(TARGET_SELF) + 0.9, 2.8 - arg0:GetMapHitRadius(TARGET_SELF) + 4, 75, 75, 5, 5)
    arg1:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, 3003, TARGET_ENE_0, 2 - arg0:GetMapHitRadius(TARGET_SELF), 1.5, 20, 0, 0)
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

function BlackKight_Halberd_130030_Act03(arg0, arg1, arg2)
    Approach_Act_Flex(arg0, arg1, 4.1 - arg0:GetMapHitRadius(TARGET_SELF), 4.1 - arg0:GetMapHitRadius(TARGET_SELF) + 0.9, 4.1 - arg0:GetMapHitRadius(TARGET_SELF) + 4, 75, 75, 5, 5)
    local local0 = arg0:GetRandam_Int(1, 100)
    arg1:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, 3004, TARGET_ENE_0, 2 - arg0:GetMapHitRadius(TARGET_SELF), 1.5, 20, 0, 0)
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

function BlackKight_Halberd_130030_Act04(arg0, arg1, arg2)
    Approach_Act_Flex(arg0, arg1, 6.3 - arg0:GetMapHitRadius(TARGET_SELF), 6.3 - arg0:GetMapHitRadius(TARGET_SELF) + 0.9, 6.3 - arg0:GetMapHitRadius(TARGET_SELF) + 4, 75, 75, 4, 5)
    arg1:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, 3005, TARGET_ENE_0, 2 - arg0:GetMapHitRadius(TARGET_SELF), 1.5, 20, 0, 0)
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

function BlackKight_Halberd_130030_Act05(arg0, arg1, arg2)
    Approach_Act_Flex(arg0, arg1, 1.5 - arg0:GetMapHitRadius(TARGET_SELF), 1.5 - arg0:GetMapHitRadius(TARGET_SELF) + 0.9, 1.5 - arg0:GetMapHitRadius(TARGET_SELF) + 4, 75, 75, 4, 5)
    arg1:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, 3006, TARGET_ENE_0, 2 - arg0:GetMapHitRadius(TARGET_SELF), 1.5, 20, 0, 0)
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

function BlackKight_Halberd_130030_Act06(arg0, arg1, arg2)
    Approach_Act_Flex(arg0, arg1, 2.1 - arg0:GetMapHitRadius(TARGET_SELF), 2.1 - arg0:GetMapHitRadius(TARGET_SELF) + 0.9, 2.1 - arg0:GetMapHitRadius(TARGET_SELF) + 4, 75, 75, 5, 5)
    local local0 = 3008
    local local1 = 3009
    local local2 = 3 - arg0:GetMapHitRadius(TARGET_SELF) + 1
    local local3 = 2 - arg0:GetMapHitRadius(TARGET_SELF)
    local local4 = 1.5
    local local5 = 20
    local local6 = arg0:GetRandam_Int(1, 100)
    local local7 = arg0:GetRandam_Int(1, 100)
    if local6 <= 20 then
        arg1:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, local0, TARGET_ENE_0, local3, local4, local5, 0, 0)
    elseif local6 <= 70 then
        arg1:AddSubGoal(GOAL_COMMON_ComboAttackTunableSpin, 10, local0, TARGET_ENE_0, local2, local4, local5, 0, 0)
        arg1:AddSubGoal(GOAL_COMMON_ComboFinal, 10, local1, TARGET_ENE_0, local3, 0, 0)
    else
        arg1:AddSubGoal(GOAL_COMMON_ComboAttackTunableSpin, 10, local0, TARGET_ENE_0, local2, local4, local5, 0, 0)
        arg1:AddSubGoal(GOAL_COMMON_ComboRepeat, 10, local1, TARGET_ENE_0, 3.8 - arg0:GetMapHitRadius(TARGET_SELF) + 1, local4, local5, 0, 0)
        arg1:AddSubGoal(GOAL_COMMON_ComboFinal, 10, 3011, TARGET_ENE_0, local3, 0, 0)
    end
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

function BlackKight_Halberd_130030_Act07(arg0, arg1, arg2)
    Approach_Act_Flex(arg0, arg1, 3.1 - arg0:GetMapHitRadius(TARGET_SELF), 3.1 - arg0:GetMapHitRadius(TARGET_SELF) + 0.9, 3.1 - arg0:GetMapHitRadius(TARGET_SELF) + 4, 75, 75, 4, 5)
    arg1:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, 3010, TARGET_ENE_0, 2 - arg0:GetMapHitRadius(TARGET_SELF), 1.5, 20, 0, 0)
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

function BlackKight_Halberd_130030_Act08(arg0, arg1, arg2)
    Approach_Act_Flex(arg0, arg1, 3.4 - arg0:GetMapHitRadius(TARGET_SELF), 3.4 - arg0:GetMapHitRadius(TARGET_SELF) + 0.9, 3.4 - arg0:GetMapHitRadius(TARGET_SELF) + 4, 75, 75, 4, 5)
    arg1:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, 3012, TARGET_ENE_0, 2 - arg0:GetMapHitRadius(TARGET_SELF), 1.5, 20, 0, 0)
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

function BlackKight_Halberd_130030_Act09(arg0, arg1, arg2)
    Approach_Act_Flex(arg0, arg1, 5.1 - arg0:GetMapHitRadius(TARGET_SELF), 5.1 - arg0:GetMapHitRadius(TARGET_SELF) + 0.9, 5.1 - arg0:GetMapHitRadius(TARGET_SELF) + 4, 75, 75, 4, 5)
    arg1:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, 3013, TARGET_ENE_0, 2 - arg0:GetMapHitRadius(TARGET_SELF), 1.5, 20, 0, 0)
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

function BlackKight_Halberd_130030_Act10(arg0, arg1, arg2)
    local local0 = 10
    if local0 <= arg0:GetDist(TARGET_ENE_0) then
        Approach_Act(arg0, arg1, local0, 12, Odds_Guard, 3)
    end
    arg1:AddSubGoal(GOAL_COMMON_LeaveTarget, 5, TARGET_ENE_0, local0, TARGET_ENE_0, true, -1)
    return 
end

function BlackKight_Halberd_130030_Act11(arg0, arg1, arg2)
    arg1:AddSubGoal(GOAL_COMMON_SidewayMove, 4, TARGET_ENE_0, arg0:GetRandam_Int(0, 1), arg0:GetRandam_Int(30, 45), true, true, -1)
    return 
end

function BlackKight_Halberd_130030_Act20(arg0, arg1, arg2)
    arg1:AddSubGoal(GOAL_COMMON_Turn, 2, TARGET_ENE_0, 0, 0, 0)
    GetWellSpace_Odds = 0
    return GetWellSpace_Odds
end

function BlackKight_Halberd_130030_ActAfter_AdjustSpace(arg0, arg1, arg2)
    arg1:AddSubGoal(GOAL_COMMON_AfterAttackAct, 3)
    return 
end

Goal.Update = function (arg0, arg1, arg2)
    return Update_Default_NoSubGoal(arg0, arg1, arg2)
end

Goal.Terminate = function (arg0, arg1, arg2)
    return 
end

Goal.Interrupt = function (arg0, arg1, arg2)
    if arg1:IsLadderAct(TARGET_SELF) then
        return false
    elseif GuardBreak_Act(arg1, arg2, 2.6, 75) then
        arg2:ClearSubGoal()
        arg2:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, 3004, TARGET_ENE_0, DIST_Middle, 0, -1)
        return true
    elseif Damaged_Act(arg1, arg2, 4.5, 50) then
        arg2:AddSubGoal(GOAL_COMMON_Guard, 2, 9910, TARGET_ENE_0, false, 0)
        return true
    else
        return false
    end
end

RegisterTableGoal(GOAL_BlackKight_Halberd_130030_AfterAttackAct, "BlackKight_Halberd_130030_AfterAttackAct")
REGISTER_GOAL_NO_SUB_GOAL(GOAL_BlackKight_Halberd_130030_AfterAttackAct, true)
Goal.Activate = function (arg0, arg1, arg2)
    local local0 = arg1:GetDist(TARGET_ENE_0)
    local local1 = arg1:GetToTargetAngle(TARGET_ENE_0)
    arg1:SetStringIndexedNumber("DistMin_AAA", 2)
    arg1:SetStringIndexedNumber("DistMax_AAA", 7)
    arg1:SetStringIndexedNumber("BaseDir_AAA", AI_DIR_TYPE_F)
    arg1:SetStringIndexedNumber("Angle_AAA", 180)
    arg1:SetStringIndexedNumber("DistMin_Inter_AAA", 3)
    arg1:SetStringIndexedNumber("DistMax_Inter_AAA", 8)
    arg1:SetStringIndexedNumber("BaseAng_Inter_AAA", 0)
    arg1:SetStringIndexedNumber("Ang_Inter_AAA", 180)
    if 5 <= local0 then
        arg1:SetStringIndexedNumber("Odds_Guard_AAA", 80)
        arg1:SetStringIndexedNumber("Odds_NoAct_AAA", 70)
        arg1:SetStringIndexedNumber("Odds_BackAndSide_AAA", 30)
    elseif 2 <= local0 then
        arg1:SetStringIndexedNumber("Odds_Guard_AAA", 80)
        arg1:SetStringIndexedNumber("Odds_NoAct_AAA", 60)
        arg1:SetStringIndexedNumber("Odds_BackAndSide_AAA", 40)
        arg1:SetStringIndexedNumber("Odds_Back_AAA", 25)
        arg1:SetStringIndexedNumber("Odds_Backstep_AAA", 0)
    else
        arg1:SetStringIndexedNumber("Odds_Guard_AAA", 80)
        arg1:SetStringIndexedNumber("Odds_NoAct_AAA", 35)
        arg1:SetStringIndexedNumber("Odds_BackAndSide_AAA", 50)
        arg1:SetStringIndexedNumber("Odds_Back_AAA", 40)
        arg1:SetStringIndexedNumber("Odds_Backstep_AAA", 0)
        arg1:SetStringIndexedNumber("Odds_Sidestep_AAA", 0)
        arg1:SetStringIndexedNumber("Odds_BsAndSide_AAA", 0)
    end
    arg2:AddSubGoal(GOAL_COMMON_AfterAttackAct, 3)
    return 
end

Goal.Update = function (arg0, arg1, arg2)
    return Update_Default_NoSubGoal(arg0, arg1, arg2)
end

return 
