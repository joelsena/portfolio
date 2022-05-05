import {
    createContext,
    Dispatch,
    FC,
    ReactNode,
    SetStateAction,
    useContext,
    useEffect,
    useState
} from 'react'
import { Vector3 } from '@react-three/fiber'

export type ModelProportionsType = {
    [key: string]: {
        [resKey: string]: {
            position: Vector3
            scale: Vector3
        }
    }
}

const INITIAL_BREAKPOINTS = {
    sm: 320,
    md: 768,
    // lg: 960,
    lg: 1024,
    xl: 1200,
    '2xl': 1536
}

type DataContextType = {
    windowSize: number
    modelProportions: ModelProportionsType
    breakpoints: typeof INITIAL_BREAKPOINTS
    getWidth(): void
    getHeight(): void
    setWindowSize: Dispatch<SetStateAction<number>>
}
interface DataContextProps {
    children: ReactNode
}

const DataContext = createContext({} as DataContextType)

const MODEL_PROPORTIONS: ModelProportionsType = {
    THUMBS_UP: {
        '2xl': {
            scale: [
                1 / Math.pow(6.8, 2),
                1 / Math.pow(6.8, 2),
                1 / Math.pow(6.8, 2)
            ],
            position: [0.5, -2.1, 0]
        },
        xl: {
            scale: [
                1 / Math.pow(8.5, 2),
                1 / Math.pow(8.5, 2),
                1 / Math.pow(8.5, 2)
            ],
            position: [0.15, 0, 0]
        }
    },

    EARTH: {
        '2xl': {
            scale: [0.02, 0.02, 0.02],
            position: [0, -2.1, 0]
        },
        xl: {
            scale: [0.015, 0.015, 0.015],
            position: [0, -2.1, 0]
        },
        lg: {
            scale: [0.015, 0.005, 0.005],
            position: [0, -2.1, 0]
        }
    }
}

export const DataProvider: FC<DataContextProps> = ({ children }) => {
    const [windowSize, setWindowSize] = useState(0)
    const [modelProportions, setModalProportions] = useState(MODEL_PROPORTIONS)
    const [breakpoints, setBreakpoints] = useState(INITIAL_BREAKPOINTS)

    const [isClientSide, setIsClientSide] = useState(false)

    useEffect(() => {
        setWindowSize(getWidth())
        setIsClientSide(true)
    }, [])

    if (isClientSide) {
        window.addEventListener('resize', () => setWindowSize(getWidth()))
    }

    function getWidth() {
        return Math.max(
            document.body.scrollWidth,
            document.documentElement.scrollWidth,
            document.body.offsetWidth,
            document.documentElement.offsetWidth,
            document.documentElement.clientWidth
        )
    }

    function getHeight() {
        return Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.documentElement.clientHeight
        )
    }

    return (
        <DataContext.Provider
            value={{
                windowSize,
                modelProportions,
                breakpoints,
                getWidth,
                getHeight,
                setWindowSize
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export function useDataContext() {
    const ctx = useContext(DataContext)

    if (!ctx || Object.keys(ctx).length === 0) {
        throw new Error('useDataContext must be used within an DataProvider')
    }

    return ctx
}
