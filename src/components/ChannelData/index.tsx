import React, {useRef, useEffect} from "react";
import ChannelMessage, {Mention} from "../ChannelMessage";
import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";


const ChannelData: React.FC =() => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;
        if(div){
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef])
    return(
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(15).keys()).map((n)=>(

                    <ChannelMessage 
                    author="Raine Bernadoque" 
                    date="18/11/2021" 
                    content="Te amo" />
                    ))}

                <ChannelMessage 
                author="Guilherme Gomes" 
                date="18/11/2021" 
                content={
                    <>
                        <Mention>@Wesley Bernadoque</Mention>, me carrega no LoL de novo por favor?
                    </>
                }
                isBot
                hasMention
                />

            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre"/>
                <InputIcon />
            </InputWrapper>
        </Container>
    )
}

export default ChannelData;