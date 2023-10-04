import { $, useEffect, ObservableMaybe, Observable } from "voby"
export const useViewCounter = (slug: ObservableMaybe<string>): { views: Observable<number> } => {
  const views = $<number>(null)

  useEffect(() => {
    // Don't count views on localhost
    if (process.env.NODE_ENV !== "production") {
      return
    }

    fetch(`https://my-projects-dashboard.vercel.app/api/views/${slug}`, {
      mode: "no-cors",
    })
      .then((res) => res.json())
      .then((json) => {
        views(json.totalViews)
      })
      .catch((err) => console.error(err.message))
  })
  return { views }
}

