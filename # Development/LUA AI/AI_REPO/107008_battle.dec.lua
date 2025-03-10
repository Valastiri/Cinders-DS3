RegisterTableGoal(GOAL_ProtoSkeleton_107008_Battle, "ProtoSkeleton_107008_Battle")
REGISTER_GOAL_NO_SUB_GOAL(GOAL_ProtoSkeleton_107008_Battle, true)
Goal.Initialize = function (arg0, arg1, arg2, arg3)
    return 
end

Goal.Activate = function (arg0, arg1, arg2)
    Init_Pseudo_Global(arg1, arg2)
    arg1:SetStringIndexedNumber("Dist_SideStep", 4)
    arg1:SetStringIndexedNumber("Dist_BackStep", 4)
    local local0 = {}
    local local1 = {}
    local local2 = {}
    Common_Clear_Param(local0, local1, local2)
    local local3 = arg1:GetDist(TARGET_ENE_0)
    local local4 = arg1:GetRandam_Int(1, 100)
    local local5 = arg1:GetExcelParam(AI_EXCEL_THINK_PARAM_TYPE__thinkAttr_doAdmirer)
    local local6 = arg1:GetEventRequest()
    local local7 = arg1:GetNumber(0)
    if local5 == 1 and arg1:GetTeamOrder(ORDER_TYPE_Role) == ROLE_TYPE_Kankyaku then
        local0[24] = 50
        local0[28] = 50
    elseif local5 == 1 and arg1:GetTeamOrder(ORDER_TYPE_Role) == ROLE_TYPE_Torimaki then
        local0[1] = 10
        local0[2] = 10
        local0[24] = 40
        local0[28] = 40
    elseif arg1:IsInsideTarget(TARGET_ENE_0, AI_DIR_TYPE_B, 90) then
        local0[20] = 30
        local0[24] = 70
    elseif arg1:IsInsideTarget(TARGET_ENE_0, AI_DIR_TYPE_R, 90) then
        local0[20] = 30
        local0[24] = 70
    elseif arg1:IsInsideTarget(TARGET_ENE_0, AI_DIR_TYPE_L, 90) then
        local0[20] = 30
        local0[24] = 70
    elseif 8 <= local3 then
        local0[1] = 0
        local0[2] = 0
        local0[3] = 0
        local0[4] = 0
        local0[5] = 5
        local0[21] = 0
        local0[24] = 90
        local0[25] = 0
    elseif 5 <= local3 then
        local0[1] = 0
        local0[2] = 0
        local0[3] = 0
        local0[4] = 0
        local0[5] = 20
        local0[21] = 0
        local0[24] = 70
        local0[25] = 0
    elseif 2.5 <= local3 then
        local0[1] = 10
        local0[2] = 10
        local0[3] = 10
        local0[4] = 10
        local0[5] = 0
        local0[21] = 0
        local0[24] = 60
        local0[25] = 0
    else
        local0[1] = 35
        local0[2] = 25
        local0[3] = 15
        local0[4] = 15
        local0[5] = 0
        local0[21] = 0
    end
    local0[1] = SetCoolTime(arg1, arg2, 3000, 6, local0[1], 1)
    local0[2] = SetCoolTime(arg1, arg2, 3003, 10, local0[2], 1)
    local0[3] = SetCoolTime(arg1, arg2, 3004, 10, local0[3], 1)
    local0[4] = SetCoolTime(arg1, arg2, 3005, 10, local0[4], 1)
    local0[5] = SetCoolTime(arg1, arg2, 3008, 10, local0[5], 1)
    local0[6] = SetCoolTime(arg1, arg2, 3010, 10, local0[6], 1)
    local1[1] = REGIST_FUNC(arg1, arg2, ProtoSkeleton_107008_Act01)
    local1[2] = REGIST_FUNC(arg1, arg2, ProtoSkeleton_107008_Act02)
    local1[3] = REGIST_FUNC(arg1, arg2, ProtoSkeleton_107008_Act03)
    local1[4] = REGIST_FUNC(arg1, arg2, ProtoSkeleton_107008_Act04)
    local1[5] = REGIST_FUNC(arg1, arg2, ProtoSkeleton_107008_Act05)
    local1[6] = REGIST_FUNC(arg1, arg2, ProtoSkeleton_107008_Act06)
    local1[20] = REGIST_FUNC(arg1, arg2, ProtoSkeleton_107008_Act20)
    local1[21] = REGIST_FUNC(arg1, arg2, ProtoSkeleton_107008_Act21)
    local1[22] = REGIST_FUNC(arg1, arg2, ProtoSkeleton_107008_Act22)
    local1[23] = REGIST_FUNC(arg1, arg2, ProtoSkeleton_107008_Act23)
    local1[24] = REGIST_FUNC(arg1, arg2, ProtoSkeleton_107008_Act24)
    local1[25] = REGIST_FUNC(arg1, arg2, ProtoSkeleton_107008_Act25)
    local1[28] = REGIST_FUNC(arg1, arg2, ProtoSkeleton_107008_Act28)
    local1[30] = REGIST_FUNC(arg1, arg2, ProtoSkeleton_107008_Act30)
    Common_Battle_Activate(arg1, arg2, local0, local1, REGIST_FUNC(arg1, arg2, ProtoSkeleton_107008_ActAfter_AdjustSpace), local2)
    return 
