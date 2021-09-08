import { Button, Heading, Pane, ShareIcon, Text, TickCircleIcon } from "evergreen-ui";
import React from "react";

const Offered = ({ selectedOffer }) => {
  return (
    <Pane height="60vh">
      {selectedOffer && (
        <Pane display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100%">
          <Heading size={900} marginBottom={10}>
            Offer Sent!
          </Heading>
          <Text fontSize={20}>
            Great, <b>{selectedOffer[0].fullName}</b> will recieve your offer soon!
          </Text>
          <TickCircleIcon marginTop={20} size={30} color="success"/>
        </Pane>
      )}
       <Button position="absolute" bottom={0} left="45%" iconAfter={ShareIcon}>
        Share
      </Button>
    </Pane>
  );
};

export default Offered;
