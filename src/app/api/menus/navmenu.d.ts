export type navmenu = {
    id: number
    pid: number
    type: string
    title: string
    path: string
    icon: string
    weigh: number
    status: string
    children?: any[]
    updatetime: Date | null
    createtime: Date | null
}