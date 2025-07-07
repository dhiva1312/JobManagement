'use client';

import {
  Box,
  Text,
  Button,
  Image,
  Group,
  Stack,
  rem,
} from '@mantine/core';
import { BiUserPlus } from "react-icons/bi";
import { RiBuildingLine } from "react-icons/ri";
import { PiStack } from "react-icons/pi";
type JobCardProps = {
  logo: string;
  jobTitle: string;
  experience: string;
  location: string;
  salary: string;
  badgeText: string;
};

export default function JobCard({
  logo,
  jobTitle,
  experience,
  location,
  salary,
  badgeText,
}: JobCardProps) {
  return (
    <Box
      w={rem(316)}
      h={rem(350)}
      bg="#FFFFFF"
      p="md"
      bdrs={rem(12)}
      style={{

        boxShadow: '0px 0px 14px 0px rgba(6, 0, 0, 0.15)',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Logo + Badge */}
      <Group justify="space-between" style={{ display: "flex" }}>
        <Box
          w={rem(83.46)}
          h={rem(82)}
          p={rem(8)} // centers the image
          bg="white"
          style={{
            border: '1px solid #FFFFFF',
            borderRadius: rem(13.18),
            boxShadow: '0px 0px 10.25px 0px #94949440',
            background: 'linear-gradient(180deg, #FEFEFD 0%, #F1F1F1 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 1,

          }}
        >
          <Image
            src={logo}
            width={rem(65.89)}
            height={rem(65.89)}
            alt="Company Logo"
            radius="md"
          />
        </Box>

        <Box
          w={rem(75)}
          h={rem(33)}
          px={rem(10)}
          py={rem(7)}
          bg="#B0D9FF"
          style={{
            borderRadius: rem(10),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            size={rem(14)}
            fw={500}
            style={{
              color: '#000000',
              lineHeight: 1,
            }}
          >
            24h Ago
          </Text>
        </Box>

      </Group>

      {/* Job Title */}
      <Text fw={700} size="md" mt="sm">
        {jobTitle}
      </Text>

      {/* Icons Section */}
      <Group gap="xs" mt="xs" wrap="wrap" align="center">
        <Text size="sm" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <BiUserPlus size={15} /> {experience}
        </Text>
        <Text size="sm" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <RiBuildingLine size={15} /> {location}
        </Text>
        <Text size="sm" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <PiStack size={15} /> {salary}
        </Text>
      </Group>


      {/* Job Description */}
      <Stack gap={2} mt="xs">
        <Text size="xs" color="gray.7">
          • A user-friendly interface lets you browse stunning photos and videos
        </Text>
        <Text size="xs" color="gray.7">
          • Filter destinations based on interests and travel style, and create personalized
        </Text>
      </Stack>

      {/* Apply Button */}
      <Button
        fullWidth
        radius="md"
        size="md"
        mt="md"
        styles={{
          root: {
            background: 'linear-gradient(180deg, #00A2FF 0%, #0079D1 100%)',
            fontWeight: 600,
          },
        }}
      >
        Apply Now
      </Button>
    </Box>
  );
}
