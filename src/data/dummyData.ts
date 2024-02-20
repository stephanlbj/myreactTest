
import { sideMenuProps } from "../@types";
import {AiOutlinePieChart,CgHome, CiGrid2H, CiGrid2V, CiGrid41, FaFire, FaRegUser, FiMapPin, FiPackage, GrCart, HiOutlineChatBubbleLeftEllipsis, HiOutlineMail, IoDocumentTextOutline, IoMdMenu, PiSquaresFour, RiBubbleChartLine} from "../Icons/index"
 

export const sideMenu : sideMenuProps[] = [
   
    {
        title:"",
        children: [
            {
                name:"Dashboard",
                Icon:CgHome,
                subItem:["Analytics", "Visits", "Widgets"]
            },
            {
                name:"Users",
                Icon:FaRegUser,
                subItem:["User Management", "My Profile", "Edit profile", "Change password"]
            },
            {
                name:"Chat",
                Icon:HiOutlineChatBubbleLeftEllipsis
             },
             {
                name:"E- commerce",
                Icon:GrCart,
                subItem:["Product Management", "Products Grid", 
                "Produc Page"]
            },
        
            {
                name:"Sing Package",
                Icon:FiPackage,
             },
        
             {
                name:"Email",
                Icon:HiOutlineMail,
             },
             {
                name:"Documentation",
                Icon:IoDocumentTextOutline
             }
        ]
    }
    ,
     {
        title: "TEMPLATE",
        children: [
            {
                name:"Core",
                Icon:PiSquaresFour,
                subItem:["Typography", "Colors", "Grid"]
            },
            {
                name:"UI Elements",
                Icon:RiBubbleChartLine,
                subItem:["Alerts", "Badge", 
                "Buttons", "Card", "Carousel", "Jumbotron",
                "Icons", "List Groups", 
                "Modal", "Nav", "Navbar", "Notifications",
                "Paginations", 
                "Popovers & Tooltips", "Progress", "Tabs & Accordion"]
            },
            {
                name:"Forms",
                Icon:CiGrid2V,
                subItem:["Forms Elements", "Forms Validation", 
                "Forms Wizard"]
             },
             {
                name:"Charts",
                Icon:AiOutlinePieChart,
                subItem:["Charts Overview", "Apex charts", 
                "Echarts Charts", "Highcharts Charts"]
            },
        
            {
                name:"Grid",
                Icon:CiGrid41
                ,
             },
        
             {
                name:"Tables",
                Icon:CiGrid2H,
                subItem:["Tables basic", "tables Dynamic", 
            ]
             },
             {
                name:"Maps",
                Icon:FiMapPin,
                subItem:["Google Maps", "Vector Map", 
               ]
             },
        
             {
                name:"Extra",
                Icon:FaFire,
                subItem:["Calendar", "Invoice", 
                "Login page", "Error Page", "Gallery", "Search Result",
                "Time line"]
             },
             {
                name:"Menu Levels",
                Icon:IoMdMenu,
                subItem:["Level 1.1", "Level 1.2", 
               ]
        
             },
        ]

     },

  
   
]


export const labels = [
    "My Recent",
    "Starred",
    "Background"
]
 