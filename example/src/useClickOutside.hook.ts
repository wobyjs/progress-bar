import { useEffect, $, $$, ObservableMaybe, isObservable, Observable, type JSX } from "voby"
// import { TargetedEvent } from "voby/dist/types/types"

export const useClickOutside = (initialIsVisible: ObservableMaybe<boolean>): { ref: Observable<HTMLElement>, isVisible: Observable<boolean> } => {
  const isVisible = isObservable(initialIsVisible) ? initialIsVisible : $(initialIsVisible)
  const ref = $<HTMLElement>(null)

  const handleClickOutside = (event: JSX.TargetedEvent) => {
    if ($$(ref) && !$$(ref).contains(event.target as any)) {
      isVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true)

    return () => {
      document.removeEventListener("click", handleClickOutside, true)
    }
  })

  return { ref, isVisible }
}

