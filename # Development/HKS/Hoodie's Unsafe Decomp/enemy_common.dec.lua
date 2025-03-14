﻿function ()
function SetVariable(name, value)
    act(148, name, value)
    
end

function ExecEvent(state)
    act(9000, "イベント実行[" .. state .. "]")
    hkbFireEvent(state)
    return 
    
end

function CallActionState(action_type)
    act(9103, action_type)
    
end

function ExecAICommonAction(event_name, action_number)
    g_ActionNumber = action_number
    CallActionState(action_number)
    ExecEvent(event_name)
    
end

function ExecAIAttack(action_number)
    g_ActionNumber = action_number
    CallActionState(action_number)
    ExecEvent("W_Attack" .. action_number)
    
end

function ExecAIStep(action_number)
    g_ActionNumber = action_number
    CallActionState(0)
    SetVariable("StepNumber", action_number)
    ExecEvent("W_Step" .. g_ActionNumber)
    
end

function ExecAIAction()
    local action_type = env(ESD_ENV_GetAIActionType)
    if action_type <= 0 then
        return FALSE
    end
    if action_type ~= 9910 and g_IsGuard == TRUE then
        g_IsGuard = FALSE
        SetVariable("IdleIndex", STATE_DEFAULT)
        SetVariable("MoveIndex", STATE_DEFAULT)
        ExecEvent("W_GuardEnd")
        return TRUE
    end
    if not (action_type < 700 or action_type >= 800) or action_type >= 6000 and action_type < 6010 then
        ExecAIStep(action_type)
        return TRUE
    end
    if action_type >= 1300 and action_type <= 1303 then
        ExecAICommonAction("W_WeaponChange1", action_type)
        return TRUE
    end
    if action_type >= 3000 and action_type < 4000 then
        ExecAIAttack(action_type)
        return TRUE
    end
    if action_type == 4600 then
        ExecAICommonAction("W_EstStart", 4600)
        return TRUE
    end
    if action_type == LADDER_REQUEST_START_BOTTOM then
        ExecEvent("W_LadderStartBottom")
        return TRUE
    elseif action_type == LADDER_REQUEST_START_TOP then
        ExecEvent("W_LadderStartTop")
        return TRUE
    end
    if action_type == 9910 and FALSE == g_IsGuard then
        g_IsGuard = TRUE
        SetVariable("IdleIndex", STATE_GUARD)
        SetVariable("MoveIndex", STATE_GUARD)
        ExecEvent("W_GuardStart")
        return TRUE
    end
    return FALSE
    
end

function ExecTurn()
    local turn_angle = hkbGetVariable("TurnAngle")
    if math.abs(turn_angle) < 45 then
        return FALSE
    end
    if g_IsGuard == TRUE then
        return FALSE
    end
    if turn_angle >= -135 and turn_angle < -45 then
        act(9105, 90)
        SetVariable("TurnIndex", 0)
    elseif turn_angle >= 45 and turn_angle < 135 then
        act(9105, 90)
        SetVariable("TurnIndex", 1)
    elseif turn_angle >= -180 and turn_angle < -135 then
        act(9105, 180)
        SetVariable("TurnIndex", 2)
    elseif turn_angle >= 135 and turn_angle <= 180 then
        act(9105, 180)
        SetVariable("TurnIndex", 3)
    end
    act(9104)
    ExecEvent("W_Turn")
    return TRUE
    
end

