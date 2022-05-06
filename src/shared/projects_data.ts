import RVHistory from '../assets/previews/rv_history_preview.png'
import Expose from '../assets/previews/expose_preview.png'
import Scoutnet from '../assets/previews/scoutnet_preview.png'
import SmartStorage from '../assets/previews/smart_preview.png'

import RVHistoryNormal from '../assets/previews/rv_history_normal.png'
import ExposeNormal from '../assets/previews/expose_normal.png'
import ScoutnetNormal from '../assets/previews/scoutnet_normal.png'
import SmartStorageNormal from '../assets/previews/smart_storage_normal.png'

export const projects = [
    {
        description:
            'Sítios arqueológicos na palma de sua mão. #reactjs #nextjs',
        accessLink: 'https://rv-history.vercel.app',
        title: 'VR History',
        image: { preview: RVHistory, normal: RVHistoryNormal },
        year: 2021,
        inverted: false
    },
    {
        description:
            'Aplicativo de fidelidade para clientes da empresa e site administrativo. #reactjs #reactnative',
        accessLink:
            'https://play.google.com/store/apps/details?id=com.expose.exposefidelidade',
        title: 'Expose Fidelidade',
        image: { preview: Expose, normal: ExposeNormal },
        year: 2021,
        inverted: true
    },
    {
        description:
            'Projeto que fiz durante meu ensino médio no intuito de organizar as dispensa das pessoas e ajudar a economizar. #reactjs',
        accessLink: 'https://smartstorage-deploy.herokuapp.com',
        title: 'Smart Storage v1',
        image: { preview: SmartStorage, normal: SmartStorageNormal },
        year: 2020,
        inverted: false
    },
    {
        description:
            'Startup com o propósito de criar soluções para os problemas de organização e falta de marketing da comunidade escoteira do Brasil. #angular2+ #nodejs',
        accessLink: 'https://landpage-scoutnet-mvp.herokuapp.com',
        title: 'Scoutnet',
        image: { preview: Scoutnet, normal: ScoutnetNormal },
        year: 2020,
        inverted: true
    }
]