end

function ProtoSkeleton_107008_Act01(arg0, arg1, arg2)
    Approach_Act_Flex(arg0, arg1, 3.5 - arg0:GetMapHitRadius(TARGET_SELF), 3.5 - arg0:GetMapHitRadius(TARGET_SELF) + 0.9, 3.5 - arg0:GetMapHitRadius(TARGET_SELF) + 4, 0, 0, 2, 3)
    local local0 = 3000
    local local1 = 3001
    local local2 = 2.4 - arg0:GetMapHitRadius(TARGET_SELF) + 1
    local local3 = 8 - arg0:GetMapHitRadius(TARGET_SELF)
    local local4 = 0
    local local5 = 0
    local local6 = arg0:GetRandam_Int(1, 100)
    if local6 <= 10 then
        arg1:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, local0, TARGET_ENE_0, local3, local4, local5, 0, 0)
    elseif local6 <= 30 then
        arg1:AddSubGoal(GOAL_COMMON_ComboAttackTunableSpin, 10, local0, TARGET_ENE_0, local2, local4, local5, 0, 0)
        arg1:AddSubGoal(GOAL_COMMON_ComboFinal, 10, local1, TARGET_ENE_0, local3, 0, 0)
    elseif local6 <= 60 then
        arg1:AddSubGoal(GOAL_COMMON_ComboAttackTunableSpin, 10, local0, TARGET_ENE_0, local2, local4, local5, 0, 0)
        arg1:AddSubGoal(GOAL_COMMON_ComboRepeat, 10, local1, TARGET_ENE_0, 3.2 - arg0:GetMapHitRadius(TARGET_SELF) + 1, local4, local5, 0, 0)
        arg1:AddSubGoal(GOAL_COMMON_ComboFinal, 10, 3002, TARGET_ENE_0, local3, 0, 0)
    else
        arg1:AddSubGoal(GOAL_COMMON_ComboAttackTunableSpin, 10, local0, TARGET_ENE_0, local2, local4, local5, 0, 0)
        arg1:AddSubGoal(GOAL_COMMON_ComboRepeat, 10, local1, TARGET_ENE_0, 2.8 - arg0:GetMapHitRadius(TARGET_SELF) + 1, local4, local5, 0, 0)
        arg1:AddSubGoal(GOAL_COMMON_ComboFinal, 10, 3011, TARGET_ENE_0, local3, 0, 0)
    end
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

function ProtoSkeleton_107008_Act02(arg0, arg1, arg2)
    Approach_Act_Flex(arg0, arg1, 3 - arg0:GetMapHitRadius(TARGET_SELF), 3 - arg0:GetMapHitRadius(TARGET_SELF) + 0.9, 3 - arg0:GetMapHitRadius(TARGET_SELF) + 4, 0, 0, 2, 3)
    arg1:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, 3003, TARGET_ENE_0, 8 - arg0:GetMapHitRadius(TARGET_SELF) + 1, 0, 0, 0, 0)
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

