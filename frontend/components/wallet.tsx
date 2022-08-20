import { useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Button, Box, Flex, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { injected, formatAddress } from '../utils/web3'
import { UserRejectedRequestError } from '@web3-react/injected-connector'
import { DEFAULT_COLOR_SCHEME } from '../utils/constants'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { toast } from "react-toastify";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useLazyQuery, useMutation } from '@apollo/client'
import { useAccount, useSigner } from 'wagmi'
import { useAppState } from "../context/appState";
import { GET_CHALLENGE, AUTHENTICATION } from '../api/queries';


const Wallet = () => {
    const { address } = useAccount();
    const [getChallenge, challengeData] = useLazyQuery(GET_CHALLENGE)
    const [mutateAuth, authData] = useMutation(AUTHENTICATION)
    const { data: signer } = useSigner();
    const { authToken, setAuthToken } = useAppState();
    console.log('authToken -> ', authToken);
    


    useEffect(() => {
        console.log("challengeData.data -> ", challengeData.data);
        signIn();
        
    }, [challengeData.data]);
    const signIn = async () => {

        const handleSign = async () => {
            if (!challengeData.data || !signer) return
            const signature = await signer.signMessage(challengeData.data.challenge.text);
            window.sessionStorage.setItem('signature', JSON.stringify({
                sig: signature,
                derivedVia: 'ethers.signer.signMessage',
                signedMessage: challengeData.data.challenge.text,
                address: address,
            }))
            mutateAuth({
                variables: {
                    request: {
                        address: address,
                        signature,
                    },
                },
            });
        }

        const response = await handleSign();
        console.log('response -> ', response);
    }

    useEffect(() => {
        if (!authData.data) return
  
        window.sessionStorage.setItem('lensToken', authData.data.authenticate.accessToken)
  
        setAuthToken(true)
        console.log('auth token set -> ', authData.data);
  
      }, [authData.data])

    const loginWithLens = () => {
        if (!address) {
            alert('must sign in with metamask first');
        }

        console.log('login: address', address);

        getChallenge({ 
          variables: {
            request: {
              address: address,
            },
          },
        })
    }

    return (
        <>
            <Menu>
                <Flex>
                    <ConnectButton style={{ marginRight: '12px'}} />
                    {address && authToken ? 'logged in to lens' : <Button onClick={loginWithLens}>Login to Lens</Button>}
                </Flex>
            </Menu>
        </>
    )
}

export default Wallet;