"use client"
import "@aws-amplify/ui-react/styles.css"
import { Amplify } from 'aws-amplify'
import awsconfig from "../aws-exports"
// import Top from "./top"
import PageMain from "./pagemain"
import { AmplifyProvider, Authenticator, Button, Flex, Image, Text, View, withAuthenticator } from '@aws-amplify/ui-react'
import Generated from "./generated"
Amplify.configure({...awsconfig, ssr:true})

function Home() {
  return(
    <AmplifyProvider>
      <View>
        <h1>Home</h1>
        <PageMain/>
        {/* <Top/> */}
        {/* <Generated/> */}
      </View>
      <Authenticator>
        {({signOut, user})=>(
          <Flex
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          alignContent="flex-start"
          wrap="nowrap"
          gap="1rem"
          textAlign="center"
        >
          <View width="100%">
            logo
            {/* <Image src={logo} alt="logo" width={240} height={240} /> */}
          </View>

          {user && (
            <View width="100%">
              <Text>Hello {user.username}</Text>
              <Button onClick={signOut}>
                <Text>Sign Out</Text>
              </Button>
            </View>
          )}
        </Flex>
        )}
      </Authenticator>
    </AmplifyProvider>
  )
}

export default withAuthenticator(Home)