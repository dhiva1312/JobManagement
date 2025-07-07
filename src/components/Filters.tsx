import { TextInput, Select, RangeSlider, Group, Divider, Text, rem, Flex } from '@mantine/core';
import { IconSearch, IconMapPin, IconUser } from '@tabler/icons-react';

export default function JobFilterBar() {
  return (
    <Flex
      align="center"
      justify="space-between"
      gap="md"
      px="md"
      py="sm"
      style={{
        backgroundColor: '#fff',
        // borderBottom: '2px solid #007bff',
        borderRadius: rem(8),
        marginTop: rem(50),
      }}
    >
      {/* Search */}
      <TextInput
        placeholder="Search By Job Title, Role"
        leftSection={<IconSearch size={16} />}
        w={rem(250)}
        size="sm"
        variant="unstyled"
      />

      <Divider orientation="vertical" />

      {/* Location Select */}
      <Select
        placeholder="Preferred Location"
        data={['Chennai', 'Bangalore', 'Coimbatore']}
        leftSection={<IconMapPin size={16} />}
        size="sm"
        w={rem(180)}
        variant="unstyled"
      />

      <Divider orientation="vertical" />

      {/* Job Type Select */}
      <Select
        placeholder="Job Type"
        data={['Full Time', 'Part Time', 'Internship']}
        leftSection={<IconUser size={16} />}
        size="sm"
        w={rem(150)}
        variant="unstyled"
      />

      <Divider orientation="vertical" />

      {/* Salary Range */}
      <Flex direction="column" gap={4} w={rem(250)}>
        <Text size="xs" fw={500}>
          Salary Per Month
        </Text>
        <Text size="xs" ta="right">
          ₹50k - ₹80k
        </Text>
        <RangeSlider
          min={10000}
          max={100000}
          step={5000}
          value={[0, 80000]}
          label={(value) => `₹${value / 1000}k`}
          size="xs"
          color="dark"
        />
        
      </Flex>
    </Flex>
  );
}
