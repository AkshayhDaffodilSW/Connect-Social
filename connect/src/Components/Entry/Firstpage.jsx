import React , {useState}from 'react'

import Login from './Login';
import Register from './Register';

import { 
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel,
    Text 
} from '@chakra-ui/react'   
import AlertMessage from './AlertMessage';

function Firstpage() {

    const [status , setStatus] = useState("");
    const [message , setMessage] = useState("");

    function isThereProblem(stat , mess){
        setStatus(stat);
        setMessage(mess);
    }

  return (
    <div>
    
        <Tabs 
        isFitted variant='enclosed'
        mx={"auto"} my={"10%"}
        maxW="600px" 
        minH= "500px" maxH = "1000px"
        size="lg" 
        align='center'
        boxShadow='2xl'
        rounded='md'>
        
             <TabList>
                <Tab 
                _selected={{
                    backgroundColor:"rgb(4 210 233 )" ,
                    color:"white"
                }} 
                color="rgb(4 210 233 )">
                    <Text 
                    fontWeight={800}>
                        Login
                    </Text>
                </Tab>

                <Tab 
                _selected={{
                    backgroundColor:"rgb(233 4 4 / 68%)" ,
                    color:"white" 
                }}
                color="rgb(233 4 4 / 68%)">
                    <Text 
                    fontWeight={800}>
                        Sign Up
                    </Text>
                </Tab>
            </TabList>


            <TabPanels>
                <TabPanel>
                    <Login checker={isThereProblem}/>
                </TabPanel>
                <TabPanel>
                    <Register checker={isThereProblem}/>
                </TabPanel> 
            </TabPanels>
            {(status !== "") ? 
            <AlertMessage status={status} message ={message}/>
            :
            <div/>}
        </Tabs>
        
                          
      
    </div>
  )
}

export default Firstpage
