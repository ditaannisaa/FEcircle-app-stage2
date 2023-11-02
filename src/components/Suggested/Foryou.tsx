import { 
    Card, 
    CardBody, 
    CardHeader, 
    Heading, 
    Stack,
    Avatar, 
    Box,
    Text,
    Button,
    Spacer
} from '@chakra-ui/react'
import { useState } from 'react'

export default function Foryou() {
    const [follow, setFollow] = useState(false)

    const handleFollow = () => {
        setFollow(!follow)
    }

  return (
    <Card p={4} bg={'#262626'}>
        <CardHeader mb={4}>
            <Heading fontWeight={'medium'}>Suggested for You</Heading>
        </CardHeader>
        <CardBody>
            <Stack>
                <Box display={'flex'}>
                    <Box>
                        <Avatar h={'40px'}/>
                    </Box>
                    <Box>
                        <Text fontSize={12}>Mochammed Jawir</Text>
                        <Text fontSize={12}>@mjawir</Text>
                    </Box>
                    <Spacer/>
                    <Box>
                        <Button
                        border={'1px solid #fff'}
                        borderRadius={10}
                        fontSize={'10px'}
                        p={2}
                        >
                            Following
                        </Button>
                    </Box>
                </Box>
                <Box display={'flex'}>
                    <Box>
                        <Avatar h={'40px'}/>
                    </Box>
                    <Box>
                        <Text fontSize={12}>Anastasia</Text>
                        <Text fontSize={12}>@antsia</Text>
                    </Box>
                    <Spacer/>
                    <Box>
                        <Button
                        border={'1px solid #fff'}
                        borderRadius={10}
                        fontSize={'10px'}
                        p={2}
                        >
                            Follow
                        </Button>
                    </Box>
                </Box>
            </Stack>
        </CardBody>
    </Card>
  )
}
