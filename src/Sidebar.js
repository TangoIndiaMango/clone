import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import PeopleIcon from '@mui/icons-material/People';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ChatIcon from '@mui/icons-material/Message';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreOutlined from '@mui/icons-material/ExpandMore';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import { useStateValue } from './StateProvider';


function Sidebar() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className='sidebar'>
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow Icon = {LocalHospitalIcon} title = "COVID-19 Information center" />
      <SidebarRow Icon={EmojiFlagsIcon} title=" Pages" />
      <SidebarRow Icon={PeopleIcon} title=" Friends" />
      <SidebarRow Icon={ChatIcon} title=" Messenger" />
      <SidebarRow Icon={StorefrontIcon} title=" Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title=" Videos" />
      <SidebarRow Icon={ ExpandMoreOutlined } title=" Marketplace " />
    </div>
  )
}

export default Sidebar;
