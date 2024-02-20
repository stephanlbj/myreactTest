import { notificationType } from "."
import {AiOutlineLike, FcDocument, IoMailSharp, 
    MdOutlineInsertComment, FiBell 
    ,AiOutlineSetting} from "../../../Icons/index"



export const notifications :notificationType[] = [ 
{
label:"Ken accepts your invitation",
Icon:AiOutlineLike,
color:"text-blue-400"
}, 
{
label:"Report from LT Company",
    Icon:FcDocument,
color:"text-green-400"
},
{
    label:"4 Private Mails",
    Icon:IoMailSharp,
    color:"text-red-400"
},
{
    label:"3 Comments to your Post",
    Icon:MdOutlineInsertComment,
    color:"text-green-400"
    }, 
    {
    label:"New Version of RNS app",
        Icon:AiOutlineSetting,
        color:"text-gray-400"
    },
    {
        label:"15 Notifications from Social Apps",
        Icon:FiBell,
        color:"text-blue-200"
        },


]