function ExecAICancelAction()
    local action_type = env(ESD_ENV_GetAIChainStepType)
    if action_type > 0 and (not (action_type < 700 or action_type >= 800) or action_type >= 6000 and action_type < 6010) then
        ExecAIStep(action_type)
        return TRUE
    end
    action_type = env(ESD_ENV_GetAIAtkCancelType)
    if action_type > 0 and action_type ~= 9910 and TRUE == g_IsGuard then
        g_IsGuard = FALSE
        SetVariable("IdleIndex", STATE_DEFAULT)
        SetVariable("MoveIndex", STATE_DEFAULT)
        ExecEvent("W_GuardEnd")
        return TRUE
    end
    if action_type > 0 then
        if action_type >= 3000 and action_type < 4000 then
            ExecAIAttack(action_type)
            return TRUE
        end
        if action_type == 4600 then
            ExecAICommonAction("W_EstStart", 4600)
            return TRUE
        end
    end
    action_type = env(ESD_ENV_GetAIChainActionType)
    if action_type > 0 then
        if action_type >= 3000 and action_type < 4000 then
            ExecAIAttack(action_type)
            return TRUE
        end
        if action_type == 4600 then
            ExecAICommonAction("W_EstStart", 4600)
            return TRUE
        end
    end
    if action_type == 9910 and g_IsGuard == FALSE then
        g_IsGuard = TRUE
        SetVariable("IdleIndex", STATE_GUARD)
        SetVariable("MoveIndex", STATE_GUARD)
        ExecEvent("W_GuardStart")
        return TRUE
    end
    if env(ESD_ENV_DS3IsMoveCancelPossible) == TRUE and TRUE == MoveStart() then
        return TRUE
    end
    return FALSE
    
end

function ExecGuardAction()
    local guard_damage = env(ESD_ENV_GetGuardLevelAction)
    if guard_damage <= GUARD_LEVEL_NONE then
        return FALSE
    end
    if guard_damage == GUARD_LEVEL_SMALL then
        SetVariable("GuardIndex", 0)
    elseif guard_damage == GUARD_LEVEL_MIDDLE then
        SetVariable("GuardIndex", 0)
    elseif guard_damage == GUARD_LEVEL_LARGE then
        SetVariable("GuardIndex", 1)
    elseif guard_damage == GUARD_LEVEL_EXLARGE then
        SetVariable("GuardIndex", 1)
    end
    ExecEvent("W_Guard")
    return TRUE
    
end

function MoveStart()
    if g_MoveSpeedLevel <= 0 then
        return FALSE
    end
    if -45 <= g_MoveAngle and g_MoveAngle < 45 then
        if g_MoveSpeedLevel > 0.75 then
            g_MoveState = MOVE_RUN
            ExecEvent("W_Run")
            return TRUE
        else
            g_MoveState = MOVE_WALK_FRONT
            ExecEvent("W_WalkFront")
            return TRUE
        end
    elseif g_MoveAngle >= 45 and g_MoveAngle < 135 then
        g_MoveState = MOVE_WALK_RIGHT
        ExecEvent("W_WalkRight")
        return TRUE
    elseif not (g_MoveAngle < 135 or g_MoveAngle > 180) or g_MoveAngle >= -180 and g_MoveAngle <= -135 then
        g_MoveState = MOVE_WALK_BACK
        ExecEvent("W_WalkBack")
        return TRUE
    elseif g_MoveAngle >= -135 and -45 > g_MoveAngle then
        g_MoveState = MOVE_WALK_LEFT
        ExecEvent("W_WalkLeft")
        return TRUE
    end
    return FALSE
    
end

function MoveUpdate()
    if g_MoveSpeedLevel <= 0 then
        ExecEvent("W_Idle")
        g_MoveState = MOVE_STOP
        return TRUE
    else
        if -45 <= g_MoveAngle and g_MoveAngle < 45 then
            if g_MoveSpeedLevel > 0.75 and g_MoveState ~= MOVE_RUN then
                g_MoveState = MOVE_RUN
                ExecEvent("W_Run")
                return TRUE
            elseif g_MoveState ~= MOVE_WALK_FRONT and g_MoveSpeedLevel < 0.75 then
                g_MoveState = MOVE_WALK_FRONT
                ExecEvent("W_WalkFront")
                return TRUE
            end
        elseif g_MoveState ~= MOVE_WALK_RIGHT and g_MoveAngle >= 45 and g_MoveAngle < 135 then
            g_MoveState = MOVE_WALK_RIGHT
            ExecEvent("W_WalkRight")
            return TRUE
        elseif g_MoveState ~= MOVE_WALK_BACK and (not (g_MoveAngle < 135 or g_MoveAngle > 180) or g_MoveAngle >= -180 and g_MoveAngle <= -135) then
            g_MoveState = MOVE_WALK_BACK
            ExecEvent("W_WalkBack")
            return TRUE
        elseif g_MoveState ~= MOVE_WALK_LEFT and g_MoveAngle >= -135 and -45 > g_MoveAngle then
            g_MoveState = MOVE_WALK_LEFT
            ExecEvent("W_WalkLeft")
            return TRUE
        end
        return FALSE
    end
    
