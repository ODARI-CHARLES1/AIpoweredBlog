import { useContext } from 'react'
import {AppContexts} from '../../Contexts/AppContexts'

export const useAppContexts=()=>{
    return useContext(AppContexts)
}