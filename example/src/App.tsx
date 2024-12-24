import { } from 'woby'
import { useViewCounter } from "./useViewCounter.hook"
import { DemoApp } from "./DemoApp"

export const App = () => {
    const getSlug = () => {
        let slug = window.location.pathname
        if (slug.charAt(0) === "/") {
            slug = slug.substring(1)
        }
        return slug
    }
    useViewCounter(getSlug())

    return <div class="App" >
        <DemoApp />
    </div>
}