end

function ExecDamage()
    local damage_level = env(ESD_ENV_GetDamageLevel)
    local damage_type = env(ESD_ENV_GetReceivedDamageType)
    if damage_type == 5 then
        ExecEvent("W_DamageParry")
        return TRUE
    end
    if damage_level <= 0 then
        return FALSE
    end
    local hp = env(ESD_ENV_GetHP)
    local is_weak = env(ESD_ENV_GetIsWeakPoint)
    if is_weak == TRUE then
        if damage_type == DAMAGE_TYPE_DEATH then
            SetVariable("DeathIndex", DEATH_INDEX_WEAK)
            ExecEvent("W_Death")
            return TRUE
        else
            ExecEvent("W_DamageWeak")
            return TRUE
        end
    end
    if damage_type == DAMAGE_TYPE_SKYDEATH or env(ESD_ENV_IsFlying) == TRUE and hp <= 0 then
        SetVariable("DeathIndex", DEATH_INDEX_SKY)
        ExecEvent("W_Death")
        return TRUE
    end
    if damage_type == DAMAGE_TYPE_DEATH or hp <= 0 then
        if damage_level == 4 or damage_level == 7 or damage_level == 9 or damage_level == 10 or damage_level == 11 then
            SetVariable("DeathIndex", DEATH_INDEX_BLAST)
            ExecEvent("W_Death")
            return TRUE
        elseif damage_level == 6 then
            SetVariable("DeathIndex", DEATH_INDEX_DUSTER)
            ExecEvent("W_Death")
            return TRUE
        else
            SetVariable("DeathIndex", DEATH_INDEX_DEFAULT)
            ExecEvent("W_Death")
            return TRUE
        end
    end
    act(143)
    local damage_direction = env(ESD_ENV_GetReceivedDamageDirection)
    SetVariable("DamageDirection", damage_direction)
    if damage_level == DAMAGE_LEVEL_SMALL then
        ExecEvent("W_DamageSmall")
        return TRUE
    elseif damage_level == DAMAGE_LEVEL_MIDDLE then
        ExecEvent("W_DamageMiddle")
        return TRUE
    elseif damage_level == DAMAGE_LEVEL_LARGE then
        ExecEvent("W_DamageLarge")
        return TRUE
    elseif damage_level == DAMAGE_LEVEL_EXLARGE then
        act(125)
        ExecEvent("W_DamageLarge")
        return TRUE
    elseif damage_level == DAMAGE_LEVEL_PUSHED then
        ExecEvent("W_DamagePushed")
        return TRUE
    elseif damage_level == DAMAGE_LEVEL_DUSTERED then
        ExecEvent("W_DamageDuster")
        return TRUE
    elseif damage_level == DAMAGE_LEVEL_BLAST then
        act(125)
        ExecEvent("W_DamageBlast")
        return TRUE
    elseif damage_level == DAMAGE_LEVEL_MINIMUM then
        ExecEvent("W_DamageMinimum")
        return TRUE
    end
    return FALSE
    
end

function ExecFall()
    if env(ESD_ENV_IsFalling) == FALSE then
        return FALSE
    end
    SetVariable("FallIndex", FALL_INDEX_DEFAULT)
    ExecEvent("W_Fall")
    return TRUE
    
end

