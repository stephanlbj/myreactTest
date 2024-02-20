export type dashboardType = {
    id:number
    title:string
}

export type isSubVisibleProps ={
    
        name:string
        visible:boolean

}

export type menuItemProps =  {
    name: string;
    Icon?: IconType;
    subItem?: string[];
} 


export type sideMenuProps = {
    title: string
    children:menuItemProps[]
}

export type visitsType ={
    percentage: string;
    label: string;
}


export type statisticType ={
    label: string;
    qty: string;
    Registrations: string;
    registration_number: string;
    rate: string;
    rateNum: string;
}
 