import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import CircleProgressBar from '../../components/dashboard/CircleProgressBar'
import MobileNavBar from '../../components/dashboard/MobileNavBar'

const Dashboard = () => {
  return (
    <>
      <Flex w="100%" h="100vh" direction="column" backgroundColor={'#16191C'}>
        {/* <QuizCardList QuizCards={cardData} /> */}
        <Flex direction="column" flexGrow={1} alignItems="center">
          <Flex
            direction={'row'}
            p="1em"
            borderRadius={'0.5em'}
            color={'white'}
            className="glass"
            w="95%"
            mt={'1em'}
          >
            <Avatar
              size="lg"
              src="https://avatars.githubusercontent.com/u/63567962?s=96&v=4"
              bg="transparent"
            />
            <Flex flexGrow={1} direction="column" pl="1.5em">
              <Text>German Hornus</Text>
              <Text>Points: as 1213123</Text>
            </Flex>
          </Flex>
          <Flex justifyContent={'center'} gap={4}>
            <CircleProgressBar
              passed={37}
              errors={9}
              speedAnimation={5}
              title={'genin'}
            />
            <CircleProgressBar
              passed={91}
              errors={1}
              speedAnimation={3}
              title={'chunin'}
            />
            <CircleProgressBar
              passed={7}
              errors={2}
              speedAnimation={5}
              title={'chounin'}
            />
          </Flex>
        </Flex>
        {/*<Leaderboard />*/}
        <Box display={{ md: 'none' }}>
          <MobileNavBar />
        </Box>
      </Flex>
    </>
  )
}

export default Dashboard
