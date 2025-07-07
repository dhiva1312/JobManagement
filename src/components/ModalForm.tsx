'use client';

import {
  Modal,
  Box,
  Text,
  Button,
  TextInput,
  Textarea,
  Select,
  Group,
  rem,
  Grid,
} from '@mantine/core';
    import { DateInput } from '@mantine/dates';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { useForm, Controller } from 'react-hook-form';
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Job } from '../app/page';
type FormValues = {
  Jobtitle: string;
  companyName: string;
  location: string;
  jobType: string;
  minSalary: string;
  maxSalary: string;
  deadline: Date | null;
  jobDescription: string;
};

type Props = {
  opened: boolean;
  onClose: () => void;
  onAddjob: (job: Job) => void;
};

export default function CreateJobModal({ opened, onClose, onAddjob }: Props) {
  const { register, handleSubmit, reset, control } = useForm<FormValues>();


  const onsubmit = (data: FormValues) => {
  const newJob: Job = {
    logo: './amazon.png',
    jobTitle: data.Jobtitle,
    experience: '1-3 yr Exp',
    location: data.location,
    salary: `₹${data.minSalary} - ₹${data.maxSalary}`,
    badgeText: 'Just Now',
    title: ''
  };

  console.log("new job added", newJob);
  onAddjob(newJob);
  onClose();
  reset();
};

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={
          <Text
            style={{
              fontFamily: 'Satoshi Variable, sans-serif',
              fontWeight: 700,
              fontSize: rem(24),
              color: '#222222',
              textAlign:"center"
              
            }}
          >
            Create Job Opening
          </Text>
        }
      centered
     styles={{
          content: {
            width: '848px',
            height: '779px',
            position: 'absolute',
            top: '80px',
            left: '426px',
            borderRadius: '16px',
            opacity: 1,
            transform: 'rotate(0deg)',
          },
        }}
    >
      <form onSubmit={handleSubmit(onsubmit)}>

  <Grid gutter="md">
    {/* Row 1: Job Title & Company Name */}
    <Grid.Col span={6}>
      <Box
  w={376}
  h={91}
  style={{ gap: 6, display: 'flex', flexDirection: 'column' }}
>
  <Text
    style={{
      width: 376,
      height: 27,
      fontFamily:'Satoshi Variable, sans-serif',
      fontWeight: 600,
      fontSize: 14,
      
      color: '#636363',
    }}
  >
    Job Title
  </Text>

  <TextInput
    placeholder="e.g Full Stack Developer"
    {...register('Jobtitle')}
    styles={{
      input: {
        width: 376,
        height: 58,
        borderRadius: 10,
        border: '1px solid #BCBCBC',
        fontSize: 16,
      },
    }}
  />
</Box>
    </Grid.Col>
    <Grid.Col span={6}>
      <Box
  w={376}
  h={91}
  style={{ gap: 6, display: 'flex', flexDirection: 'column' }}
>
  <Text
    style={{
      width: 376,
      height: 27,
      fontFamily: 'Satoshi Variable, sans-serif',
      fontWeight: 600,
      fontSize: 14,
     
      color: '#636363',
    }}
  >
    Company Name
  </Text>

  <TextInput
    placeholder="Amazon, Microsoft, Swiggy"
    {...register('companyName')}
    styles={{
      input: {
        width: 376,
        height: 58,
        borderRadius: 10,
        border: '1px solid #BCBCBC',
        fontSize: 16,
      },
    }}
  />
</Box>
    </Grid.Col>

    {/* Row 2: Location & Job Type */}
    <Grid.Col span={6} style={{}}>
      

<Box
  w={376}
  h={91}
  style={{ gap: 6, display: 'flex', flexDirection: 'column' }}
>
  <Text
    style={{
      width: 376,
      height: 27,
      fontFamily:  'Satoshi Variable, sans-serif',
      fontWeight: 600,
      fontSize: 14,
      lineHeight: '100%',
      letterSpacing: 0,
      color: '#636363',
    }}
  >
    Location
  </Text>

  <Controller
    name="location"
    control={control}
    render={({ field }) => (
      <Select
        placeholder="Choose Preferred Location"
        data={['Chennai', 'Bangalore', 'Coimbatore', 'Remote']}
        value={field.value}
        onChange={(value) => field.onChange(value)}
        onBlur={field.onBlur}
        styles={{
          input: {
            width: 376,
            height: 58,
            borderRadius: 10,
            border: '1px solid #BCBCBC',
            fontSize: 16,
          },
          dropdown: {
            zIndex: 9999,
          },
        }}
      />
    )}
  />
</Box>

    </Grid.Col>
    <Grid.Col span={6}>
      
<Box
  w={376}
  h={91}
  style={{ gap: 6, display: 'flex', flexDirection: 'column' }}
>
 
<Text
      style={{
         width: 376,
      height: 27,
      fontFamily: 'Satoshi Variable, sans-serif',
      fontWeight: 600,
      fontSize: 14,
      
      color: '#636363',
      }}
    >
      Job Type
    </Text>
  <Controller
    name="jobType"
    control={control}
    render={({ field }) => (
      <Select
        placeholder="FullTime"
        data={['FullTime', 'PartTime', 'Contract', 'Internship']}
        value={field.value}
        onChange={field.onChange}
        onBlur={field.onBlur}
        styles={{
          input: {
            width: 376,
            height: 58,
            borderRadius: 10,
            border: '1px solid #BCBCBC',
            fontSize: 16,
          },
        }}
      />
    )}
  />
</Box>
    </Grid.Col>

    {/* Row 3: Salary Range & Deadline */}
    <Grid.Col span={6}>
  <Box
    style={{
      width: 376,
      height: 91,
      gap: 6,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
    }}
  >
    <Text
      style={{
        fontSize: 14,
        fontWeight: 600,
        fontFamily: 'Satoshi Variable, sans-serif',
        color: '#636363',
      }}
    >
      Salary Range
    </Text>

    <Group  >
      <TextInput
        placeholder="₹ 0"
        leftSection={<span>⇅</span>}
        {...register('minSalary')}
        
        styles={{
          input: {
            borderRadius: 10,
            border: '1px solid #BCBCBC',
            fontSize: 14,
             width: 180,
          height: 48,
          },
        }}
      />
      <TextInput
        placeholder="₹ 12,00,000"
        leftSection={<span>⇅</span>}
        {...register('maxSalary')}
        
        styles={{
          input: {
            borderRadius: 10,
            border: '1px solid #BCBCBC',
            fontSize: 14,
            width: 180,
          height:48,
          },
        }}
      />
    </Group>
  </Box>
</Grid.Col>

<Grid.Col span={6}>
  <Box
    style={{
      width: 376,
      height: 91,
      gap: 6,
      
    }}
  >
    <Text
      style={{
        fontWeight:600,
        fontSize:14,
        
        fontFamily: 'Satoshi Variable, sans-serif',
        color: '#636363',
      }}
    >
      Application Deadline
    </Text>

    <Group  >
<Controller
  name="deadline"
  control={control}
  render={({ field }) => (
    <DateInput
      placeholder="Pick date"
      value={field.value}
      onChange={field.onChange}
      nextIcon={<IconChevronRight size={16} />}
      previousIcon={<IconChevronLeft size={16} />}
      styles={{
        input: {
          borderRadius: 10,
          border: '1px solid #BCBCBC',
          fontSize: 14,
          width: 376,
          height: 58,
        },
      }}
    />
  )}
/>
    </Group>
  </Box>
</Grid.Col>




    {/* Row 4: Job Description (Full width) */}
    <Grid.Col span={12}>
  
    {/* Label */}
    <Text
      style={{
        fontSize: 14,
        fontWeight: 600,
        fontFamily: 'Satoshi Variable, sans-serif',
        color: '#636363',
        
        marginBottom: 8,
      }}
    >
      Job Description
    </Text>

    {/* Textarea */}
    <Textarea
      placeholder="Please share a description to let the candidate know more about the job role"
      minRows={6}
      {...register('jobDescription')}
      styles={{
        input: {
          backgroundColor: '#FFFFFF',
          border: '1px solid #BCBCBC',
          borderRadius: 10,
          height: 169,
          resize: 'none',
        },
      }}
    />
 
</Grid.Col>


    {/* Row 5: Buttons */}
    <Grid.Col span={12}>
      <Group justify="space-between" mt="md">
       <Button
  variant="outline"
  radius="md"
  style={{
    width: 232,
    height: 59,
    borderRadius: 10,
    padding: '16px 60px',
    border: '1.5px solid #222222',
    background: '#FFFFFF',
    boxShadow: '0px 0px 4px 0px #00000040',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  }}
>
  <Text
    style={{
      fontFamily: 'Satoshi Variable, sans-serif',
    //   fontWeight: 600,
      fontSize: 20,
      lineHeight: '100%',
      color: '#222222',
    }}
  >
    Save Draft
  </Text>

  <RiArrowDownDoubleLine size={20} color='black'  />
</Button>

        <Button
      type='submit'
      radius="md"
      style={{
        width: 207,
        height: 59,
        borderRadius: 10,
        padding: '16px 60px',
        gap: 10,
        background: '#00AAFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: 600,
          fontFamily: 'Satoshi Variable, sans-serif',
          lineHeight: '100%',
          color: '#FFFFFF',
        }}
      >
        Publish
      </Text>
      <MdOutlineKeyboardDoubleArrowRight size={20} color='#FFFFFF'/>
    </Button>
      </Group>
    </Grid.Col>
  </Grid>
</form>

    </Modal>
  );
}
