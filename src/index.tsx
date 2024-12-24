/// <reference types="Woby/dist/types/jsx/types" />

import { $, $$, useEffect, useMemo, CSSProperties, ObservableMaybe, type JSX } from 'woby'


export interface ProgressBarProps {
    bgColor?: ObservableMaybe<string>
    completed?: ObservableMaybe<string | number>
    baseBgColor?: ObservableMaybe<string>
    height?: ObservableMaybe<string>
    width?: ObservableMaybe<string>
    margin?: ObservableMaybe<string>
    padding?: ObservableMaybe<string>
    borderRadius?: ObservableMaybe<string>
    labelAlignment?: ObservableMaybe<'left' | 'center' | 'right' | 'outside'>
    labelColor?: ObservableMaybe<string>
    labelSize?: ObservableMaybe<string>
    isLabelVisible?: ObservableMaybe<boolean>
    customLabelStyles?: ObservableMaybe<CSSProperties>
    transitionDuration?: ObservableMaybe<string>
    transitionTimingFunction?: ObservableMaybe<string>
    className?: ObservableMaybe<string>
    dir?: ObservableMaybe<'rtl' | 'ltr' | 'auto'>
    ariaValuemin?: ObservableMaybe<number>
    ariaValuemax?: ObservableMaybe<number>
    ariaValuetext?: ObservableMaybe<string>
    maxCompleted?: ObservableMaybe<number>
    customLabel?: ObservableMaybe<string>
    animateOnRender?: ObservableMaybe<boolean>
    barContainerClassName?: ObservableMaybe<string>
    completedClassName?: ObservableMaybe<string>
    labelClassName?: ObservableMaybe<string>
    initCompletedOnAnimation?: ObservableMaybe<string | number>
}

export const ProgressBar = ({
    bgColor = '#6a1b9a',
    completed,
    baseBgColor = '#e0e0de',
    height = '20px',
    width = '100%',
    margin,
    padding,
    borderRadius = '50px',
    labelAlignment = 'right',
    labelColor = '#fff',
    labelSize = '15px',
    isLabelVisible = true,
    customLabelStyles,
    transitionDuration = '1s',
    transitionTimingFunction = 'ease-in-out',
    className,
    dir = 'ltr',
    ariaValuemin = 0,
    ariaValuemax = 100,
    ariaValuetext = null,
    maxCompleted = 100,
    customLabel,
    animateOnRender = false,
    barContainerClassName,
    completedClassName,
    labelClassName,
    initCompletedOnAnimation = 0,
}: ProgressBarProps): JSX.Element => {
    const getAlignment = (alignmentOption: ProgressBarProps['labelAlignment']) => {
        return useMemo(() => {
            if ($$(alignmentOption) === 'left')
                return 'flex-start'
            else if ($$(alignmentOption) === 'center')
                return 'center'
            else if ($$(alignmentOption) === 'right')
                return 'flex-end'
            else
                return null
        })
    }

    const alignment = getAlignment(labelAlignment)

    const initCompletedOnAnimationStr = useMemo(() =>
        typeof $$(initCompletedOnAnimation) === 'number'
            ? `${$$(initCompletedOnAnimation)}%`
            : $$(initCompletedOnAnimation)
    )

    const getFillerWidth = (maxCompletedValue: ProgressBarProps['maxCompleted'], completedValue: ProgressBarProps['completed']) => {
        return useMemo(() => {
            if ($$(maxCompletedValue)) {
                const ratio = Number($$(completedValue) ?? 0) / $$(maxCompletedValue)
                return ratio > 1 ? '100%' : `${ratio * 100}%`
            }
            return initCompletedOnAnimationStr()
        })
    }

    const fillerWidth = getFillerWidth(maxCompleted, completed)

    const initWidth = $($$(initCompletedOnAnimationStr))

    const containerStyles = useMemo<CSSProperties>(() => ({
        height: height,
        background: baseBgColor,
        borderRadius: borderRadius,
        padding: padding,
        width: width,
        margin: margin,
        overflow: 'hidden',
    }))

    const fillerStyles = useMemo<CSSProperties>(() => ({
        height: height,
        width: $$(animateOnRender) ? $$(initWidth) : $$(fillerWidth),
        background: bgColor,
        transition: () => `width ${$$(transitionDuration)} ${$$(transitionTimingFunction)}`,
        borderRadius: 'inherit',
        display: 'flex',
        alignItems: 'center',
        justifyContent: $$(labelAlignment) !== 'outside' && $$(alignment) ? $$(alignment) : 'normal',
    }))

    const labelStyles = useMemo<CSSProperties>(() => ({
        padding: $$(labelAlignment) === 'outside' ? '0 0 0 5px' : '5px',
        color: labelColor,
        fontWeight: 'bold',
        fontSize: labelSize,
        display: !$$(isLabelVisible) ? 'none' : 'initial',
        ...customLabelStyles,
    }))

    const outsideStyles = useMemo(() => ({
        display: $$(labelAlignment) === 'outside' ? 'flex' : 'initial',
        alignItems: $$(labelAlignment) === 'outside' ? 'center' : 'initial',
    }))

    const completedStr = useMemo(() => typeof $$(completed) === 'number' ? `${$$(completed)}%` : `${$$(completed)}`)

    const labelStr = useMemo(() => $$(customLabel) ? $$(customLabel) : completedStr)

    useEffect(() => {
        if ($$(animateOnRender)) {
            requestAnimationFrame(() => initWidth($$(fillerWidth)))
        }
    })

    return <div
        style={() => $$(className) ? undefined : $$(outsideStyles)}
        class={className}
        dir={dir}
        role="progressbar"
        aria-valuenow={() => parseFloat($$(labelStr) as string)}
        aria-valuemin={ariaValuemin}
        aria-valuemax={ariaValuemax}
        aria-valuetext={() => $$(ariaValuetext) === null ? $$(labelStr) : $$(ariaValuetext)}
    >
        <div style={() => $$(barContainerClassName) ? undefined : $$(containerStyles)} class={barContainerClassName}>
            <div style={() => $$(completedClassName) ? undefined : $$(fillerStyles)} class={completedClassName}>
                {() => $$(labelAlignment) !== 'outside' && (
                    <span style={() => $$(labelClassName) ? undefined : $$(labelStyles)} class={labelClassName} >
                        {labelStr}
                    </span>
                )}
            </div>
        </div>
        {() => $$(labelAlignment) === 'outside' && (
            <span style={() => $$(labelClassName) ? undefined : $$(labelStyles)} class={labelClassName}>
                {labelStr}
            </span>
        )}
    </div>
}

