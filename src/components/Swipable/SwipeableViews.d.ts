import * as React from 'react'

export type OnChangeIndexCallback = (index: number, indexLatest: number) => void

export type OnTransitionEndCallback = () => void

export type OnSwitchingCallback = (index: number, type: OnSwitchingCallbackTypeDescriptor) => void

export type OnSwitchingCallbackTypeDescriptor = 'move' | 'end'

export type AxisType = 'x' | 'x-reverse' | 'y' | 'y-reverse'

export type ListnerType = 'root' | 'document'

export interface SpringConfig {
	duration: string
	easeFunction: string
	delay: string
}

export interface SwipeableViewsProps extends React.HTMLProps<HTMLDivElement> {
	animateHeight?: boolean
	animateTransitions?: boolean
	axis?: AxisType
	containerStyle?: React.CSSProperties
	disabled?: boolean
	/*
	 * This is the config used to disable lazy loading, if true it will render all the views in first rendering.
	 */
	disableLazyLoading?: boolean
	enableMouseEvents?: boolean
	hysteresis?: number
	ignoreNativeScroll?: boolean
	index?: number
	onChangeIndex?: OnChangeIndexCallback
	onSwitching?: OnSwitchingCallback
	onTransitionEnd?: OnTransitionEndCallback
	resistance?: boolean
	style?: React.CSSProperties
	slideStyle?: React.CSSProperties
	springConfig?: SpringConfig
	slideClassName?: string
	threshold?: number
	listner?: ListnerType
}

export interface SwipeableViewsState {
	indexCurrent?: number
	indexLatest?: number
	isDragging?: boolean
	isFirstRender?: boolean
	heightLatest?: number
	displaySameSlide?: boolean
}

export default class SwipeableViews extends React.Component<
	SwipeableViewsProps,
	SwipeableViewsState
> {}