function ProtoSkeleton_107008_Act03(arg0, arg1, arg2)
    Approach_Act_Flex(arg0, arg1, 3.3 - arg0:GetMapHitRadius(TARGET_SELF), 3.3 - arg0:GetMapHitRadius(TARGET_SELF) + 0.9, 3.3 - arg0:GetMapHitRadius(TARGET_SELF) + 4, 0, 0, 2, 3)
    arg1:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, 3004, TARGET_ENE_0, 8 - arg0:GetMapHitRadius(TARGET_SELF) + 1, 0, 0, 0, 0)
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

function ProtoSkeleton_107008_Act04(arg0, arg1, arg2)
    Approach_Act_Flex(arg0, arg1, 3.1 - arg0:GetMapHitRadius(TARGET_SELF), 3.1 - arg0:GetMapHitRadius(TARGET_SELF) + 0.9, 3.1 - arg0:GetMapHitRadius(TARGET_SELF) + 4, 0, 0, 2, 3)
    arg1:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, 3005, TARGET_ENE_0, 8 - arg0:GetMapHitRadius(TARGET_SELF) + 1, 0, 0, 0, 0)
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

function ProtoSkeleton_107008_Act05(arg0, arg1, arg2)
    Approach_Act_Flex(arg0, arg1, 8.3 - arg0:GetMapHitRadius(TARGET_SELF), 8.3 - arg0:GetMapHitRadius(TARGET_SELF) + 0.9, 8.3 - arg0:GetMapHitRadius(TARGET_SELF) + 4, 0, 0, 2, 3)
    arg1:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, 3008, TARGET_ENE_0, 8 - arg0:GetMapHitRadius(TARGET_SELF) + 1, 0, 0, 0, 0)
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

function ProtoSkeleton_107008_Act06(arg0, arg1, arg2)
    Approach_Act_Flex(arg0, arg1, 10 - arg0:GetMapHitRadius(TARGET_SELF), 10 - arg0:GetMapHitRadius(TARGET_SELF) + 0.9, 10 - arg0:GetMapHitRadius(TARGET_SELF) + 4, 0, 0, 2, 3)
    arg1:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, 3010, TARGET_ENE_0, 8 - arg0:GetMapHitRadius(TARGET_SELF) + 1, 0, 0, 0, 0)
    GetWellSpace_Odds = 100
    return GetWellSpace_Odds
end

function ProtoSkeleton_107008_Act20(arg0, arg1, arg2)
    arg1:AddSubGoal(GOAL_COMMON_Turn, 2, TARGET_ENE_0, 0, 0, 0)
    GetWellSpace_Odds = 0
    return GetWellSpace_Odds
end

function ProtoSkeleton_107008_Act21(arg0, arg1, arg2)
    arg1:AddSubGoal(GOAL_COMMON_SidewayMove, 2, TARGET_ENE_0, arg0:GetRandam_Int(0, 1), arg0:GetRandam_Int(30, 45), true, true, -1)
    GetWellSpace_Odds = 0
    return GetWellSpace_Odds
end

function ProtoSkeleton_107008_Act22(arg0, arg1, arg2)
    arg1:AddSubGoal(GOAL_EnemyStepRight, 2, TARGET_ENE_0, 4)
    GetWellSpace_Odds = 0
    return GetWellSpace_Odds
end

function ProtoSkeleton_107008_Act23(arg0, arg1, arg2)
    arg1:AddSubGoal(GOAL_EnemyStepLeft, 2, TARGET_ENE_0, 4)
    GetWellSpace_Odds = 0
    return GetWellSpace_Odds
end

function ProtoSkeleton_107008_Act24(arg0, arg1, arg2)
    arg1:AddSubGoal(GOAL_EnemyStepFront, 2, TARGET_ENE_0, 4)
    GetWellSpace_Odds = 0
    return GetWellSpace_Odds
end

function ProtoSkeleton_107008_Act25(arg0, arg1, arg2)
    arg1:AddSubGoal(GOAL_EnemyStepBack, 2, TARGET_ENE_0, 4)
    GetWellSpace_Odds = 0
    return GetWellSpace_Odds
end

function ProtoSkeleton_107008_Act28(arg0, arg1, arg2)
    local local0 = 10
    if local0 <= arg0:GetDist(TARGET_ENE_0) then
        Approach_Act(arg0, arg1, local0, 12, 0, 3)
    end
    arg1:AddSubGoal(GOAL_COMMON_LeaveTarget, 5, TARGET_ENE_0, local0, TARGET_ENE_0, true, -1)
    return 
