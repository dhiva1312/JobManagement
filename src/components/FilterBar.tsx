import { Box, rem } from "@mantine/core";
// import logo from '../../public/logo.png';
import { useState } from "react";
import CreateJobModal from "./ModalForm";
import JobFilterBox from "../components/Filters"
import { Job } from '../app/page'

export default function FilterPage({
  onAddjob,
}: {
  onAddjob: (job: Job) => void;
}){
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <Box w={rem(1440)} h={rem(214)} mx="auto" style={{
        // backgroundColor: '#ddd', 
        // display: 'flex',
        // justifyContent: 'center',   
        // alignItems: 'center',       
        // opacity: 1,     
                   
      }}>
           <Box
      w={rem(890)}
      h={rem(80)}
      mx="auto"
      mt={rem(21)}
      style={{
        // border: '1px solid #ccc',
        borderRadius: rem(122),
        backgroundColor: 'white',
        boxShadow: '0px 0px 20px 0px #7F7F7F26',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        paddingLeft: rem(26),
        paddingRight: rem(26),
        position: 'relative',
      }}
    >
        <Box
  style={{
    width: rem(838),
    height: rem(48),
    // marginTop: rem(16),
    // marginLeft: rem(26),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }}
>
      {/* 🟢 Logo */}
      
      <Box
        w={rem(44)}
        h={rem(44.67)}
        style={{ marginRight: rem(20), marginTop: rem(1.66) ,  display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',}}
      >
        <img
          src="./logo.png"
          alt="Logo"
          width={44}
          height={44}
          style={{ display: 'block' }}
        />
      </Box>

     <Box
  style={{
    width: rem(613),
    height: rem(48),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // gap: rem(20),
    // marginLeft: rem(68), // based on your left position
  }}
>
       {/* HOME tab with nested frame inside the active box */}
<Box
  style={{
    width: rem(102), // outer pill
    height: rem(48),
    borderRadius: rem(12),
    padding: rem(5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#F3E8FF',
    // gap: rem(10),
  }}
>
  {/* Inner frame inside Home tab */}
  <Box
    style={{width: rem(92),height: rem(38),borderRadius: rem(10),padding: `${rem(8)} ${rem(24)}`,display: 'flex',alignItems: 'center',justifyContent: 'center',
      gap: rem(10),}}>
    <span
      style={{
        fontSize: rem(14),
        lineHeight: rem(22),
        width: rem(44),
        height: rem(22),

        fontFamily: '"Satoshi Variable", sans-serif',
        // fontWeight: 600,

        color: '#303030',
        
      }}
    >
      Home
    </span>
  </Box>
</Box>


 {/* FIND JOBS tab with inner frame and styled text */}
<Box
  style={{
    width: rem(130), // outer container
    height: rem(48),
    borderRadius: rem(12),
    padding: rem(5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
   
    // gap: rem(10),
  }}
>
  {/* Inner frame */}
  <Box
    style={{
      width: rem(120),
      height: rem(38),
      borderRadius: rem(10),
      padding: `${rem(8)} ${rem(24)}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      
      gap: rem(10),
    }}
  >
    <span
      style={{
        fontFamily: '"Satoshi Variable", sans-serif',
        // fontWeight: 600,
        fontSize: rem(14),
        lineHeight: rem(22),
        color: '#303030',
        width: rem(72),
        height: rem(22),
      }}
    >
      Find Jobs
    </span>
  </Box>
</Box>

      {/* 🔵 FIND TALENTS Tab with inner frame and styled text */}
<Box
  style={{
    width: rem(146),
    height: rem(48),
    borderRadius: rem(12),
    padding: rem(5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  
    // gap: rem(10),
  }}
>
  <Box
    style={{
      width: rem(136),
      height: rem(38),
      borderRadius: rem(10),
      padding: `${rem(8)} ${rem(24)}`,
      backgroundColor: '#FFFFFF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    //   gap: rem(10),
    }}
  >
    <span
      style={{
        fontFamily: '"Satoshi Variable", sans-serif',
        // fontWeight: 600,
        fontSize: rem(14),
        lineHeight: rem(22),
        color: '#303030',
        width: rem(88),
        height: rem(22),
      }}
    >
      Find Talents
    </span>
  </Box>
</Box>

       {/* 🟢 ABOUT US Tab */}
<Box
  style={{
    width: rem(123),
    height: rem(48),
    borderRadius: rem(12),
    padding: rem(5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    gap: rem(10),
  }}
>
  <Box
    style={{
      width: rem(113),
      height: rem(38),
      borderRadius: rem(10),
      padding: `${rem(8)} ${rem(24)}`,
      backgroundColor: '#FFFFFF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: rem(10),
    }}
  >
    <span
      style={{
        fontFamily: '"Satoshi Variable", sans-serif',
    
        fontSize: rem(14),
        lineHeight: rem(22),
        color: '#303030',
        width: rem(65),
        height: rem(22),
      }}
    >
      About Us
    </span>
  </Box>
</Box>

       {/* 🟣 TESTIMONIALS Tab */}
<Box
  style={{
    width: rem(148),
    height: rem(48),
    borderRadius: rem(12),
    padding: rem(5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#F3E8FF',
    // gap: rem(11.14),
  }}
>
  <Box
    style={{
      width: rem(138),
      height: rem(38),
      borderRadius: rem(10),
      padding: `${rem(8)} ${rem(24)}`,
      backgroundColor: '#FFFFFF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    //   gap: rem(10),
    }}
  >
    <span
      style={{
        fontFamily: '"Satoshi Variable", sans-serif',
    
        fontSize: rem(14),
        lineHeight: rem(22),
        color: '#303030',
        width: rem(90),
        height: rem(22),
      }}
    >
      Testimonials
    </span>
  </Box>
</Box>

      </Box>

      {/* 🟣 Create Job Button with outer + gradient inner frame */}
<Box
  style={{
    width: rem(133),
    height: rem(48),
    borderRadius: rem(12),
    padding: rem(5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // gap: rem(11.14),
  }}
>
  <Box  onClick={() => setModalOpen(true)}
    style={{
      width: rem(123),
      height: rem(38),
      borderRadius: rem(30),
      padding: `${rem(8)} ${rem(24)}`,
      background: 'linear-gradient(180deg, #A128FF 0%, #6100AD 113.79%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor:'pointer',
    //   gap: rem(10),
    }}
  >
    <span
      style={{
        color: '#ffffff',
        fontSize: rem(14),
        fontWeight: 600,
        fontFamily: '"Satoshi Variable", sans-serif',
      }}
    >
      Create Job
    </span>
  </Box>
    
  </Box>
</Box>


    </Box>
    <CreateJobModal opened={modalOpen} onClose={() => setModalOpen(false)} onAddjob={onAddjob} />
      <JobFilterBox/>
        </Box>
        
    )
}