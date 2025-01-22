import VisionImage from "../../assets/icons/Core.png";
import MissionImage from "../../assets/icons/cpu_1104950.png";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';

const visionMissionContent = [
    {
      title: "Vision",
      image: VisionImage,
      icon:RemoveRedEyeOutlinedIcon,
      items: [
        {
          text: "To be a leader in driving digital transformation by delivering innovative, user-centric technology solutions efficiently and sustainably."
        },
        {
          text: "To empower businesses and individuals with accessible, cutting-edge technology that shapes a smarter, more efficient future."
        }
      ]
    },
    {
      title: "Mission",
      image: MissionImage,
      icon:SyncAltOutlinedIcon,
      items: [
        {
          text: "To simplify complex processes by creating intuitive and efficient tech solutions that enhance productivity and growth."
        },
        {
          text: "To foster a collaborative environment where creativity, reliability, and excellence drive every project we undertake."
        }
      ]
    }
  ];

  export default visionMissionContent;