function ExecLand()
    if env(ESD_ENV_IsLanding) == FALSE then
        return FALSE
    end
    local height = env(ESD_ENV_GetFallHeight) / 100
    local hp = env(ESD_ENV_GetHP)
    local fall_type = hkbGetVariable("FallIndex")
    if fall_type == FALL_INDEX_DEFAULT then
        if height > 20 then
            SetVariable("DeathIndex", DEATH_INDEX_LAND)
            ExecEvent("W_Death")
            return TRUE
        elseif height > 5 then
            SetVariable("LandIndex", LAND_INDEX_HEAVY)
            ExecEvent("W_Land")
            return TRUE
        elseif height > 2 then
            SetVariable("LandIndex", LAND_INDEX_DEFAULT)
            ExecEvent("W_Land")
            return TRUE
        else
            ExecEvent("W_Idle")
            return TRUE
        end
    elseif fall_type == FALL_INDEX_FRONT then
        if height > 20 or hp <= 0 then
            SetVariable("DeathIndex", DEATH_INDEX_LANDFRONT)
            ExecEvent("W_Death")
            return TRUE
        else
            SetVariable("LandIndex", LAND_INDEX_FRONT)
            ExecEvent("W_Land")
            return TRUE
        end
    elseif fall_type == FALL_INDEX_BACK then
        if height > 20 or hp <= 0 then
            SetVariable("DeathIndex", DEATH_INDEX_LANDBACK)
            ExecEvent("W_Death")
            return TRUE
        else
            SetVariable("LandIndex", LAND_INDEX_BACK)
            ExecEvent("W_Land")
            return TRUE
        end
    end
    return FALSE
    
end

function ExecFallDamage()
    if env(ESD_ENV_IsFalling) == FALSE then
        return FALSE
    end
    local damage_direction = env(ESD_ENV_GetReceivedDamageDirection)
    if damage_direction >= DAMAGE_DIRECTION_LEFT and damage_direction <= DAMAGE_DIRECTION_FRONT then
        SetVariable("FallIndex", FALL_INDEX_FRONT)
    elseif damage_direction == DAMAGE_DIRECTION_BACK then
        SetVariable("FallIndex", FALL_INDEX_BACK)
    else
        SetVariable("FallIndex", FALL_INDEX_DEFAULT)
    end
    ExecEvent("W_Fall")
    return TRUE
    
end

function SetIdleFlag()
    act(133, -1)
    act(135)
    act(139)
    act(102, 255)
    act(111, FALSE)
    act(101, TRUE)
    act(109, -1)
    act(102, 1)
    act(103, 0)
    CallActionState(0)
    
end

function IdleCommonFunction()
    act(101, TRUE)
    if TRUE == env(ESD_ENV_DS3HasThrowRequest) then
        return 
    end
    if TRUE == ExecGuardAction() then
        return 
    end
    if TRUE == ExecDamage() then
        return 
    end
    if TRUE == ExecFall() then
        return 
    end
    if TRUE == ExecAIAction() then
        return 
    end
    if TRUE == MoveStart() then
        return 
    end
    if TRUE == ExecTurn() then
        return 
    end
    
end

function GuardCommonTransFunction()
    if env(ESD_ENV_DS3HasThrowRequest) == TRUE then
        return 
    end
    local action_type = env(ESD_ENV_GetAIActionType)
    if TRUE == ExecGuardAction() then
        return 
    end
    if TRUE == ExecDamage() then
        return 
    end
    if TRUE == ExecFall() then
        return 
    end
    if TRUE == ExecAICancelAction() then
        return 
    end
    
end

function MoveCommonFunction()
    act(101, TRUE)
    if TRUE == env(ESD_ENV_DS3HasThrowRequest) then
        return 
    end
    if TRUE == ExecGuardAction() then
        return 
    end
    if TRUE == ExecDamage() then
        return 
    end
    if TRUE == ExecFall() then
        return 
    end
    if TRUE == ExecAIAction() then
        return 
    end
    if TRUE == MoveUpdate() then
        return 
    end
    
end

function AttackCommonFunction()
    CallActionState(g_ActionNumber)
    if env(ESD_ENV_DS3HasThrowRequest) == TRUE then
        return 
    end
    if TRUE == ExecDamage() then
        return 
    end
    if TRUE == ExecFall() then
        return 
    end
    if TRUE == ExecAICancelAction() then
        CallActionState(0)
        return 
    end
    if env(ESD_ENV_DS3IsMoveCancelPossible) == TRUE and TRUE == MoveStart() then
        CallActionState(0)
        return TRUE
    end
    
end

function StepCommonFunction()
    CallActionState(g_ActionNumber)
    if env(ESD_ENV_DS3HasThrowRequest) == TRUE then
        return 
    end
    if TRUE == ExecDamage() then
        return 
    end
    if TRUE == ExecFall() then
        return 
    end
    if TRUE == ExecAICancelAction() then
        CallActionState(0)
        return 
    end
    if env(ESD_ENV_DS3IsMoveCancelPossible) == TRUE and TRUE == MoveStart() then
        return TRUE
    end
    
