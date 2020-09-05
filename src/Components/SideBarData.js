import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";



 const SideBarData =  [
    {
        title: 'Home',
        icon: <AiIcons.AiFillHome/> ,
        path: '/',
        cName: 'nav-text'
    },
    {
        title: 'Reports',
        icon: < IoIcons.IoIosPaper/> ,
        path: '/reports',
        cName: 'nav-text'
    },
    {
        title: 'Products',
        icon: < FaIcons.FaCartPlus/> ,
        path: '/products',
        cName: 'nav-text'
    },
    {
        title: 'Team',
        icon: < IoIcons.IoMdPeople/> ,
        path: '/team',
        cName: 'nav-text'
    },
    {
        title: 'Messages',
        icon: < FaIcons.FaEnvelopeOpenText/> ,
        path: '/messages',
        cName: 'nav-text'
    },
    {
        title: 'Support',
        icon: < IoIcons.IoMdHelpCircle/> ,
        path: '/support',
        cName: 'nav-text'
    }
]



export default  SideBarData;