end

function ProtoSkeleton_107008_Act30(arg0, arg1, arg2)
    Watching_Parry_Chance_Act(arg0, arg1)
    GetWellSpace_Odds = 0
    return GetWellSpace_Odds
end

function ProtoSkeleton_107008_ActAfter_AdjustSpace(arg0, arg1, arg2)
    arg1:AddSubGoal(GOAL_ProtoSkeleton_107008_AfterAttackAct, 10)
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
    elseif GuardBreak_Act(arg1, arg2, 2.6, 30) then
        arg2:AddSubGoal(GOAL_COMMON_AttackTunableSpin, 10, 3006, TARGET_ENE_0, DIST_Middle, 0, -1)
        return true
    end
    local local0 = arg1:GetDist(TARGET_ENE_0)
    if Damaged_Act(arg1, arg2, 4.5, 50) then
        if 8 <= local0 then
            arg2:ClearSubGoal()
            ProtoSkeleton_107008_Act24(arg1, arg2, paramTbl)
        elseif 3 <= local0 then
            arg2:ClearSubGoal()
            ProtoSkeleton_107008_Act24(arg1, arg2, paramTbl)
        elseif arg1:GetRandam_Int(1, 100) <= 60 then
            arg2:AddSubGoal(GOAL_COMMON_SidewayMove, 3, TARGET_ENE_0, arg1:GetRandam_Int(0, 1), arg1:GetRandam_Int(30, 45), true, true, 9910)
            return true
        end
    end
    return false
end

RegisterTableGoal(GOAL_ProtoSkeleton_107008_AfterAttackAct, "ProtoSkeleton_107008_AfterAttackAct")
REGISTER_GOAL_NO_SUB_GOAL(GOAL_ProtoSkeleton_107008_AfterAttackAct, true)
Goal.Activate = function (arg0, arg1, arg2)
    local local0 = arg1:GetDist(TARGET_ENE_0)
    local local1 = arg1:GetToTargetAngle(TARGET_ENE_0)
    arg1:SetStringIndexedNumber("DistMin_AAA", -99)
    arg1:SetStringIndexedNumber("DistMax_AAA", 15)
    arg1:SetStringIndexedNumber("BaseDir_AAA", AI_DIR_TYPE_F)
    arg1:SetStringIndexedNumber("Angle_AAA", 180)
    arg1:SetStringIndexedNumber("DistMin_Inter_AAA", -99)
    arg1:SetStringIndexedNumber("DistMax_Inter_AAA", 15)
    arg1:SetStringIndexedNumber("BaseAng_Inter_AAA", 0)
    arg1:SetStringIndexedNumber("Ang_Inter_AAA", 180)
    arg1:SetStringIndexedNumber("Odds_Guard_AAA", 50)
    if 7 <= local0 then
        arg1:SetStringIndexedNumber("Odds_NoAct_AAA", 80)
        arg1:SetStringIndexedNumber("Odds_BackAndSide_AAA", 20)
    elseif 4 <= local0 then
        arg1:SetStringIndexedNumber("Odds_Guard_AAA", 0)
        arg1:SetStringIndexedNumber("Odds_NoAct_AAA", 50)
        arg1:SetStringIndexedNumber("Odds_BackAndSide_AAA", 10)
        arg1:SetStringIndexedNumber("Odds_Back_AAA", 10)
        arg1:SetStringIndexedNumber("Odds_Backstep_AAA", 30)
    else
        arg1:SetStringIndexedNumber("Odds_Guard_AAA", 0)
        arg1:SetStringIndexedNumber("Odds_NoAct_AAA", 50)
        arg1:SetStringIndexedNumber("Odds_BackAndSide_AAA", 0)
        arg1:SetStringIndexedNumber("Odds_Back_AAA", 10)
        arg1:SetStringIndexedNumber("Odds_Backstep_AAA", 20)
        arg1:SetStringIndexedNumber("Odds_Sidestep_AAA", 0)
        arg1:SetStringIndexedNumber("Odds_BsAndSide_AAA", 20)
    end
    arg2:AddSubGoal(GOAL_COMMON_AfterAttackAct, 2)
    return 
end

Goal.Update = function (arg0, arg1, arg2)
    return Update_Default_NoSubGoal(arg0, arg1, arg2)
end

return 
