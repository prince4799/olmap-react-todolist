import { useEffect, useRef, useState } from "react";
import { Box, Button, Center, Container, HStack, Input, VStack, Text, Avatar, Icon } from "@chakra-ui/react";
import { onAuthStateChanged,getAuth, GoogleAuthProvider, signInWithPopup,signOut } from "firebase/auth";
import * as defaults from './firebase'
import { FaGoogle, } from "react-icons/fa6";
import { getFirestore, addDoc, collection, serverTimestamp, onSnapshot, query, orderBy } from "firebase/firestore";

const auth = getAuth(defaults.app);
const db=getFirestore(defaults.app)



function ChatApp() {
    const [user, setUser] = useState<any>(false)
    const [message,setMessage]=useState<string|number>('')
    const [messages,setMessages]=useState<any>([])
    const q= query(collection(db,"Messages"),orderBy('createAt','asc'))
    // const scrollRef=useRef(null)

    const authListener= onAuthStateChanged(auth,(data)=>{
        setUser(data);
    })

    // const 
    const unsubscribeMessages= onSnapshot(q,(snap)=>{

        setMessages(snap.docs.map((item)=>{const id=item.id;
                return {id,...item.data()}}))
        
    })
// if(scrollRef!=null)
    // scrollRef.current.scrollIntoView({behaviour:'smooth'})


    useEffect(()=>{
        return ()=>{authListener(); unsubscribeMessages()}
    },[])
    const loginHandler = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }

    const  logOuthandler=()=>signOut(auth)

    const submitHandler=async (e:SubmitEvent)=>{
        e.preventDefault()
        // console.log(message);
        try {
                await addDoc(collection(db,'Messages'),{
                    text:message,
                    uri:user?.photoURL??' ',
                    uid:user?.uid?? ' ',
                    createAt:serverTimestamp()
                })

                setMessage('')
                // scrollRef.current.scrollIntoView({behaviour:'smooth'})


        } catch (error) {
            alert(error)
        }
        
    }
    

    return (
        <Box bg='whitesmoke'>
            {user ?
                <Container bg='blue.100' h={'100vh'} paddingY={'2%'} >
                    <VStack h='full'>
                        {/* <Center > */}
                        <Button onClick={logOuthandler} w='full' colorScheme='blue' size='lg' alignSelf={'center'}>Logout</Button>
                        {/* </Center> */}

                        <VStack h='full' w='full' bg='blue.50' overflowX={'auto'}>
                            
                            {
                                messages.map((item:any)=>{
                                    return <Message key={item.id} message={item.text} uri={item.uri} user={item.uid===user.uid?'me':'other'} />
                                })
                            }
                            {/* <div ref={scrollRef}></div> */}
                        </VStack>
                        <form style={{ width: '100%' }}>
                            <HStack w='full'>
                                <Input  value={message} onChange={(e:any)=> {
                                    console.log("jasldfhalsdf",e.target.value)
                                    setMessage(e.target.value )}} placeholder="Enter Message" bg={'whitesmoke'} />
                                <Button onClick={(e:SubmitEvent)=>submitHandler(e)} type="submit" colorScheme="green">Send</Button>
                            </HStack>
                        </form>
                    </VStack>

                </Container> :
                <VStack h={'100vh'} justifyContent={'center'}  >
                    <Button onClick={loginHandler} leftIcon={<FaGoogle/>} colorScheme="purple" >SignIn with Google</Button>
                </VStack> }

        </Box>
    )
}

export default ChatApp;


function Message({ message, uri, user }: any) {
    return (
        <HStack alignSelf={user === 'me' ? 'flex-end' : 'flex-start'} bg='lightgray' borderRadius={'base'} paddingX={'4'} paddingY={'1'} margin={'1'}>
            {user === 'me' ? <Text>{message}</Text> : null}
            <Avatar src={uri} />
            {user !== 'me' ? <Text>{message}</Text> : null}
        </HStack>
    )
}