end

function DamageCommonFunction()
    if env(ESD_ENV_DS3HasThrowRequest) == TRUE then
        return 
    end
    if TRUE == ExecFallDamage() then
        return 
    end
    if TRUE == ExecDamage() then
        return 
    end
    if TRUE == ExecFall() then
        return 
    end
    if TRUE == ExecAICancelAction() then
        return 
    end
    if env(ESD_ENV_DS3IsMoveCancelPossible) == TRUE and TRUE == MoveStart() then
        return TRUE
    end
    
end

function FallCommonFunction()
    if env(ESD_ENV_DS3HasThrowRequest) == TRUE then
        return 
    end
    if TRUE == ExecLand() then
        return 
    end
    
end

function LandCommonFunction()
    CallActionState(g_ActionNumber)
    if env(ESD_ENV_DS3HasThrowRequest) == TRUE then
        return 
    end
    if TRUE == ExecDamage() then
        return 
    end
    if TRUE == ExecFall() then
        return 
    end
    if TRUE == ExecAICancelAction() then
        return 
    end
    if env(ESD_ENV_DS3IsMoveCancelPossible) == TRUE and TRUE == MoveStart() then
        return TRUE
    end
    
end

function CommonThrowDefFunction()
    act(9102)
    act(103, IS_THROW_INVALID)
    act(102, IS_THROW_INVALID)
    if env(ESD_ENV_DS3GetGeneralTAEFlag, 1) == TRUE then
        local hp = env(ESD_ENV_GetHP)
        if hp <= 0 then
            ExecEvent("W_ThrowDeath")
        end
    end
    if env(ESD_ENV_DS3IsMoveCancelPossible) == TRUE and TRUE == MoveStart() then
        return TRUE
    end
    
end

function IncNum(num)
    local str = nil
    if num < 10 then
        str = "Debug0"
    else
        str = "Debug"
    end
    vector = hkbGetVariable(str .. num)
    vector[0] = vector[0] + 1
    vector[1] = g_FrameCount
    SetVariable(str .. num, vector)
    
end

function DebugPrint(pos, val)
    local str = nil
    if pos < 10 then
        str = "Debug0"
    else
        str = "Debug"
    end
    vector = hkbGetVariable(str .. pos)
    vector[0] = val
    vector[1] = g_FrameCount
    SetVariable(str .. pos, vector)
    
end

function DebugPrintNext(val)
    g_DebugCounter = g_DebugCounter + 1
    if g_DebugCounter > 10 then
        g_DebugCounter = 1
    end
    DebugPrint(g_DebugCounter, val)
    
end

local g_DebugCounterSub = 0
function DebugPrints(val)
     = g_DebugCounterSub + 1
    if g_DebugCounterSub > 4 then
         = 1
        g_DebugCounter = g_DebugCounter + 1
        if g_DebugCounter > 10 then
            g_DebugCounter = 1
        end
    end
    local str = nil
    if g_DebugCounter < 10 then
        str = "Debug0"
    else
        str = "Debug"
    end
    vector = hkbGetVariable(str .. g_DebugCounter)
    vector[g_DebugCounterSub - 1] = val
    SetVariable(str .. g_DebugCounter, vector)
    
end

function PrintArray(val, num, index)
    local str = nil
    if num < 10 then
        str = "Debug0"
    else
        str = "Debug"
    end
    vector = hkbGetVariable(str .. num)
    vector[index] = val
    SetVariable(str .. num, vector)
    
end

function PrintString(str)
    act(9000, str)
    
end

function Update()
    g_FrameCount = g_FrameCount + 1
    g_MoveSpeedLevel = hkbGetVariable("MoveSpeedLevel")
    g_MoveAngle = hkbGetVariable("MoveAngle")
    act(101, FALSE)
    
end

function Initialize()
    
end

global = {}
function dummy()
    
end

global.__index = function (table, element)
    return dummy
    
end

setmetatable(_G, global)

end
